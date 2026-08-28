# UNA-Elementor Delivery Workflow

## End-to-End Flow

1. Client Onboarded
2. Brief Complete
3. WordPress Install Created in WP Engine
4. Clean LocalWP Environment Established
5. Pull Current WP Engine Install to LocalWP
6. Build Core Page System
7. Internal Review + Approval
8. Content Population
9. QA + Optimization
10. Push to WP Engine Staging + Stakeholder Review
11. Final Approval + Production Launch

## Push / Pull Discipline

Typical implementation loop:

`WP Engine → Pull to LocalWP → Work Locally → Push to Staging → Review → Pull/Push as needed → Repeat`

Production is not the everyday work environment.

## Step 6 — Build Core Page System

Step 6 begins only after the current WP Engine install has been pulled into LocalWP and the local environment is verified.

Implementation sequence:

`Pulled WP Engine Install → Verify Clean WordPress → Install/Verify Hello Elementor Parent → Install + Activate UNA Hello Child Theme → Install/Verify Elementor V4 + Approved Plugins → Verify Theme Setup → Content/Data Architecture → Elementor Atomic Foundation → Instatic Rapid Prototype / Visual QA → Global Site System → Components → Core Templates → Functional Layer → User Journeys + Measurement → Technical QA + Stress Test → Internal Approval → Content Population`

### 6.0 Theme Setup Gate

The child theme is part of initial Step 6 setup, not a later retrofit.

Required:
- Hello Elementor parent theme installed and available;
- UNA Hello Child Theme installed and activated;
- parent/child relationship verified;
- Elementor V4 installed/verified;
- approved baseline plugins installed/verified;
- no unnecessary inherited theme CSS, demo content, or design debt;
- local environment ready for Foundation work.

**Theme Setup Complete → Content/Data Architecture → Elementor Foundation**

### Child Theme Responsibility

The UNA Hello Child Theme is reusable infrastructure and the code/CSS escape hatch when Elementor cannot cleanly express a justified requirement.

Keep it intentionally small. Typical responsibilities may include:
- `style.css`;
- `functions.php`;
- narrowly justified project-level CSS/code;
- reusable code that belongs to the WordPress/theme layer rather than an Elementor page instance.

The child theme must not become a dumping ground for page-specific fixes.

### CSS Ownership Rule

UNA-Elementor is **Class First, Local Override Last**.

Decision order:

`Existing Global Class? → Use It`

`Repeated Missing Pattern? → Create/Extend Global Class`

`Reusable Component Behavior? → Fix the Component`

`Truly Unique Composition? → Use Elementor Local Controls`

`Elementor Cannot Cleanly Express the Requirement? → Hello Child Theme CSS`

Rules:
- do not use Tailwind, Bootstrap, or another parallel utility/design system;
- do not place custom CSS inside an Elementor element, widget, component, page, or Elementor Custom CSS field;
- do not use child-theme CSS to bypass a missing/broken global class, variable, component, or template contract;
- if the same local override appears twice, stop and evaluate whether it belongs in a global class or component;
- child-theme CSS should consume established design variables/custom properties where technically practical rather than creating a second hardcoded brand system;
- custom CSS is exceptional, centralized, searchable, and maintainable.

### 6.1 Content/Data Architecture

Define and approve the project content structure, global data ownership, entities/relationships, page responsibilities, URL conventions, business actions, and goal-based landing-page rules before component/template implementation invents structure on the fly.

Canonical contract: `.project/content-architecture.md`.

### 6.2 Elementor Atomic Foundation

Foundation follows the content/data contract and establishes the presentation system before page composition.

Governing hierarchy:

`Variables → Global Base Styles → Global Classes → Primitives → Components → Global Components → Sections/Patterns → Templates → Pages → Local Override`

Governing rule:

**Variables define decisions. Classes define reusable patterns. Components define reusable UI. Templates define composition. Pages provide content. Local overrides are the final exception.**

Foundation must be class-first. A local override must never repair a broken or missing global class, component, variable, or template contract.

Foundation scope includes:
- color variables/tokens;
- semantic typography roles;
- spacing scale;
- container/content widths;
- responsive breakpoints;
- border/radius/shadow rules;
- media ratios;
- Light/Dark surface contexts;
- global base element behavior;
- reusable layout/global classes;
- button primitive and states;
- form-control foundation;
- icon behavior;
- accessibility/focus behavior.

The approved button contract is:

`Primary / Secondary / Outline / Text × Light / Dark Surface × No Icon / Icon Left / Icon Right`

Surface context should preferably be owned by the parent section/component so descendants respond consistently rather than receiving one-off local color fixes.

6.2 must end with a Foundation Test Page that demonstrates and stress-tests the approved typography, spacing, containers, surfaces, media, form controls, button matrix, icon placement, interaction/focus states, and responsive behavior.

### 6.3 Instatic Rapid Prototyping / Visual QA

Instatic is the preferred rapid visual prototyping workbench for UNA-Elementor when a page, section, or template needs fast composition and responsive review before production Elementor implementation.

Default prototyping loop:

`UNA Variables + Global Classes + Semantic HTML → Instatic → Visual / Responsive QA → Approved DOM + Class Intent → Elementor V4 Recreation`

Rules:
- Instatic is a prototyping and QA surface, not a production dependency or replacement for Elementor;
- preserve the UNA vocabulary when prototyping: approved variables, type roles, spacing, containers, grids, surfaces, media ratios, buttons, and component contracts;
- prefer semantic HTML and reusable UNA-style classes over page-specific generated markup;
- do not adopt Instatic/Core Framework utilities as a second UNA design system merely because they are available;
- do not let Instatic-generated classes, arbitrary values, or convenience abstractions redefine approved UNA decisions;
- visual changes discovered in Instatic must map back to the correct owner: variable, global class, component, template, or justified local override;
- if an Instatic prototype exposes a repeated missing pattern, update UNA first, then implement it in Elementor;
- production acceptance is based on the Elementor implementation, not the Instatic prototype.

Use Instatic when it materially shortens visual iteration, especially for:
- Foundation Test Pages;
- representative home/service/provider/location templates;
- complex bleed, overlap, grid, and responsive compositions;
- rapid type-scale and content-measure QA;
- section-by-section approval before Elementor build-out.

GitHub static prototypes may remain useful for durable reference and inspection, but Instatic is the preferred live prototyping canvas when available.

**Foundation Approved + Prototype Validated → Global Site System**

## Step 6 Gate

Step 6 is complete only when the reusable page system is approved. Building many pages is not evidence that the system is ready.

Before content population begins, the representative templates and global systems must be stable enough to multiply without repeated design decisions.

## Content Population

Content population begins after Step 6 approval and uses the approved:
- global settings;
- component library;
- Theme Builder/template structures;
- content/data architecture;
- user-flow and CTA conventions;
- SEO conventions;
- measurement/event map.

If population exposes a real system defect, fix the system owner first, then continue. Do not patch dozens of individual pages.

## Staging

Staging is the review and verification environment for:
- stakeholder review;
- responsive checks;
- forms;
- integrations;
- redirects where applicable;
- analytics verification when access exists;
- content/SEO QA;
- final pre-production checks.

## Production

Before production:
- final approval is explicit;
- backup/restore path is understood;
- required forms/integrations are verified;
- critical Book / Call / Visit / Contact paths are tested;
- tracking status is accurately documented;
- known blockers are resolved.

After launch, run a targeted smoke test on the live site.