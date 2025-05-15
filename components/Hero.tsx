"use client";
// import { useEffect } from "react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      console.log(`${sectionId} not found`);
    }
  };

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#fdf6f0] to-[#fbcaca] text-[#a4133c] font-cormorant overflow-hidden">
      {/* Background blobs */}
      <div className="absolute w-96 h-96 bg-[#ff8fa3] opacity-20 rounded-full top-[-80px] left-[-100px] blur-3xl animate-pulse-slow" />
      <div className="absolute w-72 h-72 bg-[#ffccd5] opacity-20 rounded-full bottom-[-60px] right-[-60px] blur-3xl animate-pulse-slow" />
      <div className="absolute w-64 h-64 bg-[#fba0a0] opacity-20 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-3xl animate-pulse-slow" />

      {/* Hero content */}
      <div className="z-10 text-center px-6">
        <h1 className="text-6xl md:text-8xl font-bold drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-r from-[#ff2e2e] to-[#800f2f] animate-gradient-x">Hello, I'm Nemo</h1>
        <p className="mt-4 text-xl font-poppins text-[#800f2f] tracking-wide">
          Here we go
        </p>
        <button
          onClick={() => scrollToSection("about")}
          className="mt-10 px-6 py-3 bg-[#a4133c] text-white rounded-full shadow-md hover:bg-[#800f2f] transition-all text-lg font-semibold tracking-wide"
        >
          Enter
        </button>
      </div>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#fdf6f0] pointer-events-none" />
    </section>
  );
}