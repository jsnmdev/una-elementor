# UNA-Elementor — Koda Production Contract

## Status
Approved architectural direction. This document defines how UNA-Elementor should support Koda without changing UNA-Elementor into a Next.js product.

## Product Boundary

**UNA-Elementor is the Elementor production specification.**

**Koda is Elementor-focused.** Koda may use Next.js internally as a fast prototyping/preview interface, but Next.js is not the production target and must not dictate architecture that Elementor then has to fight.

The final production target remains:

`WordPress + Elementor + UNA-Elementor`

Next.js, when used by Koda, is a temporary preview/rendering tool for accelerating design decisions.

## Governing Rule

> **Design for Elementor first. Prototype elsewhere only when the prototype can translate cleanly back into the approved UNA-Elementor contract.**

A prototype must not introduce React/Next.js-first behavior, layout, styling, or component architecture that requires Elementor hacks to reproduce.

## Shared Production Vocabulary

Koda prototypes and Elementor production builds should speak the same conceptual vocabulary established by UNA-Elementor:

- approved Elementor Variables;
- approved Type Scale;
- section spacing classes;
- container classes;
- layout classes;
- flow classes;
- surface classes;
- button classes;
- media classes;
- typography/content primitive classes;
- approved components and templates as they are added.

Example conceptual section:

```text
Section
+ section-120-fluid
+ surface-light

└── container-full
    + approved layout class when required
    ├── stack
    │   ├── overline
    │   ├── H1
    │   ├── lead
    │   └── cluster
    │       ├── primary action
    │       └── secondary action
    └── media
```

Koda may render this rapidly in Next.js, but the approved design must be expressible through Elementor containers/widgets/settings/classes and the UNA-Elementor variables.

## DOM → Elementor Translation Contract

The DOM/design structure describes semantic and structural intent. Elementor implements that intent using the minimum necessary Containers and Widgets.

Translation flow:

`DOM / Design Intent → remove redundant wrappers → Elementor Containers + Widgets → Global Classes → Elementor Variables → Local Overrides only when genuinely unique`

Do not translate every prototype `<div>` into an Elementor Container 1:1. Every Elementor Container must have a structural/layout responsibility.

Example mapping:

```text
Prototype intent
Hero
├── Content
│   ├── Overline
│   ├── H1
│   ├── Lead
│   └── Actions
└── Media

Elementor
Outer Container
├── section spacing + surface classes
└── Inner Container
    ├── container-full + approved layout class
    ├── Content Container / stack
    │   ├── Text widget + overline
    │   ├── Heading widget, semantic H1
    │   ├── Text widget + lead
    │   └── Actions Container + cluster
    └── Image widget + approved media class
```

## Elementor Build Manifest

An approved Koda prototype should be able to produce a human-readable Elementor Build Manifest before any automated Elementor write process exists.

The manifest should describe, per section/component:

- Elementor Container/Widget tree;
- semantic HTML tags;
- Global Classes to apply;
- Variables consumed by those classes;
- content slots;
- media slots;
- global actions/components used;
- Local Overrides, if any, with justification;
- any behavior that requires Hello child-theme CSS because Elementor cannot own it natively.

This allows the Elementor team to reproduce an approved prototype without visually guessing values from a screenshot.

## Content vs Presentation Boundary

UNA-Elementor owns presentation and structure:

- DOM/container architecture;
- variables;
- classes;
- layout;
- spacing;
- surfaces;
- typography presentation;
- buttons;
- media framing;
- reusable components/templates.

Structured content owns meaning:

- headings;
- body copy;
- overlines;
- images/media references;
- CTA labels/destinations;
- benefits;
- FAQs;
- provider/service content;
- SEO fields;
- other approved content fields.

Structured content must not carry arbitrary presentation values such as one-off padding, font sizes, colors, radii, or CSS when those responsibilities belong to UNA-Elementor.

## Content Mapping Contract

Every reusable Elementor template/component intended for automated population should eventually define named content slots.

Example:

```text
Service Page / Hero
├── hero_overline
├── hero_heading
├── hero_body
├── hero_primary_cta
├── hero_secondary_cta
└── hero_image
```

The eventual Koda content-population layer maps structured content fields to known Elementor content slots/settings rather than blindly searching for random visual content.

Conceptual flow:

`Structured Content → Template Content Contract → Known Elementor Slot → WordPress/Elementor renders approved presentation`

## WordPress / Elementor Data Boundary

The Git repository is not the WordPress content database. Elementor page structure/content is persisted in WordPress data, including Elementor-managed post metadata. Theme/child-theme code in Git is a separate implementation layer.

Future automation should therefore avoid treating Git files as the page-content database.

Koda should not directly manipulate MySQL as the primary production interface. Future automated writes should use a controlled authenticated WordPress integration/API/plugin layer with validation, permissions, rollback/audit capability, and schema/version checks before modifying Elementor-managed page data.

## Koda Phase 1 Relationship

Koda's initial useful relationship to UNA-Elementor should focus on speed and repeatability:

1. **Elementor Variable Generator** — generates the approved project variable specification and actual fluid/clamp values where applicable.
2. **Elementor Global Class Generator** — generates the approved class specification from Elementor settings + variables.
3. **Fast Visual Prototyper** — may use Next.js to preview the exact UNA-Elementor vocabulary quickly.
4. **Elementor Build Manifest** — translates approved prototype structure into Elementor Containers/Widgets/Classes/Variables.

Do not require WordPress write automation before these four capabilities are proven.

## Future Koda Relationship

After the Foundation and translation contract are proven, Koda may add:

- Elementor component/template mapping;
- structured content schemas;
- Elementor content population;
- media mapping;
- Gravity Forms `.gf-form` generation/styling support;
- WordPress post/prose styling support;
- broken-link and QA validation;
- preview/approval/publish workflows;
- controlled WordPress/Elementor write automation.

These are downstream capabilities, not reasons to expand the current UNA-Elementor Foundation milestone prematurely.

## Elementor-First Gate

Before a Koda prototype is approved for Elementor production, verify:

- the layout can be reproduced with approved Elementor Containers/Widgets;
- Elementor Settings + Variables + Global Classes own the repeatable presentation;
- Local Overrides are true exceptions;
- no widget/page Custom CSS is required;
- any required child-theme CSS is justified by a real Elementor limitation;
- responsive behavior can be reproduced without duplicate mobile-only markup unless genuinely necessary;
- semantic HTML and accessibility survive translation;
- content slots can be identified independently from presentation.

If the prototype fails this gate, revise the prototype or intentionally extend UNA-Elementor before production.

## Governing Principle

> **UNA-Elementor defines how production Elementor sites are built. Koda accelerates that workflow. Next.js may preview the system, but Elementor remains the design constraint and final production target.**
