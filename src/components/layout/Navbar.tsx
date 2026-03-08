"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { BookText, FileDown, FolderKanban, House, Mail, Menu, X } from "lucide-react";
import ThemeToggle from "@/components/layout/ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

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

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--app-border)] bg-[var(--app-bg)] backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-[var(--app-text)]">
          Jayasurya
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-sm text-[var(--app-muted)]">
          <Link href="/" className="hover:text-[var(--app-text)]">Home</Link>
          <Link href="/projects" className="hover:text-[var(--app-text)]">Projects</Link>
          <Link href="/blog" className="hover:text-[var(--app-text)]">Blog</Link>
          <Link href="/contact" className="hover:text-[var(--app-text)]">Contact</Link>
          <ThemeToggle />

          <a
            href="/resume.pdf"
            download="Jayasurya-Resume.pdf"
            className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-500 transition"
          >
            Resume
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
                            className="flex items-center gap-3 rounded-xl border border-transparent bg-[var(--app-elevated)] px-3 py-3 text-[var(--app-text)] transition hover:border-[var(--app-brand)]/40 hover:bg-[var(--app-surface)]"
                          >
                            <span className="rounded-lg bg-[var(--app-brand-soft)] p-2 text-[var(--app-brand)]">
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

                  <motion.a
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 0.15 }}
                    href="/resume.pdf"
                    download="Jayasurya-Resume.pdf"
                    onClick={() => setOpen(false)}
                    className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-[var(--app-brand-strong)] px-4 py-3 text-sm font-medium text-white"
                  >
                    <FileDown size={16} />
                    Download Resume
                  </motion.a>

                  <div className="mt-3 flex justify-center">
                    <ThemeToggle />
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
