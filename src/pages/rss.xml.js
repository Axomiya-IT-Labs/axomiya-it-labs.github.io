import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog', ({ data }) => data.lang === 'en' && !data.placeholder);
  return rss({
    title: 'Axomiya IT Labs',
    description: 'Assam\'s first AI & open-source community.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.data.translationSlug}/`,
    })),
    customData: `<language>en-IN</language>`,
  });
}