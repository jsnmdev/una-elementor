# UNA-Elementor — Classes / Typography + Content

## Status
IN QA.

## Base Boundary
H1–H6 and Body belong to Base. Do not duplicate them as Global Classes merely to make the class library look complete.

## V1 Classes
- `display-large`
- `display-medium`
- `display-small`
- `lead`
- `small`
- `caption`
- `overline`
- `meta`
- `helper-text`
- `legal-text`
- `text-link`

## Production Ownership
These are Elementor Global Classes using the approved project font/type Variables and Elementor typography settings. The static CSS is only the QA mirror.

## Responsibility
These classes own recurring typographic presentation beyond native Base roles. They do not own section spacing, layout, surface color, component spacing, or arbitrary local page styling.

## Context Rule
Typography/content classes should normally inherit foreground color from the active Surface. Avoid hardcoded text colors that make a role fail when moved between light and dark contexts.

## Calibration Rule
Typography remains font-aware. Exact weight, line-height, and tracking must be calibrated against the project's actual fonts before final production approval.

## QA Gate
- Displays maintain hierarchy on mobile/tablet/desktop.
- Lead remains readable and does not overpower headings.
- Small/caption/meta/helper/legal remain readable for their intended importance.
- Overline tracking/case works with the actual UI font.
- Text Link remains recognizable in light and dark contexts.
- No class duplicates Base H1–H6/Body ownership.
- No class accumulates layout/component responsibilities.
