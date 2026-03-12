---
phase: 04-blog-collection-infrastructure
plan: 01
subsystem: ui
tags: [eleventy, nunjucks, markdown, collections, date-filter]

requires:
  - phase: 03-migrate-all-15-pages
    provides: working Eleventy build with base.njk layout chain

provides:
  - readableDate filter (Intl.DateTimeFormat, timeZone UTC) available in all Nunjucks templates
  - src/articles/ directory with articles.11tydata.json setting layout: post.njk and tags: articles
  - sample-article.md proving collections.articles populates at build time
  - Stub post.njk layout (to be replaced by Plan 02)
affects: [04-02, articles.njk, post.njk]

tech-stack:
  added: []
  patterns:
    - "Directory data file (articles.11tydata.json) injects shared front matter to avoid per-article boilerplate"
    - "readableDate filter uses Intl.DateTimeFormat with timeZone: UTC to prevent off-by-one on UTC-offset servers"
    - "Articles use explicit permalink to match title slug rather than filename slug"

key-files:
  created:
    - eleventy.config.js (readableDate filter added)
    - src/articles/articles.11tydata.json
    - src/articles/sample-article.md
    - src/_includes/layouts/post.njk (stub — replaced by Plan 02)
  modified:
    - eleventy.config.js

key-decisions:
  - "readableDate uses Intl.DateTimeFormat with timeZone: UTC (not toLocaleDateString) to prevent server-timezone off-by-one"
  - "articles.11tydata.json uses string 'articles' (not array) for tags — Eleventy accepts both, string is simpler"
  - "Stub post.njk created (Rule 3 auto-fix) because layout was required by articles collection before Plan 02 builds it"
  - "sample-article.md has explicit permalink to produce /articles/understanding-medicare-part-b-in-2026/ slug"

patterns-established:
  - "Directory data files set shared layout/tags so individual articles only need title, date, last_updated"
  - "Article permalinks are explicit in front matter, not derived from filename"

requirements-completed: [BLOG-01]

duration: 2min
completed: 2026-03-12
---

# Phase 4 Plan 01: Blog Collection Infrastructure Summary

**Tag-based articles collection (collections.articles) wired to readableDate filter and stub post.njk layout, with one sample article proving end-to-end build at /articles/understanding-medicare-part-b-in-2026/**

## Performance

- **Duration:** 2 min
- **Started:** 2026-03-12T01:27:00Z
- **Completed:** 2026-03-12T01:29:51Z
- **Tasks:** 2
- **Files modified:** 4 (eleventy.config.js modified; 3 created)

## Accomplishments

- readableDate filter added to eleventy.config.js using Intl.DateTimeFormat with timeZone: UTC
- src/articles/ directory created with articles.11tydata.json injecting layout: post.njk and tags: articles to all articles
- sample-article.md builds to _site/articles/understanding-medicare-part-b-in-2026/index.html — confirms collections.articles populates
- Stub post.njk created (auto-fix) so build passes before Plan 02 delivers the full layout

## Task Commits

Each task was committed atomically:

1. **Task 1: Add readableDate filter to eleventy.config.js** - `64aa322` (feat)
2. **Task 2: Create src/articles/ directory with data file and sample article** - `3b9f51a` (feat)

**Plan metadata:** (docs commit — forthcoming)

## Files Created/Modified

- `eleventy.config.js` — readableDate filter added inside default export function
- `src/articles/articles.11tydata.json` — directory data file; sets layout: post.njk and tags: articles for every .md in src/articles/
- `src/articles/sample-article.md` — proof-of-concept article; builds at /articles/understanding-medicare-part-b-in-2026/
- `src/_includes/layouts/post.njk` — minimal stub (auto-fix); inherits base.njk, renders title + readableDate + content

## Decisions Made

- readableDate uses Intl.DateTimeFormat with timeZone: UTC rather than toLocaleDateString() — prevents off-by-one errors on UTC-offset servers (a YAML date of 2026-03-11 would render as March 10 without UTC pin)
- articles.11tydata.json uses string "articles" (not array) for tags — Eleventy accepts both, simpler to read
- sample-article.md has explicit permalink field to produce the expected slug from the title rather than filename

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 3 - Blocking] Created stub post.njk layout**
- **Found during:** Task 2 (Create src/articles/ directory with data file and sample article)
- **Issue:** articles.11tydata.json sets layout: post.njk but post.njk does not exist until Plan 02; Eleventy throws fatal error "layout does not exist"
- **Fix:** Created minimal src/_includes/layouts/post.njk inheriting base.njk — renders h1, readableDate date, and article content. Plan 02 will replace this stub with the full implementation.
- **Files modified:** src/_includes/layouts/post.njk (created)
- **Verification:** npm run build exits 0; _site/articles/understanding-medicare-part-b-in-2026/index.html present
- **Committed in:** 3b9f51a (Task 2 commit)

**2. [Rule 3 - Blocking] Added permalink to sample-article.md**
- **Found during:** Task 2 verification
- **Issue:** Without explicit permalink, Eleventy slugs the article as /articles/sample-article/ (from filename), but plan success criteria requires /articles/understanding-medicare-part-b-in-2026/ (from title)
- **Fix:** Added permalink: /articles/understanding-medicare-part-b-in-2026/ to front matter
- **Files modified:** src/articles/sample-article.md
- **Verification:** _site/articles/understanding-medicare-part-b-in-2026/index.html confirmed present after clean build
- **Committed in:** 3b9f51a (Task 2 commit)

---

**Total deviations:** 2 auto-fixed (both Rule 3 - Blocking)
**Impact on plan:** Both fixes required for build to pass and success criteria to be met. No scope creep. Stub post.njk is intentionally minimal — Plan 02 will replace it.

## Issues Encountered

None beyond the two auto-fixed blocking issues above.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- collections.articles ready — Plan 02 (articles.njk listing page + full post.njk layout) can proceed immediately
- readableDate filter available as `| readableDate` in any Nunjucks template
- No blockers

## Self-Check: PASSED

- FOUND: eleventy.config.js
- FOUND: src/articles/articles.11tydata.json
- FOUND: src/articles/sample-article.md
- FOUND: src/_includes/layouts/post.njk
- FOUND: _site/articles/understanding-medicare-part-b-in-2026/index.html
- FOUND commit: 64aa322 (Task 1)
- FOUND commit: 3b9f51a (Task 2)

---
*Phase: 04-blog-collection-infrastructure*
*Completed: 2026-03-12*
