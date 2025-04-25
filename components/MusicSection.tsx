"use client";
import { useEffect, useState } from "react";
import MusicVisualizer from "./MusicVisualizer";

export default function MusicSection() {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    // Create an intersection observer to detect when the floating elements come into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true); // Trigger the float-in animation when the elements come into view
          }
        });
      },
      {
        threshold: 0.5, // 50% of the element must be in view for it to trigger the animation
      }
    );

    const target = document.getElementById("floating-elements");
    if (target) {
      observer.observe(target); // Start observing the target
    }

    return () => {
      if (target) {
        observer.unobserve(target); // Clean up the observer
      }
    };
  }, []);

  return (
    <section
      id="music"
      className="relative w-full min-h-screen bg-[#fff2e5] text-black px-6 md:px-12 overflow-hidden flex flex-col items-center justify-center"
    >
      {/* Smooth gradient fade from the previous section */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#fdf6ec] via-[#fef3e6] to-transparent z-10 pointer-events-none" />

      {/* Artistic Title */}
      <h2 className="mt-10 text-5xl md:text-6xl font-bold font-[Cormorant_Garamond] italic text-center z-20 mb-12 tracking-wide text-[#ff2e2e] drop-shadow-[0_2px_6px_rgba(255,46,46,0.5)] transition-transform duration-700 hover:scale-110">
        My Sound And Vision
      </h2>

      {/* Visualizer */}
      <div className="max-w-4xl w-full relative z-20">
        <MusicVisualizer />
      </div>

      {/* Floating Abstract Gradient Layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#ff2e2e33] via-[#ffbe69aa] to-[#ff2e2e33] opacity-60 animate-gradient-x z-0 mix-blend-multiply pointer-events-none" />

      {/* Floating elements in the center with animation triggered by intersection */}
      <div
        id="floating-elements"
        className={`absolute z-30 flex space-x-8 justify-center top-1/2 transform -translate-y-1/2 transition-all duration-1000 ease-in-out ${inView ? "animate-float-in" : ""}`}
      >
        {/* Floating Image 1 */}
        <a
          href="https://soundcloud.com/user-491313578/oxy-x-capn-nemo-goo-tai-shi"
          className="group relative w-48 h-48 bg-gradient-to-r from-[#ff2e2e] via-[#ffbe69] to-[#ff2e2e] rounded-xl overflow-hidden shadow-xl hover:scale-105 transition-all duration-500 ease-in-out transform hover:rotate-3"
        >
          <img
            src="/images/work1.jpg"
            alt="Work 1"
            className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-300"
          />
          <div className="absolute inset-0 bg-[#ff2e2e] opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
        </a>

        {/* Floating Image 2 */}
        <a
          href="https://www.instagram.com/p/DDzUzVUpgCi/?hl=en"
          className="group relative w-48 h-48 bg-gradient-to-r from-[#ffbe69] via-[#ff2e2e] to-[#ffbe69] rounded-xl overflow-hidden shadow-xl hover:scale-105 transition-all duration-500 ease-in-out transform hover:rotate-3"
        >
          <img
            src="/images/work2.png"
            alt="Work 2"
            className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-300"
          />
          <div className="absolute inset-0 bg-[#ffbe69] opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
        </a>

        {/* Floating Image 3 */}
        <a
          href="https://www.youtube.com/watch?v=40HaficdHug&ab_channel=Nemo"
          className="group relative w-48 h-48 bg-gradient-to-r from-[#ff2e2e] via-[#ffbe69] to-[#ff2e2e] rounded-xl overflow-hidden shadow-xl hover:scale-105 transition-all duration-500 ease-in-out transform hover:rotate-3"
        >
          <img
            src="/images/work3.png"
            alt="Work 3"
            className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-300"
          />
          <div className="absolute inset-0 bg-[#ff2e2e] opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
        </a>
      </div>

      {/* Glow aura layer */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="w-full h-full bg-gradient-radial from-[#ff2e2e33] via-transparent to-transparent animate-pulse blur-3xl mix-blend-screen"></div>
      </div>

      {/* Faint texture layer for artsy depth */}
      <div className="absolute inset-0 bg-[url('/textures/noise.png')] opacity-10 mix-blend-overlay pointer-events-none z-0" />

      {/* Color transition glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 opacity-40 transition-opacity duration-1000 ease-in-out hover:opacity-70 mix-blend-color-dodge z-0 pointer-events-none" />

      {/* Soft bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#fff2e5] via-transparent to-transparent z-10"></div>
    </section>
  );
}
