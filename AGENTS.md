# UNA-Elementor Operating Rules

## Mission
UNA-Elementor is a reusable production-delivery system for WordPress + Elementor V4 projects. It exists to help teams move from a clean WordPress install to an approved, reusable, measurable, maintainable website system without page-by-page one-offs or undocumented decisions.

## Authority
The human Product Owner is the final authority. Use explicit gates: `Approve`, `Revise`, `Override`.

## Core Rule
Build the system first. Approve it. Then multiply it.

## Delivery Sequence
`Client Onboarded → Brief Complete → WP Engine Install → LocalWP Pull → Build Core Page System → Internal Approval → Content Population → QA → Staging Review → Final Approval → Production`

## Step 6 Rule
Step 6 means **Build Core Page System**. It is not full content population.

Do not populate all services, providers, locations, or content-heavy pages until the reusable system has passed internal approval.

## Required Working Method
Before changing architecture, templates, global styles, forms, tracking, or project contracts:
1. Inspect the current WordPress/Elementor implementation and relevant project documentation once.
2. Identify the source of truth, shared global settings, reusable components/templates, dynamic content, user journeys, and tracking requirements.
3. Search before creating. Reuse or extend the correct global/system owner.
4. Fix root causes rather than masking symptoms.
5. Keep the smallest coherent change needed to satisfy the approved requirement.

## No Band-Aids
Do not use:
- duplicated business information when a shared source can own it;
- copied Elementor sections when a reusable component/template belongs there;
- one-off CSS that fights global styles;
- arbitrary spacing/typography values that bypass the approved system;
- fake tracking states or claims that analytics is working when access/configuration is missing;
- duplicate forms for the same business action without a real routing reason;
- unnecessary plugins or abstractions added for convenience;
- broad redesigns unrelated to the approved milestone.

## Source of Truth
Every important value should have an intentional owner. Prefer global/site-level sources for shared practice information and reusable content. Derive or reference shared values rather than synchronizing duplicate copies.

## Elementor System Integrity
Global colors, typography, spacing, containers, breakpoints, buttons, forms, component patterns, and Theme Builder templates are contracts. Do not bypass them locally because a single page is inconvenient.

A missing capability should lead to an intentional system extension only when the requirement is reusable or materially justified.

## Content and Data Architecture
Before template multiplication, define:
- global business information;
- service/provider/location relationships;
- reusable vs page-specific content;
- dynamic fields where justified;
- URL/permalink structure;
- taxonomy where justified;
- booking/contact destinations;
- location/provider/service linking patterns.

Avoid speculative data models. Use dynamic data only when it improves maintainability, consistency, or scale.

## Reusable Component States
Reusable components must account for realistic states, including:
- desktop/tablet/mobile;
- hover/focus/active;
- long titles and body copy;
- optional or missing images/content;
- varying CTA text;
- validation/error states where applicable;
- different review counts/content lengths.

## Functional Layer
### Gravity Forms
Use reusable forms for core actions such as appointment requests, contact, and inquiries. Define routing/recipients, confirmations, validation/error states, spam protection, appropriate privacy/consent language, notification testing, and conversion firing only after successful submission.

Do not collect unnecessary sensitive patient information through general marketing forms.

### Trustindex
Treat Trustindex as a review data source, not the site design system. Control the surrounding presentation through Elementor and the approved component system.

### Yoast SEO
Use Yoast for metadata, canonical behavior, schema/breadcrumb support, indexation controls, and sitemap behavior where appropriate. Do not treat plugin installation as completion of technical SEO.

## User Journey Architecture
Every public page should have a role within:
`Discover → Land → Explore → Intent → Convert`

Primary dental actions are:
- Book
- Call
- Visit / Directions
- Contact

Page and component decisions should support one or more of those business actions without forcing CTAs where they do not belong.

## Measurement Architecture
Measurement is action-first and vendor-independent.

### Discovery
Google Search Console can describe Google Search visibility, queries, clicks, and landing pages.

### On-site behavior
GA4 / gtag / GTM can measure landing, navigation, interaction, and business actions when connected.

### Calls and other systems
CallRail or another approved system may extend call attribution when available.

### Standard action points
Use consistent measurement names or mappings for:
- `book_appointment`
- `phone_click`
- `form_start`
- `form_submit`
- `directions_click`
- `external_booking`

## Tracking Fallback
If analytics/tracking access is unavailable, do not block the website build.

Build the site **tracking-ready**:
- standardize key actions;
- expose stable selectors/data attributes where needed;
- document the event map;
- mark the connection as pending.

Never claim tracking is operational until it has been configured and verified.

## Accessibility
Accessibility is the governing standard. Prefer semantic HTML and native controls. Use ARIA only when native semantics are insufficient.

Validate keyboard operation, visible focus, labels/names, contrast, reflow/zoom, logical heading structure, and responsive behavior.

## Technical SEO
Establish, as applicable:
- permalink conventions;
- indexation behavior;
- XML sitemap behavior;
- robots rules;
- canonical behavior;
- breadcrumb hierarchy;
- service/location/provider relationships;
- structured-data responsibility;
- semantic heading structure;
- internal-linking patterns;
- redirect requirements when replacing existing URLs.

## Performance Guardrails
Review:
- image dimensions and modern formats;
- font loading;
- video/embed strategy;
- third-party script weight;
- Trustindex and analytics impact;
- Elementor asset discipline;
- caching compatibility;
- Core Web Vitals.

Do not add optimization complexity without evidence, but do not knowingly ship avoidable waste.

## Pre-Population Stress Test
Before Step 6 approval, stress-test representative service/provider/location templates with:
- short and long content;
- long headings;
- missing/optional images;
- different CTA text;
- varying review content;
- realistic mobile/tablet/desktop widths.

The purpose is to prove the system can be safely multiplied during content population.

## Step 6 Definition of Done
Step 6 is complete when:
- content/data architecture is defined;
- Elementor foundation and global system are established;
- global header/footer/navigation/CTA patterns are approved;
- reusable dental components exist and their states are validated;
- representative core templates are built;
- Gravity Forms / Trustindex / Yoast patterns are established;
- Book / Call / Visit / Contact journeys work;
- measurement points and tracking fallback are documented;
- technical SEO and performance guardrails are established;
- responsive, accessibility, SEO, functional, and stress tests pass;
- the page system receives explicit internal approval.

Only then begin production-scale content population.

## GitHub Role
GitHub stores durable project memory: architecture, standards, decisions, approval state, event maps, QA requirements, and handoff information.

Do not pretend the WordPress database or Elementor page content is ordinary source-controlled application code. The live WordPress/Elementor build belongs in LocalWP / WP Engine environments.

## Change Discipline
Preserve approved decisions unless meaningful new evidence justifies reopening them. Do not expand scope because a new idea appears while the current milestone is unfinished.

## Completion
A change is done when it satisfies the approved intent, works responsively, passes applicable accessibility/SEO/performance/measurement checks, and is ready for the next explicit gate. Do not manufacture additional work after the requested outcome is production-ready.