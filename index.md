---
layout: default
title: Home
---

<div class="hero-section text-center">
  <h1 class="hero-title">Axomiya IT Labs</h1>
  <p class="hero-subtitle">Equal Access for All — Making AI Easy for Everyone.</p>
  <p class="hero-description">We build free, open-source AI tools, developer platforms, and educational resources designed for everyone to learn, build, and innovate.</p>
  <div class="hero-buttons">
    <a href="{{ '/projects/' | relative_url }}" class="btn btn-primary">Explore Projects</a>
    <a href="{{ '/community/' | relative_url }}" class="btn btn-secondary">Join Community</a>
  </div>
</div>

<section class="features-section">
  <div class="container">
    <h2 class="section-title text-center">What We Do</h2>
    <div class="features-grid">
      <div class="feature-card">
        <div class="feature-icon">🤖</div>
        <h3>AI & Machine Learning</h3>
        <p>Developing open-source artificial intelligence tools, models, and easy-to-use APIs for real-world applications.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">💡</div>
        <h3>Open Source Tools</h3>
        <p>Creating accessible software libraries, templates, and frameworks that help developers build faster.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">📚</div>
        <h3>Education & Growth</h3>
        <p>Democratizing technical knowledge through practical tutorials, guides, and collaborative learning events.</p>
      </div>
    </div>
  </div>
</section>

<section class="community-highlight">
  <div class="container">
    <div class="highlight-content text-center">
      <h2>Building Together</h2>
      <p>Axomiya IT Labs is driven by a global community of developers, designers, educators, and technology enthusiasts.</p>
      {% include sections/community-stats.html %}
    </div>
  </div>
</section>

<section class="latest-announcements-section">
  <div class="container">
    <h2 class="section-title text-center">Latest Announcements</h2>
    <div class="announcements-grid">
      {% for announcement in site.data.announcements limit:3 %}
        {% include components/announcement-card.html announcement=announcement %}
      {% endfor %}
    </div>
  </div>
</section>
