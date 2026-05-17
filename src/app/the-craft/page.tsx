import EditorialReveal from "@/components/EditorialReveal";
import SectionView from "@/components/SectionView";
import { Eyebrow, HairlineRule, Heading, PullQuote, RegistrationMark } from "@/components/primitives";

export const metadata = { title: "The Craft" };

export default function TheCraftPage() {
  return (
    <main>
      <div className="container page-head">
        <Eyebrow withRule>Studio Notes · The Craft</Eyebrow>
        <Heading as="h1" level="xl" className="page-head__title">
          A craftsman's kitchen,<br />held at a craftsman's scale.
        </Heading>
        <p className="body-editorial page-head__lede">
          Chef Yosua Ekajaya trained at Le Cordon Bleu London and graduated as a professional pâtissier in 2016.
          Arkamaya is the kitchen he chose to build.
        </p>
      </div>

      {/* From London to Jakarta */}
      <section className="section">
        <div className="container">
          <EditorialReveal>
            <div className="craft-row">
              <div>
                <Eyebrow withRule>I · From London to Jakarta</Eyebrow>
                <Heading as="h2" level="lg" style={{ marginTop: "1rem", maxWidth: "18ch" }}>
                  The route is not unusual. The discipline is.
                </Heading>
                <div className="body-editorial" style={{ marginTop: "2rem" }}>
                  <p>
                    Le Cordon Bleu London asks its students to learn the structure of pâtisserie — the technique
                    underneath the technique. By 2016 Chef Yosua had completed the diploma and returned home to
                    Jakarta with a clear position: the work would be made to order, the lead time would be three days,
                    and the cake names would carry their accents.
                  </p>
                  <p>
                    The atelier in Petamburan opened soon after. Orders arrived by phone, then by Instagram. The kitchen
                    held its position on lead time and refused to compromise the slow nights of build that an entremet
                    requires. The position has held.
                  </p>
                </div>
              </div>
              <figure className="craft-figure">
                <RegistrationMark size={18} style={{ position: "absolute", top: "1rem", left: "1rem" }} />
                <RegistrationMark size={18} style={{ position: "absolute", bottom: "1rem", right: "1rem" }} />
                <div style={{ width: "70%", height: "70%" }}>
                  <SectionView form="cupola" palette="burnt" />
                </div>
                <figcaption className="specimen-label" style={{ position: "absolute", bottom: "1rem", left: "1rem" }}>
                  Forma Cupola · Studio Reference
                </figcaption>
              </figure>
            </div>
          </EditorialReveal>
        </div>
      </section>

      {/* Pull quote */}
      <section className="section section--snug" style={{ background: "var(--bg-light)", borderTop: "1px solid var(--hairline)", borderBottom: "1px solid var(--hairline)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <EditorialReveal>
            <PullQuote attribution="Studio thesis">
              An entremet read from the side reveals what it is. A drawing of an entremet read from the side teaches you to read the cake itself.
            </PullQuote>
          </EditorialReveal>
        </div>
      </section>

      {/* The Arkamaya approach */}
      <section className="section">
        <div className="container">
          <EditorialReveal>
            <div className="craft-row craft-row--reverse">
              <figure className="craft-figure">
                <RegistrationMark size={18} style={{ position: "absolute", top: "1rem", left: "1rem" }} />
                <RegistrationMark size={18} style={{ position: "absolute", bottom: "1rem", right: "1rem" }} />
                <div style={{ width: "70%", height: "70%" }}>
                  <SectionView form="stratificata" palette="burnt" />
                </div>
              </figure>
              <div>
                <Eyebrow withRule>II · The Arkamaya Approach</Eyebrow>
                <Heading as="h2" level="lg" style={{ marginTop: "1rem", maxWidth: "20ch" }}>
                  Entremet as built object — not as decorated mass.
                </Heading>
                <div className="body-editorial" style={{ marginTop: "2rem" }}>
                  <p>
                    The studio approach is simple and uncompromising: each cake is conceived as a built object.
                    Strata hold one another in place. A centre is chosen and the rest of the cake exists to frame it.
                    Surfaces record decisions; they are not decoration laid on top.
                  </p>
                  <p>
                    The cake names — Élsa, Élma, Éloise, Ésmee, Évony — are French feminine with the accent visible. The
                    flavour vocabulary is Indonesian. Together they describe the position from which the studio works.
                  </p>
                </div>
              </div>
            </div>
          </EditorialReveal>
        </div>
      </section>

      {/* Partners */}
      <section className="section" style={{ background: "var(--bg-aged)", borderTop: "1px solid var(--hairline)" }}>
        <div className="container">
          <EditorialReveal>
            <Eyebrow withRule>III · Partners</Eyebrow>
            <Heading as="h2" level="lg" style={{ marginTop: "1rem", maxWidth: "22ch" }}>
              Selected for interval, not adjacency.
            </Heading>

            <div className="partners-grid">
              <div className="partner-card">
                <div className="specimen-label">Tea</div>
                <div className="h-display-md" style={{ marginTop: "0.5rem", fontSize: "1.75rem" }}>TWG Tea Indonesia</div>
                <p className="body-editorial" style={{ marginTop: "0.75rem" }}>
                  Pairings developed for Jakarta Dessert Week. The pairing is selected by interval — close enough to
                  share a key, far enough that the cake remains the subject.
                </p>
              </div>
              <div className="partner-card">
                <div className="specimen-label">Education</div>
                <div className="h-display-md" style={{ marginTop: "0.5rem", fontSize: "1.75rem" }}>Arkamaya Culinary Education</div>
                <p className="body-editorial" style={{ marginTop: "0.75rem" }}>
                  The sister atelier — workshops and intensives in pâtisserie technique, run from the same kitchen.
                  44,000 followers, programmatic depth.
                </p>
              </div>
              <div className="partner-card">
                <div className="specimen-label">Studio</div>
                <div className="h-display-md" style={{ marginTop: "0.5rem", fontSize: "1.75rem" }}>Petamburan Atelier</div>
                <p className="body-editorial" style={{ marginTop: "0.75rem" }}>
                  Tuesday to Saturday. Pickups by appointment. Three days of considered build before the cake leaves
                  the kitchen.
                </p>
              </div>
            </div>
          </EditorialReveal>
        </div>
        <style>{`
          .partners-grid { display: grid; grid-template-columns: 1fr; gap: 0; margin-top: 3rem; border-top: 1px solid var(--hairline); }
          .partner-card { padding: 2rem 0; border-bottom: 1px solid var(--hairline); }
          @media (min-width: 900px) {
            .partners-grid { grid-template-columns: repeat(3, 1fr); gap: 0; }
            .partner-card { padding: 2.5rem 2rem; border-bottom: 0; border-right: 1px solid var(--hairline); }
            .partner-card:first-child { padding-left: 0; }
            .partner-card:last-child  { padding-right: 0; border-right: 0; }
          }
        `}</style>
      </section>

      <style>{`
        .craft-row { display: grid; grid-template-columns: 1fr; gap: 3rem; align-items: start; }
        @media (min-width: 1024px) {
          .craft-row { grid-template-columns: 1.05fr 1fr; gap: 5rem; }
          .craft-row--reverse > *:first-child { order: 2; }
        }
        .craft-figure {
          background: var(--bg-aged);
          border: 1px solid var(--hairline);
          aspect-ratio: 1 / 1;
          display: flex; align-items: center; justify-content: center;
          position: relative;
        }
      `}</style>
    </main>
  );
}
