# 📘 Axomiya IT Labs — Master Documentation & Contribution Guide (`PROJECT.md`)

Welcome to the official master documentation and contribution guide for **Axomiya IT Labs**. This static website is built with an **Anthropic-inspired warm minimalist design aesthetic**, fully **mobile-first**, accessible, and 100% compatible with **GitHub Pages** (Jekyll).

---

## 🏛️ 1. Core Mission & Identity

> **Rooted in Assam — Assam's first AI & open-source community.**  
> Everyone is welcome — no matter your age, background, or technical skill. If you are curious and want to learn, build, or share, you belong here.

### The Three Pillars:
- 📖 **Learn**: Read short guides, watch practical tutorials, and explore AI tools in plain language. *(Clear language lowers fear.)*
- 🔨 **Build**: Create real projects: websites, AI tools, automation scripts, and educational platforms. *(Visible progress keeps motivation alive.)*
- 🤝 **Share**: Share what you learn, even if it feels small. Every translation, tutorial, example, bug report, and line of code removes friction for the next person. *(Small help compounds.)*

---

## 📂 2. Repository Architecture

```text
axomiyaitlabs/
├── .github/
│   └── workflows/
│       └── pages.yml              # 🚀 GitHub Actions automated build & deployment workflow
├── _data/                         # 📊 YAML Data Files
│   ├── navigation.yml             # Main navigation menu structure (with dropdown support)
│   └── team.yml                   # Team member profiles & roles
├── _includes/                     # 🧩 Reusable HTML Components
│   ├── header.html                # Responsive header + OpenAI-style Live Search + Mobile Drawer
│   ├── footer.html                # Dark minimalist footer with row columns & copyright bottom bar
│   ├── components/                # UI Cards (announcements, members, team)
│   ├── partials/                  # Newsletters & reusable forms
│   └── sections/                  # Homepage & community layout sections
├── _layouts/                      # 📐 Jekyll Layout Templates
│   ├── default.html               # Master layout (SEO tags, Google Fonts, header, footer, search modal)
│   ├── page.html                  # Standard page template
│   ├── post.html                  # Blog & research post layout
│   ├── project.html               # Project detail layout
│   ├── announcements.html         # Announcements hub template
│   ├── community.html             # Community landing template
│   └── team.html                  # Team page template
├── _pages/                        # 📄 Main Page Views
│   ├── about/index.md             # /about/
│   ├── contribute/index.md        # /contribute/
│   ├── projects/index.md          # /projects/ (Active projects + Ideas bar)
│   ├── announcements/index.md     # /announcements/
│   ├── research/index.md          # /research/
│   ├── community/index.md         # /community/ (Official channels with platform SVG icons)
│   └── team/index.md              # /team/
├── _posts/                        # ✍️ Research Articles (YYYY-MM-DD-title.md)
├── _projects/                     # 🛠️ Project Collection (.md files for active projects & ideas)
│   ├── 00-TEMPLATE.md             # Standard template for new projects
│   └── 00-IDEA-TEMPLATE.md        # Template for community project ideas
├── _announcements/                # 📢 Announcements Collection
│   └── 00-TEMPLATE.md             # Template for announcements
├── _sass/                         # 🎨 SASS Stylesheets (Anthropic Design System)
│   ├── base.scss                  # Typography, variables, global reset, buttons
│   ├── layout.scss                # Header, search modal, full-screen mobile nav, dark footer
│   ├── components/                # Modular SASS components
│   └── pages/                     # Page-specific styling rules
├── assets/                        # 🖼️ Static Assets
│   ├── css/
│   │   └── main.scss              # SCSS entry point compiled to main.css
│   ├── js/
│   │   └── main.js                # Core interactive JavaScript
│   └── images/
│       ├── icons/                 # Official SVG icons (github, x, linkedin, telegram, etc.)
│       ├── og-image.webp          # OpenGraph social preview image
│       └── {projects,team,etc}/   # Asset media directories
├── search.json                    # 🔍 Dynamic Jekyll search index generator
├── _config.yml                    # ⚙️ Jekyll Site Configuration
├── Gemfile                        # 💎 Ruby dependencies
├── index.md                       # 🏠 Landing Page
├── README.md                      # 📖 GitHub Repository README
└── PROJECT.md                     # 📘 Master Documentation (This file)
```

---

## 🎨 3. Design System & Key Features

