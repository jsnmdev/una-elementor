# UNA Contrast + Typography Contract V1

## Purpose
Contrast and typography must be deterministic because Koda does not make design judgments at runtime.

## Contrast Minimums
Use WCAG 2.2 AA as the floor:
- Normal text: 4.5:1 minimum.
- Large text: 3:1 minimum.
- Meaningful UI boundaries/graphics: 3:1 minimum where applicable.

UNA should target stronger real-world readability on mobile, especially on Dark, Primary, and Secondary surfaces.

## Surface Foreground Contract
Every surface definition must include explicit approved foreground roles:
- heading
- body
- supporting/meta
- link
- icon
- border/divider
- control/form
- button-context

A surface cannot be approved until all required role pairs are tested.

## Color-Ramp Use
Use the existing contrasting shade ramps intentionally.

Examples of the rule, not hardcoded final pairings:
- Dark background pairs with White / Neutral Lightest / Neutral Lighter as role-appropriate foregrounds.
- Primary dark/base backgrounds pair with approved light/white foregrounds.
- Light/Neutral backgrounds pair with Neutral Darker/Darkest foregrounds.

Do not use the same foreground shade for every role if a more appropriate approved shade can maintain hierarchy while preserving contrast.

## Opacity Rule
Do not use opacity as the default hierarchy mechanism for important text on colored/dark surfaces.

Forbidden pattern:
`color: white; opacity: .65`

Preferred:
select an approved lighter/darker token that has a measured contrast ratio and deterministic role.

## Typography Roles
Display Large / Medium / Small
H1–H6
Lead
Body
Small
Meta
Caption
Overline
Helper
Legal

Every role must define:
- family
- mobile/tablet/desktop size
- weight
- line-height
- letter spacing
- semantic/content purpose
- foreground role behavior

## Mobile Readability Floors
- Body: >= 16px equivalent.
- Lead: >= 18px equivalent.
- Small/Meta meaningful support: normally >= 15px.
- Caption/Helper/Overline: >= 14px when truly secondary.
- Legal: may be smaller only when content/legal context warrants it and readability/reflow remain acceptable.

## Hierarchy Rule
Hierarchy should primarily use:
1. role/size
2. weight
3. spacing
4. placement
5. approved foreground shade

Do not create hierarchy by making text too small or too faint.

## Koda Requirement
Koda consumes role IDs, not inferred CSS.

Example conceptual mapping:
`surface.dark.supporting → neutral.lighter`
`type.meta.mobile → 15px-equivalent role`
`surface.dark.button_context → on-dark`

The actual machine manifest must use stable UNA IDs and verified Elementor Variable/Class references.

## Approval Gate
A surface/type combination is approved only after:
- automated ratio calculation;
- visual mobile QA;
- tablet/desktop QA;
- dark/brand surface stress test;
- long-copy stress test;
- no opacity/local override dependency.
