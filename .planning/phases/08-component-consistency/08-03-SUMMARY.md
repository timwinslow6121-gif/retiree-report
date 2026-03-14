---
phase: 08-component-consistency
plan: "03"
subsystem: markup
tags: [breadcrumbs, accessibility, navigation, ref-hero, reference-pages, legal-pages]
dependency_graph:
  requires: []
  provides: [PAGE-03]
  affects: [glossary.njk, tools-resources.njk, medicare-costs-2026.njk, disclaimer.njk, privacy-policy.njk]
tech_stack:
  added: []
  patterns: [breadcrumb nav, aria-current="page", breadcrumb-current span, aria-hidden separator]
key_files:
  created: []
  modified:
    - src/pages/glossary.njk
    - src/pages/tools-resources.njk
    - src/pages/medicare-costs-2026.njk
    - src/pages/disclaimer.njk
    - src/pages/privacy-policy.njk
decisions:
  - Breadcrumb parent links (Resources, Legal) use href="#" as placeholder per locked CONTEXT.md decision — no /resources/ or /legal/ index pages exist
  - Resources parent used for glossary, tools-resources, medicare-costs-2026; Legal parent used for disclaimer, privacy-policy
  - Breadcrumb inserted as first child of .ref-hero > .container, before .ref-hero-eyebrow, matching locked target structure
metrics:
  duration_minutes: 1
  completed_date: "2026-03-14"
  tasks_completed: 2
  files_modified: 5
---

# Phase 8 Plan 03: Breadcrumb Navigation for Reference Pages Summary

Breadcrumb nav added to all 5 reference pages using the canonical `.breadcrumb` pattern — Resources parent for the 3 reference pages, Legal parent for the 2 legal pages, all with `aria-current="page"` on the final item.

## Tasks Completed

| Task | Name | Commit | Files |
|------|------|--------|-------|
| 1 | Add breadcrumbs to 3 Resources reference pages | ba84d4c | glossary.njk, tools-resources.njk, medicare-costs-2026.njk |
| 2 | Add breadcrumbs to 2 Legal reference pages | 3b8ebf0 | disclaimer.njk, privacy-policy.njk |

## What Was Built

Five reference pages now have breadcrumb navigation matching the canonical pattern established by the 4 article pages. The breadcrumb `nav` element is inserted as the first child of `.ref-hero > .container`, before the `.ref-hero-eyebrow` paragraph.

**Breadcrumb trails added:**
- `glossary.njk` — Home › Resources › Glossary
- `tools-resources.njk` — Home › Resources › Tools & Resources
- `medicare-costs-2026.njk` — Home › Resources › Medicare Costs 2026
- `disclaimer.njk` — Home › Legal › Disclaimer
- `privacy-policy.njk` — Home › Legal › Privacy Policy

All 5 use `aria-label="Breadcrumb"` on the nav element, `aria-hidden="true"` on separator spans, and `aria-current="page"` on the final `.breadcrumb-current` span.

## Verification

- All 5 files returned by `grep -l "breadcrumb"` verification command
- Eleventy build: 18 files written, 0 errors (v3.1.2)

## Deviations from Plan

None — plan executed exactly as written.

## Self-Check: PASSED

Files exist:
- FOUND: src/pages/glossary.njk (breadcrumb present)
- FOUND: src/pages/tools-resources.njk (breadcrumb present)
- FOUND: src/pages/medicare-costs-2026.njk (breadcrumb present)
- FOUND: src/pages/disclaimer.njk (breadcrumb present)
- FOUND: src/pages/privacy-policy.njk (breadcrumb present)

Commits exist:
- FOUND: ba84d4c — feat(08-03): add breadcrumbs to 3 Resources reference pages
- FOUND: 3b8ebf0 — feat(08-03): add breadcrumbs to 2 Legal reference pages
