# UNA-Elementor

UNA-Elementor is an **Elementor V4 Atomic-first theme-kit system** for WordPress.

Its job is to define a reusable, accessible, conversion-ready design system that can be built natively in Elementor V4 and mapped deterministically by Koda into Elementor Atomic structures.

UNA is not a generic CSS framework, not a screenshot recreation system, and not a page-specific design library.

## Product Goal

Create a production-ready Elementor design system that can be expressed 1:1 through:

`Variables → Global Classes → Atomic Elements → Components → Theme Builder Templates → Page Recipes`

The same system must support human Elementor production and deterministic Koda migration without requiring runtime design judgment.

## Atomic-First Rule

Use Elementor V4 Atomic Elements wherever the required capability exists.

Atomic elements natively support the V4 styling model: Variables, Classes, responsive styles, states, interactions, Components, and nested atomic layout. Classic widgets may coexist only where Atomic V4 does not yet provide the required production capability.

Do not recreate Elementor's styling system with a parallel CSS framework.

## Core Principle

**Perfect the system before multiplying it.**

UNA must be strong enough that a page can be assembled from approved variables, classes, components, atomic layout controls, and recipes without page-specific repair.

## Hard Constraints

- No band-aids.
- No page-specific CSS.
- No local override styling as a production strategy.
- No arbitrary values that bypass Variables or approved Classes.
- No duplicate desktop/mobile content used to repair responsiveness.
- No visual pattern that depends on Koda making design decisions.
- No fake Elementor JSON. Machine mappings must be based on verified Elementor V4 export/data structures.

## Contrast + Typography Contract

Contrast and typography are deterministic system responsibilities.

A surface must define valid foreground roles for heading, body, supporting text, links, icons, borders, and controls. Koda must never need to infer whether text should become light or dark.

Typography roles must define readable responsive size, weight, line-height, and allowed surface contexts. Important supporting content cannot become unreadably small because it is labeled `small`, `meta`, or `caption`.

## Koda Relationship

UNA is the construction language. Koda is the deterministic mapper.

Koda does not design. It does not run an AI agent. It reads approved recipes and maps them 1:1 into Elementor structures.

Conceptual flow:

`Content → Approved Page Recipe → Section Recipe → Component Recipe → Elementor Atomic Element + Class + Variable Mapping → Elementor JSON`

Therefore every reusable UNA primitive eventually needs a machine-readable identity and verified Elementor mapping.

## Theme-Kit Generator Direction

UNA should be capable of generating or validating the atomic foundation of an Elementor theme kit, especially:

- color variables;
- typography variables/classes;
- spacing/size variables where supported;
- global classes;
- atomic element class assignments;
- reusable Components;
- Header/Footer Theme Builder structures;
- page/section recipes;
- responsive behavior contracts;
- surface/contrast contracts.

## Platform

- WordPress
- Elementor V4 Atomic Editor
- Elementor Pro where required
- Gravity Forms when Atomic Forms are not the approved production choice
- Trustindex where required
- Yoast SEO
- WP Engine / LocalWP
- GitHub for architecture, contracts, recipes, mappings, QA, approvals, and durable project memory

## Current Architecture Priority

Before Sections V1 is frozen:

1. Lock Atomic-first ownership.
2. Fix typography and contrast contracts.
3. Validate Variables and Global Classes against Elementor V4.
4. Define machine-readable Koda recipe/mapping contracts.
5. Verify actual Elementor JSON/export structures from real Atomic exports.
6. Continue the full-site mobile-first stress test.
7. Keep / Improve / Merge / Eliminate repeated section patterns.
8. Freeze reusable Sections only after the system proves itself.

## Human Gates

Use explicit gates:

- Approve
- Revise
- Override

`Override` is a human governance decision, not permission to add hidden custom CSS or local page repairs.

## GitHub Role

GitHub stores the durable system definition: architecture, variables/classes contracts, machine mappings, recipe schemas, approvals, QA findings, and Koda handoff requirements.

The actual WordPress/Elementor runtime remains in WordPress, but UNA's definitions must be precise enough to reproduce and validate that runtime deterministically.
