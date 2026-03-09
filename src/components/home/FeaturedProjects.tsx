import ProjectCard from "./ProjectCard";
import Reveal from "@/components/ui/Reveal";
import { FEATURED_PROJECTS_LIMIT, projects } from "@/data/projects";
import Link from "next/link";

export default function FeaturedProjects() {
  const featuredProjects = projects.slice(0, FEATURED_PROJECTS_LIMIT);
  const showViewAll = projects.length > FEATURED_PROJECTS_LIMIT;

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </Reveal>

      {showViewAll && (
        <Reveal delay={0.12}>
          <div className="mt-10 flex justify-center">
            <Link
              href="/projects"
              className="rounded-lg border border-[var(--app-brand)]/40 bg-[var(--app-brand-soft)] px-6 py-3 text-sm font-medium text-[var(--app-brand)] hover:bg-[var(--app-brand-soft)]/80"
            >
              View All Projects
            </Link>
          </div>
        </Reveal>
      )}
    </section>
  );
}
