# Roadmap: Retiree Report

## Milestones

- ✅ **v1.0 Audit & Refinement** — Phases 1.1–1.8 (shipped 2026-03-05)
- 🚧 **v2.0 Eleventy Migration** — Phases 2–5 (in progress)

---

<details>
<summary>✅ v1.0 Audit & Refinement (Phases 1.1–1.8) — SHIPPED 2026-03-05</summary>

| Phase | Description | Status |
|-------|-------------|--------|
| 1.1 | CSS Audit & Token Unification | Complete |
| 1.2 | Header/Footer Standardization | Complete |
| 1.3 | Typography & Contrast Pass | Complete |
| 1.4 | Inline Style Elimination | Complete |
| 1.5 | Tap Target & Accessibility Hardening | Complete |
| 1.6 | Last Updated Timestamps | Complete |
| 1.7 | Link Audit & 404 Elimination | Complete |
| 1.8 | Homepage Decision (index vs v2) | Complete |

</details>

---

## 🚧 v2.0 Eleventy Migration

**Milestone Goal:** Replace manual HTML authoring with an Eleventy build system — single layout template, Markdown-based blog collection, and verified Cloudflare Pages deployment — while preserving all CSS, accessibility standards, and existing URLs.

### Phases

- [x] **Phase 2: Scaffold and Base Layout** — Initialize Eleventy, establish working build pipeline and base layout template with verified CSS delivery (completed 2026-03-10)
- [x] **Phase 3: Migrate All 15 Pages** — Convert every existing HTML page to Nunjucks templates with front matter; preserve all URLs and accessibility attributes (completed 2026-03-12)
- [x] **Phase 4: Blog Collection Infrastructure** — Configure article collection, post layout, and listing page for Markdown-based content authoring (completed 2026-03-12)
- [ ] **Phase 5: Deploy and Post-Migration Features** — Verify production deployment on Cloudflare Pages; add RSS feed and sitemap

---

## Phase Details

### Phase 2: Scaffold and Base Layout
**Goal**: A working Eleventy build exists that produces a CSS-correct `_site/` output with a verified base layout template
**Depends on**: Nothing (first milestone-2 phase)
**Requirements**: BUILD-01, BUILD-02, BUILD-03, BUILD-04, BUILD-05, TMPL-01, TMPL-02
**Success Criteria** (what must be TRUE):
  1. Running `npm install && npm run build` produces a `_site/` directory without errors
  2. `_site/assets/css/main.css` and `_site/assets/css/pages.css` exist after every build — no silent CSS passthrough failure
  3. Running `npm start` serves the site locally with live reload
  4. `base.njk` renders a complete HTML shell (head, skip-nav, header, nav, footer) using root-relative asset paths — no depth-dependent path variants
  5. `.planning/`, `design-system/`, and root-level `.md` files are absent from `_site/` output
**Plans**: 2 plans

Plans:
- [ ] 02-01-PLAN.md — Initialize npm, install Eleventy 3.1.2, create eleventy.config.js, .eleventyignore, and src/_data/site.js
- [ ] 02-02-PLAN.md — Create base.njk (full HTML shell) and page.njk (content wrapper); human verify via npm start

### Phase 3: Migrate All 14 Pages
**Goal**: Every existing page is served by the Eleventy build at its original URL with full accessibility attributes intact
**Depends on**: Phase 2
**Requirements**: TMPL-03, TMPL-04, TMPL-05, TMPL-06, BUILD-06
**Success Criteria** (what must be TRUE):
  1. All 14 pages (index + 404 + 12 pages/) load at their original `.html` URLs — no URL changes, no 404s
  2. The active page in the nav has `aria-current="page"` set automatically — no per-page manual copies of nav markup
  3. Each page displays its `last_updated` date in the layout — no manually maintained date strings in content files
  4. Medicare cost figures (Part B premium, deductibles, Part D costs, IRMAA threshold) rendered from `medicare.js` — vault-confirmed figures only
  5. All pages render at minimum 18px body text with AA contrast — no visual regressions from Milestone 1
**Plans**: 3 plans

Plans:
- [ ] 03-01-PLAN.md — Wave 0 foundation: medicare.js, nav.njk partial (aria-current), banner.njk partial, update base.njk and page.njk
- [ ] 03-02-PLAN.md — Batch A: migrate homepage + 6 LOW-complexity pages (about, disclaimer, glossary, newsletter, privacy-policy, tools-resources, work-with-me)
- [ ] 03-03-PLAN.md — Batch B: migrate 5 MEDIUM/HIGH pages + 404; CSS dedup audit; human visual verify

### Phase 4: Blog Collection Infrastructure
**Goal**: A scaffolded blog collection is in place so that a new Markdown article can be authored and published without any config changes
**Depends on**: Phase 3
**Requirements**: BLOG-01, BLOG-02, BLOG-03
**Success Criteria** (what must be TRUE):
  1. A Markdown file placed in `src/articles/` with `tags: articles` appears in `collections.articles` at build time
  2. An article listing page exists and renders without errors (empty state is acceptable)
  3. A `post.njk` layout renders a Markdown article with title, date, `last_updated`, and body content
**Plans**: 3 plans

Plans:
- [ ] 04-01-PLAN.md — Add readableDate filter to eleventy.config.js; create src/articles/articles.11tydata.json and src/articles/sample-article.md (BLOG-01)
- [ ] 04-02-PLAN.md — Create src/_includes/layouts/post.njk and src/articles.njk listing page (BLOG-02, BLOG-03)
- [ ] 04-03-PLAN.md — Human verify: listing page and individual article page render correctly in browser

### Phase 5: Deploy and Post-Migration Features
**Goal**: The site is live on Cloudflare Pages with all 15 pages verified, an RSS feed, and a sitemap — migration is complete
**Depends on**: Phase 4
**Requirements**: DEPLOY-01, DEPLOY-02, DEPLOY-03, DEPLOY-04, DEPLOY-05
**Success Criteria** (what must be TRUE):
  1. All 15 pages load on the production Cloudflare Pages URL — CSS renders, nav works, no console errors
  2. Cloudflare Pages build succeeds using `npm run build` with `_site` as the output directory and Node 22 pinned
  3. `/feed.xml` is accessible on the production domain and is valid RSS
  4. `/sitemap.xml` is accessible on the production domain and contains all page URLs
**Plans**: 3 plans

Plans:
- [ ] 05-01-PLAN.md — Create .node-version (Node 22 pin) and src/sitemap.njk; exclude 404 from sitemap (DEPLOY-01, DEPLOY-05)
- [ ] 05-02-PLAN.md — Install @11ty/eleventy-plugin-rss and register feedPlugin for /feed.xml (DEPLOY-04)
- [ ] 05-03-PLAN.md — Configure Cloudflare Pages dashboard and smoke-test production deployment (DEPLOY-02, DEPLOY-03)

---

## Progress

**Execution Order:** 2 → 3 → 4 → 5

| Phase | Milestone | Plans Complete | Status | Completed |
|-------|-----------|----------------|--------|-----------|
| 2. Scaffold and Base Layout | 2/2 | Complete   | 2026-03-10 | - |
| 3. Migrate All 15 Pages | 3/3 | Complete   | 2026-03-12 | - |
| 4. Blog Collection Infrastructure | 2/3 | Complete    | 2026-03-12 | - |
| 5. Deploy and Post-Migration Features | 2/3 | In Progress|  | - |
