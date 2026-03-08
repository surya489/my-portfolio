"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24 text-center">
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Interested in working together?
        </h2>

        <p className="text-gray-400 mb-8">
          I'm always open to discussing new opportunities,
          interesting projects, or collaborations.
        </p>

        <Link
          href="/contact"
          className="inline-block bg-purple-600 px-6 py-3 rounded-lg hover:bg-purple-500 transition"
        >
          Contact Me
        </Link>
      </motion.div>

    </section>
  );
}