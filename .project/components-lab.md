# UNA-Elementor Components V1

## Status
READY FOR QA

Foundation V1 is approved. Components are now allowed to be built, but they must consume Foundation rather than recreate it.

## Governing Component Architecture
Default pattern:

`Base Component + Modifier Classes + Foundation Context Classes + Content`

This is the required default for reusable components with predictable variations.

Example:

`icon-card + icon-card--icon-left + icon-card--icon-lg + surface-neutral`

### Base Component
Owns only what is universally true for that component:
- required internal structure;
- component-specific relationships;
- component-specific interaction/behavior where applicable.

### Modifier Classes
Own independent, reusable variations such as:
- orientation;
- size;
- density;
- alignment;
- optional structural states.

### Foundation Context Classes
Continue to own:
- surfaces;
- typography/content roles;
- layout utilities;
- spacing system;
- media ratios;
- buttons;
- focus/accessibility defaults;
- general responsive behavior.

### Content
Text, SVGs, images, labels, provider details, service details, CTA wording and business data remain content.

## Class Explosion Rule
Avoid combinatorial classes. Never create a class that permanently combines multiple independent decisions when those decisions can be composed from existing base/modifier/context classes.

Forbidden examples:
- `icon-card-large-left-dark`
- `service-card-photo-right-primary`
- `provider-card-small-left-neutral`

Preferred:
- `icon-card + icon-card--icon-left + icon-card--icon-lg + surface-dark`
- `component-card + component-card--media-right + surface-primary`

Before creating any new class, ask:
1. Is this responsibility already owned by Foundation?
2. Is this an independent modifier that will repeat?
3. Can existing classes be composed instead?
4. Would this new class create future combinations we would also need to duplicate?

If composition solves the need, do not create the new combination class.

The goal is a small, durable class vocabulary—not hundreds of narrowly combined classes.

## Current V1 Review Set
### Larger / structural components
- Service Card
- Provider Card
- Review Card
- FAQ
- CTA Block
- Location / Contact Block
- Day / Hours
- Icon List
- Ordered List / Steps
- Tabs

### Small Components V1
- Rating
- Avatar / Avatar Stack
- Promo
- Counter
- Icon Card
- Badge / Pill
- Stat / Metric
- Logo / Trust Mark

Divider is intentionally not duplicated because Elementor/Atomic already supplies that primitive. Small Components V1 stops here unless real page assembly proves another primitive is repeatedly missing.

## Icon Card Reference Pattern
Base:
- `icon-card`

Orientation modifiers:
- `icon-card--icon-left`
- `icon-card--icon-right`
- no orientation modifier = stacked

Size modifiers:
- `icon-card--icon-sm`
- `icon-card--icon-md`
- `icon-card--icon-lg`

Context uses existing Foundation surfaces rather than Icon Card color classes:
- `surface-light`
- `surface-neutral`
- `surface-primary`
- `surface-secondary`
- `surface-dark`

Responsive horizontal variants return to stacked composition on constrained mobile widths.

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
