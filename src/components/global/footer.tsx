"use client"

import Link from "next/link"
import { Mail, Linkedin, Twitter, Github, Heart } from "lucide-react"

const footerLinks = {
  categories: [
    { name: "Technology", href: "#" },
    { name: "Business Strategy", href: "#" },
    { name: "Career Development", href: "#" },
    { name: "Learning & Education", href: "#" },
    { name: "Market Insights", href: "#" },
  ],
  resources: [
    { name: "About Us", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Contribute", href: "#" },
    { name: "Advertise", href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ],
}

export default function Footer() {
  return (
    <footer className="relative w-full bg-linear-to-b from-slate-100 via-white to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-black border-t border-slate-300 dark:border-slate-700/50 overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12 mb-12 md:mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-linear-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold text-base md:text-lg">
                I
              </div>
              <span className="font-bold text-base md:text-lg text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Insight Hub
              </span>
            </Link>
            <p className="text-xs md:text-sm text-slate-700 dark:text-slate-400 leading-relaxed">
              Your trusted source for professional insights on technology, business, careers, and markets.
            </p>
            <div className="flex items-center gap-2 md:gap-3 pt-3 md:pt-4">
              <Link
                href="#"
                className="p-1.5 md:p-2.5 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors group"
                aria-label="Twitter"
              >
                <Twitter className="w-3.5 h-3.5 md:w-4 md:h-4 text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
              </Link>
              <Link
                href="#"
                className="p-1.5 md:p-2.5 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5 md:w-4 md:h-4 text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
              </Link>
              <Link
                href="#"
                className="p-1.5 md:p-2.5 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors group"
                aria-label="GitHub"
              >
                <Github className="w-3.5 h-3.5 md:w-4 md:h-4 text-slate-600 dark:text-slate-400 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors" />
              </Link>
              <Link href="#" className="p-1.5 md:p-2.5 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors group" aria-label="Email">
                <Mail className="w-3.5 h-3.5 md:w-4 md:h-4 text-slate-600 dark:text-slate-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white mb-3 md:mb-4 text-sm md:text-base flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-linear-to-r from-blue-400 to-cyan-400 rounded-full"></span>
              Categories
            </h3>
            <ul className="space-y-2 md:space-y-3">
              {footerLinks.categories.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs md:text-sm text-slate-700 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white mb-3 md:mb-4 text-sm md:text-base flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-linear-to-r from-pink-400 to-rose-400 rounded-full"></span>
              Resources
            </h3>
            <ul className="space-y-2 md:space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs md:text-sm text-slate-700 dark:text-slate-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white mb-3 md:mb-4 text-sm md:text-base flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-linear-to-r from-purple-400 to-pink-400 rounded-full"></span>
              Legal
            </h3>
            <ul className="space-y-2 md:space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs md:text-sm text-slate-700 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-300 dark:border-slate-700/50 mb-6 md:mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
          <p className="text-xs md:text-sm text-slate-700 dark:text-slate-400 flex items-center gap-2 text-center md:text-left">
            © 2025 Insight Hub. Made with <Heart className="w-3 h-3 md:w-4 md:h-4 text-pink-500 fill-pink-500" /> for professionals.
          </p>
          <p className="text-xs md:text-sm text-slate-600 dark:text-slate-500">Discover. Learn. Grow. Together.</p>
        </div>
      </div>
    </footer>
  )
}
