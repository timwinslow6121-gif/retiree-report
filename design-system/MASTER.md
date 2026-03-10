# Design System — MASTER

> **HOW TO USE:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, follow the rules below exclusively.

**Project:** Retiree Report (retiree.report)
**Generated:** 2026-03-05
**Audience:** Seniors 65+ | Medicare & Retirement Information Blog
**Compliance Target:** WCAG 2.1 AA (AAA where achievable)

---

## 1. Brand Identity

| Attribute | Value |
|-----------|-------|
| Product | Medicare & Retirement Information Blog |
| Industry | Healthcare / Senior Services |
| Tone | Trustworthy, Accessible, Professional, Legible |
| Style System | Accessible & Ethical — High Contrast, Large Text, Keyboard Navigation |
| Anti-patterns | Small text, complex navigation, AI purple/pink gradients, dark patterns |

---

## 2. Color Palette

> Source of truth: `assets/css/main.css` `:root` block.
> All colors below are verified WCAG-compliant on their documented background.

### Brand Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-navy` | `#0D1F3C` | Primary brand, headers, nav background |
| `--color-navy-dark` | `#081629` | Footer background, deepest surfaces |
| `--color-navy-mid` | `#1a3560` | Hover states, mid-level surfaces |
| `--color-navy-light` | `#2a5490` | Gradient endpoints, accents |
| `--color-gold` | `#B8943A` | Primary accent, focus rings, CTAs |
| `--color-gold-dark` | `#9A7A2E` | CTA hover, body link color |
| `--color-gold-light` | `#D4AE5A` | Outline button text, nav links on dark bg |

### Neutral Colors

| Token | Hex | Contrast on White | WCAG Level |
|-------|-----|-------------------|------------|
| `--color-white` | `#FFFFFF` | — | — |
| `--color-off-white` | `#F7F5F2` | — | Body background |
| `--color-bg-subtle` | `#EEF0F4` | — | Alt section bg |
| `--color-border` | `#D0D5DC` | — | Dividers |
| `--color-text` | `#1A1A1A` | 16:1 | AAA |
| `--color-text-muted` | `#4A5568` | 7.5:1 | AA |
| `--color-text-light` | `#6B7280` | 4.6:1 | AA (large text only) |

### Category Accent Colors (AA-compliant on white)

| Token | Hex | Background Token | Usage |
|-------|-----|------------------|-------|
| `--color-finance` | `#1B5E20` | `--color-finance-bg: #E8F5E9` | Finance/Retirement articles |
| `--color-health` | `#7B1212` | `--color-health-bg: #FFEBEE` | Medicare/Health articles |
| `--color-lifestyle` | `#0D3B7A` | `--color-lifestyle-bg: #E3EBF8` | Lifestyle articles |

### Color Usage Rules

- **Never** use `--color-text-light` for body copy — large text / labels only
- **Always** use `--color-gold` (not gold-light) for the focus ring
- **On dark navy backgrounds:** use `#C5D3E0` for secondary text (verified 4.5:1+)
- **CTA buttons:** `--color-gold` bg + `--color-navy` text = 8.5:1 contrast (AAA)

---

## 3. Typography

### Font Stack

| Role | Font | Fallback |
|------|------|---------|
| Headings | `Playfair Display` | Georgia, 'Times New Roman', serif |
| Body / UI | `Lato` | Arial, Helvetica, sans-serif |

**Google Fonts import (active in main.css):**
```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,700&family=Lato:wght@300;400;700;900&display=swap');
```

> **Note:** The UI/UX Pro Max tool recommended Figtree + Noto Sans as a healthcare-optimized pair.
> The project has chosen Playfair Display + Lato for brand differentiation (trust + legibility).
> Both combinations are WCAG-compliant. Do not change fonts without a brand decision.

### Type Scale

| Token | Value | px equiv | Usage |
|-------|-------|----------|-------|
| `--text-xs` | `0.778rem` | ~14px | Captions, meta, footer only |
| `--text-sm` | `0.889rem` | ~16px | Nav links, tags, small labels |
| `--text-base` | `1.125rem` | 18px | Body copy (senior-optimized) |
| `--text-lg` | `1.25rem` | ~22px | Lead paragraphs, card titles |
| `--text-xl` | `1.5rem` | 27px | H4, section subtitles |
| `--text-2xl` | `2rem` | 36px | H3, card titles |
| `--text-3xl` | `2.5rem` | 45px | H2 |
| `--text-4xl` | `3.25rem` | 58px | H1 |