### Anthropic Warm Minimalist Aesthetic
```scss
:root {
  --bg-main: #fcfbfa;            /* Warm off-white page background */
  --bg-card: #ffffff;            /* Pure white content cards */
  --bg-subtle: #f4f0ea;          /* Warm subtle beige containers */
  --bg-dark: #141413;            /* Dark minimalist footer */
  --text-main: #191919;          /* Primary dark charcoal text */
  --text-muted: #595755;        /* Secondary muted charcoal text */
  --accent-warm: #cc5500;        /* Warm terracotta/amber signature accent */
  --border-light: #e8e3dc;       /* Clean subtle line borders */
  --font-serif: 'Instrument Serif', Georgia, serif; /* Editorial headings */
  --font-sans: 'Inter', sans-serif;                /* Body & navigation */
}
```

### Key Technical Implementations
1. **🔍 OpenAI-Style Live Search**:
   - Search trigger button next to the brand logo in the header with `⌘K` / `Ctrl+K` keyboard shortcut.
   - Modal overlay that queries `search.json` dynamically with zero dependencies.
   - Instantly indexes all pages, projects, and research articles.

2. **📱 Full-Screen Mobile Drawer Navigation**:
   - Covers the entire viewport (`top: 0`) when clicked.
   - High z-index stacking context (`z-index: 1000000` for toggle button) ensures the hamburger icon remains visible and functional above all overlays.
   - Smooth CSS transform slide transitions.

3. **🦶 Structured Dark Footer**:
   - Dual-column layout on desktop (`Quick Links` & `Connect` side-by-side).
   - Social & channel links listed vertically in column alignment.
   - Distinct `.footer-bottom` copyright bar (`© 2026 Axomiya IT Labs · Open Source · Built with Passion`) pinned as the very last element of the page.

4. **⚡ Official Platform SVG Icons**:
   - Community channels (`/community/`) use SVG icons from `assets/images/icons/` (`github.svg`, `x.svg`, `linkedin.svg`, `telegram.svg`, `youtube.svg`, `facebook.svg`, `instagram.svg`, `email.svg`).

---

## 🤝 4. How to Contribute

We welcome contributions of all kinds! Follow these simple steps based on what you want to add or update:

### ✍️ A. Publishing a Research Post or Guide
1. Create a markdown file inside `_posts/` with the filename format `YYYY-MM-DD-your-title.md`.
2. Include the required Front Matter at the top:
```markdown
---
layout: post
title: "Title of your Research or Guide"
date: 2026-07-24
author: "Your Name"
permalink: /research/your-title-slug/
excerpt: "A brief 1-2 sentence summary of what this article covers."
image: "/assets/images/research/your-image.webp"
tags:
  - Open-Source
  - AI
---

Your markdown content goes here...
```

### 🛠️ B. Adding a Project or Community Idea
1. Copy `_projects/00-TEMPLATE.md` (for active projects) or `_projects/00-IDEA-TEMPLATE.md` (for community ideas).
2. Save it into `_projects/` with a descriptive filename (e.g., `my-cool-ai-tool.md`).
3. Fill in the title, status (`Live`, `Beta`, `In Progress`, or `Idea`), category, and description.

### 📢 C. Publishing an Announcement
1. Copy `_announcements/00-TEMPLATE.md`.
2. Save it in `_announcements/` as `YYYY-MM-DD-title.md`.
3. Add the title, date, excerpt, and content.

### 👨‍💻 D. Adding or Updating Team Members
1. Open `_data/team.yml`.
2. Add your entry under the appropriate category (`leadership`, `developers`, `designers`, or `advisors`):
```yaml
- name: "Your Name"
  role: "Your Role / Contribution"
  bio: "Short bio about what you build or research."
  github: "https://github.com/your-username"
  avatar: "/assets/images/team/your-avatar.jpg"
```

---

## 💻 5. Local Setup & Workflow

### Prerequisites
- **Ruby** (v3.0+)
- **Bundler** (`gem install bundler`)

### Step-by-Step Setup
1. **Fork & Clone** the repository:
   ```bash
   git clone https://github.com/YOUR-USERNAME/axomiya-it-labs.github.io.git
   cd axomiya-it-labs.github.io
   ```
2. **Install Dependencies**:
   ```bash
   bundle install
   ```
3. **Run Local Server**:
   ```bash
   bundle exec jekyll serve
   ```
4. **Preview**: Open `http://localhost:4000` in your web browser.

### Submitting a Pull Request (PR)
1. Create a feature branch: `git checkout -b feature/my-new-contribution`
2. Commit your changes: `git commit -m "feat: add new research article on AI"`
3. Push to your fork: `git push origin feature/my-new-contribution`
4. Open a **Pull Request** on the main `Axomiya-IT-Labs/axomiya-it-labs.github.io` repository!

---
*Maintained with ❤️ by Axomiya IT Labs community.*
