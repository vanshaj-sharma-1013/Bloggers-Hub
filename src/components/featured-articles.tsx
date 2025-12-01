import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Clock, User } from "lucide-react"

const featuredArticles = [
  {
    id: 1,
    title: "The Future of AI: What Every Professional Should Know",
    excerpt:
      "Artificial intelligence is reshaping industries at an unprecedented pace. Learn how to stay competitive in an AI-driven world.",
    category: "Technology",
    author: "Sarah Chen",
    readTime: "8 min read",
    date: "Dec 1, 2024",
    image: "/ai-future-artificial-intelligence.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Building Resilient Teams: Leadership in 2025",
    excerpt:
      "Modern leadership requires adaptability, empathy, and strategic vision. Discover the principles of building teams that thrive.",
    category: "Business",
    author: "Michael Torres",
    readTime: "10 min read",
    date: "Nov 28, 2024",
    image: "/team-leadership-business-management.jpg",
    featured: true,
  },
]

export default function FeaturedArticles() {
  return (
    <section id="featured" className="py-20 md:py-32 bg-secondary/30 rounded-3xl my-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-sm text-primary font-medium mb-4">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            Featured Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Must-Read <span className="text-primary">Articles</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {featuredArticles.map((article) => (
            <Link key={article.id} href="#">
              <article className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg mb-6 aspect-video bg-muted">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full">
                      {article.category}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold group-hover:text-primary transition-colors leading-tight">
                    {article.title}
                  </h3>

                  <p className="text-muted-foreground line-clamp-2">{article.excerpt}</p>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground pt-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {article.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {article.readTime}
                    </div>
                    <span>{article.date}</span>
                  </div>

                  <div className="flex items-center gap-2 text-primary font-medium pt-2 group-hover:gap-3 transition-all">
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
