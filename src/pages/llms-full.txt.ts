import { getCollection } from 'astro:content';
import { SITE_TITLE } from '../consts';
const clean = (text: string) => text
  .replace(/^import\s+.*;\s*$/gm, '')
  .replace(/<\/?[A-Z][^>]*>/g, '')
  .replace(/<[^>]+>/g, ' ')
  .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
  .replace(/[`*_>#]/g, '')
  .replace(/\s+/g, ' ')
  .trim();
export async function GET() {
  const [posts, projects] = await Promise.all([
    getCollection('blog', (entry) => entry.data.lang === 'en' && !entry.data.placeholder),
    getCollection('projects', (entry) => entry.data.lang === 'en' && !entry.data.placeholder),
  ]);
  const sections = [
    `# ${SITE_TITLE} — Full content`,
    ...posts.map((entry) => `## Blog: ${entry.data.title}\n\nURL: https://axomiya-it-labs.github.io/blog/${entry.data.translationSlug}/\n\n${clean(entry.body)}`),
    ...projects.map((entry) => `## Project: ${entry.data.title}\n\nURL: https://axomiya-it-labs.github.io/projects/${entry.data.translationSlug}/\n\n${clean(entry.body)}`),
  ];
  return new Response(`${sections.join('\n\n---\n\n')}\n`, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
