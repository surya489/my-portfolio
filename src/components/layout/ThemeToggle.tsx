"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type ThemeName = "midnight" | "light";

const STORAGE_KEY = "portfolio-theme";

function applyTheme(theme: ThemeName) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem(STORAGE_KEY, theme);
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeName>(() => {
    if (typeof window === "undefined") {
      return "midnight";
    }
    const savedTheme = localStorage.getItem(STORAGE_KEY);
    return savedTheme === "light" ? "light" : "midnight";
  });

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme: ThemeName = theme === "midnight" ? "light" : "midnight";
    setTheme(nextTheme);
    applyTheme(nextTheme);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="rounded-lg border border-[var(--app-border)] bg-[var(--app-surface)] p-2 text-[var(--app-text)]"
    >
      {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
}
