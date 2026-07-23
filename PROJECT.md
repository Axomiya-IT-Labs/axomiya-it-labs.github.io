# 📘 Axomiya IT Labs — Ultimate Master Documentation & Contribution Guide (`PROJECT.md`)

Welcome to the official master documentation and contributor guide for **Axomiya IT Labs**. This repository powers our static website and community platform, engineered with an **Anthropic-inspired warm minimalist design aesthetic**, fully **mobile-first**, accessible, and 100% hosted on **GitHub Pages** (Jekyll).

---

## 🏛️ 1. Core Mission & Identity

> **Rooted in Assam — Assam's first AI & open-source community.**  
> Everyone is welcome — no matter your age, background, or technical skill. If you are curious and want to learn, build, or share, you belong here.

### The Three Pillars:
- 📖 **Learn**: Read short guides, watch practical tutorials, and explore AI tools in plain language. *(Clear language lowers fear.)*
- 🔨 **Build**: Create real projects: websites, AI tools, automation scripts, and educational platforms. *(Visible progress keeps motivation alive.)*
- 🤝 **Share**: Share what you learn, even if it feels small. Every translation, tutorial, example, bug report, and line of code removes friction for the next person. *(Small help compounds.)*

### Guiding Principles:
1. **From Scrolling to Creating**: Turn curiosity into useful projects. Start with something small enough to finish today.
2. **Open Source, Made Easier by AI**: Everything is free and community-driven. You can contribute even if your first contribution is a correction.
3. **Accessible Tech & Learning**: Language does not decide who gets to learn. Understanding comes first. Speed comes after.

---

## 📂 2. Repository Architecture & Layout

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
│   ├── 00-TEMPLATE.md             # Standard template for active projects
│   ├── 00-IDEA-TEMPLATE.md        # Template for community project ideas
│   ├── what-after-12.md            # Active project entry
│   ├── axomiya-ai-tutor.md        # Active project entry
│   └── open-assam-data.md         # Active project entry
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
└── PROJECT.md                     # 📘 Master Documentation & Contribution Guide (This File)
```

---

## 🎨 3. Design System & Key Technical Features

### Anthropic Warm Minimalist Design System
```scss
:root {
  --bg-main: #fcfbfa;            /* Warm off-white page background */
  --bg-card: #ffffff;            /* Pure white content cards */
  --bg-subtle: #f4f0ea;          /* Warm subtle beige containers */
  --bg-dark: #141413;            /* Dark minimalist footer */
  --text-main: #191919;          /* Primary dark charcoal text */
  --text-muted: #595755;        /* Secondary muted charcoal text */
  --accent-warm: #cc5500;        /* Signature warm terracotta/amber accent */
  --border-light: #e8e3dc;       /* Clean subtle line borders */
  --font-serif: 'Instrument Serif', Georgia, serif; /* Editorial headings */
  --font-sans: 'Inter', sans-serif;                /* Body & navigation */
}
```

### Key Technical Implementations
1. **🔍 OpenAI-Style Live Search**:
   - Search trigger button placed next to the brand logo in the header with `⌘K` / `Ctrl+K` keyboard shortcut badge.
   - Interactive glassmorphism modal overlay querying dynamic `search.json`.
   - Instantly searches pages, active projects, community ideas, and research articles with zero external dependencies.

2. **📱 Mobile Navigation & Hamburger Drawer**:
   - Full-screen slide-over drawer (`top: 0`) with high z-index stacking context (`z-index: 1000000` for toggle button, `999999` for drawer).
   - Keeps brand logo and close toggle button (`is-open` animated ✕) clearly visible at top bar height (64px).
   - Smooth CSS transform transitions (`transform: translateX(0)`) and accordion support for dropdown submenus.

3. **🦶 Structured Dark Footer Layout**:
   - Desktop grid layout (`Quick Links` & `Connect` side-by-side in `.footer-cols-row`).
   - Social and platform channel links aligned vertically in clean columns.
   - Pinned `.footer-bottom` copyright bar (`© 2026 Axomiya IT Labs · Open Source · Built with Passion`) as the final element of the web page.

4. **⚡ Official Platform SVG Icons**:
   - Official platform vector icons from `assets/images/icons/` (`github.svg`, `x.svg`, `linkedin.svg`, `telegram.svg`, `youtube.svg`, `facebook.svg`, `instagram.svg`, `email.svg`) used across `/community/` and footer.

---

## 🛠️ 4. Project Lifecycles & Status Badges

Projects on our website are managed in `_projects/`. Each project has a designated `status` in its front matter which determines how it renders on `/projects/`:

| Status | Meaning | Rendered Location |
| :--- | :--- | :--- |
| **`Live`** | Production-ready tool or platform. | Active Projects Section |
| **`Beta`** | Working prototype undergoing testing. | Active Projects Section |
| **`In Progress`** | Active development underway. | Active Projects Section |
| **`Idea`** | Open community proposal looking for builders. | Ideas Bar Section |

---

## ✍️ 5. Step-by-Step Guide to Add or Update Content

### A. Adding a New Project or Community Idea
1. **Choose a Template**:
   - For working tools, prototypes, or active projects: copy `_projects/00-TEMPLATE.md`.
   - For unbuilt proposals or community ideas: copy `_projects/00-IDEA-TEMPLATE.md`.
2. **Create Markdown File**: Name it using a lowercase slug, e.g., `_projects/your-project-name.md`.
3. **Fill in Front Matter**:
```yaml
---
layout: project
title: "Your Project Title"
permalink: /projects/your-project-slug/
date: 2026-07-24
status: Beta                     # Options: Live, Beta, In Progress, Idea
category: AI & Education         # Options: AI & ML, Education, Data & Automation, Web
image: /assets/images/projects/your-project.webp
tags:
  - Assamese-AI
  - Open-Source
