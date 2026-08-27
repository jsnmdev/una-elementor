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

These primarily serve small/internal relationships such as icon gaps, control spacing, form relationships, component gaps, and compact padding.

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

These are exceptional composition values for deliberate large-scale whitespace, hero/editorial composition, offsets, or other proven layout needs. Their availability is not permission to routinely apply 140–300px section padding.

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
- **40–120:** normal layout/section spacing.
- **140–300:** large/exceptional composition spacing.

Responsibility outranks the number. A 48px internal relationship may legitimately be Fixed; a 48px section relationship may legitimately use Fluid. Do not choose Fluid solely because a value is available.

### Class-First Application
Variables provide approved values; global classes own repeatable application.

A builder should prefer an approved section/layout class that already consumes the appropriate spacing variables instead of manually selecting padding values on every section.

Local spacing controls remain the final exception for genuinely unique composition—not a substitute for missing global classes.

### Spacing Approval Rule
**Use Fixed when the relationship must remain constant. Use Fluid for larger spatial relationships that should respond to viewport size. Preserve intentional mobile-safe spacing.**

---

# Next Foundation Review

Color, typography, and spacing variable structures are documented. Continue the Variables review before moving to Base.

Next variable family to review: **Sizing / Layout**.
