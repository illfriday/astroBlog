---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'About the Blog'
pubDate: 2023-04-03
publishedAt: '2023-04-15T05:46:10.908Z'
description: 'This is the first post of my new blog built with Astro.'
author: 'I-Will'
image:
  url: 'https://astro.build/assets/blog/astro-1-release-update/cover.jpeg'
  alt: 'The Astro logo with the word One.'
tags: ['astro', 'blogging', 'learning in public']
---

This is a blog to document my coding journey. I'm building this blog in
Astro. Astro is a lightweight Javascript framework. I will use React in
conjunction with Astro for this project, but Astro can be used in
conjunction with other jS libraries like Svelte or Angular. You can even
use more than one in the same project. Cool, but why? This can help if you
are trying to migrate from one library/framework to another on an existing
site. This way parts of the site can be updated, but nothing will be left
behind from the old code base during the update process.

## Why I am learning Astro...

Astro uses server side rendering, but can also handle dynamic
functionality, such as logged in users being able to add content. I was
using 11ty SSG(static site generator) on my first version, interacting
with Strapi headless CMS. I was having trouble figuring out how to
effectively send POST requests to my Strapi generated REST API from the
static site. I wanted comments enabled on my blog, but my functions were
only running at build time. There were ways around this, including using
existing tools like disqus. After working and reading for awhile on this,
the tools I was using didn't seem appropriate for the feature I was trying
to add. I decided to give this a try and hopefully, I can link in the
existing work I did on the CMS side.
