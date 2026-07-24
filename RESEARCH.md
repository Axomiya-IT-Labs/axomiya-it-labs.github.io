# How to Write & Publish Research Articles

## What is a Research Article?
Research articles are:
- Tutorials and how-to guides
- Deep-dive technical breakdowns
- Case studies and experiments
- Explanations of AI concepts in plain language
- Reviews and analyses

---

## Step 1: Create Your Article File

Create a new markdown file in the `_posts/` folder with this naming format:

```
_posts/YYYY-MM-DD-your-article-title.md
```

Example:
```
_posts/2026-07-24-how-to-use-chatgpt.md
```

---

## Step 2: Add Front Matter (Metadata)

Copy this template at the top of your file:

```yaml
---
layout: post
title: "Your Article Title"
date: 2026-07-24
author: "Your Name"
category: Tutorials
excerpt: "One or two sentence summary of your article."
tags:
  - tag1
  - tag2
published: true
---
```

### Field Explanations:
- **title**: Your article title
- **date**: Publication date (YYYY-MM-DD format)
- **author**: Your name
- **category**: Tutorials | Guides | AI Concepts | Tools | Other
- **excerpt**: Short summary (shows on list pages)
- **tags**: Searchable keywords
- **published**: true (to show on website) or false (to hide)

---

## Step 3: Write Your Article

After the front matter, write your content using markdown:

```markdown
## Introduction
Hook the reader and explain what they'll learn.

## Main Content
Break into clear sections with subheadings.

## Key Takeaways
Summarize the important points.

## Next Steps
Tell readers what to do next.
```

---

## Step 4: Format Your Article

### Use Clear Headings
```markdown
# Main Title (use only once)
## Section Heading
### Subsection
```

### Add Code Blocks
```markdown
```python
print("Hello, Assam!")
```
```

### Use Lists
```markdown
1. First step
2. Second step
3. Third step

- Bullet point
- Another point
- Third point
```

### Link to Other Pages
```markdown
[Link Text](https://example.com)
[Visit Our Projects](/projects/)
```

---

## Step 5: Submit Your Article

1. Fork the repository
2. Add your `.md` file to `_posts/`
3. Test locally: `bundle exec jekyll serve`
4. Visit: `http://localhost:4000/research/`
5. Open a Pull Request

---

## Example Article

**File**: `_posts/2026-07-24-beginner-guide-to-ai.md`

```markdown
---
layout: post
title: "Beginner's Guide to AI in Plain Language"
date: 2026-07-24
author: "Rakibul Islam"
category: Guides
excerpt: "Learn what AI is, how it works, and why it matters. No technical jargon required."
tags:
  - AI
  - Beginners
  - Assam
published: true
---

## What is AI?
Artificial Intelligence is software that learns and makes decisions. Think of it as teaching a computer to recognize patterns.

## How Does It Work?
AI systems learn from examples:
1. Show it lots of examples
2. It finds patterns
3. It makes predictions on new data

## Real-World Examples
- ChatGPT: Answers questions in plain language
- Image recognition: Identifies objects in photos
- Recommendations: Netflix suggests movies you might like

## Key Takeaway
AI is just a tool. It's not magic, and you don't need to be a programmer to understand it.

## Next Steps
- Read more articles on our site
- Join our Telegram community
- Try an AI tool yourself
```

---

## Tips for Good Articles

✓ **Write in plain language** — Avoid jargon. Explain terms when you use them.

✓ **Use examples** — Real-world examples help readers understand.

✓ **Keep it organized** — Use headings, lists, and short paragraphs.

✓ **Include links** — Link to related articles or resources.

✓ **Proofread** — Read it twice before submitting.

✓ **Make it accessible** — This means readable by everyone, including people learning Assamese.

---

## Article Categories

| Category | Examples |
|----------|----------|
| **Tutorials** | "How to Use ChatGPT", "Building Your First AI Project" |
| **Guides** | "AI for Beginners", "Understanding Machine Learning" |
| **AI Concepts** | "What is Neural Networks?", "How Does NLP Work?" |
| **Tools** | "Best Free AI Tools", "Comparing AI Platforms" |
| **Case Studies** | "How We Built Krittimat", "Real-World AI Success Stories" |

---

## FAQ

**Q: Can I update my article after publishing?**
Yes! Edit the `.md` file and submit a new PR.

**Q: Can I include images?**
Yes! Add images to `assets/images/` and reference them in your article.

**Q: How long should an article be?**
500-2000 words is ideal. Longer is okay if it's good.

**Q: Can I write in Assamese?**
Yes! Write in Assamese, English, or both.

**Q: How do I hide a published article?**
Change `published: false` in the front matter.

---

Questions? Ask in our Telegram: https://t.me/AxomiyaITLabs
