# UNA-Elementor — Elementor Atomic V4 Foundation

## Status
**IN DESIGN — review each foundation layer before locking.**

Foundation review sequence:

`Variables → Base → Layout Classes → Surfaces → Buttons → Forms → Media → Small Content Primitives → Accessibility → Foundation Test Page → APPROVE`

Do not mark the full Atomic Foundation approved until every layer has been reviewed and the Foundation Test Page passes.

## Governing Rules

- Mobile first.
- Class first; local override last.
- Elementor V4 is the presentation system. No Tailwind or parallel utility framework.
- Never place custom CSS inside Elementor elements/widgets/pages or Elementor Custom CSS fields.
- If Elementor genuinely cannot express a justified requirement, centralized CSS belongs in the active Hello Elementor child theme.
- Fix foundation-level problems at the foundation owner. Do not repair them page by page.
- UNA-Elementor provides controlled creative range; it must not force every client into the same conservative or compact visual rhythm.

---

# 1. Variables

## 1A. Color Variables — STRUCTURE APPROVED

### Fixed System Colors
These do not change per client:

- **White** — `rgb(255, 255, 255)`
- **Black** — `rgb(0, 0, 0)`
- **Transparent** — `rgba(0, 0, 0, 0)`

### Primary
Human-readable tonal range, lightest to darkest:

- Primary Lightest
- Primary Lighter
- Primary Light
- Primary Base
- Primary Dark
- Primary Darker
- Primary Darkest

### Secondary
- Secondary Lightest
- Secondary Lighter
- Secondary Light
- Secondary Base
- Secondary Dark
- Secondary Darker
- Secondary Darkest

### Neutral
- Neutral Lightest
- Neutral Lighter
- Neutral Light
- Neutral Base
- Neutral Dark
- Neutral Darker
- Neutral Darkest

### Accent — Optional
Only create the Accent family when the actual brand requires it.

- Accent Lightest
- Accent Lighter
- Accent Light
- Accent Base
- Accent Dark
- Accent Darker
- Accent Darkest

### Color Implementation Note
The naming/structure is approved. The exact tonal-generation method and contrast-validation logic are not yet locked. Those must be tested against real client palettes before becoming canonical implementation logic.

Semantic roles such as text, surface, border, action, success, warning, error, and info may map to these primitive colors later. Components should consume intentional semantic/contextual roles where appropriate rather than creating arbitrary local colors.

---

## 1B. Typography Variables — BASELINE APPROVED FOR DOCUMENTATION / CLIENT CALIBRATION REQUIRED

### Purpose
Dental and medical typography must prioritize readability, trust, clarity, accessibility, and predictable responsive behavior. The system is mobile-first and fluid where fluid scaling improves hierarchy without harming readability.

Typography values are **font-aware**. Two fonts at the same CSS size/weight can render very differently because of x-height, cap height, character width, internal leading, weight rendering, and native spacing. Never compensate for a font mismatch by repeatedly overriding individual Elementor widgets/pages.

### Typography Roles

| Role | Mobile → Desktop Baseline | Weight Baseline | Line Height Baseline |
|---|---:|---:|---:|
| Display Large | 44 → 72px | 600–700 | 1.00–1.08 |
| Display Medium | 40 → 60px | 600–700 | 1.05–1.10 |
| Display Small | 36 → 48px | 600–700 | 1.08–1.15 |
| Heading 1 | 36 → 48px | 600–700 | 1.10–1.15 |
| Heading 2 | 32 → 40px | 600–700 | 1.15–1.20 |
| Heading 3 | 28 → 32px | 600–700 | 1.20–1.25 |
| Heading 4 | 24 → 28px | 600–700 | 1.25–1.30 |
| Heading 5 | 20 → 24px | 600 | 1.30–1.35 |
| Heading 6 | 18 → 20px | 600 | 1.35–1.40 |
| Lead | 18 → 20px | 400–500 | 1.50–1.60 |
| Body | 16 → 18px | 400 | 1.50–1.65 |
| Small | 14 → 16px | 400–500 | 1.45–1.55 |
| Caption | 13 → 14px | 400–500 | 1.40–1.50 |
| Overline | 12 → 14px | 600 | 1.30–1.40 |

