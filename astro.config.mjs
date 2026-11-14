// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	site: 'https://axomiya-it-labs.github.io',
	i18n: { defaultLocale: 'en', locales: ['en', 'as'], routing: { prefixDefaultLocale: false, redirectToDefaultLocale: false } },
	integrations: [mdx(), sitemap({
		i18n: { defaultLocale: 'en', locales: { en: 'en', as: 'as' } },
		filter: (page) => !['/robots.txt', '/llms-full.txt'].includes(new URL(page).pathname),
		serialize(item) {
			const url = new URL(item.url);
			const pathname = url.pathname.startsWith('/as/') ? url.pathname.slice(3) : url.pathname === '/as' ? '/' : url.pathname;
			const rootPath = pathname.startsWith('/') ? pathname : `/${pathname}`;
			const asPath = rootPath === '/' ? '/as/' : `/as${rootPath}`;
			const enUrl = new URL(rootPath, 'https://axomiya-it-labs.github.io').toString();
			const asUrl = new URL(asPath, 'https://axomiya-it-labs.github.io').toString();
			return { ...item, links: [
				{ hreflang: 'en', url: enUrl },
				{ hreflang: 'as', url: asUrl },
				{ hreflang: 'x-default', url: enUrl },
			] };
		},
	})],
	vite: { plugins: [tailwindcss()] },
});
