# 📘 Axomiya IT Labs — Ultimate Master Documentation (`PROJECT.md`)

Welcome to the complete, single-source-of-truth documentation for **Axomiya IT Labs**. This repository is built as an industry-standard, high-performance static website for **GitHub Pages** powered by **Jekyll**.

---

## 🧭 1. Architecture Overview & Directory Layout

```text
axomiyaitlabs/
├── .github/
│   └── workflows/
│       └── pages.yml              # 🚀 GitHub Actions auto-deployment to GitHub Pages
├── _data/                         # 📊 YAML Data Files (Single source of content data)
│   ├── announcements.yml          # Product launches, events, & updates
│   ├── community.yml              # Member profiles & community metrics
│   ├── nav.yml                    # Site navigation menu
│   ├── projects.yml               # FOSS software projects & Ideas Bar items
│   └── team.yml                   # Leadership, developers, designers, & advisors
├── _includes/                     # 🧩 Reusable HTML Components & Partials
│   ├── header.html                # Sticky responsive header & logo
│   ├── footer.html                # Footer links, social icons, & copyright
│   ├── components/
│   │   ├── announcement-card.html # Card component for announcements
│   │   ├── member-card.html       # Card component for community members
│   │   └── team-card.html         # Card component for team members
│   ├── partials/
│   │   └── newsletter-signup.html # Newsletter subscription form
│   └── sections/
│       ├── community-stats.html   # Live statistics grid
│       └── team-grid.html         # Grid renderer for team listings
├── _layouts/                      # 📐 HTML Page Layout Templates
│   ├── default.html               # Master wrapper (HTML head, SEO tags, CSS/JS includes)
│   ├── page.html                  # Standard page layout
│   ├── post.html                  # Blog post layout with date, author, & tag meta
│   ├── announcements.html         # Announcements hub layout
│   ├── community.html             # Community landing page layout
│   └── team.html                  # Team page layout
├── _pages/                        # 📄 Site Pages (Markdown / HTML)
│   ├── about.md                   # /about/
│   ├── announcements/index.md     # /announcements/
│   ├── community/index.md         # /community/
│   ├── projects/index.md          # /projects/ (FOSS software & Ideas Bar)
│   └── team/index.md              # /team/
├── _posts/                        # ✍️ Blog Posts & Articles
│   └── YYYY-MM-DD-title.md
├── _sass/                         # 🎨 SASS Stylesheets
│   ├── base.scss                  # Core typography, variables, buttons, & resets
│   ├── layout.scss                # Header, mobile drawer menu, & footer layout
│   ├── components/
│   │   └── _ai-chat.scss          # AI assistant chat widget styling
│   └── pages/
│       ├── _announcements.scss    # Announcements grid & badge styling
│       ├── _community.scss       # Community member cards & stats grid
│       ├── _projects.scss         # FOSS repository cards & Ideas Bar styling
│       └── _team.scss             # Team member cards & grid layouts
├── assets/                        # 🖼️ Static Assets
│   ├── css/
│   │   └── main.scss              # Main SCSS entry point (compiles to main.css)
│   ├── js/
│   │   └── main.js                # Frontend interactive JS
│   └── images/                    # Images (team, projects, community, announcements)
├── _config.yml                    # ⚙️ Global Jekyll Configuration
├── Gemfile                        # 💎 Ruby Gem Dependencies
├── index.md                       # 🏠 Home Page
├── README.md                      # GitHub Repository README
└── PROJECT.md                     # 📖 This Complete Documentation File
```

---

## 🛠️ 2. How to Update Anything (Quick Guide)

### ✍️ A. Writing & Publishing Articles / Blog Posts
To publish a new article or blog post:
1. Create a new file in `_posts/` with the filename format: `YYYY-MM-DD-your-title.md` (e.g. `2026-08-15-ai-trends.md`).
2. Add Front Matter at the top of the file:
```markdown
---
layout: post
title: "Your Article Title"
author: "Your Name"
categories: [AI, Software]
excerpt: "A brief summary of the article."
image: "/assets/images/announcements/2026-07/welcome.jpg"
---

## Article Subheading

Write your main article content here using standard Markdown...
```

---