**Critical rules:**
- Base `html` font-size is `18px` — all `rem` values are relative to this
- **Minimum body text: 18px** (senior audience mandate)
- `--text-xs` (14px) is permitted only for metadata, captions, and fine print — never body copy
- H1–H4 use `font-family: var(--font-serif)` (Playfair Display)
- All UI elements (nav, buttons, labels) use `font-family: var(--font-sans)` (Lato)

### Line Heights

| Token | Value | Usage |
|-------|-------|-------|
| `--leading-tight` | `1.2` | Headings only |
| `--leading-snug` | `1.4` | Card titles |
| `--leading-normal` | `1.6` | Standard body copy |
| `--leading-relaxed` | `1.75` | Long-form article body |

### Line Length
- Body paragraphs: `max-width: 70ch`
- Hero lead text: `max-width: 56ch`
- Section subtitles: `max-width: 58ch`

---

## 4. Spacing Scale

| Token | Value | px | Usage |
|-------|-------|----|-------|
| `--space-1` | `0.25rem` | 4.5px | Tight inline gaps |
| `--space-2` | `0.5rem` | 9px | Icon gaps, small padding |
| `--space-3` | `0.75rem` | 13.5px | Button padding top/bottom |
| `--space-4` | `1rem` | 18px | Standard paragraph margin |
| `--space-5` | `1.25rem` | 22.5px | Card internal padding (bottom) |
| `--space-6` | `1.5rem` | 27px | Card padding, grid gap |
| `--space-8` | `2rem` | 36px | Between components |
| `--space-10` | `2.5rem` | 45px | Section header margin |
| `--space-12` | `3rem` | 54px | Large component gaps |
| `--space-16` | `4rem` | 72px | Section padding block |
| `--space-20` | `5rem` | 90px | Hero padding block |
| `--space-24` | `6rem` | 108px | Max hero / oversized sections |

---

## 5. Layout

| Token | Value | Usage |
|-------|-------|-------|
| `--max-width` | `1100px` | Page container max width |
| `--content-width` | `720px` | Article / readable content max width |
| `--gutter` | `var(--space-6)` = 1.5rem | Inline padding |

**Container class:** `.container` — `max-width: 1100px; margin-inline: auto; padding-inline: clamp(1rem, 5vw, 1.5rem)`

**Grid system:**
- `.grid--2`: 1 col → 2 col at `640px`
- `.grid--3`: 1 col → 2 col at `768px` → 3 col at `1024px`

---

## 6. Border Radius & Shadows

### Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | `4px` | Buttons, tags, focus ring base |
| `--radius-md` | `8px` | Cards, modals, input fields |
| `--radius-lg` | `12px` | Hero image frames, feature blocks |

### Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 4px rgba(0,0,0,0.08)` | Default card |
| `--shadow-md` | `0 2px 10px rgba(0,0,0,0.10)` | Hovered card |
| `--shadow-lg` | `0 6px 24px rgba(0,0,0,0.13)` | Lifted card, dropdowns |

---

## 7. Transitions & Motion

| Token | Value | Usage |
|-------|-------|-------|
| `--transition-fast` | `150ms ease` | Color/opacity changes |
| `--transition-base` | `220ms ease` | Transform, background changes |

**Rules:**
- All hover state changes must use a transition (no instant flips)
- Card lift: `transform: translateY(-4px)` — never scale (causes layout shift)
- `prefers-reduced-motion` is globally handled in `main.css` — do not override

---

## 8. Focus & Accessibility

- **Focus ring:** `box-shadow: 0 0 0 3px #B8943A` (gold, 3px, on all `:focus-visible`)
- **Minimum touch target:** 44×44px for all interactive elements
- **Skip nav link:** `.skip-nav` — present on every page, links to `#main-content`
- **Screen readers:** `.sr-only` utility class available
- **Color alone:** Never use color as the sole differentiator
- **ARIA:** All icon-only buttons require `aria-label`
- **Landmark roles:** `<header>`, `<nav>`, `<main>`, `<footer>` on every page
- **Form labels:** Every `<input>` must have a paired `<label for="...">` or `aria-label`

---

## 9. Component Inventory

All components are defined in `assets/css/main.css`. Page-specific overrides live in `assets/css/pages.css`.

