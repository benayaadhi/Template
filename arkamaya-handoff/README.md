# Arkamaya Artisan Cakery — Web Handoff Package

A self-contained brief and design system for building a speculative D2C site for **Arkamaya Artisan Cakery** (Jakarta). The end deliverable is a multi-page React site that becomes both a portfolio case study and an unsolicited pitch to Chef Yosua Ekajaya.

## Read order (for Claude Code)

1. `BRIEF.md` — what we're building and why
2. `PHILOSOPHY.md` — visual & creative worldview
3. `DESIGN_TOKENS.md` (or `tokens.json` for code) — palette, type, spacing
4. `COMPONENTS.md` — component breakdown with acceptance criteria
5. `reference/arkamaya_reference.png` — visual moodboard / catalogue plate

## Suggested stack

- **Framework**: Next.js 14 (app router) or React 18 + Vite
- **Styling**: Tailwind CSS (extend with tokens from `tokens.json`)
- **Animation**: Framer Motion (for editorial reveal transitions)
- **3D**: react-three-fiber + drei (for hero entremet model)
- **Fonts**: All via Google Fonts (see `tokens.json` for exact names)
- **Content**: MDX or hardcoded JSON for the case study (no CMS needed)
- **Forms / Order flow**: WhatsApp deep-links (no auth/cart for v1)

## 3D integration (user's existing template)

The hero section calls for a slowly rotating entremet (premium layered cake) as the centerpiece. The user has a 3D template available — integration path:

1. Export the entremet model as **GLB** (preferred) or **GLTF**
2. Place in `/public/models/entremet.glb`
3. Hero component loads it with `useGLTF()` from drei
4. Apply subtle auto-rotation (~0.2 rad/s) + slight mouse parallax
5. Lighting: warm key light from upper-left (matching "afternoon parchment" mood in PHILOSOPHY), soft fill, no harsh shadows
6. Fallback: if 3D fails to load, swap to SVG section view (one of the 6 abstract specimens in `reference/arkamaya_reference.png`)

If the user's 3D template is NOT an entremet (e.g., a donut, sphere, or abstract form), use it directly — abstract works for "Confection as Architecture" philosophy. Re-skin the shader to honey/caramel tones (see palette).

## What "done" looks like for v1

A 5-page site, fully responsive, that a Le Cordon Bleu trained chef would receive as a DM link and immediately want to discuss. The visual quality must match — or aspire to — international patisserie sites like Cédric Grolet, Lune Croissanterie, or Bo Innovation.

## What this is NOT

- ❌ A real client engagement (yet) — this is speculative
- ❌ A full e-commerce build with cart/payments (use WhatsApp deep-links)
- ❌ A CMS-backed site (hardcode for case study)
- ❌ A pitch deck or proposal document
