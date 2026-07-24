# 🛠️ Axomiya IT Labs — Project & Ideas Guide (`PROJECT.md`)

Welcome to the dedicated guide for adding, updating, and maintaining **Projects and Community Ideas** at **Axomiya IT Labs**. Whether you are showcasing a completed tool, an active prototype, or proposing an open community idea, this document covers everything you need to know.

---

## 🎯 1. Core Goal of Our Projects

Every project built or featured by **Axomiya IT Labs** aims to solve real-world problems for people in Assam and beyond. We prioritize clear language, open source code, Assamese localization, and accessible AI tools so anyone can learn and build.

---

## 📂 2. Project File Structure

Projects on our website are managed as a Jekyll collection in `_projects/`:

```text
axomiyaitlabs/
├── _projects/                          # 🛠️ All project markdown files (.md)
│   ├── 00-TEMPLATE.md                  # Template for Live / Beta / In Progress projects
│   ├── 00-IDEA-TEMPLATE.md             # Template for Open Community Ideas
│   ├── what-after-12.md                # Active Project Entry
│   ├── axomiya-ai-tutor.md             # Active Project Entry
│   └── open-assam-data.md              # Active Project Entry
└── assets/images/projects/             # 🖼️ Project Screenshots & Thumbnails (.webp preferred)
```

---

## 🚦 3. Project Lifecycles & Status Badges

Every project requires a designated `status` in its front matter. This controls how it is displayed on the `/projects/` page:

| Status Badge | Meaning | Display Section |
| :--- | :--- | :--- |
| **`Live`** | Production-ready tool or application. | Active Projects Section |
| **`Beta`** | Working prototype currently undergoing testing. | Active Projects Section |
| **`In Progress`** | Active development underway. | Active Projects Section |
| **`Idea`** | Open community proposal looking for maintainers/builders. | Ideas Bar Section |

---

## ✍️ 4. How to Add a Project or Idea (Step-by-Step)

### Step 1: Pick a Template
- For **active projects, prototypes, or live applications**: copy `_projects/00-TEMPLATE.md`.
- For **unbuilt community proposals or ideas**: copy `_projects/00-IDEA-TEMPLATE.md`.

### Step 2: Create Your Markdown File
Name your file using a lowercase slug matching your project name:  
`_projects/your-project-slug.md`

### Step 3: Fill in Front Matter Schema
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

### Step 4: Write Body Sections
Structure your project content clearly with standard headings:
- **`## What It Solves`** — The real-world problem being addressed.
- **`## Key Features`** — Bullet points of capabilities.
- **`## Who Is It For`** — Target audience (students, teachers, developers, general public).
- **`## How to Contribute`** — Steps for new contributors to get involved.

### Step 5: Add Media Assets
- Drop image files into `assets/images/projects/`.
- **`.webp` format is strongly recommended** for optimal compression and fast loading.
- Keep image file sizes below 200KB.

---

## 🤝 5. How People Can Contribute to Your Project

1. **Fork the Repo**: Fork `Axomiya-IT-Labs/axomiya-it-labs.github.io`.
2. **Add/Update Project File**: Save your `.md` file inside `_projects/`.
3. **Test Locally**: Run `bundle exec jekyll serve` to verify layout on `http://localhost:4000/projects/`.
4. **Submit PR**: Open a Pull Request on GitHub!

---
*Maintained with ❤️ by Axomiya IT Labs community.*
 