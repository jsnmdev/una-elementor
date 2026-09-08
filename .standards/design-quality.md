# Anti-AI-Slop / Design Quality Layer

## Purpose
Use this standard whenever a task materially affects visual design, page composition, conversion UI, component presentation, or generated visual direction.

Token compliance is necessary but not sufficient. Correct tokens plus timid, generic, repetitive, or template-like composition still fails this standard. Fix composition without inventing a new visual language.

## Source of Truth
Use visual authority in this order:
1. Project living Visual Design System, including Elementor Global Colors, Global Fonts, variables, classes, containers, and approved reusable patterns when present.
2. Locked project Design System rules.
3. Short user brief only where the system does not already decide the issue.

Do not invent new colors, type values, spacing, radii, shadows, or motion values when an approved global token or class exists. Do not create PRODUCT.md or DESIGN.md to work around the existing project contracts.

## Hard Bans
Reject and correct these defaults unless the approved project system explicitly requires them:
- Inter or system-ui as the primary brand typeface.
- Purple-to-blue or soft pastel gradients as a generic default.
- Nested cards inside cards.
- Equal-height icon + heading + short-text service/feature grids as the default composition.
- Glassmorphism or heavy blur by default.
- Soft beige backgrounds paired with low-contrast gray text.
- Decorative float, pulse, or ambient animations with no user purpose.
- Oversized display type with poor measure.
- Meaningless wrapper/container chains used only to force a visual effect.
- Timid under-use of an already-defined project type scale.

## Type Scale
Hero and major section headlines should use the larger end of the approved project scale when the content warrants it. Do not collapse everything toward mid-range safe sizes.

Create clear hierarchy steps:
`display → heading → lead → body`

Body copy generally remains 16–18px with a readable measure unless the project system defines otherwise.

Canonical JasonM.dev reference scale for projects that have not adapted it downward:
- display-lg: 96
- display-md: 80
- display-sm: 64
- heading-1: 56
- heading-2: 46
- heading-3: 38
- heading-4: 30
- heading-5: 24
- heading-6: 20
- lead: 22
- body: 16
- text-sm: 14
- caption: 12

When Elementor/project values intentionally adapt these sizes, the project values become the governing source of truth and floor.

## Hierarchy
- Primary statements must dominate supporting text.
- Section titles must clearly outweigh body copy.
- Primary CTAs must be visually distinct, confident, and adjacent to the content they act on.
- Avoid walls of equal visual weight.
- Soft, polite, evenly weighted compositions fail when they weaken comprehension or conversion.

## Cards and Composition
Equal-height card grids are valid only when content truly deserves equal treatment.

Do not default service, feature, benefit, proof, or process sections to repeated identical Elementor cards. Prefer featured items, varied emphasis, editorial sequencing, asymmetry, or other compositions that better reflect content priority.

Do not let every section reuse the same visual skeleton.

## Direction
For high-trust professional-service work, prefer an editorial rather than SaaS-template sensibility:
- clean, confident hierarchy;
- strong but restrained use of approved primary, secondary, and neutral colors;
- excellent measure and type rhythm;
- deliberate whitespace;
- visual authority without unnecessary decoration;
- composition that supports conversion and credibility.

The page should feel capable and trustworthy, not tentative, trendy, or auto-generated.

## Elementor V4 System Lock
- Use Elementor Global Colors, Global Fonts, variables, classes, reusable components, and Theme Builder ownership before local widget overrides.
- Do not solve hierarchy problems by scattering one-off widget values.
- If a visual correction belongs to the system, change the correct global owner once.
- If the requirement is genuinely page-specific, keep it local without creating a fake reusable abstraction.
- Do not duplicate sections just to create visual variants when a controlled reusable pattern can own the difference.

## UX
Do not print these rules or their names in the UI.

- Prefer one primary action per view; secondary actions should not compete with it.
- Group related controls and content.
- Use familiar interaction patterns unless a real requirement justifies novelty.
- Primary CTA should be prominent, high-contrast, and close to the decision content it affects.
- Empty, loading, error, success, validation, and done states are first-class when applicable.
- Remove elements that do not serve the user job or business outcome.

## Required Review Method
On visual-design requests:
1. Identify the biggest hierarchy, type-scale, and generic-composition problems.
2. Inspect the actual Elementor globals / variables / classes / living VDS first.
3. Make targeted, high-impact corrections while staying inside the system.
4. Explain the changes briefly when a report is needed.

For generated visual concepts, apply this review before generation. Reject a generic composition before producing it rather than accepting slop and polishing afterward.

## Commands
- `/polish` — improve hierarchy, type scale, spacing, contrast, trust, and overall finish.
- `/critique` — evaluate anti-slop quality and Design System fidelity before changing the work.
- `/audit` — check consistency, repetition, generic patterns, and system fidelity across the whole surface.
- `/distill` — remove noise, unnecessary UI, decorative elements, and generic repeated patterns.
- `/trust` — strengthen professionalism, credibility, confidence, and high-trust service presentation.

## Definition of Done
The visual work is done when it feels reviewed by a senior designer who already understands the project system and refuses timid or generic AI-service-template composition.

Passing the token/global-style check alone is never enough.