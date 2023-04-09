---
layout: ../../layouts/MarkdownPostLayout.astro
title: Templating
pubDate: 2023-04-04
description: 'Using Markdown files along with tamplating Layouts to generate blog posts'
author: I-Will
image:
  url: 'https://astro.build/assets/blog/community-day/cover.jpg'
  alt: 'The word community with a heart'
tags: ['astro', 'blogging', 'learning in public']
---

## Using Nested Templating

This post relies on two different layouts. Most of the styles are inherited from the BaseLayout giving it the appearance and standard components of other pages on this site. The MarkdownPostLayout handles some of the standardized features such as displaying the title, author, and date of each post.

## Astro.glob()

Astro.glob allowed me to fetch all the blogpost pages in the main Blog page to display their titles and published dates.
