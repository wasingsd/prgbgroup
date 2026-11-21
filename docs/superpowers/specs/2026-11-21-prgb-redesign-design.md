# PRGB UX/UI redesign

Status: approved by the user on 2026-11-21; implementation authorized in the existing checkout.

## Intent and agreed direction
Replace the visual presentation of the existing PRGB website while retaining its page roles, content and functions. The user chose direction 1: a white-led corporate website with Cargo red, black type, limited yellow accents, and a friendly alpaca mascot. PR Travel continues to link to its dedicated website.

## Approaches
1. White-led corporate brand (selected): clearer service information, restrained red emphasis and mascot moments; shares the Travel site's component conventions.
2. Promotional poster treatment (not selected): large red fields, oversized promotional typography and prominent mascot; visually closer to the reference posters but denser for service information.

## Visual system
- Primary red #D81926, deep red #A70F1B, ink #202124, white #FFFFFF, pale red #FFF2F2, neutral background #F7F7F5, yellow #F5CD45. These values are implementation proposals derived from the references, not exact sampled brand standards.
- Noto Sans Thai for Thai and Inter for Latin, matching prgb-travel-group; remove the current Prompt font.
- Follow the sibling's header hierarchy, rounded active navigation, pill CTAs, restrained rounded cards, icon treatment, form controls, spacing and responsive behavior, adapted to Cargo red. Keep the existing Tailwind 4 stack rather than transplanting the sibling's Tailwind 3 configuration.
- Actual brand logos replace generic PR text blocks. Mascot imagery retains the white alpaca, red hat and vest identity. Prefer suitable existing assets; generate a new transparent asset only where the existing set cannot serve the composition.
- Static white brand theme with clear keyboard focus, reduced-motion support and accessible color combinations.

## Shared navigation and footer
White sticky navigation with a compact contact strip; home, PR Cargo, PR Travel (external indicator), contact. Keep quotation and cargo login actions. Mobile navigation has a labelled toggle, expanded state, visible active page and usable touch targets. Footer repeats real contact details and valid destinations; repair placeholder links using existing relevant sections rather than inventing pages.

## Home
Keep the group's logistics and travel role. Replace the dark full-screen photo overlay with a bright split composition: left-aligned Thai headline and service explanation, right-side mascot/logistics composition, with clear Cargo and Travel destinations. Retain existing Cargo highlights, reasons to choose the service, Travel offerings, platform/support content and contact calls to action. Recompose long sections for hierarchy and scanning without removing their factual content. Travel links go to the dedicated website.

## PR Cargo
Apply the shared system throughout: bright service introduction, clearly separated road/sea/customs/warehouse services, readable rate information, existing getting-started steps, supported platforms and contact actions. Preserve all current numerical rates, units and existing shipping qualifications. Tables scroll within their container on narrow devices without causing page overflow.

## Contact
Retain existing company contact information and submission integration. Present contact methods and form as a clear two-column layout that stacks on mobile. Use visible labels, suitable input types, readable help/error/status messages and a clear submit state. Do not claim a delivery confirmation the existing no-cors integration cannot verify.

## PR Travel
Navigation and content destinations remain https://prgb-travel-group.vercel.app. Keep /pr-travel forwarding and a usable manual fallback link; do not rebuild the external travel product.

## Implementation discretion
The implementer chooses final spacing, section compositions, suitable existing imagery, responsive breakpoints and small motion details within this system. Preserve business meaning and integration contracts. Do not add unverified claims, testimonials, promotions, pricing or contact details from the reference posters.

## Verification
Run lint and production build. Inspect home, Cargo and contact on desktop and mobile; check menu keyboard use, external Travel destinations, quotation/login links, rate overflow and form validation. Inspect the redirect fallback without submitting a real customer enquiry. Record any pre-existing or environment-related limitations.

## Non-goals
No backend replacement, travel site changes, new business functionality, dependency migration, deployment, or copying announcement dates from the attached images.
