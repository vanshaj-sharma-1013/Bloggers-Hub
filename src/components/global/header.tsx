"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";
import ThemeToggle from "../theme-toggle";
import { CATEGORIES } from "@/lib/dummyBlogs";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      label: "Categories",
      href: "/blogs",
      dropDownItems: CATEGORIES,
      color: "hover:text-blue-400",
    },
    { label: "Technology", color: "hover:text-blue-400" },
    { label: "Business", color: "hover:text-emerald-400" },
    { label: "Career", color: "hover:text-purple-400" },
    { label: "Education", color: "hover:text-orange-400" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          isScrolled
            ? "border-b border-slate-200/30 dark:border-slate-700/50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl supports-backdrop-filter:bg-white/70 dark:supports-backdrop-filter:bg-slate-900/70 py-3"
            : "border-b border-slate-200/20 dark:border-slate-700/30 bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl supports-backdrop-filter:bg-white/20 dark:supports-backdrop-filter:bg-slate-900/20 py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div
                className={`rounded-lg bg-linear-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold text-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 ${
                  isScrolled ? "w-8 h-8 text-base" : "w-9 h-9"
                }`}
              >
                I
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isScrolled ? "w-0 opacity-0" : "w-auto opacity-100"
                }`}
              >
                <span className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors whitespace-nowrap">
                  Insight Hub
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href || "#"}
                  className={`font-medium text-slate-700 dark:text-slate-300 dark:${
                    item.color
                  } hover:text-slate-900 dark:hover:text-slate-100 transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/50 ${
                    isScrolled ? "text-sm" : "text-sm"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2 md:gap-3">
              <button
                className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors group"
                aria-label="Search"
              >
                <Search
                  className={`text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors ${
                    isScrolled ? "w-4 h-4" : "w-5 h-5"
                  }`}
                />
              </button>

              <ThemeToggle />

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="w-5 h-5 text-slate-900 dark:text-white" />
                ) : (
                  <Menu className="w-5 h-5 text-slate-900 dark:text-white" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <nav className="md:hidden pb-4 flex flex-col gap-2 border-t border-slate-200 dark:border-slate-700/50 pt-4 mt-4 animate-in fade-in slide-in-from-top-2 duration-300">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href="#"
                  className={`block px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 dark:${item.color} hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </header>
      <div className="pt-16 md:pt-20" />
    </>
  );
}
