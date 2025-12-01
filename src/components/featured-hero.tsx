"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { Flame, ChevronLeft, ChevronRight } from "lucide-react";

const featuredArticles = [
  {
    id: 1,
    title: "The Future of AI: What Every Professional Should Know",
    excerpt:
      "Artificial intelligence is reshaping industries at an unprecedented pace. Learn how to stay competitive in the AI-driven economy.",
    category: "Technology",
    author: "Sarah Chen",
    readTime: "8 min",
    image: "/artificial-intelligence-ai-technology.jpg",
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    id: 2,
    title: "Building Resilient Teams: Leadership in 2025",
    excerpt:
      "Modern leadership requires adaptability, empathy, and strategic vision. Discover winning principles.",
    category: "Business",
    author: "Michael Torres",
    readTime: "10 min",
    image: "/business-team-leadership.jpg",
    gradient: "from-emerald-600 to-teal-500",
  },
  {
    id: 3,
    title: "Cybersecurity in the Age of AI-Powered Threats",
    excerpt:
      "Understanding emerging security challenges and implementing robust defense mechanisms.",
    category: "Technology",
    author: "Diana Chen",
    readTime: "12 min",
    image: "/cybersecurity-network.png",
    gradient: "from-red-600 to-rose-500",
  },
  {
    id: 4,
    title: "Scaling Startups: From MVP to Market Leader",
    excerpt:
      "Proven strategies for rapid growth and sustainable market expansion.",
    category: "Business",
    author: "James Wilson",
    readTime: "11 min",
    image: "/startup-growth.jpg",
    gradient: "from-purple-600 to-pink-500",
  },
];

