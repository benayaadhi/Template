import * as React from "react";

export type SectionForm =
  | "concentrica"
  | "stratificata"
  | "cupola"
  | "spirale"
  | "quadrata"
  | "composita";

export type SectionPalette = "burnt" | "gold" | "burgundy" | "neutral";

interface Props extends React.SVGAttributes<SVGSVGElement> {
  form: SectionForm;
  palette?: SectionPalette;
  width?: number | string;
  height?: number | string;
  showTicks?: boolean;
}

const COLOR = {
  ink: "#201410",
  cocoa: "#4A2618",
  caramel: "#6B4226",
  burnt: "#B85C2C",
  gold: "#C9A961",
  burgundy: "#6B2737",
  butter: "#F2EAD5",
  light: "#F5E6C8",
  aged: "#EBE0C8",
};

function accentFor(palette: SectionPalette): { fill: string; soft: string } {
  switch (palette) {
    case "burnt":    return { fill: COLOR.burnt,    soft: COLOR.gold };
    case "gold":     return { fill: COLOR.gold,     soft: COLOR.light };
    case "burgundy": return { fill: COLOR.burgundy, soft: COLOR.caramel };
    default:         return { fill: COLOR.caramel,  soft: COLOR.aged };
  }
}

/* ------------------------------------------------------------------ */
/* Individual forms — each draws into a 200x200 viewBox.              */
/* ------------------------------------------------------------------ */

function Concentrica({ palette = "burnt" }: { palette?: SectionPalette }) {
  const { fill } = accentFor(palette);
  const cx = 100, cy = 100;
  return (
    <g>
      {[88, 72, 56, 40, 24].map((r) => (
        <circle key={r} cx={cx} cy={cy} r={r} fill="none" stroke={COLOR.ink} strokeWidth="1" />
      ))}
      <circle cx={cx} cy={cy} r="10" fill={fill} />
    </g>
  );
}

function Stratificata({ palette = "burnt" }: { palette?: SectionPalette }) {
  const { fill, soft } = accentFor(palette);
  // 5 horizontal strata
  const strata = [
    { y: 20, h: 24, fill: fill },
    { y: 44, h: 24, fill: COLOR.cocoa },
    { y: 68, h: 24, fill: soft },
    { y: 92, h: 24, fill: COLOR.aged },
    { y: 116, h: 64, fill: "none" }, // open base
  ];
  return (
    <g>
      <rect x="20" y="20" width="160" height="160" fill="none" stroke={COLOR.ink} strokeWidth="1" />
      {strata.slice(0, 4).map((s, i) => (
        <rect key={i} x="20" y={s.y} width="160" height={s.h} fill={s.fill} stroke={COLOR.ink} strokeWidth="1" />
      ))}
    </g>
  );
}

function Cupola({ palette = "gold" }: { palette?: SectionPalette }) {
  const { fill, soft } = accentFor(palette);
  // dome half-circle plus 4 strata
  return (
    <g>
      {/* base rectangle */}
      <rect x="20" y="100" width="160" height="80" fill="none" stroke={COLOR.ink} strokeWidth="1" />
      {/* dome arc */}
      <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke={COLOR.ink} strokeWidth="1" />
      {/* inner strata in dome */}
      <path d="M 40 100 A 60 60 0 0 1 160 100" fill="none" stroke={COLOR.ink} strokeWidth="1" />
      <path d="M 60 100 A 40 40 0 0 1 140 100" fill={soft} stroke={COLOR.ink} strokeWidth="1" />
      <path d="M 80 100 A 20 20 0 0 1 120 100" fill={fill} stroke={COLOR.ink} strokeWidth="1" />
      {/* stratification line in base */}
      <line x1="20" y1="140" x2="180" y2="140" stroke={COLOR.ink} strokeWidth="1" />
    </g>
  );
}

function Spirale({ palette = "neutral" }: { palette?: SectionPalette }) {
  const { fill } = accentFor(palette);
  // Archimedean spiral
  const cx = 100, cy = 100;
  const points: string[] = [];
  for (let t = 0; t <= 5 * Math.PI; t += 0.05) {
    const r = 4 + t * 5;
    const x = cx + r * Math.cos(t);
    const y = cy + r * Math.sin(t);
    points.push(`${x.toFixed(2)},${y.toFixed(2)}`);
  }
  return (
    <g>
      <circle cx={cx} cy={cy} r="84" fill="none" stroke={COLOR.ink} strokeWidth="1" />
      <polyline points={points.join(" ")} fill="none" stroke={COLOR.ink} strokeWidth="1" />
      <circle cx={cx} cy={cy} r="5" fill={fill} />
    </g>
  );
}

