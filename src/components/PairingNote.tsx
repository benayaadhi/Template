import { Eyebrow, HairlineRule } from "./primitives";

interface Props {
  tea: string;
  note: string;
}

export default function PairingNote({ tea, note }: Props) {
  return (
    <aside style={{ padding: "2rem 0", borderTop: "1px solid var(--hairline)", borderBottom: "1px solid var(--hairline)" }}>
      <Eyebrow muted withRule>Pairing Note</Eyebrow>
      <p
        className="h-serif-italic"
        style={{ marginTop: "1rem", maxWidth: "52ch" }}
      >
        {note}
      </p>
      <div style={{ marginTop: "1rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
        <HairlineRule width="short" />
        <span className="specimen-label">In dialogue with — {tea}</span>
      </div>
    </aside>
  );
}
