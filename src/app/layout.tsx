import type { Metadata } from "next";
import { Gloock, Crimson_Pro, Instrument_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/lib/SmoothScroll";

const display = Gloock({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display-stack",
  display: "swap",
});

const serif = Crimson_Pro({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-serif-stack",
  display: "swap",
});

const sans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-sans-stack",
  display: "swap",
});

const mono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono-stack",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://arkamaya.example"),
  title: {
    default: "Arkamaya — Atelier of Sectional Confection",
    template: "%s · Arkamaya",
  },
  description:
    "Arkamaya Artisan Cakery — entremets at Le Cordon Bleu execution standard. A speculative editorial site by way of section drawing.",
  openGraph: {
    title: "Arkamaya — Atelier of Sectional Confection",
    description:
      "Entremets as built objects. A study in the geometry of layered confection.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${serif.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        <SmoothScroll />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
