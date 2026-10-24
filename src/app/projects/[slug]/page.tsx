import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Reveal from "@/components/ui/Reveal";
import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

const siteUrl = "https://my-portfolio-omega-wheat-25.vercel.app";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Jaya Surya M",
    };
  }

  const projectUrl = `${siteUrl}/projects/${project.slug}`;

  return {
    title: `${project.title} | Case Study by Jaya Surya M`,
    description: project.description,
    alternates: {
      canonical: projectUrl,
    },
    openGraph: {
      title: `${project.title} | Case Study by Jaya Surya M`,
      description: project.description,
      url: projectUrl,
      type: "article",
      images: [
        {
          url: project.image,
          width: 1200,
          height: 700,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Case Study by Jaya Surya M`,
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

  const projectUrl = `${siteUrl}/projects/${project.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    description: project.description,
    applicationCategory: "WebApplication",
    operatingSystem: "Web Browser",
    url: project.demo || projectUrl,
    author: {
      "@type": "Person",
      name: "Jaya Surya M",
      url: siteUrl,
    },
  };

  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Reveal>
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-[var(--app-muted)]">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-[var(--app-text)]">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/projects" className="hover:text-[var(--app-text)]">
                Projects
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-[var(--app-text)]">{project.title}</li>
          </ol>
        </nav>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[var(--app-text)] tracking-tight mb-6">
          {project.title}
        </h1>

        <p className="text-[var(--app-muted)] text-base sm:text-lg mb-6 leading-relaxed">
          {project.description}
        </p>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-xs bg-[var(--app-brand-soft)] text-[var(--app-brand)] px-3 py-1.5 rounded-lg border border-[var(--app-brand)]/30 font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.12}>
        <div className="text-[var(--app-text)]/90 leading-relaxed mb-10 text-base sm:text-lg whitespace-pre-line">
          {project.content}
        </div>
      </Reveal>

      <Reveal delay={0.14}>
        <div className="mb-10">
          <h2 className="mb-4 text-2xl font-bold text-[var(--app-text)]">Key Highlights</h2>
          <ul className="ml-5 list-disc space-y-2.5 text-[var(--app-muted)] text-base">
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal delay={0.16}>
        <div className="mb-12 grid gap-8 md:grid-cols-2">
          <article className="app-card rounded-2xl border p-6 bg-[var(--app-surface)]">
            <h3 className="mb-3 text-xl font-bold text-[var(--app-text)]">Problem Statement</h3>
            <p className="text-[var(--app-muted)] text-sm leading-relaxed">{project.caseStudy.problem}</p>
          </article>

          <article className="app-card rounded-2xl border p-6 bg-[var(--app-surface)]">
            <h3 className="mb-3 text-xl font-bold text-[var(--app-text)]">Approach &amp; Architecture</h3>
            <ul className="ml-5 list-disc space-y-2 text-[var(--app-muted)] text-sm leading-relaxed">
              {project.caseStudy.approach.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="app-card rounded-2xl border p-6 bg-[var(--app-surface)]">
            <h3 className="mb-3 text-xl font-bold text-[var(--app-text)]">Engineering Challenges</h3>
            <ul className="ml-5 list-disc space-y-2 text-[var(--app-muted)] text-sm leading-relaxed">
              {project.caseStudy.challenges.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="app-card rounded-2xl border p-6 bg-[var(--app-surface)]">
            <h3 className="mb-3 text-xl font-bold text-[var(--app-text)]">Impact &amp; Results</h3>
            <ul className="ml-5 list-disc space-y-2 text-[var(--app-muted)] text-sm leading-relaxed">
              {project.caseStudy.results.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </Reveal>

      <Reveal delay={0.18}>
        <div className="flex gap-6 items-center">
          {project.github && project.github !== "https://github.com/surya489" && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--app-brand)] font-semibold hover:underline"
            >
              GitHub Repository
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-[var(--app-brand)] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[var(--app-brand-strong)] transition-all shadow-md"
            >
              Live Production Demo
            </a>
          )}
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="app-card mt-16 rounded-3xl border border-[var(--app-border)] bg-[var(--app-surface)] p-8 sm:p-10 text-center shadow-xl">
          <h2 className="mb-3 text-2xl sm:text-3xl font-extrabold text-[var(--app-text)]">
            Interested in building scalable web platforms?
          </h2>
          <p className="mb-6 text-[var(--app-muted)] max-w-lg mx-auto">
            Let&apos;s discuss how I can bring full stack architecture, performance tuning, and reliable conversion engineering to your team.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-xl bg-[var(--app-brand)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--app-brand-strong)] transition-all shadow-md"
            >
              Contact Me
            </Link>
            <a
              href="/resume.pdf"
              download="Jaya-Surya-Resume.pdf"
              className="rounded-xl border border-[var(--app-border)] bg-[var(--app-elevated)] px-6 py-3 text-sm font-semibold text-[var(--app-text)] hover:border-[var(--app-brand)] transition-all"
            >
              Download Resume
            </a>
          </div>
        </div>
      </Reveal>
    </main>
  );
}
