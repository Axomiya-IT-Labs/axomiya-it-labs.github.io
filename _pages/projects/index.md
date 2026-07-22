---
layout: page
title: Projects & FOSS Ideas Bar
subtitle: Open-source software repositories, developer tooling, and innovative project ideas for anyone to build.
permalink: /projects/
---

<div class="projects-hero text-center">
  <h2>⚡ Free & Open Source Software (FOSS)</h2>
  <p class="lead">Explore our open-source repositories or grab an idea from our Ideas Bar to build your next software project!</p>
</div>

---

## 🛠️ Active FOSS Repositories

All our software projects are completely free and open source under permissive licenses. Feel free to use, fork, contribute, or adapt them.

<div class="projects-grid">
  {% for proj in site.data.projects.projects %}
  <div class="project-card">
    <div class="project-header">
      <h3>{{ proj.title }}</h3>
      <span class="project-badge">{{ proj.badge }}</span>
    </div>
    <p class="project-category"><strong>Category:</strong> {{ proj.category }} | <strong>Language:</strong> {{ proj.language }}</p>
    <p class="project-description">{{ proj.description }}</p>

    <div class="project-stats">
      <span>⭐ {{ proj.stars }} stars</span>
      <span>🍴 {{ proj.forks }} forks</span>
    </div>

    <div class="project-tags">
      {% for tag in proj.tags %}
      <span class="tag">#{{ tag }}</span>
      {% endfor %}
    </div>

    <div class="project-actions">
      <a href="{{ proj.repo }}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary">GitHub Repository</a>
      {% if proj.demo %}
      <a href="{{ proj.demo }}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-secondary">Live Demo</a>
      {% endif %}
    </div>
  </div>
  {% endfor %}
</div>

---

## 💡 The Ideas Bar (Open Project Ideas for Nerds & Builders)

Have an appetite for building but need a cool project idea? Pick an idea from our **Ideas Bar**, read the requirements, and start building! Whether you're a beginner learning Git or a seasoned developer, everyone is welcome.

<div class="ideas-grid">
  {% for idea in site.data.projects.ideas_bar %}
  <div class="idea-card">
    <div class="idea-header">
      <h3>💡 {{ idea.title }}</h3>
      <span class="difficulty-badge {{ idea.difficulty | slugify }}">{{ idea.difficulty }}</span>
    </div>
    <p class="idea-description">{{ idea.description }}</p>
    
    <div class="idea-meta">
      <p><strong>Suggested Tech Stack:</strong> {{ idea.tech_stack | join: ", " }}</p>
      <p><strong>Looking For:</strong> {{ idea.looking_for | join: ", " }}</p>
    </div>

    <div class="idea-footer">
      <span class="idea-status">Status: {{ idea.status }}</span>
      <a href="https://github.com/axomiyaitlabs/discussions" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-secondary">Claim / Build This</a>
    </div>
  </div>
  {% endfor %}
</div>

---

## 🚀 Have a FOSS Idea of Your Own?

Do you have a software idea you want to build or share with the community? Submit your idea to our GitHub Discussions or open a Pull Request to add it to this page!

<div class="submit-idea-box text-center">
  <h3>Submit Your Idea to the Ideas Bar</h3>
  <p>Share your proposal with developers and collaborate to bring it to life.</p>
  <a href="https://github.com/axomiyaitlabs" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Submit an Idea on GitHub</a>
</div>