repo: "https://github.com/Axomiya-IT-Labs/your-repo"
demo: "https://your-demo-url.com"
tech_stack:
  - Next.js
  - Python
  - Tailwind CSS
---
```
4. **Write Body Sections**:
   - `## What It Solves`: Explain the real-world problem.
   - `## Key Features`: Bullet points of functionality.
   - `## Who Is It For`: Target audience.
   - `## How to Contribute`: Steps for new contributors.

### B. Publishing Research Posts & Tutorials
1. Add a markdown file in `_posts/` formatted as `YYYY-MM-DD-title.md`.
2. Add Front Matter:
```markdown
---
layout: post
title: "Title of your Research or Guide"
date: 2026-07-24
author: "Your Name"
permalink: /research/your-title-slug/
excerpt: "A brief summary of what this article covers."
image: "/assets/images/research/your-image.webp"
tags:
  - Open-Source
  - AI
---
```

### C. Publishing Announcements
1. Copy `_announcements/00-TEMPLATE.md` to `_announcements/YYYY-MM-DD-title.md`.
2. Set title, date, excerpt, and announcement details.

### D. Updating Team Profiles
1. Edit `_data/team.yml`.
2. Add entries under `leadership`, `developers`, `designers`, or `advisors`.

---

## 🤝 6. Contributor Git Workflow (Pull Requests)

1. **Fork the Repository**: Click "Fork" on `Axomiya-IT-Labs/axomiya-it-labs.github.io`.
2. **Clone your Fork**:
   ```bash
   git clone https://github.com/YOUR-USERNAME/axomiya-it-labs.github.io.git
   cd axomiya-it-labs.github.io
   ```
3. **Install & Run Locally**:
   ```bash
   bundle install
   bundle exec jekyll serve
   ```
   Visit `http://localhost:4000`.
4. **Create a Feature Branch**:
   ```bash
   git checkout -b feature/my-contribution
   ```
5. **Commit & Push**:
   ```bash
   git add .
   git commit -m "feat: add new AI research article"
   git push origin feature/my-contribution
   ```
6. **Submit a PR**: Open a Pull Request on the main repository!

---

## 📈 7. Scaling to 50+ Projects

To ensure the repository and platform scale effortlessly:
- Use consistent category tags (`AI & ML`, `Education`, `Data & Automation`, `Community & Web`).
- Ensure all active projects link to a valid open-source GitHub repository in `_projects/`.
- Optimize all project thumbnail images as `.webp` (target file size under 200KB).

---
*Maintained with ❤️ by Axomiya IT Labs community.*
