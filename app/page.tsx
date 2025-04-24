import Hero from '@/components/Hero';
import About from '@/components/About'; // Import the About section

export default function Home() {
  return (
    <div>
      <Hero />
      <About /> {/* Include the About section here */}
    </div>
  );
}
