# UNA-Elementor Architecture

## Product
**UNA-Elementor**

**Platform:** WordPress + Elementor V4

**Purpose:** A reusable production website builder and delivery system for creating maintainable, measurable, accessible, conversion-ready WordPress websites.

## Environment Workflow
`WP Engine → LocalWP → Work → Push/Pull → Staging Review → Production`

Local = safe to build.
Staging = safe to test.
Production = live to customers.

## Step 6 — Build Core Page System

Step 6 exists to establish and approve the reusable website system before content population.

### Architecture
`Blank Dental Kit → Content/Data Architecture → Elementor Foundation → Global Site System → Dental Component Library → Core Templates → Functional Layer → User Journey Architecture → Measurement Architecture + Tracking Fallback → Technical SEO + Performance → System QA + Stress Test → Approval Gate → Content Population`

## 1. Blank Dental Kit
Start from a clean WordPress install with the approved minimal plugin stack and no inherited design debt.

Baseline stack:
- Elementor V4
- Gravity Forms
- Trustindex
- Yoast SEO

Optional integrations remain project-specific and should not enter the baseline without a real requirement.

## 2. Content / Data Architecture
Define:
- practice name, phone, addresses, hours, booking destinations, social/profile links;
- service/provider/location relationships;
- reusable vs page-specific content;
- dynamic fields where they materially improve maintainability;
- URL and permalink structure;
- taxonomy only when justified;
- internal linking relationships.

## 3. Elementor Foundation
Elementor V4 is the styling system. UNA-Elementor does not use Tailwind or a parallel utility-CSS framework.

Lock:
- global colors;
- typography roles;
- spacing scale;
- container widths;
- responsive breakpoints;
- button styles;
- form styles;
- border/radius/shadow rules;
- media aspect ratios.

Preferred ownership chain:
`Elementor Variables / Global Styles → Global Classes → Reusable Components → Theme Builder Templates → Page Content`

No page should invent its own local system when a global owner exists.

## 4. Global Site System
Build reusable global structures:
- header;
- desktop navigation;
- mobile navigation;
- footer;
- global CTA patterns;
- breadcrumbs;
- practice utility information;
- appointment / call / directions affordances where appropriate.

### Global Business Actions
Business destinations and visual presentation are separate concerns.

Create globally owned business actions for recurring sitewide actions such as:
- Call Now / phone destination;
- Book Online / booking destination;
- Visit / Directions;
- Contact.

The business action owns its destination, canonical label where appropriate, and measurement identity. It must be editable once and reused throughout the site so a changed phone number or booking URL does not require page-by-page edits.

A global action may use different approved button presentations depending on context. For example, Book Online may be Primary on a light hero and Outline on a dark footer while retaining the same booking destination and `book_appointment` measurement identity.

## 5. Dental Component Library
Representative reusable patterns may include:
- standard hero;
- service hero;
- provider hero;
- location hero;
- service cards;
- provider cards;
- location cards;
- treatment benefits;
- procedure/process sections;
- FAQs;
- insurance/financing blocks;
- technology sections;
- review/testimonial blocks;
- related services;
- appointment/contact CTA sections.

Components must define responsive and realistic content states before approval.

### Component Hierarchy
Use this ownership model:

`Globals → Primitives → Global Actions → Reusable Sections → Templates → Page Content`

- **Globals:** business data and design variables.
- **Primitives:** buttons, icons, links, form controls, and other foundational UI elements.
- **Global Actions:** Call, Book, Visit/Directions, Contact.
- **Reusable Sections:** heroes, reviews, FAQs, service/provider/location cards, CTA bands, and similar patterns.
- **Templates:** service, provider, location, and general page structures.

### Button Component Contract
Buttons are one reusable system with controlled dimensions, not separate page-specific widgets.

#### Variant
Approved visual hierarchy:
- Primary
- Secondary
- Outline
- Text

#### Surface
Approved background contexts:
- Light
- Dark

Surface means the background context a component sits on. It is not an application-level light/dark mode.

