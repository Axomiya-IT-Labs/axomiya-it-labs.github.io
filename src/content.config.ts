import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const locale = z.enum(['en', 'as']);
const shared = {
	title: z.string(),
	description: z.string(),
	pubDate: z.coerce.date(),
	updatedDate: z.coerce.date().optional(),
	heroImage: z.string().optional(),
	ogImage: z.string().optional(),
	lang: locale,
	translationSlug: z.string(),
	placeholder: z.boolean().optional(),
};

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: z.object({ ...shared, author: z.string().optional(), categories: z.array(z.string()).optional(), permalink: z.string().optional() }).passthrough(),
});
const announcements = defineCollection({
	loader: glob({ base: './src/content/announcements', pattern: '**/*.{md,mdx}' }),
	schema: z.object({ ...shared, author: z.string().optional(), type: z.string().optional(), category: z.string().optional(), tags: z.array(z.string()).optional() }).passthrough(),
});
const projects = defineCollection({
	loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
	schema: z.object({ ...shared, status: z.string().optional(), category: z.string().optional(), tags: z.array(z.string()).optional(), repo: z.string().optional(), demo: z.string().optional(), tech_stack: z.array(z.string()).optional(), looking_for: z.array(z.string()).optional() }).passthrough(),
});
const pages = defineCollection({
	loader: glob({ base: './src/content/pages', pattern: '**/*.{md,mdx}' }),
	schema: z.object({ title: z.string(), lang: locale, translationSlug: z.string(), description: z.string().default(''), placeholder: z.boolean().optional(), ogImage: z.string().optional() }).passthrough(),
});

export const collections = { blog, announcements, projects, pages };