These are starting ranges for dental/medical work, not immutable values independent of the selected typeface.

### Fluid Mobile-First Rule
Typography begins at the mobile minimum and scales toward an intentional desktop maximum.

Preferred behavior:

`Mobile Minimum → Fluid Growth → Desktop Maximum`

Display roles and H1–H4 normally benefit from fluid scaling. Body text should scale conservatively; readability outranks visual drama. Avoid unnecessary breakpoint jumps when a smooth fluid range can preserve hierarchy.

### Role Ownership
Each typography role owns, as applicable:
- Font family
- Mobile/minimum size
- Desktop/maximum size
- Fluid scaling behavior
- Weight
- Line height
- Letter spacing

### Font-Family Rule
Default maximum for normal dental/medical projects:
- one Heading/Display family;
- one Body/UI family.

A third accent/display typeface requires a real brand/design reason. UI, forms, instructions, and conversion-critical text prioritize legibility.

### Font Calibration Gate
Actual project fonts must be loaded before typography is considered approved for that project.

Calibration must inspect:
- x-height;
- cap height;
- character width;
- native/internal leading;
- perceived weight at the available font weights;
- long dental/medical terminology;
- short and long headings;
- multi-line body copy;
- button labels;
- navigation labels;
- mobile/tablet/desktop behavior.

Representative calibration content should include:
- `Aa / ABC / abc / 123`
- a short heading;
- a long treatment/medical heading;
- a realistic 2–3 line paragraph;
- button labels;
- navigation labels.

If the selected font needs adjustment, modify the typography variable/role once at the foundation level. Do not create page-by-page compensations.

### Letter-Spacing Rule
Do not impose universal tracking merely because it is common in modern design systems.

- Body: begin with font-native/normal tracking.
- Headings: begin with normal tracking; slight negative tracking only when the actual display font benefits from it.
- Overline: intentional positive tracking is acceptable.
- Buttons/navigation: modest adjustment only when the selected UI font needs it.

Font behavior determines the final calibrated value.

### Reading Width
Page/container width and reading width are different responsibilities.

For sustained dental/medical reading, target approximately **60–75 characters per line** where practical. Wide page compositions should still constrain long treatment explanations, patient instructions, articles, and similar reading content appropriately.

### Accessibility / Readability Baseline
- Body: **16px minimum baseline**; may scale toward ~18px on larger screens.
- Small: ~14px minimum role for genuinely secondary content.
- Caption/Overline: ~12–14px only for truly secondary/supporting information.
- Do not shrink important information merely to create visual hierarchy.
- Critical patient instructions, form errors, consent/privacy information, appointment information, phone numbers, and primary navigation must remain comfortably readable.
- Typography must survive zoom/reflow and responsive testing.

### Typography Approval Flow
`Load Actual Fonts → Calibration Page → Adjust Foundation Roles → Responsive Test → Accessibility/Readability Check → APPROVE`

### Governing Typography Rule
**Typography values are calibrated to the actual typeface at the foundation level. Never repair font-specific spacing or sizing problems page by page.**

---

## 1C. Spacing Variables — STRUCTURE APPROVED

### Purpose
Spacing variables are exposed directly in Elementor V4 and must be understandable to the person building the page without requiring knowledge of CSS token syntax.

The variable name communicates both the intended maximum/exact pixel scale and whether the value is fixed or fluid.

### Naming Contract

**Fixed:** `Space {px} Fixed`

**Fluid:** `Space {px} Fluid`

Examples:
- `Space 24 Fixed`
- `Space 48 Fixed`
- `Space 48 Fluid`
- `Space 120 Fluid`

The number in a Fixed variable is the exact spacing value. The number in a Fluid variable represents its intended desktop/maximum spacing value; the value scales down through a clamp toward an approved mobile-safe minimum.

### Approved Spacing Scale