| Component Class | File | Description |
|-----------------|------|-------------|
| `.site-header` | main.css | Sticky navy top bar |
| `.site-logo` | main.css | Serif wordmark with `.site-logo__accent` gold span |
| `.site-nav` | main.css | Mobile-collapsible, horizontal at 768px+ |
| `.nav-toggle` | main.css | 44×44px hamburger, ARIA-expanded |
| `.hero` | main.css | Navy gradient hero, centered |
| `.btn` / `.btn--primary` / `.btn--outline` / `.btn--secondary` | main.css | Button variants |
| `.section` / `.section--alt` / `.section--dark` | main.css | Section wrappers |
| `.section-header` | main.css | Eyebrow + title + subtitle block |
| `.category-card` | main.css | Finance / health / lifestyle cards with stripe |
| `.article-card` | main.css | Blog post preview card |
| `.tag--finance` / `.tag--health` / `.tag--lifestyle` | main.css | Category pill badges |
| `.newsletter` | main.css | Dark navy email capture section |
| `.site-footer` | main.css | Dark footer with links + disclaimer |
| `.grid` / `.grid--2` / `.grid--3` | main.css | CSS Grid system |
| `.container` / `.content-width` | main.css | Layout wrappers |
| `.skip-nav` | main.css | Accessibility skip link |
| `.sr-only` | main.css | Screen reader only content |
| `.form-label` | main.css | Accessible form labels |

---

## 10. Page Structure Pattern

Every page follows this section order:

```
1. Skip Nav Link        (.skip-nav)
2. Site Header          (.site-header > .container > .site-header__inner)
3. Main Content         (<main id="main-content">)
   a. Hero / Page Hero  (.hero or .page-hero)
   b. Content Sections  (.section with .container)
   c. Newsletter CTA    (.newsletter)
4. Site Footer          (.site-footer)
```

---

## 11. Anti-Patterns (Never Use)

| Forbidden | Reason |
|-----------|--------|
| Font size below 18px for body copy | Senior audience accessibility |
| `--color-text-light` (#6B7280) for body text | Fails WCAG AA on white (4.6:1 < 4.5:1 is borderline) |
| Complex mega-menus or nested nav dropdowns | Cognitive load for seniors |
| AI-style gradients (purple/pink/neon) | Off-brand, low trust signal |
| Emojis as UI icons | Use SVG icons (Lucide or Heroicons) |
| `transform: scale()` on hover | Causes layout shift |
| Color as sole differentiator | WCAG 1.4.1 violation |
| Auto-playing media | WCAG 1.4.2 + senior UX violation |
| Removing focus outlines | WCAG 2.4.7 violation |
| Placeholder-only form labels | WCAG 1.3.1 violation |

---

## 12. Pre-Delivery Checklist

Before committing any HTML/CSS changes:

**Accessibility**
- [ ] All images have descriptive `alt` text
- [ ] All form inputs have `<label for="">` or `aria-label`
- [ ] Focus states are visible (gold ring) on all interactive elements
- [ ] Skip nav link present and functional
- [ ] Landmark elements used correctly: `<header>`, `<nav>`, `<main>`, `<footer>`
- [ ] `prefers-reduced-motion` respected (handled globally in main.css — do not override)

**Typography & Contrast**
- [ ] No body text below 18px
- [ ] Body text uses `--color-text` (#1A1A1A) — minimum 16:1 on white
- [ ] Muted text uses `--color-text-muted` (#4A5568) — 7.5:1 on white
- [ ] Heading color on white backgrounds: `--color-navy` (#0D1F3C)

**Interaction**
- [ ] All clickable elements have `cursor: pointer`
- [ ] All hover states use `transition: var(--transition-fast)` or `--transition-base`
- [ ] Cards use `translateY` lift, not `scale`

**Responsive**
- [ ] Tested at 375px, 640px, 768px, 1024px, 1440px
- [ ] No horizontal scroll on mobile
- [ ] Touch targets ≥ 44×44px

**Brand Consistency**
- [ ] Only Playfair Display (headings) and Lato (body/UI) fonts used
- [ ] Color tokens used — no hardcoded hex values except where documented
- [ ] SVG icons used — no emoji icons

---

## 13. Page-Specific Overrides Index

| Page File | Override File | Notes |
|-----------|--------------|-------|
| `index.html` | `design-system/pages/homepage.md` | If exists |
| `pages/medicare-101.html` | `design-system/pages/medicare-101.md` | If exists |
| `pages/medicare-costs-2026.html` | `design-system/pages/medicare-costs-2026.md` | If exists |
| `pages/part-d.html` | `design-system/pages/part-d.md` | If exists |
| `pages/medigap-vs-mapd.html` | `design-system/pages/medigap-vs-mapd.md` | If exists |
| `pages/enrollment-periods.html` | `design-system/pages/enrollment-periods.md` | If exists |
| `pages/glossary.html` | `design-system/pages/glossary.md` | If exists |
| `pages/tools-resources.html` | `design-system/pages/tools-resources.md` | If exists |
| `pages/about.html` | `design-system/pages/about.md` | If exists |
| `pages/newsletter.html` | `design-system/pages/newsletter.md` | If exists |
| `pages/work-with-me.html` | `design-system/pages/work-with-me.md` | If exists |
