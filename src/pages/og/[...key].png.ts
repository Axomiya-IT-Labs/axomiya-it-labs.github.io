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
          lang: entry.data.lang,
        },
      };
    })
  );
};

function escapeXml(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}

export const GET: APIRoute = async ({ props }) => {
  const { title, lang } = props as { title: string; lang: 'en' | 'as' };

  // Load Bengali font only if needed (saves build time for English pages)
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

  const safeTitle = escapeXml(title.slice(0, 120));
  const langLabel = lang === 'en' ? 'ENGLISH' : 'অসমীয়া';
  const fontFamily = lang === 'as' ? "'Bengali', 'Inter', sans-serif" : "'Inter', sans-serif";

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#0f0d0b"/>
        <stop offset="100%" stop-color="#1d1a15"/>
      </linearGradient>
    </defs>
    <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)"/>
    <rect x="0" y="0" width="${WIDTH}" height="8" fill="#e88254"/>
    ${fontFace}
    
    <!-- Top brand -->
    <text x="80" y="140" fill="#e88254" font-family="'Inter', sans-serif" font-size="32" font-weight="800" letter-spacing="4">AXOMIYA IT LABS</text>
    
    <!-- Language badge -->
    <text x="80" y="240" fill="#e88254" font-family="${fontFamily}" font-size="24" font-weight="700" letter-spacing="2">${escapeXml(langLabel)}</text>
    
    <!-- Title (wrapped manually for SVG compatibility) -->
    <foreignObject x="80" y="280" width="${WIDTH - 160}" height="${HEIGHT - 380}">
      <div xmlns="http://www.w3.org/1999/xhtml" style="font-family: ${fontFamily}; font-size: 68px; font-weight: 800; color: #f1ede6; line-height: 1.15; letter-spacing: -1px; word-wrap: break-word;">${safeTitle}</div>
    </foreignObject>
    
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