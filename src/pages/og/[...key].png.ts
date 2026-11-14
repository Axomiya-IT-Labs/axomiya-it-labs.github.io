import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const WIDTH = 1200;
const HEIGHT = 630;
const brand = '#12372e';
const bengaliFont = await readFile(
	path.join(process.cwd(), 'node_modules/@fontsource/noto-sans-bengali/files/noto-sans-bengali-bengali-700-normal.woff2'),
);
const fontData = bengaliFont.toString('base64');

type CardProps = {
	title: string;
	description: string;
	lang: 'en' | 'as';
	section: string;
	translationSlug: string;
	image?: string;
	eyebrow?: string;
};

export const getStaticPaths: GetStaticPaths = async () => {
	const [blog, announcements, projects, pages] = await Promise.all([
		getCollection('blog'),
		getCollection('announcements'),
		getCollection('projects'),
		getCollection('pages'),
	]);
	const groups = [
		['blog', blog],
		['announcements', announcements],
		['projects', projects],
		['pages', pages],
	] as const;

	return groups.flatMap(([section, entries]) => entries.map((entry) => ({
		params: { key: `${entry.data.lang}/${section}/${entry.data.translationSlug}` },
		props: {
			title: entry.data.title,
			description: entry.data.description || '',
			lang: entry.data.lang,
			section,
			translationSlug: entry.data.translationSlug,
			image: entry.data.ogImage ?? ('heroImage' in entry.data ? entry.data.heroImage : undefined),
			eyebrow: 'category' in entry.data ? entry.data.category : undefined,
		} satisfies CardProps,
	})));
};

const escapeXml = (value: string) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');

function wrap(value: string, max: number, maxLines: number) {
	const words = value.trim().split(/\s+/);
	const lines: string[] = [];
	let line = '';
	for (const word of words) {
		const next = line ? `${line} ${word}` : word;
		if (next.length > max && line) {
			lines.push(line);
			line = word;
		} else line = next;
	}
	if (line) lines.push(line);
	if (lines.length > maxLines) lines[maxLines - 1] = `${lines[maxLines - 1].replace(/[.…]+$/, '')}…`;
	return lines.slice(0, maxLines);
}

function textLines(lines: string[], x: number, y: number, size: number, color: string, lineHeight: number, weight = 700) {
	return `<text x="${x}" y="${y}" fill="${color}" font-size="${size}" font-weight="${weight}">${lines.map((line, index) => `<tspan x="${x}" dy="${index === 0 ? 0 : lineHeight}">${escapeXml(line)}</tspan>`).join('')}</text>`;
}

async function localImage(image?: string) {
	if (!image?.startsWith('/')) return undefined;
	const candidate = path.resolve(process.cwd(), 'public', `.${image}`);
	const publicRoot = path.resolve(process.cwd(), 'public') + path.sep;
	if (!candidate.startsWith(publicRoot)) return undefined;
	try {
		if ((await stat(candidate)).isFile()) return await readFile(candidate);
	} catch { /* An absent hero image uses the generated brand background. */ }
	return undefined;
}

export const GET: APIRoute = async ({ props }) => {
	const card = props as CardProps;
	const source = await localImage(card.image);
	const background = source
		? await sharp(source).rotate().resize(WIDTH, HEIGHT, { fit: 'cover' }).modulate({ brightness: 0.62 }).png().toBuffer()
		: Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}"><defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#10291f"/><stop offset="1" stop-color="#17634e"/></linearGradient><pattern id="grid" width="42" height="42" patternUnits="userSpaceOnUse"><path d="M42 0H0V42" fill="none" stroke="#fff" stroke-opacity=".06"/></pattern></defs><rect width="100%" height="100%" fill="url(#bg)"/><rect width="100%" height="100%" fill="url(#grid)"/><circle cx="1080" cy="105" r="215" fill="#66d2ae" opacity=".13"/></svg>`);
	const titleLines = wrap(card.title, 25, 3);
	const descriptionLines = wrap(card.description, 60, 2);
	const titleSize = 46;
	const titleLineHeight = 56;
	const titleY = titleLines.length > 2 ? 220 : titleLines.length > 1 ? 260 : 310;
	const eyebrow = card.eyebrow || card.section;
	const overlay = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}"><defs><linearGradient id="shade" x1="0" y1="0" x2="1" y2="0"><stop stop-color="#071b16" stop-opacity=".93"/><stop offset=".78" stop-color="#071b16" stop-opacity=".48"/><stop offset="1" stop-color="#071b16" stop-opacity=".18"/></linearGradient><style>@font-face{font-family:NotoBengali;src:url(data:font/woff2;base64,${fontData}) format('woff2');font-weight:700}text{font-family:NotoBengali,'Nirmala UI',sans-serif}</style></defs><rect width="100%" height="100%" fill="url(#shade)"/><rect x="82" y="78" width="8" height="474" rx="4" fill="#83dfbd"/><text x="122" y="128" fill="#a6ebd1" font-size="23" letter-spacing="2">${escapeXml(`${eyebrow} · ${card.lang === 'as' ? 'অসমীয়া' : 'ENGLISH'}`.toUpperCase())}</text>${textLines(titleLines, 122, titleY, titleSize, '#ffffff', titleLineHeight)}${textLines(descriptionLines, 124, titleY + titleLines.length * titleLineHeight + 34, 27, '#d5e9e0', 42, 400)}<text x="122" y="572" fill="#8ce0bd" font-size="19" letter-spacing="2">AXOMIYA-IT-LABS.GITHUB.IO</text></svg>`);
	const png = await sharp(background).composite([{ input: overlay }]).png().toBuffer();
	return new Response(png, { headers: { 'Content-Type': 'image/png', 'Cache-Control': 'public, max-age=31536000, immutable' } });
};
