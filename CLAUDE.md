# CLAUDE.md

Guidance for AI agents working in this repository.

## Project

Marketing website for **All Webbed Labs** (`aibusinesssolutions.au`) — an Australian enterprise software development consultancy. Static, content-heavy site covering services, industries, case studies, and a blog. Parent org: All Webbed Up (`allwebbedup.com.au`).

Package name in `package.json` is `all-webbed-labs` (the "AWL" in the directory name).

## Tech stack

- **Astro 6.x** — static site generator, `.astro` single-file components, server-rendered at build, view transitions via `astro:transitions` (`ClientRouter`)
- **Tailwind CSS 4.x** — wired through `@tailwindcss/vite`, configured via `@theme` block in `src/styles/global.css` (no `tailwind.config.*` file — v4 uses CSS-first config)
- **TypeScript** — `astro/tsconfigs/strict`
- **Node ≥ 22.12.0** (enforced in `package.json` engines)
- **`@astrojs/sitemap`** — generates sitemap at build
- **PHP contact form** — `public/contact.php` handles form POSTs (runs on the production host, not part of the Astro build)

No React/Vue/Svelte. No backend framework. No DB.

## Commands

```bash
npm run dev      # astro dev — local dev server
npm run build    # astro build — outputs to dist/
npm run preview  # serve the built site
```

## Layout

```
src/
  components/   # ~24 .astro components (Hero, Header, Footer, ServicesGrid, ROICalculator, etc.) — composed into pages
  layouts/      # Layout.astro (root), plus ServicePageLayout, IndustryPageLayout, CaseStudyLayout
  pages/        # File-based routing
    index.astro
    blog/             # 3 posts + index
    case-studies/     # ~15 case studies + index
    industries/       # vertical-specific pages
    services/         # service-specific pages
    demos/
  styles/global.css   # Tailwind v4 theme + base styles + reveal animation utilities
public/
  contact.php         # PHP form handler (deployed as-is, not processed by Astro)
  videos/, favicons, robots.txt
```

## Conventions

- **One `.astro` file per page/component.** Pages compose components; section components own their own `<style>` blocks alongside markup.
- **Brand tokens live in `@theme`** in `src/styles/global.css` (`--color-primary: #0d9373`, dark surfaces `#0a0f0e`/`#0f1614`, fonts Sora for headings, DM Sans for body). Use these CSS vars or Tailwind's generated utilities rather than hard-coding hex.
- **Reveal-on-scroll** uses `.reveal`, `.reveal-left`, `.reveal-right`, `.reveal-scale` utility classes — an IntersectionObserver in `Layout.astro` adds `.visible`. Re-bound after each view transition via `astro:after-swap`.
- **SEO/meta is centralized in `Layout.astro`** — pages pass `title`, `description`, optional `ogImage`/`canonical`/`noindex`. Organization JSON-LD schema is emitted from the layout.
- **Site URL** is hardcoded as `https://aibusinesssolutions.au` in both `astro.config.mjs` and `Layout.astro` — update both if it changes.
- **Australian English** in copy (e.g. "Modernisation", "Sanitise", "Personalisation"). Match this when editing content.
- **No `README.md`** — `.gitignore` excludes it intentionally.

## Notes for agents

- This is a **content/marketing site**, not an app. Most changes are copy, new pages, or visual tweaks. Prefer editing existing components over introducing new abstractions.
- Adding a page = drop an `.astro` file in `src/pages/...`; the route matches the path. Wrap content in `<Layout title=... description=...>` with `<Header />` and `<Footer />`.
- Tailwind v4: do not create a `tailwind.config.js`. Extend the theme by adding tokens to the `@theme` block in `global.css`.
- The PHP file in `public/` is copied verbatim into `dist/` by Astro — don't try to import or process it.
- `.claude/settings.local.json` is gitignored; agent-local settings stay out of commits.
