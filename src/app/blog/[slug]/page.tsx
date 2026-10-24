import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Reveal from "@/components/ui/Reveal";
import { blogs } from "@/data/blogs";
import Link from "next/link";

const siteUrl = "https://my-portfolio-omega-wheat-25.vercel.app";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogs.find((item) => item.slug === slug);

  if (!post) {
    return { title: "Blog Post Not Found | Jaya Surya M" };
  }

  const postUrl = `${siteUrl}/blog/${post.slug}`;

  return {
    title: `${post.title} | Jaya Surya M`,
    description: post.excerpt,
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      title: `${post.title} | Jaya Surya M`,
      description: post.excerpt,
      url: postUrl,
      type: "article",
      publishedTime: post.publishedAt,
      images: [{ url: "/logo.png", width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Jaya Surya M`,
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

  const postUrl = `${siteUrl}/blog/${post.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    url: postUrl,
    author: {
      "@type": "Person",
      name: "Jaya Surya M",
      url: siteUrl,
    },
    publisher: {
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
              <Link href="/blog" className="hover:text-[var(--app-text)]">
                Blog
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-[var(--app-text)]">{post.title}</li>
          </ol>
        </nav>
        <p className="text-sm text-[var(--app-muted)]">
          {post.date} • {post.readTime}
        </p>

        <h1 className="mt-3 mb-6 text-3xl sm:text-4xl font-extrabold text-[var(--app-text)] tracking-tight">
          {post.title}
        </h1>

        <p className="mb-6 text-[var(--app-muted)] text-base sm:text-lg leading-relaxed">
          {post.excerpt}
        </p>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="mb-10 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-lg bg-[var(--app-brand-soft)] border border-[var(--app-brand)]/30 px-2.5 py-1 text-xs font-semibold text-[var(--app-brand)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.12}>
        <article className="space-y-6 leading-relaxed text-[var(--app-text)]/90 text-base sm:text-lg">
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </article>
      </Reveal>

      <Reveal delay={0.16}>
        <div className="app-card mt-16 rounded-3xl border border-[var(--app-border)] bg-[var(--app-surface)] p-8 sm:p-10 text-center shadow-xl">
          <h2 className="mb-3 text-2xl font-bold text-[var(--app-text)]">Enjoyed this article?</h2>
          <p className="mb-6 text-[var(--app-muted)] max-w-lg mx-auto">
            I share practical engineering insights, performance optimization patterns, and architecture lessons. Let&apos;s connect.
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
