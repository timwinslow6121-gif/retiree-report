---
phase: 03-migrate-all-15-pages
plan: 01
subsystem: ui
tags: [eleventy, nunjucks, medicare-data, partials, accessibility]

# Dependency graph
requires:
  - phase: 02-scaffold-and-base-layout
    provides: base.njk HTML shell and page.njk content wrapper that this plan modifies
provides:
  - src/_data/medicare.js with vault-confirmed 2026 Medicare cost figures
  - src/_includes/partials/nav.njk with 6 nav items and aria-current via page.url
  - src/_includes/partials/banner.njk with AEP announcement content
  - Updated base.njk using partials instead of hardcoded nav/banner
  - Updated page.njk with guarded last_updated slot
affects:
  - 03-02-PLAN (homepage migration uses medicare.tickerItems and nav partial)
  - 03-03-PLAN (all page migrations depend on nav.njk aria-current and page.njk last_updated)

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Eleventy data cascade: src/_data/medicare.js exposes medicare.* in all templates"
    - "Nunjucks partials: {% include 'partials/name.njk' %} from _includes/ root"
    - "aria-current via page.url comparison in nav partial (no plugin needed)"
    - "Guarded front matter display: {% if last_updated %}...{% endif %}"

key-files:
  created:
    - src/_data/medicare.js
    - src/_includes/partials/nav.njk
    - src/_includes/partials/banner.njk
  modified:
    - src/_includes/layouts/base.njk
    - src/_includes/layouts/page.njk

key-decisions:
  - "IRMAA surcharge dollar amounts withheld from medicare.js — flagged unverified in vault-Decisions-Log.md; IRMAA tables in medicare-costs-2026.html remain static HTML"
  - "nav.njk partial contains only the ul and CTA div — nav wrapper stays in base.njk"
  - "page-updated-meta class chosen for layout-injected date display (consistent with legal-meta pattern)"

patterns-established:
  - "Partials pattern: extract repeating layout sections to src/_includes/partials/ and include via {% include 'partials/name.njk' %}"
  - "Data cascade pattern: centralize factual figures in src/_data/*.js using export default"
  - "Guard pattern: use {% if frontmatter_var %} for optional front matter fields rendered in layout"

requirements-completed: [BUILD-06, TMPL-05, TMPL-06]

# Metrics
duration: 2min
completed: 2026-03-10
---

# Phase 3 Plan 01: Wave 0 Foundation Summary

**Centralized 2026 Medicare data file plus extracted nav/banner Nunjucks partials that unblock all 15 page migrations**

## Performance

- **Duration:** 2 min
- **Started:** 2026-03-10T19:08:34Z
- **Completed:** 2026-03-10T19:10:46Z
- **Tasks:** 3
- **Files modified:** 5 (3 created, 2 modified)

## Accomplishments

- Created src/_data/medicare.js with vault-confirmed CMS March 2026 figures — no stale 2025 HTML data used; IRMAA surcharges withheld as flagged unverified
- Extracted nav and banner into reusable Nunjucks partials with aria-current page detection via page.url; base.njk now uses {% include %} for both
- Added guarded last_updated slot to page.njk with {% if last_updated %} — works for all 15 pages regardless of whether they supply the front matter field

## Task Commits

1. **Task 1: Create medicare.js** - `6c621fc` (feat)
2. **Task 2: Create nav/banner partials; update base.njk** - `cb2a5bf` (feat)
3. **Task 3: Update page.njk last_updated guard** - `4daaac1` (feat)

**Plan metadata:** (docs commit — see below)

## Files Created/Modified

- `src/_data/medicare.js` - Vault-confirmed 2026 Medicare figures; ESM export default; tickerItems array for homepage
- `src/_includes/partials/nav.njk` - 6 nav items with aria-current conditionals using page.url comparison
- `src/_includes/partials/banner.njk` - AEP announcement banner extracted from base.njk
- `src/_includes/layouts/base.njk` - Replaced hardcoded nav ul/cta and banner div with {% include %} calls
- `src/_includes/layouts/page.njk` - Added guarded last_updated slot above content block

## Decisions Made

- IRMAA surcharge amounts withheld from medicare.js per vault-Decisions-Log.md — only threshold values included; surcharge tables in medicare-costs-2026.html stay as static HTML until SSA.gov verified
- nav.njk partial holds only the `<ul>` and `.nav-menu-cta` div; the `<nav>` wrapper stays in base.njk to avoid breaking the toggle JS which targets `.site-header`
- `page-updated-meta` chosen as the unified CSS class for layout-injected last-updated dates, separate from `legal-meta` used in inline page content

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

None — all three tasks completed without errors on first attempt.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- Wave 0 foundation complete; Plans 02 and 03 are now unblocked
- `medicare.*` template variables available for homepage ticker and any page using Medicare cost figures
- `page.njk` will correctly render `last_updated` for pages that provide it; pages without it (6 of 15) render cleanly
- No blockers for page migration work

---
*Phase: 03-migrate-all-15-pages*
*Completed: 2026-03-10*
