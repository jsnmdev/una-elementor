# UNA-Elementor Content + Architecture Contract

## Purpose
This contract defines the default content architecture for a single-location dental practice with multiple providers. It exists to establish page responsibilities, reusable data ownership, relationships, URL patterns, conversion goals, and landing-page rules before Elementor templates are built.

This is a baseline, not a mandate to create every possible page. A client project instantiates only the pages, services, entities, and campaign experiences justified by its real offering and acquisition strategy.

## Governing Principle
**Shared facts have one source of truth. Page-specific persuasion remains page-specific. Structure before population.**

Do not introduce custom post types, taxonomies, dynamic fields, plugins, or abstractions merely because they are possible. Use structured/dynamic content when it materially reduces duplication, protects consistency, supports relationships, or improves maintainability at the project's actual scale.

---

## 1. Global Practice Data
The following information should have an intentional shared owner where practical rather than being manually duplicated across Elementor pages:

- Practice name
- Primary phone number
- Booking / scheduling destination
- Primary email/contact destination where applicable
- Street address
- City / state / ZIP
- Business hours
- Directions / map destination
- Social/profile links
- Insurance summary
- Financing summary / financing destination
- Membership-plan destination when offered
- Emergency-contact behavior when different from standard contact
- Legal/business identity where needed

Global business actions consume this data rather than hardcoding destinations page by page.

### Primary Global Actions
- **Book** → canonical booking/request-appointment destination
- **Call** → canonical phone destination
- **Visit** → canonical location/directions destination
- **Contact** → canonical contact destination

Presentation may vary by component context; the underlying business destination remains globally owned.

---

## 2. Core Content Entities

### Practice
Represents the dental business and owns global business information.

Relationships:
- one primary Location in this baseline;
- many Providers;
- many Services;
- Reviews / trust signals;
- insurance / financing information;
- global business actions.

### Provider
Represents an individual dentist or provider who warrants a public profile.

Typical fields/content:
- name;
- credentials;
- professional title;
- portrait;
- biography;
- education/training;
- professional memberships when relevant;
- special interests/services;
- trust/credibility information;
- Book action.

Relationships:
- belongs to Practice;
- works at Location;
- relates to Services actually provided or emphasized.

Do not automatically create individual public pages for every staff member. Hygienists, assistants, administrative staff, and other team members receive individual pages only when there is a real patient, business, recruiting, or search reason.

### Service
Represents a patient-facing dental treatment/service with enough value or search/user intent to justify a dedicated page.

Typical relationships:
- belongs to Practice;
- available at Location;
- related Providers;
- related Services;
- relevant FAQs;
- relevant insurance/financing information;
- primary conversion action.

### Location
For this baseline, one physical practice location.

Typical data/content:
- address;
- phone;
- hours;
- map/directions;
- parking/access information when useful;
- office photography;
- providers;
- services;
- booking destination;
- local trust information.

Even for a single-location practice, a dedicated Location page is appropriate when it materially supports local discovery, patient planning, or conversion.

### Reviews / Testimonials
Trust content may be sourced through Trustindex or another approved source. The data source does not own the site's visual system. Elementor components control presentation.

### FAQ / Resource Content
FAQs may belong to a specific Service, patient-information area, or reusable knowledge set. Avoid duplicating the same answer across many pages when one intentional source can serve the experience.

---

## 3. Core Website Architecture

### Home
Responsibility:
- orient the patient quickly;
- establish practice value/trust;
- surface priority services;
- introduce providers;
- establish location/access;
- support Book / Call / Visit / Contact actions.

### About
Possible pages:
- About the Practice
- Meet the Team / Our Team
- Office / Technology when the content provides meaningful patient value
- Practice story/community content only when justified

### Providers
- Providers Index
- Provider Detail for each qualifying provider

The index supports discovery/comparison. Detail pages establish individual credibility and connect providers to relevant services and conversion actions.