function Quadrata({ palette = "burgundy" }: { palette?: SectionPalette }) {
  const { fill } = accentFor(palette);
  // nested squares
  const sizes = [160, 128, 96, 64, 32];
  return (
    <g>
      {sizes.map((s, i) => {
        const off = (200 - s) / 2;
        return (
          <rect
            key={i}
            x={off} y={off} width={s} height={s}
            fill="none" stroke={COLOR.ink} strokeWidth="1"
          />
        );
      })}
      <rect x="84" y="84" width="32" height="32" fill={fill} />
    </g>
  );
}

function Composita({ palette = "burnt" }: { palette?: SectionPalette }) {
  const { fill, soft } = accentFor(palette);
  // arch on top + striped column below
  return (
    <g>
      {/* arch */}
      <path d="M 60 60 A 40 40 0 0 1 140 60" fill="none" stroke={COLOR.ink} strokeWidth="1" />
      <line x1="60" y1="60" x2="60" y2="80" stroke={COLOR.ink} strokeWidth="1" />
      <line x1="140" y1="60" x2="140" y2="80" stroke={COLOR.ink} strokeWidth="1" />
      <line x1="60" y1="80" x2="140" y2="80" stroke={COLOR.ink} strokeWidth="1" />
      {/* striped column */}
      <rect x="60" y="80"  width="80" height="20" fill={fill}      stroke={COLOR.ink} strokeWidth="1" />
      <rect x="60" y="100" width="80" height="20" fill={COLOR.cocoa} stroke={COLOR.ink} strokeWidth="1" />
      <rect x="60" y="120" width="80" height="20" fill={soft}      stroke={COLOR.ink} strokeWidth="1" />
      <rect x="60" y="140" width="80" height="20" fill={COLOR.cocoa} stroke={COLOR.ink} strokeWidth="1" />
      <rect x="60" y="160" width="80" height="20" fill={COLOR.aged} stroke={COLOR.ink} strokeWidth="1" />
    </g>
  );
}

export default function SectionView({
  form,
  palette = "burnt",
  width = "100%",
  height = "100%",
  showTicks = true,
  className = "",
  ...rest
}: Props) {
  const Body = (() => {
    switch (form) {
      case "concentrica":  return <Concentrica palette={palette} />;
      case "stratificata": return <Stratificata palette={palette} />;
      case "cupola":       return <Cupola palette={palette} />;
      case "spirale":      return <Spirale palette={palette} />;
      case "quadrata":     return <Quadrata palette={palette} />;
      case "composita":    return <Composita palette={palette} />;
    }
  })();

  return (
    <svg
      viewBox="0 0 200 200"
      width={width}
      height={height}
      role="img"
      aria-label={`Section view, forma ${form}`}
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...rest}
    >
      {showTicks ? (
        <g aria-hidden>
          {/* corner ticks */}
          <line x1="0" y1="0" x2="8" y2="0" stroke={COLOR.ink} strokeWidth="1" />
          <line x1="0" y1="0" x2="0" y2="8" stroke={COLOR.ink} strokeWidth="1" />
          <line x1="200" y1="0" x2="192" y2="0" stroke={COLOR.ink} strokeWidth="1" />
          <line x1="200" y1="0" x2="200" y2="8" stroke={COLOR.ink} strokeWidth="1" />
          <line x1="0" y1="200" x2="8" y2="200" stroke={COLOR.ink} strokeWidth="1" />
          <line x1="0" y1="200" x2="0" y2="192" stroke={COLOR.ink} strokeWidth="1" />
          <line x1="200" y1="200" x2="192" y2="200" stroke={COLOR.ink} strokeWidth="1" />
          <line x1="200" y1="200" x2="200" y2="192" stroke={COLOR.ink} strokeWidth="1" />
        </g>
      ) : null}
      {Body}
    </svg>
  );
}
