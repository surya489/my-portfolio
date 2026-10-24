"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

type Props = {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  image: string;
};

export default function ProjectCard({
  slug,
  title,
  description,
  tech,
  github,
  demo,
  image,
}: Props) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    setMousePos((prev) => ({ ...prev, opacity: 0 }));
  };

  const isBlume = slug === "blume-health";

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative flex flex-col justify-between rounded-2xl border border-[var(--app-border)] bg-[var(--app-surface)] overflow-hidden transition-all hover:border-[var(--app-brand)]/60 hover:shadow-xl hover:shadow-[var(--app-brand-soft)] group ${
        isBlume ? "ring-1 ring-[var(--app-brand)]/30" : ""
      }`}
    >
      {/* Mouse spotlight overlay */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-10"
        style={{
          opacity: mousePos.opacity,
          background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, var(--app-brand-soft), transparent 80%)`,
        }}
      />

      <div>
        {/* Project Thumbnail */}
        <Link
          href={`/projects/${slug}`}
          onClick={() => trackEvent("project_open", { project_slug: slug, project_title: title })}
          className="relative block h-52 w-full overflow-hidden bg-[var(--app-elevated)]"
        >
          {isBlume && (
            <div className="absolute top-3 left-3 z-20 inline-flex items-center gap-1.5 rounded-full bg-emerald-500/90 backdrop-blur-md px-3 py-1 text-xs font-bold text-white shadow-md">
              <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
              <span>Flagship Platform</span>
            </div>
          )}

          {!imageLoaded && (
            <div className="absolute inset-0 animate-pulse bg-[var(--app-elevated)]" />
          )}

          {!imageError ? (
            <Image
              src={image}
              alt={title}
              width={600}
              height={350}
              onLoad={() => setImageLoaded(true)}
              onError={() => {
                setImageLoaded(true);
                setImageError(true);
              }}
              className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-[var(--app-elevated)] text-sm font-medium text-[var(--app-muted)]">
              {title}
            </div>
          )}
        </Link>

        {/* Project Details */}
        <div className="p-6">
          <div className="flex items-start justify-between gap-2">
            <Link
              href={`/projects/${slug}`}
              onClick={() => trackEvent("project_open", { project_slug: slug, project_title: title })}
              className="text-xl font-bold text-[var(--app-text)] hover:text-[var(--app-brand)] transition-colors inline-flex items-center gap-1.5 group/link"
            >
              <span>{title}</span>
              <ArrowUpRight className="h-4 w-4 opacity-0 -translate-y-1 translate-x-1 group-hover/link:opacity-100 transition-all text-[var(--app-brand)]" />
            </Link>
          </div>

          <p className="text-[var(--app-muted)] text-sm mt-2.5 line-clamp-3 leading-relaxed">
            {description}
          </p>

          {/* Tech stack badges */}
          <div className="flex flex-wrap gap-1.5 mt-4">
            {tech.slice(0, 5).map((item) => (
              <span
                key={item}
                className="text-xs bg-[var(--app-elevated)] text-[var(--app-text)] border border-[var(--app-border)] px-2.5 py-1 rounded-md font-medium"
              >
                {item}
              </span>
            ))}
            {tech.length > 5 && (
              <span className="text-xs text-[var(--app-muted)] px-1 py-1 font-medium">
                +{tech.length - 5}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Action links */}
      <div className="flex items-center justify-between border-t border-[var(--app-border)] px-6 py-4 bg-[var(--app-surface)]/60 text-xs font-semibold">
        <Link
          href={`/projects/${slug}`}
          className="text-[var(--app-brand)] hover:underline inline-flex items-center gap-1"
        >
          <span>Read Case Study</span>
        </Link>

        <div className="flex items-center gap-3">
          {github && github !== "https://github.com/surya489" && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} GitHub Repository`}
              className="flex items-center gap-1 text-[var(--app-muted)] hover:text-[var(--app-text)] transition-colors"
            >
              <Github className="h-3.5 w-3.5" />
              <span>Code</span>
            </a>
          )}

          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} Live Site`}
              className="flex items-center gap-1 text-[var(--app-brand)] font-bold hover:underline transition-colors"
            >
              <span>Live Demo</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
