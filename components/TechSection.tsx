
"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  githubUrl: string;
  techs: string[];
}

export default function TechSection() {
  const projects: Project[] = [
    {
      title: "Project Alpha",
      description: "A modern web application built with React and TypeScript",
      githubUrl: "https://github.com/yourusername/project-alpha",
      techs: ["React", "TypeScript", "Node.js"]
    },
    {
      title: "Beta Framework",
      description: "Lightweight framework for building scalable applications",
      githubUrl: "https://github.com/yourusername/beta-framework",
      techs: ["Python", "FastAPI", "PostgreSQL"]
    },
    {
      title: "Gamma Tools",
      description: "Collection of developer productivity tools",
      githubUrl: "https://github.com/yourusername/gamma-tools",
      techs: ["JavaScript", "Docker", "AWS"]
    }
  ];

  return (
    <section id="tech" className="relative min-h-screen bg-[#fdf6f0] py-32 px-6 overflow-hidden">
      {/* Top gradient transition */}
      <div className="absolute -top-32 left-0 w-full h-64 bg-gradient-to-b from-transparent via-[#fdf6f0]/50 to-[#fdf6f0] z-10 pointer-events-none" />
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#ff2e2e10] via-[#ffbe6910] to-[#ff2e2e10] opacity-70" />
      <div className="absolute w-[40rem] h-[40rem] bg-[#ffbe69] opacity-5 rounded-full -top-40 -left-40 blur-3xl animate-pulse-slow" />
      <div className="absolute w-[30rem] h-[30rem] bg-[#ff2e2e] opacity-5 rounded-full -bottom-20 -right-20 blur-3xl animate-pulse-slow" />
      <div className="absolute w-[35rem] h-[35rem] bg-[#ff8fa3] opacity-5 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-3xl animate-pulse-slow" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-24 font-[Cormorant_Garamond] italic tracking-wide text-[#ff2e2e] drop-shadow-[0_2px_6px_rgba(255,46,46,0.5)] transition-all duration-700 hover:scale-105">
          Technical Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group perspective-1000"
            >
              <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(255,46,46,0.2)] hover:border-[#ff2e2e20] transform-gpu hover:-translate-y-2 hover:scale-[1.02] group-hover:rotate-1">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.07] to-transparent rounded-2xl" />
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-4 text-[#ff2e2e] font-[Cormorant_Garamond] tracking-wide group-hover:text-[#d62222] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {project.techs.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 bg-[#ff2e2e10] text-[#ff2e2e] rounded-full text-sm font-medium tracking-wide transition-all duration-300 hover:bg-[#ff2e2e20]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#fdf6f0] via-[#fdf6f0]/50 to-transparent pointer-events-none" />
    </section>
  );
}
