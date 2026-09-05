---
name: Soleto
description: An old-world Italian trattoria site set like a printed menu card
colors:
  bone: "#f3ece0"
  warm-ivory: "#ece3d3"
  deep-ivory: "#e6dccb"
  ink: "#1a1612"
  soot: "#4a4239"
  aged-paper: "#7a6f60"
  oxblood: "#6e2b26"
  oxblood-deep: "#5a221e"
  gilt-gold: "#b89569"
  hairline-rule: "#c5b89f"
  dining-room-navy: "#1d2f3d"
typography:
  display:
    fontFamily: "Cardo, Georgia, serif"
    fontSize: "clamp(2.1rem, 1.6rem + 3vw, 4.4rem)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.008em"
  headline:
    fontFamily: "Cardo, Georgia, serif"
    fontSize: "clamp(2.2rem, 1.8rem + 2.2vw, 3.7rem)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.005em"
  title:
    fontFamily: "Cardo, Georgia, serif"
    fontSize: "clamp(1.9rem, 1.6rem + 1.6vw, 3rem)"
    fontWeight: 400
    lineHeight: 1.14
    letterSpacing: "-0.005em"
  dish-name:
    fontFamily: "Cardo, Georgia, serif"
    fontSize: "clamp(1.3rem, 1.2rem + 0.5vw, 1.6rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.005em"
  body:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "clamp(1rem, 0.96rem + 0.2vw, 1.09rem)"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "0"
  label:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "13px"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.14em"
rounded:
  none: "0px"
spacing:
  notch: "16px"
  keyline-inset: "9px"
  section-y: "clamp(4.5rem, 14vh, 11rem)"
components:
  button-oxblood:
    backgroundColor: "{colors.oxblood}"
    textColor: "{colors.bone}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "13px 30px"
  button-oxblood-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bone}"
  link-sc:
    textColor: "{colors.oxblood}"
    typography: "{typography.label}"
    padding: "0 0 3px 0"
  link-sc-hover:
    textColor: "{colors.ink}"
---

# Design System: Soleto

## 1. Overview

**Creative North Star: "The Aldine Trattoria"**

Soleto reads like a printed object, a Venetian menu card or a theatre playbill, not a website. The whole system is all-serif: Cardo, cut from Aldus Manutius's 1495 Venetian type, sets every heading, and Newsreader carries body and labels. That single decision is the spine of the brand, because the restaurant next door (and most of the category) reaches for a serif-display-plus-sans formula on a cream canvas. Soleto refuses the sans entirely and lets the page feel typeset rather than laid out.

The mood is the actual dining room: deep teal-navy walls, gilt-framed pre-Raphaelite paintings, white linen, brass picture lamps, candlelight. That is carried by real photography, a warm paper ground, and a light film grain over everything, never by loud effects. Class here is restraint: a two-column book-page for prose, an oxblood drop cap opening one paragraph, a "ticket stub" panel with notched corners over the theatre imagery, and hairline double-rules that frame the photographic bands like plates in a catalogue. Each of these signature moves appears at most once per page, so it stays special.

This system explicitly rejects the 2026 AI-restaurant look: warm-cream body with a high-contrast editorial serif and a mono/tracked-caps eyebrow on every section, "big serif headline left, small body right" grids, dark-overlay photos with a quote floating on top as section dividers, and numbered chapter markers. It also rejects the Fraunces + Inter Tight default stack this very site used to run, and full stops on short headers.

**Key Characteristics:**
- All-serif: Cardo display + Newsreader text, no sans anywhere
- Warm bone ground, ink text, one oxblood accent, gold for rules only
- Printed-object devices: drop caps, book columns, ticket stubs, keylines, film grain
- Signature moves used once per page, never repeated into a pattern
- Copy in a plain family voice; no tracked-caps eyebrows, no full stops on short headers

## 2. Colors

A warm bone-and-ink palette lit by a single oxblood accent, with gold reserved strictly for lines and ornament.

