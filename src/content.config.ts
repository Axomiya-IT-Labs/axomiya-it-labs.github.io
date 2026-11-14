import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const locale = z.enum(['en', 'as']);

const shared = {
  title: z.string(),
  description: z.string().default(''),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  heroImage: z.string().optional(),
  ogImage: z.string().optional(),
  lang: locale,
  translationSlug: z.string(),
  placeholder: z.boolean().default(false),
};

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({ 
    ...shared, 
    author: z.string().optional(), 
    categories: z.array(z.string()).default([]),
  }).passthrough(),
});

const research = defineCollection({
  loader: glob({ base: './src/content/research', pattern: '**/*.{md,mdx}' }),
  schema: z.object({ 
    ...shared, 
    author: z.string().optional(), 
    categories: z.array(z.string()).default([]),
  }).passthrough(),
});

const announcements = defineCollection({
  loader: glob({ base: './src/content/announcements', pattern: '**/*.{md,mdx}' }),
  schema: z.object({ 
    ...shared, 
    author: z.string().optional(), 
    type: z.string().optional(), 
    category: z.string().optional(), 
    tags: z.array(z.string()).default([]) 
  }).passthrough(),
});

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: z.object({ 
    ...shared, 
    status: z.string().default('Idea'), 
    category: z.string().optional(), 
    tags: z.array(z.string()).default([]), 
    repo: z.string().url().optional(), 
    demo: z.string().url().optional(), 
    website: z.string().url().optional(),
    tech_stack: z.array(z.string()).default([]), 
    logo: z.string().optional(), // New field for project logo
    target_audience: z.string().optional(), // Who is this for?
    why_built: z.string().optional(), // Why was it built?
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]), // FAQ
  }).passthrough(),
});

export const collections = { blog, research, announcements, projects };