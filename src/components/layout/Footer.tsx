import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--app-border)] bg-[var(--app-bg)] py-10 transition-colors">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-[var(--app-muted)]">
        <div>
          <p className="font-semibold text-[var(--app-text)]">
            Jaya Surya M <span className="text-[var(--app-brand)]">•</span> Full Stack Developer
          </p>
          <p className="text-xs text-[var(--app-muted)] mt-1">
            Built with Next.js (App Router), React, TypeScript &amp; Framer Motion.
          </p>
        </div>

        <div className="flex items-center gap-5 text-lg text-[var(--app-muted)]">
          <a
            href="https://github.com/surya489"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="hover:text-[var(--app-brand)] hover:scale-110 transition-all"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/jayasurya4899/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="hover:text-[var(--app-brand)] hover:scale-110 transition-all"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:suryajaya4899@gmail.com"
            aria-label="Send Email"
            className="hover:text-[var(--app-brand)] hover:scale-110 transition-all"
          >
            <MdEmail />
          </a>
        </div>

        <div className="text-xs text-[var(--app-muted)]">
          © {new Date().getFullYear()} Jaya Surya M. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
