import Reveal from "@/components/ui/Reveal";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <h2 className="mb-12 text-3xl font-bold">Testimonials</h2>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((item) => (
            <article key={item.quote} className="app-card rounded-xl border p-6">
              <p className="text-[var(--app-text)]/90 leading-relaxed">“{item.quote}”</p>
              <p className="mt-6 text-sm font-semibold">{item.name}</p>
              <p className="text-sm text-[var(--app-muted)]">{item.role}</p>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
