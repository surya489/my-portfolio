"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

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
    onToggle?.();
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={`rounded-lg border border-(--app-border) bg-(--app-surface) p-2 text-(--app-text) transition hover:border-(--app-brand)/40 hover:bg-(--app-elevated) ${className} cursor-pointer`}
    >
      {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
}
