# Product Requirements Document (PRD): Retiree.Report

## 1. Executive Summary
A comprehensive, accessible website and blog providing accurate 2026 Medicare and retirement information for seniors (65+) and their caregivers.

## 2. Technical Requirements (The "How")
- **Tech Stack:** Static HTML5/CSS3. No heavy JS frameworks to ensure fast loading on older devices.
- **Design Philosophy:** - AA-grade accessibility (high contrast).
    - Minimum body font: 18px.
    - Large "Tap Targets" (buttons) for mobile/tablet users.
- **Knowledge Base:** All Medicare facts must be sourced from the `/Obsidian/` vault.

## 3. Product Scope (The 15 Pages)
- [ ] **Home Page:** Clear value prop and navigation to the "Big 4" (Parts A, B, C, D).
- [ ] **Medicare 101:** Overview of the enrollment timeline.
- [ ] **2026 Updates:** Specific focus on the $2,100 Part D cap and new premium rates.
- [ ] **The Blog:** Simple list view for deep-dive articles.
- [ ] [List your other 11 pages here...]

## 4. Acceptance Criteria (The "I's and T's")
- All internal links must work (no 404s).
- Every page must contain a "Last Updated" timestamp tied to the 2026 data.
- CSS must be unified; no conflicting styles between `main.css` and `pages.css`.

## 5. Constraints & Risks
- **Fact Accuracy:** If Claude is unsure about a 2026 number, it MUST pause and ask for verification.
- **Privacy:** No user tracking or cookies for this initial build phase.
