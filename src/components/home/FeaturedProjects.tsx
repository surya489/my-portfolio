import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";
import Reveal from "@/components/ui/Reveal";

export default function FeaturedProjects() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
        </div>
      </Reveal>
    </section>
  );
}
