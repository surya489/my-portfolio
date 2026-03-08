import { skills } from "@/data/skills";
import Reveal from "@/components/ui/Reveal";

export default function Skills() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <h2 className="text-3xl font-bold mb-12">Tech Stack</h2>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="app-card rounded-xl border p-6">
            <h3 className="text-lg font-semibold text-purple-400 mb-4">
              Frontend
            </h3>

            <div className="flex flex-wrap gap-2">
              {skills.frontend.map((skill) => (
                <span
                  key={skill}
                  className="text-sm bg-[var(--app-elevated)] px-3 py-1 rounded-md border border-[var(--app-border)] hover:border-purple-500 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="app-card rounded-xl border p-6">
            <h3 className="text-lg font-semibold text-purple-400 mb-4">
              Backend
            </h3>

            <div className="flex flex-wrap gap-2">
              {skills.backend.map((skill) => (
                <span
                  key={skill}
                  className="text-sm bg-[var(--app-elevated)] px-3 py-1 rounded-md border border-[var(--app-border)] hover:border-purple-500 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="app-card rounded-xl border p-6">
            <h3 className="text-lg font-semibold text-purple-400 mb-4">
              Tools
            </h3>

            <div className="flex flex-wrap gap-2">
              {skills.tools.map((skill) => (
                <span
                  key={skill}
                  className="text-sm bg-[var(--app-elevated)] px-3 py-1 rounded-md border border-[var(--app-border)] hover:border-purple-500 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="app-card rounded-xl border p-6">
            <h3 className="text-lg font-semibold text-purple-400 mb-4">
              Analytics
            </h3>

            <div className="flex flex-wrap gap-2">
              {skills.analytics.map((skill) => (
                <span
                  key={skill}
                  className="text-sm bg-[var(--app-elevated)] px-3 py-1 rounded-md border border-[var(--app-border)] hover:border-purple-500 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </Reveal>
    </section>
  );
}
