# COMPONENTS — Acceptance Criteria

Each component below has an **intent** (what it's for), **anatomy** (what it contains), and **acceptance criteria** (when it's "done").

Build from the top down — atomic primitives first, then page-level compositions.

---

## Primitives

### `<Heading />`
**Intent**: All page-level and section-level titles.
**Anatomy**: Tag (h1-h4), display serif (Gloock) or italic serif (Crimson Pro), size from typography scale.
**Acceptance**:
- `h1` uses Gloock at 4xl-5xl with `letterSpacing.masthead`
- `h2` uses Gloock at 3xl
- `h3` and below use Crimson Pro Italic at lg-xl
- Headings never use sans
- Headings never have decoration (no underlines, no colored bars, no icons)

### `<Eyebrow />`
**Intent**: The small ALL-CAPS mono label that appears above editorial headings. Equivalent to "MATERIA · CHROMATIC INDEX" in the reference plate.
**Anatomy**: Mono, xs-sm, espresso color, `letterSpacing.widest`, optional hairline rule below.
**Acceptance**:
- Always uppercase
- Letter-spacing is visibly wide
- May contain a middle dot `·` as separator
- Hairline rule below is optional but encouraged

### `<HairlineRule />`
**Intent**: The thin horizontal line that delineates sections. The single most important structural element in the system.
**Anatomy**: 1px solid, espresso color, full width of container, no padding.
**Acceptance**:
- Default is full container width
- Variant: `width="short"` produces a 60px short rule (for label underlines)
- Never animated
- Never colored

### `<Button />`
**Intent**: Calls to action.
**Anatomy**: Sans label, sharp corners, hairline border, hover swaps border weight and label weight.
**Acceptance**:
- Three variants: `primary` (espresso bg, butter text), `secondary` (butter bg, espresso border), `ghost` (no border, espresso text with underline on hover)
- No gradients, no shadows, no rounded corners
- Hover state changes only border-color/weight or text-weight — not background
- Disabled state reduces opacity to 0.4

### `<Tag />`
**Intent**: Filter chips, occasion labels, dietary markers.
**Anatomy**: Mono xs, hairline border, sharp corners.
**Acceptance**:
- Always rectangular
- Default state: hairline cocoa border, espresso text
- Active state: espresso fill, butter text
- Hover state: cocoa fill at 10% alpha

### `<RegistrationMark />`
**Intent**: The cross-hair-and-circle mark from the reference plate. Used as decorative punctuation at section corners.
**Anatomy**: SVG with horizontal line, vertical line, and centered circle outline.
**Acceptance**:
- Default size: 24px
- Stroke 1px, espresso color
- Appears at corners of major sections (top-left, bottom-right typically)
- Not interactive — pure decoration with semantic role of "this is intentionally placed"

---

## Layout primitives

### `<Container />`
**Intent**: Page-level horizontal constraint.
**Anatomy**: Max-width from `layout.container.max`, padding from `layout.container.padding`, centered.
**Acceptance**:
- Mobile padding 1.25rem
- Tablet padding 2.5rem
- Desktop padding 5rem

### `<Section />`
**Intent**: A vertical block of content with consistent breathing room.
**Anatomy**: Container + vertical padding (typically `space-16` to `space-24` top and bottom on desktop).
**Acceptance**:
- Editorial breathing room is the default — err larger
- Accepts optional `<HairlineRule />` at top and/or bottom as boundary

### `<AsymmetricGrid />`
**Intent**: The non-uniform editorial grid for cake cards. Some cards span 2 columns, some span 1.
**Anatomy**: CSS grid with 12 columns, children opt-in to spans via prop.
**Acceptance**:
- Children control their span (col-span-1, col-span-2, col-span-3)
- Children control their row span (row-span-1, row-span-2)
- Mobile collapses to single column; spans ignored
- Gap follows `layout.grid.gutter`

---

## Domain components

### `<CakeCard />`
**Intent**: A single cake represented in editorial style.
**Anatomy**:
  - Image area (or SVG section-view placeholder)
  - Cake name (display serif)
  - One-line italic description
  - Price + lead time (mono)
  - Plate number eyebrow ("Pl. 01.a" style)
**Acceptance**:
- Card is NOT enclosed in a box with rounded corners or shadow
- Image area has a hairline rule below it, not a box border around it
- Hover state: image gains very subtle scale (1.02), text gains underline on cake name
- Click goes to `/collection/[slug]`

### `<SectionView />`
**Intent**: The abstract geometric "cross-section" diagram of a cake, à la the six specimens in `reference/arkamaya_reference.png`. Used as image placeholder when no photography exists, AND as a feature element on cake detail pages.
**Anatomy**: SVG with concentric strata, hairline strokes, one or two filled regions in palette accent colors, optional measurement ticks.
**Acceptance**:
- Six base forms available: `concentrica`, `stratificata`, `cupola`, `spirale`, `quadrata`, `composita`
- Each form takes a `palette` prop selecting which accent fills are used
- Renders crisply at any size (vector)
- Optional plate-number label underneath ("Pl. 01.a — Forma Concentrica")

