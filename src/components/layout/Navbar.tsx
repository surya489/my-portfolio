"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { BookText, FileDown, FolderKanban, House, Mail, Menu, X, Sparkles } from "lucide-react";
import ThemeToggle from "@/components/layout/ThemeToggle";
import { trackEvent } from "@/lib/analytics";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home", icon: House, note: "Landing and overview" },
    {
      href: "/projects",
      label: "Projects",
      icon: FolderKanban,
      note: "Production work & case studies",
    },
    {
      href: "/contact",
      label: "Contact",
      icon: Mail,
      note: "Work inquiries & hiring",
    },
    {
      href: "/blog",
      label: "Blog",
      icon: BookText,
      note: "Articles and insights",
    },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--app-border)]/60 bg-[var(--app-bg)]/85 backdrop-blur-md transition-colors duration-200">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
        {/* Brand Logo */}
        <Link href="/" className="group flex items-center gap-2 text-xl font-extrabold tracking-tight text-[var(--app-text)]">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 text-xs font-black text-white shadow-md shadow-purple-500/20 group-hover:scale-105 transition-transform">
            JS
          </span>
          <span className="bg-gradient-to-r from-[var(--app-text)] via-[var(--app-text)] to-[var(--app-brand)] bg-clip-text">
            Jaya Surya<span className="text-emerald-400">.</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1.5 text-sm">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={`desktop-${item.href}`}
                href={item.href}
                className={`relative rounded-xl px-4 py-2 font-medium transition-all duration-200 ${
                  active
                    ? "bg-[var(--app-brand-soft)] text-[var(--app-brand)] font-semibold shadow-xs"
                    : "text-[var(--app-muted)] hover:bg-[var(--app-elevated)] hover:text-[var(--app-text)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <div className="h-5 w-px bg-[var(--app-border)] mx-2" />

          <ThemeToggle />

          <a
            href="/resume.pdf"
            download="Jaya-Surya-Resume.pdf"
            onClick={() => trackEvent("resume_download", { source: "navbar_desktop" })}
            className="ml-2 inline-flex items-center gap-1.5 rounded-xl bg-[var(--app-brand)] px-4 py-2 text-xs sm:text-sm font-semibold text-white shadow-md shadow-purple-500/20 hover:bg-[var(--app-brand-strong)] hover:shadow-purple-500/30 transition-all cursor-pointer"
          >
            <FileDown className="h-3.5 w-3.5" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle className="h-9 w-9" />
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            className="rounded-xl border border-[var(--app-border)] bg-[var(--app-surface)] p-2 text-[var(--app-text)] cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden"
          >
            <div
              className="fixed inset-0 top-[65px] bg-black/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute left-0 right-0 top-full px-4 pt-3 pb-6 z-50"
            >
              <div className="mx-auto max-w-lg rounded-2xl border border-[var(--app-border)] bg-[var(--app-surface)] p-4 shadow-2xl backdrop-blur-xl">
                <div className="grid gap-2">
                  {navItems.map((item, index) => {
                    const Icon = item.icon;
                    const active = isActive(item.href);

                    return (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: index * 0.04 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className={`flex items-center gap-3 rounded-xl border px-3.5 py-3 transition ${
                            active
                              ? "border-[var(--app-brand)]/40 bg-[var(--app-brand-soft)] text-[var(--app-text)] font-semibold"
                              : "border-transparent bg-[var(--app-elevated)] text-[var(--app-text)] hover:border-[var(--app-brand)]/40 hover:bg-[var(--app-surface)]"
                          }`}
                        >
                          <span
                            className={`rounded-lg p-2 ${
                              active
                                ? "bg-[var(--app-brand)] text-white"
                                : "bg-[var(--app-brand-soft)] text-[var(--app-brand)]"
                            }`}
                          >
                            <Icon size={16} />
                          </span>
                          <span>
                            <span className="block text-sm font-medium">{item.label}</span>
                            <span className="block text-xs text-[var(--app-muted)]">{item.note}</span>
                          </span>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="mt-4 pt-3 border-t border-[var(--app-border)] flex items-center gap-3">
                  <motion.a
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 0.15 }}
                    href="/resume.pdf"
                    download="Jaya-Surya-Resume.pdf"
                    onClick={() => {
                      trackEvent("resume_download", { source: "navbar_mobile" });
                      setOpen(false);
                    }}
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[var(--app-brand)] px-4 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[var(--app-brand-strong)]"
                  >
                    <FileDown size={16} />
                    Download Resume
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
