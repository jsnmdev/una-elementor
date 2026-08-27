# UNA-Elementor — Foundation Homepage Test

## Status
Built on branch `feature/foundation-homepage-test` for internal review. Do not merge until the Foundation behavior is visually tested and approved.

## Purpose
This is not a final dental design and not a production WordPress page. It is a full static homepage used to stress-test the approved UNA-Elementor Foundation vocabulary before translating it into Elementor V4 Global Variables and Global Classes.

## Files
- `prototype/index.html`
- `prototype/styles.css`

## Foundation Areas Exercised

### Variables
- Primary / Secondary / Neutral tonal families
- White / Black / Transparent
- Font Heading / Font Text
- Display LG / MD / SM
- H1-H6 / Body
- Fixed and Fluid spacing examples
- Container Width = 1200px baseline
- Gutter Content = 20px baseline
- Reading Width placeholder
- Radius scale

### Classes / Patterns
- `container-full`
- `container-read` available in CSS
- `stack`
- `cluster`
- `grid-2`
- `grid-3`
- `grid-4`
- `grid-60-40`
- `grid-40-60`
- `grid-70-30`
- `grid-30-70`
- `grid-reverse`
- `bleed-left`
- `bleed-right`
- section fluid spacing samples
- `surface-light`
- `surface-neutral`
- `surface-primary`
- `surface-secondary`
- `surface-dark`
- Primary / Secondary / Outline / Text button architecture
- On Light / On Dark button contexts
- `media-16-9`, `media-3-2`, `media-4-3`, `media-1-1`, `media-3-4`
- Lead / Small / Caption / Overline / Text Link / Meta / Helper Text / Legal Text
- `.gf-form` prototype scope

## Homepage Coverage
The page includes:
1. Header + primary navigation + Book/Call actions
2. Split hero with right bleed media
3. Trust/stat row
4. Three-card service section
5. Dark-surface Why Us section
6. Provider/team section
7. Review/testimonial grid
8. Primary-surface new-patient section
9. Three-step patient journey
10. Dark CTA/contact section with `.gf-form` placeholder
11. Footer

## Test Gate
Before approval, review at desktop, tablet, and mobile widths for:
- typography hierarchy and wrapping;
- 1200px / 20px content behavior;
- section rhythm;
- equal and asymmetric grid behavior;
- bleed behavior and mobile reset;
- surface contrast;
- button context behavior;
- media crop behavior;
- long/short content resilience;
- keyboard focus;
- 200% zoom/reflow;
- reduced-motion behavior;
- whether any class feels too opinionated or too generic;
- whether any repeated Local Override indicates a missing Foundation class.

## Important Implementation Note
The static CSS is a prototype representation of the approved Elementor contract. It is not permission to move these normal Foundation classes into child-theme CSS in production. The Elementor implementation remains:

`Elementor Settings + Elementor Variables + Responsive Settings → Global Classes`

Child-theme CSS remains reserved for behavior Elementor genuinely cannot own.
