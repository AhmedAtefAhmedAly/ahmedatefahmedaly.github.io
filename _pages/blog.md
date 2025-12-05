---
layout: page
permalink: /blog/
title: blog
description: A simple reverse‑chronological list of posts.
nav: true
nav_order: 1
---

<div class="post">
  <ul class="post-list simple-posts">
    {% assign postlist = site.posts %}
    {% for post in postlist %}
      <li class="mb-4">
        <h3 class="post-title mb-1">
          {% if post.redirect == blank %}
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
          {% elsif post.redirect contains '://' %}
            <a href="{{ post.redirect }}" target="_blank" rel="noopener noreferrer">{{ post.title }}</a>
          {% else %}
            <a href="{{ post.redirect | relative_url }}">{{ post.title }}</a>
          {% endif %}
        </h3>
        <p class="post-meta text-muted mb-1">
          {{ post.date | date: '%B %d, %Y' }}
          {% if post.external_source %}
            &nbsp;&middot;&nbsp; {{ post.external_source }}
          {% endif %}
        </p>
        {% if post.description %}
          <p class="post-description mb-0">{{ post.description }}</p>
        {% endif %}
      </li>
    {% endfor %}
  </ul>
</div>
