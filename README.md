# Rainbow Kids Montessori — website

Marketing website for Rainbow Kids Montessori (AMI Montessori preschool, 25 years,
7:1 ratio, holistic education). **This is a prototype / dummy** — real copy, photos
and contact details still to come. See [`QUESTIONNAIRE.md`](./QUESTIONNAIRE.md) for
everything we need from the school.

## Stack

- React 19 + Vite 8
- `react-router` for pages
- Plain CSS with a pastel design-token system in [`src/index.css`](./src/index.css)
- `aos` for scroll-in animations, `notistack` for form toasts
- No backend — the enquiry form opens a pre-filled email for now

## Run it

```bash
npm install
npm start          # dev server — http://localhost:5173
npm run build      # outputs to dist/
npm run preview    # serve the production build
npm run lint       # oxlint
```

## Where things live

| What | Where |
| --- | --- |
| Colours, fonts, spacing, shared UI classes | `src/index.css` |
| Site name, phone, WhatsApp, address, socials, nav, stats | `src/data/site.js` |
| Page copy: values, timeline, programmes, FAQ, volunteering | `src/data/content.js` |
| Events calendar | `src/data/events.js` |
| Parent reviews + alumni | `src/data/reviews.js` |
| Blog posts | `src/data/blog.js` |
| Staff / faculty | `src/data/team.js` |
| Pages | `src/screens/*` |
| Shared components (nav, footer, hero, CTA, placeholders…) | `src/components/*` |
| Per-page `<title>`/meta | `src/components/Seo.jsx` (used by every page) |
| Static SEO, Open Graph, JSON-LD | `index.html` |
| `robots.txt`, `sitemap.xml`, SPA redirect | `public/` |

## Pages

`/` · `/about` · `/curriculum` · `/events` · `/gallery` · `/reviews` · `/blog` ·
`/blog/:slug` · `/get-involved` · `/contact` · 404 fallback

## Replacing placeholders

- **Photos/videos:** every coloured tile is `<Placeholder>` — swap for `<img>` /
  `<video>` / Instagram embeds. Search the codebase for `Placeholder` and `ph--`.
- **Domain:** find-and-replace `rainbowkids.lk` (in `index.html`,
  `src/components/Seo.jsx`, `public/sitemap.xml`, `public/robots.txt`).
- **Contact details:** all in `src/data/site.js` (marked `DUMMY`).
- **Form handler:** `src/screens/ContactPage/index.jsx` `onSubmit` — wire to a
  real endpoint (Formspree, Netlify Forms, custom API…).

## Deploying

Static build. Any static host works (Netlify, Cloudflare Pages, Vercel, S3…).
`public/_redirects` handles SPA routing on Netlify/Cloudflare; other hosts need an
equivalent "rewrite all to /index.html" rule.
