# UNA-Elementor — Layout Classes V1

## Status
IN DESIGN / visual QA required before approval.

## Purpose
Layout Classes translate the approved UNA Variables into repeatable Elementor Global Classes. They exist to prevent repeated local layout setup while preserving enough range for real dental/medical composition.

## Governing Rule
Use Elementor native layout, responsive, and spacing settings first. Save the repeatable result as an Elementor Global Class. Local setup is reserved for genuine exceptions. Repeated exceptions must be evaluated for promotion into the system.

## V1 Class Inventory

### Containers
- `container-full`
- `container-read`

`container-full` uses the 1200px content width and 20px safe side gutters. It stacks by default. Adding children does not imply columns.

`container-read` constrains sustained reading content to the approved reading width.

### Flow
- `stack`
- `cluster`

`stack` is vertical flow with an approved spacing variable.

`cluster` is a wrapping horizontal group for actions, badges, inline metadata, and similar relationships.

### Equal Grids
- `grid-2` — 6/6
- `grid-3` — 4/4/4
- `grid-4` — 3/3/3/3

### Asymmetric Grids
- `grid-60-40` — 7/5
- `grid-40-60` — 5/7
- `grid-70-30` — 8/4
- `grid-30-70` — 4/8

The class names communicate visual balance. The 12-column relationship is the implementation model.

### Modifier
- `grid-reverse`

Keep reverse behavior separate from the proportion classes. Do not multiply classes into names such as `grid-60-40-reverse`.

### Bleed
- `bleed-left`
- `bleed-right`

Bleed is structural and separate from normal grid proportion. The selected media/surface child remains anchored to the master content grid and extends outward to the viewport edge.

At smaller breakpoints the class returns to a safe composition rather than preserving desktop viewport-escape geometry.

### Section Spacing
- `section-{size}-fixed`
- `section-{size}-fluid`

Approved section sizes:
- 40
- 48
- 56
- 64
- 80
- 96
- 120
- 140
- 160
- 180
- 200
- 220
- 240
- 260
- 280
- 300

Every section class consumes the matching UNA spacing variable. Do not create Compact / Default / Spacious aliases.

## Responsive Ownership
Responsive behavior is part of each Elementor Global Class and is configured with Elementor responsive settings.

Reference V1 behavior:
- `grid-2`: 2 desktop, 2 tablet when viable, 1 mobile.
- `grid-3`: 3 desktop, 2 tablet, 1 mobile.
- `grid-4`: 4 desktop, 2 tablet, 1 mobile.
- asymmetric grids: preserve intent on desktop; become balanced 2-column at tablet where viable; stack on mobile.
- `grid-reverse`: reverse visual order above mobile; return to source order on mobile unless a later component proves otherwise.
- `bleed-left/right`: desktop viewport escape; safe non-bleed behavior on smaller breakpoints.

Exact Elementor breakpoint settings remain subject to visual QA and the project's configured breakpoints.

## Gap Ownership
The V1 layout classes use approved spacing variables for their default gaps. Do not introduce arbitrary pixel gaps in repeated layouts.

If a composition requires a genuinely different gap once, use an Elementor Local Override with an approved variable. If it repeats, evaluate whether a new class or modifier belongs in the system.

## Local Override Boundary
Keep these local until real repetition proves otherwise:
- unusual grid proportions;
- custom alignment;
- special per-section ordering;
- one-off offsets;
- unique min-height requirements;
- art-directed composition that does not repeat.

## Elementor Translation
The static lab CSS is only a visual harness. Production ownership is:

`Elementor Settings + UNA Variables + Elementor Responsive Settings → Global Class`

Do not ship the lab CSS as the production implementation when Elementor can own the behavior natively.

For bleed only, if Elementor cannot express the approved viewport escape reliably, the minimum reusable unsupported behavior may live in centralized Hello child-theme CSS. Never place page/widget Custom CSS in Elementor.

## Approval Gate
Layout V1 is approved only when the Layout Classes Lab passes mobile/tablet/desktop review for:
- container alignment;
- reading width;
- grid proportions;
- responsive stacking;
- reverse behavior;
- bleed behavior;
- section spacing;
- no horizontal overflow;
- no duplicate mobile markup;
- no arbitrary values outside the UNA Variables.
