"use client";
import { useEffect, useState } from "react";
import MusicVisualizer from "./MusicVisualizer";
import Image from "next/image";

export default function MusicSection() {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    const target = document.getElementById("floating-elements");
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  return (
    <section
      id="music"
      className="relative w-full min-h-screen bg-[#fff2e5] text-black px-6 md:px-12 overflow-hidden flex flex-col items-center justify-center"
    >
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#fdf6ec] via-[#fef3e6] to-transparent z-10 pointer-events-none" />

      <h2 className="mt-10 text-5xl md:text-6xl font-bold font-[Cormorant_Garamond] italic text-center z-20 mb-24 tracking-wide text-[#ff2e2e] drop-shadow-[0_2px_6px_rgba(255,46,46,0.5)] transition-transform duration-700 hover:scale-110">
        My Sound And Vision
      </h2>

      <div className="max-w-4xl w-full relative z-20">
        <MusicVisualizer />
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-[#ff2e2e33] via-[#ffbe69aa] to-[#ff2e2e33] opacity-60 animate-gradient-x z-0 mix-blend-multiply pointer-events-none">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_500px_at_50%_50%,rgba(255,46,46,0.1),transparent)] animate-pulse-slow"></div>
        <div className="absolute w-full h-full bg-[radial-gradient(circle_400px_at_80%_20%,rgba(255,190,105,0.15),transparent)] animate-pulse-slower"></div>
      </div>

      <div
        id="floating-elements"
        className={`absolute z-30 flex space-x-16 justify-center top-1/2 transform -translate-y-1/2 transition-all duration-1000 ease-in-out ${
          inView ? "animate-float-in" : ""
        }`}
      >
        {/* Floating Image 1 */}
        <a
          href="https://soundcloud.com/user-491313578/oxy-x-capn-nemo-goo-tai-shi"
          className="group relative w-52 h-52 bg-gradient-to-r from-[#ff2e2e] via-[#ffbe69] to-[#ff2e2e] rounded-2xl overflow-hidden shadow-[0_8px_32px_-4px_rgba(255,46,46,0.5)] hover:shadow-[0_24px_64px_-8px_rgba(255,46,46,0.8)] hover:scale-110 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] transform hover:rotate-6 backdrop-blur-xl bg-opacity-50 border-4 border-white/30 hover:border-white/50 animate-pulse-slow"
        >
          <Image
            src="/images/work1.jpg"
            alt="Work 1"
            width={192}
            height={192}
            className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-300"
          />
          <div className="absolute inset-0 bg-[#ff2e2e] opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
        </a>

        {/* Floating Image 2 */}
        <a
          href="https://www.instagram.com/p/DDzUzVUpgCi/?hl=en"
          className="group relative w-52 h-52 bg-gradient-to-r from-[#ffbe69] via-[#ff2e2e] to-[#ffbe69] rounded-2xl overflow-hidden shadow-[0_8px_32px_-4px_rgba(255,190,105,0.5)] hover:shadow-[0_24px_64px_-8px_rgba(255,190,105,0.8)] hover:scale-110 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] transform hover:rotate-6 backdrop-blur-xl bg-opacity-50 border-4 border-white/30 hover:border-white/50 animate-pulse-slow"
        >
          <Image
            src="/images/work2.png"
            alt="Work 2"
            width={192}
            height={192}
            className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-300"
          />
          <div className="absolute inset-0 bg-[#ffbe69] opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
        </a>

        {/* Floating Image 3 */}
        <a
          href="https://www.youtube.com/watch?v=40HaficdHug&ab_channel=Nemo"
          className="group relative w-52 h-52 bg-gradient-to-r from-[#ff2e2e] via-[#ffbe69] to-[#ff2e2e] rounded-2xl overflow-hidden shadow-[0_8px_32px_-4px_rgba(255,46,46,0.5)] hover:shadow-[0_24px_64px_-8px_rgba(255,46,46,0.8)] hover:scale-110 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] transform hover:rotate-6 backdrop-blur-xl bg-opacity-50 border-4 border-white/30 hover:border-white/50 animate-pulse-slow"
        >
          <Image
            src="/images/work3.png"
            alt="Work 3"
            width={192}
            height={192}
            className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-300"
          />
          <div className="absolute inset-0 bg-[#ff2e2e] opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
        </a>
      </div>

      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="w-full h-full bg-gradient-radial from-[#ff2e2e33] via-transparent to-transparent animate-pulse blur-3xl mix-blend-screen"></div>
      </div>

      <div className="absolute inset-0 bg-[url('/textures/noise.png')] opacity-10 mix-blend-overlay pointer-events-none z-0" />

      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 opacity-40 transition-opacity duration-1000 ease-in-out hover:opacity-70 mix-blend-color-dodge z-0 pointer-events-none" />

      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#fdf6f0] via-[#fdf6f0]/80 to-transparent z-10 pointer-events-none"></div>

      <button 
        onClick={() => document.getElementById('tech')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 group animate-bounce"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[#ff2e2e] text-sm font-medium opacity-80">Technical Projects</span>
          <div className="w-8 h-8 rounded-full border-2 border-[#ff2e2e] flex items-center justify-center group-hover:scale-110 transition-transform">
            <svg className="w-4 h-4 text-[#ff2e2e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </button>
    </section>
  );
}