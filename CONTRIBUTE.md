# Contributing to Axomiya IT Labs

The website is a bilingual Astro static site. English routes use the root (`/`); Assamese routes use `/as/`. Content is authored in Markdown or MDX and deployed to GitHub Pages.

## Repository map

```text
src/content/blog/{en,as}/             Articles and tutorials
src/content/research/{en,as}/         Research articles
src/content/announcements/{en,as}/    Published announcements
src/content/projects/{en,as}/         Project pages
src/pages/                             Static and dynamic Astro routes
src/components/                       Astro UI components
src/data/                             Typed site data modules
src/i18n/                             Locale labels and path helpers
src/layouts/                          Shared layouts and SEO metadata
src/pages/                            Route definitions and generated endpoints
src/styles/                           Global styles
public/                               Static assets copied to dist/
```

See [PROJECT.md](PROJECT.md) for project entries and [RESEARCH.md](RESEARCH.md) for articles.

## Set up and build

Use Node.js 22 or newer and pnpm (the repository pins its package manager version in `package.json`):

```powershell
pnpm install
pnpm dev
pnpm build
pnpm preview
```

The production build creates static pages in `dist/`, Pagefind language indexes, sitemap and RSS files, and per-content Open Graph PNGs. The GitHub Actions Pages workflow also uses pnpm.

## Translation rules

- Every English blog, research, announcement, and project entry should have a paired Assamese entry with the same `translationSlug`.
- Use `lang: en` or `lang: as` in frontmatter.
- Until a reviewed Assamese translation is available, mark the Assamese entry `placeholder: true`, include `অসমীয়া অনুবাদ শীঘ্ৰই আহি আছে।`, and link to its English counterpart. Keep the English title as the placeholder title; page titles are not automatically stripped of a `[AS]` prefix.
- Do not machine-translate article or project prose. Replace the placeholder with reviewed Assamese text when ready.
- Do not remove the pending marker until the Assamese content is substantive.

## Static assets and generated OG images

Place static assets under `public/` and reference them with root-relative site paths beginning with `/`. Shared icons are in `public/social/`, the shared OG fallback is `public/brand/og-image.webp`, and current media is organized under `public/assets/hero/`, `public/assets/announcements/`, and `public/assets/team/`. Content pages use generated OG cards; other routes use the shared brand image. Assamese text uses the bundled Noto Sans Bengali font.

## Pull requests

1. Make a focused change and use the fields defined in `src/content.config.ts`.
2. Run `pnpm build` and review the relevant URLs in the local preview.
3. Include screenshots or a clear description for visual changes.
4. Open a pull request with a concise summary and any known limitations.
