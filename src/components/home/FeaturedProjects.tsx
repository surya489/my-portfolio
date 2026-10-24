import ProjectCard from "./ProjectCard";
import Reveal from "@/components/ui/Reveal";
import { FEATURED_PROJECTS_LIMIT, projects } from "@/data/projects";
import Link from "next/link";
import { FolderKanban, ArrowRight } from "lucide-react";

export default function FeaturedProjects() {
  const featuredProjects = projects.slice(0, FEATURED_PROJECTS_LIMIT);
  const showViewAll = projects.length > FEATURED_PROJECTS_LIMIT;

  return (
    <section className="mx-auto max-w-6xl px-6 py-20 relative">
      <Reveal>
        <div className="flex flex-col items-start gap-2 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--app-brand)]">
            <FolderKanban className="h-4 w-4" />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--app-text)] tracking-tight">
            Production &amp; Flagship Projects
          </h2>
          <p className="text-[var(--app-muted)] text-base max-w-2xl">
            A selection of live healthcare platforms, high-traffic consumer websites, and developer tools built with Next.js, React, and TypeScript.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </Reveal>

      {showViewAll && (
        <Reveal delay={0.12}>
          <div className="mt-12 flex justify-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--app-brand)]/40 bg-[var(--app-brand-soft)] px-6 py-3.5 text-sm font-semibold text-[var(--app-brand)] hover:bg-[var(--app-brand)] hover:text-white transition-all shadow-sm group"
            >
              <span>View All {projects.length} Projects &amp; Demos</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </Reveal>
      )}
    </section>
  );
}
