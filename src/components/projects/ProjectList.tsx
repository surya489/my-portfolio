"use client";

import { useMemo, useState } from "react";
import ProjectCard from "@/components/home/ProjectCard";
import { PROJECTS_PER_LOAD, projects } from "@/data/projects";

type ProjectItem = (typeof projects)[number];

type Props = {
  items: ProjectItem[];
  projectsPerLoad?: number;
};

export default function ProjectList({
  items,
  projectsPerLoad = PROJECTS_PER_LOAD,
}: Props) {
  if (!items.length) {
    return (
      <div className="app-card rounded-xl border p-8 text-center">
        <p className="text-lg font-semibold">No projects yet</p>
        <p className="mt-2 text-[var(--app-muted)]">
          Project case studies will be published here soon.
        </p>
      </div>
    );
  }

  const initialCount = Math.min(projectsPerLoad, items.length);
  const [visibleCount, setVisibleCount] = useState(initialCount);

  const visibleProjects = useMemo(
    () => items.slice(0, visibleCount),
    [items, visibleCount]
  );

  const hasMore = visibleCount < items.length;

  return (
    <div>
      <p className="mb-6 text-sm text-zinc-400">
        Showing {visibleProjects.length} of {items.length} projects
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </div>

      {hasMore && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() =>
              setVisibleCount((prev) =>
                Math.min(prev + projectsPerLoad, items.length)
              )
            }
            className="rounded-lg border border-[var(--app-brand)]/40 bg-[var(--app-brand-soft)] px-6 py-3 text-sm font-medium text-[var(--app-brand)] hover:bg-[var(--app-brand-soft)]/80"
          >
            View More
          </button>
        </div>
      )}
    </div>
  );
}
