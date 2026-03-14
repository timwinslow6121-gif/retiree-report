# Roadmap: Retiree Report

## Milestones

- ✅ **v1.0 Audit & Refinement** — Phases 1.1–1.8 (shipped 2026-03-05)
- ✅ **v2.0 Eleventy Migration** — Phases 2–5 (shipped 2026-03-12)
- 🔵 **v3.0 Design Consistency & Polish** — Phases 6–9 (in progress)

---

<details>
<summary>✅ v1.0 Audit & Refinement (Phases 1.1–1.8) — SHIPPED 2026-03-05</summary>

| Phase | Description | Status |
|-------|-------------|--------|
| 1.1 | CSS Audit & Token Unification | Complete |
| 1.2 | Header/Footer Standardization | Complete |
| 1.3 | Typography & Contrast Pass | Complete |
| 1.4 | Inline Style Elimination | Complete |
| 1.5 | Tap Target & Accessibility Hardening | Complete |
| 1.6 | Last Updated Timestamps | Complete |
| 1.7 | Link Audit & 404 Elimination | Complete |
| 1.8 | Homepage Decision (index vs v2) | Complete |

</details>

<details>
<summary>✅ v2.0 Eleventy Migration (Phases 2–5) — SHIPPED 2026-03-12</summary>

- [x] **Phase 2: Scaffold and Base Layout** — Eleventy 3.1.2 + Nunjucks build pipeline, base.njk, CSS passthrough (completed 2026-03-10)
- [x] **Phase 3: Migrate All 15 Pages** — All pages to Nunjucks templates, medicare.js data, aria-current, last_updated (completed 2026-03-12)
- [x] **Phase 4: Blog Collection Infrastructure** — articles collection, post.njk, /articles/ listing, sample article (completed 2026-03-12)
- [x] **Phase 5: Deploy and Post-Migration Features** — .node-version, /feed.xml (Atom), /sitemap.xml, CF Pages production deploy (completed 2026-03-12)

Full archive: `.planning/milestones/v2.0-ROADMAP.md`

</details>

---

## v3.0 Design Consistency & Polish

### Phases

- [x] **Phase 6: Nav Redesign** — Hover states, active page indicator, mobile tap targets, CTA prominence, logo polish (completed 2026-03-13)
- [x] **Phase 7: Hero Standardization** — Collapse all hero variants into `.page-hero` and `.ref-hero` across all 15 pages (completed 2026-03-13)
- [x] **Phase 8: Component Consistency** — Unified callout system, newsletter partial, breadcrumbs everywhere, button variant enforcement (completed 2026-03-14)
- [ ] **Phase 9: Typography & Visual Polish** — Line height, content width, heading spacing, footer font size, transitions, focus rings

### Progress

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 6. Nav Redesign | 4/4 | Complete   | 2026-03-13 |
| 7. Hero Standardization | 3/3 | Complete   | 2026-03-13 |
| 8. Component Consistency | 4/4 | Complete   | 2026-03-14 |
| 9. Typography & Visual Polish | 0/? | Not started | - |

---

## Phase Details

### Phase 6: Nav Redesign

**Goal**: Every visitor experiences a polished, accessible navigation bar — hover feedback, a clear active page indicator, compliant mobile tap targets, and a prominent subscribe CTA.

**Depends on**: Nothing (first v3.0 phase — all nav markup lives in `base.njk`)

**Requirements**: NAV-01, NAV-02, NAV-03, NAV-04, NAV-05, NAV-06

**Success Criteria** (what must be TRUE):
  1. Visitor hovers a nav link and sees a smooth color or underline change that completes within 200ms
  2. Visitor on the current page sees that page's nav link visually distinct from the others (gold underline or bold weight driven by `aria-current`)
  3. Mobile visitor can tap the hamburger button without having to be precise — the touch target is at least 44×44px
  4. Mobile visitor with the nav open can tap any link cleanly — each link row is at least 44px tall
  5. The "Subscribe Free" button is immediately recognizable as a CTA — gold fill, not a plain link, visible at every viewport width

**Plans**: 3 plans

Plans:
- [ ] 06-01-PLAN.md — Nav link hover/active states + mobile tap targets (NAV-01, NAV-02, NAV-03, NAV-04)
- [ ] 06-02-PLAN.md — Mobile Subscribe CTA in header bar + fix button class (NAV-05)
- [ ] 06-03-PLAN.md — Logo CSS consolidation from pages.css into main.css (NAV-06)

---

### Phase 7: Hero Standardization

