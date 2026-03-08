"use client";

import { GitHubCalendar } from "react-github-calendar";

export default function GithubActivity() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-3xl font-bold mb-10">GitHub Activity</h2>

      <div className="bg-[#16161c] border border-zinc-800 rounded-xl p-6 overflow-x-auto">
        <GitHubCalendar
          username="surya489"
          blockSize={15}
          blockMargin={5}
          fontSize={16}
          colorScheme="dark"
        />
      </div>
    </section>
  );
}