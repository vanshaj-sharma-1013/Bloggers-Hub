"use client";

import Link from "next/link";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";
import { Blog } from "../../lib/dummyBlogs";
import Image from "next/image";

interface BlogCardProps {
  blog: Blog;
  category: string;
}

const categoryColors: Record<
  string,
  { accent: string; badge: string; linkHover: string }
> = {
  Technology: {
    accent: "border-l-blue-500 dark:border-l-blue-400",
    badge: "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200",
    linkHover: "group-hover:text-blue-600 dark:group-hover:text-blue-400",
  },
  Design: {
    accent: "border-l-purple-500 dark:border-l-purple-400",
    badge:
      "bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200",
    linkHover: "group-hover:text-purple-600 dark:group-hover:text-purple-400",
  },
  Business: {
    accent: "border-l-emerald-500 dark:border-l-emerald-400",
    badge:
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-200",
    linkHover: "group-hover:text-emerald-600 dark:group-hover:text-emerald-400",
  },
  Lifestyle: {
    accent: "border-l-orange-500 dark:border-l-orange-400",
    badge:
      "bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-200",
    linkHover: "group-hover:text-orange-600 dark:group-hover:text-orange-400",
  },
  AI: {
    accent: "border-l-pink-500 dark:border-l-pink-400",
    badge: "bg-pink-100 text-pink-800 dark:bg-pink-900/50 dark:text-pink-200",
    linkHover: "group-hover:text-pink-600 dark:group-hover:text-pink-400",
  },
};

export default function BlogCard({ blog, category }: BlogCardProps) {
  const colors = categoryColors[category] || categoryColors.Technology;

  return (
    <Link href={`/blogs/${category.toLowerCase()}/${blog.id}`}>
      <div
        className={`group h-full overflow-hidden rounded-xl border border-border dark:border-slate-700 bg-card dark:bg-slate-900 shadow-sm hover:shadow-lg transition-all duration-300 border-l-4 ${colors.accent}`}
      >
        {/* Image Container */}
        <div className="relative h-48 w-full overflow-hidden bg-muted dark:bg-slate-800">
          <Image
            width={500}
            height={500}
            src={blog.image || "/placeholder.svg"}
            alt={blog.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {/* Badge */}
          <div
            className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold ${colors.badge}`}
          >
            {blog.category}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col p-5">
          <h3 className="text-lg font-bold text-foreground dark:text-slate-50 line-clamp-2 mb-3 transition-colors">
            {blog.title}
          </h3>

          <p className="text-sm text-muted-foreground dark:text-slate-400 line-clamp-2 mb-4">
            {blog.excerpt}
          </p>

          {/* Meta Information */}
          <div className="flex flex-wrap gap-3 mb-4 text-xs text-muted-foreground dark:text-slate-500">
            <div className="flex items-center gap-1">
              <User className="h-3.5 w-3.5" />
              <span>{blog.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              <span>{blog.readTime} min</span>
            </div>
          </div>

          {/* Date and CTA */}
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-border dark:border-slate-700">
            <span className="text-xs text-muted-foreground dark:text-slate-500 flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              {blog.date}
            </span>
            <ArrowRight
              className={`h-4 w-4 transition-transform ${colors.linkHover}`}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
