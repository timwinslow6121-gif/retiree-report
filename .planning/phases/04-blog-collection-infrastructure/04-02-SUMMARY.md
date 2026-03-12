---
phase: 04-blog-collection-infrastructure
plan: "02"
subsystem: ui
tags: [eleventy, nunjucks, blog, collections, templates]

# Dependency graph
requires:
  - phase: 04-01
    provides: "articles collection config, readableDate filter, sample article, stub post.njk"
provides:
  - "post.njk: full article layout with h1 + published date via page.njk chain"
  - "articles.njk: listing page at /articles/ with article cards and empty state"
  - "_site/articles/index.html: rendered listing with one article card"
  - "_site/articles/understanding-medicare-part-b-in-2026/index.html: rendered article with published + last updated dates"
affects:
  - future article content creation
  - nav links to /articles/

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Layout chain: post.njk (layout: page.njk) → page.njk (layout: base.njk) — article body becomes post.njk content, post.njk output becomes page.njk content"
    - "post.data.title for collection item front matter access (not post.title)"
    - "collections.articles | reverse Nunjucks filter (non-mutating, no JS .reverse())"
    - "last_updated: empty string in listing page front matter prevents page.njk from rendering Last updated line"

key-files:
  created:
    - src/_includes/layouts/post.njk
    - src/articles.njk
  modified: []

key-decisions:
  - "post.njk uses layout: page.njk (not layout: base.njk) — page.njk handles last_updated and wraps in page-content div"
  - "page.date | readableDate used for Published date (not date variable or toLocaleDateString) — avoids timezone bug"
  - "last_updated: empty string in articles.njk prevents page.njk rendering Last updated line on listing"
  - "Nunjucks | reverse filter used on collections.articles (not JS .reverse()) — avoids mutating global collection array"

patterns-established:
  - "Article layout chain: Markdown → post.njk → page.njk → base.njk (three levels of nesting)"
  - "Listing pages use permalink: /articles/ explicit front matter and live at src root (not src/articles/)"

requirements-completed: [BLOG-02, BLOG-03]

# Metrics
duration: 4min
completed: 2026-03-12
---

# Phase 4 Plan 02: Blog Templates Summary

**post.njk and articles.njk templates completing the Eleventy blog collection infrastructure — articles render with title, published/last-updated dates, and listing page shows cards with empty-state fallback**

## Performance

- **Duration:** 4 min
- **Started:** 2026-03-12T01:33:05Z
- **Completed:** 2026-03-12T01:37:00Z
- **Tasks:** 2
- **Files modified:** 2

## Accomplishments
- Replaced stub post.njk with correct implementation: `layout: page.njk`, `page.date | readableDate` for Published date, correct layout chain so page.njk handles `last_updated` automatically
- Created articles.njk listing page at /articles/ with article cards (title link + date), empty state "Articles coming soon.", and Nunjucks `| reverse` filter
- Build exits 0, 16 files output; article page shows "Published: March 11, 2026" and "Last updated: March 11, 2026"; listing shows article card linking to sample article

## Task Commits

Each task was committed atomically:

1. **Task 1: Create src/_includes/layouts/post.njk** - `0afe314` (feat)
2. **Task 2: Create src/articles.njk listing page** - `adfc2d0` (feat)

**Plan metadata:** (docs commit — see below)

## Files Created/Modified
- `src/_includes/layouts/post.njk` - Article layout: h1 + Published date header, delegates last_updated to page.njk
- `src/articles.njk` - Listing page at /articles/ with article cards and empty state

## Decisions Made
- `post.njk` uses `layout: page.njk` (not `base.njk`) — corrected from the Plan 01 stub which incorrectly extended base.njk directly
- `page.date | readableDate` (not `date | readableDate`) — Eleventy's `page` object provides the correct UTC-based date, avoiding timezone off-by-one bugs
- `last_updated: ""` in articles.njk front matter — empty string is falsy in Nunjucks, preventing page.njk from emitting a "Last updated:" line on the listing page
- `collections.articles | reverse` Nunjucks filter used (non-mutating) over JS `.reverse()` which would mutate the global collection array

## Deviations from Plan

The stub post.njk from Plan 01 used `layout: base.njk` instead of `layout: page.njk`. This was the existing stub (Rule 3 auto-fix from Plan 01), not a deviation in this plan — Task 1 replaced it with the full correct implementation as planned.

None - plan executed exactly as written.

## Issues Encountered
None.

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- Blog collection infrastructure is complete. A new Markdown file in `src/articles/` with `layout: post.njk` front matter will render a formatted article and appear in the /articles/ listing automatically.
- Phase 4 is now fully complete: collection configured (Plan 01) + templates built (Plan 02).
- No blockers for future article content creation.

---
*Phase: 04-blog-collection-infrastructure*
*Completed: 2026-03-12*
