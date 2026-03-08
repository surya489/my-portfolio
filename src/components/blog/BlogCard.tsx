"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { trackEvent } from "@/lib/analytics";

type Props = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
};

export default function BlogCard({ slug, title, excerpt, date, readTime, tags }: Props) {
  return (
    <Link
      href={`/blog/${slug}`}
      onClick={() => trackEvent("blog_open", { blog_slug: slug, blog_title: title })}
    >
      <motion.article
        whileHover={{ y: -6, scale: 1.01 }}
        transition={{ duration: 0.2 }}
        className="app-card h-full rounded-xl border p-6 transition hover:border-purple-500"
      >
        <p className="text-xs text-zinc-400">
          {date} • {readTime}
        </p>

        <h3 className="mt-3 text-xl font-semibold">{title}</h3>

        <p className="mt-3 text-gray-400">{excerpt}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded bg-[var(--app-brand-soft)] px-2 py-1 text-xs text-[var(--app-brand)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.article>
    </Link>
  );
}
