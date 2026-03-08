"use client";

import { GitHubCalendar } from "react-github-calendar";
import Reveal from "@/components/ui/Reveal";
import { useEffect, useState } from "react";

export default function GithubActivity() {
  const [colorScheme, setColorScheme] = useState<"light" | "dark">("dark");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const updateTheme = () => {
      const activeTheme = document.documentElement.getAttribute("data-theme");
      setColorScheme(activeTheme === "light" ? "light" : "dark");
    };

    updateTheme();
    const timer = window.setTimeout(() => setReady(true), 250);
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <h2 className="text-3xl font-bold mb-10">GitHub Activity</h2>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="app-card min-h-[170px] rounded-xl border p-6 overflow-x-auto">
        {!ready ? (
          <div className="h-[120px] animate-pulse rounded-lg bg-[var(--app-elevated)]" />
        ) : (
          <GitHubCalendar
            username="surya489"
            blockSize={15}
            blockMargin={5}
            fontSize={16}
            colorScheme={colorScheme}
          />
        )}
        </div>
      </Reveal>
    </section>
  );
}
