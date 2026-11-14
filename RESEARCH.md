# Research and blog article guide

Research articles are entries in the `research` content collection at `src/content/research/`. Add equivalent files in both `en/` and `as/` with the same filename and `translationSlug`. Tutorials and general posts belong in the separate `blog` collection at `src/content/blog/`.

```text
src/content/research/en/my-article.md
src/content/research/as/my-article.md
```

Markdown is supported for research articles; MDX is also supported when an article needs Astro components. Keep ordinary prose in Markdown where possible.

## Frontmatter

```yaml
---
title: A Clear Research Article Title
description: A one or two sentence summary.
pubDate: 2026-11-14
lang: en
translationSlug: a-clear-research-article
author: Rakibul Islam
categories:
  - Tutorials
tags:
  - AI
heroImage: /assets/articles/example.webp
---
```

Use matching `translationSlug` values for the Assamese counterpart. If a translation is not ready, add an Assamese placeholder entry with `lang: as`, `placeholder: true`, the visible pending message `অসমীয়া অনুবাদ শীঘ্ৰই আহি আছে।`, and a link back to the English article. Keep the English title as the placeholder title because detail pages display it verbatim. Do not machine-translate prose.

## Images and Open Graph

Put static images under `public/` and reference them with root-relative paths. For example, `/assets/articles/example.webp` maps to `public/assets/articles/example.webp`. English research OG images are served at `/og/research/{translationSlug}.png`; Assamese research images use `/og/as/research/{translationSlug}.png`. Blog OG images follow the same pattern under `/og/blog/`. The generator creates a branded card containing the site name, locale, and title; it does not use `ogImage` or `heroImage` as a background. `heroImage` is displayed on the article detail page. Assamese OG text uses the bundled Noto Sans Bengali font.

## Local workflow

Run `pnpm dev` while writing and `pnpm build` to generate static pages, search indexes, feeds, and OG images. The GitHub Pages workflow installs with pnpm and deploys `dist/`.
