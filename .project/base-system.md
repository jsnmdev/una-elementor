# UNA-Elementor Base System

## Status
Implemented in the static reference harness for review.

## Purpose
Base defines the predictable native element behavior that exists before Global Classes are applied. Base is not a component library and must not visually design the site.

## Elementor Production Ownership
Where Elementor can own the setting, configure Base in Elementor Site Settings / Theme Style using approved Variables. Do not reproduce these defaults with page-level Custom CSS.

## Base Contract

### Body
- Font: Font Text
- Size: Body type-scale variable
- Weight: 400 baseline
- Line-height: readable body baseline
- Text color: neutral dark contextual baseline
- Background: White
- Body margin: 0

### Headings
- H1–H6 use Font Heading
- H1–H6 use their corresponding type-scale variables
- Heading margins: 0
- Weight/line-height calibrated once for the selected project font
- Default letter spacing: normal until font calibration proves otherwise

### Paragraphs
- Body inheritance
- Margin: 0
- Spacing belongs to layout/classes, not browser paragraph margins

### Links
- Inherit surrounding color by default
- Preserve visible native underline behavior where applicable
- Component/content classes may intentionally style links later

### Lists
- Keep semantic `ul` / `ol` behavior
- Preserve markers
- No decorative list replacement at Base

### Media
- Responsive-safe native media
- No global aspect ratio at Base
- No global radius/shadow at Base
- Ratio + `cover` belong to Media Global Classes

### Native Controls
- Buttons/inputs/selects/textareas inherit Font Text
- No designed button appearance at Base
- No designed form system at Base
- Button classes own buttons later
- `.gf-form` child-theme CSS owns Gravity Forms internal presentation later

### Focus
- Global visible `:focus-visible`
- Components may enhance focus but must never remove it

### Motion
- Honor `prefers-reduced-motion`
- Nonessential animation/transition behavior is suppressed when requested

## Governing Rule
**Base makes native HTML predictable. Variables provide the values. Global Classes provide reusable design decisions. Components provide composed behavior. Local Overrides remain the final exception.**

## Static Validation
- `prototype/base.css` — canonical static harness representation of Base
- `prototype/base.html` — Base validation page

The static CSS is a reference harness only. The production Elementor implementation should use Elementor-native settings wherever Elementor owns the behavior.
