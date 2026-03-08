import type { Metadata } from "next";
import Reveal from "@/components/ui/Reveal";
import BlogList from "@/components/blog/BlogList";
import { blogs, BLOG_POSTS_PER_LOAD } from "@/data/blogs";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles by Jayasurya on frontend engineering, Next.js, performance, authentication, and product development.",
};

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <Reveal className="mb-16">
        <h1 className="mb-4 text-4xl font-bold">Blog</h1>

        <p className="max-w-xl text-gray-400">
          Notes from real projects, frontend engineering decisions, and practical
          learnings from building scalable web applications.
        </p>
      </Reveal>

      <Reveal delay={0.08}>
        <BlogList posts={blogs} postsPerLoad={BLOG_POSTS_PER_LOAD} />
      </Reveal>
    </main>
  );
}