### Primary
- **Oxblood** (#6e2b26): The one accent. Carries the filled call-to-action button, action links, active nav, the drop cap, and the double section-seam rules. Used sparingly, one voice at a time; its rarity is what makes it read as deliberate rather than decorative.
- **Oxblood Deep** (#5a221e): Pressed / hover partner for oxblood on solid fills where a darkening is needed.

### Neutral
- **Bone** (#f3ece0): The body ground and the ticket-panel fill. Warm candlelit off-white; the site's default surface.
- **Warm Ivory** (#ece3d3) and **Deep Ivory** (#e6dccb): Alternating section grounds that give vertical rhythm without hard lines between cream sections.
- **Ink** (#1a1612): Primary text and the hover state of the oxblood button. Never pure black.
- **Soot** (#4a4239): Secondary text and small-caps labels. Meets AA on all three cream grounds.
- **Aged Paper** (#7a6f60): Muted captions and dish descriptions only; never load-bearing body copy.
- **Hairline Rule** (#c5b89f): Quiet dividers, the column rule, footer hairline.

### Tertiary
- **Gilt Gold** (#b89569): Decorative structure only, the chapterline rules, the ticket keyline, the ampersand ornament, link underlines. It carries the gilt-frame feeling of the room.
- **Dining-Room Navy** (#1d2f3d): The full-screen navigation takeover backdrop, where the wordmark sits in bone and links in gold. A direct lift of the restaurant's teal-navy walls.

### Named Rules
**The Gold-Is-Not-Text Rule.** Gilt Gold (#b89569) is forbidden as text. It fails AA against every ground in this palette. It exists only for 1px rules, keylines, ornaments, and underlines. Text emphasis is oxblood or ink, never gold.

**The One Voice Rule.** Oxblood appears on at most one focal element per viewport: one button, or one drop cap, or the seam rules, not several at once. If two things are competing to be oxblood, one of them is wrong.

## 3. Typography

**Display Font:** Cardo (with Georgia, serif fallback)
**Body Font:** Newsreader (with Georgia, serif fallback)

**Character:** An all-serif pairing of two historically-rooted faces. Cardo is a humanist Venetian revival (Aldus Manutius, 1495) that carries old-world authority at display sizes; Newsreader is a warm transitional serif built for screen reading. Together they make the page feel typeset, like a menu or a book, rather than designed in a UI kit.

### Hierarchy
- **Display** (Cardo 400, clamp 2.1–4.4rem, line-height 1.02): The closing address ("11 Commercial Road, Southampton"). Architectural, set once at the foot of a page.
- **Headline** (Cardo 400, clamp 2.2–3.7rem, line-height 1.08): Page titles and the homepage welcome heading.
- **Title** (Cardo 400, clamp 1.9–3rem, line-height 1.14): Section headings and ticket-panel headings.
- **Dish name** (Cardo 700, clamp 1.3–1.6rem): The one place bold Cardo is allowed, small-size name tiers (dish names, section labels) where regular weight would go weedy.
- **Body** (Newsreader 400, clamp 1–1.09rem, line-height 1.65): All running text; two columns on desktop for the book-page prose blocks. Cap measure at ~65–75ch.
- **Label** (Newsreader 500, 13px, letter-spacing 0.14em, uppercase): The small-caps label language, eyebrows via the chapterline, action links, nav words, attributions.

### Named Rules
**The Regular-Weight-Display Rule.** Section and page headings are Cardo **400**, never 700. At display sizes the regular weight reads refined; the bold reads heavy and is reserved for the small dish-name tier and the drop cap. (Domi's own note: the bold felt too much.)

**The No-Full-Stop Rule.** Short headers never end in a full stop ("A family table since 2017", not "...2017."). A trailing period on a two-to-six-word header is an AI tell. Full stops belong only to real sentences and quotations.

**The Italic-Is-A-Voice Rule.** Cardo italic is a chancery form that reads as a different face; use it only for deliberate voice shifts (captions, pull-quotes, the closing "Reserve a table"), never as a lighter version of a heading.

## 4. Elevation

Flat by design. There are no drop shadows on surfaces; depth comes from tonal layering (the bone / warm-ivory / deep-ivory ground steps) and from real photographic bands, not from lift. The one exception is the ticket panel, which sits over a photo and reads as a physical object through its notched corners and gold keyline rather than through a shadow.

Two grain layers create material, not elevation: a warm brown paper grain under the content (`body::before`, multiply, ~0.28) and a fine greyscale film grain over everything including imagery (`body::after`, ~0.028, top of the stack). Together they give the whole surface the tooth of printed paper.

### Named Rules
**The Flat-Surface Rule.** Cards and panels are flat. If a container needs to feel separate, use a ground-tone shift, a hairline, or a keyline, never a box-shadow. The only "raised" element on the site is the ticket, and it earns it by overlapping a photograph.

## 5. Components

### Buttons
- **Shape:** Square (0px radius). Nothing on the site is rounded; the printed-card language has no soft corners.
- **Primary (filled oxblood):** Oxblood (#6e2b26) ground, bone text, Newsreader small-caps label at 0.14em, padding 13px 30px. The one solid button, used for the single most important action on a page (Reserve, Enquire). Hover darkens to ink (#1a1612).
- **Small-caps link (`.link-sc`):** The default action affordance. Oxblood small-caps over a 1px gold underline; hover shifts both text and rule to ink. This, not a filled button, carries most calls to action (View the menu, Read the letter, Full gallery).

### Cards / Containers
- **Corner Style:** Square (0px). Dish "cards" are frameless, image over a Cardo name and italic description; the grid does the work, not a box.
- **Background:** Section ground (bone / warm ivory / deep ivory). No card fills, no borders on content blocks.
- **Ticket panel (signature):** The exception. A bone box with inward-notched corners (CSS mask, `--notch` 16px) and a gold keyline inset 9px, floated over a photographic band. Carries a small-caps oxblood eyebrow, a Cardo title, one short paragraph, and one oxblood button. One per page maximum.

### Navigation
- **Top bar:** Newsreader small-caps words ("Menu" / "Reserve") flanking a small centred wordmark; the wordmark and words flip between ink and bone depending on whether the bar sits over an image band. On the homepage the bar fades in after the first scroll; inner pages show it from the top.
- **Takeover:** Full-screen dining-room navy (#1d2f3d) overlay; links in Cardo (bone, active in gold), numbered index in gold small-caps, address at the foot.

### Section seams (signature)
- Full-width **double oxblood rule** (1px, 3px gap, 1px) hugging the top and/or bottom edge of any photographic or video background band, and only those. Cream-to-cream section boundaries get no rule. This frames the imagery like a plate in a printed catalogue.

### Book-page prose (signature)
- Long intro copy sets in **two columns** (desktop) with a 1px hairline column rule and orphan/widow control, opened by a single **oxblood Cardo drop cap** (700, ~3.4em, floated). One drop cap per page.

## 6. Do's and Don'ts

### Do:
- **Do** keep the site all-serif: Cardo for headings, Newsreader for everything else. If you are reaching for a sans, stop.
- **Do** set section and page headings in Cardo **400**; reserve 700 for dish names and the drop cap only.
- **Do** use the small-caps chapterline as the eyebrow, and only where a section genuinely opens; it is a device, not a per-section reflex.
- **Do** frame photographic and video bands with the double oxblood seam, top and/or bottom.
- **Do** use each signature move (ticket, drop cap, two-column prose) at most once per page.
- **Do** write short headers with no full stop, and body copy in a plain first-person family voice.
- **Do** keep gold to rules, keylines and ornament; keep body text at AA (soot or ink on cream).

### Don't:
- **Don't** reintroduce **Fraunces + Inter Tight**, or any sans-serif, anywhere. That was the old vibe-coded stack.
- **Don't** put a tiny **uppercase tracked-caps eyebrow above every section** (the 0.27em Inter kicker). One chapterline where a section opens is voice; an eyebrow on every block is AI grammar.
- **Don't** build the **"big serif headline left, small body right" grid** or **numbered chapter markers** as scaffolding; that is the Max's Brasserie / template look this site was rebuilt to escape.
- **Don't** split a section with a **dark-overlay photo and a quote floating on top**. Use the ticket panel or a seamed band instead.
- **Don't** end a short header in a **full stop**, and don't use em or en dashes in visible copy (write "to", ";", or ":").
- **Don't** set body text in **light grey "for elegance"**, and never use gold (#b89569) as text; both fail contrast for the older theatre-going audience.
- **Don't** add box-shadows to make things "pop"; this system is flat, with the ticket as the only raised element.

## Guardrails (design ledger, 5 Sep 2026)

Protect, never replace: the hero with no buttons. Full-bleed video, one logo, one italic caption, then the drop-cap intro paragraph. A "Book a table" button in the hero is the default reflex this site deliberately refuses; booking lives in the nav and the visit section.

The risk is surface, not structure: two serifs (Newsreader + Cardo) on cream with centred 880px prose sits close to the "luxury but AI" recipe. Next design pass: break the centring (left-set the prose, vary the measure, let one photograph interrupt the column at full bleed) and consider a sans for nav and UI labels only, so the serifs stay for reading.

Retired: hover-zoom on images (`.img-hover-zoom` is now a no-op). Keep: the small-caps chapterline, the drop cap.

Never use the "soleto-website-editorial" build as a base: Fraunces (banned) and a centred two-button hero. It is archived, not deployable.

Before any deploy: `python3 ~/.claude/skills/humanise/scripts/recycle-check.py out/index.html --site Soleto`, then visual-qc at Ryan's real viewports. The one standing recycle flag (cream ground + red accent shape shared with the Corfu Albania guide) is a kept choice: bone and oxblood are the restaurant's own identity, and Domi does not want a dark site.

