// Homepage: every section from brief §3.1, in order. It stands alone, so a
// visitor never needs another page to find essential information.
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Ecosystem } from "@/components/Ecosystem";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Expertise } from "@/components/Expertise";
import { Hero } from "@/components/Hero";
import { PersonJsonLd } from "@/components/PersonJsonLd";
import { Products } from "@/components/Products";
import { Purpose } from "@/components/Purpose";
import { Qualifications } from "@/components/Qualifications";
import { Recognition } from "@/components/Recognition";
import { SectionSpy } from "@/components/SectionSpy";
import { Snapshot } from "@/components/Snapshot";
import { Speaking } from "@/components/Speaking";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1}>
      <PersonJsonLd />
      <SectionSpy />
      <Hero />
      <Snapshot />
      <About />
      <Expertise />
      <ExperienceTimeline />
      <Qualifications />
      <Ecosystem />
      <Products />
      <Work />
      <Recognition />
      <Purpose />
      <Speaking />
      <Contact />
    </main>
  );
}
