---
phase: 05-deploy-and-post-migration-features
plan: 01
subsystem: infra
tags: [eleventy, sitemap, cloudflare-pages, node-version, seo]

# Dependency graph
requires:
  - phase: 04-blog-collection-infrastructure
    provides: collections.all with articles entries; site._data including site.baseUrl
provides:
  - .node-version pin at repo root ensuring Cloudflare Pages builds with Node 22
  - /sitemap.xml generated from collections.all with absolute https://retiree.report URLs
  - 404 page excluded from sitemap collections to prevent crawl budget waste
affects: [06-cloudflare-pages-deploy, any future SEO/indexing work]

# Tech tracking
tech-stack:
  added: []
  patterns: [eleventyExcludeFromCollections on error pages; layout:null for non-HTML Eleventy templates]

key-files:
  created:
    - .node-version
    - src/sitemap.njk
  modified:
    - src/404.njk

key-decisions:
  - "layout: null required in sitemap.njk — omitting it causes Eleventy to wrap XML in HTML base layout, producing invalid XML"
  - "eleventyExcludeFromCollections: true on sitemap.njk prevents self-referential <loc> entries"
  - "eleventyExcludeFromCollections: true added to 404.njk — error pages excluded from sitemap per SEO best practice"
  - ".node-version contains only the major version (22) — accepted by Cloudflare Pages and nvm"

patterns-established:
  - "Non-HTML output templates (XML, JSON feeds) must use layout: null and eleventyExcludeFromCollections: true"
  - "Error pages (404) should carry eleventyExcludeFromCollections: true to avoid sitemap pollution"

requirements-completed: [DEPLOY-01, DEPLOY-05]

# Metrics
duration: 5min
completed: 2026-03-12
---

# Phase 05 Plan 01: Node Version Pin and XML Sitemap Summary

**Node 22 version pin via .node-version and /sitemap.xml generated from collections.all with absolute retiree.report URLs, 404 excluded from crawl index**

## Performance

- **Duration:** ~5 min
- **Started:** 2026-03-12T19:22:55Z
- **Completed:** 2026-03-12T19:28:00Z
- **Tasks:** 2
- **Files modified:** 3

## Accomplishments
- `.node-version` created at repo root with `22` — ensures Cloudflare Pages build image uses Node 22 LTS
- `src/sitemap.njk` generates valid `/sitemap.xml` from `collections.all` with all 15+ page URLs as absolute `https://retiree.report/...` entries
- `src/404.njk` updated with `eleventyExcludeFromCollections: true` — error page rendered but absent from sitemap

## Task Commits

Each task was committed atomically:

1. **Task 1: Create .node-version and src/sitemap.njk** - `b509bd6` (chore)
2. **Task 2: Exclude 404.njk from sitemap** - `79567e5` (feat)

## Files Created/Modified
- `.node-version` — Single line `22`; pins Node version for Cloudflare Pages and nvm
- `src/sitemap.njk` — Eleventy template with `layout: null`, `permalink: /sitemap.xml`, iterates `collections.all` with `site.baseUrl` prefix
- `src/404.njk` — Front matter extended with `eleventyExcludeFromCollections: true`; page content untouched

## Decisions Made
- `layout: null` must be explicit in sitemap.njk — not omitted — otherwise Eleventy wraps the XML output in the HTML base layout, producing invalid XML that parsers reject
- `eleventyExcludeFromCollections: true` on sitemap.njk itself prevents the `/sitemap.xml` URL from appearing as a `<loc>` entry inside the sitemap (self-referential loop)
- `site.baseUrl` used (not `site.url`) — site.js exports `baseUrl` key; `site.url` does not exist in this project

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered
- Initial grep for sitemap self-exclusion matched the XML namespace `xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"` string — confirmed false positive by scoping check to `<loc>` elements only; self-exclusion verified correct.

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- `.node-version` and `sitemap.xml` prerequisites for Cloudflare Pages first deploy are complete
- All `<loc>` entries use absolute `https://retiree.report` URLs — ready for submission to Google Search Console on deploy
- No blockers for Phase 05 Plan 02 (Cloudflare Pages deploy setup)

---
*Phase: 05-deploy-and-post-migration-features*
*Completed: 2026-03-12*
