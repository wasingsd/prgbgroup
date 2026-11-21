---
name: PR Global Group
description: White-led corporate services with Cargo red and a friendly alpaca identity.
colors:
  background: "#ffffff"
  foreground: "#202124"
  primary: "#d81926"
  primary-hover: "#a70f1b"
  text-secondary: "#626267"
  soft-bg: "#f7f7f5"
  blush: "#fff2f2"
  border: "#e7e5e3"
  yellow: "#f5cd45"
  utility-dark: "#262526"
  field-border: "#cfcac8"
  outline-border: "#d8d4d3"
typography:
  display:
    fontFamily: "Noto Sans Thai, Inter, sans-serif"
    fontSize: "clamp(2.3rem, 4.3vw, 3.9rem)"
    fontWeight: 800
    lineHeight: 1.35
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Noto Sans Thai, Inter, sans-serif"
    fontSize: "clamp(1.8rem, 3vw, 2.65rem)"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Noto Sans Thai, Inter, sans-serif"
    fontSize: "1.22rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "-0.025em"
  body:
    fontSize: "1rem"
    fontFamily: "Noto Sans Thai, Inter, sans-serif"
    lineHeight: 1.7
  lead:
    fontFamily: "Noto Sans Thai, Inter, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
  metadata:
    fontFamily: "Noto Sans Thai, Inter, sans-serif"
    fontSize: "0.875rem"
  button:
    fontFamily: "Noto Sans Thai, Inter, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.5
  label:
    fontFamily: "Noto Sans Thai, Inter, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
rounded:
  surface: "16px"
  field: "10px"
  platform: "12px"
  pill: "999px"
  circle: "50%"
  focus: "4px"
spacing:
  button-gap: "12px"
  card-gap: "24px"
  heading-bottom: "42px"
  section: "92px"
  section-mobile: "60px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.background}"
    rounded: "{rounded.pill}"
    typography: "{typography.button}"
    padding: "13px 23px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-outline:
    backgroundColor: "{colors.background}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.pill}"
    padding: "13px 23px"
  button-white:
    backgroundColor: "{colors.background}"
    textColor: "{colors.primary}"
    rounded: "{rounded.pill}"
    padding: "13px 23px"
  cargo-service:
    backgroundColor: "{colors.soft-bg}"
    rounded: "{rounded.surface}"
    padding: "22px 28px 30px"
  field:
    backgroundColor: "{colors.background}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.field}"
    padding: "12px 14px"
  nav-active:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.background}"
    rounded: "{rounded.pill}"
    padding: "9px 15px"
---

# Design System: PR Global Group

## Overview

**Creative North Star: "White-led corporate Cargo"**

An approachable corporate service identity: white space, clear black Thai headings, restrained Cargo red, small yellow accents, and the white alpaca in its red hat and vest. The approved direction favors readable service information and a friendly guide through cargo and travel decisions.

The system shares the sibling Travel site's typography and component conventions while retaining PRGB's own identity. This is a record of the implemented system in `app/globals.css`, `app/layout.tsx`, and the shared components; the source CSS remains authoritative for page-specific exceptions.

**Key Characteristics:**
- White-led surfaces with red emphasis and clear information hierarchy.
- Rounded pill actions and restrained rounded containers.
- Mascot-led illustrations alongside practical service information.
- Static light theme, visible keyboard focus, and reduced-motion support.

## Colors

### Primary

Cargo red (`primary`) marks principal actions, selected navigation, inline heading emphasis, icons, and the contact banner. Deep red (`primary-hover`) provides interaction feedback. Blush supports quiet brand panels rather than competing with red actions.

### Neutral

White is the main canvas; foreground ink carries headings and body text. Secondary gray supports explanatory copy. Soft neutral alternates long sections, and the border token separates content without heavy outlines. Utility dark is reserved for the contact strip and selected rate headers. Form and outline-button borders use their dedicated frontmatter colors.

### Secondary

Yellow is a small supporting accent in icons and illustration-related details. Warm pale surfaces also occur locally, including the third service card (`#fff9e9`) and mascot caption (`#fff8dc`); they are contextual treatments, not replacement primary colors.

**The White-led Rule.** Keep the broad page canvas white or soft neutral. Concentrated red belongs to actions, emphasis, selected states, and the closing contact band; do not turn the site into the unselected promotional-poster direction.

## Typography

**Display and body:** Noto Sans Thai, then Inter, then sans-serif. Next.js loads Noto Sans Thai weights 400–800 and Inter with font swapping. Latin wordmarks, route labels, phone numbers, and numeric rate cells explicitly use Inter.

Headings use balanced wrapping, compact negative tracking, and generous Thai line height. The frontmatter records base h1/h2/h3 styles. Body defaults to line-height 1.7; explanatory copy often uses 1.85–1.95. Ordinary content, navigation, buttons, labels and controls use at least 1rem (16px). Supporting metadata uses 0.875rem (14px); lead copy uses 1.125rem (18px). The small brand tagline is 12px. Resolve --font-sans on body, where Next.js supplies its font variables, rather than on root; root resolution can silently invalidate the font. Browser checks must confirm actual Noto Sans Thai glyph rendering.

