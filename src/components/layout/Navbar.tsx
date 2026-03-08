"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-zinc-800 bg-[#0F0F13]">
      <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-white">
          Jayasurya
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-sm text-zinc-300">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>

          <a
            href="/resume.pdf"
            className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-500 transition"
          >
            Resume
          </a>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-zinc-800 bg-[#0F0F13]">
          <div className="flex flex-col px-6 py-4 gap-4 text-zinc-300">

            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>

            <Link href="/projects" onClick={() => setOpen(false)}>
              Projects
            </Link>

            <Link href="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>

            <a
              href="/resume.pdf"
              className="bg-purple-600 px-4 py-2 rounded-lg text-center hover:bg-purple-500 transition"
            >
              Resume
            </a>

          </div>
        </div>
      )}
    </header>
  );
}