import Link from "next/link";
import { notFound } from "next/navigation";
import EditorialReveal from "@/components/EditorialReveal";
import { Eyebrow, HairlineRule, RegistrationMark } from "@/components/primitives";
import { getEntry, journal } from "@/data/journal";

export function generateStaticParams() {
  return journal.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = getEntry(slug);
  if (!entry) return {};
  return { title: entry.title, description: entry.dek };
}

function fmtDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" });
}

export default async function JournalEntry({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = getEntry(slug);
  if (!entry) notFound();

  return (
    <main>
      <div className="container" style={{ paddingTop: "8rem" }}>
        <Link href="/journal" className="specimen-label" style={{ textDecoration: "none" }}>
          ← Journal
        </Link>
      </div>

      <article className="section">
        <div className="container">
          <div className="article">
            <Eyebrow withRule>{entry.category}</Eyebrow>
            <h1 className="h-display-lg" style={{ marginTop: "1.25rem", lineHeight: 1.1 }}>{entry.title}</h1>
            <p className="h-serif-italic" style={{ marginTop: "1.25rem" }}>{entry.dek}</p>

            <div className="article__meta" style={{ marginTop: "2rem" }}>
              <span>{fmtDate(entry.date)}</span>
              <span>·</span>
              <span>{entry.readTime}</span>
            </div>

            <HairlineRule style={{ marginTop: "2rem", marginBottom: "3rem" }} />

            <div className="article__body">
              {entry.body.map((p, i) => (
                <EditorialReveal key={i} delay={i * 60}>
                  <p>{p}</p>
                </EditorialReveal>
              ))}
            </div>

            <div style={{ marginTop: "4rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <RegistrationMark size={18} />
              <span className="specimen-label">End of entry</span>
              <HairlineRule width="short" />
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
