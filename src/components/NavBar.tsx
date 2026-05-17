"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { waLink, inquireMessage } from "@/lib/wa";

const LINKS = [
  { href: "/collection", label: "Collection" },
  { href: "/the-craft",  label: "The Craft" },
  { href: "/journal",    label: "Journal" },
  { href: "/contact",    label: "Contact" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <nav className={`nav ${scrolled ? "nav--scrolled" : ""}`} aria-label="Primary">
        <Link href="/" className="nav__brand" aria-label="Arkamaya — home">Arkamaya</Link>

        <ul className="nav__links">
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link href={l.href} aria-current={pathname === l.href || pathname.startsWith(l.href + "/") ? "page" : undefined}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          className="btn btn--secondary nav__cta"
          href={waLink(inquireMessage("an entremet"))}
          target="_blank"
          rel="noopener noreferrer"
        >
          Order via WhatsApp <span aria-hidden>→</span>
        </a>

        <button className="nav__burger" aria-label="Open menu" onClick={() => setOpen(true)}>
          <span /> <span /> <span />
        </button>
      </nav>

      <div className={`nav__overlay ${open ? "nav__overlay--open" : ""}`} aria-hidden={!open}>
        <div className="nav__overlay__top">
          <Link href="/" className="nav__brand">Arkamaya</Link>
          <button className="nav__overlay__close" aria-label="Close menu" onClick={() => setOpen(false)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
              <line x1="4" y1="4" x2="20" y2="20" />
              <line x1="20" y1="4" x2="4" y2="20" />
            </svg>
          </button>
        </div>
        <ul className="nav__overlay__list">
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link href={l.href}>{l.label}</Link>
            </li>
          ))}
          <li style={{ marginTop: "1.5rem" }}>
            <a
              href={waLink(inquireMessage("an entremet"))}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "underline", textUnderlineOffset: "4px" }}
            >
              Order via WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