### `<Hero3D />`
**Intent**: The home page hero with rotating 3D entremet.
**Anatomy**:
  - Full viewport height (or 80vh on mobile)
  - Two-column on desktop: text left, 3D canvas right
  - Single column stacked on mobile
**Acceptance**:
- 3D canvas uses `<Canvas>` from `@react-three/fiber`
- Loads GLB model from `/public/models/entremet.glb`
- Soft autorotate at 0.2 rad/s
- Subtle mouse parallax (15% strength)
- Two-light setup: warm key from upper-left, cool fill from right
- Background is transparent (page Butter shows through)
- Falls back to a static `<SectionView form="concentrica" size="xl" />` if model fails to load

### `<EditorialReveal />`
**Intent**: A wrapper that fades children in on scroll. Used on philosophy paragraphs, journal articles, founder story sections.
**Anatomy**: Intersection observer triggers fade-in + slight Y translate.
**Acceptance**:
- Duration `editorial` (900ms)
- Easing `editorial`
- Translates from `y: 16px` to `y: 0`
- Opacity 0 to 1
- Triggers once per element (no repeat)
- Honors `prefers-reduced-motion` (disable animation entirely)

### `<PullQuote />`
**Intent**: A large italic serif quotation block, magazine-style.
**Anatomy**: Crimson Pro Italic at xl-2xl, optional attribution in sans below, optional hairline rule above and below.
**Acceptance**:
- Never use quotation marks visually — the italic + scale carries the quote-ness
- Attribution is small caps mono, "— Chef Yosua Ekajaya" style
- Centered or left-aligned depending on layout context

### `<NavBar />`
**Intent**: Top navigation.
**Anatomy**: Logo wordmark left, nav links center or right, single CTA right.
**Acceptance**:
- Sticky on scroll
- Background goes from transparent to butter-with-slight-blur on scroll past hero
- Nav links: Collection, The Craft, Journal, Contact
- CTA button: "Order via WhatsApp"
- Mobile: hamburger collapses to overlay menu in espresso

### `<Footer />`
**Intent**: Site-wide footer.
**Anatomy**:
  - Top band: ARKAMAYA masthead in display serif (huge, like the reference plate)
  - Middle: address, hours, contact links, social
  - Bottom: speculative-project disclaimer (small mono)
**Acceptance**:
- Includes the visible disclaimer: "Speculative design study. Not affiliated with or endorsed by Arkamaya Artisan Cakery."
- Address pulled from sister site: Jl. Jend Gatot Subroto Kav. 51-52, Ruko A9 Petamburan, Slipi, Jakarta Pusat 10260
- WhatsApp deep-link uses `0821 1459 7840` (cakery line, not education line)

### `<InquireButton />`
**Intent**: Primary CTA on cake detail pages — opens WhatsApp with a pre-filled message.
**Anatomy**: Button with `href="https://wa.me/6282114597840?text=..."`.
**Acceptance**:
- Pre-filled message: `Halo Arkamaya, saya tertarik untuk memesan [Cake Name]. Boleh saya tahu ketersediaan untuk tanggal [...]? Terima kasih.`
- URL-encode the message properly
- Opens in new tab
- Button label: "Inquire via WhatsApp"

### `<PairingNote />`
**Intent**: Small editorial block suggesting a tea or wine pairing for a cake (paying off the TWG partnership story).
**Anatomy**: Eyebrow ("PAIRING NOTE") + short italic paragraph + attribution if appropriate.
**Acceptance**:
- Appears on cake detail pages below the fold
- Uses real TWG tea names where appropriate (Alfonso, etc. — verifiable from public TWG menu)
- Falls back gracefully if no pairing exists for a given cake

---

## Page assemblies (compositions of the above)

### `HomePage`
NavBar → Hero3D → EditorialReveal[Philosophy strip] → AsymmetricGrid[Signature collection — 4-6 CakeCards] → EditorialReveal[The Craft preview] → EditorialReveal[Journal preview — 3 cards] → EducationBanner → Footer

### `CollectionPage`
NavBar → PageTitle → FilterBar → AsymmetricGrid[12-16 CakeCards] → Footer

### `CakeDetailPage`
NavBar → 2-column hero (gallery left, info right with InquireButton) → SectionView with annotations → PairingNote → "Related cakes" strip → Footer

### `TheCraftPage`
NavBar → Long-form sectional editorial with EditorialReveals and PullQuotes → Footer

### `JournalIndex`
NavBar → PageTitle → Asymmetric list of journal entries → Footer

### `JournalEntry`
NavBar → Article header (title, mono date, mono read-time) → Article body (Crimson Pro at md, generous line-height) → Footer

### `ContactPage`
NavBar → Single column with address, hours, WA deep-link, partnership email → Footer

---

## Build priority

If time is short, build in this order:

1. Primitives (Heading, Button, HairlineRule, Eyebrow, RegistrationMark)
2. Layout primitives (Container, Section, AsymmetricGrid)
3. SectionView SVGs (these are reusable visual assets)
4. CakeCard
5. NavBar + Footer
6. HomePage (the single most important page)
7. CakeDetailPage
8. CollectionPage
9. TheCraftPage
10. Journal pages, Contact

A v1 that ships pages 1-7 well is dramatically better than a v1 that ships all 10 pages mediocre.
