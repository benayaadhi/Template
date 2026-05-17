import Link from "next/link";
import { PHONE_DISPLAY, WA_NUMBER, waLink, inquireMessage } from "@/lib/wa";

export default function Footer() {
  return (
    <footer className="foot">
      <div className="foot__masthead" aria-hidden>ARKAMAYA</div>

      <div className="container">
        <div className="foot__cols">
          <div className="foot__col">
            <h4>Atelier</h4>
            <p>Jl. Jend Gatot Subroto Kav. 51–52</p>
            <p>Ruko A9 Petamburan, Slipi</p>
            <p>Jakarta Pusat 10260</p>
          </div>

          <div className="foot__col">
            <h4>Hours</h4>
            <p>Tuesday — Saturday</p>
            <p>09:00 — 18:00 WIB</p>
            <p style={{ marginTop: "0.85rem", fontStyle: "italic" }}>Lead time H-3, made fresh.</p>
          </div>

          <div className="foot__col">
            <h4>Contact</h4>
            <a href={waLink(inquireMessage("an entremet"))} target="_blank" rel="noopener noreferrer">
              WhatsApp · {PHONE_DISPLAY}
            </a>
            <a href={`tel:+${WA_NUMBER}`}>Telephone</a>
            <a href="mailto:atelier@arkamaya.example">atelier@arkamaya.example</a>
          </div>

          <div className="foot__col">
            <h4>Elsewhere</h4>
            <a href="https://instagram.com/arkamaya.artisancakery" target="_blank" rel="noopener noreferrer">
              @arkamaya.artisancakery
            </a>
            <a href="https://instagram.com/arkamaya.culinaryeducation" target="_blank" rel="noopener noreferrer">
              @arkamaya.culinaryeducation
            </a>
            <Link href="/journal">Journal</Link>
            <Link href="/the-craft">The Craft</Link>
          </div>
        </div>

        <div className="foot__disclaimer">
          <span>© MMXXVI · Studio Plate № 01</span>
          <span>Speculative design study. Not affiliated with or endorsed by Arkamaya Artisan Cakery.</span>
          <span>v0.1</span>
        </div>
      </div>
    </footer>
  );
}
