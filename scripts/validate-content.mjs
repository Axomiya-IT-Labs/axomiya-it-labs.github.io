import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const ROOT = process.cwd();
const CONTENT = path.join(ROOT, 'src', 'content');
// Added 'research' to the list
const SECTIONS = ['blog', 'research', 'projects', 'announcements', 'pages'];
const LANGS = ['en', 'as'];

// Extremely basic YAML frontmatter extractor (just for validation, Astro will parse the real one)
const extractFrontmatter = (content) => {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return null;
  return match[1];
};

async function getFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  let files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(await getFiles(fullPath));
    } else if (entry.name.endsWith('.md') || entry.name.endsWith('.mdx')) {
      files.push(fullPath);
    }
  }
  return files;
}

async function validate() {
  let errors = 0;
  let fileCount = 0;
  const pairs = new Map();

  for (const section of SECTIONS) {
    for (const lang of LANGS) {
      const dir = path.join(CONTENT, section, lang);
      let files = [];
      try {
        files = await getFiles(dir);
      } catch (e) {
        continue; // directory might not exist yet
      }

      for (const file of files) {
        fileCount++;
        const relPath = path.relative(CONTENT, file).replace(/\\/g, '/');
        const raw = await readFile(file, 'utf-8');

        // 1. Check for BOM
        if (raw.charCodeAt(0) === 0xFEFF || raw.startsWith('\uFEFF')) {
          console.error(`❌ BOM detected: ${relPath} starts with a Byte Order Mark. Save as UTF-8 without BOM.`);
          errors++;
          continue;
        }

        // 2. Check frontmatter exists
        const fm = extractFrontmatter(raw);
        if (!fm) {
          console.error(`❌ Missing frontmatter block: ${relPath} (must start with ---)`);
          errors++;
          continue;
        }

        // 3. Check for translationSlug
        const slugMatch = fm.match(/^translationSlug:\s*["']?([^"'\r\n]+)["']?/m);
        if (!slugMatch) {
          console.error(`❌ Missing translationSlug: ${relPath}`);
          errors++;
          continue;
        }
        const slug = slugMatch[1].trim();

        // 4. Check for lang mismatch with folder
        const langMatch = fm.match(/^lang:\s*["']?([^"'\r\n]+)["']?/m);
        if (!langMatch || langMatch[1].trim() !== lang) {
          console.error(`❌ Lang mismatch: ${relPath} declares lang: ${langMatch ? langMatch[1] : 'none'}, but is in the /${lang}/ folder.`);
          errors++;
        }

        // 5. Check heroImage path if present
        const imgMatch = fm.match(/^heroImage:\s*["']?([^"'\r\n]+)["']?/m);
        if (imgMatch) {
          let imgPath = imgMatch[1].trim().replace(/^['"]|['"]$/g, '');
          if (imgPath.startsWith('/')) {
             // Strip leading slash to check in public/ folder
             const diskPath = path.join(ROOT, 'public', imgPath.slice(1));
             try {
               await readFile(diskPath);
             } catch (e) {
               console.error(`❌ Missing heroImage: ${relPath} references ${imgPath}, but the file doesn't exist in public/`);
               errors++;
             }
          }
        }

        // Track pairs
        const key = `${section}/${slug}`;
        if (!pairs.has(key)) pairs.set(key, new Set());
        pairs.get(key).add(lang);
      }
    }
  }

  // 6. Check translation pairs
  for (const [key, langs] of pairs.entries()) {
    if (!langs.has('en')) {
      console.error(`❌ Missing EN pair: ${key} exists in AS but not EN.`);
      errors++;
    }
    if (!langs.has('as')) {
      console.error(`❌ Missing AS pair: ${key} exists in EN but not AS.`);
      errors++;
    }
  }

  if (errors > 0) {
    console.error(`\nContent validation failed with ${errors} problem(s).`);
    process.exit(1);
  } else {
    console.log(`✅ Content validation passed: ${fileCount} files across ${SECTIONS.length} collections; all locale pairs, required fields, and heroImage paths are valid.`);
  }
}

validate().catch(err => {
  console.error("Validation script crashed:", err);
  process.exit(1);
});