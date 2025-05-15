
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
    <section className="relative min-h-screen bg-[#fdf6f0] py-20 px-6 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#ff2e2e15] via-[#ffbe6915] to-[#ff2e2e15] opacity-60" />
      <div className="absolute w-96 h-96 bg-[#ffbe69] opacity-10 rounded-full -top-20 -left-20 blur-3xl animate-pulse-slow" />
      <div className="absolute w-96 h-96 bg-[#ff2e2e] opacity-10 rounded-full -bottom-20 -right-20 blur-3xl animate-pulse-slow" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 font-[Cormorant_Garamond] italic tracking-wide text-[#ff2e2e] drop-shadow-[0_2px_6px_rgba(255,46,46,0.5)]">
          Technical Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 shadow-xl transition-all duration-500 hover:transform hover:scale-105 hover:rotate-1">
                <h3 className="text-2xl font-bold mb-3 text-[#ff2e2e]">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.techs.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-[#ff2e2e20] text-[#ff2e2e] rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
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
