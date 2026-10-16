import { Navbar } from "@/components/navbar";
import { CursorGlow } from "@/components/ui/cursor-glow";
import { Hero } from "@/components/sections/hero";
import { Work } from "@/components/sections/work";
import { About } from "@/components/sections/about";
import { Stack } from "@/components/sections/stack";
import { Experience } from "@/components/sections/experience";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="grain relative min-h-screen bg-ink">
      <CursorGlow />
      <Navbar />
      <div className="relative z-10">
        <Hero />
        <Work />
        <About />
        <Stack />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
