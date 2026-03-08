"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        <p className="text-purple-400 text-sm mb-4">
          Hi, my name is
        </p>

        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Jayasurya
        </h1>

        <h2 className="text-3xl md:text-4xl text-gray-400 mt-3">
          Frontend Developer
        </h2>

        <p className="mt-6 text-gray-400 max-w-xl">
          I build scalable web applications using React, Next.js, and modern
          frontend technologies. With 4+ years of experience, I focus on
          performance, clean architecture, and great user experiences.
        </p>

        <div className="mt-8 flex gap-4">
          <Link
            href="/projects"
            className="bg-purple-600 px-6 py-3 rounded-lg hover:bg-purple-500 transition"
          >
            View Projects
          </Link>

          <a
            href="/resume.pdf"
            className="border border-purple-600 px-6 py-3 rounded-lg hover:bg-purple-600 hover:text-white transition"
          >
            Download Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}