import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog', ({ data }) => data.lang === 'as' && !data.placeholder);
  return rss({
    title: 'Axomiya IT Labs (অসমীয়া)',
    description: 'অসমৰ প্ৰথম AI আৰু মুক্ত-উৎস সম্প্ৰদায়।',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/as/blog/${post.data.translationSlug}/`,
    })),
    customData: `<language>as-IN</language>`,
  });
}