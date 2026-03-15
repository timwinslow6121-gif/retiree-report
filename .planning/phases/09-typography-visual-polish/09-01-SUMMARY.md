---
phase: 09-typography-visual-polish
plan: 01
subsystem: ui
tags: [css, typography, line-height, container, accessibility]

# Dependency graph
requires: []
provides:
  - "--leading-prose: 1.7 CSS token in main.css :root"
  - "body line-height set to var(--leading-prose) site-wide"
  - "h2 margin-top 2.5rem with h2:first-child suppressor"
  - ".site-footer__links a font-size 1rem"
  - ".container constrained to 720px via var(--content-width)"
  - "Out-of-range global p line-height overrides removed from pages.css"
  - "Bare .container 760/800px override rules removed from pages.css"
affects: [phase 09 plans 02+, any future typography or layout work]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "CSS token --leading-prose: 1.7 is the canonical prose line-height — always reference via var()"
    - "Body sets line-height once via token; page-level p resets must not override line-height globally"
    - ".container is 720px (--content-width); .container-wide stays at 1100px (--max-width)"

key-files:
  created: []
  modified:
    - assets/css/main.css
    - assets/css/pages.css

key-decisions:
  - "--leading-prose: 1.7 added as dedicated token after --leading-relaxed; body references it directly"
  - "h2:first-child { margin-top: 0 } suppressor added to prevent double-spacing when h2 is first element"
  - ".container overrides in pages.css deleted entirely (not patched); canonical main.css rule now governs all"
  - "Component-scoped line-height values (.callout-story p 1.8, .cred-body 1.8, .nl-who-list 1.8) preserved — they are intentional component values, not global prose resets"
  - "line-height: 1.75 at pages.css line 2067 left untouched — not in 1.8/1.85 target set per plan spec"

patterns-established:
  - "Pattern: Typography tokens go in main.css :root; page files must not redeclare global prose line-height"
  - "Pattern: .container-wide entries preserved in pages.css; only bare .container overrides deleted"

requirements-completed: [TYPE-01, TYPE-02, TYPE-03, TYPE-04]

# Metrics
duration: 25min
completed: 2026-03-15
---

# Phase 9 Plan 01: Typography Consistency Pass Summary

**Added `--leading-prose: 1.7` token to main.css, enforced site-wide body line-height, constrained `.container` to 720px, normalized h2 top-margin to 2.5rem, fixed footer link font size to 1rem, and removed 5 global p line-height + 5 container-width overrides from pages.css**

## Performance

- **Duration:** 25 min
- **Started:** 2026-03-15T01:45:50Z
- **Completed:** 2026-03-15T02:10:00Z
- **Tasks:** 2 of 2
- **Files modified:** 2

## Accomplishments

- Established `--leading-prose: 1.7` as the canonical prose line-height token in main.css :root
- Enforced consistent body line-height (1.7) across all 15 pages by updating the single `body` selector
- Added `h2 { margin-top: 2.5rem }` with `h2:first-child { margin-top: 0 }` suppressor for clean heading rhythm
- Raised `.site-footer__links a` font size from inherited `--text-xs` (0.778rem) to 1rem (16px+) for readability
- Constrained `.container` to 720px optimal reading width via `var(--content-width)` token
- Deleted 5 bare `p { line-height: 1.8/1.85 }` global overrides from pages.css page sections
- Deleted 5 `.container { max-width: 760/800px }` override rules from pages.css page sections

## Task Commits

Each task was committed atomically:

1. **Task 1: Add --leading-prose token, enforce line-height 1.7, h2 margin-top, footer font-size** - `b4bcd40` (feat)
2. **Task 2: Constrain .container to 720px, remove out-of-range overrides from pages.css** - `a2da439` (feat)

## Files Created/Modified

- `assets/css/main.css` - Added `--leading-prose: 1.7` token; updated body line-height; added h2 margin-top + h2:first-child suppressor; added font-size: 1rem to .site-footer__links a; changed .container max-width to var(--content-width)
- `assets/css/pages.css` - Removed 5 global `p { line-height: 1.8/1.85 }` rules; removed 5 `.container { max-width: 760/800px }` rules; preserved component-scoped overrides

## Decisions Made

- `--leading-prose: 1.7` placed immediately after `--leading-relaxed: 1.75` in :root for logical grouping with sibling leading tokens
- `h2:first-child { margin-top: 0 }` added as suppressor rule to prevent unwanted top gap when h2 opens a section
- pages.css `.container` override rules deleted in full (not patched) since canonical main.css rule now governs all containers
- Component-scoped `line-height: 1.8` values (`.callout-story p`, `.callout-mission p`, `.cred-body`, `.nl-who-list`) preserved as they are intentional component-level values, not global prose resets
- `line-height: 1.75` at pages.css ~line 2067 left intact — it is within the valid `--leading-relaxed` range and not in the target set per plan specification

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

None.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- Typography baseline is clean: single source of truth for prose line-height (1.7), heading rhythm (h2 2.5rem top), container width (720px), footer link legibility (1rem)
- Phase 09-02 visual polish work can proceed on a consistent typographic foundation
- No blockers or concerns

---
*Phase: 09-typography-visual-polish*
*Completed: 2026-03-15*
