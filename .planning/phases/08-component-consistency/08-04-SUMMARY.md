---
plan: 08-04
phase: 08-component-consistency
status: complete
completed: 2026-03-14
requirements:
  - PAGE-04
---

## Summary

Created `newsletter-cta.njk` partial with the canonical newsletter signup form and replaced inline newsletter forms across all 7 pages with a single include statement. Article pages retain their next-steps grids; only the form portion was centralized.

## Tasks Completed

| # | Task | Status |
|---|------|--------|
| 1 | Create newsletter-cta.njk partial | ✓ Complete |
| 2 | Wire partial into all 7 pages | ✓ Complete |

## Key Files

### Created
- `src/_includes/partials/newsletter-cta.njk` — canonical newsletter form (label, heading, intro, form, fine-print)

### Modified
- `src/index.njk` — newsletter section inner content → `{% include 'partials/newsletter-cta.njk' %}`
- `src/pages/about.njk` — inline form → include (outer wrapper + intro paragraph preserved)
- `src/pages/work-with-me.njk` — inline form → include (outer wrapper + intro preserved)
- `src/pages/medicare-101.njk` — `.article-newsletter-block` content → include (next-steps-grid intact)
- `src/pages/medigap-vs-mapd.njk` — form block at bottom → include (next-steps-grid intact)
- `src/pages/enrollment-periods.njk` — form block at bottom → include (next-steps-grid intact)
- `src/pages/part-d.njk` — form block at bottom → include (next-steps-grid intact)

## Commits

- `33ba1f1` feat(08-04): create newsletter-cta.njk partial
- `0dcf4fe` feat(08-04): wire newsletter-cta.njk partial into all 7 pages

## Verification

- ✓ 7 files contain `{% include 'partials/newsletter-cta.njk' %}`
- ✓ Zero `nl-form-wrapper` occurrences in page templates (form lives only in partial)
- ✓ Next-steps grids on all 4 article pages intact
- ✓ Eleventy build: 18 files, 0 errors

## Decisions / Deviations

- Partial uses `btn-primary` (single class) consistent with PAGE-05 cleanup in 08-01.
- `work-with-me.njk` eyebrow "Not Ready to Talk Yet?" preserved above the include.
- Index page section wrapper (`<section class="section newsletter-cta">`) and `<div class="newsletter-inner">` kept intact; only inner content replaced.
