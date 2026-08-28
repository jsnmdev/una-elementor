# UNA-Elementor Ownership Audit V1

## Status
PASSED — Components V1 may be frozen.

## Canonical Ownership Hierarchy

`Variables → Base → Foundation Classes → Base Component → Component Modifiers → Content → Local Override`

A lower layer must not recreate a responsibility already owned by an upstream layer.

## Ownership Map

### 1. Variables
Own design values only: color, typography families/scales, spacing scales, widths/gutters, radii, borders/shadows/motion tokens when approved. Variables do not own component structure.

### 2. Base
Own native HTML defaults and universal accessibility behavior: body, headings, paragraphs, links, lists, media defaults, controls, focus, box sizing. Base does not style named components.

### 3. Foundation Classes
Own reusable cross-component behaviors: containers, stack/cluster/grid, section spacing, bleed, surfaces, typography/content roles, buttons, media ratios/cover. Components consume these rather than recreate them.

### 4. Base Component
Own only structure/behavior universally true for that reusable component. Examples: `component-card`, `icon-card`, `rating`, `avatar`, `promo`, `counter`, `tabs`, `day-hours`.

### 5. Component Modifiers
Own one independent reusable variation at a time: orientation, icon/media position, size, density, alignment, optional structural state. Modifiers remain composable and do not encode surface + size + orientation in one class.

### 6. Content
Own business copy/data/assets: headings, labels, SVG path/content, images, provider/service data, hours, ratings, CTA wording.

### 7. Local Override
Last resort for a true one-off exception that cannot reasonably repeat. It must not become the normal way to repair the system.

## Class Explosion Gate
Forbidden combination examples:
- `icon-card-large-left-dark`
- `provider-card-small-left-neutral`
- `service-card-photo-right-primary`

Preferred composition:
- `icon-card + icon-card--icon-left + icon-card--icon-lg + surface-dark`
- `component-card + component-card--media-right + surface-primary`

## Cleanup Completed
- QA-shell classes are documented as review-page presentation only and are not production Elementor classes.
- DOM-position / `nth-child()` component-variant logic was removed from the component system.
- Service SVG variants now use explicit `component-card--icon-left` and `component-card--icon-right` modifiers.
- Service/provider horizontal media variants use explicit `component-card--media-left` and `component-card--media-right` modifiers.
- Provider portrait mobile behavior is owned by explicit `component-card--portrait`, not by a section/page selector.
- Inline demo-group spacing was replaced by QA-only presentation class ownership.
- Small Components were cleaned around base + independent modifiers + Foundation surface context.
- Promo inline state is an explicit `promo--inline` modifier.
- Stat inline state is an explicit `stat--inline` modifier.
- Icon Card keeps orientation, icon size, and Foundation surface as independent decisions.
- The consolidated Components QA page was rebuilt to use the explicit modifier architecture.
- No component-specific replacement for Foundation Buttons, Surfaces, Typography roles, generic Grids, or standard Media ratios was introduced.
- Tabs/FAQ retain semantic interaction ownership while general focus presentation remains upstream.
- Day / Hours remains a legitimate component with surrounding placement owned by assemblies.

## Approved Production Pattern

`Base Component + independent Component Modifier(s) + Foundation Context Class(es) + Content`

Example:

`icon-card + icon-card--icon-left + icon-card--icon-md + surface-neutral`

This is the default UNA-Elementor component architecture going forward.

## Freeze Gate Result
1. Every current production class has a defined ownership layer — PASS.
2. Demo-only classes are identified as QA presentation — PASS.
3. Components consume Foundation responsibilities instead of recreating them — PASS.
4. Production component variants do not depend on DOM position — PASS.
5. Normal compositions do not require combinatorial classes — PASS.
6. Mobile component behavior comes from explicit modifiers + Foundation behavior — PASS.
7. Local overrides remain zero by default — PASS.
8. Consolidated Components V1 has been rebuilt against the cleaned architecture — PASS.

## Freeze Rule
Components V1 is now frozen as the baseline. Do not add or redesign primitives speculatively. Reopen a component or Foundation decision only when real Section Assembly or production Elementor implementation exposes a repeatable failure or missing responsibility.

## Next Milestone
Sections V1 / real section assemblies.
