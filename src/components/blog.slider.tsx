"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BlogCard from "./blog-card";
import { Blog } from "../../lib/dummyBlogs";

interface BlogSliderProps {
  category: string;
  blogs: Blog[];
}

const categoryStyles: Record<
  string,
  { bg: string; border: string; heading: string; button: string }
> = {
  Technology: {
    bg: "bg-blue-50 dark:bg-blue-950/30",
    border: "border-blue-200 dark:border-blue-800",
    heading: "text-blue-900 dark:text-blue-100",
    button: "hover:bg-blue-100 dark:hover:bg-blue-900",
  },
  Design: {
    bg: "bg-purple-50 dark:bg-purple-950/30",
    border: "border-purple-200 dark:border-purple-800",
    heading: "text-purple-900 dark:text-purple-100",
    button: "hover:bg-purple-100 dark:hover:bg-purple-900",
  },
  Business: {
    bg: "bg-emerald-50 dark:bg-emerald-950/30",
    border: "border-emerald-200 dark:border-emerald-800",
    heading: "text-emerald-900 dark:text-emerald-100",
    button: "hover:bg-emerald-100 dark:hover:bg-emerald-900",
  },
  Lifestyle: {
    bg: "bg-orange-50 dark:bg-orange-950/30",
    border: "border-orange-200 dark:border-orange-800",
    heading: "text-orange-900 dark:text-orange-100",
    button: "hover:bg-orange-100 dark:hover:bg-orange-900",
  },
  AI: {
    bg: "bg-pink-50 dark:bg-pink-950/30",
    border: "border-pink-200 dark:border-pink-800",
    heading: "text-pink-900 dark:text-pink-100",
    button: "hover:bg-pink-100 dark:hover:bg-pink-900",
  },
};

export default function BlogSlider({ category, blogs }: BlogSliderProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const styles = categoryStyles[category] || categoryStyles.Technology;

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className={`rounded-2xl border ${styles.bg} ${styles.border} p-8 transition-all`}
    >
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className={`text-3xl font-bold ${styles.heading}`}>{category}</h2>
          <p className="mt-2 text-sm text-muted-foreground dark:text-slate-400">
            {blogs.length} articles in this category
          </p>
        </div>
      </div>

      {/* Slider Container */}
      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-4 scroll-smooth scrollbar-hide"
          style={{ scrollBehavior: "smooth" }}
        >
          {blogs.slice(0, 10).map((blog) => (
            <div key={blog.id} className="shrink-0 w-80">
              <BlogCard blog={blog} category={category} />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={() => scroll("left")}
          className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 rounded-full bg-background dark:bg-slate-900 p-2 shadow-lg transition-all ${styles.button} z-10`}
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={() => scroll("right")}
          className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 rounded-full bg-background dark:bg-slate-900 p-2 shadow-lg transition-all ${styles.button} z-10`}
          aria-label="Scroll right"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}
