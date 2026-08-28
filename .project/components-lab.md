# UNA-Elementor Components Lab

## Status
IN DESIGN

The Components Lab is the dedicated visual review page for reusable Elementor-facing components. It is intentionally separate from full reference pages so individual components can be reviewed, revised, and approved before being multiplied across templates.

## Current Review Set
- Service Card
- Provider Card
- Review Card
- FAQ
- CTA Block
- Location / Contact Block

## Rule
A structure becomes a component when it repeats, owns a clear content responsibility, and should update consistently across the site. One-off compositions should remain assemblies of approved Foundation classes and local content rather than becoming speculative components.

## Implementation Boundary
This static HTML/CSS page is a review harness. Production implementation remains Elementor-first:

`Elementor Settings + Variables + Responsive Settings → Global Classes / reusable Elementor component`

Do not treat the review harness CSS as the final WordPress implementation contract.

## Review Order
Review each component for:
- semantic structure;
- content hierarchy;
- short/long content states;
- missing/optional media states;
- mobile/tablet/desktop behavior;
- keyboard/focus behavior where interactive;
- clear separation between content and presentation;
- whether the component truly deserves reuse.

Only approved components should be promoted into the reusable production library.