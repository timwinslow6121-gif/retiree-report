---
phase: 03-migrate-all-15-pages
plan: "03"
subsystem: ui
tags: [eleventy, nunjucks, medicare, html-migration, css-audit]

requires:
  - phase: 03-01
    provides: medicare.js vault-confirmed data, nav/banner partials, page.njk layout
  - phase: 03-02
    provides: homepage ticker, 7 LOW-complexity pages migrated

provides:
  - 5 MEDIUM/HIGH complexity pages as .njk files (enrollment-periods, medicare-101, medicare-costs-2026, medigap-vs-mapd, part-d)
  - 404.njk at site root (permalink /404.html for Cloudflare Pages)
  - All 14 pages live in _site/ at original .html URLs
  - Vault-corrected figures: Part A premiums ($311/$565), IRMAA threshold ($109,000)

affects:
  - Phase 04 (article publishing) depends on full nav working across all 14 pages
  - Cloudflare Pages deployment depends on 404.html at site root

tech-stack:
  added: []
  patterns:
    - "Vault data substitution pattern: {{ medicare.* }} in structured cost tables only"
    - "IRMAA surcharge rows remain static HTML until SSA.gov verification"
    - "404.njk at src/ root (not src/pages/) for Cloudflare Pages routing"
    - "Prose mentions of Medicare figures left as static text; only table cells use template vars"

key-files:
  created:
    - src/pages/enrollment-periods.njk
    - src/pages/medicare-101.njk
    - src/pages/medicare-costs-2026.njk
    - src/pages/medigap-vs-mapd.njk
    - src/pages/part-d.njk
    - src/404.njk
  modified: []

key-decisions:
  - "Part D base premium ($38.99) inserted into part-d.njk penalty section prose since legacy page had no structured table for it"
  - "Part D TrOOP ($2,100) replaced throughout part-d.njk content (prose + section heading) since must_haves required no hardcoded values"
  - "CSS deduplication audit found zero duplicates in main.css — no removals made"
  - "IRMAA surcharge dollar amounts in costs table remain static HTML per vault-Decisions-Log.md (unverified)"

patterns-established:
  - "Pattern: 404 page lives at src/ root level, not src/pages/, to output at _site/404.html"
  - "Pattern: Vault corrections override legacy page values — $285→$311, $518→$565, $106k→$109k"

requirements-completed: [TMPL-03, TMPL-04, TMPL-05, TMPL-06, BUILD-06]

duration: 9min
completed: 2026-03-12
---

# Phase 3 Plan 03: Batch B Migration Summary

**5 MEDIUM/HIGH pages + 404.njk migrated to Eleventy; vault-corrected Part A premiums ($311/$565) and IRMAA threshold ($109k) replace 2025 wrong values; CSS audit confirmed zero duplicates**

## Performance

- **Duration:** 9 min
- **Started:** 2026-03-12T00:22:15Z
- **Completed:** 2026-03-12T00:31:00Z
- **Tasks:** 2 of 2 auto tasks completed (Task 3 is human-verify checkpoint)
- **Files modified:** 6

## Accomplishments
- Migrated enrollment-periods.njk (10 enrollment period sections with period-cards)
- Migrated medicare-101.njk (8-section guide, prose figures left as editorial context)
- Migrated medicare-costs-2026.njk (HIGH complexity) — corrected Part A premium rows ($311/month and $565/month replacing wrong $285/$518), IRMAA threshold ($109,000 replacing $106,000), vault template vars throughout cost tables
- Migrated medigap-vs-mapd.njk (full content with page-hero and article sections)
- Migrated part-d.njk — TrOOP and base premium now from medicare.js with no hardcoded values
- Created src/404.njk at site root with permalink /404.html for Cloudflare Pages custom 404 routing
- CSS audit: confirmed main.css has zero duplicate selectors, zero duplicate @import, zero duplicate :root blocks

## Task Commits

1. **Task 1: Migrate 5 MEDIUM/HIGH pages and 404** - `268d166` (feat)
2. **Task 2: CSS deduplication audit** - `bee815b` (chore)

## Files Created/Modified
- `src/pages/enrollment-periods.njk` - 10-section enrollment periods guide
- `src/pages/medicare-101.njk` - 8-section Medicare 101 guide
- `src/pages/medicare-costs-2026.njk` - HIGH complexity cost reference with vault data substitutions
- `src/pages/medigap-vs-mapd.njk` - Full Medigap vs MAPD comparison guide
- `src/pages/part-d.njk` - Part D guide with TrOOP and base premium from medicare.js
- `src/404.njk` - Custom 404 page at site root

## Decisions Made
- Part D base premium ($38.99) was not in a structured table in the legacy page. Added it to the penalty section prose as `{{ medicare.partDBasePremium }}` since must_haves required no hardcoded values.
- Part D TrOOP ($2,100) replaced in all prose mentions in part-d.njk (not just tables) since must_haves stated "no hardcoded values for these figures."
- CSS audit found no duplicates — main.css was already clean. Committed as documentation of audit completion.
- IRMAA surcharge dollar amounts (e.g., $259, $370, $628.90) remain static HTML per vault-Decisions-Log.md; unverified at SSA.gov.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 2 - Missing Critical] Added base premium template var to prose in part-d.njk**
- **Found during:** Task 1 (part-d.njk migration)
- **Issue:** Legacy part-d.html had no structured cost table with $38.99. Must_haves required "no hardcoded values for these figures."
- **Fix:** Inserted `{{ medicare.partDBasePremium }}` into the penalty explanation prose where the benchmark premium is described.
- **Files modified:** src/pages/part-d.njk
- **Verification:** grep confirms medicare.partDBasePremium present, no $38.99 literal in file
- **Committed in:** 268d166 (Task 1 commit)

---

**Total deviations:** 1 auto-fixed (Rule 2 — missing critical data hook)
**Impact on plan:** Necessary to satisfy must_haves truthiness requirement. No scope creep.

## Issues Encountered
- None

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- All 14 pages live in _site/ at original .html URLs
- Phase 3 human-verify checkpoint pending (Task 3)
- Phase 4 (article publishing) can begin after human verification approval
- Blockers inherited from previous plans: article permalink structure (/blog/, /articles/, /posts/) needs product decision

---
*Phase: 03-migrate-all-15-pages*
*Completed: 2026-03-12*
