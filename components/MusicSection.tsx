
"use client";
import { useEffect, useState, useRef } from "react";
import MusicVisualizer from "./MusicVisualizer";
import Image from "next/image";

export default function MusicSection() {
  const [inView, setInView] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    const target = document.getElementById("floating-elements");
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    setMousePosition({ x, y });
  };

  const projects = [
    {
      title: "Goo Tai Shi",
      image: "/images/work1.jpg",
      url: "https://soundcloud.com/user-491313578/oxy-x-capn-nemo-goo-tai-shi",
      description: "Electronic fusion with traditional elements",
    },
    {
      title: "Visual Performance",
      image: "/images/work2.png",
      url: "https://www.instagram.com/p/DDzUzVUpgCi/?hl=en",
      description: "Live audio-visual performance",
    },
    {
      title: "Music Video",
      image: "/images/work3.png",
      url: "https://www.youtube.com/watch?v=40HaficdHug&ab_channel=Nemo",
      description: "Experimental visual narrative",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="music"
      className="relative w-full min-h-screen bg-[#fff2e5] px-6 md:px-12 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#ff2e2e33] via-[#ffbe69aa] to-[#ff2e2e33] opacity-60 animate-gradient-x z-0 mix-blend-multiply pointer-events-none" />
      
      <h2 className="relative z-20 mt-10 text-5xl md:text-6xl font-bold font-[Cormorant_Garamond] italic text-center mb-24 tracking-wide text-[#ff2e2e] drop-shadow-[0_2px_6px_rgba(255,46,46,0.5)] transition-all duration-700 hover:scale-110">
        My Sound And Vision
      </h2>

      <div className="max-w-4xl mx-auto relative z-20 mb-24">
        <MusicVisualizer />
      </div>

      <div 
        id="floating-elements"
        className="relative z-30 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4"
        style={{
          transform: `perspective(1000px) rotateX(${mousePosition.y * 2}deg) rotateY(${mousePosition.x * 2}deg)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative transform transition-all duration-500 hover:scale-105 hover:z-30 ${
              inView ? 'animate-float-in opacity-100' : 'opacity-0'
            }`}
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <div className="relative bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden shadow-2xl border border-white/20">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold text-[#ff2e2e] mb-2">{project.title}</h3>
                <p className="text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.description}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>

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
