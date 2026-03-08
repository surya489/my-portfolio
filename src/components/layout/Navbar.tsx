"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { BookText, FileDown, FolderKanban, House, Mail, Menu, X } from "lucide-react";
import ThemeToggle from "@/components/layout/ThemeToggle";
import { trackEvent } from "@/lib/analytics";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home", icon: House, note: "Landing and intro" },
    {
      href: "/projects",
      label: "Projects",
      icon: FolderKanban,
      note: "Featured and case studies",
    },
    {
      href: "/contact",
      label: "Contact",
      icon: Mail,
      note: "Work inquiries",
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
    <header className="sticky top-0 z-50 border-b border-[var(--app-border)] bg-[var(--app-bg)] backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-[var(--app-text)]">
          Jayasurya
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2 text-sm">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={`desktop-${item.href}`}
                href={item.href}
                className={`rounded-lg px-3 py-2 transition ${
                  active
                    ? "bg-[var(--app-brand-soft)] text-[var(--app-brand)]"
                    : "text-[var(--app-muted)] hover:bg-[var(--app-elevated)] hover:text-[var(--app-text)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <ThemeToggle />

          <a
            href="/resume.pdf"
            download="Jayasurya-Resume.pdf"
            onClick={() => trackEvent("resume_download", { source: "navbar_desktop" })}
            className="ml-2 rounded-lg bg-[var(--app-brand-strong)] px-4 py-2 text-sm font-medium text-white transition hover:bg-[var(--app-brand)]"
          >
            Download Resume
          </a>
        </div>

        {/* Mobile Button */}
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden rounded-xl border border-[var(--app-border)] bg-[var(--app-surface)] p-2 text-[var(--app-text)]"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

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
              className="fixed inset-0 top-[73px] bg-black/45 backdrop-blur-[2px]"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -14, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
              className="absolute left-0 right-0 top-full px-4 pt-3"
            >
              <div className="mx-auto max-w-6xl rounded-2xl bg-gradient-to-br from-fuchsia-500/40 via-purple-500/25 to-purple-400/30 p-[1px] shadow-[0_18px_45px_-18px_rgba(168,85,247,0.75)]">
                <div className="rounded-2xl border border-[var(--app-border)] bg-[var(--app-surface)] p-3">
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
                            className={`flex items-center gap-3 rounded-xl border px-3 py-3 transition ${
                              active
                                ? "border-[var(--app-brand)]/40 bg-[var(--app-brand-soft)] text-[var(--app-text)]"
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

                  <div className="mt-3 flex items-center gap-3">
                    <motion.a
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: 0.15 }}
                      href="/resume.pdf"
                      download="Jayasurya-Resume.pdf"
                      onClick={() => {
                        trackEvent("resume_download", { source: "navbar_mobile" });
                        setOpen(false);
                      }}
                      className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[var(--app-brand-strong)] px-4 py-3 text-sm font-medium text-white transition hover:bg-[var(--app-brand)]"
                    >
                      <FileDown size={16} />
                      Download Resume
                    </motion.a>
                    <ThemeToggle
                      onToggle={() => setOpen(false)}
                      className="h-11 w-11 shrink-0 rounded-xl"
                    />
                  </div>
                  
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
