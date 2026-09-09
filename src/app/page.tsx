import { About } from "@/components/about";
import { CommercialExperience } from "@/components/commercial-experience";
import { Hero } from "@/components/hero";
import { MobileSectionNav } from "@/components/mobile-section-nav";
import { Projects } from "@/components/projects";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <div id="top" className="flex min-h-full flex-1 flex-col pb-24 sm:pb-0">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
        <CommercialExperience />
      </main>
      <SiteFooter />
      <MobileSectionNav />
    </div>
  );
}
