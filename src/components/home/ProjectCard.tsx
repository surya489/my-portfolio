'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  image: string;
};

export default function ProjectCard({
  slug,
  title,
  description,
  tech,
  github,
  demo,
  image,
}: Props) {
  return (
    <Link href={`/projects/${slug}`}>
      <motion.div
        whileHover={{ y: -6, scale: 1.02 }}
        transition={{ duration: 0.2 }}
        className="bg-[#16161c] rounded-xl border border-zinc-800 overflow-hidden hover:border-purple-500 transition"
      >
        
        <Image
          src={image}
          alt={title}
          width={600}
          height={350}
          className="w-full h-48 object-cover"
        />

        <div className="p-6">
          <h3 className="text-xl font-semibold">{title}</h3>

          <p className="text-gray-400 mt-3">{description}</p>

          <div className="flex flex-wrap gap-2 mt-4">
            {tech.map((item) => (
              <span
                key={item}
                className="text-xs bg-purple-600/20 text-purple-400 px-2 py-1 rounded"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4 mt-6 text-sm">
            <a
              href={github}
              target="_blank"
              className="text-purple-400 hover:underline"
            >
              GitHub
            </a>

            <a
              href={demo}
              target="_blank"
              className="text-purple-400 hover:underline"
            >
              Live Demo
            </a>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}