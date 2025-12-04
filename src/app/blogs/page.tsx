"use client";

import BlogSlider from "@/src/components/blog.slider";
import { blogs, CATEGORIES } from "@/lib/dummyBlogs";
import { useParallax } from "react-scroll-parallax";

export default function Home() {
  // Define the parallax effect with the useParallax hook
  const parallax = useParallax({
    rotateY: [0, 180],
  });

  // Cast the ref to RefObject<HTMLDivElement>
  const parallaxProps = {
    ...parallax,
  } as React.HTMLAttributes<HTMLDivElement>;

  return (
    <main className="min-h-screen bg-background text-foreground dark:bg-slate-950 dark:text-slate-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-balance sm:leading-10 md:leading-20 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Discover Amazing Stories
            </h1>
            <p className="text-lg text-muted-foreground dark:text-slate-400">
              Explore curated content on technology, design, business,
              lifestyle, and AI.
            </p>
          </div>
        </div>
      </section>

      <div
        style={{ height: "100vh", paddingTop: "100vh", textAlign: "center" }}
      >
        <div
          {...parallaxProps}
          className=""
          style={{
            width: "200px",
            backgroundColor: "purple",
            margin: "0 auto",
          }}
        >
          **Moves, Scales, and Rotates!**
        </div>
      </div>

      {/* Category Sliders */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-16">
          {CATEGORIES.map((category) => {
            const categoryBlogs = blogs.filter(
              (blog) => blog.category === category
            );
            return (
              <>
                <BlogSlider
                  key={category}
                  category={category}
                  blogs={categoryBlogs}
                />
              </>
            );
          })}
        </div>
      </section>
    </main>
  );
}
