import { Button, Eyebrow, HairlineRule, Heading } from "@/components/primitives";
import { PHONE_DISPLAY, customMessage, inquireMessage, waLink } from "@/lib/wa";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <main>
      <div className="container page-head">
        <Eyebrow withRule>Studio · Contact</Eyebrow>
        <Heading as="h1" level="xl" className="page-head__title">Contact the atelier.</Heading>
        <p className="body-editorial page-head__lede">
          The fastest route is WhatsApp. The studio responds within a working day.
        </p>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: "64rem" }}>
          <HairlineRule />

          <div className="contact-grid">
            <div className="contact-row">
              <div className="specimen-label">Order an entremet</div>
              <div>
                <p className="body-editorial" style={{ marginTop: "0.25rem" }}>
                  WhatsApp opens with a pre-filled enquiry. The kitchen replies with availability for your date.
                </p>
                <div style={{ marginTop: "1.5rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                  <Button href={waLink(inquireMessage("an entremet"))} target="_blank" rel="noopener noreferrer" variant="primary">
                    Order via WhatsApp <span aria-hidden>→</span>
                  </Button>
                  <Button href={waLink(customMessage())} target="_blank" rel="noopener noreferrer" variant="secondary">
                    Custom enquiry
                  </Button>
                </div>
              </div>
            </div>

            <div className="contact-row">
              <div className="specimen-label">Telephone</div>
              <div>
                <p className="body-editorial">{PHONE_DISPLAY}</p>
                <p className="caption muted" style={{ marginTop: "0.25rem" }}>Tue — Sat · 09:00–18:00 WIB</p>
              </div>
            </div>

            <div className="contact-row">
              <div className="specimen-label">Atelier</div>
              <div>
                <p className="body-editorial">Jl. Jend Gatot Subroto Kav. 51–52</p>
                <p className="body-editorial">Ruko A9 Petamburan, Slipi</p>
                <p className="body-editorial">Jakarta Pusat 10260</p>
                <p className="caption muted" style={{ marginTop: "0.5rem" }}>Pickups by appointment only.</p>
              </div>
            </div>

            <div className="contact-row">
              <div className="specimen-label">Media · Partnerships</div>
              <div>
                <a className="body-editorial" href="mailto:atelier@arkamaya.example" style={{ textDecoration: "underline", textUnderlineOffset: "4px" }}>
                  atelier@arkamaya.example
                </a>
                <p className="caption muted" style={{ marginTop: "0.5rem" }}>For editorial, partnership, and event enquiries.</p>
              </div>
            </div>
          </div>

          <HairlineRule />
        </div>
      </section>

      <style>{`
        .contact-grid { display: flex; flex-direction: column; }
        .contact-row {
          display: grid; grid-template-columns: 1fr;
          gap: 1rem;
          padding: 2.5rem 0;
          border-bottom: 1px solid var(--hairline);
        }
        .contact-row:last-child { border-bottom: 0; }
        @media (min-width: 768px) {
          .contact-row { grid-template-columns: 14rem 1fr; gap: 3rem; align-items: start; }
        }
      `}</style>
    </main>
  );
}
