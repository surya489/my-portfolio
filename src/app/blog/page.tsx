import type { Metadata } from "next";
import Reveal from "@/components/ui/Reveal";
import BlogList from "@/components/blog/BlogList";
import { blogs, BLOG_POSTS_PER_LOAD } from "@/data/blogs";

const siteUrl = "https://my-portfolio-omega-wheat-25.vercel.app";

export const metadata: Metadata = {
  title: "Engineering Blog | Jaya Surya M",
  description:
    "Technical articles and practical insights by Jaya Surya M on Next.js, React architecture, performance optimization, authentication, and full-stack engineering.",
  keywords: [
    "Full Stack Blog",
    "Next.js Tutorials",
    "React Performance Optimization",
    "Jaya Surya M Blog",
    "Web Engineering Articles",
  ],
  alternates: {
    canonical: `${siteUrl}/blog`,
  },
  openGraph: {
    title: "Engineering Blog | Jaya Surya M",
    description:
      "Technical articles on Next.js, React architecture, performance optimization, and full-stack engineering.",
    url: `${siteUrl}/blog`,
    siteName: "Jaya Surya M Portfolio",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Jaya Surya M Engineering Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering Blog | Jaya Surya M",
    description:
      "Technical articles on Next.js, React architecture, performance optimization, and full-stack engineering.",
    images: ["/logo.png"],
  },
};

export default function BlogPage() {
  const latestPublished = blogs
    .map((post) => post.publishedAt)
    .sort((a, b) => new Date(b).getTime() - new Date(a).getTime())[0];

  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <Reveal className="mb-16">
        <h1 className="mb-4 text-4xl sm:text-5xl font-extrabold text-[var(--app-text)] tracking-tight">
          Engineering Insights &amp; Articles
        </h1>

        <p className="max-w-xl text-[var(--app-muted)] text-base leading-relaxed">
          Notes from real production projects, architecture decisions, and practical learnings from building scalable web applications.
        </p>
        <p className="mt-4 text-xs text-[var(--app-muted)]">
          {latestPublished ? `Last updated: ${latestPublished}.` : ""}
        </p>
      </Reveal>

      <Reveal delay={0.08}>
        <BlogList posts={blogs} postsPerLoad={BLOG_POSTS_PER_LOAD} />
      </Reveal>
    </main>
  );
}