Home h1 changes to `clamp(2.2rem, 4.5vw, 3.4rem)` at 1050px, `clamp(2.3rem, 8.3vw, 3.4rem)` at 760px, and 2.15rem at 370px. Contact and redirect headings have their own observed clamps. Preserve these responsive roles rather than applying the desktop display size everywhere.

## Layout

The shared container is `min(1240px, calc(100% - 96px))`. It becomes `calc(100% - 64px)` at 1200px, `calc(100% - 40px)` at 760px, and `calc(100% - 32px)` at 370px. Main sections use 92px block padding, reduced to 60px on mobile. Common content-grid gaps are 24px; major split compositions use 55px, with larger 100px gaps for confidence/process sections on wide screens.

Desktop uses split hero, travel, contact, and rate layouts, three home service columns, and four Cargo service columns. At 1200px Cargo services become two columns. At 760px the main splits and rates stack, home services become one column, the service ribbon becomes two columns, and Cargo services retain two columns until 370px. The footer becomes two columns at 1050px, with spanning brand/contact regions on mobile.

The sticky white header has a 31px utility strip and 88px main row. Desktop navigation gives way to a 44px circular menu toggle at 1050px; the main row then becomes 76px, or 72px at mobile. Anchor scroll padding is 136px, reduced to 110px at 760px. Rate tables retain a 340px minimum width inside a horizontally scrollable wrapper.

## Elevation & Depth

The system uses flat tonal layering and borders; no box-shadow vocabulary is implemented. White, soft neutral, and blush define sections and surfaces. Photographic travel captions use a localized dark gradient for legibility. The sticky header relies on a bottom divider and stacking order rather than a floating shadow.

## Shapes

The shared surface radius is 16px. Fields and mobile navigation links use 10px, platform tiles 12px, actions and desktop navigation 999px, and small icon actions/step numbers are circular. The home mascot panel is the signature exception: `160px 16px 16px 16px`, becoming a 110px top-left corner at 1050px and 100px at 760px. Do not apply this asymmetric silhouette to ordinary cards.

## Components

### Buttons

Confident pill actions use 13px 23px padding, 12px icon gaps, and at least 49px height. Primary is white on red, deepening on hover. Outline is ink on white with a thin dedicated border; hover changes to red text/border on blush. White buttons sit on red bands and hover to `#fff3d0` with deep red text. Small header actions use 10px 17px padding, 1rem type, and 42px minimum height. Disabled buttons use opacity 0.65 and a wait cursor.

### Cards / Containers

Service cards are flat, 16px rounded tonal surfaces with illustrative art and a circular arrow action. Home cards use neutral, blush, and pale warm backgrounds. Form panels use a border and white fill, with 35px 38px 40px desktop padding. Rate cards clip their header and table within rounded edges; rate numbers use Inter and tabular numerals.

### Inputs / Fields

Visible labels precede white controls with a 1px field border, 10px corners, 12px 14px padding, and 48px minimum height. Textareas have a 155px minimum height and vertical resizing. Focus uses a 2px red outline with 2px offset and red border. Invalid controls use a red border and `#fffafa` fill. Error notices use blush with `#9d1021` text; informational notices use `#fff7db` with `#654b0c` text. Keep messages visible and avoid implying confirmed delivery from the existing no-cors integration.

### Navigation

Desktop links use 1rem/600 type, 9px 15px padding, and pill selection. Hover is red on blush; the active page is white on red. Mobile selection is red on blush with 700 weight. The labelled toggle exposes expanded state, Escape closes the menu and restores toggle focus, and external Travel links display an external-arrow indicator. Preserve the skip link and `aria-current` states.

### Mascot and service ribbon

Use the existing alpaca art as a welcoming service guide. The home panel pairs it with small China–Thailand route labels, an understated dashed route, and a divided caption. The service ribbon uses red line icons and thin dividers; it communicates services as a compact row on desktop and a two-column grid on mobile.

## Do's and Don'ts

TikTok posts use the official `player/v1` iframe directly. Once visible, keep the iframe mounted and unobstructed: HTML load makes it interactive, while readiness and playback messages are separate evidence. Missing messages or buffering timeouts must never hide or remove the player. Place loading, slow-network and explicit player-error feedback below it, with retry and an always-visible original-post link. Validate messages by both origin and iframe window; autoplay restrictions preserve manual playback. Verify actual clicks without synthetic readiness, and measure real playback progress before claiming playback works.

- **Do** preserve the approved white corporate world, Cargo red, black type, limited yellow, and alpaca identity.
- **Do** use the shared typography, rounded actions, calm borders, and responsive container before introducing new styling.
- **Do** retain the 3px red global keyboard-focus outline with 5px offset; fields have their own focus treatment.
- **Do** honor reduced motion and keep tables scrolling inside their container.
- **Don't** reintroduce the former dark full-screen photo-overlay hero or the unselected promotional-poster direction.
- **Don't** substitute Prompt for the implemented Noto Sans Thai/Inter pairing.
- **Don't** introduce decorative shadows as a default surface treatment.
- **Don't** copy the sibling site's contact details, claims, or branding into this design system.


