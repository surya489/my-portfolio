export default function Footer() {
  return (
    <footer className="border-t border-[var(--app-border)] bg-[var(--app-bg)]">
      <div className="mx-auto max-w-6xl px-6 py-8 text-center text-sm text-[var(--app-muted)]">
        © {new Date().getFullYear()} Jayasurya. All rights reserved.
      </div>
    </footer>
  );
}
