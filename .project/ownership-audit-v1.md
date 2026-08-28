# UNA-Elementor Ownership Audit V1

## Status
ACTIVE CLEANUP GATE — do not freeze Components V1 until this passes.

## Canonical Ownership Hierarchy

`Variables → Base → Foundation Classes → Base Component → Component Modifiers → Content → Local Override`

A lower layer must not recreate a responsibility already owned by an upstream layer.

## Ownership Map

### 1. Variables
Own design values only: color, typography families/scales, spacing scales, widths/gutters, radii, borders/shadows/motion tokens when approved.

Variables do not own component structure.

### 2. Base
Own native HTML defaults and universal accessibility behavior: body, headings, paragraphs, links, lists, media defaults, controls, focus, box sizing.

Base does not style named components.

### 3. Foundation Classes
Own reusable cross-component behaviors: containers, stack/cluster/grid, section spacing, bleed, surfaces, typography/content roles, buttons, media ratios/cover.

A component must consume these rather than recreate them.

### 4. Base Component
Own only structure/behavior universally true for that reusable component.

Examples: `icon-card`, `rating`, `avatar`, `promo`, `counter`, `tabs`, `day-hours`.

### 5. Component Modifiers
Own one independent reusable variation at a time: orientation, icon/media position, size, density, alignment, optional structural state.

Modifiers must remain composable. Do not encode surface + size + orientation in one class.

### 6. Content
Own business copy/data/assets: headings, labels, SVG path/content, images, provider/service data, hours, ratings, CTA wording.

### 7. Local Override
Last resort for a true one-off exception that cannot reasonably repeat. It must not become the normal way to repair the system.

## Class Explosion Gate
Forbidden combination pattern examples:
- `icon-card-large-left-dark`
- `provider-card-small-left-neutral`
- `service-card-photo-right-primary`

Preferred composition:
- `icon-card + icon-card--icon-left + icon-lg + surface-dark`
- `component-card + component-card--media-right + surface-primary`

## Audit Findings / Cleanup Targets

### A. QA-shell rules are not production classes
`components-shell`, `components-hero`, `components-nav`, `component-section`, `component-section-head`, `small-components-shell`, `small-components-head`, `small-component-section`, and QA grids exist to present the static review pages. They must not be copied into Elementor production as component classes.

### B. Remove selector-by-demo-position architecture
Any `nth-child()` selector used to determine a component variant is a QA shortcut and violates explicit modifier ownership. Replace with named modifier classes before freeze.

### C. Remove inline QA layout styles
Inline `style="margin-top:..."` used to separate demo groups is QA presentation, not component architecture. Move demo spacing into the QA shell or approved layout classes.

### D. Generic card shell needs explicit ownership
`component-card` is currently shared by Service and Provider cards and also appears as a QA wrapper elsewhere. Before production freeze, distinguish the reusable card shell from QA-only framing. Do not let one generic class become an ungoverned dumping ground.

### E. Media composition exception
Horizontal Service/Provider cards need media to fill the card height. This is component-specific composition behavior and may remain under the media-position modifier, but the normal media ratio/cover rules stay Foundation-owned. On mobile, approved Foundation ratios return.

### F. Small-component size modifiers
Avatar and Icon Card sizes are valid modifiers because size is an independent repeated decision. Keep one shared size vocabulary where practical; do not create component + surface + size combinations.

### G. Surface inheritance
Icon Card, Promo, Stat, Counter, Rating and other small components should consume Foundation surface classes. Component CSS may adjust internal foreground relationships only when the Foundation surface contract cannot express a required inherited state; repeated needs trigger Foundation review.

### H. Tabs / FAQ behavior
Interaction semantics belong to the component because they are component-specific. Focus presentation remains Base/Foundation-owned. Do not replace semantic controls with visual-only divs.

### I. Day / Hours
`day-hours` is a legitimate component because the semantic day/value relationship repeats. Section placement and surrounding layout remain Foundation/assembly-owned.

### J. No speculative primitive growth
After this audit, missing primitives must be discovered through real section/page assembly. Do not expand the library because a component could theoretically exist.

## Freeze Gate
Components V1 may be frozen when:
1. Every production class maps to one ownership layer.
2. Demo-only classes are clearly marked and excluded from Elementor class documentation.
3. No component duplicates Foundation surfaces, typography roles, buttons, generic grids, media ratios, focus, or spacing scales.
4. No `nth-child()` or DOM-position selector determines a production component variant.
5. No combinatorial variant class is required for normal compositions.
6. Mobile behavior is defined by explicit modifiers + Foundation behavior, not page-specific fixes.
7. Local overrides are zero by default and documented when truly required.
8. The consolidated Components page remains visually functional after cleanup.

## Next After Pass
Freeze Components V1 and move to Section Assemblies / real page construction.
