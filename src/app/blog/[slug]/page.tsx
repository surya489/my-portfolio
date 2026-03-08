import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Reveal from "@/components/ui/Reveal";
import { blogs } from "@/data/blogs";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogs.find((item) => item.slug === slug);

  if (!post) {
    return { title: "Blog" };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = blogs.find((item) => item.slug === slug);

  if (!post) {
    return notFound();
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <Reveal>
        <p className="text-sm text-zinc-400">
          {post.date} • {post.readTime}
        </p>

        <h1 className="mt-3 mb-6 text-4xl font-bold">{post.title}</h1>

        <p className="mb-6 text-gray-400">{post.excerpt}</p>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="mb-10 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded bg-[var(--app-brand-soft)] px-2 py-1 text-xs text-[var(--app-brand)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.12}>
        <article className="space-y-6 leading-relaxed text-[var(--app-text)]/90">
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </article>
      </Reveal>
    </main>
  );
}
