import Link from "next/link";
import SectionView from "./SectionView";
import { HairlineRule } from "./primitives";
import { fmtIDR, type Cake } from "@/data/cakes";

interface Props {
  cake: Cake;
  span?: 1 | 2 | 3 | 4 | 6;        // column span in asym grid
  rowSpan?: 1 | 2;
  mediaAspect?: "tall" | "square" | "wide";
}

export default function CakeCard({ cake, span = 4, rowSpan = 1, mediaAspect = "tall" }: Props) {
  const aspect =
    mediaAspect === "square" ? "1 / 1" :
    mediaAspect === "wide"   ? "5 / 4" : "4 / 5";

  return (
    <Link
      href={`/collection/${cake.slug}`}
      className="cake-card"
      style={{ gridColumn: `span ${span}`, gridRow: `span ${rowSpan}` }}
      aria-label={`${cake.name} — view details`}
    >
      <div className="cake-card__media" style={{ aspectRatio: aspect }}>
        <span className="cake-card__plate specimen-label">{cake.plate}</span>
        <div style={{ width: "62%", height: "62%", display: "flex" }}>
          <SectionView form={cake.form} palette={cake.palette} />
        </div>
      </div>
      <HairlineRule className="cake-card__hairline" />
      <div className="cake-card__meta">
        <h3 className="cake-card__name">{cake.name}</h3>
        <p className="cake-card__desc">{cake.description}</p>
        <div className="cake-card__price-row">
          <span>{fmtIDR(cake.sizes[0].price)}</span>
          <span>{cake.leadTime} · made fresh</span>
        </div>
      </div>
    </Link>
  );
}
