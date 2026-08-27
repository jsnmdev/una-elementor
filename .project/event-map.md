# UNA-Elementor Measurement Event Map

UNA-Elementor defines business actions first and analytics vendors second.

## Primary Actions

| Business Action | Standard Event | Typical Trigger | Notes |
| --- | --- | --- | --- |
| Book | `book_appointment` | Appointment CTA / booking handoff | Use for meaningful booking intent, not decorative clicks. |
| Call | `phone_click` | `tel:` interaction | CallRail or another call platform may extend attribution when available. |
| Form Start | `form_start` | User begins a key form | Optional when useful for funnel/drop-off analysis. |
| Form Submit | `form_submit` | Successful Gravity Forms submission | Fire only after successful submission. |
| Visit | `directions_click` | Maps / directions action | Represents location intent. |
| External Booking | `external_booking` | Handoff to third-party scheduler | Useful when final conversion occurs outside the site. |

## Measurement Sources

### Google Search Console
Use for Google Search discovery:
- queries;
- impressions;
- clicks;
- landing pages;
- search visibility trends.

GSC does not describe the complete on-site journey.

### GA4 / gtag / GTM
Use, when available, for:
- landing sessions;
- page navigation;
- content interaction;
- CTA actions;
- form progress;
- conversion actions.

### Call Tracking
Use CallRail or another approved platform when the project requires call attribution and access is available.

## Tracking-Ready Fallback
If analytics access is unavailable at build time:
1. keep action markup/selectors stable;
2. document intended events and triggers;
3. mark connection status as pending;
4. do not delay the page-system build;
5. do not claim events are live until configured and verified.

## User Journey Context
Events should map back to:
`Discover → Land → Explore → Intent → Convert`

The event map exists to help measure business journeys, not to collect clicks without a decision-making purpose.