export default function FeaturedHero() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const constraintsRef = useRef(null);

  const x = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 300, damping: 30 });

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % featuredArticles.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const goToSlide = (index: number) => {
    setCurrent(index);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % featuredArticles.length);
  };

  const prevSlide = () => {
    setCurrent(
      (prev) => (prev - 1 + featuredArticles.length) % featuredArticles.length
    );
  };

  const visibleIndices = [
    current,
    (current + 1) % featuredArticles.length,
    (current + 2) % featuredArticles.length,
  ];

  return (
    <section className="relative w-full bg-linear-to-br from-slate-50 via-blue-50 to-slate-50 dark:from-slate-950! dark:via-slate-900 dark:to-slate-950 pt-20 pb-24 overflow-hidden transition-colors duration-300">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.4, 0.3] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.25, 0.35, 0.25] }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-pink-500/25 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [-50, 50, -50], x: [-30, 30, -30] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 mb-12 group"
        >
          <div className="relative">
            <Flame className="w-6 h-6 text-red-500 animate-bounce" />
            <div className="absolute inset-0 bg-red-500/30 blur-lg -z-10 animate-pulse"></div>
          </div>
          <span className="text-sm font-bold text-red-500 uppercase tracking-widest group-hover:text-red-400 transition-colors">
            Trending Now
          </span>
        </motion.div>

        {/* Carousel */}
        <div className="relative mb-16" ref={constraintsRef}>
          <motion.div
            drag="x"
            dragConstraints={constraintsRef}
            dragElastic={0.2}
            onDragEnd={(_, info) => {
              if (info.offset.x < -100) nextSlide();
              if (info.offset.x > 100) prevSlide();
            }}
            className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 cursor-grab active:cursor-grabbing select-none"
            style={{ x: smoothX }}
          >
            <AnimatePresence mode="popLayout">
              {visibleIndices.map((index, position) => {
                const article = featuredArticles[index];
                const isMain = position === 0;

                return (
                  <motion.div
                    key={index}
                    layout
                    initial={{ opacity: 0, scale: 0.9, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -50 }}
                    transition={{
                      duration: 0.7,
                      ease: [0.32, 0.72, 0, 1],
                      delay: position * 0.1,
                    }}
                    className={`relative ${
                      isMain
                        ? "md:col-span-2 md:row-span-2"
                        : "hidden md:block md:row-span-1"
                    } ${position === 2 ? "hidden lg:block" : ""}`}
                  >
                    <Link href="#" className="block group">
                      <motion.article
                        whileHover={{ scale: isMain ? 1.03 : 1.05, y: -8 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className={`relative overflow-hidden rounded-3xl border backdrop-blur-xl transition-colors duration-300 ${
                          isMain
                            ? "bg-linear-to-br h-[500px] from-slate-100/60 dark:from-slate-800/60 to-slate-50/60 dark:to-slate-900/60 border-slate-300/40 dark:border-slate-700/60 hover:border-blue-400 dark:hover:border-blue-500/80 shadow-2xl"
                            : "bg-linear-to-br h-[238px] from-slate-100/50 dark:from-slate-800/50 to-slate-50/50 dark:to-slate-900/50 border-slate-300/40 dark:border-slate-700/50 hover:border-emerald-400 dark:hover:border-emerald-500/70 shadow-xl"
                        }`}
                      >
                        {/* Parallax Image */}
                        <motion.div
                          className="absolute inset-0 size-full"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.8 }}
                        >
                          <Image
                            src={article.image || "/placeholder.svg"}
                            alt={article.title}
                            fill
                            className="object-cover size-full"
                            priority={isMain}
                          />
                        </motion.div>

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-linear-to-t from-slate-950 dark:from-slate-950 via-slate-900/60 dark:via-slate-900/60 to-transparent" />

                        {/* Content */}
                        <div className="absolute inset-0 flex flex-col justify-end p-8">
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                          >
                            <span
                              className={`inline-block px-4 py-2 text-xs font-bold text-white bg-linear-to-r ${article.gradient} rounded-full shadow-lg mb-4`}
                            >
                              {article.category}
                            </span>

                            <h2
                              className={`font-bold text-slate-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-100 transition-colors leading-tight line-clamp-3 mb-4 ${
                                isMain ? "text-4xl md:text-5xl" : "text-2xl"
                              }`}
                            >
                              {article.title}
                            </h2>

                            {isMain && (
                              <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.9 }}
                                transition={{ delay: 0.5 }}
                                className="text-lg text-slate-700 dark:text-slate-200 mb-6 line-clamp-2"
                              >
                                {article.excerpt}
                              </motion.p>
                            )}

                            <div className="flex items-center justify-between">
                              <span className="text-sm text-slate-600 dark:text-slate-300">
                                {article.author} • {article.readTime}
                              </span>
                              {isMain && (
                                <motion.div
                                  whileHover={{ x: 8 }}
                                  className="w-12 h-12 rounded-full bg-linear-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg"
                                >
                                  <ChevronRight className="w-6 h-6 text-white" />
                                </motion.div>
                              )}
                            </div>
                          </motion.div>
                        </div>

                        {/* Hover Glow */}
                        <motion.div
                          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                          style={{
                            background:
                              "radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.25), transparent 70%)",
                          }}
                        />
                      </motion.article>
                    </Link>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <button
              onClick={prevSlide}
              className="p-3 rounded-xl bg-slate-900/60 border border-slate-700/70 hover:border-blue-500/80 hover:bg-blue-500/10 text-slate-300 hover:text-blue-400 transition-all backdrop-blur-xl hover:shadow-xl hover:shadow-blue-500/30"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-xl bg-slate-900/60 border border-slate-700/70 hover:border-blue-500/80 hover:bg-blue-500/10 text-slate-300 hover:text-blue-400 transition-all backdrop-blur-xl hover:shadow-xl hover:shadow-blue-500/30"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Progress Dots */}
          <div className="flex gap-3">
            {featuredArticles.map((_, i) => (
              <button key={i} onClick={() => goToSlide(i)} className="relative">
                <motion.div
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? "bg-blue-500 scale-150" : "bg-slate-600"
                  }`}
                />
                {i === current && (
                  <motion.div
                    layoutId="activeDot"
                    className="absolute inset-0 bg-blue-500/30 rounded-full blur-md"
                  />
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              label: "Published Articles",
              value: "2.5K+",
              icon: "ChartBarIcon",
            },
            { label: "Monthly Readers", value: "500K+", icon: "UsersIcon" },
            { label: "Expert Categories", value: "6", icon: "BookOpenIcon" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.1 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="bg-linear-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/60 rounded-2xl p-8 text-center hover:border-blue-500/70 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-500"
            >
              <div className="text-5xl mb-4">📊</div>
              <div className="text-4xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <p className="text-slate-400 mt-3 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
