# UNA-Elementor — Classes / Media

## Status
IN QA.

## V1 Classes
- `media-16-9`
- `media-3-2`
- `media-4-3`
- `media-1-1`
- `media-3-4`

## Production Ownership
These are Elementor Global Classes configured through Elementor settings. The static CSS is only the QA mirror.

## Responsibility
Media classes own only:
- approved aspect ratio;
- `cover` behavior.

They do not own:
- radius;
- shadow;
- container width;
- bleed;
- layout alignment;
- section spacing;
- component framing.

## Local Crop Rule
Focal point/object-position may remain a Local Override when the specific image requires a different crop. Repeated crop patterns may be promoted later only when real evidence proves reuse.

## QA Gate
- Each ratio renders correctly on mobile/tablet/desktop.
- Cover behavior is predictable.
- No horizontal overflow.
- Portrait and landscape sources remain usable.
- Radius/framing does not leak into Media responsibility.
- Local focal-point adjustment remains possible without creating a new ratio class.
