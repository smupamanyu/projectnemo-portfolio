"use client";
import React, { useEffect } from "react";
// At the top of your file
import Image from "next/image";

const About = () => {
  const scrollToMusic = () => {
    const musicSection = document.getElementById("music");
    if (musicSection) {
      musicSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    console.log("About section mounted");
  }, []);

  return (
    <section
      id="about"
      className="relative min-h-screen bg-[#fdf6f0] text-[#1e1e1e] px-6 py-20 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Abstract background blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-[#ffbe69] opacity-20 rounded-full top-10 left-[-100px] blur-3xl animate-pulse-slow" />
        <div className="absolute w-72 h-72 bg-[#ff2e2e] opacity-20 rounded-full bottom-20 right-[-60px] blur-3xl animate-pulse-slow" />
      </div>

      {/* Soft bottom gradient for smooth transition */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-[#fdf6ec] z-10 pointer-events-none" />

      {/* Main content with z-index */}
      <div className="max-w-3xl text-center relative z-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-cormorant tracking-wide">
          About Me
        </h2>

        <p className="text-lg md:text-xl leading-relaxed mb-6 font-poppins text-opacity-90">
          Hey, I’m Nemo. I believe we all have a reason, and I believe mine is
          to share what I cherish with the world, for I think that is the way
          to live a life of purpose.
        </p>

        <div className="flex justify-center mb-8">
          {/* Link to Instagram */}
          <a
            href="https://www.instagram.com/icaptainnemo/?hl=en" // Replace with your Instagram profile URL
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/me.jpg"
              alt="Nemo Portrait"
              width={192} // w-48 = 12rem = 192px
              height={192} // h-48 = 12rem = 192px
              className="rounded-full object-cover border-4 border-[#ff2e2e] shadow-xl hover:scale-105 hover:rotate-3 transition-all duration-500 ease-in-out"
            />
          </a>
        </div>

        <button
          onClick={scrollToMusic}
          className="px-6 py-3 mt-4 bg-[#ff2e2e] text-white rounded-xl shadow-md hover:bg-[#d62222] transition-all text-lg font-semibold tracking-wide"
        >
          Explore My Work
        </button>
      </div>
    </section>
  );
};

export default About;
