# PRGB Redesign Implementation Plan

> **For agentic workers:** Use superpowers:executing-plans inline in this session. The user authorized implementation of the approved design.

**Goal:** Deliver a complete red corporate redesign of the existing PRGB pages.
**Architecture:** Keep existing Next.js routes, static export and integrations. Share design tokens, navigation, footer and small presentation components across the pages. Reuse current brand assets, generating a red-uniform mascot if needed.
**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind 4, lucide-react.
**Spec:** docs/superpowers/specs/2026-11-21-prgb-redesign-design.md (approved 2026-11-21).

## Global constraints
Keep existing content, rates, units, contact destinations, form payload and external Travel URL. Use Noto Sans Thai + Inter. No deployment or backend replacement. Reuse the current checkout as requested by workspace context. User's instruction to begin authorizes continuing inline without an additional plan handoff.

## Review focus
Mobile menu keyboard state and dismissal; horizontal overflow of rates; preservation of all eight pricing rows; form validation and honest opaque-response feedback; external Travel links and compatibility redirect.

## Task 1: Shared brand and shell
- [x] Update app/globals.css and app/layout.tsx with red tokens, typography, spacing, responsive layouts, focus and motion preferences.
- [x] Rebuild components/Navbar.tsx and components/Footer.tsx using existing logo, contact links and external Travel URL.
- [x] Add focused shared presentation components only for repeated service/content patterns.
- [x] Check active menu state, Escape dismissal, contact actions and mobile overflow.

## Task 2: Home and Cargo
- [x] Recompose app/page.tsx with bright split hero and mascot, existing Cargo highlights, confidence content, Travel services, TikTok entries and contact actions.
- [x] Recompose app/pr-cargo/page.tsx with existing four services, exact original rate rows, caveat, steps and ten platform assets.
- [x] Keep app/pr-travel/page.tsx redirect and improve its manual fallback presentation.
- [x] Check all eight pricing rows and external targets; inspect desktop/mobile layouts.

## Task 3: Contact
- [x] Recompose app/contact/page.tsx, retaining integration endpoint and JSON payload keys.
- [x] Associate labels, add autocomplete, preserve loading/error states, keep typed inputs after an opaque response, and describe dispatch without claiming confirmed receipt.
- [x] Check required/whitespace-only input behavior, simulated network failure and simulated opaque response without sending a real enquiry.

## Task 4: Verification and documentation
- [x] Run npm run lint and npm run build; resolve change-related errors.
- [x] Run one desktop/mobile browser inspection batch, fix observed issues together, and confirm once.
- [x] Run Impeccable detector once on changed UI files.
- [x] Obtain a fresh review of changed source and screenshots; resolve material findings.
- [x] Record final design in DESIGN.md and final verification results here; leave changes uncommitted for the user to review.

## Execution notes
Ruling: visual-only changes use build/lint and browser checks rather than implementation-mirroring unit tests. Form and menu behavior receive targeted interaction checks. Keep all edits in this existing checkout and do not create or publish a new branch without need.


## Final verification (2026-11-21)
- npm run lint: passed, including the browser verification script.
- npm run build: passed; all existing routes exported under /prgbgroup.
- node scripts/verify-ui.mjs: passed using the bundled Playwright runtime. Desktop 1280x900 and mobile 390x844 captures in .impeccable/review/.
- Checked image loading, horizontal overflow, active navigation, all eight exact pricing rows, external Travel links, redirect and no-JS fallback.
- Contact checks used intercepted requests only: required and whitespace validation, loading/disabled state, network error, opaque-response feedback, input retention, exact integration payload. No real enquiry sent.
- Impeccable mechanical detector: [] (no findings), run once before final visual corrections.
- Fresh independent source and six-screenshot review: SHIP, no remaining material findings. Fixed observed active-nav trailing slash handling, logo crop/size and mobile paragraph breaks.
- TikTok embeds intentionally blocked during deterministic captures, which verify the live-link fallback rather than third-party playback.
- Dependencies and font fetching required network-enabled command execution; verification completed successfully after allowing network access.
- Existing checkout retained; no commits, push or deployment performed.
