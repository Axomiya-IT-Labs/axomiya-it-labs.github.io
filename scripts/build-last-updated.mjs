import { execSync } from 'node:child_process';
import { readdir, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';

const ROOT = process.cwd();
const CONTENT = path.join(ROOT, 'src', 'content');
const SECTIONS = ['blog', 'projects', 'announcements', 'pages'];
const LANGS = ['en', 'as'];
const OUT = path.join(ROOT, 'src', 'data', 'lastUpdated.json');

async function walk(dir, out = []) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(full, out);
    else if (/\.(md|mdx)$/i.test(entry.name)) out.push(full);
  }
  return out;
}

async function lastCommitDate(file) {
  try {
    const rel = path.relative(ROOT, file).replace(/\\/g, '/');
    const iso = execSync(`git log -1 --format=%cI -- "${rel}"`, { encoding: 'utf8' }).trim();
    if (iso) return iso;
  } catch {}
  const s = await stat(file);
  return s.mtime.toISOString();
}

const map = {};
for (const section of SECTIONS) {
  for (const lang of LANGS) {
    const dir = path.join(CONTENT, section, lang);
    try {
      for (const f of await walk(dir)) {
        const rel = path.relative(CONTENT, f).replace(/\\/g, '/');
        map[rel] = await lastCommitDate(f);
      }
    } catch {}
  }
}

// Ensure directory exists
import { mkdir } from 'node:fs/promises';
await mkdir(path.join(ROOT, 'src', 'data'), { recursive: true });
await writeFile(OUT, JSON.stringify(map, null, 2) + '\n', 'utf8');
console.log(`✓ Generated lastUpdated.json for ${Object.keys(map).length} files.`);