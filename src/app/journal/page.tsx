import Link from "next/link";
import { Eyebrow, HairlineRule, Heading } from "@/components/primitives";
import { journal } from "@/data/journal";

export const metadata = { title: "Journal" };

function fmtDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" });
}

export default function JournalIndex() {
  return (
    <main>
      <div className="container page-head">
        <Eyebrow withRule>Studio Notes · Journal</Eyebrow>
        <Heading as="h1" level="xl" className="page-head__title">Journal.</Heading>
        <p className="body-editorial page-head__lede">
          Method, partners, and the occasional argument about lead time. Edited from the studio in Petamburan.
        </p>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: "70rem" }}>
          <ul style={{ listStyle: "none", borderTop: "1px solid var(--hairline)" }}>
            {journal.map((entry) => (
              <li key={entry.slug} style={{ borderBottom: "1px solid var(--hairline)" }}>
                <Link href={`/journal/${entry.slug}`} style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1rem", padding: "2.5rem 0" }}>
                  <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }} className="specimen-label">
                    <span>{fmtDate(entry.date)}</span>
                    <span>· {entry.category}</span>
                    <span>· {entry.readTime}</span>
                  </div>
                  <h2 className="h-display-md" style={{ lineHeight: 1.15 }}>{entry.title}</h2>
                  <p className="h-serif-italic" style={{ maxWidth: "60ch" }}>{entry.dek}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginTop: "0.5rem" }}>
                    <HairlineRule width="short" />
                    <span className="specimen-label">Read the entry →</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
