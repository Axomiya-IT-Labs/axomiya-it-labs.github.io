# Axomiya IT Labs

The bilingual Axomiya IT Labs site is built with Astro and deployed as a static site to GitHub Pages. English is served at the root (`/`); Assamese pages live under `/as/`. The site shares practical AI and open-source learning, projects, research, and community updates rooted in Assam and open to everyone.

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

The build also creates Pagefind indexes and localized Open Graph PNGs for content pages. The deploy workflow uses pnpm.

## Content and translations

Content lives under `src/content/{blog,research,announcements,projects}/{en,as}/`. Site pages such as About and Community are Astro routes under `src/pages/`; there is no `pages` content collection. Read [CONTRIBUTE.md](CONTRIBUTE.md) for the bilingual content conventions, and the focused guides for [projects](PROJECT.md) and [research articles](RESEARCH.md).

Assamese placeholder entries are marked `placeholder: true` and paired with their English counterpart using the same `translationSlug`. Keep the visible Assamese translation-pending message and English-version link until a reviewed Assamese translation replaces the placeholder.

## Assets

Static files live in `public/`. Current media includes the hero video at `public/assets/hero/`, announcement images at `public/assets/announcements/`, team images at `public/assets/team/`, social icons at `public/social/`, and the brand fallback at `public/brand/og-image.webp`. Content OG cards are generated at `/og/{collection}/{translationSlug}.png` for English and `/og/as/{collection}/{translationSlug}.png` for Assamese, using the same branded layout in both locales and across all content collections. When an entry has a `heroImage`, it is used as the generated card background; an explicit `ogImage` can override the generated card. Other routes use the brand fallback image.
