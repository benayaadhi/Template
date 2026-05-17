# Design Tokens — Companion Notes

`tokens.json` is the canonical source. This file is the human-readable companion explaining *why* the tokens are what they are.

## Color philosophy

The palette is pulled from the **Maillard reaction** — the family of chemical transformations that happen when sugars and proteins meet heat. Every color earns its place by reference to a real, tangible material in the kitchen, not to mood.

| Token | Hex | What it actually is |
|---|---|---|
| Butter | `#F2EAD5` | The color of unsalted butter at room temperature, just before it creams |
| Lighter butter | `#F5E6C8` | The same butter caught by morning window light |
| Aged butter | `#EBE0C8` | The slight oxidation of butter left out too long — for inset surfaces |
| Gilded | `#C9A961` | Late afternoon light on baking parchment |
| Caramelized | `#B85C2C` | Sugar held in the pan one moment longer than safe |
| Caramel | `#6B4226` | Properly made caramel, before the bitter edge |
| Cocoa Ash | `#4A2618` | The fine dust at the bottom of a tin of high-cocoa-content powder |
| Wine reduction | `#6B2737` | A reduction of port wine, after the alcohol has cooked off — used rarely |
| Espresso Black | `#201410` | Not pure black; the deepest brown a properly pulled espresso achieves |

**Usage rule:** Pages live in butter. Text lives in espresso. Hierarchy is achieved through ink shade (espresso → cocoa → caramel as you descend in importance), not through color saturation. Accent colors (gold, caramelized, burgundy) appear sparingly — typically once per fold — as a single focal anchor.

## Typography pairing

Four families, each with a clear job:

- **Gloock** (display serif): A high-contrast didone-style serif. Reserved for the brand masthead, page titles, and cake names. Wants generous tracking when set very large (use `letterSpacing.masthead`).
- **Crimson Pro** (serif body, italic preferred): Editorial reading text and italic pull-quotes. Hand-set tradition.
- **Instrument Sans** (humanist sans): Navigation, buttons, captions. Replaces Inter explicitly — see PHILOSOPHY note on avoiding common AI defaults.
- **Geist Mono** (mono): Specimen labels, prices, plate numbers, technical metadata. Carries the "catalogue plate" feel from the reference visual.

**Pairing rule:** A given block of content uses at most two families. Display serif headline + sans body. Or sans label + mono number. Never four families in one section.

## Spacing rhythm

Spacing follows a 4px base. **Lean toward the upper end of the scale** — Arkamaya is editorial, not e-commerce. A section break that "feels enough" in a typical web project is often too tight here; add another `space-8` or `space-12` and check again.

A hero section, on desktop, comfortably uses 6-8rem of vertical breathing room above and below the title block. Don't be afraid of empty space.

## Border & shape language

**Sharp corners by default.** Rounded corners belong to circles (avatars, registration dots, the rotating entremet itself). Cards, buttons, and inputs are rectilinear. This is non-negotiable — rounded corners on cards instantly cheapens the editorial register.

Hairline borders (1px, espresso at 15% alpha) appear constantly. They are the connective tissue of the editorial grid — section dividers, table rules, registration marks. Every hairline you place must be intentional.

## Motion philosophy

Animation exists only to clarify state, never to decorate. Three durations are sanctioned:

- **150ms** for direct UI feedback (hover, focus)
- **300ms** for state transitions (modal in/out, menu reveal)
- **600-900ms** for editorial reveals (a section fading in on scroll)

The 3D entremet rotates at the speed of contemplation — roughly one full rotation every 30 seconds. If a user notices the rotation, it is too fast.

**Hover states** must not pop. A button changes from cocoa border to espresso border, not from white to colored gradient. A card image lifts by a single pixel and gains a 600ms transition on the box-shadow. Less is more.

## Iconography

Use thin-stroke line icons exclusively. **Phosphor Icons (light weight)** is preferred; **Lucide** at `strokeWidth={1.25}` is the fallback. Never filled icons. Never colored icons (icons inherit current text color).

## Common mistakes to avoid

- ❌ Centered hero sections with a single big button (cliché AI-slop)
- ❌ Purple or pink gradients anywhere
- ❌ Rounded `2xl` corners on cards
- ❌ Inter as the body font (replace with Instrument Sans)
- ❌ Drop shadows on every card
- ❌ Hero text that says "Welcome to Arkamaya" (it's their site, they know)
- ❌ Animated counters ("16,000+ happy customers")
- ❌ Trust badges, payment method logos in footer (premium brands don't beg for trust)
- ❌ Newsletter popup on first load
- ❌ "Limited stock!" urgency language
