# Koda Recipe Contract for UNA-Elementor

## Purpose
Koda performs deterministic 1:1 migration/assembly. It does not design, infer, optimize, or run an AI agent.

UNA must therefore expose stable machine identities for every approved reusable building block.

## Pipeline
`Content JSON → Page Recipe → Section Recipes → Component Recipes → UNA IDs → Elementor Mapping → Elementor JSON`

## Recipe Responsibilities
A recipe may choose only from approved values.

### Page Recipe
Defines:
- page type
- ordered section recipe IDs
- Theme Builder dependencies
- page-level semantic requirements

### Section Recipe
Defines:
- section family
- mobile-first source order
- approved layout recipe
- surface ID
- component recipe IDs
- allowed optional content slots
- tablet/desktop enhancement rules

### Component Recipe
Defines:
- component family
- Atomic element structure
- required/optional content slots
- Global Class IDs
- Variable IDs
- allowed modifiers
- accessibility semantics

## Stable IDs
Names must remain human-readable but mapping uses stable IDs.

Example conceptual identities:
- `surface.dark`
- `type.body`
- `type.meta`
- `button.primary`
- `button.context.dark`
- `layout.grid.40-60`
- `hero.split`
- `hero.media.right`
- `media.bleed.right`

Exact identifiers become canonical only after the UNA layer is approved.

## Elementor Mapping Layer
`elementor-map.json` must map UNA IDs to verified Elementor V4 representations such as:
- Atomic `elType`
- Variable IDs/references
- Global Class IDs/references
- Component IDs/references
- native settings keys
- responsive settings representation
- interactions where required
- Theme Builder/template IDs or import references where appropriate

## Verification Rule
No Elementor mapping becomes production-valid until captured from:
1. a real Elementor V4 Atomic build/export on the targeted version; and
2. official Elementor data-structure documentation where available.

Never guess internal keys or IDs.

## Versioning
Every manifest/export must declare:
- UNA schema version
- target Elementor version
- recipe version
- migration compatibility

A mapping for Elementor 4.0 must not silently be treated as valid for 4.2+ if the export/data format changed.

## Required Machine Files
Planned canonical machine layer:
- `manifest/variables.json`
- `manifest/typography.json`
- `manifest/surfaces.json`
- `manifest/classes.json`
- `manifest/components.json`
- `manifest/sections.json`
- `manifest/responsive.json`
- `manifest/recipes.json`
- `manifest/elementor-map.json`
- `manifest/schema.json`

These files must be generated from or reconciled with the approved UNA system. They are not an independent second design system.

## Failure Behavior
If Koda receives:
- unknown recipe ID
- incompatible target Elementor version
- missing Variable/Class mapping
- unsupported Atomic element type
- unverified local override
- custom CSS dependency

Koda must fail validation rather than improvise.

## Theme-Kit Generator Relationship
UNA may eventually generate/import a verified Elementor V4 Atomic theme kit containing Variables, Classes, Components, Theme Builder structures, and approved recipes.

Koda then populates or maps content into those verified structures rather than recreating design logic on every migration.