#### Core / Internal Spacing — Fixed Only
- Space 4 Fixed
- Space 8 Fixed
- Space 12 Fixed
- Space 16 Fixed
- Space 24 Fixed
- Space 32 Fixed

These primarily serve small/internal relationships such as icon gaps, control spacing, form relationships, component gaps, and small-scale padding.

#### Layout / Section Spacing — Fixed + Fluid
- Space 40 Fixed / Space 40 Fluid
- Space 48 Fixed / Space 48 Fluid
- Space 56 Fixed / Space 56 Fluid
- Space 64 Fixed / Space 64 Fluid
- Space 80 Fixed / Space 80 Fluid
- Space 96 Fixed / Space 96 Fluid
- Space 120 Fixed / Space 120 Fluid

These serve normal layout and section relationships. Choose Fixed when the spatial relationship should remain constant; choose Fluid when it should scale responsively.

#### Large Composition Spacing — Fixed + Fluid
After 120px, use 20px increments through 300px:

- Space 140 Fixed / Space 140 Fluid
- Space 160 Fixed / Space 160 Fluid
- Space 180 Fixed / Space 180 Fluid
- Space 200 Fixed / Space 200 Fluid
- Space 220 Fixed / Space 220 Fluid
- Space 240 Fixed / Space 240 Fluid
- Space 260 Fixed / Space 260 Fluid
- Space 280 Fixed / Space 280 Fluid
- Space 300 Fixed / Space 300 Fluid

These values exist to support expressive composition: large heroes, editorial whitespace, asymmetric layouts, intentional offsets, premium/luxury treatment sections, and other art-directed structures when the project calls for them.

### No Density-Preset Rule
UNA-Elementor does **not** define `Compact / Default / Spacious` as the canonical section-spacing system.

Do not ship opinionated section-density presets that cause every dental/medical site to inherit the same rhythm or composition.

The numeric Fixed/Fluid spacing range is the foundation. A project's approved global classes and compositions decide how those variables are used.

The same foundation must be capable of supporting, for example:
- a tightly composed informational/insurance section;
- a large cinematic hero;
- an asymmetric treatment story;
- a high-whitespace cosmetic/luxury section;
- a dense utility/form area;
- a conventional service section when that is the right design decision.

**The system controls values and reuse; it does not standardize creativity out of the design.**

### Fluid Threshold Rule

**32px and below → Fixed only.**

**40px and above → Fixed and Fluid variants available.**

Do not create clamp/fluid variants for 4–32px values unless real implementation evidence later proves a need.

### Fluid Behavior
A Fluid spacing variable follows:

`Approved Mobile-Safe Minimum → Fluid Clamp Growth → Named Desktop/Maximum Value`

The mobile floor is intentional. A clamp must never collapse important section/layout spacing below the project's approved safe mobile spacing merely because a mathematical formula allows it.

Exact clamp formulas/mobile floors are implementation values to be calibrated and tested before they are promoted as canonical generator logic.

### Usage Responsibility

- **4–32:** component/internal spacing by default.
- **40–120:** common layout/section spacing range.
- **140–300:** large/art-directed composition range.

These are usage tendencies, not visual-style presets. Responsibility and the approved project design outrank the number.

A 48px internal relationship may legitimately be Fixed; a 48px section relationship may legitimately use Fluid. A 200px Fluid value may be correct for a deliberately art-directed composition. Do not choose or reject a value merely because it looks unusually large or small in isolation.

### Class-First Application
Variables provide the approved creative range; global classes encode repeatable decisions for the specific project.

A builder should prefer an approved section/layout class that already consumes the appropriate spacing variables instead of manually selecting padding values on every repeated section.

This does **not** mean UNA-Elementor should pre-create generic section classes that force all projects into the same spacing recipe. Classes should reflect reusable composition in the actual design system.

Local spacing controls remain the final exception for genuinely unique composition—not a substitute for missing global classes.

### Spacing Approval Rule
**Be visually expressive within the approved spacing system. Do not achieve originality through arbitrary values or repeated local overrides. Use Fixed when the relationship must remain constant; use Fluid when a larger spatial relationship should respond to viewport size; always preserve intentional mobile-safe spacing.**

