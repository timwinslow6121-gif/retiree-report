---
phase: 07-hero-standardization
plan: 02
subsystem: ui
tags: [nunjucks, html, css-classes, hero, eleventy]

# Dependency graph
requires:
  - phase: 07-hero-standardization
    provides: Hero standardization context and .ref-hero target class name (07-CONTEXT.md)
provides:
  - Five reference/legal page templates with .ref-hero section class and .ref-hero-eyebrow eyebrow class
  - Zero .legal-hero occurrences in any .njk template
affects:
  - 07-03 (will define .ref-hero CSS — markup is now wired and ready)

# Tech tracking
tech-stack:
  added: []
  patterns: [Pure markup rename — no structural changes, no CSS changes; CSS definitions follow in plan 03]

key-files:
  created: []
  modified:
    - src/pages/glossary.njk
    - src/pages/disclaimer.njk
    - src/pages/privacy-policy.njk
    - src/pages/tools-resources.njk
    - src/pages/medicare-costs-2026.njk

key-decisions:
  - ".legal-meta paragraphs kept unchanged — will be consolidated in Phase 8 as specified"
  - ".work-eyebrow outside of hero sections not touched — only in-hero instances renamed"

patterns-established:
  - "ref-hero pattern: all reference/legal pages use class=ref-hero on section and class=ref-hero-eyebrow on eyebrow paragraph"

requirements-completed: [HERO-02]

# Metrics
duration: 1min
completed: 2026-03-13
---

# Phase 7 Plan 02: Hero Standardization — Ref Page Markup Summary

**Pure class renames on five reference/legal pages: .legal-hero -> .ref-hero and .work-eyebrow -> .ref-hero-eyebrow, satisfying HERO-02 markup requirement**

## Performance

- **Duration:** ~1 min
- **Started:** 2026-03-13T02:41:10Z
- **Completed:** 2026-03-13T02:42:05Z
- **Tasks:** 2
- **Files modified:** 5

## Accomplishments
- Renamed `class="legal-hero"` to `class="ref-hero"` on the hero section of all five reference/legal pages
- Renamed `class="work-eyebrow"` to `class="ref-hero-eyebrow"` on the eyebrow paragraph inside each hero section
- Eleventy dry-run build passes with zero errors after renames
- Zero `.legal-hero` occurrences remain in any .njk file; exactly five `.ref-hero-eyebrow` occurrences confirmed

## Task Commits

Each task was committed atomically:

1. **Task 1: Rename .legal-hero/.work-eyebrow in all five ref pages** - `ea36fde` (feat)
2. **Task 2: Verify build still passes after markup renames** - verification only, no code changes

**Plan metadata:** (docs commit below)

## Files Created/Modified
- `src/pages/glossary.njk` - section class legal-hero -> ref-hero, p class work-eyebrow -> ref-hero-eyebrow
- `src/pages/disclaimer.njk` - same two targeted renames
- `src/pages/privacy-policy.njk` - same two targeted renames
- `src/pages/tools-resources.njk` - same two targeted renames
- `src/pages/medicare-costs-2026.njk` - same two targeted renames

## Decisions Made
- `.legal-meta` paragraphs kept untouched as specified — Phase 8 will consolidate those
- Only the `<p class="work-eyebrow">` inside the hero section was renamed; `.work-eyebrow` occurrences elsewhere in the codebase (e.g. work-with-me.njk body) were left as-is

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered
None.

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- All five reference/legal page templates now use `.ref-hero` and `.ref-hero-eyebrow` as required
- Plan 07-03 can now define `.ref-hero` CSS rules — markup is fully wired and ready
- No blockers

---
*Phase: 07-hero-standardization*
*Completed: 2026-03-13*
