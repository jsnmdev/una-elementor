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

# Next Foundation Review

Color structure and the dental/medical typography baseline are documented. Continue the Variables review before moving to Base.

Next variable family to review: **Spacing**.
