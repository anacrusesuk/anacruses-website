# Anacruses Website

Built with Next.js 14 + Tailwind CSS. Hosted on Netlify.

## Folder structure

```
anacruses/
├── app/                    ← Pages (one folder per URL)
│   ├── page.js             ← Homepage (/)
│   ├── about/page.js       ← About page (/about)
│   ├── training/page.js    ← Training page (/training)  ← AWIN LINK IS HERE
│   ├── news/page.js        ← News list (/news)
│   ├── news/[slug]/page.js ← Individual articles
│   ├── contact/page.js     ← Contact form (/contact)
│   └── services/
│       └── iso-9001/page.js ← ISO 9001 service page
├── components/
│   ├── Nav.js              ← Navigation bar
│   └── Footer.js           ← Footer
├── content/
│   └── news/               ← ★ ADD NEWS ARTICLES HERE (as .md files)
├── lib/
│   └── news.js             ← Reads the .md files — do not edit
├── public/
│   └── images/             ← ★ ADD YOUR IMAGES HERE (logo, QR code etc.)
├── netlify.toml            ← Netlify config + 301 redirects from old Wix URLs
└── .github/workflows/
    └── linkedin-post.yml   ← Auto-posts to LinkedIn when a new article is added
```

## Adding a news article

Create a new file in `content/news/` named `YYYY-MM-DD-your-title.md`:

```markdown
---
title: "Your Article Title Here"
date: "2026-06-12"
excerpt: "A one or two sentence summary that appears in the article list."
tag: "ISO 9001"
---

Your article body text here. Uses standard Markdown formatting.

## Subheading

More text...
```

Push the file to GitHub and Netlify will publish it within 30 seconds.

## Images to add to public/images/

- `awin_qrcode.png` — your Awin QR code from the Wix training page
- `logo.png` — the Anacruses logo

## Running locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Awin affiliate link

The Awin link is: https://tidd.ly/4973Hxg

It appears in: training/page.js, news/page.js, news/[slug]/page.js, contact/page.js

Do NOT change this URL.
