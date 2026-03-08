import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {

  const project = projects.find((p) => p.slug === params.slug);

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

      <h1 className="text-4xl font-bold mb-6">{project.title}</h1>

      <p className="text-gray-400 mb-6">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-8">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="text-xs bg-purple-600/20 text-purple-400 px-2 py-1 rounded"
          >
            {tech}
          </span>
        ))}
      </div>

      <p className="text-gray-300 leading-relaxed mb-10">
        {project.content}
      </p>

      <div className="flex gap-6">
        <a
          href={project.github}
          target="_blank"
          className="text-purple-400 hover:underline"
        >
          GitHub
        </a>

        <a
          href={project.demo}
          target="_blank"
          className="text-purple-400 hover:underline"
        >
          Live Demo
        </a>
      </div>

    </main>
  );
}
