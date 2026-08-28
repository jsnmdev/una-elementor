# UNA-Elementor Sections V1

## Status
ACTIVE — Navigation is the reference section.

## Governing Hierarchy

`Variables → Base → Foundation Classes → Components → Base Section → Section Modifiers → Content → Local Override`

Sections assemble approved Foundation + Components. They do not recreate primitives.

## Navigation V1 Scope

Navigation is first because it establishes global site behavior and responsive interaction before page sections.

### Base Nav
Owns only the universal navigation relationship:
- brand / logo slot;
- primary navigation list;
- optional action area;
- mobile toggle + menu relationship;
- semantic `<nav>` / list / links / button behavior.

### Composition Modifiers
Independent modifiers only:
- `site-nav--centered` — brand / nav / actions balanced across the row;
- `site-nav--split` — brand left, navigation/actions right;
- `site-nav--stacked` — utility/brand/navigation distributed across two rows when needed;
- `site-nav--transparent` — only when the navigation sits over hero media and the surface contract supports it.

Do not create combination classes such as `nav-centered-dark-sticky`.

### Optional Assemblies
These are separate sections/assemblies, not always part of the base nav:
- announcement bar;
- utility bar (phone, hours, locations, patient portal);
- primary navbar;
- mega menu / dropdown group;
- mobile drawer/menu;
- sticky state.

### Dental / Healthcare Requirements
- obvious Book / Request Appointment action;
- phone action remains available without dominating the primary nav;
- location selector only when multi-location is real;
- patient portal is utility-level unless it is a primary business action;
- no overloaded 10+ item top-level navigation;
- primary IA should remain 1–2 levels deep for most practice sites;
- touch targets >= 44px;
- keyboard operable dropdowns and mobile menu;
- focus remains visible;
- menu closes after navigation on mobile;
- long labels and translated content must not break layout.

## V1 QA Variants
1. Primary Nav — split
2. Primary Nav — centered
3. Utility Bar + Primary Nav
4. Announcement Bar + Primary Nav
5. Primary Nav with dropdown
6. Multi-location / utility variant
7. Mobile closed/open states
8. Long-label stress test

## Ownership Rule
Navigation styling must consume:
- Foundation surfaces;
- Button classes;
- typography roles;
- layout/container classes where appropriate;
- variables.

Navigation CSS may own only navigation-specific row relationships, dropdown positioning/visibility, toggle/menu state, and other interaction behavior Elementor cannot reliably express from existing Foundation classes.

## Gate
Do not move to Hero until Navigation V1 passes visual, responsive, keyboard, and ownership QA.
