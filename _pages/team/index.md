---
layout: team
title: Meet Our Team
permalink: /team/
---

<section class="team-section">
  <h2>Leadership</h2>
  {% include sections/team-grid.html 
      team=site.data.team.leadership 
  %}

  <h2>Developers</h2>
  {% include sections/team-grid.html 
      team=site.data.team.developers 
  %}

  <h2>Designers</h2>
  {% include sections/team-grid.html 
      team=site.data.team.designers 
  %}

  {% if site.data.team.advisors %}
  <h2>Advisors</h2>
  {% include sections/team-grid.html 
      team=site.data.team.advisors 
  %}
  {% endif %}
</section>

<section class="join-team-box text-center">
  <h3>Join Our Team</h3>
  <p>We are always looking for passionate open-source contributors, developers, and educators!</p>
  <a href="https://github.com/axomiyaitlabs" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Become a Contributor</a>
</section>