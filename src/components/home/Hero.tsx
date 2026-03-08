"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { trackEvent } from "@/lib/analytics";

export default function Hero() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-28">

      <div className="absolute inset-0 -z-10 flex justify-center items-start">
        <div className="h-87.5 w-175 bg-purple-600/20 blur-[140px] rounded-full"></div>
        <div className="absolute h-62.5 w-125 bg-fuchsia-500/20 blur-[120px] rounded-full"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        <p className="text-purple-400 text-sm mb-4">
          Hi, I&apos;m
        </p>

        <h1 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-purple-400 via-purple-500 to-fuchsia-500 text-transparent bg-clip-text">
          Jayasurya
        </h1>

        <h2 className="text-3xl md:text-4xl text-gray-400 mt-3">
          React & Next.js Frontend Developer
        </h2>

        <p className="mt-6 text-gray-400 max-w-xl leading-relaxed">
          Frontend Developer with 4+ years of experience building scalable web applications using React and Next.js.
        I specialize in creating high-performance user interfaces and also have experience working with backend technologies, allowing me to contribute as a full-stack developer when needed.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="rounded-lg bg-(--app-brand-strong) px-6 py-3 text-white hover:bg-(--app-brand) transition"
          >
            View Projects
          </Link>

          <a
            href="/resume.pdf"
            download="Jayasurya-Resume.pdf"
            onClick={() => trackEvent("resume_download", { source: "hero" })}
            className="rounded-lg border border-(--app-brand-strong) px-6 py-3 text-(--app-text) hover:bg-(--app-brand-strong) hover:text-white transition"
          >
            Download Resume
          </a>
        </div>

        <div className="flex items-center gap-6 mt-10 text-xl text-gray-400">

          <a
            href="https://github.com/surya489"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 hover:scale-110 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/jayasurya4899/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 hover:scale-110 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:suryajaya4899@gmail.com"
            className="hover:text-purple-400 hover:scale-110 transition"
          >
            <MdEmail />
          </a>

        </div>
      </motion.div>
    </section>
  );
}