---

## 1D. Sizing / Layout Variables — STRUCTURE APPROVED

### Purpose
Sizing/Layout defines the master page geometry that all later Elementor classes, patterns, and components inherit. The goal is to preserve the team's proven 1200px design canvas while allowing deliberate full-bleed and art-directed compositions.

### Core Layout Variables

- **Width Content** — `1200px`
- **Gutter Content** — `20px`

These are the primary shared layout values for the baseline build.

The 20px gutter is intentionally familiar to the team and remains a stable safe side inset rather than becoming a complex fluid rule by default.

### Master Composition Rule

The canonical desktop structure is:

`Full-Width Section → 1200px Content Container + 20px Side Padding → Real Content / Grid Composition`

The section owns the viewport-width surface/background. The inner content container owns the master alignment and safe side padding. Actual content is composed inside that system.

Do not constrain every section itself to 1200px. The section remains free to support background color, media, decoration, and bleed behavior across the viewport.

### 12-Column Grid Relationship
The team's 12-column composition remains anchored inside the 1200px master content system.

Do not introduce a competing wide-container system merely to create visual variety. Expressive layouts should come from composition, grid usage, spacing, and intentional bleed—not from casually changing the master content width per section.

### Half-Content Geometry
For split compositions, derive the half from the master content width:

`1200px master content → 600px left half + 600px right half`

The half relationship is derived from the 1200px master. It is **not** defined as `50vw`.

A separate `Width Content Half` variable is not required at this stage; the half should be derived structurally by the approved layout class/pattern so responsive behavior and gutters remain coherent.

### Structural Bleed Contract
Bleed is a first-class layout capability and must be structural rather than simulated with arbitrary widget offsets.

Canonical concept:

`1200px-derived half → anchored to master grid → selected media/surface extends outward from that half to the viewport edge`

Supported directions:
- Bleed Left
- Bleed Right

The same concept may later support image, video, surface, or decorative-media bleed when the project design requires it.

### DOM Ownership Rule
Split/bleed composition must be represented intentionally in the DOM/container hierarchy.

Conceptual structure:

```html
<section>
  <div class="layout-split-bleed">
    <div class="layout-split-bleed__media">
      <!-- media -->
    </div>
    <div class="layout-split-bleed__content">
      <!-- content -->
    </div>
  </div>
</section>
```

This is a conceptual contract, not permission to hardcode these exact class names before the Layout Classes layer is reviewed.

Mirror left/right behavior through an approved modifier/state rather than duplicating separate markup for each direction.

### No Fake-Bleed Rule
Do not create the primary bleed geometry by applying arbitrary negative margins, transforms, or page-specific offsets to individual Elementor widgets.

If a project requires a reusable split/bleed composition, the container/DOM structure and owning global layout class must express that relationship.

### Responsive Behavior
The 600px half is a desktop/master-grid relationship, not a fixed mobile width.

At smaller breakpoints, the same semantic DOM should reflow or stack according to the approved composition while preserving logical reading order and content accessibility. Avoid separate duplicate mobile markup solely to reproduce the layout.

### Fixed Heights
Do not establish global fixed-height variables for sections/heroes by default.

Content should normally determine block height. Use intentional `min-height` or viewport-relative behavior only at the later component/pattern level when the actual design requires it and it has been tested for content growth, mobile browser behavior, zoom/reflow, and accessibility.

### Interaction Sizing
Minimum interactive target behavior remains an accessibility requirement downstream. Do not turn button/control heights into rigid visual sizing variables before Buttons/Forms are reviewed.

### Layout Approval Rule
**Design inside the 1200px master content system, preserve the team's 20px safe gutter, derive split halves from the 1200px content width, and use structural bleed to escape intentionally toward the viewport. Do not create variety by abandoning the master grid or by faking bleed with local offsets.**

---

# Next Foundation Review

Color, typography, spacing, and sizing/layout variable structures are documented. Continue the Variables review before moving to Base.

Next variable family to review: **Radius**.
