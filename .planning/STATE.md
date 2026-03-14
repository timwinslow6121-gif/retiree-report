---
gsd_state_version: 1.0
milestone: v3.0
milestone_name: Design Consistency & Polish
status: completed
stopped_at: Completed 07-hero-standardization 07-03-PLAN.md
last_updated: "2026-03-13T02:49:08.422Z"
last_activity: "2026-03-13 — 07-02 executed: .legal-hero -> .ref-hero rename on all 5 ref pages"
progress:
  total_phases: 4
  completed_phases: 2
  total_plans: 7
  completed_plans: 7
---

# STATE: Retiree Report

## Project Reference

See: .planning/PROJECT.md (updated 2026-03-12)

**Core value:** Seniors and caregivers can trust every number and navigate every page — accuracy and accessibility are non-negotiable.
**Current focus:** v3.0 Design Consistency & Polish — nav redesign, hero standardization, component consistency, typography polish

## Current Position

Phase: Phase 7 — Hero Standardization (complete)
Plan: 03 of 03 complete
Status: Phase 7 complete — CSS consolidated; .ref-hero added, all one-off hero blocks deleted
Last activity: 2026-03-13 — 07-03 executed: CSS cleanup — .ref-hero added, .about-hero/.work-hero/.nl-landing-hero deleted, .page-hero deduplicated

Progress: [██████████] 3/3 plans in phase 7

## Phase Summary

| Phase | Name | Requirements | Status |
|-------|------|--------------|--------|
| 6 | Nav Redesign | NAV-01–NAV-06 | Complete (plans 01-04) |
| 7 | Hero Standardization | HERO-01–HERO-05 | Complete (plans 01-03 done) |
| 8 | Component Consistency | PAGE-01–PAGE-05 | Not started |
| 9 | Typography & Visual Polish | TYPE-01–TYPE-04, VIS-01–VIS-04 | Not started |

## Performance Metrics

**Velocity:**
- Total plans completed: 0 (v3.0)
- Average duration: —
- Total execution time: —

**By Phase:**

| Phase | Plans | Total | Avg/Plan |
|-------|-------|-------|----------|
| 6 | — | — | — |
| 7 | — | — | — |
| 8 | — | — | — |
| 9 | — | — | — |

*Updated after each plan completion*
| Phase 06-nav-redesign P03 | 2 | 3 tasks | 2 files |
| Phase 06-nav-redesign P04 | 1 | 2 tasks | 2 files |
| Phase 07-hero-standardization P02 | 1 | 2 tasks | 5 files |
| Phase 07-hero-standardization P01 | 2 | 3 tasks | 4 files |
| Phase 07-hero-standardization P03 | 8 | 3 tasks | 1 files |

## Accumulated Context

### Decisions (carried from v2.0)

- [v1.0]: `index.html` is the canonical homepage (Phase 1.8)
- [v1.0]: CSS lives in `assets/css/main.css` and `assets/css/pages.css` — no regressions acceptable
- [v2.0]: Eleventy 3.1.2 on Node 22 LTS; Nunjucks for all layout templates
- [v2.0]: Preserve all existing `.html` URL paths via front matter `permalink` — no clean URL migration
- [v2.0]: `assets/` passthrough copy (not `assets/css/`) to avoid silent path mismatch pitfall
- [v2.0]: ESM enforced throughout: type:module in package.json, export default in all .js files
- [v2.0]: IRMAA surcharge amounts remain static HTML until SSA.gov verified; only entry-point threshold uses medicare.irmaaThreshold
- [v3.0]: Polish only — keep Navy/Gold brand colors, Playfair Display + Lato fonts; no brand color or font changes
- [v3.0]: Two hero class targets: .page-hero (articles/guides/brand pages), .ref-hero (reference/legal pages)
- [v3.0]: Newsletter signup to be extracted into single reusable partial (newsletter-cta.njk)
- [v3.0]: Callout system to be unified under .callout + modifier — .honest-box, .real-story, .mission-block are one-offs to eliminate
- [v3.0]: Button variants locked to exactly three: .btn-primary, .btn-outline, .btn-outline-light
- [v3.0/06-04]: Nav wiring approach: add BEM class to markup first, then remove competing pages.css descendant rules — no new CSS needed when canonical rules already exist in main.css
- [v3.0/07-02]: .legal-meta paragraphs kept unchanged on ref pages — consolidation deferred to Phase 8
- [v3.0/07-02]: .work-eyebrow only renamed inside hero sections; occurrences outside hero sections left untouched
- [v3.0/07-01]: about-hero-intro renamed to page-hero-intro to satisfy zero about-hero substring occurrences in markup verification
- [v3.0/07-01]: Inner content of each page hero left unchanged — CSS cleanup of residual one-off classes deferred to plan 07-03
- [v3.0/07-03]: .ref-hero uses var(--navy) not var(--navy-deep) — visually distinguishes reference pages from article pages
- [v3.0/07-03]: .ref-hero-eyebrow is a standalone top-level class (not nested) to allow reuse outside hero context

### Pending Todos

None yet.

### Blockers/Concerns

None.

## Session Continuity

Last session: 2026-03-13T02:49:08.421Z
Stopped at: Completed 07-hero-standardization 07-03-PLAN.md
Resume file: None
Next step: `/gsd:plan-phase 6`
