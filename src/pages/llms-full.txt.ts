import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const [blog, projects, announcements, research] = await Promise.all([
    getCollection('blog', ({ data }) => data.lang === 'en' && !data.placeholder),
    getCollection('projects', ({ data }) => data.lang === 'en' && !data.placeholder),
    getCollection('announcements', ({ data }) => data.lang === 'en' && !data.placeholder),
    getCollection('research', ({ data }) => data.lang === 'en' && !data.placeholder),
  ]);

  const site = 'https://axomiya-it-labs.github.io';
  let out = `# Axomiya IT Labs\n\n`;
  out += `> Rooted in Assam and open to everyone. Learn AI and open source by building practical tools from local ideas, and help make technology accessible for all.\n\n`;
  out += `This bilingual site contains blog posts, research articles, projects, and announcements. English routes use the root path; Assamese routes use the /as/ prefix. Some Assamese entries remain translation placeholders and link to their English versions.\n\n`;

  out += `## Blog\n\n`;
  for (const p of blog.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())) {
    out += `### ${p.data.title}\n\n${p.data.description || ''}\n\nURL: ${site}/blog/${p.data.translationSlug}/\n\n`;
  }

  out += `## Research\n\n`;
  for (const p of research.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())) {
    out += `### ${p.data.title}\n\n${p.data.description || ''}\n\nURL: ${site}/research/${p.data.translationSlug}/\n\n`;
  }

  out += `## Projects\n\n`;
  for (const p of projects.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())) {
    out += `### ${p.data.title}\n\n${p.data.description || ''}\n\nURL: ${site}/projects/${p.data.translationSlug}/\n\n`;
  }

  out += `## Announcements\n\n`;
  for (const p of announcements.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())) {
    out += `### ${p.data.title}\n\n${p.data.description || ''}\n\nURL: ${site}/announcements/${p.data.translationSlug}/\n\n`;
  }

  return new Response(out, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
