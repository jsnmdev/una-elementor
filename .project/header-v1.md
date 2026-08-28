# UNA-Elementor Header V1

## Status
READY FOR QA

## Section Name
Elementor-facing name: **Header**.

Navigation is an internal region/component of the Header, not the section name.

## Ownership
`Foundation → Components → Base Header → Header Modifiers → Content → Local Override`

Header owns the relationship between:
- brand/logo;
- primary navigation;
- optional utility bar;
- optional announcement bar;
- optional location/contact utility;
- primary CTA;
- mobile menu trigger/panel.

Foundation continues to own surfaces, buttons, typography roles, spacing scale, containers, focus, and general responsive primitives.

## V1 Variants
- Base split header: brand left, navigation/action right.
- Centered navigation.
- Utility bar + primary header.
- Announcement bar + primary header.
- Multi-location/contact utility.
- Dropdown navigation.
- Mega-menu pattern.
- Mobile closed/open state.
- Long-label stress state.

## Modifier Rule
Independent decisions remain independent. Do not create combination classes such as `header-centered-dark-sticky`.

Example composition:
`site-header + site-header--centered + surface-light`

## Accessibility
- semantic `header` and `nav`;
- visible focus;
- current page state;
- dropdown/menu controls are buttons;
- `aria-expanded` reflects open state;
- mobile trigger has an accessible label;
- menu remains keyboard reachable;
- touch targets meet baseline;
- no hover-only access to required navigation.

## Mobile Rule
Desktop navigation collapses to a dedicated mobile panel. Content order remains brand → trigger → navigation/actions. Long labels wrap without horizontal overflow.
