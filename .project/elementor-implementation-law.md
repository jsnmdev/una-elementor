# UNA-Elementor — Elementor Implementation Law

## Status
Approved governing implementation rule for the Elementor V4 production system.

## Core Law

> **Elementor Settings + Elementor Variables = Global Classes. Local Overrides are the exception.**

UNA-Elementor must use Elementor V4 as it actually works. Native Elementor settings and approved Elementor Variables are the first implementation path. Reusable decisions are captured as Global Classes. Local Overrides are reserved for intentional one-off exceptions. Child-theme CSS is used only when Elementor cannot correctly express the approved behavior.

## Implementation Priority

1. **Elementor native setting**
2. **Approved Elementor Variable** assigned to that setting where applicable
3. **Global Class** for repeatable implementation
4. **Local Override** for a genuinely unique exception
5. **Hello Elementor Child Theme CSS** only when Elementor cannot properly implement the approved requirement

Do not skip directly to CSS because it is faster.

## Ownership Model

### Variables = approved reusable values
Examples:
- Color variables
- Font variables
- Type Scale values
- Fixed and Fluid spacing variables
- Container Width
- Reading Width
- Content Gutter
- Radius variables

### Classes = repeatable application
A class combines Elementor settings with approved Variables to encode a reusable production decision.

Examples:

`section-96-fluid`
- Elementor top padding → `Space 96 Fluid`
- Elementor bottom padding → `Space 96 Fluid`

`container-full`
- standard content boundary
- max width → `Container Width` variable (1200px baseline)
- left/right padding → `Gutter Content` variable (20px baseline)
- stacked/column children by default
- start alignment
- gap → `Space 24 Fixed`

`container-read`
- max width → `Reading Width` variable
- used when the composition needs a narrower reading measure

The class should reference approved variables rather than duplicate hardcoded values whenever Elementor supports that relationship.

### Local Overrides = intentional exceptions
Local Overrides are allowed when a composition is genuinely unique and does not justify a reusable class.

Rules:
- **Repeatable decision → Class**
- **Unique exception → Local Override**
- **Repeated Local Override → promote/fix/extend the class system**

A Local Override must not become the normal production method.

### Child Theme CSS = unsupported-behavior fallback
Centralized CSS belongs in the active Hello Elementor child theme only when Elementor cannot correctly express the approved requirement.

Known/anticipated examples include:
- structural bleed geometry when native Elementor settings cannot express it reliably;
- scoped Gravity Forms implementation under `.gf-form`;
- scoped WordPress long-form/post prose styling;
- other proven unsupported behavior.

Do not use child-theme CSS to recreate functionality already available cleanly through Elementor settings + variables + classes.

## Forbidden Implementation Paths

Do not use:
- Elementor widget/element Custom CSS;
- page-level Custom CSS;
- arbitrary one-off CSS patches;
- repeated hardcoded values when an approved Elementor Variable exists;
- duplicate classes that solve the same responsibility;
- Local Overrides as a substitute for a missing reusable class;
- child-theme CSS simply because the developer prefers CSS over Elementor controls.

## Class Responsibility

Classes should have clear ownership and remain composable.

### Section classes
Own vertical section spacing.

Naming follows approved spacing variables, for example:
- `section-48-fixed`
- `section-48-fluid`
- `section-96-fixed`
- `section-96-fluid`
- `section-140-fluid`

A section class maps 1:1 to an approved spacing variable. Do not invent section values that do not exist in the approved spacing system without first extending the Variable contract.

### Container classes
Own width/boundary behavior.

V1:
- `container-full` — standard 1200px content canvas with 20px safe sides; stacked by default.
- `container-read` — approved narrower reading width.

`container-full` does **not** automatically create two or more columns. Children stack by default.

### Layout classes
Own repeated child arrangement/composition.

A repeated two-column, three-column, grid, split, or other proven composition may receive a dedicated layout class. A unique composition may use a Local Override instead.

Do not overload container classes with composition responsibility.

### Flow classes
Own internal flow relationships such as Stack and Cluster without taking ownership of component purpose, typography, color, or content.

### Bleed classes/patterns
Own intentional viewport escape geometry and remain separate from normal container width and layout responsibilities.

Bleed must be structural. Do not fake the primary geometry with arbitrary negative margins/transforms on individual widgets.

## Default Composition Rule

A normal section may be expressed as:

`Section + section spacing class → container-full → stacked children`

If a repeated layout is required:

`Section + section spacing class → container-full + layout class → children`

If the layout is genuinely unique:

`Section + section spacing class → container-full → Local Override → children`

This keeps the default mobile-first behavior predictable: **stack first, enhance composition intentionally.**

## Governing Principle

> **Use Elementor to build Elementor. Variables hold the approved values. Classes encode repeatable decisions. Local Overrides handle true exceptions. Child-theme CSS exists only for behavior Elementor cannot correctly own.**
