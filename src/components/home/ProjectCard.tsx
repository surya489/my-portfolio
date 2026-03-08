'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

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

  return (
    <Link
      href={`/projects/${slug}`}
      onClick={() => trackEvent("project_open", { project_slug: slug, project_title: title })}
    >
      <motion.div
        whileHover={{ y: -6, scale: 1.02 }}
        transition={{ duration: 0.2 }}
        className="app-card rounded-xl border overflow-hidden hover:border-purple-500 transition"
      >
        <div className="relative h-48 w-full overflow-hidden">
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
              className="h-48 w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-[var(--app-elevated)] text-sm text-[var(--app-muted)]">
              Preview Image
            </div>
          )}
        </div>

        <div className="p-6">
          <h3 className="text-xl font-semibold">{title}</h3>

          <p className="text-gray-400 mt-3">{description}</p>

          <div className="flex flex-wrap gap-2 mt-4">
            {tech.map((item) => (
              <span
                key={item}
                className="text-xs bg-[var(--app-brand-soft)] text-[var(--app-brand)] px-2 py-1 rounded"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4 mt-6 text-sm">
            <a
              href={github}
              target="_blank"
              className="text-[var(--app-brand)] hover:underline"
            >
              GitHub
            </a>

            <a
              href={demo}
              target="_blank"
              className="text-[var(--app-brand)] hover:underline"
            >
              Live Demo
            </a>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
