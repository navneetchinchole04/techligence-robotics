"use client";

import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      }
      className="w-12 h-12 rounded-xl border border-gray-300 dark:border-slate-700 flex items-center justify-center bg-white dark:bg-slate-900 text-black dark:text-white transition"
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}