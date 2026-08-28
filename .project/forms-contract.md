# UNA-Elementor — Forms Contract

## Status
IN QA.

## Production Boundary
Gravity Forms is an intentional exception to the normal Elementor-settings-first ownership model.

- Elementor owns the section, container, placement, and surrounding composition.
- Gravity Forms owns/generated internal markup.
- Child-theme CSS owns the controlled presentation of that internal markup.
- All production Gravity Forms styling must be scoped beneath `.gf-form`.
- The form scope consumes UNA Variables rather than inventing a second token system.

## Rules
1. Never globally restyle all WordPress inputs to solve a Gravity Forms requirement.
2. Never rely on brittle one-off selectors tied to one page when the behavior belongs to the shared form system.
3. Keep visible labels for normal patient/client forms.
4. Required state and validation must be communicated in text, not color alone.
5. Maintain visible keyboard focus.
6. Standard inputs use a minimum 48px control height where practical.
7. Two-column field layouts stack on mobile.
8. Submit actions remain comfortably tappable and may become full-width on constrained mobile widths.
9. Form typography, colors, radii, and spacing reference UNA Variables.
10. Elementor classes may style the surrounding surface/container, but do not fight Gravity Forms internals from arbitrary Elementor widgets.

## V1 Scope
- text/email/tel inputs;
- select;
- textarea;
- labels;
- descriptions/helper text;
- required indicators;
- validation/error state;
- submit action;
- 2-column to 1-column responsive field behavior.

Checkbox/radio, file upload, date picker, multi-step/progress, conditional logic, and specialized third-party field types are validated when a real project requires them rather than bloating V1.

## QA Gate
- Fields are readable and usable at mobile width.
- Focus is visible.
- Errors have textual messaging.
- No horizontal overflow.
- Submit label wraps/centers safely if needed.
- Surrounding Elementor layout can change without breaking internal form styling.
- No unscoped Gravity Forms CSS leaks into unrelated controls.
