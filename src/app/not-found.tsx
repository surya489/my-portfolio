import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-6 text-center">
      <p className="mb-3 text-sm text-[var(--app-brand)]">404</p>
      <h1 className="mb-4 text-4xl font-bold">Page not found</h1>
      <p className="mb-8 max-w-xl text-[var(--app-muted)]">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="rounded-lg bg-[var(--app-brand-strong)] px-5 py-3 text-white hover:bg-[var(--app-brand)]"
        >
          Go Home
        </Link>
        <Link
          href="/projects"
          className="rounded-lg border border-[var(--app-brand)] px-5 py-3 text-[var(--app-brand)] hover:bg-[var(--app-brand-soft)]"
        >
          View Projects
        </Link>
      </div>
    </main>
  );
}
