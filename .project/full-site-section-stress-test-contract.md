# UNA-Elementor Full-Site Section Stress Test Contract

## Mission
Use the existing sitemap as a real-world test bench for UNA. Build visually diverse, modern, spacious pages from the existing Lego system, then use the results to Keep / Improve / Merge / Eliminate section patterns before Sections V1 is frozen.

This exercise also simulates the workflow Koda will eventually execute when assembling Elementor sites from approved UNA building blocks.

## Hard Ownership Chain
`Variables → Base → Foundation Classes → Components → Section Base → Section Modifiers → Content`

There is NO Local Override layer in this exercise.

## Zero Custom CSS Rule
If a page composition appears to require custom/page-specific CSS, stop. Resolve in this order:
1. Elementor native settings.
2. Existing UNA Foundation class.
3. Existing UNA component recomposition.
4. Existing reusable section modifier.
5. If the same need is genuinely reusable, improve the correct upstream UNA layer.
6. Otherwise change the design.

Forbidden:
- page-specific CSS
- inline styles
- arbitrary-value repair
- ID/page selectors
- DOM-position/nth-child styling for variants
- combination classes such as `hero-dark-left-bleed`
- custom CSS used to preserve a composition that Elementor + UNA cannot reproduce

## Mobile-First Build Law
Every page and section is designed in this order:

`Mobile → Tablet → Desktop`

Mobile establishes the complete content hierarchy first: source order, CTA priority, component order, readable spacing, touch targets, media placement and meaning.

Tablet may introduce additional relationships.

Desktop may enhance the same composition with asymmetric grids, bleed, offsets, layering, larger whitespace and more complex spatial relationships.

Desktop complexity must be an enhancement of a complete mobile composition.

## No Responsive Hiding During This Test
Elementor can hide content by breakpoint, but that shortcut is forbidden for this stress test.

Do not use:
- `display:none` as a responsive repair
- separate desktop and mobile copies of the same section
- duplicate CTA/content blocks created only for breakpoints
- hidden duplicate media/components
- responsive visibility to conceal a component that does not adapt

Use the same content/component instances across breakpoints. Responsive changes may use legitimate Elementor controls such as order, direction, columns, alignment, sizing, gaps, positioning and stacking.

If a composition cannot transform cleanly without hiding or duplication, improve the reusable system or reject the composition.

## Elementor Native Composition Is Allowed
Use realistic Elementor controls freely where they create intentional composition:
- flex/grid direction, alignment, order and wrapping
- width, max-width and min-height controls
- responsive order and layout changes
- relative/absolute positioning
- z-index
- overflow
- gaps/padding/margins through approved settings/tokens
- background/media settings

Positioning is composition, not repair.

## Creative Mandate
Go broad visually while keeping architecture disciplined:
- asymmetric 8/4, 4/8, 7/5, 5/7, 60/40 and 40/60 compositions
- left/right bleed
- large editorial whitespace
- layered and offset components
- mixed component families inside one section
- alternating light/neutral/primary/secondary/dark surfaces
- full-width and contained moments
- media left/right and background-media compositions
- large typography and strong hierarchy
- intentional desktop asymmetry with logical mobile source order

Do not make every section a heading plus three equal cards. Do not make sections unnecessarily narrow or compact.

## Naming Contract
Names describe purpose and one independent structural decision.

Good:
- `hero`
- `hero--split`
- `hero--centered`
- `hero--media-left`
- `hero--media-right`
- `hero--background-media`
- `services-section`
- `proof-section`
- `providers-section`

Bad:
- `hero-modern`
- `hero-home-2`
- `hero-green`
- `hero-split-dark-right-bleed`

Surface, width, bleed, component variants and section modifiers remain independent Lego pieces.

## Section Extraction Rule
During exploration, pages may express many visual compositions. Do not immediately formalize each as a new section class.

After the full sitemap is built, classify every repeated pattern:
- KEEP — earns a reusable section base/modifier.
- IMPROVE — useful but upstream ownership or responsiveness needs correction.
- MERGE — visually different examples are one base plus independent modifiers.
- ELIMINATE — demo-only or not worth maintaining.

## Hero Exploration Target
Pressure-test roughly 6–8 meaningful presentations using a small composable vocabulary, including:
- centered/no-media
- split media right
- split media left
- bleed right
- bleed left
- background media
- contained/editorial media
- focused conversion/landing-page hero

These are presentations to test, not permission to create eight monolithic hero classes.

## Components to Exercise Aggressively
Use the current component labs throughout real pages:
- Service Cards: media and SVG/icon compositions
- Provider Cards: stacked/left/right
- Icon Cards
- Rating
- Avatar / Avatar Stack
- Promo
- Counter
- Stat / Metric
- Badge / Pill
- Trust Mark
- Review Card
- CTA Block
- Icon List
- Ordered Steps
- Tabs
- Day / Hours
- Location / Contact
- approved Buttons with icons

## Koda Assembly Lens
Treat every successful composition as a future assembly recipe:

`Content purpose → section family → approved components → mobile hierarchy → tablet adaptation → desktop enhancement → validation`

The value is not only the visual pattern. Record what content makes the pattern suitable, which Lego pieces it uses, and how the same source order transforms across breakpoints.

## Sitemap Rule
Keep the existing sitemap and page purposes intact. Redesign/recompose the pages rather than deleting page coverage.

## Completion Gate
The stress test is ready for review when:
1. The full existing sitemap has been rebuilt/cleaned using the current system.
2. Pages demonstrate substantial visual variety from the same Lego vocabulary.
3. No local/page-specific overrides or custom CSS were used.
4. No responsive hiding or duplicate breakpoint-specific content was used to solve layout problems.
5. Repeated section patterns are documented for Keep / Improve / Merge / Eliminate review.
6. Naming is understandable to an Elementor production team.
7. The output is ready to become the basis for Sections V1 and Koda assembly rules rather than another speculative component inventory.
