# UNA-Elementor Full-Site Stress Test — Initial Findings

## Scope exercised
The existing website sitemap was kept intact while the actual website pages were rebuilt from the current UNA Lego system. Foundation/system labs were left alone.

Rebuilt website pages:
- Home 1
- Home 2
- About
- Team
- Provider Detail
- Services
- Service Detail
- New Patients
- Insurance & Financing
- Reviews
- Contact
- Book Appointment
- FAQ
- Blog / Resources
- Single Post
- Privacy
- 404
- Service Landing Page
- Campaign Landing Page

No page-specific stylesheet was added for this pass. Rebuilt pages consume the existing Variables, Base, Foundation classes, Components, Header/Footer, and Forms contracts.

## Hero presentations proven without a new hero-class explosion
The site currently demonstrates these meaningful presentations through existing Lego composition:

1. Asymmetric split with media right.
2. Asymmetric split with wider content / narrower support column.
3. Centered/read-width no-media hero.
4. Dark centered editorial hero.
5. Split + viewport bleed right.
6. Media-led band immediately after an editorial hero.
7. Offer-led conversion hero with Promo component.
8. Minimal landing-page hero beneath a minimal Header.

These do not currently justify eight monolithic Hero classes. Most are combinations of section spacing + surface + container/grid + media/bleed + Components.

## Strong repeated section families

### 1. Editorial Split
Use when one strong premise needs one supporting content region.

Recipe:
`section spacing + surface + container-full + grid-60-40 / grid-40-60 / grid-70-30 / grid-30-70`

Suitable content:
- hero copy + media
- headline + proof
- editorial copy + FAQ
- location + hours
- CTA copy + actions

Koda cue: one dominant message plus one clear supporting region.

### 2. Feature + Support Stack
One large feature paired with multiple smaller components.

Recipe:
`grid-70-30` containing a media/service/provider Component plus a `stack` of Icon Cards / Promo / Stats.

Suitable content:
- featured service + supporting needs
- team feature + proof
- resource feature + related questions

Koda cue: one item has materially higher priority than the supporting items.

### 3. Mixed Proof
Reviews, rating, avatars, stats, and promos share a section without becoming one new Proof component.

Suitable content:
- patient reviews
- provider detail
- landing pages
- homepage trust moments

Koda cue: use different proof types when they answer different trust questions; do not repeat four identical cards by default.

### 4. Decision Process
Ordered List + editorial copy, often on a dark/primary surface.

Suitable content:
- new patient journey
- service treatment sequence
- booking flow
- campaign follow-up

Koda cue: use when sequence changes what the visitor should do next.

### 5. Action / Location
Day Hours + contact/actions + map/location region.

Koda cue: local-intent section where Directions, Call, and Book are more important than generic descriptive copy.

### 6. Focused Conversion
Minimal Header/Footer + one offer/service premise + proof + process + one form.

Koda cue: paid/service landing page where additional site navigation would dilute the conversion path.

## KEEP candidates
- Existing asymmetric grid vocabulary.
- Bleed left/right as independent structural tools.
- Icon Card composition vocabulary.
- Service/Provider media-left/media-right modifiers.
- Rating + Avatar Stack pairing.
- Promo as a flexible offer/context primitive.
- Ordered List for process sections.
- Day / Hours as a real business-detail component.
- Minimal Header/Footer for LPs.
- Mobile Call / Book / Directions action model for local sites.

## IMPROVE candidates
- Surface-aware component borders: some dark-surface components may eventually need a stronger inherited border contract rather than each component owning color corrections.
- True Elementor implementation of background-media heroes should be proven with Elementor native Background controls rather than static harness CSS.
- Header mobile menu static harness duplicates navigation markup; production Elementor should use its real Nav Menu behavior rather than Koda creating duplicate content.
- Tabs need full interaction QA in real Elementor before they become a frequent content solution.

## MERGE candidates
- Many apparent Hero types reduce to Editorial Split + Surface + Grid + Bleed + Media.
- Several "benefits," "values," and "why us" sections reduce to Icon Card assemblies with different surfaces/content.
- Several proof layouts reduce to Reviews + Stats + Rating/Avatar arranged by standard grids.
- Provider and Service horizontal presentations already share the same Card media-position architecture.

## ELIMINATE candidates
- Old page-specific `site.css` composition patterns for rebuilt pages.
- Old `home-2.css`-driven art direction as a required production approach.
- Generic heading + three-identical-card sections when asymmetric composition communicates priority better.
- Page-specific hero naming.
- Decorative counters without defensible facts.

## Koda assembly rules emerging

### Rule: Start with mobile source order
Koda first determines:
1. What does the visitor need to understand first?
2. What proof belongs closest to that claim?
3. What is the primary action?
4. Where does media help rather than interrupt?

Only after mobile hierarchy is complete should tablet/desktop introduce asymmetry, bleed, or layered spatial relationships.

### Rule: Choose by content shape, not visual template number
Examples:
- One major service + three supporting needs → Feature + Support Stack.
- Four equal concepts → Grid-4 / Icon Cards.
- One premise + sequential explanation → Editorial Split + Ordered List.
- High local intent → Location + Day Hours + Directions/Call/Book.
- Paid campaign → Minimal global shell + offer + proof + focused form.

### Rule: Do not make new CSS to preserve an idea
If existing Lego cannot reproduce a composition through Elementor-native controls, Koda changes the composition or flags a repeatable upstream system gap.

## Next audit after visual QA
After visual QA, classify every composition using:
`KEEP → IMPROVE → MERGE → ELIMINATE`

Only then formalize Sections V1 names/modifiers. The website should decide the final section library, not speculation.
