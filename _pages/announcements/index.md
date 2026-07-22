---
layout: announcements
title: Announcements
permalink: /announcements/
---

<div class="announcements-header-block text-center">
    <h2>📢 Latest Community Announcements</h2>
    <p>Discover product launches, news, upcoming events, and project milestones.</p>
</div>

<div class="announcements-list">
{% for announcement in site.data.announcements %}
  {% include components/announcement-card.html 
      announcement=announcement 
      featured=forloop.first 
  %}
{% endfor %}
</div>

{% include partials/newsletter-signup.html %}