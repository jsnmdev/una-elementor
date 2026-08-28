# UNA-Elementor Components V1

## Status
READY FOR QA

Foundation V1 is approved. Components are now allowed to be built, but they must consume Foundation rather than recreate it.

## Current V1 Review Set
- Service Card
- Provider Card
- Review Card
- FAQ
- CTA Block
- Location / Contact Block

No additional component is added until this initial set is visually and structurally approved.

## Component Rule
A structure becomes a component when it repeats, owns a clear content responsibility, and should update consistently across the site. One-off compositions remain assemblies of approved Foundation classes and local content.

## Foundation Composition Rule
Components must reuse the approved Foundation for:
- Variables;
- container/grid/stack/cluster behavior;
- surfaces;
- typography/content roles;
- buttons;
- media ratios;
- focus/accessibility defaults;
- general responsive behavior.

Component-specific CSS may own only structure or behavior genuinely unique to that reusable component.

### Forbidden Component Reimplementation
Do not create component-specific replacements for:
- buttons;
- media ratios/object-fit;
- overline/meta/text-link roles;
- generic grids;
- generic surfaces;
- generic focus styles;
- arbitrary spacing scales.

If a component repeatedly needs a behavior the Foundation cannot provide, treat that as evidence for a Foundation review rather than silently duplicating it inside the component.

## Production Boundary
The static HTML/CSS page is the QA harness. Production implementation remains Elementor-first:

`Elementor Settings + UNA Variables + approved Global Classes → reusable Elementor component`

Local overrides remain valid for true one-off content/crop/composition exceptions.

## Review Order
Review each component for:
- semantic structure;
- content hierarchy;
- short/long content states;
- missing/optional media states;
- mobile/tablet/desktop behavior;
- keyboard/focus behavior where interactive;
- Foundation reuse;
- whether the component truly deserves reuse.

Only approved components are promoted into the reusable production library.
