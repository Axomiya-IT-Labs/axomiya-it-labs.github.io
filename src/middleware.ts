import { defineMiddleware } from 'astro:middleware';

// Keep this in sync with legacy research permalinks for published blog entries.
const knownBlogSlugs = new Set(['ai-problem-breakdown']);

export const onRequest = defineMiddleware((context, next) => {
	const match = context.url.pathname.match(/^\/research\/([^/]+)\/?$/);
	if (match && knownBlogSlugs.has(match[1])) {
		return context.redirect(`/blog/${match[1]}/`, 301);
	}
	return next();
});
