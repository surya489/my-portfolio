"use client";

import { GitHubCalendar } from "react-github-calendar";
import Reveal from "@/components/ui/Reveal";
import { useEffect, useState } from "react";

export default function GithubActivity() {
  const [colorScheme, setColorScheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const updateTheme = () => {
      const activeTheme = document.documentElement.getAttribute("data-theme");
      setColorScheme(activeTheme === "light" ? "light" : "dark");
    };

    updateTheme();
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <h2 className="text-3xl font-bold mb-10">GitHub Activity</h2>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="app-card rounded-xl border p-6 overflow-x-auto">
        <GitHubCalendar
          username="surya489"
          blockSize={15}
          blockMargin={5}
          fontSize={16}
          colorScheme={colorScheme}
        />
        </div>
      </Reveal>
    </section>
  );
}
