# Research and blog article guide

Research articles and tutorials are blog content collection entries in `src/content/blog/`. Add equivalent files in both `en/` and `as/` with the same filename and `translationSlug`.

```text
src/content/blog/en/my-article.md
src/content/blog/as/my-article.md
```

MDX is supported for English articles that need Astro components. Keep ordinary prose in Markdown where possible.

## Frontmatter

```yaml
---
title: A Clear Article Title
description: A one or two sentence summary.
pubDate: 2026-11-14
lang: en
translationSlug: a-clear-article-title
author: Rakibul Islam
categories:
  - Tutorials
tags:
  - AI
heroImage: /assets/images/articles/example.webp
---
```

Use matching `translationSlug` values for the Assamese counterpart. If a translation is not ready, add an Assamese placeholder entry with `lang: as`, `placeholder: true`, a `[AS] ` title, the visible pending message `অসমীয়া অনুবাদ শীঘ্ৰই আহি আছে।`, and a link back to the English article. Do not machine-translate prose.

## Images and Open Graph

Put static images under `public/` and reference them with root-relative paths. For example, `/assets/images/articles/example.webp` maps to `public/assets/images/articles/example.webp`. The build generates a 1200×630 OG PNG at `/og/{lang}/blog/{translationSlug}.png`. When `ogImage` or `heroImage` exists, it becomes the card background; Astro overlays the article title, category, and description. Without either image, the generator uses the branded background. Assamese OG text uses the bundled Noto Sans Bengali font.

## Local workflow

Run `pnpm dev` while writing and `pnpm build` to generate and verify the static pages, search indexes, feeds, and OG images. The GitHub Pages workflow installs with pnpm and deploys `dist/`.
