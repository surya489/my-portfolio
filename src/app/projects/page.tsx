import ProjectList from "@/components/projects/ProjectList";
import Reveal from "@/components/ui/Reveal";
import { PROJECTS_PER_LOAD, projects } from "@/data/projects";
import type { Metadata } from "next";

const siteUrl = "https://my-portfolio-omega-wheat-25.vercel.app";

export const metadata: Metadata = {
  title: "Projects & Production Case Studies | Jaya Surya M",
  description:
    "Explore production healthcare platforms, high-traffic consumer websites, and developer tools built by Jaya Surya M using Next.js, React, TypeScript, and Node.js.",
  keywords: [
    "Jaya Surya M Projects",
    "Blume Health Case Study",
    "Next.js App Router Projects",
    "React Web Applications",
    "TypeScript Portfolio",
    "Full Stack Developer Projects",
  ],
  alternates: {
    canonical: `${siteUrl}/projects`,
  },
  openGraph: {
    title: "Projects & Production Case Studies | Jaya Surya M",
    description:
      "Explore production healthcare platforms, high-traffic consumer websites, and developer tools built with Next.js, React, and TypeScript.",
    url: `${siteUrl}/projects`,
    siteName: "Jaya Surya M Portfolio",
    type: "website",
    images: [
      {
        url: "/projects/blume-health.svg",
        width: 1200,
        height: 700,
        alt: "Blume Health - Production Healthcare Web App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects & Production Case Studies | Jaya Surya M",
    description:
      "Explore production healthcare platforms, consumer websites, and developer tools built with Next.js, React, and TypeScript.",
    images: ["/projects/blume-health.svg"],
  },
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      {/* Page Title */}
      <Reveal className="mb-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[var(--app-text)] tracking-tight mb-4">
          Projects &amp; Case Studies
        </h1>

        <p className="text-[var(--app-muted)] text-base sm:text-lg max-w-2xl leading-relaxed">
          A collection of production-grade healthcare platforms, client-facing web applications, and developer tools engineered with Next.js (App Router), React, and TypeScript.
        </p>
      </Reveal>

      <Reveal delay={0.08}>
        <ProjectList items={projects} projectsPerLoad={PROJECTS_PER_LOAD} />
      </Reveal>
    </main>
  );
}
