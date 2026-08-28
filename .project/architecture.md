# UNA-Elementor Architecture

## Product
**UNA-Elementor**

**Platform:** WordPress + Elementor V4 Atomic Editor

**Purpose:** Build a reusable Elementor-native theme-kit system that is visually strong, accessible, maintainable, and deterministic enough for Koda to map 1:1 into Elementor structures.

UNA is both:
1. a human production system for Elementor teams; and
2. the canonical construction language Koda will consume.

## Governing Architecture

`Content/Data → Variables → Global Classes → Atomic Elements → Components → Theme Builder → Section Recipes → Page Recipes → QA → Approved Kit`

The ownership direction only moves downward. Pages consume the system; they do not repair it locally.

## Elementor V4 Reality

Elementor V4 is Atomic-first and CSS-first. Atomic Elements have their own element type, settings, editor settings, style data, interactions, and nested elements. Global Variables, Classes, Components, responsive controls, states, and Atomic layout are native parts of the architecture.

Use Atomic Elements wherever the production capability exists. Classic V3 widgets may coexist only where the Atomic editor does not yet provide the required feature or an approved plugin integration still depends on the legacy widget layer.

Do not build a parallel utility-CSS framework around Elementor.

## 1. Variables — Lowest Reusable Value Layer

Variables own reusable values, not compositions.

Required domains:
- color ramps: Primary, Secondary, Neutral, White/Black/Transparent;
- font families;
- type-size values where Elementor supports Variables;
- approved spacing/size values where supported by the editor/export format;
- content/read widths where they can be represented natively;
- radius/border/shadow values where supported and proven useful.

### Color Ramp Rule
Color ramps exist so foreground/background relationships can be deterministic.

Each brand family must include enough contrasting shades to support:
- light surface backgrounds;
- dark surface backgrounds;
- readable body/supporting copy;
- accessible links/icons;
- borders/dividers;
- interactive states.

Do not choose a shade because it looks close. Choose it because it fulfills a defined role and passes the contrast contract.

## 2. Typography — Role Contract, Not Decoration

Typography is a system contract.

Approved roles include:
- Display Large / Medium / Small
- H1–H6
- Lead
- Body
- Small
- Meta
- Caption
- Overline
- Helper / Legal

Every role must define:
- font family;
- responsive size;
- weight;
- line-height;
- letter spacing where applicable;
- semantic use;
- minimum readable size;
- allowed foreground behavior on each surface.

### Readability Floors
Patient/customer-facing supporting text must not become visually insignificant.

Rules:
- Body must remain at least 16px equivalent at mobile.
- Small/Meta must normally remain at least 15px equivalent when carrying meaningful information.
- Caption/Helper/Overline may reach 14px only when genuinely secondary and still readable.
- Legal may be smaller only when legally/content-appropriate and still meets accessibility/reflow requirements.
- Do not use reduced opacity as the primary method of creating hierarchy on dark/brand surfaces.

Type hierarchy comes first from size, weight, spacing, and role — not low contrast.

## 3. Surface + Contrast Contract

A surface is more than a background class. It defines a deterministic foreground environment.

Canonical surface families:
- Light
- Neutral
- Primary
- Secondary
- Dark

Each surface must map approved roles for:
- heading foreground;
- body foreground;
- supporting/meta foreground;
- link foreground;
- icon foreground;
- border/divider foreground;
- form/control foreground;
- button context.

Koda must never infer foreground colors.

### Contrast Standard
WCAG 2.2 AA is the minimum acceptance threshold:
- normal text: 4.5:1 minimum;
- large text: 3:1 minimum;
- UI components and meaningful graphics: 3:1 minimum against adjacent colors where applicable.

UNA targets stronger practical contrast for body/supporting text, especially on Dark, Primary, and Secondary surfaces. Passing the mathematical floor is not enough if the role becomes hard to scan on a phone.

### No Opacity Band-Aid
Do not solve secondary text hierarchy with arbitrary `opacity:.6/.7/.8` on dark backgrounds. Use an approved contrasting shade from the color system.

## 4. Global Classes — Shared Style Logic

Classes own reusable style behavior.

Examples:
- typography roles;
- surfaces;
- button bases + variants;
- stack/cluster/grid patterns;
- media ratios;
- card bases + independent modifiers;
- Header/Footer structural modifiers;
- reusable spacing/layout compositions when they map cleanly to Elementor.

Elementor local classes exist, but UNA does not use them as a page-level override strategy. Production styling belongs in approved Global Classes, Variables, Components, or native element settings that are part of a reusable recipe.

### Class Rule
Each class answers one reusable question.

Good:
`hero + hero--split + grid-40-60 + surface-dark + bleed-right`

Bad:
`hero-dark-right-bleed-home`

## 5. Atomic Elements — Native Building Material

Prefer Atomic Elements for primitive structure and content:
- Div Block
- Flexbox
- Grid where supported
- Heading
- Paragraph/Text
- Image/Media
- Button/Link
- Icon
- Atomic Forms/Loops/Grid only when the current production version and requirements support them reliably.

Atomic elements can nest. Keep the DOM as simple as the design permits. Do not add containers solely to imitate older Elementor structure.

## 6. Components — Reusable Assemblies

Components combine Atomic Elements and Global Classes into durable UI pieces.

