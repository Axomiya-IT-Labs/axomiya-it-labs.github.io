# Contributing to Axomiya IT Labs

The website is a bilingual Astro static site. English routes use the root (`/`); Assamese routes use `/as/`. Content is authored in Markdown or MDX and deployed to GitHub Pages.

## Repository map

```text
src/content/blog/{en,as}/             Articles and tutorials
src/content/announcements/{en,as}/    Published announcements
src/content/projects/{en,as}/         Project pages
src/content/pages/{en,as}/            Static content pages
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

- Every English content entry should have a paired Assamese entry with the same `translationSlug`.
- Use `lang: en` or `lang: as` in frontmatter.
- Until a real Assamese translation is available, mark the Assamese entry `placeholder: true`, prefix its title with `[AS] `, include `অসমীয়া অনুবাদ শীঘ্ৰই আহি আছে।`, and link to its English counterpart.
- Do not machine-translate article or project prose. Replace the placeholder with reviewed Assamese text when ready.
- Do not remove the pending marker until the Assamese content is substantive.

## Static assets and generated OG images

Place static assets under `public/` and reference them with absolute site paths beginning with `/`. Current shared icons are in `public/social/`, the shared OG fallback is `public/brand/og-image.webp`, and content images are in `public/assets/images/`. The OG route generator uses each entry's `ogImage` or `heroImage` when that path exists and overlays the title and description; otherwise it creates a branded card. Assamese text is rendered with the bundled Noto Sans Bengali font.

## Pull requests

1. Make a focused change and preserve existing content fields.
2. Run `pnpm build` and review the relevant URLs in the local preview.
3. Include screenshots or a clear description for visual changes.
4. Open a pull request with a concise summary and any known limitations.
