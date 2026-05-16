import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Scrollable 3D Template",
  description: "Next.js + React Three Fiber + Lenis + GSAP scroll-driven 3D template",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
