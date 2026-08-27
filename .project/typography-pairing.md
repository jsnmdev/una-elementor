# UNA-Elementor — Typography Pairing Note

## Status
Approved direction for the Elementor Atomic Foundation typography layer.

## Two-Font Rule
UNA-Elementor uses **two font families by default** for dental/medical website builds.

- **Font Primary** — primary display/heading family.
- **Font Secondary** — primary body/UI family.

Do not add a third accent/script family to the baseline starter. A third family is a project-specific extension only when the actual brand/design requires it.

**Inter is not part of the baseline pairing direction.**

## Default Ownership

### Font Primary
Default consumer roles:
- Display Large
- Display Medium
- Display Small
- H1–H6

### Font Secondary
Default consumer roles:
- Lead
- Body
- Small
- Caption
- Overline
- Navigation
- Buttons
- Forms, labels, and controls

Roles may intentionally use the other approved family when the project's design system calls for it, but font family must not be selected independently widget-by-widget.

## Pairing Selection Rule
The actual two-font pairing is selected per client brand before Typography Calibration. UNA-Elementor does not force one universal dental font combination across every project.

The reference pairing directions currently accepted as useful starting points include:

| Direction | Font Primary | Font Secondary | Typical Fit |
|---|---|---|---|
| Timeless / Premium | Playfair Display | Lato | Cosmetic, implants, established practices |
| Modern / Clean | Montserrat | Source Sans 3 | General dentistry, multi-provider |
| Warm / Human | Libre Baskerville | Open Sans | Family/general dentistry |
| Classic / Refined | Cormorant Garamond | Mulish | Cosmetic, boutique practices |
| Minimal / Friendly | Poppins | Roboto | Contemporary family practices |
| Soft / Approachable | Quicksand | Lato | Family/pediatric leaning |
| Strong / Modern | Oswald | Source Sans 3 | More assertive brands |

These are starting directions, not mandatory presets.

## Single-Family Brands
If a client intentionally uses one family, preserve both Foundation variables and map both to that family.

Example:

`Font Primary → selected family`

`Font Secondary → selected family`

This preserves the architecture without forcing artificial font variety.

## Calibration Flow

`Choose 2-Font Pairing → Assign Font Primary / Font Secondary → Load Actual Fonts → Calibrate Typography Roles → Responsive + Accessibility Test → Lock Typography`

Calibration must account for x-height, cap height, character width, native leading, available weights, long dental/medical terminology, buttons, navigation, forms, and mobile wrapping.

## Governing Rule
**Font pairing is a brand decision expressed through two stable Foundation variables. Do not choose fonts locally per widget, and do not force one dental typography aesthetic across every client.**

This note supplements `.project/elementor-foundation.md` and should be incorporated into the canonical Typography section during the next consolidated Foundation documentation pass.