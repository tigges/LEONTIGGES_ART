import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/lib/projects";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Not Found" };
  return {
    title: `${project.title} — Portfolio`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div>
      {/* Hero Image */}
      <div className="relative w-full h-[70vh] min-h-[500px] bg-neutral-100">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* Project Info */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <p className="text-neutral-400 text-xs tracking-[0.2em] uppercase mb-4">
              {project.category} — {project.year}
            </p>
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-neutral-900 mb-8">
              {project.title}
            </h1>
            <p className="text-neutral-600 text-base leading-relaxed max-w-2xl">
              {project.fullDescription}
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-xs tracking-[0.15em] uppercase text-neutral-400 mb-2">
                Category
              </p>
              <p className="text-sm text-neutral-900">{project.category}</p>
            </div>
            <div>
              <p className="text-xs tracking-[0.15em] uppercase text-neutral-400 mb-2">
                Year
              </p>
              <p className="text-sm text-neutral-900">{project.year}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      {project.images.length > 1 && (
        <div className="max-w-7xl mx-auto px-6 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.images.slice(1).map((img, i) => (
              <div
                key={i}
                className={`relative overflow-hidden bg-neutral-100 ${
                  project.images.length - 1 === 1 ? "md:col-span-2 aspect-[16/9]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={img}
                  alt={`${project.title} — image ${i + 2}`}
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Next Project */}
      <div className="border-t border-neutral-100">
        <Link
          href={`/project/${nextProject.slug}`}
          className="group flex items-center justify-between max-w-7xl mx-auto px-6 py-12"
        >
          <div>
            <p className="text-xs tracking-[0.15em] uppercase text-neutral-400 mb-2">
              Next Project
            </p>
            <h3 className="text-2xl font-light text-neutral-900 group-hover:opacity-60 transition-opacity">
              {nextProject.title}
            </h3>
          </div>
          <span className="text-neutral-400 group-hover:translate-x-1 transition-transform text-xl">
            →
          </span>
        </Link>
      </div>
    </div>
  );
}
