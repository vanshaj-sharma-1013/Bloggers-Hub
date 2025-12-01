"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  // Start as `undefined` → we render nothing until we know the theme
  const [theme, setTheme] = useState<"light" | "dark">();

  useEffect(() => {
    // 1. Check localStorage first (user preference)
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;

    // 2. Fallback to system preference
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const initial = saved ?? (prefersDark ? "dark" : "light");

    // Apply immediately to avoid flash
    if (initial === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // 3. Update state outside the effect body to satisfy ESLint
    queueMicrotask(() => {
      setTheme(initial);
    });
  }, []);

  // Listen to OS theme changes (only if user hasn't saved a preference)
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handler = (e: MediaQueryListEvent) => {
      if (localStorage.getItem("theme") === null) {
        const newTheme = e.matches ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.classList.toggle("dark", e.matches);
      }
    };

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // Render nothing until we know the theme → prevents hydration mismatch
  if (theme === undefined) {
    return (
      <div className="w-11 h-11 md:w-12 md:h-12 rounded-lg bg-slate-300 dark:bg-slate-700 animate-pulse" />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      className="relative p-2.5 md:p-3 rounded-lg bg-slate-200/70 dark:bg-slate-700/60 hover:bg-slate-300/80 dark:hover:bg-slate-600/80 border border-slate-300/50 dark:border-slate-600/50 backdrop-blur-xl transition-all duration-300 group shadow-lg hover:shadow-blue-300/20 dark:hover:shadow-blue-500/20"
    >
      <div className="relative w-5 h-5 md:w-6 md:h-6">
        {/* Smooth cross-fade + subtle rotate */}
        <Moon
          className={`absolute inset-0 w-5 h-5 md:w-6 md:h-6 transition-all duration-500 ${
            isDark
              ? "opacity-100 rotate-0 scale-100 text-slate-300"
              : "opacity-0 rotate-90 scale-75 text-slate-400"
          } group-hover:text-blue-600 dark:group-hover:text-blue-300`}
        />
        <Sun
          className={`absolute inset-0 w-5 h-5 md:w-6 md:h-6 transition-all duration-500 ${
            !isDark
              ? "opacity-100 rotate-0 scale-100 text-yellow-600"
              : "opacity-0 -rotate-90 scale-75 text-yellow-500"
          } group-hover:text-yellow-700 dark:group-hover:text-yellow-400`}
        />
      </div>

      {/* Hover glow */}
      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-r from-blue-400/20 dark:from-blue-500/20 to-purple-400/20 dark:to-purple-500/20 blur-xl" />
      </div>
    </button>
  );
}
