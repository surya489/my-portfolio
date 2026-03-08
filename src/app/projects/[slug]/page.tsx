import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Reveal from "@/components/ui/Reveal";
import type { Metadata } from "next";
import Link from "next/link";

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
    openGraph: {
      title: project.title,
      description: project.description,
      url: `https://my-portfolio-omega-wheat-25.vercel.app/projects/${project.slug}`,
      type: "article",
      images: [{ url: project.image, width: 1200, height: 700 }],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [project.image],
    },
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

      <Reveal delay={0.14}>
        <div className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold">Key Highlights</h2>
          <ul className="ml-5 list-disc space-y-2 text-[var(--app-text)]/90">
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal delay={0.16}>
        <div className="mb-12 grid gap-8 md:grid-cols-2">
          <article className="app-card rounded-xl border p-6">
            <h3 className="mb-3 text-xl font-semibold">Problem</h3>
            <p className="text-[var(--app-text)]/90">{project.caseStudy.problem}</p>
          </article>

          <article className="app-card rounded-xl border p-6">
            <h3 className="mb-3 text-xl font-semibold">Approach</h3>
            <ul className="ml-5 list-disc space-y-2 text-[var(--app-text)]/90">
              {project.caseStudy.approach.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="app-card rounded-xl border p-6">
            <h3 className="mb-3 text-xl font-semibold">Challenges</h3>
            <ul className="ml-5 list-disc space-y-2 text-[var(--app-text)]/90">
              {project.caseStudy.challenges.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="app-card rounded-xl border p-6">
            <h3 className="mb-3 text-xl font-semibold">Results</h3>
            <ul className="ml-5 list-disc space-y-2 text-[var(--app-text)]/90">
              {project.caseStudy.results.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </Reveal>

      <Reveal delay={0.18}>
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

      <Reveal delay={0.2}>
        <div className="app-card mt-12 rounded-xl border p-8 text-center">
          <h2 className="mb-3 text-2xl font-semibold">Like this project?</h2>
          <p className="mb-6 text-[var(--app-muted)]">
            Let&apos;s discuss how I can build similar outcomes for your product.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-lg bg-[var(--app-brand-strong)] px-5 py-3 text-white hover:bg-[var(--app-brand)]"
            >
              Contact Me
            </Link>
            <a
              href="/resume.pdf"
              download="Jayasurya-Resume.pdf"
              className="rounded-lg border border-[var(--app-brand)] px-5 py-3 text-[var(--app-brand)] hover:bg-[var(--app-brand-soft)]"
            >
              Download Resume
            </a>
          </div>
        </div>
      </Reveal>

    </main>
  );
}
