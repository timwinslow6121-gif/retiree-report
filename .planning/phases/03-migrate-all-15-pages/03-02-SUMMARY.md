---
phase: 03-migrate-all-15-pages
plan: 02
subsystem: ui
tags: [eleventy, nunjucks, migration, homepage, pages]

# Dependency graph
requires:
  - phase: 03-01
    provides: medicare.js data file, nav.njk/banner.njk partials, page.njk last_updated guard, base.njk layout chain
provides:
  - src/index.njk homepage with ticker wired to medicare.tickerItems loop
  - 7 LOW-complexity pages in src/pages/ (about, disclaimer, glossary, newsletter, privacy-policy, tools-resources, work-with-me)
  - All Batch A pages output to _site/ at their original .html URLs
  - Validated migration pattern: front matter contract + content extraction + path fixup
affects:
  - 03-03 (Batch B pages follow same migration pattern)
  - Phase 4 article development

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Nunjucks loop {% for item in medicare.tickerItems %} replaces hardcoded ticker spans"
    - "Front matter contract: layout, title, description, permalink, last_updated"
    - "Content extraction: strip html/head/body/header/nav/footer boilerplate, keep main content only"
    - "Root-relative paths: /pages/, /assets/ replacing any ../ relative refs"
    - "last_updated via front matter — never hardcoded in content body"

key-files:
  created:
    - src/pages/about.njk
    - src/pages/disclaimer.njk
    - src/pages/glossary.njk
    - src/pages/newsletter.njk
    - src/pages/privacy-policy.njk
    - src/pages/tools-resources.njk
    - src/pages/work-with-me.njk
  modified:
    - src/index.njk (upgraded from smoke-test placeholder to real homepage with ticker loop)

key-decisions:
  - "Homepage ticker uses two {% for item in medicare.tickerItems %} loops (double pass) to support CSS infinite scroll animation"
  - "layout: page.njk (not layouts/page.njk) used in front matter — matches resolved path in Eleventy config"

patterns-established:
  - "Migration pattern: read legacy HTML, extract main content, strip boilerplate, add front matter, fix paths"
  - "No hardcoded Medicare dollar amounts in page templates — all come from medicare.js via front matter or data file"

requirements-completed: [TMPL-03, TMPL-04, TMPL-06, BUILD-06]

# Metrics
duration: continuation (Task 1 previously committed as 14c43fd; Task 2 committed now as f3adb54)
completed: 2026-03-11
---

# Phase 03 Plan 02: Batch A Migration Summary

**Homepage ticker wired to medicare.tickerItems loop + 7 LOW-complexity pages migrated to Eleventy, all outputting at their original .html URLs**

## Performance

- **Duration:** Continuation plan — Task 1 committed in prior session, Task 2 completed in this session
- **Started:** Prior session (Task 1 — 14c43fd)
- **Completed:** 2026-03-11
- **Tasks:** 2 of 2
- **Files modified:** 8 (1 modified + 7 created)

## Accomplishments

- Homepage (`src/index.njk`) upgraded from smoke-test placeholder to full real content, ticker now loops from `medicare.tickerItems` with no hardcoded Medicare figures
- 7 Batch A pages created in `src/pages/` with proper Eleventy front matter, all outputting at exact original URLs
- Full Batch A verification passed: aria-current="page" in about.html confirms nav.njk partial integration works end-to-end

## Task Commits

Each task was committed atomically:

1. **Task 1: Migrate homepage** - `14c43fd` (feat) — prior session
2. **Task 2: Migrate 7 LOW-complexity pages** - `f3adb54` (feat)

**Plan metadata:** committed with SUMMARY.md (docs commit)

## Files Created/Modified

- `src/index.njk` — Real homepage content replacing smoke-test; ticker uses `{% for item in medicare.tickerItems %}` double-loop
- `src/pages/about.njk` — About page at /pages/about.html, last_updated: March 2026
- `src/pages/disclaimer.njk` — Disclaimer at /pages/disclaimer.html
- `src/pages/glossary.njk` — Medicare Glossary at /pages/glossary.html
- `src/pages/newsletter.njk` — Newsletter subscribe at /pages/newsletter.html
- `src/pages/privacy-policy.njk` — Privacy Policy at /pages/privacy-policy.html
- `src/pages/tools-resources.njk` — Tools & Resources at /pages/tools-resources.html
- `src/pages/work-with-me.njk` — Work With Me at /pages/work-with-me.html

## Decisions Made

- Double-loop ticker pattern (two `{% for item in medicare.tickerItems %}` blocks) used to support CSS infinite scroll — matches the original duplicate-span pattern in legacy index.html
- `layout: page.njk` (not `layouts/page.njk`) confirmed as the correct path used by Eleventy config in this project

## Deviations from Plan

None — plan executed exactly as written. Both tasks were fully specified and the Eleventy build infrastructure from Plan 03-01 worked without modification.

## Issues Encountered

None. Build exits 0. All 8 output files generated. All 6 success criteria from the plan verified.

## User Setup Required

None — no external service configuration required.

## Next Phase Readiness

- Batch A complete: homepage + 7 LOW-complexity pages live in Eleventy
- Migration pattern validated and ready for Batch B (6 MEDIUM-complexity pages with Medicare cost figures)
- Plan 03-03 unblocked — medicare.js data file, nav.njk partial, page.njk last_updated guard all confirmed working

## Self-Check: PASSED

Files verified:
- src/index.njk — EXISTS
- src/pages/about.njk — EXISTS
- src/pages/disclaimer.njk — EXISTS
- src/pages/glossary.njk — EXISTS
- src/pages/newsletter.njk — EXISTS
- src/pages/privacy-policy.njk — EXISTS
- src/pages/tools-resources.njk — EXISTS
- src/pages/work-with-me.njk — EXISTS

Commits verified:
- 14c43fd — Task 1 (homepage migration) — EXISTS
- f3adb54 — Task 2 (7 pages migration) — EXISTS

---
*Phase: 03-migrate-all-15-pages*
*Completed: 2026-03-11*
