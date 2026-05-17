import Link from "next/link";
import Hero3D from "@/components/Hero3D";
import CakeCard from "@/components/CakeCard";
import EditorialReveal from "@/components/EditorialReveal";
import { Button, Eyebrow, HairlineRule, Heading, PullQuote, RegistrationMark } from "@/components/primitives";
import { cakes } from "@/data/cakes";
import { journal } from "@/data/journal";

export default function HomePage() {
  const signature = cakes.slice(0, 6);
  const latest = journal.slice(0, 3);

  return (
    <>
      {/* =====================  Hero  ===================== */}
      <section className="hero">
        <div className="container" style={{ display: "contents" }} />
        <div className="container hero__topbar specimen-label">
          <span>Arkamaya · Catalogue № 01 · Sectional Studies · MMXXVI</span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
            <RegistrationMark size={14} />
            Pl. I / I
          </span>
        </div>

        <div className="container">
          <div className="hero__copy">
            <Eyebrow withRule>Introductory Plate</Eyebrow>
            <h1 className="h-display-xl hero__title">
              Confection<br />as Architecture.
            </h1>
            <p className="h-serif-italic hero__lead">
              A study in the geometry of layered confection, after the manner of the section drawing.
              Entremets built to be read at the cut.
            </p>
            <div className="hero__cta-row">
              <Button href="/collection" variant="primary">
                View the Collection <span aria-hidden>→</span>
              </Button>
              <Button href="/the-craft" variant="ghost">
                Meet the chef
              </Button>
            </div>
          </div>

          <div className="hero__canvas" aria-hidden>
            <Hero3D />
          </div>
        </div>

        <div className="container hero__plate-meta specimen-label">
          <span>Studio Plate № 01</span>
          <span>For internal review · Not for distribution</span>
        </div>
      </section>

      {/* =====================  Philosophy strip  ===================== */}
      <section className="section" style={{ borderTop: "1px solid var(--hairline)", borderBottom: "1px solid var(--hairline)", background: "var(--bg-light)" }}>
        <div className="container">
          <EditorialReveal>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem" }} className="phil-grid">
              <div>
                <Eyebrow withRule>The Approach</Eyebrow>
                <Heading as="h2" level="lg" style={{ marginTop: "1.25rem" }}>
                  The pâtissier who builds, not bakes.
                </Heading>
                <p className="body-editorial" style={{ marginTop: "1.5rem", maxWidth: "52ch" }}>
                  Every Arkamaya entremet is conceived as a built object — strata that hold one another in place,
                  centres that the rest of the cake exists to frame, surfaces that record a decision.
                  The work is not decorated. It is constructed.
                </p>
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                <PullQuote attribution="On the Arkamaya method">
                  Asymmetry implies decision, and decision implies a maker.
                </PullQuote>
              </div>
            </div>
          </EditorialReveal>
        </div>
        <style>{`
          @media (min-width: 1024px) {
            .phil-grid { grid-template-columns: 1.1fr 1fr !important; gap: 5rem !important; align-items: start; }
          }
        `}</style>
      </section>

      {/* =====================  Signature collection  ===================== */}
      <section className="section">
        <div className="container">
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", marginBottom: "3rem" }}>
            <div>
              <Eyebrow withRule>Signature Collection · Pl. 01</Eyebrow>
              <Heading as="h2" level="lg" style={{ marginTop: "1.25rem" }}>
                Six specimens, made fresh.
              </Heading>
            </div>
            <Link href="/collection" className="btn btn--ghost">
              View all twelve <span aria-hidden>→</span>
            </Link>
          </div>

          <HairlineRule style={{ marginBottom: "3rem" }} />

          <div className="asym-grid">
            {/* Asymmetric layout: 4 / 4 / 4 then 6 / 6 then 4 / 4 / 4 — twelve-col grid */}
            <CakeCard cake={signature[0]} span={4} />
            <CakeCard cake={signature[1]} span={4} mediaAspect="tall" />
            <CakeCard cake={signature[2]} span={4} />
            <CakeCard cake={signature[3]} span={6} mediaAspect="wide" />
            <CakeCard cake={signature[4]} span={6} mediaAspect="wide" />
          </div>
        </div>
      </section>

      {/* =====================  The Craft preview  ===================== */}
      <section className="section" style={{ background: "var(--bg-aged)", borderTop: "1px solid var(--hairline)" }}>
        <div className="container">
          <EditorialReveal>
            <div className="craft-grid">
              <div>
                <Eyebrow withRule>The Craft</Eyebrow>
                <Heading as="h2" level="lg" style={{ marginTop: "1.25rem" }}>
                  From London to Jakarta.
                </Heading>
                <div className="body-editorial" style={{ marginTop: "1.5rem", maxWidth: "54ch" }}>
                  <p>
                    Chef Yosua Ekajaya trained at Le Cordon Bleu London and graduated as a professional pâtissier
                    in 2016. The atelier in Petamburan is the kitchen he chose to build — a craftsman's kitchen,
                    held at a craftsman's scale.
                  </p>
                  <p>
                    Arkamaya partners with TWG Tea Indonesia on programmatic pairings — most recently Jakarta Dessert
                    Week. The pairings are chosen by interval, not adjacency.
                  </p>
                </div>
                <div style={{ marginTop: "2rem" }}>
                  <Button href="/the-craft" variant="secondary">
                    Read the full story <span aria-hidden>→</span>
                  </Button>
                </div>
              </div>

              <figure style={{ alignSelf: "stretch", display: "flex", alignItems: "stretch" }}>
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "4 / 5",
                    background: "var(--bg-butter)",
                    border: "1px solid var(--hairline)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "2.5rem",
                    position: "relative",
                  }}
                >
                  <RegistrationMark size={18} style={{ position: "absolute", top: "1rem", left: "1rem", color: "var(--ink-espresso)" }} />
                  <RegistrationMark size={18} style={{ position: "absolute", bottom: "1rem", right: "1rem", color: "var(--ink-espresso)" }} />
                  <div style={{ width: "100%" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                      <div style={{ aspectRatio: "1 / 1" }}>
                        <SectionViewClient />
                      </div>
                      <div style={{ aspectRatio: "1 / 1" }}>
                        <SectionViewClientB />
                      </div>
                      <div style={{ aspectRatio: "1 / 1" }}>
                        <SectionViewClientC />
                      </div>
                      <div style={{ aspectRatio: "1 / 1" }}>
                        <SectionViewClientD />
                      </div>
                    </div>
                    <div style={{ marginTop: "1.25rem", textAlign: "center" }} className="specimen-label">
                      VI Strata Essentiae — Studio Plate
                    </div>
                  </div>
                </div>
              </figure>
            </div>
          </EditorialReveal>
        </div>
        <style>{`
          .craft-grid { display: grid; grid-template-columns: 1fr; gap: 3rem; align-items: center; }
          @media (min-width: 1024px) { .craft-grid { grid-template-columns: 1.05fr 1fr; gap: 5rem; } }
        `}</style>
      </section>

      {/* =====================  Journal preview  ===================== */}
      <section className="section">
        <div className="container">
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", marginBottom: "3rem" }}>
            <div>
              <Eyebrow withRule>From the Journal</Eyebrow>
              <Heading as="h2" level="lg" style={{ marginTop: "1.25rem" }}>
                Notes, method, and recent occupations.
              </Heading>
            </div>
            <Link href="/journal" className="btn btn--ghost">All entries <span aria-hidden>→</span></Link>
          </div>

          <HairlineRule style={{ marginBottom: "3rem" }} />

          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2.5rem" }} className="journal-preview-grid">
            {latest.map((entry, i) => (
              <EditorialReveal key={entry.slug} delay={i * 80}>
                <Link href={`/journal/${entry.slug}`} style={{ display: "block" }}>
                  <div className="specimen-label">{entry.category} · {entry.readTime}</div>
                  <h3 className="h-display-md" style={{ marginTop: "0.85rem", marginBottom: "0.85rem", lineHeight: 1.15 }}>{entry.title}</h3>
                  <p className="body-editorial">{entry.dek}</p>
                  <HairlineRule width="short" style={{ marginTop: "1.5rem" }} />
                </Link>
              </EditorialReveal>
            ))}
          </div>
          <style>{`
            @media (min-width: 900px) {
              .journal-preview-grid { grid-template-columns: repeat(3, 1fr); gap: 2.5rem; }
            }
          `}</style>
        </div>
      </section>

      {/* =====================  Education tease  ===================== */}
      <section className="section section--snug">
        <div className="container">
          <div className="edu-banner">
            <div>
              <Eyebrow muted>Sister Atelier</Eyebrow>
              <p className="edu-banner__title" style={{ marginTop: "0.85rem" }}>
                For those who would learn the craft — <em>Arkamaya Culinary Education</em>.
              </p>
              <p className="body-editorial" style={{ marginTop: "1rem", maxWidth: "52ch" }}>
                Workshops, intensives, and consultations on pâtisserie technique, run from the same kitchen.
              </p>
            </div>
            <a
              className="btn btn--secondary edu-banner__cta"
              href="https://instagram.com/arkamaya.culinaryeducation"
              target="_blank" rel="noopener noreferrer"
            >
              Visit education arm <span aria-hidden>↗</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

/* ---- Inline small section views for the Craft figure ---- */
import SectionView from "@/components/SectionView";

function SectionViewClient()  { return <SectionView form="concentrica"  palette="burnt" />; }
function SectionViewClientB() { return <SectionView form="stratificata" palette="burnt" />; }
function SectionViewClientC() { return <SectionView form="cupola"       palette="gold"  />; }
function SectionViewClientD() { return <SectionView form="quadrata"     palette="burgundy" />; }