**Goal**: Every page on the site uses one of exactly two hero patterns — `.page-hero` for article/guide/brand pages and `.ref-hero` for reference and legal pages — eliminating all one-off hero classes.

**Depends on**: Phase 6 (base.njk nav work confirms template structure)

**Requirements**: HERO-01, HERO-02, HERO-03, HERO-04, HERO-05

**Success Criteria** (what must be TRUE):
  1. All four article/guide pages (medicare-101, medigap-vs-mapd, part-d, enrollment-periods) render their hero with identical markup using `.page-hero`
  2. All five reference/legal pages (glossary, tools-resources, medicare-costs-2026, disclaimer, privacy-policy) render their hero with identical markup using `.ref-hero`
  3. The About page hero looks visually consistent with the article hero treatment — no `.about-hero` class remains in templates or CSS
  4. The Work With Me page and Newsletter landing page heroes are visually consistent with the `.page-hero` pattern — their one-off classes are removed
  5. A developer inspecting source sees no hero class other than `.page-hero` or `.ref-hero` in any `.njk` template

**Plans**: 3 plans

Plans:
- [ ] 07-01-PLAN.md — Add part-d hero + rename about/work-with-me/newsletter to .page-hero (HERO-01, HERO-03, HERO-04, HERO-05)
- [ ] 07-02-PLAN.md — Rename all 5 ref pages from .legal-hero to .ref-hero (HERO-02)
- [ ] 07-03-PLAN.md — CSS cleanup: add .ref-hero block, delete one-off blocks, deduplicate .page-hero (HERO-01, HERO-02, HERO-03, HERO-04, HERO-05)

---

### Phase 8: Component Consistency

**Goal**: All reusable UI patterns — callout boxes, newsletter signup blocks, breadcrumbs, and buttons — exist as single authoritative implementations used identically across every page.

**Depends on**: Phase 7 (page structure confirmed before adding shared components inside pages)

**Requirements**: PAGE-01, PAGE-02, PAGE-03, PAGE-04, PAGE-05

**Success Criteria** (what must be TRUE):
  1. A visitor reading any long-form guide page sees the same visual section structure (label chip, horizontal rule, h2) — no guide has a divergent layout
  2. Every callout box across the site (insight, warning, myth, or plain) uses the `.callout` base class with a modifier — no `.honest-box`, `.real-story`, or `.mission-block` class appears in any template or the built `_site/`
  3. Every article and reference page shows a breadcrumb trail that correctly reflects the visitor's location — no article or reference page is missing breadcrumbs
  4. Every newsletter signup block on the site comes from `newsletter-cta.njk` — editing that one file updates all instances simultaneously
  5. The site uses exactly `.btn-primary`, `.btn-outline`, and `.btn-outline-light` — no other button class appears in templates or CSS

**Plans**: 4 plans

Plans:
- [ ] 08-01-PLAN.md — Verify section structure on all 4 guide pages + remove btn double-class violations (PAGE-01, PAGE-05)
- [ ] 08-02-PLAN.md — Unify all one-off callout classes under .callout + modifier system (PAGE-02)
- [ ] 08-03-PLAN.md — Add breadcrumbs to all 5 reference pages (PAGE-03)
- [ ] 08-04-PLAN.md — Extract newsletter-cta.njk partial and wire into all 7 pages (PAGE-04)

---

### Phase 9: Typography & Visual Polish

**Goal**: Every page reads comfortably at senior-appropriate line spacing and content width, heading rhythm is consistent, all interactive elements signal interactivity, and focus indicators meet WCAG 2.1 AA requirements.

**Depends on**: Phase 8 (all components finalized before applying global spacing/transition pass)

**Requirements**: TYPE-01, TYPE-02, TYPE-03, TYPE-04, VIS-01, VIS-02, VIS-03, VIS-04

**Success Criteria** (what must be TRUE):
  1. Body prose on every page (articles, reference pages, and marketing pages) reads at line-height 1.6–1.75 — no page has tighter leading
  2. All article and reference page body content is constrained to a maximum of 720px wide — no long prose lines stretch across a full desktop viewport
  3. An h2 section heading at the top of any page type has the same visual breathing room (top margin/padding) as the same heading on any other page type — no per-page overrides exist
  4. Footer links are readable at ≥16px on every screen size — no footer link shrinks below 1rem
  5. Every interactive element (card, button, link, input) shows `cursor: pointer`, transitions within 150–220ms on hover, and displays a 3px gold focus ring when keyboard-focused

**Plans**: TBD

---

*Last updated: 2026-03-14 — Phase 8 planned (4 plans, 1 wave — all parallel)*
