"use client";

import { useMemo, useState } from "react";
import CakeCard from "@/components/CakeCard";
import { Eyebrow, HairlineRule, Heading, TagChip } from "@/components/primitives";
import { ALL_FLAVORS, ALL_OCCASIONS, cakes, type Flavor, type Occasion } from "@/data/cakes";

export default function CollectionPage() {
  const [occ, setOcc] = useState<Occasion | "All">("All");
  const [flv, setFlv] = useState<Flavor | "All">("All");

  const list = useMemo(
    () => cakes.filter((c) =>
      (occ === "All" || c.occasions.includes(occ)) &&
      (flv === "All" || c.flavors.includes(flv))
    ),
    [occ, flv]
  );

  // Asymmetric span pattern repeated over the result list
  // pattern: 4,4,4, 6,6, 4,4,4, 8,4
  const spans: (1 | 2 | 3 | 4 | 6)[] = [4, 4, 4, 6, 6, 4, 4, 4, 6, 6, 4, 4];

  return (
    <main>
      <div className="container page-head">
        <Eyebrow withRule>Catalogue № 01 · The Collection</Eyebrow>
        <Heading as="h1" level="xl" className="page-head__title">
          The Collection
        </Heading>
        <p className="body-editorial page-head__lede">
          Twelve entremets, each conceived as a built object. Drawn in section, named in the French feminine.
          Made fresh to order with a three-day lead time.
        </p>
      </div>

      <section className="section section--snug">
        <div className="container">
          <div className="filter-bar">
            <div className="filter-group">
              <span className="filter-group__label">Occasion</span>
              <TagChip active={occ === "All"} onClick={() => setOcc("All")}>All</TagChip>
              {ALL_OCCASIONS.map((o) => (
                <TagChip key={o} active={occ === o} onClick={() => setOcc(o)}>{o}</TagChip>
              ))}
            </div>
            <div className="filter-group">
              <span className="filter-group__label">Flavor profile</span>
              <TagChip active={flv === "All"} onClick={() => setFlv("All")}>All</TagChip>
              {ALL_FLAVORS.map((f) => (
                <TagChip key={f} active={flv === f} onClick={() => setFlv(f)}>{f}</TagChip>
              ))}
            </div>
          </div>

          {list.length === 0 ? (
            <div style={{ padding: "5rem 0", textAlign: "center" }} className="body-editorial">
              No specimens match this combination yet. Try a different pairing of filters.
            </div>
          ) : (
            <div className="asym-grid">
              {list.map((c, i) => (
                <CakeCard
                  key={c.slug}
                  cake={c}
                  span={spans[i % spans.length]}
                  mediaAspect={(spans[i % spans.length] ?? 4) >= 6 ? "wide" : "tall"}
                />
              ))}
            </div>
          )}

          <HairlineRule style={{ marginTop: "5rem" }} />
          <p className="specimen-label" style={{ marginTop: "1rem", textAlign: "right" }}>
            {list.length} of {cakes.length} specimens
          </p>
        </div>
      </section>
    </main>
  );
}
