import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const collectionRules = {
	blog: ['title', 'description', 'pubDate', 'lang', 'translationSlug'],
	projects: ['title', 'description', 'pubDate', 'lang', 'translationSlug'],
	announcements: ['title', 'description', 'pubDate', 'lang', 'translationSlug'],
	pages: ['title', 'lang', 'translationSlug'],
};
const errors = [];
let total = 0;

function walk(directory) {
	return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
		const fullPath = path.join(directory, entry.name);
		return entry.isDirectory() ? walk(fullPath) : /\.(?:md|mdx)$/.test(entry.name) ? [fullPath] : [];
	});
}

function valueOf(frontmatter, field) {
	const match = frontmatter.match(new RegExp(`^${field}\\s*:\\s*(.*?)\\s*$`, 'm'));
	return match?.[1]?.trim().replace(/^(["'])(.*)\1$/, '$2') ?? '';
}

for (const [collection, requiredFields] of Object.entries(collectionRules)) {
	const directory = path.join(root, 'src', 'content', collection);
	const files = walk(directory);
	const bySlug = new Map();
	for (const file of files) {
		total++;
		const source = fs.readFileSync(file, 'utf8');
		const absolute = path.resolve(file);
		const frontmatterMatch = source.match(/^---\s*\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
		if (!frontmatterMatch) {
			errors.push(`${absolute}: missing YAML frontmatter block`);
			continue;
		}
		const frontmatter = frontmatterMatch[1];
		for (const field of requiredFields) {
			const value = valueOf(frontmatter, field);
			if (!value) errors.push(`${absolute}: missing required frontmatter field "${field}"`);
			if (field === 'pubDate' && value && Number.isNaN(Date.parse(value))) {
				errors.push(`${absolute}: "pubDate" is not a valid date (${value})`);
			}
		}
		const lang = valueOf(frontmatter, 'lang');
		const expectedLang = path.relative(directory, file).split(path.sep)[0];
		if (lang && !['en', 'as'].includes(lang)) errors.push(`${absolute}: "lang" must be "en" or "as" (found "${lang}")`);
		if (lang && expectedLang !== lang) errors.push(`${absolute}: folder locale is "${expectedLang}" but frontmatter lang is "${lang}"`);

		const translationSlug = valueOf(frontmatter, 'translationSlug');
		if (translationSlug) {
			const locales = bySlug.get(translationSlug) ?? new Map();
			if (locales.has(lang)) errors.push(`${absolute}: duplicate ${lang} entry for translationSlug "${translationSlug}" in ${collection}`);
			locales.set(lang, absolute);
			bySlug.set(translationSlug, locales);
		}

		const heroImage = valueOf(frontmatter, 'heroImage');
		if (heroImage && !/^(?:https?:)?\/\//i.test(heroImage)) {
			const imagePath = path.resolve(root, 'public', heroImage.replace(/^[/\\]+/, ''));
			const publicRoot = path.resolve(root, 'public') + path.sep;
			if (!imagePath.startsWith(publicRoot) || !fs.existsSync(imagePath) || !fs.statSync(imagePath).isFile()) {
				errors.push(`${absolute}: heroImage "${heroImage}" does not exist as a file under public/`);
			}
		}
	}

	for (const [translationSlug, locales] of bySlug) {
		for (const lang of ['en', 'as']) {
			if (!locales.has(lang)) {
				const counterpart = locales.values().next().value;
				errors.push(`${counterpart}: missing ${lang} pair for translationSlug "${translationSlug}" in ${collection}`);
			}
		}
	}
}

if (errors.length) {
	console.error(`Content validation failed with ${errors.length} problem(s):`);
	for (const error of errors) console.error(`- ${error}`);
	process.exitCode = 1;
} else {
	console.log(`Content validation passed: ${total} files across ${Object.keys(collectionRules).length} collections; all locale pairs, required fields, and heroImage paths are valid.`);
}
