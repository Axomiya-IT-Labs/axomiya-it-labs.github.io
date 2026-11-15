# Contributing to Axomiya IT Labs

First of all, thank you for considering contributing to **Axomiya IT Labs**.

Axomiya IT Labs is built by and for a community dedicated to democratizing technology, artificial intelligence, and open knowledge across Assam and beyond. Our community thrives because individuals with different talents — from writers and translators to students, designers, and software engineers — come together to build things that matter.

**You do NOT need to be a programmer to contribute.** Whether you want to translate a single paragraph into Assamese, suggest a new AI tool, fix a typo, design a graphic, or write code, your help is warmly welcomed and deeply valued.

---

## Table of Contents

- [Repository and Project Directory Map](#repository-and-project-directory-map)
- [How Non-Developers Can Contribute](#how-non-developers-can-contribute)
  - [1. Assamese Language Translation and Review](#1-assamese-language-translation-and-review)
  - [2. Writing Content and Guides](#2-writing-content-and-guides)
  - [3. Voice and Regional Data Contribution](#3-voice-and-regional-data-contribution)
  - [4. Design, Graphics and UI/UX](#4-design-graphics-and-uiux)
  - [5. Bug Reporting and Community Feedback](#5-bug-reporting-and-community-feedback)
- [How Developers Can Contribute](#how-developers-can-contribute)
  - [1. Prerequisites and Local Environment Setup](#1-prerequisites-and-local-environment-setup)
  - [2. Project Architecture and Code Stack](#2-project-architecture-and-code-stack)
  - [3. Working with Bilingual Content](#3-working-with-bilingual-content)
  - [4. Step-by-Step: Adding a New Content Entry](#4-step-by-step-adding-a-new-content-entry)
  - [5. Git Workflow and Pull Request Guidelines](#5-git-workflow-and-pull-request-guidelines)
- [Contributor Recognition and Credits](#contributor-recognition-and-credits)
- [Community Guidelines and Code of Conduct](#community-guidelines-and-code-of-conduct)
- [Need Help or Have Questions?](#need-help-or-have-questions)

---

## Repository and Project Directory Map

Here is an overview of where files and directories are located in this repository:

```text
axomiya-it-labs.github.io/
├── public/                               # Static files served directly at root
│   ├── brand/                            # Official branding assets
│   │   ├── logo.png                      # Primary community logo
│   │   └── og-image.webp                 # Default Open Graph social preview
│   ├── assets/                           # Media organized by section
│   │   ├── announcements/                # Banners for community announcements
│   │   ├── blog/                         # Hero images for blog posts
│   │   ├── hero/                         # Hero video and animations
│   │   ├── projects/                     # Project icons and logos (WhatAfter12, Krittimat, etc.)
│   │   ├── research/                     # Banners for research articles
│   │   └── team/                         # Contributor and team photos
│   ├── social/                           # Platform SVG icons (GitHub, Telegram, etc.)
│   └── llms.txt                          # LLM discovery index file
│
├── src/                                  # Source code of the web platform
│   ├── content/                          # Markdown and MDX content collections
│   │   ├── announcements/
│   │   │   ├── en/                       # English announcements
│   │   │   └── as/                       # Assamese announcements (paired by translationSlug)
│   │   ├── blog/
│   │   │   ├── en/                       # English blog tutorials and guides
│   │   │   └── as/                       # Assamese blog posts
│   │   ├── projects/
│   │   │   ├── en/                       # English project profiles
│   │   │   └── as/                       # Assamese project profiles
│   │   └── research/
│   │       ├── en/                       # English analytical research articles
│   │       └── as/                       # Assamese research articles
│   │
│   ├── components/                       # Modular UI components (Astro and MDX)
│   │   ├── Header.astro                  # Top navigation bar
│   │   ├── Footer.astro                  # Comprehensive footer with brand links
│   │   ├── Hero.astro                    # Homepage hero section
│   │   ├── ContentCard.astro             # Reusable card for articles and projects
│   │   ├── LanguageToggle.astro          # English / Assamese switch
│   │   ├── ThemeToggle.astro             # Dark / Light mode toggle
│   │   ├── SearchModal.astro             # Client-side Pagefind search
│   │   └── mdx/                          # MDX-specific presentation widgets
│   │
│   ├── data/                             # Structured data files
│   │   ├── team.json                     # Contributor and team directory
│   │   └── lastUpdated.json              # Automated update timestamps
│   │
│   ├── i18n/                             # Internationalization configuration
│   │   ├── ui.ts                         # Static UI string dictionaries (en/as)
│   │   └── utils.ts                      # Locale route helpers and path translators
│   │
│   ├── layouts/                          # Page wrappers and SEO metadata
│   │   └── BaseLayout.astro              # Base HTML document layout
│   │
│   ├── pages/                            # Astro file-based routes
│   │   ├── index.astro                   # English homepage (/)
│   │   ├── about.astro                   # About Us page (/about/)
│   │   ├── community.astro               # Community links (/community/)
│   │   ├── contribute.astro              # Contribute landing page (/contribute/)
│   │   ├── team.astro                    # Team and contributor page (/team/)
│   │   ├── 404.astro                     # Not Found fallback
│   │   ├── as/                           # Assamese mirror routes (/as/...)
│   │   ├── blog/                         # Blog listing and post detail routes
│   │   ├── projects/                     # Projects listing and detail routes
│   │   ├── research/                     # Research listing and detail routes
│   │   └── announcements/                # Announcements listing and detail routes
│   │
│   ├── styles/                           # Global Tailwind and custom CSS styles
│   └── content.config.ts                 # Astro Content Collections schemas and validation
│
├── astro.config.mjs                      # Astro build configuration
├── package.json                          # Dependencies and npm scripts
├── tsconfig.json                         # TypeScript configuration
├── CONTRIBUTING.md                       # This contributor guide
└── README.md                             # Project overview and introduction
```

---

## How Non-Developers Can Contribute

You do not need to write code to make a significant impact on our community. Here are the primary ways you can help:

### 1. Assamese Language Translation and Review
We aim for all content to be available in both English and natural, easy-to-read Assamese.
* **Replace Translation Placeholders:** Any Assamese entries in `src/content/{projects,blog,research,announcements}/as/` marked `placeholder: true` can be replaced with full, human-reviewed Assamese text.
* **Proofread and Refine:** If you notice grammatical errors or awkward technical translations in Assamese pages, suggest clearer regional vocabulary.
* **How to submit:**
  * Open a [GitHub Issue](https://github.com/Axomiya-IT-Labs/axomiya-it-labs.github.io/issues) with the title `Translation: [Article/Project Name]` and paste your Assamese text.
  * Or send your translation directly in our [Telegram Community](https://t.me/AxomiyaITLabs).

### 2. Writing Content and Guides
* **Educational Guides:** Write plain-language explanations of AI concepts, prompt engineering tips, or coding introductions suitable for beginners.
* **Career Clarity Articles:** Share accurate information about college degrees, vocational courses, competitive exams, or scholarships in Assam for our WhatAfter12 initiative.
* **AI Tool Reviews:** Suggest or review helpful AI tools for our Krittimat directory.

### 3. Voice and Regional Data Contribution
* **Speech Recordings:** For our Assamese Voice AI project, we collect audio recordings of spoken Assamese across regional dialects to train speech-to-text models.
* **Word Lists and Regional Terms:** For the Open Assam Data Hub, we welcome lists of everyday Assamese vocabulary, technical terminology, and regional knowledge datasets.

### 4. Design, Graphics and UI/UX
* **Visual Assets:** Create project logos, icons, diagrams, or social media banners for public announcements.
* **User Experience Feedback:** Test our apps on mobile and desktop devices and share suggestions on how we can improve navigation and accessibility.

### 5. Bug Reporting and Community Feedback
* **Report Issues:** If an image fails to load, a link is broken, or a sentence has a typo, let us know by opening an issue on GitHub or posting in our Telegram group.
* **Help Learners:** Answer questions from students and newcomers joining our community chat.

---

## How Developers Can Contribute

If you want to contribute code, build features, or improve project infrastructure, follow the instructions below.

### 1. Prerequisites and Local Environment Setup

Make sure you have:
* **Node.js:** Version 22.0.0 or newer
* **Package Manager:** `pnpm` (version 9 or 10 recommended)
* **Git:** Installed on your machine

#### Installation and Running Locally

1. **Fork and clone the repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/axomiya-it-labs.github.io.git
   cd axomiya-it-labs.github.io
   ```

2. **Install project dependencies:**
   ```bash
   pnpm install
   ```

3. **Start the local development server:**
   ```bash
   pnpm dev
   ```
   Astro will provide a local URL (typically `http://localhost:4321/`). Open it in your browser. Live reloading is enabled automatically.

4. **Verify production build and static preview:**
   ```bash
   pnpm build
   pnpm preview
   ```
   *Note: `pnpm build` generates the static HTML in `dist/`, builds the Pagefind search indexes, and renders localized Open Graph images.*

---

### 2. Project Architecture and Code Stack

* **Framework:** [Astro 5](https://astro.build/) (Static Site Generation / SSG)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) with design tokens for typography, dark/light themes, and responsive layouts
* **Search:** [Pagefind](https://pagefind.app/) for fast, client-side, privacy-respecting bilingual search
* **Language:** TypeScript
* **Hosting:** GitHub Pages with automated deployment via GitHub Actions

---

### 3. Working with Bilingual Content

All articles, projects, announcements, and research papers are defined as Astro Content Collections in `src/content.config.ts`.

#### Content Rules:
1. **Paired Locales:** Every piece of content belongs to either the `en` (English) or `as` (Assamese) folder.
2. **Translation Slug:** The English and Assamese files **MUST** share the exact same `translationSlug` in their frontmatter. This links the two versions together for the language switcher.
3. **Placeholder Status:** If an Assamese translation is still in progress, set `placeholder: true` in the Assamese frontmatter, include the notice `অসমীয়া অনুবাদ শীঘ্ৰই আহি আছে।`, and link to the English version. When providing a complete translation, set `placeholder: false`.

---

### 4. Step-by-Step: Adding a New Content Entry

#### Example: Adding a Project Entry

1. **Create the English file:** `src/content/projects/en/my-cool-project.md`
   ```yaml
   ---
   title: "My Cool Project"
   status: "Live" # Options: Idea, Coming Soon, Beta, Live
   category: "AI & Education"
   tags:
     - Open-Source
     - Assamese-AI
   tech_stack:
     - Python
     - Next.js
   repo: "https://github.com/Axomiya-IT-Labs/my-cool-project"
   demo: "https://my-cool-project.vercel.app"
   lang: en
   translationSlug: my-cool-project
   description: "A brief one-line description of the project."
   logo: "/assets/projects/my-cool-project.svg"
   pubDate: "2026-11-15"
   placeholder: false
   ---

   ## What It Solves
   Describe the problem this project addresses...

   ## Key Features
   - Feature 1
   - Feature 2
   ```

2. **Create the Assamese counterpart:** `src/content/projects/as/my-cool-project.md`
   ```yaml
   ---
   title: "My Cool Project"
   status: "Live"
   category: "AI & Education"
   tags:
     - Open-Source
     - Assamese-AI
   tech_stack:
     - Python
     - Next.js
   repo: "https://github.com/Axomiya-IT-Labs/my-cool-project"
   demo: "https://my-cool-project.vercel.app"
   lang: as
   translationSlug: my-cool-project
   description: "প্ৰকল্পটোৰ চমু বিৱৰণ ইয়াত লিখক।"
   logo: "/assets/projects/my-cool-project.svg"
   pubDate: "2026-11-15"
   placeholder: false
   ---

   ## এই প্ৰকল্পই কি সমাধান কৰে
   সমস্যাৰ বিৱৰণ ইয়াত দিয়ক...

   ## মূল বৈশিষ্ট্যসমূহ
   - বৈশিষ্ট্য ১
   - বৈশিষ্ট্য ২
   ```

3. **Add any assets:** Place logos or screenshots inside `public/assets/projects/`.

---

### 5. Git Workflow and Pull Request Guidelines

1. **Create a new branch:**
   ```bash
   git checkout -b feature/short-description
   # or
   git checkout -b fix/issue-name
   ```

2. **Make your changes:**
   Keep changes clean, focused, and well-organized.

3. **Test thoroughly:**
   Run `pnpm build` to ensure there are no build errors, broken Markdown references, or missing frontmatter fields.

4. **Commit and push:**
   ```bash
   git add .
   git commit -m "Add new project: My Cool Project"
   git push origin feature/short-description
   ```

5. **Open a Pull Request (PR):**
   * Clearly explain what was added, updated, or fixed.
   * If you made visual changes to the website UI, please attach a screenshot.
   * Reference any related issues (e.g., `Fixes #12`).

---

## Contributor Recognition and Credits

Every person who contributes — whether writing code, translating, or writing documentation — is recognized as part of Axomiya IT Labs:

* **Team and Contributors Directory:** Regular contributors are featured on our official [Team & Contributors Page](https://axomiya-it-labs.github.io/team/) (configured in `src/data/team.json`).
* **Release Notes:** Contributors are acknowledged in our public release announcements.
* **Community Highlights:** We regularly highlight community contributions in our Telegram group and social channels.

To add yourself to `src/data/team.json` with your photo and social links after a contribution, submit a pull request or contact a maintainer.

---

## Community Guidelines and Code of Conduct

To keep Axomiya IT Labs an inclusive, safe, and productive space for everyone:

* **Be Respectful and Patient:** We have members with varying levels of experience. Treat everyone with courtesy and constructive encouragement.
* **Collaborate in the Open:** Provide helpful, actionable feedback. Focus discussions on ideas and code, never on individuals.
* **Foster Inclusivity:** Anyone passionate about learning and building is welcome, regardless of technical background, age, or identity.
* **Keep Knowledge Free:** Prioritize open-source tools, clear documentation, and public knowledge sharing.

---

## Need Help or Have Questions?

If you are stuck, unsure where to start, or want to discuss an idea before submitting a pull request, we are here to support you:

* **Telegram Group:** [https://t.me/AxomiyaITLabs](https://t.me/AxomiyaITLabs)
* **GitHub Issues:** [https://github.com/Axomiya-IT-Labs/axomiya-it-labs.github.io/issues](https://github.com/Axomiya-IT-Labs/axomiya-it-labs.github.io/issues)
* **Official Website:** [https://axomiya-it-labs.github.io](https://axomiya-it-labs.github.io)

Thank you for contributing to Axomiya IT Labs.