### 👨‍💻 B. Adding or Editing Team Members
Edit `_data/team.yml`. You can add members under `leadership`, `developers`, `designers`, or `advisors`:

```yaml
developers:
  - name: "Full Name"
    role: "Senior Software Engineer"
    bio: "Passionate open-source builder."
    image: "/assets/images/team/developers/name.jpg"
    social:
      github: "github-username"
      linkedin: "linkedin-username"
    projects: ["Project Alpha", "CLI Tool"]
```

---

### 📢 C. Adding Announcements & Product Releases
Edit `_data/announcements.yml`:

```yaml
- id: 4
  title: "New Product Release 🚀"
  date: "2026-08-20"
  type: "major" # Options: major, event, update
  category: "Product Launch"
  excerpt: "Summary of what was released."
  image: "/assets/images/announcements/2026-08/launch.jpg"
  link: "/announcements/new-release"
  author: "Author Name"
  tags: ["Launch", "FOSS"]
```

---

### 💡 D. Managing FOSS Software & The "Ideas Bar"
Open `_data/projects.yml` to manage software repositories and project ideas for developers/nerds:

#### 1. Adding a FOSS Software Repository (`projects` section):
```yaml
- id: "my-tool"
  title: "Awesome Developer CLI"
  category: "Developer Tools"
  badge: "Featured FOSS"
  description: "An open-source CLI that simplifies local development."
  stars: 45
  forks: 12
  language: "Rust"
  repo: "https://github.com/axomiyaitlabs/awesome-cli"
  tags: ["Rust", "CLI", "DevTools"]
```

#### 2. Adding a Project Idea to the "Ideas Bar" (`ideas_bar` section):
```yaml
- id: "idea-5"
  title: "Realtime Log Analytics Dashboard"
  difficulty: "Intermediate" # Options: Beginner Friendly, Intermediate, Advanced
  tech_stack: ["Go", "React", "WebSockets"]
  description: "A minimal open-source log analyzer for server applications."
  looking_for: ["Backend Engineer", "UI Developer"]
  status: "Open Idea"
```

---

### 🖼️ E. Adding & Managing Images & Documents
- Place image files inside `assets/images/` (subfolders: `announcements/`, `team/`, `community/`, `projects/`).
- Always reference images in Liquid templates or Markdown using the `relative_url` filter:
  - **In Liquid**: `{{ '/assets/images/team/photo.jpg' | relative_url }}`
  - **In Markdown**: `![Alt Text]({{ '/assets/images/team/photo.jpg' | relative_url }}`

---

### 🔗 F. Editing Main Navigation Menu
Edit `_data/nav.yml` to change menu headers or links:
```yaml
- title: Home
  url: /
- title: About
  url: /about/
- title: Projects
  url: /projects/
- title: Announcements
  url: /announcements/
- title: Community
  url: /community/
- title: Team
  url: /team/
```

---

## 🎨 3. Styling & Customization System (`_sass/`)

Global styles are written in modern SCSS and compiled into `assets/css/main.css`.

- `_sass/base.scss`: CSS design tokens (colors `--primary`, `--secondary`), typography, buttons (`.btn`), cards, and layout containers.
- `_sass/layout.scss`: Sticky header navigation, mobile drawer menu (`#siteNav`), footer styling.
- `_sass/pages/_projects.scss`: Styling for FOSS project cards and the Ideas Bar cards & difficulty badges.
- `_sass/pages/_community.scss`: Community statistics cards and member avatars.
- `_sass/pages/_team.scss`: Team member grid layout and social badges.

---

## 🚀 4. Local Development & GitHub Pages Deployment

### Local Server Setup:
1. Ensure Ruby and Bundler are installed.
2. Run installation:
   ```bash
   bundle install
   ```
3. Start the local server:
   ```bash
   bundle exec jekyll serve
   ```
4. Preview the website live at `http://localhost:4000`.

### GitHub Pages (2026 Standard):
- Pushing to the `main` branch automatically triggers the `.github/workflows/pages.yml` GitHub Actions pipeline.
- The workflow compiles SCSS, processes Kramdown Markdown, and deploys clean static HTML to GitHub Pages.

---
*Documentation maintained by Axomiya IT Labs.*
