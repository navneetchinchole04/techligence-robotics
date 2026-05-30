"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(t);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/industries", label: "Industries" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="w-full border-b border-gray-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur sticky top-0 z-50 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-white rounded-xl p-2 shadow-sm flex-shrink-0">
            <img src="/techligence-full-logo.png" alt="Techligence Logo" className="w-8 h-8 object-contain dark:invert" />
          </div>
          <span className="text-[28px] font-bold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Techligence
          </span>
        </Link>

        <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-700 dark:text-slate-300">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={`hover:text-cyan-500 transition ${pathname === link.href ? "text-cyan-500" : ""}`}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex gap-4 items-center">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-10 h-10 rounded-xl border border-gray-300 dark:border-slate-700 flex items-center justify-center bg-white dark:bg-slate-900 hover:scale-105 transition"
          >
            {mounted ? (theme === "dark" ? "☀️" : "🌙") : "🌙"}
          </button>

          <Link href="/contact" className="hidden md:block bg-cyan-500 hover:bg-cyan-400 text-white px-5 py-2 rounded-xl transition shadow-lg shadow-cyan-500/30 text-sm font-semibold">
            Book Demo
          </Link>

          <button
            className="md:hidden w-10 h-10 rounded-xl border border-gray-300 dark:border-slate-700 flex items-center justify-center bg-white dark:bg-slate-900"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
              className={`text-sm font-semibold hover:text-cyan-500 transition ${pathname === link.href ? "text-cyan-500" : "text-slate-700 dark:text-slate-300"}`}>
              {link.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="bg-cyan-500 text-white px-5 py-2 rounded-xl text-sm font-semibold text-center">
            Book Demo
          </Link>
        </div>
      )}
    </nav>
  );
}