// app/page.tsx
import Hero from "@/components/Hero";
import About from "@/components/About";
import MusicSection from "@/components/MusicSection"; // Import Music Section

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <MusicSection />
    </main>
  );
}
