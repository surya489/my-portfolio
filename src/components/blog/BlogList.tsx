"use client";

import { useMemo, useState } from "react";
import BlogCard from "@/components/blog/BlogCard";
import type { BlogPost } from "@/data/blogs";

type Props = {
  posts: BlogPost[];
  postsPerLoad?: number;
};

export default function BlogList({ posts, postsPerLoad = 6 }: Props) {
  if (!posts.length) {
    return (
      <div className="app-card rounded-xl border p-8 text-center">
        <p className="text-lg font-semibold">No posts yet</p>
        <p className="mt-2 text-[var(--app-muted)]">
          New articles will appear here soon.
        </p>
      </div>
    );
  }

  const initialCount = Math.min(postsPerLoad, posts.length);
  const [visibleCount, setVisibleCount] = useState(initialCount);

  const visiblePosts = useMemo(
    () => posts.slice(0, visibleCount),
    [posts, visibleCount]
  );

  const hasMore = visibleCount < posts.length;

  return (
    <div>
      <p className="mb-6 text-sm text-zinc-400">
        Showing {visiblePosts.length} of {posts.length} posts
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {visiblePosts.map((post) => (
          <BlogCard key={post.slug} {...post} />
        ))}
      </div>

      {hasMore && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() =>
              setVisibleCount((prev) => Math.min(prev + postsPerLoad, posts.length))
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
