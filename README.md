# Axomiya IT Labs

The bilingual Axomiya IT Labs site is built with Astro and deployed as a static site to GitHub Pages. English is served at the root (`/`); Assamese pages live under `/as/`.

## Run locally

```powershell
pnpm install
pnpm dev
```

Open the local URL printed by Astro. Build and check the static output with:

```powershell
pnpm build
pnpm preview
```

The build also creates Pagefind indexes and content-aware Open Graph PNGs. The deploy workflow uses pnpm.

## Content and translations

Content lives under `src/content/{blog,announcements,projects,pages}/{en,as}/`. Read [CONTRIBUTE.md](CONTRIBUTE.md) for the bilingual content conventions, and the focused guides for [projects](PROJECT.md) and [research articles](RESEARCH.md).

Assamese placeholder entries are deliberately marked `placeholder: true`, paired with their English counterpart using the same `translationSlug`, and must retain the visible translation-pending message until a real translation replaces it.

## Assets

Static files live in `public/`. Existing content images are under `public/assets/images/`; shared icon assets are in `public/social/`; the brand fallback is `public/brand/og-image.webp`. OG cards are generated from content at build time, using `ogImage` or `heroImage` as the background when available and the page title and description as overlays.
