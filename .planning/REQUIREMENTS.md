# Requirements: Retiree Report v3.0

**Defined:** 2026-03-12
**Core Value:** Seniors and caregivers can trust every number and navigate every page — accuracy and accessibility are non-negotiable.

## v3.0 Requirements

Requirements for v3.0 Design Consistency & Polish milestone.

### Navigation

- [ ] **NAV-01**: Visitor sees clear hover states on nav links with smooth 200ms color transition
- [ ] **NAV-02**: Visitor sees the active/current page link as visually distinct (gold underline or bold weight via `aria-current`)
- [ ] **NAV-03**: Mobile visitor can tap the hamburger toggle with a ≥ 44×44px target area
- [ ] **NAV-04**: Mobile visitor can tap each nav link with ≥ 44px vertical tap height when menu is open
- [ ] **NAV-05**: Visitor sees the "Subscribe Free" CTA button as visually prominent with gold fill on all screen sizes
- [x] **NAV-06**: Visitor sees a polished logo area with appropriate spacing, font weight, and sizing

### Hero Consistency

- [ ] **HERO-01**: All article/guide pages (medicare-101, medigap-vs-mapd, part-d, enrollment-periods) use a single `.page-hero` HTML pattern
- [ ] **HERO-02**: All reference pages (glossary, tools-resources, medicare-costs-2026, disclaimer, privacy-policy) use a single `.ref-hero` HTML pattern
- [ ] **HERO-03**: About page hero uses the `.page-hero` pattern (replacing one-off `.about-hero`)
- [ ] **HERO-04**: Work With Me page hero uses the `.page-hero` pattern (replacing one-off `.work-hero`)
- [ ] **HERO-05**: Newsletter landing page hero uses the `.page-hero` pattern (replacing one-off `.nl-landing-hero`)

### Page Consistency

- [ ] **PAGE-01**: All long-form guide pages share identical section structure: `.article` → `.article-section` → `.section-label` + `.section-rule` + h2
- [ ] **PAGE-02**: All callout/highlight boxes across the site use `.callout` + modifier (`.callout-insight`, `.callout-warning`, `.callout-myth`) — one-offs `.honest-box`, `.real-story`, `.mission-block` consolidated
- [ ] **PAGE-03**: Visitor sees breadcrumb navigation on ALL article and reference pages (not only 3 guides)
- [ ] **PAGE-04**: Newsletter signup block is a single reusable Nunjucks partial (`newsletter-cta.njk`) included consistently across all pages that need it
- [ ] **PAGE-05**: Site uses exactly three button variants: `.btn-primary`, `.btn-outline`, `.btn-outline-light` — no one-off button classes

### Typography & Spacing

- [ ] **TYPE-01**: Body prose line-height is 1.6–1.75 throughout all page and article templates
- [ ] **TYPE-02**: Article and reference page content is constrained to max 720px (`--content-width` token) consistently
- [ ] **TYPE-03**: h2 section headings have consistent top margin/padding across all page types (no per-page overrides)
- [ ] **TYPE-04**: Footer link font size is ≥ 16px (1rem) on all screen sizes

### Visual Polish

- [ ] **VIS-01**: All interactive elements (cards, buttons, links) have `cursor: pointer`
- [ ] **VIS-02**: All interactive cards and buttons have smooth 150–220ms hover transitions
- [ ] **VIS-03**: Footer column grid is visually polished with clear hierarchy (title, links, spacing)
- [ ] **VIS-04**: Focus rings (3px gold outline) are visible and correctly applied to all interactive elements across all pages

---

## Future Requirements

Deferred to v3.1 or later — not in current roadmap.

### Content

- **CONT-01**: New Medicare articles authored and published to the blog
- **CONT-02**: IRMAA surcharge amounts verified against SSA.gov and moved to `medicare.js`

### Performance

- **PERF-01**: Images optimized via `@11ty/eleventy-img` (WebP/AVIF)

### Discovery

- **DISC-01**: Pagefind search integration (defer until 20+ articles)

---

## Out of Scope

Explicitly excluded from v3.0.

| Feature | Reason |
|---------|--------|
| Font change (body) | Polish only milestone — Lato preserved; Atkinson Hyperlegible deferred |
| Color palette change | Navy/Gold brand preserved exactly as-is |
| Clean URL migration (`/about/`) | SEO risk — Cloudflare Pages has indexed `.html` URLs |
| CSS framework migration | Tailwind/Bootstrap not appropriate for existing hand-crafted system |
| JS framework | Eleventy + Nunjucks is sufficient; no React/Vue needed |
| CMS UI | File-based content workflow is intentional |
| Mega-menu / dropdown nav | 6 top-level items is manageable with polish; not restructuring nav IA |

---

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| NAV-01 | Phase 6 | Pending |
| NAV-02 | Phase 6 | Pending |
| NAV-03 | Phase 6 | Pending |
| NAV-04 | Phase 6 | Pending |
| NAV-05 | Phase 6 | Pending |
| NAV-06 | Phase 6 | Complete |
| HERO-01 | Phase 7 | Pending |
| HERO-02 | Phase 7 | Pending |
| HERO-03 | Phase 7 | Pending |
| HERO-04 | Phase 7 | Pending |
| HERO-05 | Phase 7 | Pending |
| PAGE-01 | Phase 8 | Pending |
| PAGE-02 | Phase 8 | Pending |
| PAGE-03 | Phase 8 | Pending |
| PAGE-04 | Phase 8 | Pending |
| PAGE-05 | Phase 8 | Pending |
| TYPE-01 | Phase 9 | Pending |
| TYPE-02 | Phase 9 | Pending |
| TYPE-03 | Phase 9 | Pending |
| TYPE-04 | Phase 9 | Pending |
| VIS-01 | Phase 9 | Pending |
| VIS-02 | Phase 9 | Pending |
| VIS-03 | Phase 9 | Pending |
| VIS-04 | Phase 9 | Pending |

**Coverage:**
- v3.0 requirements: 24 total
- Mapped to phases: 24
- Unmapped: 0 ✓

---
*Requirements defined: 2026-03-12*
*Last updated: 2026-03-12 — traceability confirmed after roadmap creation*
