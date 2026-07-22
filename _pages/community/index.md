---
layout: community
title: Axomiya Community
permalink: /community/
---

<div class="community-hero text-center">
  <h2>🌍 Axomiya IT Labs Community</h2>
  <p class="lead">Welcome to our community! We are building an open-source, AI-powered future together.</p>
</div>

<section class="community-stats-section">
  <h3>Community Overview</h3>
  {% include sections/community-stats.html %}
</section>

<section class="featured-members-section">
  <h3>Featured Community Members</h3>
  <p>Meet some of our active members driving open-source contributions and collaboration.</p>

  <div class="community-grid">
    {% for member in site.data.community.featured_members %}
      {% include components/member-card.html member=member %}
    {% endfor %}
  </div>
</section>

<section class="community-mission-section">
  <h3>🎯 Our Mission & Goals</h3>
  <ul class="mission-list">
    <li><strong>Democratize AI Education</strong>: Provide accessible learning materials and tools for developers and students.</li>
    <li><strong>Build Open Source Solutions</strong>: Develop open-source software libraries for community projects.</li>
    <li><strong>Foster Global Collaboration</strong>: Connect developers, creators, and researchers around the world.</li>
    <li><strong>Empower Digital Opportunity</strong>: Provide skill development and mentoring opportunities.</li>
  </ul>
</section>

<section class="get-involved-section text-center">
  <h3>Get Involved Today</h3>
  <p>Whether you write code, create tutorials, or design user experiences, you are welcome here!</p>
  <div class="action-buttons">
    <a href="https://t.me/AxomiyaITLabs" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Join Telegram</a>
    <a href="https://github.com/axomiyaitlabs" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">Contribute on GitHub</a>
  </div>
</section>

{% include partials/newsletter-signup.html %}