Prefer applying the surface context to the parent section/component so typography, links, icons, borders, forms, and buttons can respond consistently. Do not create one-off white/dark button fixes per page.

A third `Brand` surface may be introduced only when a real project proves that it requires behavior distinct from Dark. Do not add it speculatively.

#### Icon Placement
Approved icon states:
- None
- Left
- Right

The component owns icon size, alignment, and gap. Do not create local per-page icon spacing.

#### Button States
Define and verify as applicable:
- default;
- hover;
- focus-visible;
- active;
- disabled where a real interaction requires it.

#### Class Responsibility
Conceptual class ownership may follow:
- `.btn` — shared button primitive;
- `.btn--primary`;
- `.btn--secondary`;
- `.btn--outline`;
- `.btn--text`;
- `.btn--icon-left`;
- `.btn--icon-right`;
- `.surface--light` / `.surface--dark` on the owning parent context.

Exact implementation should use Elementor V4's approved global variables/classes/component capabilities rather than introducing a second styling framework.

#### Accessibility
Use semantic interactive elements. Decorative icons must not create duplicate accessible names. Meaningful icon-only actions require an accessible name. Prefer native semantics; use ARIA only where native HTML cannot express the required behavior.

## 6. Core Templates
Build enough representative pages to prove the system:
- Homepage
- Services Index
- One Service Detail
- About
- Provider Detail
- Location Detail
- Contact / Appointment

Do not build every service/provider/location page during Step 6.

## 7. Functional Layer
### Gravity Forms
Core reusable forms:
- Request Appointment
- Contact Practice
- Inquiry / New Patient Contact

Define routing, confirmation, validation, spam protection, privacy/consent, notification testing, and successful-submission measurement.

### Trustindex
Use as review data source. Keep visual composition controlled by the approved Elementor system.

### Yoast SEO
Configure project-appropriate metadata, canonicals, breadcrumbs/schema support, indexation, and sitemap behavior.

## 8. User Journey Architecture
The page system should support:
`Discover → Land → Explore → Intent → Convert`

Primary actions:
- Book
- Call
- Visit / Directions
- Contact

Representative journeys:
- Google Search → Service Page → Reviews → Financing → Book
- Location Page → Phone Click
- Service Page → Provider → Book
- Blog / informational page → Related Service → Appointment

## 9. Measurement Architecture
Measurement is defined around business actions first, not analytics vendors.

### Google Search Console
Search visibility, query, click, and landing-page discovery.

### GA4 / gtag / GTM
On-site landing, navigation, interaction, and conversion actions when connected.

### Call Tracking
CallRail or another approved platform when available.

### Standard action points
- `book_appointment`
- `phone_click`
- `form_start`
- `form_submit`
- `directions_click`
- `external_booking`

## 10. Tracking Fallback
If analytics access is unavailable:
- do not block the build;
- keep action markup/selectors consistent;
- document the event map;
- mark tracking as connection pending;
- activate and verify later when access is provided.

Never describe tracking as live until tested.

## 11. Technical SEO
Establish:
- permalink rules;
- crawl/index rules;
- sitemap behavior;
- canonical behavior;
- breadcrumb hierarchy;
- heading semantics;
- structured-data responsibility;
- internal linking;
- redirects where a replacement site requires them.

## 12. Performance
Guardrails include:
- optimized image dimensions and modern formats;
- controlled font loading;
- deliberate video/embed use;
- review of third-party script cost;
- Elementor asset discipline;
- caching compatibility;
- Core Web Vitals review.

## 13. System QA + Stress Test
Validate:
- responsive behavior;
- accessibility;
- forms and functional flows;
- SEO structure;
- performance;
- conversion paths;
- measurement readiness;
- cross-browser behavior;
- long/short/missing content states;
- button variants on Light and Dark surfaces;
- icon-left/icon-right button behavior;
- global business actions resolve to the correct single source of truth.

Representative templates must survive realistic stress before approval.

## Approval Gate
Step 6 ends with an explicit internal approval of the page system.

**Approved Page System → Content Population**

Content population is a later production activity, not proof that the system is ready.