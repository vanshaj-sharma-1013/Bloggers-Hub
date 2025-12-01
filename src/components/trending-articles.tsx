"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock, User, TrendingUp, Eye } from "lucide-react";

const trendingArticles = [
  {
    id: 1,
    title: "Cloud Computing Cost Optimization Strategies",
    excerpt:
      "Maximize your cloud ROI with proven cost management techniques and best practices.",
    category: "Technology",
    author: "Alex Kumar",
    readTime: "6 min",
    views: "12.5K",
    image: "/cloud-computing.jpg",
    rank: 1,
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    id: 2,
    title: "Startup Growth: From Idea to Series A",
    excerpt:
      "Navigate the critical path to scaling your startup successfully and securing funding.",
    category: "Business",
    author: "Emma Rodriguez",
    readTime: "7 min",
    views: "10.2K",
    image: "/startup-growth.jpg",
    rank: 2,
    gradient: "from-purple-600 to-pink-500",
  },
  {
    id: 3,
    title: "Top 10 In-Demand Skills for 2025",
    excerpt:
      "Upskill strategically with the most sought-after competencies in the market.",
    category: "Career",
    author: "James Wilson",
    readTime: "9 min",
    views: "8.9K",
    image: "/professional-skills.jpg",
    rank: 3,
    gradient: "from-emerald-600 to-teal-500",
  },
];

export default function TrendingArticles() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-linear-to-b from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 relative overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 -right-32 w-80 h-80 bg-pink-500/25 rounded-full blur-3xl animate-pulse-glow"></div>
        <div
          className="absolute top-1/3 -left-32 w-80 h-80 bg-cyan-500/25 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute bottom-0 left-1/3 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "0.7s" }}
        ></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="relative">
              <TrendingUp className="w-6 h-6 text-pink-500" />
              <div className="absolute inset-0 bg-pink-500/30 blur-lg -z-10"></div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              <span className="text-slate-900 dark:text-white">What&apos;s</span>{" "}
              <span className="bg-linear-to-r from-pink-600 dark:from-pink-400! via-red-600 dark:via-red-400! to-orange-600 dark:to-orange-400 bg-clip-text text-transparent animate-gradient">
                Trending
              </span>
            </h2>
          </div>
          <p className="text-slate-700 dark:text-slate-400 text-base md:text-lg max-w-2xl">
            Discover the most engaging and insightful articles from our
            community of experts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {trendingArticles.map((article) => (
            <Link key={article.id} href="#" className="group h-full">
              <article className="relative h-full rounded-xl md:rounded-3xl overflow-hidden bg-linear-to-br from-slate-100/40 dark:from-slate-800/40 to-slate-50/40 dark:to-slate-900/40 border border-slate-300/40 dark:border-slate-700/40 hover:border-pink-400 dark:hover:border-pink-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-pink-300/30 dark:hover:shadow-pink-500/30 backdrop-blur-xl flex flex-col">
                <div className="absolute top-3 md:top-4 left-3 md:left-4 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-linear-to-br from-pink-500 to-rose-500 flex items-center justify-center font-bold text-white text-sm md:text-lg shadow-lg shadow-pink-500/50 group-hover:shadow-xl group-hover:shadow-pink-500/70 transition-shadow">
                  {article.rank}
                </div>

                {/* Image container with enhanced overlay */}
                <div className="relative h-40 md:h-56 overflow-hidden">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950 dark:from-slate-950 via-slate-900/40 dark:via-slate-900/40 to-transparent"></div>

                  <div className="absolute bottom-3 md:bottom-4 right-3 md:right-4 flex items-center gap-1.5 bg-slate-950/60 backdrop-blur-md px-2.5 md:px-3 py-1 md:py-1.5 rounded-lg border border-slate-700/50">
                    <Eye className="w-3 h-3 md:w-3.5 md:h-3.5 text-slate-300" />
                    <span className="text-xs text-slate-300 font-medium">
                      {article.views}
                    </span>
                  </div>
                </div>

                {/* Content with improved spacing */}
                <div className="p-4 md:p-6 flex flex-col grow space-y-3 md:space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-3 md:h-4 bg-linear-to-b from-pink-500 to-rose-500 rounded-full"></div>
                    <span
                      className={`text-xs font-bold text-white bg-linear-to-r ${article.gradient} px-2.5 md:px-3 py-1 md:py-1.5 rounded-full shadow-lg`}
                      style={{
                        boxShadow: `0 0 12px ${
                          article.gradient.includes("pink")
                            ? "rgba(236, 72, 153, 0.4)"
                            : article.gradient.includes("purple")
                            ? "rgba(147, 51, 234, 0.4)"
                            : "rgba(16, 185, 129, 0.4)"
                        }`,
                      }}
                    >
                      {article.category}
                    </span>
                  </div>

                  <h3 className="text-base md:text-xl font-bold text-slate-900 dark:text-white group-hover:text-pink-700 dark:group-hover:text-pink-200 transition-colors line-clamp-2 leading-tight">
                    {article.title}
                  </h3>

                  <p className="text-xs md:text-sm text-slate-700 dark:text-slate-400 line-clamp-2 group-hover:text-slate-800 dark:group-hover:text-slate-300 transition-colors grow">
                    {article.excerpt}
                  </p>

                  {/* Enhanced metadata section */}
                  <div className="space-y-2 md:space-y-3 pt-3 md:pt-4 border-t border-slate-300/30 dark:border-slate-700/30">
                    <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-400 transition-colors">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-slate-700/50 flex items-center justify-center">
                          <User className="w-2 h-2 md:w-2.5 md:h-2.5" />
                        </div>
                        <span className="font-medium truncate">
                          {article.author}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3 h-3 md:w-3.5 md:h-3.5" />
                        <span className="whitespace-nowrap">
                          {article.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
