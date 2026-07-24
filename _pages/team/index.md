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
      <img src="{{ member.image | relative_url }}" alt="{{ member.name }}" style="width: 120px; height: 120px; border-radius: 50%; margin-bottom: 1rem; object-fit: cover; background: var(--bg-subtle);">
      {% else %}
      <div style="width: 120px; height: 120px; border-radius: 50%; margin: 0 auto 1rem; background: var(--bg-subtle); display: flex; align-items: center; justify-content: center; color: var(--text-light); font-size: 3rem;">?</div>
      {% endif %}
      <h3 style="margin-top: 0;">{{ member.name }}</h3>
      <p style="color: var(--accent-warm); font-weight: 600; margin-bottom: 0.5rem;">{{ member.role }}</p>
      <p style="font-size: 0.9rem; color: var(--text-light);">{{ member.bio }}</p>
    </div>
    {% endfor %}
  </div>
</section>

<section class="container text-center" style="margin-top: 3rem;">
  <h2 class="section-title">Contributors</h2>
  <p class="section-subtitle">Thank you to everyone helping build this community!</p>
  <p>Visit our <a href="https://github.com/Axomiya-IT-Labs" target="_blank" rel="noopener noreferrer">GitHub organization</a> to see all contributors.</p>
</section>
