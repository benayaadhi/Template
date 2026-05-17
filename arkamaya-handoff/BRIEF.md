# BRIEF — Arkamaya Artisan Cakery

## Brand Snapshot

| Field | Value |
|---|---|
| Name | Arkamaya Artisan Cakery |
| Founder | Chef Yosua Ekajaya — Le Cordon Bleu London graduate, 2016 |
| IG | @arkamaya.artisancakery — 16K followers |
| Sister arms | @arkamaya.culinaryeducation (44K, education), @arkamaya.catering |
| Specialty | Entremets (layered French mousse cakes) with Indonesian flavor inflections |
| Price range | Rp 300K – 600K+ per cake |
| Current ordering | Phone H-3 (`0821 1459 7840`) — no proper D2C site |
| Premium partnerships | TWG Tea Indonesia (Jakarta Dessert Week tea pairing) |
| Existing cake names | Élsa (nastar-inspired), Élma (klepon-inspired), Éloise (Marie Regal chocolate entremet), Ésmee, Évony, Cruxient Tart, Boba Cake, Mango Sticky Rice Cake, Baileys Cake, Ovomaltine Cake |

## Problem statement

Arkamaya produces world-class entremets at Le Cordon Bleu execution standard, sells them at Rp 300-600K each, and orders are taken via WhatsApp/phone with H-3 lead time. The brand has a 16K-follower community, a sister education brand with 44K followers, and a documented premium partnership with TWG. **It has no dedicated D2C web presence.** Every order requires manual conversation. Every discovery happens via Instagram or third-party listing platforms like cakeout.id, which dilute brand equity.

## Goal of the site

1. **Establish a sovereign brand home** that matches Chef Yosua's Le Cordon Bleu pedigree
2. **Reduce friction** from "I want this cake" → "the order is placed" without losing the personal, made-to-order character
3. **Showcase the full cake collection** with proper photography hierarchy and storytelling per cake
4. **Position the founder** so visitors trust that the craft is real
5. **Bridge to the education arm** for cross-traffic between the two businesses

## Out of scope for v1

- Full e-commerce with cart/payment processing (WhatsApp deep-links handle ordering)
- User accounts, order history, login
- Multi-language (English only is fine; Bahasa optional as future state)
- CMS integration (hardcode all content for the case study)
- Email automation / marketing flows
- Subscription model (interesting future addition, not v1)

## Pages (v1 scope)

### 1. Home (`/`)
The single most important page — most DM clicks land here.

**Sections in order:**
1. **Hero** — Full-viewport. 3D entremet (rotating slowly) on right, title block on left: "Confection as Architecture" / brief tagline / single CTA "View the Collection"
2. **Philosophy strip** — Two-column: a short paragraph on the Arkamaya approach (entremet as built object), paired with an italic pull-quote from Chef Yosua or about Le Cordon Bleu lineage
3. **Signature Collection** — Editorial grid showing 4-6 hero cakes. Asymmetric layout (not a uniform e-commerce grid). Each card: cake photo (or illustration if no photo), name, one-line description, price
4. **The Craft** — Storytelling band introducing Chef Yosua + Le Cordon Bleu credential + TWG partnership. Image + text. CTA: "Read the full story"
5. **Latest from the Journal** — Three editorial cards linking to journal entries
6. **Education tease** — Single banner linking out to @arkamaya.culinaryeducation
7. **Footer** — Address, WhatsApp, IG, hours, newsletter signup

### 2. Collection (`/collection`)
The full catalog.

- **Filter bar**: Occasion (Birthday / Celebration / Daily / Gifting), Flavor profile (Chocolate / Fruit / Indonesian / Floral / Spirit-infused), Dietary (— none initially, prep for future)
- **Grid**: 12-16 cakes initially. Asymmetric — some cards span 2 columns, some are tall. Hover state reveals more info.
- **Each card**: image, name (in display serif), price, lead time, "Inquire to Order" CTA

### 3. Cake Detail (`/collection/[slug]`)
Magazine-style product page, not e-commerce typical.

- **Left column**: large hero image + thumbnail gallery
- **Right column**: 
  - Cake name (display serif, large)
  - Origin/inspiration paragraph
  - Layer breakdown ("section view" — diagram showing strata, similar to specimens in `reference/`)
  - Ingredients / flavor notes
  - Size options + price
  - Lead time (H-3 by default)
  - "Inquire via WhatsApp" CTA — deep-link pre-fills message "Hi, I'd like to order [Cake Name] for [date]"
- **Below the fold**: pairing suggestions (e.g., "Élma pairs beautifully with TWG's Alfonso tea"), 3 related cakes

### 4. The Craft (`/the-craft`)
Founder + brand story page.

- Long-form editorial
- Sections: "From London to Jakarta" (Le Cordon Bleu journey), "The Arkamaya Approach" (philosophy), "Partners" (TWG, etc.), "The Kitchen" (behind-the-scenes if imagery available)
- Sectional layout with large photography, pull-quotes, generous whitespace

### 5. Journal (`/journal`) + Journal Entries (`/journal/[slug]`)
Editorial content hub.

- Index: list of articles, magazine-style
- Initial entries (write 2-3 for the case study):
  1. "Pairing Entremet with Tea — Notes from the TWG Collaboration"
  2. "Why H-3? On the Discipline of Made-to-Order"
  3. "Reading a Section View — How to Understand an Entremet"

### 6. Contact (`/contact`)
- WhatsApp deep-link (primary CTA)
- Phone
- Address (Petamburan, Slipi Jakarta Pusat — pull from sister site)
- Hours
- "For media / partnership inquiries" email

## User flows

### Flow A: Discovery → Order (primary)
IG/DM → Home → Collection → Cake Detail → "Inquire via WhatsApp" → deep-link opens with pre-filled message → manual confirmation by Arkamaya team → order placed

### Flow B: Trust-building (secondary)
Home → reads Philosophy strip → clicks "The Craft" → reads founder story → returns to Collection with intent

### Flow C: Custom inquiry
Home → footer "Custom orders" link → contact form / WhatsApp deep-link with "Custom inquiry" pre-fill

### Flow D: Education cross-sell
Home → Education tease banner → exits to @arkamaya.culinaryeducation site or IG

## Content rules

- **No "Sale", "Discount", "Promo" language anywhere.** Brand is premium.
- **No emojis in product copy.** Restraint matches the visual philosophy.
- **Cake names always in display serif**, never sans.
- **Prices stated, not hidden.** Premium brands are confident about pricing.
- **"H-3" is a feature, not a bug** — frame as "made fresh to order, three days lead time" — never apologize for it.
- **Le Cordon Bleu credential** appears subtly, never bragged. Once on Home, once on The Craft. That's it.

## Constraints / risks

- Real Arkamaya photography is not available to this project (speculative case study). Use **abstract illustrated section views** (à la `reference/arkamaya_reference.png`) as placeholders, OR generate one tasteful 3D render of an entremet for the hero. **Do not use stock photography of generic cakes** — would undermine the brand.
- Do not invent quotes attributed to Chef Yosua. If a quote is used, mark it as design placeholder or use a real attributed quote from public interviews (e.g., the Jakarta Post 2019 piece on Jakarta Dessert Week).
- Do not claim affiliation with Arkamaya in any visible page text. Footer or about-this-project page should state clearly: *"Speculative design study. Not affiliated with or endorsed by Arkamaya Artisan Cakery."*

## Success criteria

The DM that accompanies this site (sent to Chef Yosua) should be more compelling because the work exists, not less. The site, viewed cold, should make a Le Cordon Bleu trained pâtissier think: *"Whoever made this understood my brand better than the people I would normally hire."*
