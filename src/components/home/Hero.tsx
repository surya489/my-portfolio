"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdCheck, MdContentCopy } from "react-icons/md";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const ROLES = [
  "Full Stack Developer (Next.js • React • TS)",
  "Production Healthcare App Architect",
  "Node.js, Express & REST API Engineer",
  "Conversion & Meta CAPI Specialist",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("suryajaya4899@gmail.com");
      setCopied(true);
      trackEvent("copy_email", { source: "hero" });
      setTimeout(() => setCopied(false), 2400);
    } catch {
      // Fallback
    }
  };

  return (
    <section className="relative mx-auto max-w-6xl px-6 pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
      {/* Ambient background glow meshes */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-full max-w-4xl h-96 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 via-indigo-500/20 to-teal-400/20 blur-[130px] rounded-full animate-pulse" />
        <div className="absolute -top-10 right-10 h-72 w-72 bg-fuchsia-500/15 blur-[100px] rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl"
      >
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium text-emerald-400 mb-6 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Available for Senior &amp; Full Stack Opportunities</span>
        </div>

        {/* Greeting & Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[var(--app-text)] leading-tight">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-teal-300 text-transparent bg-clip-text">
            Jaya Surya M
          </span>
        </h1>

        {/* Dynamic Rotating Subtitle */}
        <div className="h-12 sm:h-14 mt-3 flex items-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={roleIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="text-xl sm:text-2xl md:text-3xl font-semibold text-[var(--app-brand)] flex items-center gap-2"
            >
              <Sparkles className="h-5 w-5 text-[var(--app-brand)] shrink-0 hidden sm:inline" />
              <span>{ROLES[roleIndex]}</span>
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Bio summary */}
        <p className="mt-6 text-base sm:text-lg text-[var(--app-muted)] max-w-2xl leading-relaxed">
          Full Stack Developer with <strong className="text-[var(--app-text)] font-semibold">4.7 years</strong> of overall experience, including <strong className="text-[var(--app-text)] font-semibold">3+ years</strong> building production web applications with Next.js (App Router), React, and TypeScript. Experienced in designing robust REST APIs, server-side Next.js API routes, <span className="text-[var(--app-brand)] font-medium">Primer.io payment gateway integrations</span>, real-time Socket.io, and <span className="text-[var(--app-brand)] font-medium">Meta CAPI server-side event tracking</span>.
        </p>

        {/* Quick Stats Banner */}
        <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-8 max-w-xl py-4 border-y border-[var(--app-border)]">
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-[var(--app-text)]">4.7+</div>
            <div className="text-xs sm:text-sm text-[var(--app-muted)]">Years Overall Exp</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-[var(--app-brand)]">3+</div>
            <div className="text-xs sm:text-sm text-[var(--app-muted)]">Years Next.js / React</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-[var(--app-text)]">Production</div>
            <div className="text-xs sm:text-sm text-[var(--app-muted)]">Healthcare &amp; FinTech</div>
          </div>
        </div>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-xl bg-[var(--app-brand)] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 hover:bg-[var(--app-brand-strong)] hover:shadow-purple-500/35 transition-all cursor-pointer group"
          >
            <span>Explore Featured Projects</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <a
            href="/resume.pdf"
            download="Jaya-Surya-Resume.pdf"
            onClick={() => trackEvent("resume_download", { source: "hero" })}
            className="inline-flex items-center gap-2 rounded-xl border border-[var(--app-border)] bg-[var(--app-surface)] px-6 py-3.5 text-sm font-semibold text-[var(--app-text)] hover:border-[var(--app-brand)] hover:bg-[var(--app-elevated)] transition-all cursor-pointer shadow-sm"
          >
            <Download className="h-4 w-4 text-[var(--app-brand)]" />
            <span>Download Resume</span>
          </a>

          {/* 1-Click Copy Email Pill */}
          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 rounded-xl border border-dashed border-[var(--app-border)] px-4 py-3 text-xs sm:text-sm font-medium text-[var(--app-muted)] hover:text-[var(--app-text)] hover:border-[var(--app-brand)] hover:bg-[var(--app-surface)] transition-all cursor-pointer"
            title="Click to copy email"
          >
            {copied ? (
              <>
                <MdCheck className="h-4 w-4 text-emerald-400" />
                <span className="text-emerald-400 font-semibold">Email Copied!</span>
              </>
            ) : (
              <>
                <MdContentCopy className="h-4 w-4" />
                <span>suryajaya4899@gmail.com</span>
              </>
            )}
          </button>
        </div>

        {/* Social Icons & Quick Connect */}
        <div className="flex items-center gap-5 mt-10 text-[var(--app-muted)]">
          <span className="text-xs uppercase tracking-wider font-semibold text-[var(--app-muted)]">
            Connect:
          </span>

          <a
            href="https://github.com/surya489"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--app-border)] bg-[var(--app-surface)] text-lg hover:text-[var(--app-brand)] hover:border-[var(--app-brand)] hover:scale-110 transition-all shadow-sm"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/jayasurya4899/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--app-border)] bg-[var(--app-surface)] text-lg hover:text-[var(--app-brand)] hover:border-[var(--app-brand)] hover:scale-110 transition-all shadow-sm"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:suryajaya4899@gmail.com"
            aria-label="Send Email"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--app-border)] bg-[var(--app-surface)] text-lg hover:text-[var(--app-brand)] hover:border-[var(--app-brand)] hover:scale-110 transition-all shadow-sm"
          >
            <MdEmail />
          </a>

          <a
            href="tel:+916380489800"
            aria-label="Call Mobile"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--app-border)] bg-[var(--app-surface)] text-base hover:text-[var(--app-brand)] hover:border-[var(--app-brand)] hover:scale-110 transition-all shadow-sm"
            title="+91 6380489800"
          >
            <FaPhoneAlt />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
