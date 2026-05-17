import { notFound } from "next/navigation";
import Link from "next/link";
import SectionView from "@/components/SectionView";
import CakeCard from "@/components/CakeCard";
import InquireButton from "@/components/InquireButton";
import PairingNote from "@/components/PairingNote";
import EditorialReveal from "@/components/EditorialReveal";
import { Eyebrow, HairlineRule, Heading, RegistrationMark } from "@/components/primitives";
import { cakes, fmtIDR, getCake, relatedCakes } from "@/data/cakes";

export function generateStaticParams() {
  return cakes.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cake = getCake(slug);
  if (!cake) return {};
  return {
    title: `${cake.name} — ${cake.plate}`,
    description: cake.description,
  };
}

export default async function CakeDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cake = getCake(slug);
  if (!cake) notFound();

  const related = relatedCakes(slug, 3);

  return (
    <main>
      <div className="container" style={{ paddingTop: "7rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <Link href="/collection" className="specimen-label" style={{ textDecoration: "none" }}>
            ← Catalogue · The Collection
          </Link>
          <span className="specimen-label">{cake.plate} · Forma {capitalise(cake.form)}</span>
        </div>
        <HairlineRule style={{ marginTop: "1.5rem" }} />
      </div>

      <section className="detail">
        <div className="container">
          <div className="detail__grid">
            {/* Gallery */}
            <div className="detail__gallery">
              <div className="detail__gallery-main">
                <div style={{ width: "70%", height: "70%", padding: "1.5rem" }}>
                  <SectionView form={cake.form} palette={cake.palette} />
                </div>
              </div>
              <div className="detail__gallery-row">
                <div className="detail__gallery-thumb">
                  <div style={{ width: "70%", height: "70%" }}>
                    <SectionView form={cake.form} palette="neutral" showTicks={false} />
                  </div>
                </div>
                <div className="detail__gallery-thumb">
                  <div style={{ width: "70%", height: "70%" }}>
                    <SectionView form={cake.form} palette="gold" showTicks={false} />
                  </div>
                </div>
                <div className="detail__gallery-thumb">
                  <div style={{ width: "70%", height: "70%" }}>
                    <SectionView form={cake.form} palette="burgundy" showTicks={false} />
                  </div>
                </div>
              </div>
              <p className="specimen-label" style={{ marginTop: "0.5rem" }}>
                Section study — palette variations
              </p>
            </div>

            {/* Info */}
            <div className="detail__info">
              <div>
                <Eyebrow withRule>Specimen · {cake.plate}</Eyebrow>
                <h1 className="detail__name" style={{ marginTop: "1rem" }}>{cake.name}</h1>
                <p className="h-serif-italic" style={{ marginTop: "0.75rem" }}>{cake.description}</p>
              </div>

              <p className="detail__inspiration">{cake.inspiration}</p>

              <div className="detail__list">
                <div className="detail__row"><span>Lead time</span><span>{cake.leadTime} — made fresh</span></div>
                <div className="detail__row"><span>Flavor notes</span><span>{cake.flavorNotes.join(" · ")}</span></div>
                <div className="detail__row"><span>Occasion</span><span>{cake.occasions.join(" · ")}</span></div>
                <div className="detail__row"><span>Profile</span><span>{cake.flavors.join(" · ")}</span></div>
              </div>

              <div>
                <Eyebrow muted>Sizes</Eyebrow>
                <div style={{ marginTop: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {cake.sizes.map((s) => (
                    <div
                      key={s.label}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "baseline",
                        padding: "0.85rem 0",
                        borderBottom: "1px solid var(--hairline)",
                      }}
                    >
                      <span className="caption">{s.label}</span>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.95rem", letterSpacing: "0.04em" }}>{fmtIDR(s.price)}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="cluster" style={{ marginTop: "1rem" }}>
                <InquireButton cakeName={cake.name} />
                <Link href="/collection" className="btn btn--ghost">Back to the collection</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section view — the breakdown */}
      <section className="section" style={{ background: "var(--bg-light)", borderTop: "1px solid var(--hairline)", borderBottom: "1px solid var(--hairline)" }}>
        <div className="container">
          <EditorialReveal>
            <div className="strata-grid">
              <div>
                <Eyebrow withRule>The Section View</Eyebrow>
                <Heading as="h2" level="md" style={{ marginTop: "1.25rem", maxWidth: "20ch" }}>
                  Read from the top — the cake makes its argument at the centre.
                </Heading>
                <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {cake.layers.map((l, i) => (
                    <div key={i} style={{ display: "grid", gridTemplateColumns: "3.5rem 1fr", gap: "1.5rem", padding: "0.85rem 0", borderBottom: "1px solid var(--hairline)" }}>
                      <span className="specimen-label">Pl.&nbsp;{String(i + 1).padStart(2, "0")}</span>
                      <div>
                        <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.0625rem" }}>{l.name}</div>
                        {l.note ? <div className="caption muted" style={{ marginTop: "0.15rem" }}>{l.note}</div> : null}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <figure style={{ background: "var(--bg-butter)", border: "1px solid var(--hairline)", padding: "2rem", position: "relative", aspectRatio: "1 / 1", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <RegistrationMark size={18} style={{ position: "absolute", top: "1rem", left: "1rem" }} />
                <RegistrationMark size={18} style={{ position: "absolute", bottom: "1rem", right: "1rem" }} />
                <div style={{ width: "85%", height: "85%" }}>
                  <SectionView form={cake.form} palette={cake.palette} />
                </div>
              </figure>
            </div>
            <style>{`
              .strata-grid { display: grid; grid-template-columns: 1fr; gap: 3rem; align-items: start; }
              @media (min-width: 1024px) { .strata-grid { grid-template-columns: 1fr 1fr; gap: 5rem; } }
            `}</style>
          </EditorialReveal>
        </div>
      </section>

      {/* Pairing */}
      {cake.pairing ? (
        <section className="section section--snug">
          <div className="container" style={{ maxWidth: "64rem" }}>
            <PairingNote tea={cake.pairing.tea} note={cake.pairing.note} />
          </div>
        </section>
      ) : null}

      {/* Related */}
      <section className="section">
        <div className="container">
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", marginBottom: "2.5rem" }}>
            <Eyebrow withRule>Adjacent in the Catalogue</Eyebrow>
            <Link href="/collection" className="btn btn--ghost">View all <span aria-hidden>→</span></Link>
          </div>
          <HairlineRule style={{ marginBottom: "3rem" }} />
          <div className="asym-grid">
            {related.map((c) => (
              <CakeCard key={c.slug} cake={c} span={4} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function capitalise(s: string) { return s.charAt(0).toUpperCase() + s.slice(1); }
