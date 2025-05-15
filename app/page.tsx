// app/page.tsx
import Hero from "@/components/Hero";
import About from "@/components/About";
import MusicSection from "@/components/MusicSection";
import TechSection from "@/components/TechSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <MusicSection />
      <TechSection />
    </main>
  );
}
