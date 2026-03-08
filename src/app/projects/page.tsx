import ProjectCard from "@/components/home/ProjectCard";
import { projects } from "@/data/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore projects built by Jayasurya using React, Next.js, JavaScript, and modern web technologies.",
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      
      {/* Page Title */}
      <div className="mb-16">
        <h1 className="text-4xl font-bold mb-4">Projects</h1>

        <p className="text-gray-400 max-w-xl">
          A collection of projects I’ve worked on, ranging from full-stack
          applications to frontend-focused experiences built with modern
          technologies.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>

    </main>
  );
}