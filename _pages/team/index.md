---
layout: default
title: Team
permalink: /team/
---

<div class="hero-section">
  <h1 class="hero-title">Meet Our Team</h1>
  <p class="hero-subtitle">The passionate people behind Axomiya IT Labs.</p>
</div>

<section class="container text-center">
  <h2 class="section-title">Leadership</h2>
  <div class="listings-grid">
    {% for member in site.data.team.leadership %}
    <div class="card-item" style="text-align: center;">
      {% if member.image %}
      <img src="{{ member.image | relative_url }}" alt="{{ member.name }}" style="width: 120px; height: 120px; border-radius: 50%; margin-bottom: 1rem; object-fit: cover; background: var(--bg-subtle);" />
      {% else %}
      <div style="width: 120px; height: 120px; border-radius: 50%; margin: 0 auto 1rem; background: var(--bg-subtle); display: flex; align-items: center; justify-content: center; color: var(--text-muted); font-weight: 600;">No Image</div>
      {% endif %}
      <h3 style="margin-top: 0;">{{ member.name }}</h3>
      <p style="color: var(--accent-warm); font-weight: 600; margin-bottom: 0.5rem;">{{ member.role }}</p>
      <p style="font-size: 0.9rem; color: var(--text-light);">{{ member.bio }}</p>
      
      {% if member.social %}
      <div style="display: flex; gap: 0.75rem; justify-content: center; margin-top: 1rem;">
        {% if member.social.github %}
        <a href="{{ member.social.github }}" target="_blank" rel="noopener noreferrer" style="color: var(--text-muted); text-decoration: none; font-weight: 500; font-size: 0.85rem; padding: 0.4rem 0.8rem; background: var(--bg-subtle); border-radius: 6px; transition: all 0.2s ease;" title="GitHub">GitHub</a>
        {% endif %}
        {% if member.social.linkedin %}
        <a href="{{ member.social.linkedin }}" target="_blank" rel="noopener noreferrer" style="color: var(--text-muted); text-decoration: none; font-weight: 500; font-size: 0.85rem; padding: 0.4rem 0.8rem; background: var(--bg-subtle); border-radius: 6px; transition: all 0.2s ease;" title="LinkedIn">LinkedIn</a>
        {% endif %}
        {% if member.social.twitter %}
        <a href="{{ member.social.twitter }}" target="_blank" rel="noopener noreferrer" style="color: var(--text-muted); text-decoration: none; font-weight: 500; font-size: 0.85rem; padding: 0.4rem 0.8rem; background: var(--bg-subtle); border-radius: 6px; transition: all 0.2s ease;" title="X (Twitter)">X</a>
        {% endif %}
      </div>
      {% endif %}
    </div>
    {% endfor %}
  </div>
</section>

<section class="container text-center" style="margin-top: 3rem;">
  <h2 class="section-title">Contributors</h2>
  <p class="section-subtitle">Thank you to everyone helping build this community!</p>
  <p>Visit our <a href="https://github.com/Axomiya-IT-Labs" target="_blank" rel="noopener noreferrer">GitHub organization</a> to see all contributors.</p>
</section>
