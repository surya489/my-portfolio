"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ThemeName = "midnight" | "light";
type Props = {
  onToggle?: () => void;
  className?: string;
};

const STORAGE_KEY = "portfolio-theme";

function applyTheme(theme: ThemeName) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem(STORAGE_KEY, theme);
}

export default function ThemeToggle({ onToggle, className = "" }: Props) {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<ThemeName>("midnight");

  useEffect(() => {
    const savedTheme = localStorage.getItem(STORAGE_KEY) as ThemeName | null;
    const initialTheme: ThemeName = savedTheme === "light" ? "light" : "midnight";
    setTheme(initialTheme);
    applyTheme(initialTheme);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme: ThemeName = theme === "midnight" ? "light" : "midnight";
    setTheme(nextTheme);
    applyTheme(nextTheme);
    onToggle?.();
  };

  if (!mounted) {
    return (
      <div className={`h-9 w-9 rounded-xl border border-[var(--app-border)] bg-[var(--app-surface)] opacity-0 ${className}`} />
    );
  }

  const isLight = theme === "light";

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      aria-label={`Switch to ${isLight ? "dark" : "light"} mode`}
      className={`relative flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--app-border)] bg-[var(--app-surface)] text-[var(--app-text)] shadow-sm backdrop-blur-md transition-colors hover:border-[var(--app-brand)]/60 hover:bg-[var(--app-elevated)] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--app-brand)]/40 ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isLight ? (
          <motion.div
            key="moon"
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="flex items-center justify-center text-indigo-600 dark:text-indigo-400"
          >
            <Moon size={19} className="stroke-[2.2]" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="flex items-center justify-center text-amber-400"
          >
            <Sun size={19} className="stroke-[2.2]" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
