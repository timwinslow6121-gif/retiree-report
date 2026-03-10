# Requirements: Retiree Report

**Defined:** 2026-03-09
**Milestone:** v2.0 — Eleventy Migration
**Core Value:** Seniors and caregivers can trust every number and navigate every page — accuracy and accessibility are non-negotiable.

---

## v2.0 Requirements

### Build System

- [x] **BUILD-01**: Developer can install the project with `npm install` and run `npm run build` to produce a `_site/` output
- [x] **BUILD-02**: Developer can run `npm start` to serve the site locally with live reload
- [x] **BUILD-03**: CSS, fonts, and images in `assets/` are copied verbatim to `_site/assets/` with no reprocessing
- [x] **BUILD-04**: `.planning/`, `design-system/`, and root-level `.md` files are excluded from `_site/` output via `.eleventyignore`
- [x] **BUILD-05**: Global site data (siteName, baseUrl, currentYear) is available to all templates via `src/_data/site.js`
- [x] **BUILD-06**: Medicare cost figures (Part B premium, deductibles, IRMAA brackets) are centralized in `src/_data/medicare.js` and referenced in templates as `{{ medicare.partBPremium }}` — no hardcoded cost figures in any template

### Templates

- [x] **TMPL-01**: A `base.njk` layout provides the full HTML shell — `<head>`, header, nav, footer, skip-nav link, and nav toggle JS — using root-relative asset paths
- [x] **TMPL-02**: A `page.njk` layout extends `base.njk` and provides page-level chrome (content wrapper, hero defaults)
- [ ] **TMPL-03**: All 15 existing pages are converted from `.html` to `.njk` templates with front matter (title, description, permalink) — content is migrated as-is, no new authoring
- [ ] **TMPL-04**: All 15 migrated pages are served at their original `.html` URLs (e.g., `/pages/about.html`) — no URL changes
- [x] **TMPL-05**: The Eleventy Navigation Plugin manages the nav; `aria-current="page"` is set automatically from front matter — no manual copies per page
- [x] **TMPL-06**: The `last_updated` front matter value is rendered on each page in the layout

### Blog Collection

- [ ] **BLOG-01**: An articles collection is configured in `eleventy.config.js` with a defined tag convention
- [ ] **BLOG-02**: A `post.njk` layout exists for individual Markdown articles (title, date, last_updated, body)
- [ ] **BLOG-03**: An article listing page exists and renders correctly (empty state is acceptable at launch)

### Deploy

- [ ] **DEPLOY-01**: A `.node-version` file pins Node 22 for Cloudflare Pages
- [ ] **DEPLOY-02**: Cloudflare Pages build is configured with correct build command (`npm run build`) and output directory (`_site`)
- [ ] **DEPLOY-03**: Production deployment is smoke-tested — all 15 pages load, CSS renders, nav works
- [ ] **DEPLOY-04**: An RSS feed is generated at `/feed.xml`
- [ ] **DEPLOY-05**: A sitemap is generated at `/sitemap.xml` containing all page URLs

---

## Future Requirements (v3.0+)

### Search

- **SRCH-01**: User can search site content (Pagefind or similar static search) — defer until 20+ articles

### Content Scale

- **CONT-01**: Tag index pages list all articles by tag
- **CONT-02**: Article reading time estimate displayed on post layout
- **CONT-03**: Pagination on article listing page (> 10 articles)

### Performance

- **PERF-01**: Images optimized at build time via `@11ty/eleventy-img` (WebP/AVIF generation)

---

## Out of Scope

| Feature | Reason |
|---------|--------|
| JavaScript framework (React, Vue, Svelte) | Existing Nunjucks + vanilla JS is sufficient; no interactivity requires a framework |
| CSS preprocessor / Tailwind migration | `main.css` + `pages.css` validated in Milestone 1; no regressions acceptable |
| CMS UI (Contentful, Sanity, Decap) | File-based content workflow matches Obsidian vault approach |
| Clean URL migration (`/pages/about/`) | Cloudflare Pages has indexed `.html` URLs; SEO risk deferred to future milestone |
| New page content authoring | Milestone 2 is migration only; new articles are post-launch |
| Eleventy Serverless / Edge functions | Static output only; no server-side rendering needed |

---

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| BUILD-01 | Phase 2 | Complete |
| BUILD-02 | Phase 2 | Complete |
| BUILD-03 | Phase 2 | Complete |
| BUILD-04 | Phase 2 | Complete |
| BUILD-05 | Phase 2 | Complete |
| BUILD-06 | Phase 3 | Complete |
| TMPL-01 | Phase 2 | Complete |
| TMPL-02 | Phase 2 | Complete |
| TMPL-03 | Phase 3 | Pending |
| TMPL-04 | Phase 3 | Pending |
| TMPL-05 | Phase 3 | Complete |
| TMPL-06 | Phase 3 | Complete |
| BLOG-01 | Phase 4 | Pending |
| BLOG-02 | Phase 4 | Pending |
| BLOG-03 | Phase 4 | Pending |
| DEPLOY-01 | Phase 5 | Pending |
| DEPLOY-02 | Phase 5 | Pending |
| DEPLOY-03 | Phase 5 | Pending |
| DEPLOY-04 | Phase 5 | Pending |
| DEPLOY-05 | Phase 5 | Pending |

**Coverage:**
- v2.0 requirements: 20 total
- Mapped to phases: 20
- Unmapped: 0 ✓

---
*Requirements defined: 2026-03-09*
*Last updated: 2026-03-09 — Traceability populated after roadmap creation*
