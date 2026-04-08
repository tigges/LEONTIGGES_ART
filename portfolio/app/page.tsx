import Image from "next/image";
import Link from "next/link";
import HeroSlideshow from "@/components/HeroSlideshow";
import ContactForm from "@/components/ContactForm";
import { projects } from "@/lib/projects";

export default function HomePage() {
  return (
    <>
      <HeroSlideshow />

      {/* Selected Work Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-baseline justify-between mb-12">
          <h2 className="text-2xl font-light tracking-tight text-neutral-900">
            Selected Work
          </h2>
          <Link
            href="/archive"
            className="text-xs tracking-[0.15em] uppercase text-neutral-400 hover:text-neutral-900 transition-colors"
          >
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link key={project.slug} href={`/project/${project.slug}`} className="group block">
              <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100">
                <Image
                  src={project.heroImage}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="mt-4 mb-8">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-sm font-medium text-neutral-900">{project.title}</h3>
                  <span className="text-xs text-neutral-400">{project.year}</span>
                </div>
                <p className="text-xs text-neutral-500 mt-1 tracking-wide uppercase">
                  {project.category}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-neutral-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-light tracking-tight text-neutral-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-neutral-500 text-sm leading-relaxed mb-8 max-w-md">
                Interested in collaboration, commissions, or just want to say
                hello? I&apos;d love to hear from you.
              </p>
              <div className="space-y-3">
                <a
                  href="mailto:hello@example.com"
                  className="block text-sm text-neutral-900 hover:text-neutral-500 transition-colors"
                >
                  hello@example.com
                </a>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
