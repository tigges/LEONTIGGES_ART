import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";

export const metadata = {
  title: "Archive — Portfolio",
  description: "All projects",
};

export default function ArchivePage() {
  const categories = Array.from(new Set(projects.map((p) => p.category)));

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="mb-16">
        <h1 className="text-3xl font-light tracking-tight text-neutral-900 mb-4">
          Archive
        </h1>
        <p className="text-sm text-neutral-500">All work, in reverse chronological order.</p>
      </div>

      {categories.map((category) => (
        <div key={category} className="mb-20">
          <h2 className="text-xs tracking-[0.2em] uppercase text-neutral-400 mb-8 pb-4 border-b border-neutral-100">
            {category}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {projects
              .filter((p) => p.category === category)
              .map((project) => (
                <Link
                  key={project.slug}
                  href={`/project/${project.slug}`}
                  className="group block"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100 mb-3">
                    <Image
                      src={project.heroImage}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-sm font-medium text-neutral-900 group-hover:opacity-60 transition-opacity">
                      {project.title}
                    </h3>
                    <span className="text-xs text-neutral-400 ml-2 shrink-0">
                      {project.year}
                    </span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
