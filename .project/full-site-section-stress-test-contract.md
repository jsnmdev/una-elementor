# UNA-Elementor Full-Site Section Stress Test Contract

## Mission
Use the existing sitemap as a real-world test bench for UNA. Build visually diverse, modern, spacious pages from the existing Lego system, then use the results to Keep / Improve / Merge / Eliminate section patterns before Sections V1 is frozen.

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

## Elementor Native Composition Is Allowed
Use realistic Elementor controls freely where they create intentional composition:
- flex/grid direction, alignment, order and wrapping
- width, max-width and min-height controls
- responsive visibility/order
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

## Sitemap Rule
Keep the existing sitemap and page purposes intact. Redesign/recompose the pages rather than deleting page coverage.

## Responsive Rule
Mobile is an intentional composition, not desktop geometry squeezed vertically. Preserve meaning, hierarchy, accessible source order, touch targets, readable content and CTA clarity.

## Completion Gate
The stress test is ready for review when:
1. The full existing sitemap has been rebuilt/cleaned using the current system.
2. Pages demonstrate substantial visual variety from the same Lego vocabulary.
3. No local/page-specific overrides or custom CSS were used.
4. Repeated section patterns are documented for Keep / Improve / Merge / Eliminate review.
5. Naming is understandable to an Elementor production team.
6. The output is ready to become the basis for Sections V1 rather than another speculative component inventory.
