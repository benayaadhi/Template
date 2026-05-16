import Nav from "@/components/Nav";
import SceneClient from "@/components/SceneClient";
import { Hero, Features, Story, CTA, Footer } from "@/components/Sections";
import SmoothScroll from "@/lib/SmoothScroll";
import ScrollProgress from "@/lib/ScrollProgress";

export default function Page() {
  return (
    <>
      <SmoothScroll />
      <ScrollProgress />
      <Nav />
      <SceneClient />
      <main>
        <Hero />
        <Features />
        <Story />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
