import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Reveal from "@/components/ui/Reveal";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project",
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return notFound();
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <Reveal>
        <h1 className="text-4xl font-bold mb-6">{project.title}</h1>

        <p className="text-gray-400 mb-6">{project.description}</p>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="flex flex-wrap gap-2 mb-8">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="text-xs bg-[var(--app-brand-soft)] text-[var(--app-brand)] px-2 py-1 rounded"
          >
            {tech}
          </span>
        ))}
        </div>
      </Reveal>

      <Reveal delay={0.12}>
        <p className="text-[var(--app-text)]/90 leading-relaxed mb-10">
          {project.content}
        </p>
      </Reveal>

      <Reveal delay={0.16}>
        <div className="flex gap-6">
        <a
          href={project.github}
          target="_blank"
          className="text-[var(--app-brand)] hover:underline"
        >
          GitHub
        </a>

        <a
          href={project.demo}
          target="_blank"
          className="text-[var(--app-brand)] hover:underline"
        >
          Live Demo
        </a>
        </div>
      </Reveal>

    </main>
  );
}
