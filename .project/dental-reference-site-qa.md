# UNA-Elementor — Dental Reference Site QA

## Status
Built on `feature/foundation-homepage-test` as the Step 6 Foundation stress-test deliverable.

## Purpose
This is not a client website and not the final Elementor build. It is a representative dental/medical static reference site used to expose weaknesses in UNA-Elementor before the Foundation is approved and multiplied.

The reference site must use the same approved system across page types:

`Variables → Base → Section Classes → Container Classes → Layout Classes → Surfaces → Typography/Content Primitives → Buttons → Media → Components/Patterns`

Any repeated Local Override discovered during QA is evidence that the Foundation or reusable component layer may need revision.

## Representative Sitemap

### Core
- Home — `prototype/index.html`
- About — `prototype/about.html`
- Team — `prototype/team.html`
- Provider Detail — `prototype/provider.html`
- Services — `prototype/services.html`
- Service Detail — `prototype/service.html`
- New Patients — `prototype/new-patients.html`
- Insurance & Financing — `prototype/insurance.html`
- Reviews — `prototype/reviews.html`
- Contact / Location — `prototype/contact.html`
- Book Appointment — `prototype/book.html`
- FAQ — `prototype/faq.html`

### WordPress content templates
- Blog index — `prototype/blog.html`
- Single Blog Post / `.wp-prose` — `prototype/post.html`
- Privacy / legal prose — `prototype/privacy.html`
- 404 — `prototype/404.html`

### Landing-page patterns
- Service / conversion LP — `prototype/lp-service.html`
- Campaign / paid LP — `prototype/lp-campaign.html`

### QA hub
- Visual sitemap — `prototype/sitemap.html`

## What This Site Must Stress-Test

- 1200px `container-full` with 20px safe sides;
- `container-read` long-form measure;
- fixed/fluid section spacing;
- equal grids: `grid-2`, `grid-3`, `grid-4`;
- asymmetric grids: `grid-60-40`, `grid-40-60`, `grid-70-30`, `grid-30-70`;
- `grid-reverse` behavior;
- structural bleed left/right;
- background, contained split, and bleed media relationships;
- light, neutral, primary, secondary, and dark surfaces;
- Heading/Text font separation;
- Display / H1-H6 / Body Type Scale;
- Lead, Small, Caption, Overline, Text Link, Meta, Helper, Legal classes;
- button variants and light/dark contexts;
- media ratios 16:9, 3:2, 4:3, 1:1, 3:4 with Cover;
- provider/service/review/blog card rhythm;
- `.gf-form` scope behavior;
- `.wp-prose` long-form WordPress content behavior;
- FAQ/details keyboard behavior;
- header/mobile navigation;
- 44px+ touch targets;
- visible focus;
- long headings/body copy;
- mobile/tablet/desktop reflow;
- CTA hierarchy: Book / Call / Visit / Contact.

## Implementation Boundary
The prototype is intentionally plain HTML/CSS/JS. CSS here is a visual test harness only. Production UNA-Elementor behavior remains governed by:

> **Elementor Settings + Elementor Variables + Responsive Settings → Global Classes.**

Use Local Overrides only for true exceptions. Use Hello child-theme CSS only when Elementor cannot correctly own the approved behavior, including scoped Gravity Forms / WordPress prose behavior where applicable.

## Approval Gate
The Foundation is not approved because this sitemap exists. It is approved only after visual QA identifies and resolves system-level failures across representative page types and responsive widths.

Review order:
1. Mobile first.
2. Tablet.
3. Desktop.
4. Keyboard/focus/accessibility states.
5. Long-content stress test.
6. Record repeated Local Overrides or translation problems.
7. Revise Foundation only where the evidence is reusable/systemic.
8. Explicit `APPROVE` before moving into full Elementor Components/Templates production.
