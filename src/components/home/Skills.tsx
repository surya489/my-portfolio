import { skills } from "@/data/skills";
import Reveal from "@/components/ui/Reveal";

export default function Skills() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <h2 className="text-3xl font-bold mb-12">Skills</h2>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="grid md:grid-cols-3 gap-10">
        
        {/* Frontend */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-purple-400">
            Frontend
          </h3>

          <div className="flex flex-wrap gap-3">
            {skills.frontend.map((skill) => (
              <span
                key={skill}
                className="bg-[#16161c] border border-zinc-800 px-3 py-1 rounded-md text-sm hover:border-purple-500 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Backend */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-purple-400">
            Backend
          </h3>

          <div className="flex flex-wrap gap-3">
            {skills.backend.map((skill) => (
              <span
                key={skill}
                className="bg-[#16161c] border border-zinc-800 px-3 py-1 rounded-md text-sm hover:border-purple-500 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-purple-400">
            Tools
          </h3>

          <div className="flex flex-wrap gap-3">
            {skills.tools.map((skill) => (
              <span
                key={skill}
                className="bg-[#16161c] border border-zinc-800 px-3 py-1 rounded-md text-sm hover:border-purple-500 transition"
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
