# UNA-Elementor Operating Rules

## Mission
UNA-Elementor is an Elementor V4 Atomic-first theme-kit and production system. It exists to create a reusable, accessible, deterministic construction language for human Elementor production and Koda 1:1 migration.

## Authority
The human Product Owner is final authority. Use explicit gates: `Approve`, `Revise`, `Override`.

`Override` never means secretly bypassing the system with page-specific CSS.

## Core Rule
**Perfect the system before multiplying it.**

## Required Working Method
Before changing Variables, Classes, Components, Sections, Theme Builder templates, mappings, or recipes:
1. Inspect the current UNA owner and relevant Elementor V4 architecture once.
2. Search before creating anything new.
3. Prefer native Elementor V4 Atomic capability.
4. Fix the correct upstream owner.
5. Keep every reusable class/component responsible for one understandable job.
6. Validate mobile first.
7. Do not preserve a design that requires a system violation.

## Canonical Ownership Chain
`Content/Data → Variables → Global Classes → Atomic Elements → Components → Theme Builder / Section Recipes → Page Recipes`

Pages consume the chain. They do not create a new styling layer.

## Elementor V4 Atomic First
Use Atomic Elements when the required capability exists.

Prefer native:
- Atomic Div/Flex/Grid layout;
- Atomic Heading/Paragraph/Link/Button/Image/Icon elements;
- Variables;
- Global Classes;
- Components;
- responsive style controls;
- states/interactions;
- Theme Builder structures.

Use legacy widgets only when the production requirement is not yet available reliably in Atomic V4 or an approved integration requires them.

Do not recreate Elementor with a parallel CSS framework.

## Local Class Clarification
Elementor V4 gives every Atomic Element a local class. The existence of that local class is part of Elementor's architecture and is not itself a violation.

UNA's rule is:
- do not author ad-hoc page-specific visual fixes in the local class;
- reusable visual styling belongs in approved Global Classes/Variables/Components;
- native element settings that are intentionally part of a canonical recipe may be stored by Elementor in element/local style data and are allowed only when that setting is structural, deterministic, documented in the recipe, and reproducible by Koda.

Example: an approved Hero recipe may explicitly set one Atomic container to `position:absolute`, a specific approved inset, z-index, or responsive order using Elementor-native controls. That is recipe data, not a human one-off override.

If a local setting exists only because a designer had to make one page look right, it fails UNA.

## Hard No Band-Aid Rule
Forbidden in UNA core and Koda-compatible builds:
- page-specific CSS;
- custom CSS used to repair one composition;
- inline style declarations outside Elementor's verified native data model;
- ad-hoc local class styling as a page-level override strategy;
- arbitrary values outside approved Variables/Classes/recipe settings;
- `nth-child` or DOM-position tricks for variants;
- duplicate mobile/desktop content used to fix responsive layout;
- `display:none` used to hide responsive failures during system validation;
- duplicate components created because an existing owner is inconvenient;
- custom JavaScript for layout/visual behavior Elementor can express natively;
- fabricated Elementor JSON or guessed internal references.

If a composition fails, resolve in this order:
1. native Elementor V4 setting;
2. existing Variable;
3. existing Global Class;
4. existing Component;
5. existing Section recipe/modifier;
6. reusable upstream system improvement;
7. redesign the composition.

## Variables Rule
Variables own reusable values only.

Use the approved color ramps, type values, spacing/size values, widths, and other supported primitives. Do not introduce near-duplicate values for convenience.

## Typography Rule
Typography is deterministic.

Every role must define family, responsive size, weight, line-height, semantic purpose, and surface behavior.

Minimum practical floors:
- Body: 16px equivalent minimum on mobile.
- Small/Meta carrying meaningful information: normally 15px minimum.
- Caption/Helper/Overline: 14px minimum when genuinely secondary.
- Legal may be smaller only when appropriate and still readable/reflow-safe.

Do not create hierarchy by making important supporting copy tiny.

## Contrast Rule
WCAG 2.2 AA is minimum:
- normal text: 4.5:1;
- large text: 3:1;
- meaningful UI components/graphics: 3:1 where applicable.

UNA should exceed the floor for body/supporting text on Dark, Primary, and Secondary surfaces.

Do not use arbitrary opacity to make supporting text look secondary on dark surfaces. Choose an approved contrasting foreground shade from the Variables system.

Every surface must deterministically define foreground roles for:
- headings;
- body;
- supporting/meta text;
- links;
- icons;
- borders/dividers;
- controls/forms;
- button context.

Koda must never infer contrast.

## Class Rule
One class = one reusable responsibility.

Prefer composition:
`hero + hero--split + grid-40-60 + bleed-right + surface-dark`

Never combination classes like:
`hero-home-dark-right-bleed`.

## Components Rule
Components assemble Atomic Elements + Classes. They own internal relationships and allowed modifiers, not page-specific styling.

Reuse before creating. Improve the existing owner when the repeated need belongs there.

## Section Rule
Sections are recipes/assemblies, not monolithic custom widgets.

A section recipe must define:
- purpose;
- semantic/source order;
- approved components;
- allowed layout compositions;
- allowed modifiers;
- surface compatibility;
- mobile/tablet/desktop behavior.

## Mobile-First Rule
Design and QA:
`Mobile → Tablet → Desktop`

Desktop complexity must enhance a complete mobile composition.

During system stress testing, do not duplicate or hide content to make breakpoints work.

## Elementor Native Positioning Rule
Relative/absolute positioning, z-index, overflow, order, alignment, sizing, and responsive controls are allowed when Elementor exposes them natively.

**Positioning creates composition. It never repairs broken structure.**

## Koda Rule
Koda is deterministic and non-AI.

Koda must not decide design intent. UNA must predefine:
- typography role;
- surface/foreground contract;
- component recipe;
- section recipe;
- responsive behavior;
- class/variable identities;
- Elementor element/property mapping.

Conceptual pipeline:
`Content JSON → Recipe IDs → UNA IDs → verified Elementor mappings → Elementor JSON`

## JSON / Mapping Rule
Machine-readable manifests are required, but Elementor internals must be verified from real V4 Atomic exports and official structures.

Never create fake output JSON because the schema looks obvious.

Required UNA manifests eventually include:
- Variables;
- Typography;
- Surfaces;
- Classes;
- Components;
- Sections;
- Responsive rules;
- Recipes;
- Elementor mappings;
- schema/version metadata.

## Theme-Kit Generator Rule
UNA may generate or validate Elementor V4 Atomic theme-kit structures only after the target Elementor version's import/export representation is verified.

The goal is 1:1 repeatability, not best-effort visual similarity.

## Accessibility
Accessibility is part of the architecture, not post-build polish.

Validate:
- contrast;
- keyboard operation;
- visible focus;
- semantic source order;
- correct labels/names;
- touch targets;
- reflow/zoom;
- heading structure;
- readable supporting text.

## QA Gate
A layer cannot be approved until it passes:
- mobile-first visual QA;
- typography readability;
- contrast QA;
- ownership audit;
- no-ad-hoc-local-override audit;
- no-custom-CSS audit;
- Elementor-native reproducibility review;
- deterministic Koda identity review where applicable.

## Completion
A UNA layer is complete only when it is visually approved, accessible, reusable, Elementor V4-native, free of page-level repair dependencies, and precise enough to be mapped deterministically.