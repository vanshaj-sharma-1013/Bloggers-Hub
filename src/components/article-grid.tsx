"use client"

import Image from "next/image"
import Link from "next/link"
import { Clock, User, ArrowUpRight } from "lucide-react"

const articles = [
  {
    id: 1,
    title: "Machine Learning for Business Applications",
    excerpt: "Practical ML implementations driving real business value.",
    category: "Technology",
    author: "Dr. Lisa Park",
    readTime: "8 min",
    image: "/machine-learning.jpg",
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    id: 2,
    title: "Personal Finance: Building Wealth in Your 20s",
    excerpt: "Smart financial strategies for early-career professionals.",
    category: "Education",
    author: "Marcus Johnson",
    readTime: "7 min",
    image: "/personal-finance.jpg",
    gradient: "from-orange-600 to-yellow-500",
  },
  {
    id: 3,
    title: "Market Trends: Tech Sector Outlook 2025",
    excerpt: "Analysis of emerging opportunities and market dynamics.",
    category: "Market",
    author: "Thomas Anderson",
    readTime: "6 min",
    image: "/stock-market-trends.jpg",
    gradient: "from-rose-600 to-pink-500",
  },
  {
    id: 4,
    title: "The Art of Remote Team Management",
    excerpt: "Building cohesion and productivity in distributed teams.",
    category: "Business",
    author: "Sofia Martinez",
    readTime: "8 min",
    image: "/remote-work-team.jpg",
    gradient: "from-emerald-600 to-teal-500",
  },
  {
    id: 5,
    title: "Web Development: Emerging Frameworks 2025",
    excerpt: "New tools and frameworks reshaping web development.",
    category: "Technology",
    author: "Chris Lee",
    readTime: "9 min",
    image: "/web-development.jpg",
    gradient: "from-purple-600 to-pink-500",
  },
  {
    id: 6,
    title: "Cybersecurity Best Practices for SMBs",
    excerpt: "Protect your business with essential security measures.",
    category: "Technology",
    author: "Kevin Zhang",
    readTime: "7 min",
    image: "/cybersecurity-network.png",
    gradient: "from-red-600 to-rose-500",
  },
]

export default function ArticleGrid() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-linear-to-b from-slate-100 via-white to-slate-50 dark:from-slate-800 dark:via-slate-900 dark:to-slate-950 relative overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-br from-blue-500/15 to-transparent rounded-full blur-3xl"></div>
        <div
          className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-linear-to-br from-cyan-500/10 to-transparent rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-linear-to-br from-pink-500/10 to-transparent rounded-full blur-3xl animate-float"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            <span className="text-slate-900 dark:text-white">Discover More</span>{" "}
            <span className="bg-linear-to-r from-cyan-600 dark:from-cyan-400 via-blue-600 dark:via-blue-400 to-purple-600 dark:to-purple-400 bg-clip-text text-transparent">
              Articles
            </span>
          </h2>
          <p className="text-base md:text-lg text-slate-700 dark:text-slate-400">Explore our latest insights and perspectives</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-max">
          {articles.map((article) => (
            <Link key={article.id} href="#" className="group h-full">
              <article className="relative h-full rounded-xl md:rounded-2xl overflow-hidden bg-linear-to-br from-slate-100/40 dark:from-slate-700/30 to-slate-50/40 dark:to-slate-800/30 border border-slate-300/40 dark:border-slate-600/30 hover:border-slate-400/60 dark:hover:border-slate-500/60 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-300/10 dark:hover:shadow-blue-500/10 flex flex-col">
                {/* Image container with overlay */}
                <div className="relative h-32 md:h-40 overflow-hidden">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950 dark:from-slate-950 via-slate-900/20 dark:via-slate-900/20 to-transparent"></div>

                  {/* Category badge overlay */}
                  <div
                    className={`absolute top-2 md:top-3 right-2 md:right-3 px-2.5 md:px-3 py-1 md:py-1.5 text-xs font-bold text-white bg-linear-to-r ${article.gradient} rounded-lg opacity-0 group-hover:opacity-100 transition-opacity`}
                  >
                    {article.category}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-4 md:p-5 flex flex-col">
                  <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors line-clamp-2 mb-2 md:mb-3">
                    {article.title}
                  </h3>

                  <p className="text-xs md:text-sm text-slate-700 dark:text-slate-400 line-clamp-2 mb-auto">{article.excerpt}</p>

                  <div className="space-y-3 md:space-y-4 mt-3 md:mt-4 pt-3 md:pt-4 border-t border-slate-300 dark:border-slate-600/30">
                    <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-500">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        <span className="truncate">{article.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span className="whitespace-nowrap">{article.readTime}</span>
                      </div>
                    </div>

                    {/* Read button */}
                    <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium group-hover:text-blue-800 dark:group-hover:text-cyan-300 transition-colors opacity-0 group-hover:opacity-100">
                      Read Article
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Load more button */}
        <div className="text-center mt-12 md:mt-16">
          <button className="px-6 md:px-8 py-3 md:py-4 bg-linear-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-lg md:rounded-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105">
            Load More Articles
          </button>
        </div>
      </div>
    </section>
  )
}
