import { experience } from "@/data/experience";
import Reveal from "@/components/ui/Reveal";

export default function Experience() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <h2 className="text-3xl font-bold mb-12">Experience</h2>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="space-y-10">
        {experience.map((job, index) => (
          <div
            key={index}
            className="border-l-2 border-purple-600 pl-6 relative"
          >
            {/* Timeline dot */}
            <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-purple-600"></span>

            <h3 className="text-xl font-semibold">
              {job.role} –{" "}
              <span className="text-purple-400">{job.company}</span>
            </h3>

            <p className="text-sm text-gray-400 mb-3">{job.period}</p>

            <ul className="list-disc ml-5 space-y-2 text-gray-400">
              {job.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
        </div>
      </Reveal>
    </section>
  );
}
