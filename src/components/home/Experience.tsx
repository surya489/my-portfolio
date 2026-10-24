"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";
import Reveal from "@/components/ui/Reveal";
import { Briefcase, Calendar, MapPin, ExternalLink, Award } from "lucide-react";

export default function Experience() {
  return (
    <section className="mx-auto max-w-5xl px-4 sm:px-6 py-20 md:py-28 relative">
      <Reveal>
        <div className="flex flex-col items-start gap-2 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--app-brand)]">
            <Briefcase className="h-4 w-4" />
            <span>Career Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--app-text)] tracking-tight">
            Work Experience &amp; Impact
          </h2>
          <p className="text-[var(--app-muted)] text-sm sm:text-base max-w-2xl">
            4.7+ years building enterprise healthcare, e-commerce, high-traffic consumer web platforms, and operational workflows.
          </p>
        </div>
      </Reveal>

      {/* Connected Illuminated Timeline Track (Natural Scrolling, 100% Centered) */}
      <div className="relative">
        {experience.map((job, index) => {
          const isLast = index === experience.length - 1;

          return (
            <Reveal key={`${job.company}-${index}`} delay={index * 0.08}>
              <div className="flex gap-4 sm:gap-6 md:gap-8 group">
                {/* Left Column: Dedicated Track Line & Centered Node */}
                <div className="flex flex-col items-center shrink-0">
                  {/* Timeline Node Dot */}
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[var(--app-brand)] bg-[var(--app-surface)] shadow-md shadow-[var(--app-brand-soft)] group-hover:scale-115 group-hover:border-[var(--app-brand-strong)] transition-all z-10">
                    <span className="h-2.5 w-2.5 rounded-full bg-[var(--app-brand)] shadow-sm shadow-[var(--app-brand)] group-hover:bg-emerald-400 group-hover:shadow-emerald-400 transition-all" />
                  </div>

                  {/* Illuminated Track Line (Runs directly from this node down to the next) */}
                  {!isLast && (
                    <div className="w-[2px] grow bg-gradient-to-b from-[var(--app-brand)] via-[var(--app-brand)]/40 to-[var(--app-border)] my-1.5 transition-colors group-hover:from-[var(--app-brand-strong)]" />
                  )}
                </div>

                {/* Right Column: Experience Card */}
                <div className={`grow ${isLast ? "pb-0" : "pb-10 md:pb-14"}`}>
                  <motion.div
                    whileHover={{ y: -4, scale: 1.005 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="relative rounded-3xl border border-[var(--app-border)] bg-[var(--app-surface)] p-6 sm:p-8 md:p-9 shadow-lg shadow-black/20 transition-all hover:border-[var(--app-brand)]/60 hover:shadow-xl hover:shadow-[var(--app-brand-soft)]"
                  >
                    {/* Milestone Stepper Bar */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-[var(--app-border)]/60">
                      <div className="flex items-center gap-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--app-brand-soft)] border border-[var(--app-brand)]/40 text-xs font-black text-[var(--app-brand)] shadow-xs">
                          0{index + 1}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-xs uppercase tracking-wider font-bold text-[var(--app-text)]">
                            {job.company}
                          </span>
                          {index === 0 && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-0.5 text-[10px] font-bold text-emerald-400">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              Most Recent
                            </span>
                          )}
                        </div>
                      </div>

                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--app-elevated)] border border-[var(--app-border)] px-3.5 py-1 text-xs font-semibold text-[var(--app-text)]">
                        <Calendar className="h-3.5 w-3.5 text-[var(--app-brand)]" />
                        {job.period}
                      </span>
                    </div>

                    {/* Role Title & Location */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--app-text)] tracking-tight">
                          {job.role}
                        </h3>
                        {job.location && (
                          <div className="flex items-center gap-1 text-xs text-[var(--app-muted)] mt-1 font-medium">
                            <MapPin className="h-3 w-3 text-[var(--app-brand)]" />
                            <span>{job.location}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Flagship Highlight Project Callout */}
                    {job.highlightProject && (
                      <div className="my-5 rounded-2xl border border-[var(--app-brand)]/30 bg-[var(--app-brand-soft)] p-4 sm:p-5 shadow-xs">
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <div className="flex items-center gap-2">
                            <Award className="h-4 w-4 text-[var(--app-brand)] shrink-0" />
                            <span className="text-xs uppercase tracking-wider font-bold text-[var(--app-brand)]">
                              Flagship Project:
                            </span>
                            <span className="text-sm sm:text-base font-bold text-[var(--app-text)]">
                              {job.highlightProject.name}
                            </span>
                          </div>
                          {job.highlightProject.url && (
                            <a
                              href={job.highlightProject.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-xs font-bold text-[var(--app-brand)] hover:underline shrink-0"
                            >
                              <span>Live Site</span>
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          )}
                        </div>
                        <p className="text-xs sm:text-sm text-[var(--app-muted)] leading-relaxed">
                          {job.highlightProject.description}
                        </p>
                      </div>
                    )}

                    {/* Bullet Points */}
                    <ul className="space-y-2.5 mt-4 text-xs sm:text-sm text-[var(--app-muted)] leading-relaxed">
                      {job.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-[var(--app-brand)] mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technology Badges */}
                    {job.technologies && (
                      <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-[var(--app-border)]/60">
                        {job.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-lg bg-[var(--app-elevated)] border border-[var(--app-border)] px-3 py-1 text-xs font-semibold text-[var(--app-text)]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