### Services
- Services Index
- Service Detail pages for offered treatments with sufficient patient/business/search value

Representative service groups may include, only when actually offered:
- Preventive Dentistry
- General / Restorative Dentistry
- Cosmetic Dentistry
- Implant Dentistry
- Orthodontics
- Periodontal Care
- Emergency Dentistry
- Oral Surgery / specialty care
- Sedation Dentistry
- Sleep / TMJ or other practice-specific services

Service categories are navigation/content architecture, not permission to generate thin pages. Create a dedicated service URL only when the page can serve a meaningful patient intent.

### New Patients / Patient Resources
Possible pages:
- New Patient Information
- What to Expect
- Patient Forms
- Insurance
- Financing / Payment Options
- Membership Plan when offered
- FAQs
- Dental Anxiety / Comfort information when materially useful
- Pre/Post-Op Instructions when the practice provides and maintains them

### Reviews
A dedicated Reviews / Testimonials page may aggregate patient trust signals while review components can also appear contextually throughout the site.

### Location / Contact
- Location Detail
- Contact Us

Avoid unnecessary duplication between Location and Contact. Each page must have a distinct responsibility if both exist.

### Appointments
- Book Online / Request Appointment
- Confirmation / Thank You when required by the form/booking flow and measurement architecture

The booking destination is globally owned even when entry points appear across many pages.

### Blog / Resources
- Blog / Resource Index
- Article Detail
- Category archives only when supported by an intentional content/search strategy

Do not generate thin tag/category archives by default.

### Legal / Compliance
Include only applicable pages, such as:
- Privacy Policy
- Terms of Use
- Accessibility Statement
- Notice of Privacy Practices / HIPAA notice when applicable
- Website Disclaimer when required
- Cookie Policy / consent documentation when required by the actual data/tracking setup

Legal/compliance copy must come from an authorized source; the website build should not invent legal obligations or legal language.

---

## 4. URL Architecture
Use simple, durable, human-readable paths.

Baseline examples:
- `/`
- `/about/`
- `/providers/`
- `/providers/{provider-slug}/`
- `/services/`
- `/services/{service-slug}/`
- `/new-patients/`
- `/insurance/`
- `/financing/`
- `/reviews/`
- `/location/` or a project-approved local structure
- `/contact/`
- `/book/` when the project owns a booking/request page
- `/blog/`
- `/blog/{article-slug}/`

Do not add nesting merely to mirror internal practice terminology. URL decisions must support clarity, durability, search/discovery, and maintainability.

Replacement sites must inventory existing valuable URLs before changing permalink structure. Redirect requirements belong to the migration/technical SEO plan.

---

## 5. Relationship Contract
At minimum, the architecture must intentionally define these relationships where applicable:

`Practice → Location`

`Practice → Providers`

`Practice → Services`

`Provider ↔ Services`

`Location ↔ Providers`

`Location ↔ Services`

`Service ↔ Related Services`

`Service ↔ FAQs`

`Service / Provider / Location / Page → Primary Business Action`

Relationships should improve patient navigation, content consistency, internal linking, measurement, or maintenance. Do not model relationships that have no practical consumer.

---

## 6. Page Responsibility Rule
Every page must have a defined job before it is built.

A page should answer:
1. Who is this page for?
2. What intent/problem brought them here?
3. What information must they understand?
4. What trust or objection must be addressed?
5. What should they do next?
6. What is the primary measurable business action?

If two pages have the same audience, information, and next action with no meaningful distinction, reconsider whether both pages are necessary.

---

## 7. Goal-Based Landing Page Architecture
Landing pages are a separate acquisition layer from the normal website information architecture.

A landing page must begin with:

`Traffic Source → Audience → Offer / Intent → Goal → Conversion Action`

Examples include:
- New Patient campaign → Book
- Dental Implant consultation → Book / Call
- Emergency Dentist → Call
- Invisalign consultation → Book
- Whitening promotion → Book
- Insurance-specific acquisition → Book / Call
- Financing-focused treatment campaign → Book
- Geographic paid campaign → Book / Call
- Provider campaign → Book with Provider

