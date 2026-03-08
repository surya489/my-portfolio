import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--app-border)] bg-[var(--app-bg)]">
      <div className="mx-auto max-w-6xl px-6 py-8 text-center text-sm text-[var(--app-muted)]">
        <div className="mb-4 flex items-center justify-center gap-5 text-lg text-[var(--app-muted)]">
          <a
            href="https://github.com/surya489"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-[var(--app-brand)] transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/jayasurya4899/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-[var(--app-brand)] transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:suryajaya4899@gmail.com"
            aria-label="Email"
            className="hover:text-[var(--app-brand)] transition"
          >
            <MdEmail />
          </a>
        </div>
        © {new Date().getFullYear()} Jayasurya. All rights reserved.
      </div>
    </footer>
  );
}
