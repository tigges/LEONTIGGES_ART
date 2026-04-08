import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-100 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-neutral-400">
          © {new Date().getFullYear()} Portfolio. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="mailto:hello@example.com"
            className="text-xs text-neutral-400 hover:text-neutral-900 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
