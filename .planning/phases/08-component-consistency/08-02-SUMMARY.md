---
plan: 08-02
phase: 08-component-consistency
status: complete
completed: 2026-03-14
requirements:
  - PAGE-02
---

## Summary

Unified all one-off callout box classes under the canonical `.callout` + modifier system. Renamed four one-off classes across 6 templates, added 3 new CSS modifier blocks, deleted 3 superseded CSS blocks, and removed all inline `style="margin-top:20px"` from callout elements.

## Tasks Completed

| # | Task | Status |
|---|------|--------|
| 1 | Rename one-off callout classes in all 6 template files | ✓ Complete |
| 2 | Add new CSS modifier blocks and delete superseded one-off blocks | ✓ Complete |

## Key Files

### Modified
- `src/pages/enrollment-periods.njk` — `.real-story` → `.callout.callout-story`, `.real-story-label` → `.callout-label`, removed 4× inline `style="margin-top:20px"`
- `src/pages/medicare-101.njk` — `.callout-quote` → `.callout.callout-quote`
- `src/pages/medigap-vs-mapd.njk` — `.callout-quote` → `.callout.callout-quote`
- `src/pages/work-with-me.njk` — `.honest-box` → `.callout.callout-honest`, `.honest-box-label` → `.callout-label`
- `src/pages/newsletter.njk` — `.honest-box` → `.callout.callout-honest`, `.honest-box-label` → `.callout-label`
- `src/pages/about.njk` — `.mission-block` → `.callout.callout-mission`, `.mission-label` → `.callout-label`
- `assets/css/pages.css` — added `.callout-story`, `.callout-honest`, `.callout-mission` blocks; deleted `.real-story`, `.honest-box`, `.mission-block`, `.mission-label` blocks

## Commits

- `b64d4fc` feat(08-02): rename one-off callout classes in all 6 template files
- `74a4f75` feat(08-02): add callout modifier CSS blocks and delete superseded one-off classes

## Verification

- ✓ Zero occurrences of `.real-story`, `.honest-box`, `.mission-block` in src/ or assets/
- ✓ 16 references to new modifier classes in pages.css
- ✓ All accessibility attributes (role, aria-labelledby, aria-label) preserved
- ✓ Eleventy build: 18 files, 0 errors

## Decisions / Deviations

- `.callout-quote` CSS selector was already correct — only markup needed `.callout` base class added; CSS block not deleted.
- Existing `.callout { margin: 32px 0; }` base handles spacing — inline margin-top attributes cleanly removed without replacement.