Examples:
- Button
- Icon Card
- Service Card
- Provider Card
- Review Card
- Rating
- Avatar / Avatar Stack
- Promo
- Stat / Counter
- Trust Mark
- Day / Hours
- Icon List
- CTA Block

A component owns its internal structural relationship and allowed modifiers. It does not own page surface, page spacing, or arbitrary one-off content adjustments.

## 7. Theme Builder

Global shell belongs in Elementor Theme Builder where appropriate:
- Header
- Footer
- archive/single templates when justified
- sitewide conditional structures

Header and Footer consume the same Variables/Classes/Components as pages.

## 8. Sections — Reusable Composition Recipes

Sections are assemblies, not giant custom widgets.

Ownership:
`Variables → Classes → Atomic Elements → Components → Section Recipe`

Section families may include:
- Hero
- Services
- Providers
- Proof/Reviews
- Process
- Locations
- FAQ
- CTA
- Content/Editorial
- Forms/Conversion

A Section recipe defines:
- purpose;
- source/content order;
- allowed grid/layout compositions;
- allowed components;
- allowed modifiers;
- surface compatibility;
- mobile → tablet → desktop transformation;
- semantic requirements.

No page-specific CSS is allowed to preserve a Section design.

## 9. Mobile-First Responsive Contract

Design order:
`Mobile → Tablet → Desktop`

The mobile composition must be complete using the same content instances.

During UNA system validation:
- no duplicate mobile/desktop content;
- no `display:none` used to hide a responsive failure;
- no separate mobile hero and desktop hero;
- no reordered DOM that breaks meaning/accessibility.

Desktop complexity is an enhancement of a valid mobile source order.

## 10. Native Elementor Controls Are Composition Tools

Approved native controls may include:
- flex direction/alignment/order/wrap;
- Grid definitions;
- width/max-width/min-height;
- gap/padding/margin using approved values;
- relative/absolute positioning;
- z-index;
- overflow;
- responsive property values;
- background/media controls;
- states and interactions.

**Positioning creates intentional composition. It never repairs broken structure.**

## 11. No Band-Aid / No Local Override / No Custom CSS

Hard rule for UNA core and Koda-compatible recipes:

Do not use:
- page-specific CSS;
- inline CSS declarations;
- custom CSS selectors to repair an individual page;
- local class styling as a one-off escape hatch;
- `nth-child`/DOM-position tricks for variants;
- arbitrary values outside the approved system;
- duplicate components created to avoid fixing the real owner;
- custom JS for visual behavior Elementor can own natively.

Resolution order when a design cannot be built:
1. Check native Elementor V4 capability.
2. Check existing Variable.
3. Check existing Global Class.
4. Check existing Component.
5. Check existing Section recipe/modifier.
6. If the requirement is demonstrably reusable, improve the correct upstream owner.
7. Otherwise change the design.

## 12. Koda Deterministic Mapping Contract

Koda is not an AI designer.

Koda must never decide:
- which foreground color has enough contrast;
- which typography role is appropriate;
- whether a section needs a different grid;
- whether a button should become primary/outline;
- whether mobile should hide something;
- which Elementor property should emulate a visual effect.

UNA must encode those decisions before Koda runs.

Required conceptual pipeline:

`Content JSON → Page Recipe ID → Section Recipe IDs → Component Recipe IDs → Verified Elementor Element Types + Global Class IDs + Variable IDs + Native Settings → Elementor JSON`

## 13. Machine-Readable UNA Manifest

UNA needs a canonical machine layer, but it must not invent Elementor's internal schema.

Required UNA-side manifests:
- `variables.json`
- `typography.json`
- `surfaces.json`
- `classes.json`
- `components.json`
- `sections.json`
- `responsive.json`
- `recipes.json`
- `elementor-map.json`
- schema/version metadata

These files describe UNA identities and mappings.

### Verified Elementor JSON Rule
Actual Elementor JSON keys, element types, class references, variable references, component references, and export structures must be captured from real Elementor V4 Atomic exports and official data structures before Koda production mapping is implemented.

Never fabricate JSON because it seems plausible.

## 14. Theme-Kit Generator Scope

UNA can evolve into an Elementor-specific Atomic theme-kit generator.

The generated/validated kit may include:
- Variables;
- Global Classes;
- Components;
- Header/Footer Theme Builder templates;
- approved atomic section/page recipes;
- responsive mappings;
- contrast/typography contracts;
- content placeholders/mapping identities;
- Koda recipe metadata.

The generator should output only structures verified to import correctly into the targeted Elementor V4 version.

## 15. QA Gates

Before freezing any layer, validate:
- contrast mathematically and visually;
- typography readability at mobile sizes;
- responsive transformation;
- semantic source order;
- keyboard/focus behavior;
- touch targets;
- long/short content states;
- surface compatibility;
- class ownership;
- absence of local/custom CSS escape hatches;
- 1:1 reproducibility with Elementor V4 native controls.

## Completion Rule

UNA is not complete because the prototype looks good.

A layer is complete when:
1. it is visually approved;
2. it is accessible;
3. it maps cleanly to Elementor V4 Atomic architecture;
4. it has no local/custom repair dependency;
5. its ownership is clear;
6. its Koda identity can be deterministic;
7. its real Elementor export/mapping can be verified.
