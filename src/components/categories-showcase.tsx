"use client"

import Link from "next/link"
import { Code, TrendingUp, Briefcase, BookOpen, BarChart3, Zap } from "lucide-react"
import { useState } from "react"

const categories = [
  {
    id: "technology",
    name: "Technology",
    description: "AI, cloud computing, development trends",
    icon: Code,
    color: "from-blue-600 to-cyan-500",
    bgColor: "bg-blue-500/10",
  },
  {
    id: "business",
    name: "Business Strategy",
    description: "Leadership, startups, market insights",
    icon: TrendingUp,
    color: "from-emerald-600 to-teal-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    id: "career",
    name: "Career Development",
    description: "Skills, interviews, growth strategies",
    icon: Briefcase,
    color: "from-purple-600 to-pink-500",
    bgColor: "bg-purple-500/10",
  },
  {
    id: "education",
    name: "Learning & Education",
    description: "Courses, certifications, resources",
    icon: BookOpen,
    color: "from-orange-600 to-yellow-500",
    bgColor: "bg-orange-500/10",
  },
  {
    id: "market",
    name: "Market Insights",
    description: "Stocks, crypto, economic analysis",
    icon: BarChart3,
    color: "from-rose-600 to-pink-500",
    bgColor: "bg-rose-500/10",
  },
  {
    id: "innovation",
    name: "Innovation",
    description: "Emerging tech, disruptive ideas",
    icon: Zap,
    color: "from-cyan-600 to-blue-500",
    bgColor: "bg-cyan-500/10",
  },
]

export default function CategoriesShowcase() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-slate-100 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            Explore{" "}
            <span className="bg-gradient-to-r from-blue-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Categories
            </span>
          </h2>
          <p className="text-base md:text-lg text-slate-400">Dive into content tailored to your interests</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => {
            const Icon = category.icon
            const isHovered = hoveredId === category.id

            return (
              <Link
                key={category.id}
                href="#"
                onMouseEnter={() => setHoveredId(category.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group"
              >
                <div
                  className={`relative h-48 md:h-56 p-5 md:p-6 lg:p-8 rounded-xl md:rounded-2xl border transition-all duration-300 overflow-hidden ${isHovered ? "border-blue-400 dark:border-white/30 shadow-2xl dark:shadow-2xl" : "border-slate-300 dark:border-slate-700/50"}`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-200/50 dark:from-slate-800/80 to-slate-100/50 dark:to-slate-900/80"></div>

                  {/* Animated accent line */}
                  <div
                    className={`absolute top-0 left-0 h-1 bg-gradient-to-r ${category.color} transition-all duration-300 ${isHovered ? "w-full" : "w-0"}`}
                  ></div>

                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div>
                      <div
                        className={`w-12 h-12 md:w-14 md:h-14 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4 transition-all duration-300 ${category.bgColor} group-hover:scale-110`}
                      >
                        <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                      </div>
                      <h3 className="text-base md:text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-xs md:text-sm text-slate-700 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-300 transition-colors">
                        {category.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Explore
                      <svg
                        className="w-4 h-4 group-hover:translate-x-2 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
