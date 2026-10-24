"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, ArrowRight, Check, Copy, Phone, MapPin, Sparkles } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function ContactCTA() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("suryajaya4899@gmail.com");
      setCopied(true);
      trackEvent("copy_email", { source: "contact_cta" });
      setTimeout(() => setCopied(false), 2400);
    } catch {
      // Fallback
    }
  };

  return (
    <section className="mx-auto max-w-5xl px-6 py-24 text-center relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-full max-w-2xl h-80 bg-gradient-to-r from-purple-600/15 via-indigo-600/15 to-teal-500/15 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative rounded-3xl border border-[var(--app-border)] bg-[var(--app-surface)]/80 backdrop-blur-xl p-8 sm:p-14 shadow-xl"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--app-brand)]/30 bg-[var(--app-brand-soft)] px-4 py-1.5 text-xs font-semibold text-[var(--app-brand)] mb-6">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Let&apos;s Build Something Impactful</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--app-text)] mb-4">
          Ready to scale your next web platform?
        </h2>

        <p className="text-[var(--app-muted)] text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
          Whether you need a high-performance Next.js application, server-side API integration, or an end-to-end full stack engineer, my inbox is always open.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-[var(--app-brand)] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 hover:bg-[var(--app-brand-strong)] hover:shadow-purple-500/35 transition-all cursor-pointer group"
          >
            <span>Send a Message</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 rounded-xl border border-[var(--app-border)] bg-[var(--app-elevated)] px-6 py-3.5 text-sm font-semibold text-[var(--app-text)] hover:border-[var(--app-brand)] transition-all cursor-pointer shadow-sm"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 text-emerald-400" />
                <span className="text-emerald-400">Copied suryajaya4899@gmail.com</span>
              </>
            ) : (
              <>
                <Mail className="h-4 w-4 text-[var(--app-brand)]" />
                <span>Copy Email Address</span>
                <Copy className="h-3.5 w-3.5 text-[var(--app-muted)]" />
              </>
            )}
          </button>

          <a
            href="tel:+916380489800"
            className="inline-flex items-center gap-2 rounded-xl border border-[var(--app-border)] bg-[var(--app-surface)] px-5 py-3.5 text-sm font-semibold text-[var(--app-text)] hover:border-[var(--app-brand)] transition-all cursor-pointer"
          >
            <Phone className="h-4 w-4 text-[var(--app-brand)]" />
            <span>+91 6380489800</span>
          </a>
        </div>

        {/* Location & Relocation note */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-[var(--app-muted)] font-medium">
          <MapPin className="h-3.5 w-3.5 text-[var(--app-brand)]" />
          <span>Based in Coimbatore, Tamil Nadu • Open to Remote &amp; Relocation</span>
        </div>
      </motion.div>
    </section>
  );
}
