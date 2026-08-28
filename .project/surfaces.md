# UNA-Elementor — Classes / Surfaces

## Status
IN QA.

## V1 Classes
- `surface-light`
- `surface-neutral`
- `surface-primary`
- `surface-secondary`
- `surface-dark`

## Production Ownership
These are Elementor Global Classes. Production behavior is configured through Elementor settings using UNA Color Variables. The static CSS in `prototype/surfaces.css` is only the visual QA mirror.

## Responsibility
A Surface owns:
- background color;
- default foreground/text context;
- contextual inherited link color where appropriate.

A Surface does not own:
- section spacing;
- container width;
- grid/layout;
- radius;
- card styling;
- button styling;
- media treatment;
- component-specific presentation.

## V1 Mapping
- `surface-light` → White background / Neutral Darker foreground.
- `surface-neutral` → Neutral Lightest background / Neutral Darker foreground.
- `surface-primary` → Primary Base background / White foreground.
- `surface-secondary` → Secondary Base background / White foreground.
- `surface-dark` → Neutral Darkest background / Neutral Lightest foreground.

Exact client colors remain project-calibrated through the Variables layer.

## QA Gate
Before approval:
1. Native headings remain readable on all surfaces.
2. Body copy remains readable on all surfaces.
3. Contextual links remain discoverable/readable.
4. No child requires repeated local color repair simply because it is placed on an approved surface.
5. Later Button and Component classes can define their own context variants without changing Surface responsibility.
6. Surface classes do not acquire layout or spacing responsibilities.
7. Contrast is validated against the actual client palette before production approval.

## Governing Rule
**Surface classes establish color context. They do not become section/component classes.**
