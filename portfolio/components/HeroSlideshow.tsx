"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { projects } from "@/lib/projects";

const heroProjects = projects.slice(0, 5);

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % heroProjects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[85vh] min-h-[600px] bg-neutral-100 overflow-hidden">
      {heroProjects.map((project, i) => (
        <div
          key={project.slug}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            className="object-cover"
            priority={i === 0}
            loading={i === 0 ? "eager" : "lazy"}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        </div>
      ))}

      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-16">
        <div className="max-w-7xl mx-auto">
          <Link href={`/project/${heroProjects[current].slug}`} className="group">
            <p className="text-white/70 text-xs tracking-[0.2em] uppercase mb-2">
              {heroProjects[current].category} — {heroProjects[current].year}
            </p>
            <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-light tracking-tight mb-4 group-hover:opacity-80 transition-opacity">
              {heroProjects[current].title}
            </h2>
            <p className="text-white/60 text-sm md:text-base max-w-xl leading-relaxed">
              {heroProjects[current].description.slice(0, 120)}…
            </p>
          </Link>

          <div className="flex items-center gap-3 mt-8">
            {heroProjects.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-0.5 transition-all duration-500 ${
                  i === current
                    ? "w-10 bg-white"
                    : "w-5 bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
