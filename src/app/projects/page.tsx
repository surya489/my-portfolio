import Reveal from "@/components/ui/Reveal";
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
      <Reveal className="mb-16">
        <h1 className="text-4xl font-bold mb-4">Projects</h1>

        <p className="text-gray-400 max-w-xl">
          A collection of projects I’ve worked on, ranging from full-stack
          applications to frontend-focused experiences built with modern
          technologies.
        </p>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="app-card rounded-xl border p-8 text-center">
          <p className="text-lg font-semibold">Coming soon</p>
          <p className="mt-2 text-[var(--app-muted)]">
            Projects are under process.
          </p>
        </div>
      </Reveal>

    </main>
  );
}
