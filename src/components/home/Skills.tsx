"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { skillsData } from "@/data/skills";
import Reveal from "@/components/ui/Reveal";
import { Code2, Server, Database, BarChart3, Wrench, Layers } from "lucide-react";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
}

function SpotlightCard({ children, className = "" }: SpotlightCardProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    setMousePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-2xl border border-[var(--app-border)] bg-[var(--app-surface)] p-6 md:p-8 transition-all hover:border-[var(--app-brand)]/50 hover:shadow-xl hover:shadow-[var(--app-brand-soft)] overflow-hidden flex flex-col justify-between ${className}`}
    >
      {/* Mouse spotlight overlay */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: mousePos.opacity,
          background: `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, var(--app-brand-soft), transparent 80%)`,
        }}
      />
      <div className="relative z-10 flex flex-col justify-between h-full">{children}</div>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 relative">
      {/* Section Header */}
      <Reveal>
        <div className="flex flex-col items-start gap-2 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--app-brand)]">
            <Layers className="h-4 w-4" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--app-text)] tracking-tight">
            Skills &amp; Architecture Stack
          </h2>
          <p className="text-[var(--app-muted)] text-base max-w-2xl">
            A comprehensive breakdown of technologies I use to build production-grade web applications, handle server-side API logic, and drive high-converting user experiences.
          </p>
        </div>
      </Reveal>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 1. Frontend Core - Highlighted Large Span */}
        <Reveal delay={0.05} className="md:col-span-2">
          <SpotlightCard className="h-full">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3.5">
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500/25 via-indigo-500/15 to-transparent border border-purple-500/40 text-purple-300 shadow-md shadow-purple-500/15 shrink-0">
                    <Code2 className="h-6 w-6 stroke-[2.2]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--app-text)]">
                      {skillsData.frontend.title}
                    </h3>
                    <p className="text-xs text-[var(--app-muted)] mt-0.5">
                      {skillsData.frontend.description}
                    </p>
                  </div>
                </div>
                <span className="hidden sm:inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-semibold text-purple-400">
                  {skillsData.frontend.skills.length} Stack Items
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mt-5">
                {skillsData.frontend.skills.map((skill) => (
                  <motion.span
                    key={skill.name}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`inline-flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs sm:text-sm font-medium transition-all ${
                      skill.featured
                        ? "bg-[var(--app-brand-soft)] border border-[var(--app-brand)]/40 text-[var(--app-text)] font-semibold shadow-xs"
                        : "bg-[var(--app-elevated)] border border-[var(--app-border)] text-[var(--app-muted)] hover:text-[var(--app-text)]"
                    }`}
                  >
                    {skill.featured && (
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--app-brand)] animate-pulse" />
                    )}
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </div>
          </SpotlightCard>
        </Reveal>

        {/* 2. Backend & APIs */}
        <Reveal delay={0.1}>
          <SpotlightCard className="h-full">
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3.5">
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/25 via-teal-500/15 to-transparent border border-emerald-500/40 text-emerald-300 shadow-md shadow-emerald-500/15 shrink-0">
                    <Server className="h-6 w-6 stroke-[2.2]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--app-text)]">
                      {skillsData.backend.title}
                    </h3>
                    <p className="text-xs text-[var(--app-muted)] mt-0.5">
                      {skillsData.backend.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-5">
                {skillsData.backend.skills.map((skill) => (
                  <motion.span
                    key={skill.name}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs sm:text-sm font-medium transition-all ${
                      skill.featured
                        ? "bg-emerald-500/10 border border-emerald-500/30 text-[var(--app-text)] font-semibold"
                        : "bg-[var(--app-elevated)] border border-[var(--app-border)] text-[var(--app-muted)] hover:text-[var(--app-text)]"
                    }`}
                  >
                    {skill.featured && (
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    )}
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </div>
          </SpotlightCard>
        </Reveal>

        {/* 3. Database & Payments */}
        <Reveal delay={0.15}>
          <SpotlightCard className="h-full">
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3.5">
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500/25 via-orange-500/15 to-transparent border border-amber-500/40 text-amber-300 shadow-md shadow-amber-500/15 shrink-0">
                    <Database className="h-6 w-6 stroke-[2.2]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--app-text)]">
                      {skillsData.databaseAndPayments.title}
                    </h3>
                    <p className="text-xs text-[var(--app-muted)] mt-0.5">
                      {skillsData.databaseAndPayments.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-5">
                {skillsData.databaseAndPayments.skills.map((skill) => (
                  <motion.span
                    key={skill.name}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs sm:text-sm font-medium transition-all ${
                      skill.featured
                        ? "bg-amber-500/10 border border-amber-500/30 text-[var(--app-text)] font-semibold"
                        : "bg-[var(--app-elevated)] border border-[var(--app-border)] text-[var(--app-muted)] hover:text-[var(--app-text)]"
                    }`}
                  >
                    {skill.featured && (
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                    )}
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </div>
          </SpotlightCard>
        </Reveal>

        {/* 4. Analytics & Event Attribution */}
        <Reveal delay={0.2}>
          <SpotlightCard className="h-full">
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3.5">
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/25 via-blue-500/15 to-transparent border border-cyan-500/40 text-cyan-300 shadow-md shadow-cyan-500/15 shrink-0">
                    <BarChart3 className="h-6 w-6 stroke-[2.2]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--app-text)]">
                      {skillsData.analyticsAndTracking.title}
                    </h3>
                    <p className="text-xs text-[var(--app-muted)] mt-0.5">
                      {skillsData.analyticsAndTracking.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-5">
                {skillsData.analyticsAndTracking.skills.map((skill) => (
                  <motion.span
                    key={skill.name}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs sm:text-sm font-medium transition-all ${
                      skill.featured
                        ? "bg-cyan-500/10 border border-cyan-500/30 text-[var(--app-text)] font-semibold"
                        : "bg-[var(--app-elevated)] border border-[var(--app-border)] text-[var(--app-muted)] hover:text-[var(--app-text)]"
                    }`}
                  >
                    {skill.featured && (
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    )}
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </div>
          </SpotlightCard>
        </Reveal>

        {/* 5. Tools & Ecosystem */}
        <Reveal delay={0.25}>
          <SpotlightCard className="h-full">
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3.5">
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-fuchsia-500/25 via-pink-500/15 to-transparent border border-fuchsia-500/40 text-fuchsia-300 shadow-md shadow-fuchsia-500/15 shrink-0">
                    <Wrench className="h-6 w-6 stroke-[2.2]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--app-text)]">
                      {skillsData.toolsAndWorkflow.title}
                    </h3>
                    <p className="text-xs text-[var(--app-muted)] mt-0.5">
                      {skillsData.toolsAndWorkflow.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-5">
                {skillsData.toolsAndWorkflow.skills.map((skill) => (
                  <motion.span
                    key={skill.name}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs sm:text-sm font-medium transition-all ${
                      skill.featured
                        ? "bg-fuchsia-500/10 border border-fuchsia-500/30 text-[var(--app-text)] font-semibold"
                        : "bg-[var(--app-elevated)] border border-[var(--app-border)] text-[var(--app-muted)] hover:text-[var(--app-text)]"
                    }`}
                  >
                    {skill.featured && (
                      <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
                    )}
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </div>
          </SpotlightCard>
        </Reveal>
      </div>
    </section>
  );
}
