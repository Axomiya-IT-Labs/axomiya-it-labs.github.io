# Project content guide

Project pages are Astro content collection entries in `src/content/projects/`. Add matching English and Assamese files under `en/` and `as/` using the same filename and `translationSlug`.

Example paths:

```text
src/content/projects/en/my-project.md
src/content/projects/as/my-project.md
```

## Frontmatter

```yaml
---
title: My Project
description: A concise summary of the project.
pubDate: 2026-11-14
lang: en
translationSlug: my-project
status: In development
category: AI & ML
tags:
  - Assamese
  - Open Source
repo: https://github.com/organization/project
demo: https://example.org/
heroImage: /assets/images/projects/my-project.webp
tech_stack:
  - TypeScript
  - Astro
---
```

Keep the same `translationSlug` and equivalent metadata on the Assamese entry. A pending translation must include `lang: as`, `placeholder: true`, a title prefixed with `[AS] `, the Assamese pending message `অসমীয়া অনুবাদ শীঘ্ৰই আহি আছে।`, and a link to the English page. Do not machine-translate project prose.

Images referenced by `ogImage` or `heroImage` must exist beneath `public/`; use a root-relative URL such as `/assets/images/projects/my-project.webp`. The Astro build generates a 1200×630 OG image at `/og/{lang}/projects/{translationSlug}.png`. It uses `ogImage` first, then `heroImage`, as the background when that file exists and overlays the title and description; otherwise it creates a branded gradient card.

## Preview and validation

Run `pnpm dev` to preview locally and `pnpm build` before submitting. The static build includes both locales. Keep `src/content.config.ts` schemas in sync when adding project fields.
