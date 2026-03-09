import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Reveal from "@/components/ui/Reveal";
import { blogs } from "@/data/blogs";
import Link from "next/link";

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
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://my-portfolio-omega-wheat-25.vercel.app/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      images: [{ url: "/logo.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: ["/logo.png"],
    },
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
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-[var(--app-muted)]">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-[var(--app-text)]">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/blog" className="hover:text-[var(--app-text)]">
                Blog
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-[var(--app-text)]">{post.title}</li>
          </ol>
        </nav>
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

      <Reveal delay={0.16}>
        <div className="app-card mt-12 rounded-xl border p-8 text-center">
          <h2 className="mb-3 text-2xl font-semibold">Enjoyed this article?</h2>
          <p className="mb-6 text-[var(--app-muted)]">
            I share practical frontend insights every 2-3 weeks. Let&apos;s connect.
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
