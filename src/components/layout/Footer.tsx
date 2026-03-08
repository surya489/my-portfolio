export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-[#0F0F13]">
      <div className="mx-auto max-w-6xl px-6 py-8 text-center text-sm text-zinc-400">
        © {new Date().getFullYear()} Jayasurya. All rights reserved.
      </div>
    </footer>
  );
}