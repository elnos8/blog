# elnos-blog

A minimal static blog built with Next.js (App Router), TypeScript, MDX, and Tailwind CSS.

## Install

```bash
npm install
```

## Run locally

```bash
npm run dev
```

Open [http://localhost:3001](http://localhost:3001).

## Build for production

```bash
npm run build
npm start
```

Static pages are generated at build time. Draft posts (frontmatter `draft: true`) are excluded in production.

## Writing new posts

1. Add a new `.mdx` file under `content/posts/`, e.g. `content/posts/my-post.mdx`.
2. Use this frontmatter (all optional except you'll want at least `title` and `date`):

```yaml
---
title: "Your post title"
date: "YYYY-MM-DD"
tags: ["tag1", "tag2"]
draft: false
---
```

3. Write content in MDX (Markdown + JSX). Images in Markdown like `![alt](/images/photo.jpg)` are supported; images under `/public/images/` can be referenced as `/images/filename.jpg`.
4. Restart or rely on dev server reload; the home page and the new post will show up. The URL is `/posts/<filename-without-mdx>`.

## Project structure

- `content/posts/*.mdx` — blog posts with frontmatter
- `app/` — Next.js App Router (layout, home, post page)
- `lib/posts.ts` — helpers to read and list posts
- `components/` — Header, Footer, dark mode toggle, MDX components
- `public/images/` — static images for posts

## Tech

- **Next.js** (App Router), **TypeScript**, **MDX** (`next-mdx-remote`), **Tailwind CSS**, **@tailwindcss/typography**
- Dark mode: class-based, toggle in header, preference stored in `localStorage`
- No database; content is read from the filesystem at build time
