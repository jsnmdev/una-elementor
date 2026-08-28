# UNA-Elementor — Classes / Buttons

## Status
IN QA.

## V1 Composition
Base:
- `button`

Hierarchy:
- `button-primary`
- `button-secondary`
- `button-outline`
- `button-text`

Context:
- `button-on-light`
- `button-on-dark`

Icon direction is content/composition inside the button. Do not create a new visual hierarchy solely because an icon is left or right.

## Production Ownership
These are Elementor Global Classes configured with Elementor settings and UNA Variables. The static CSS is the QA mirror only.

## Responsibility
`button` owns shared geometry and interaction: minimum touch target, alignment, padding, radius, typography, baseline border, and restrained state behavior.

Hierarchy classes own visual emphasis. Context classes own the relationship to light/dark surfaces.

CTA meaning such as Book Online, Call Now, Directions, or Request Appointment is content/business action—not a button style.

## Responsive Rule
Normal responsive behavior should be configured in Elementor. The QA harness stacks button groups full-width on small mobile widths to test long labels and touch usability. Do not create page-specific CSS fixes for button wrapping.

## Accessibility
- Minimum target baseline: 44px.
- Visible Base focus state must survive all button variants.
- Labels remain text, not icon-only, for primary conversion actions unless a later component has a justified accessible icon-only control.
- Reduced motion removes nonessential hover translation.

## QA Gate
- All hierarchy variants readable on light and dark contexts.
- Long labels do not overflow.
- Mobile touch targets remain comfortable.
- Focus remains visible.
- Button meaning is not encoded only by color.
- No page-specific button variants are created without repeated evidence.
