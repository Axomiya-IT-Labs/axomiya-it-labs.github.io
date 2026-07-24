---
layout: default
title: Projects
permalink: /projects/
---

<div class="projects-header-block text-center">
    <h2>Our Projects</h2>
    <p>Active tools, experiments, and open community proposals.</p>
</div>

{% assign live_projects = site.projects | where: "status", "Live" | sort: "title" %}
{% assign beta_projects = site.projects | where: "status", "Beta" | sort: "title" %}
{% assign in_progress = site.projects | where: "status", "In Progress" | sort: "title" %}
{% assign ideas = site.projects | where: "status", "Idea" | sort: "title" %}

{% if live_projects.size > 0 %}
<section class="container">
    <div class="text-center" style="margin: 2rem 0 1.5rem;">
        <h3>Live Projects</h3>
        <p style="color: var(--text-muted);">Production-ready tools and applications.</p>
    </div>
    <div class="listings-grid">
        {% for project in live_projects %}
        {% include components/project-card.html project=project %}
        {% endfor %}
    </div>
</section>
{% endif %}

{% if beta_projects.size > 0 or in_progress.size > 0 %}
<section class="container">
    <div class="text-center" style="margin: 2rem 0 1.5rem;">
        <h3>In Development</h3>
        <p style="color: var(--text-muted);">Beta versions and active development.</p>
    </div>
    <div class="listings-grid">
        {% for project in beta_projects %}
        {% include components/project-card.html project=project %}
        {% endfor %}
        {% for project in in_progress %}
        {% include components/project-card.html project=project %}
        {% endfor %}
    </div>
</section>
{% endif %}

{% if ideas.size > 0 %}
<section class="container">
    <div class="text-center" style="margin: 2rem 0 1.5rem;">
        <h3>Open Ideas</h3>
        <p style="color: var(--text-muted);">Community proposals looking for builders and maintainers.</p>
    </div>
    <div class="listings-grid">
        {% for project in ideas %}
        {% include components/project-card.html project=project %}
        {% endfor %}
    </div>
</section>
{% endif %}

{% if site.projects.size == 0 %}
<div class="container text-center" style="margin-top: 3rem;">
    <p class="lead">No projects yet. Check back soon for exciting updates!</p>
</div>
{% endif %}
