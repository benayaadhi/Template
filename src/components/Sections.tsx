export function Hero() {
  return (
    <section className="hero">
      <div className="container hero-top">
        <span>[01] — HERO</span>
        <span>SCROLL ↓</span>
      </div>
      <div className="container">
        <h1 className="hero-title">
          Building<br />
          interfaces<br />
          in <em>three</em> dimensions.
        </h1>
      </div>
      <div className="container hero-bottom">
        <p>A scrollable 3D template for studios, agencies, and product teams who want depth without the bloat.</p>
        <span>EST. 2026 — REMOTE</span>
      </div>
    </section>
  );
}

const features = [
  { num: "01", title: "Scroll-driven", body: "Every transform is bound to scroll progress. No JS animation loops fighting the user." },
  { num: "02", title: "Lenis smooth", body: "Inertial scrolling that respects accessibility and reduces motion when requested." },
  { num: "03", title: "R3F core", body: "Declarative Three.js. Swap the placeholder mesh for any glTF and keep the choreography." },
  { num: "04", title: "Sticky canvas", body: "One fixed WebGL layer behind every section — no remounts, no jank between scenes." },
  { num: "05", title: "Type-safe", body: "TypeScript end-to-end. Next.js App Router with strict mode on." },
  { num: "06", title: "Themeable", body: "All visual tokens live in CSS variables. Repaint the brand in under a minute." },
];

export function Features() {
  return (
    <section id="work">
      <div className="container">
        <div className="section-label">[02] — FEATURES</div>
        <h2 className="section-heading">A toolkit for scroll-native, 3D-first sites.</h2>
      </div>
      <div className="grid">
        {features.map((f) => (
          <div key={f.num} className="cell">
            <span className="num">{f.num} / 06</span>
            <div>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const steps = [
  { num: "STEP 01", title: "Anchor", body: "The 3D object enters the viewport at rest. Establish presence before motion." },
  { num: "STEP 02", title: "Travel", body: "As you scroll, the camera and mesh drift in opposite directions. Parallax without the cliché." },
  { num: "STEP 03", title: "Reveal", body: "Geometry rotates to expose surface detail. Material reacts to scroll velocity." },
  { num: "STEP 04", title: "Return", body: "Recenter for the call-to-action. The object lands; the page completes its arc." },
];

export function Story() {
  return (
    <section id="process" className="story">
      <div className="story-track">
        <div className="story-spacer" />
        <div className="story-steps">
          {steps.map((s) => (
            <div key={s.num} className="story-step">
              <span className="num">{s.num}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section id="contact">
      <div className="container cta">
        <div className="section-label" style={{ justifyContent: "center" }}>[04] — START</div>
        <h2>Let&apos;s ship<br />something dimensional.</h2>
        <a className="btn" href="mailto:hello@example.com">
          GET IN TOUCH <span aria-hidden>→</span>
        </a>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="container">
        <span>© 2026 STUDIO_3D</span>
        <span>BUILT WITH NEXT · R3F · LENIS · GSAP</span>
        <span>v0.1.0</span>
      </div>
    </footer>
  );
}
