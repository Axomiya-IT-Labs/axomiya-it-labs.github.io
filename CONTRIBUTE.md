# Master Contribution Guide

## Welcome to Axomiya IT Labs

We're building Assam's first AI and open-source community. Everyone is welcome—regardless of experience level.

---

## Repository Structure

```
axomiyaitlabs/
├── _data/                  Site data (navigation, team)
├── _includes/              Reusable HTML components
├── _layouts/               Page templates
├── _pages/                 Main pages (about, projects, community, etc.)
├── _posts/                 Research articles and tutorials
├── _projects/              Project descriptions
├── _sass/                  Styling (SCSS)
├── assets/                 Images, CSS, JavaScript
├── _config.yml             Jekyll configuration
├── Gemfile                 Ruby dependencies
├── PROJECT.md              How to add projects
├── RESEARCH.md             How to write articles
└── README.md               Repository overview
```

---

## What Can You Contribute?

### Projects
Add a new project or update an existing one.
- Read `PROJECT.md` for detailed instructions
- Projects must solve real problems for Assam
- Can be Live, Beta, In Progress, or Ideas

### Research Articles
Write tutorials, guides, or explanations about AI and tech.
- Read `RESEARCH.md` for detailed instructions
- Can be in English, Assamese, or both
- Keep language simple and clear

### Code & Fixes
Improve the website itself.
- Fix bugs or broken links
- Improve styling or performance
- Add missing features
- Write better documentation

### Community
Help others in the community.
- Answer questions
- Review pull requests
- Suggest improvements
- Share in our Telegram: https://t.me/AxomiyaITLabs

---

## How to Contribute

### 1. Set Up Locally

```bash
# Clone the repository
git clone https://github.com/Axomiya-IT-Labs/axomiya-it-labs.github.io.git
cd axomiya-it-labs.github.io

# Install dependencies
bundle install

# Start the local server
bundle exec jekyll serve
```

Visit `http://localhost:4000` to see your changes live.

### 2. Make Your Changes

- For **projects**: Add a file to `_projects/`
- For **articles**: Add a file to `_posts/`
- For **website fixes**: Edit the relevant file

Read `PROJECT.md` or `RESEARCH.md` for detailed instructions.

### 3. Test Your Changes

Run `bundle exec jekyll serve` and verify everything looks good.

### 4. Commit and Push

```bash
# Create a new branch
git checkout -b feature/your-contribution-name

# Add your changes
git add .

# Commit with a clear message
git commit -m "Add: Description of what you changed"

# Push to your fork
git push origin feature/your-contribution-name
```

### 5. Open a Pull Request

1. Go to https://github.com/Axomiya-IT-Labs/axomiya-it-labs.github.io
2. Click "New Pull Request"
3. Select your branch
4. Write a clear title and description
5. Submit!

---

## Design System

The site uses a clean, minimal design system:

- **Colors**: Warm, accessible palette
- **Typography**: Clear, readable fonts
- **Mobile First**: Works great on phones and tablets
- **No Jargon**: Accessible to everyone

Don't change the design without discussing with the team first.

---

## Writing Guidelines

### Be Clear
- Use simple, everyday words
- Avoid jargon or explain it
- Write short sentences
- Use bullet points

### Be Respectful
- Welcome beginners
- No gatekeeping
- Assume good intentions
- Give credit to others

### Be Helpful
- Include examples
- Link to related content
- Explain why something matters
- Proofread before submitting

---

## Git Commit Messages

Write clear, descriptive messages:

```
Add: New project for weather app
Fix: Mobile menu not closing properly
Update: Improve article about AI basics
Docs: Add instructions for new contributors
```

Start with: `Add`, `Fix`, `Update`, `Docs`, or `Remove`

---

## Questions or Issues?

1. **For quick questions**: Ask in Telegram: https://t.me/AxomiyaITLabs
2. **For bugs**: Open a GitHub issue
3. **For ideas**: Discuss in Telegram first

---

## Need Help?

Check these resources:
- `PROJECT.md` - Adding projects
- `RESEARCH.md` - Writing articles
- `README.md` - Repository overview
- Our Telegram community - Ask anything!

---

## Thank You

Every contribution—no matter how small—helps make Assam's tech community stronger. We're grateful for your help!

Maintained with care by Axomiya IT Labs community.
