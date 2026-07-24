# How to Add & Update Projects

## What is a Project?
A project is anything Axomiya IT Labs is building, maintaining, or proposing as a community idea:
- **Live**: Production-ready tools and applications
- **Beta**: Working prototypes in testing
- **In Progress**: Active development
- **Idea**: Community proposals looking for builders

---

## Step 1: Create Your Project File

Create a new markdown file in the `_projects/` folder:

```
_projects/your-project-name.md
```

Use lowercase with hyphens (example: `ai-chatbot.md`)

---

## Step 2: Add Front Matter (Metadata)

Copy this template at the top of your file:

```yaml
---
layout: project
title: "Your Project Title"
permalink: /projects/your-project-slug/
date: 2026-07-24
status: Live
category: AI & Education
excerpt: "One line description of what this project does."
image: /assets/images/projects/your-image.webp
tags:
  - tag1
  - tag2
repo: "https://github.com/Axomiya-IT-Labs/your-repo"
demo: "https://your-live-demo.com"
---
```

### Field Explanations:
- **title**: Name of your project
- **status**: Live | Beta | In Progress | Idea
- **category**: AI & ML | Education | Web | Tools | Other
- **excerpt**: 1-2 sentence description
- **image**: Path to project preview image (.webp recommended)
- **tags**: List of related keywords
- **repo**: GitHub repository link (optional)
- **demo**: Live demo link (optional)

---

## Step 3: Write Your Project Description

After the front matter, write your project content:

```markdown
## What It Solves
Explain the problem this project addresses.

## Key Features
- Feature 1
- Feature 2
- Feature 3

## Who Is It For
Describe the target audience.

## How to Contribute
Explain how others can help with this project.
```

---

## Step 4: Add an Image

1. Save your project image as `.webp` format
2. Keep file size under 200KB
3. Place it in: `assets/images/projects/your-image.webp`
4. Reference it in front matter: `image: /assets/images/projects/your-image.webp`

---

## Step 5: Submit Your Changes

1. Fork the repository
2. Add your `.md` file to `_projects/`
3. Test locally: `bundle exec jekyll serve`
4. Open a Pull Request

---

## Example Project File

**File**: `_projects/weather-app.md`

```markdown
---
layout: project
title: "Assamese Weather App"
permalink: /projects/weather-app/
date: 2026-07-24
status: Live
category: Web
excerpt: "Real-time weather information in Assamese language."
image: /assets/images/projects/weather-app.webp
tags:
  - Assamese
  - Weather
  - Web
repo: "https://github.com/Axomiya-IT-Labs/weather-app"
demo: "https://weather-app-assam.vercel.app"
---

## What It Solves
Provides weather data in plain Assamese, making it accessible to everyone in Assam.

## Key Features
- Real-time weather updates
- Assamese language support
- Mobile-friendly interface
- No ads, completely free

## Who Is It For
- Farmers needing weather data
- Students learning web development
- Anyone who prefers Assamese language content

## How to Contribute
1. Report bugs on GitHub Issues
2. Suggest new features
3. Help with Assamese translations
4. Improve code quality
```

---

## Project Status Explained

| Status | Meaning | Example |
|--------|---------|----------|
| **Live** | Ready to use right now | Krittimat AI Tool Directory |
| **Beta** | Testing phase, mostly working | AI Tutor (being refined) |
| **In Progress** | Active development | New feature being built |
| **Idea** | Concept proposal | A tool someone wants to build |

---

## Common Questions

**Q: Can I update my project later?**
Yes! Just edit your `.md` file and submit a new PR.

**Q: What if I don't have a live demo yet?**
Leave the `demo:` line blank or remove it. Only `repo:` is optional.

**Q: Can I use PNG images instead of WebP?**
Yes, but WebP is preferred (smaller file size, faster loading).

**Q: How do I test my project locally?**
Run `bundle exec jekyll serve` and visit `http://localhost:4000/projects/your-project-slug/`

---

Questions? Ask in our Telegram community: https://t.me/AxomiyaITLabs
