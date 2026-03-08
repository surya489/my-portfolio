import Reveal from "@/components/ui/Reveal";

export default function FeaturedProjects() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="app-card rounded-xl border p-8 text-center">
          <p className="text-lg font-semibold">Coming soon</p>
          <p className="mt-2 text-[var(--app-muted)]">
            Projects are under process.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
