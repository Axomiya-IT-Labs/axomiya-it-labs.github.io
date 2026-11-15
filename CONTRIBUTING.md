# Contributing to Axomiya IT Labs

First of all, thank you for considering contributing to **Axomiya IT Labs**! 🎉

Axomiya IT Labs is built by and for a passionate community dedicated to democratizing technology, artificial intelligence, and open knowledge across Assam and beyond. Our community thrives because individuals with different talents — from writers and translators to students, designers, and software engineers — come together to build things that matter.

**You do NOT need to be a programmer to contribute.** Whether you want to translate a single paragraph into Assamese, suggest a new AI tool, fix a typo, design a graphic, or write code, your help is warmly welcomed and deeply valued.

---

## 📑 Table of Contents

- [The Project & Directory Map](#-repository-and-project-directory-map)
- [How Non-Developers Can Contribute](#-how-non-developers-can-contribute)
  - [1. Assamese Language Translation & Review](#1-assamese-language-translation--review)
  - [2. Writing Content & Guides](#2-writing-content--guides)
  - [3. Voice & Regional Data Contribution](#3-voice--regional-data-contribution)
  - [4. Design, Graphics & UI/UX](#4-design-graphics--uiux)
  - [5. Bug Reporting & Community Feedback](#5-bug-reporting--community-feedback)
- [How Developers Can Contribute](#-how-developers-can-contribute)
  - [1. Prerequisites & Local Environment Setup](#1-prerequisites--local-environment-setup)
  - [2. Project Architecture & Code Stack](#2-project-architecture--code-stack)
  - [3. Working with Bilingual Content](#3-working-with-bilingual-content)
  - [4. Step-by-Step: Adding a New Content Entry](#4-step-by-step-adding-a-new-content-entry)
  - [5. Git Workflow & Pull Request Guidelines](#5-git-workflow--pull-request-guidelines)
- [Contributor Recognition & Attribution](#-contributor-recognition--credits)
- [Community Guidelines & Code of Conduct](#-community-guidelines--code-of-conduct)
- [Need Help or Have Questions?](#-need-help-or-have-questions)

---

## 🗺️ Repository and Project Directory Map

Here is an overview of where everything is located in this repository:

```text
axomiya-it-labs.github.io/
├── public/                               # Static files served directly at root
│   ├── brand/                            # Official branding assets
│   │   ├── logo.png                      # Primary community logo
│   │   └── og-image.webp                 # Default Open Graph social preview
│   ├── assets/                           # Media organized by section
│   │   ├── announcements/                # Banners for community announcements
│   │   ├── blog/                         # Hero images for blog posts
│   │   ├── hero/                         # Hero video & animations
│   │   ├── projects/                     # Project icons and logos (WhatAfter12, Krittimat, etc.)
│   │   ├── research/                     # Banners for research articles
│   │   └── team/                         # Contributor and team photos
│   ├── social/                           # Platform SVG icons (GitHub, Telegram, etc.)
│   └── llms.txt                          # LLM discovery index file
│
├── src/                                  # Source code of the web platform
│   ├── content/                          # Markdown/MDX content collections
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
│   ├── components/                       # Modular UI components (Astro & MDX)
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
│   │   └── utils.ts                      # Locale route helpers & path translators
│   │
│   ├── layouts/                          # Page wrappers and SEO metadata
│   │   └── BaseLayout.astro              # Base HTML document layout
│   │
│   ├── pages/                            # Astro file-based routes
│   │   ├── index.astro                   # English homepage (/)
│   │   ├── about.astro                   # About Us page (/about/)
│   │   ├── community.astro               # Community links (/community/)
│   │   ├── contribute.astro              # Contribute landing page (/contribute/)
│   │   ├── team.astro                    # Team & contributor page (/team/)
│   │   ├── 404.astro                     # Not Found fallback
│   │   ├── as/                           # Assamese mirror routes (/as/...)
│   │   ├── blog/                         # Blog listing and post detail routes
│   │   ├── projects/                     # Projects listing and detail routes
│   │   ├── research/                     # Research listing and detail routes
│   │   └── announcements/                # Announcements listing and detail routes
│   │
│   ├── styles/                           # Global Tailwind and custom CSS styles
│   └── content.config.ts                 # Astro Content Collections schemas & validation
│
├── astro.config.mjs                      # Astro build configuration
├── package.json                          # Dependencies and npm scripts
├── tsconfig.json                         # TypeScript configuration
├── CONTRIBUTING.md                       # This contributor guide
└── README.md                             # Project overview and introduction
```

---

## 🎨 How Non-Developers Can Contribute

You do not need to write code to make a huge impact on our community. Here are the most effective ways you can help:

### 1. Assamese Language Translation & Review
We aim for every project, tutorial, and article to be available in both English and natural, easy-to-read Assamese.
* **Replace Translation Placeholders:** Many Assamese entries in `src/content/{projects,blog,research,announcements}/as/` currently contain placeholder notes (`placeholder: true`). You can write real, reviewed Assamese translations for them!
* **Proofread & Refine:** If you spot grammatical errors, unnatural machine translations, or confusing technical phrasing in Assamese pages, suggest clearer local terminology.
* **How to submit:**
  * Open a [GitHub Issue](https://github.com/Axomiya-IT-Labs/axomiya-it-labs.github.io/issues) with the title `Translation: [Article/Project Name]` and paste your Assamese text.
  * Or send your translation directly in our [Telegram Community](https://t.me/AxomiyaITLabs).

### 2. Writing Content & Guides
* **Educational Guides:** Write plain-language explanations of AI concepts, prompt engineering tips, or coding introductions suitable for beginners.
* **Career Clarity Articles:** Share accurate information about college degrees, vocational courses, competitive exams, or scholarships in Assam for our [WhatAfter12](https://whatafter12.vercel.app/en) initiative.
* **AI Tool Reviews:** Suggest or review helpful AI tools for our [Krittimat](https://krittimat.vercel.app/en) directory.

### 3. Voice & Regional Data Contribution
* **Speech Recordings:** For our **Assamese Voice AI** project, we need clear audio recordings of spoken Assamese across various regional dialects (Kamrupi, Goalpariya, Upper Assam, etc.) to train speech-to-text models.
* **Word Lists & Regional Terms:** For the **Open Assam Data Hub**, we welcome lists of everyday Assamese vocabulary, technical terms, and regional knowledge datasets.

### 4. Design, Graphics & UI/UX
* **Visual Assets:** Create attractive project logos, icons, diagrams, or social media banners for public announcements.
* **User Experience Feedback:** Test our apps on your phone or laptop and share suggestions on how we can make our websites cleaner and easier to navigate.

### 5. Bug Reporting & Community Feedback
* **Report Broken Links or Typos:** If an image fails to load, a button does not work, or a sentence has a typo, let us know!
* **Help Fellow Learners:** Join our [Telegram Group](https://t.me/AxomiyaITLabs) and answer questions from curious students or beginners.

---

## 💻 How Developers Can Contribute

If you want to contribute code, build features, or improve our infrastructure, follow the guide below.

### 1. Prerequisites & Local Environment Setup

Make sure you have:
* **Node.js:** Version 22.0.0 or newer
* **Package Manager:** `pnpm` (version 9 or 10 recommended)
* **Git:** Installed on your computer

#### Installation & Running Locally

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

4. **Verify production build & static preview:**
   ```bash
   pnpm build
   pnpm preview
   ```
   *Note: `pnpm build` generates the static HTML in `dist/`, builds the Pagefind search indexes, and renders localized Open Graph images.*

---

### 2. Project Architecture & Code Stack

* **Framework:** [Astro 5](https://astro.build/) (Static Site Generation / SSG)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) with custom design tokens for typography, dark/light themes, and responsive layouts
* **Search:** [Pagefind](https://pagefind.app/) for fast, client-side, privacy-respecting bilingual search
* **Language:** TypeScript
* **Hosting:** GitHub Pages with automated deployment via GitHub Actions

---

### 3. Working with Bilingual Content

All articles, projects, announcements, and research papers are defined as Astro Content Collections in `src/content.config.ts`.

#### The Golden Rules of Content:
1. **Paired Locales:** Every piece of content belongs to either `en` (English) or `as` (Assamese) folder.
2. **Translation Slug:** The English and Assamese files **MUST** share the exact same `translationSlug` in their frontmatter. This connects the two versions so the language switcher works seamlessly.
3. **Placeholder Status:** If an Assamese translation is not ready yet, set `placeholder: true` in the Assamese frontmatter, include the notice `অসমীয়া অনুবাদ শীঘ্ৰই আহি আছে।`, and link to the English version.

---

### 4. Step-by-Step: Adding a New Content Entry

#### Example: Adding a New Project

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
   description: "অসমীয়া অনুবাদ শীঘ্ৰই আহি আছে।"
   logo: "/assets/projects/my-cool-project.svg"
   pubDate: "2026-11-15"
   placeholder: true
   ---

   অসমীয়া অনুবাদ শীঘ্ৰই আহি আছে।

   [Read the English version](/projects/my-cool-project/)
   ```

3. **Add any assets:** Place logos or screenshots inside `public/assets/projects/`.

---

### 5. Git Workflow & Pull Request Guidelines

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
   * If you made visual changes to the website UI, please attach a screenshot or screen recording.
   * Reference any related issues (e.g., `Fixes #12`).

---

## 🎖️ Contributor Recognition & Credits

Every person who contributes — regardless of whether they wrote 500 lines of code or translated a single paragraph — is an integral part of Axomiya IT Labs!

* **Team & Contributors Directory:** Regular contributors will be featured on our official [Team & Contributors Page](https://axomiya-it-labs.github.io/team/) (defined in `src/data/team.json`).
* **Release Notes:** Contributors are thanked and acknowledged in our public announcement releases.
* **Community Spotlight:** We highlight community contributions in our Telegram group and social media accounts.

If you have submitted a contribution and would like to be added to `src/data/team.json` with your photo and social links, feel free to submit a PR or reach out!

---

## 🤝 Community Guidelines & Code of Conduct

To make Axomiya IT Labs a safe, welcoming, and productive environment for all:

* **Be Respectful & Kind:** We have members of all experience levels. Treat everyone with patience, encouragement, and courtesy.
* **Value Constructive Collaboration:** Provide actionable, helpful feedback. Disagreements should focus on ideas, never on individuals.
* **Foster Inclusivity:** Anyone passionate about learning and building is welcome, regardless of technical background, age, or identity.
* **Keep Knowledge Open:** Prioritize open-source tools, clear documentation, and open collaboration.

---

## 📬 Need Help or Have Questions?

If you are stuck, unsure how to start, or just want to discuss an idea before submitting a pull request, we are here to support you!

* 💬 **Join our Telegram:** [t.me/AxomiyaITLabs](https://t.me/AxomiyaITLabs) *(Fastest response)*
* 🐙 **GitHub Discussions & Issues:** [github.com/Axomiya-IT-Labs/axomiya-it-labs.github.io/issues](https://github.com/Axomiya-IT-Labs/axomiya-it-labs.github.io/issues)
* 🌐 **Official Website:** [axomiya-it-labs.github.io](https://axomiya-it-labs.github.io)

Thank you for helping us build the future of AI and open source for Assam! 🚀
