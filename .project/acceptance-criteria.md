# UNA-Elementor Step 6 Acceptance Criteria

Step 6 — Build Core Page System — is approved only when all applicable criteria below are satisfied.

## Foundation
- Global colors, typography, spacing, containers, breakpoints, buttons, forms, radii, shadows, and media ratios are intentionally defined.
- Local one-off styling is not being used to compensate for missing system rules.

## Content / Data
- Shared practice information has an intentional source of truth.
- Service/provider/location relationships are defined where applicable.
- Reusable vs page-specific content is understood.
- Dynamic content is used only where it materially improves maintainability or scale.

## Global System
- Header, navigation, mobile navigation, footer, breadcrumbs, and global CTA patterns are built and responsive.
- Book / Call / Visit / Contact actions are consistently represented where relevant.

## Components
- Reusable dental components exist for the approved design direction.
- Components handle long/short content, optional content, missing images where applicable, and mobile/tablet/desktop behavior.
- Interactive components have appropriate hover/focus/active states.

## Representative Templates
At minimum, representative versions exist for applicable project types:
- Homepage
- Services Index
- One Service Detail
- About
- Provider Detail
- Location Detail
- Contact / Appointment

Not every service/provider/location page is required before approval.

## Forms
- Gravity Forms routing/recipients are defined.
- Confirmations and validation/error states work.
- Spam protection and required privacy/consent requirements are handled.
- Notifications are tested.
- Conversion measurement is tied to successful submission rather than mere button click where applicable.
- General marketing forms do not request unnecessary sensitive patient information.

## Reviews
- Trustindex is treated as a data source rather than an uncontrolled visual system.
- Review presentation remains consistent with the approved Elementor component system.

## SEO
- Yoast configuration is appropriate for the project.
- Permalinks, indexation, sitemap, canonicals, breadcrumbs, heading semantics, internal linking, structured-data responsibility, and redirects are addressed where applicable.

## User Journeys
Representative paths are verified across:
`Discover → Land → Explore → Intent → Convert`

Primary actions are tested:
- Book
- Call
- Visit / Directions
- Contact

## Measurement
- Key business actions are identified and documented.
- Standard event/action mapping is defined for book appointment, phone click, form start, form submit, directions click, and external booking where applicable.
- If analytics access exists, configuration and verification status are documented.
- If analytics access does not exist, the implementation is tracking-ready and clearly marked connection pending.

## Accessibility
- Semantic HTML is preferred.
- ARIA is used only when native semantics are insufficient.
- Keyboard use, visible focus, names/labels, contrast, heading structure, zoom/reflow, and responsive behavior are checked.

## Performance
- Images are appropriately sized/optimized.
- Font loading is deliberate.
- Third-party scripts, embeds, reviews, and analytics do not introduce unreviewed avoidable weight.
- Caching compatibility and Core Web Vitals are reviewed as applicable.

## Stress Test
Representative templates are tested with:
- short and long copy;
- long headings;
- optional/missing imagery;
- varying CTA text;
- differing review content;
- mobile/tablet/desktop widths.

## Approval
- No known system-level blocker remains.
- The page system is stable enough to multiply during content population.
- Human gate status is explicitly `Approve`, `Revise`, or `Override`.

Only `Approve` moves the project into production-scale content population.