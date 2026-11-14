import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const WIDTH = 1200;
const HEIGHT = 630;

export const getStaticPaths: GetStaticPaths = async () => {
  const [blog, announcements, projects, research] = await Promise.all([
    getCollection('blog'),
    getCollection('announcements'),
    getCollection('projects'),
    getCollection('research'),
  ]);

  const groups: [string, any[]][] = [
    ['blog', blog],
    ['announcements', announcements],
    ['projects', projects],
    ['research', research],
  ];

  return groups.flatMap(([section, entries]) =>
    entries.map((entry) => {
      // English is default (no prefix). Assamese gets /as/ prefix.
      const langPrefix = entry.data.lang === 'en' ? '' : 'as/';
      return {
        params: { key: `${langPrefix}${section}/${entry.data.translationSlug}` },
        props: {
          title: entry.data.title,
          description: entry.data.description || '',
          lang: entry.data.lang,
          heroImage: entry.data.heroImage || '',
        },
      };
    })
  );
};

function escapeXml(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}

function wrapLines(value: string, maxChars: number, maxLines: number) {
  const words = value.trim().split(/\s+/).filter(Boolean);
  const lines: string[] = [];
  let line = '';

  for (const word of words) {
    const candidate = line ? `${line} ${word}` : word;
    if (candidate.length > maxChars && line) {
      lines.push(line);
      line = word;
      if (lines.length === maxLines) break;
    } else {
      line = candidate;
    }
  }

  if (line && lines.length < maxLines) lines.push(line);
  if (words.join(' ').length > lines.join(' ').length && lines.length === maxLines) {
    lines[maxLines - 1] = `${lines[maxLines - 1].replace(/[.…]+$/, '')}…`;
  }
  return lines;
}

function svgLines(lines: string[], x: number, lineHeight: number) {
  return lines.map((line, index) =>
    `<tspan x="${x}" dy="${index === 0 ? 0 : lineHeight}">${escapeXml(line)}</tspan>`
  ).join('');
}

export const GET: APIRoute = async ({ props }) => {
  const { title, description, lang, heroImage } = props as {
    title: string;
    description: string;
    lang: 'en' | 'as';
    heroImage: string;
  };

  // Use the content hero as the OG background when one is provided.
  let imageLayer = '';
  if (heroImage.startsWith('/') && !heroImage.startsWith('//')) {
    const publicRoot = path.resolve(process.cwd(), 'public');
    const imagePath = path.resolve(publicRoot, heroImage.slice(1));
    if (imagePath.startsWith(`${publicRoot}${path.sep}`)) {
      try {
        const image = await sharp(await readFile(imagePath))
          .rotate()
          .resize(WIDTH, HEIGHT, { fit: 'cover' })
          .jpeg({ quality: 88 })
          .toBuffer();
        imageLayer = `<image href="data:image/jpeg;base64,${image.toString('base64')}" x="0" y="0" width="${WIDTH}" height="${HEIGHT}" preserveAspectRatio="xMidYMid slice"/>`;
      } catch (error) {
        console.warn(`OG hero image could not be loaded (${heroImage}):`, error);
      }
    }
  }

  // Embed the Assamese font so localized glyphs render in build environments.
  let fontFace = '';
  if (lang === 'as') {
    const bengaliFontPath = path.join(
      process.cwd(),
      'node_modules/@fontsource/noto-sans-bengali/files/noto-sans-bengali-bengali-700-normal.woff2'
    );
    try {
      const bengaliFont = await readFile(bengaliFontPath);
      const fontData = bengaliFont.toString('base64');
      fontFace = `<style>@font-face{font-family:'Bengali';src:url(data:font/woff2;base64,${fontData}) format('woff2');}</style>`;
    } catch (e) {
      console.warn('Bengali font not loaded for OG image:', e);
    }
  }

  const titleLines = wrapLines(title.slice(0, 180), 30, 3);
  const descriptionLines = wrapLines(description.slice(0, 320), 88, 2);
  const langLabel = lang === 'en' ? 'ENGLISH' : 'অসমীয়া';
  const fontFamily = lang === 'as' ? "'Bengali', Arial, sans-serif" : 'Arial, sans-serif';

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#0f0d0b"/>
        <stop offset="100%" stop-color="#1d1a15"/>
      </linearGradient>
      <linearGradient id="shade" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#0b100f" stop-opacity=".52"/>
        <stop offset="42%" stop-color="#0b100f" stop-opacity=".28"/>
        <stop offset="100%" stop-color="#0b100f" stop-opacity=".88"/>
      </linearGradient>
    </defs>
    <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)"/>
    ${imageLayer}
    <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#shade)"/>
    <rect x="56" y="242" width="${WIDTH - 112}" height="300" rx="24" fill="#0b100f" fill-opacity=".2" stroke="#fffdf8" stroke-opacity=".12"/>
    <rect x="0" y="0" width="${WIDTH}" height="8" fill="#e88254"/>
    ${fontFace}
    
    <!-- Top brand -->
    <text x="80" y="140" fill="#e88254" font-family="'Inter', sans-serif" font-size="32" font-weight="800" letter-spacing="4">AXOMIYA IT LABS</text>
    
    <!-- Language badge -->
    <rect x="80" y="184" width="150" height="42" rx="21" fill="#e88254" fill-opacity=".18" stroke="#ffd0aa" stroke-opacity=".52"/>
    <text x="100" y="213" fill="#ffe1c6" font-family="${fontFamily}" font-size="20" font-weight="700" letter-spacing="2">${escapeXml(langLabel)}</text>
    
    <!-- Explicit SVG text stays visible in static renderers and social previews. -->
    <text x="80" y="294" fill="#fffdf8" font-family="${fontFamily}" font-size="50" font-weight="700" letter-spacing="-1">${svgLines(titleLines, 80, 58)}</text>
    <text x="80" y="472" fill="#f1ede6" font-family="${fontFamily}" font-size="21" font-weight="500">${svgLines(descriptionLines, 80, 29)}</text>
    
    <!-- Bottom URL -->
    <text x="80" y="${HEIGHT - 60}" fill="#b8b0a4" font-family="'Inter', sans-serif" font-size="26">axomiya-it-labs.github.io</text>
  </svg>`;

  const png = await sharp(Buffer.from(svg)).png().toBuffer();

  return new Response(new Uint8Array(png), {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