These examples are not starter pages to create automatically.

### LP Responsibility
A goal-based LP may use an approved reusable structure such as:
- goal-specific hero;
- offer/value proposition;
- trust/reviews;
- patient problem/treatment explanation;
- provider credibility;
- benefits/outcomes;
- insurance/financing when relevant;
- objections/FAQs;
- location/proximity;
- focused conversion CTA.

### LP Data Ownership
Landing pages should reuse globally owned:
- practice data;
- provider data;
- location data;
- review/trust data;
- business-action destinations.

Campaign-specific messaging, offer, audience framing, and conversion hierarchy remain local to that landing page/campaign.

### SEO Page vs Campaign LP
A normal service page and a paid/campaign landing page are not automatically the same asset.

Example:
- `/services/dental-implants/` → durable service education/discovery page
- `/lp/implant-consultation/` → campaign-specific acquisition experience when justified

Do not compromise the permanent website IA to satisfy a temporary campaign.

### LP Indexation
Indexation/canonical decisions for campaign landing pages must be intentional and coordinated with the SEO/paid strategy. Do not assume every LP should be indexed.

---

## 8. Conversion + Measurement Contract
The content architecture must identify the primary action for important page types.

Canonical action families:
- Book
- Call
- Visit / Directions
- Contact

Measurement identities defined by the broader UNA-Elementor event contract may include:
- `book_appointment`
- `phone_click`
- `form_start`
- `form_submit`
- `directions_click`
- `external_booking`

Content architecture defines **what action matters and where**. Analytics tooling determines how that action is measured once the required access exists.

GSC supports search/query/click/landing-page discovery. GA4/gtag/GTM or another approved measurement implementation handles on-site behavior/actions. Do not describe GSC as an on-site user-flow tracker.

---

## 9. Dynamic Content Decision Rule
Do not make content dynamic merely because Elementor/WordPress can.

Use a shared/dynamic source when one or more are true:
- the same factual value appears in many places;
- the value is expected to change;
- multiple templates consume the same entity;
- relationships drive navigation/internal linking;
- manual duplication creates material inconsistency risk;
- structured ownership materially reduces maintenance cost.

Keep content local when:
- it is unique persuasive copy for one page;
- reuse would force awkward generic wording;
- the abstraction costs more than maintaining the content;
- no real second consumer exists.

The simplest maintainable source of truth wins.

---

## 10. Content Population Boundary
Step 6 defines and proves the architecture; it does not populate every final URL.

Before broad content population begins, representative templates must prove:
- global data resolves correctly;
- provider/service/location relationships work;
- primary actions resolve to the correct global destinations;
- reusable sections support realistic content;
- long/short/missing optional content does not break layout;
- internal-linking patterns are understood;
- measurement points are identifiable;
- URL architecture is approved.

Only then should the team multiply service, provider, resource, or campaign content.

---

## 11. Content Architecture Definition of Done
The Content + Architecture phase is complete when:

- the project's required page types are identified;
- each important page type has a clear responsibility;
- Practice, Provider, Service, Location, Review/FAQ and relevant resource ownership is defined;
- shared/global business data has an intentional source of truth;
- Provider ↔ Service ↔ Location relationships are defined where useful;
- URL/permalink conventions are approved;
- Book / Call / Visit / Contact destinations are defined;
- important page types have a primary action;
- goal-based LP rules are established without prebuilding speculative campaigns;
- SEO service pages and campaign LPs have distinct responsibilities when both exist;
- dynamic/shared content is justified by real reuse or maintenance value;
- the architecture is sufficient for Elementor Foundation, components, and templates to be built without inventing content structure during implementation.

At that point:

**Content Architecture Approved → Elementor System Implementation**

Do not reopen this contract during page building unless real project evidence exposes a missing or incorrect structural decision.