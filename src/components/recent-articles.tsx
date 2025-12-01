import Link from "next/link"
import Image from "next/image"
import { Clock, User } from "lucide-react"

const recentArticles = [
  {
    id: 1,
    title: "Cloud Computing Cost Optimization Strategies",
    excerpt: "Maximize your cloud ROI with these proven cost management techniques.",
    category: "Technology",
    categoryColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    author: "Alex Kumar",
    readTime: "6 min read",
    date: "Nov 27, 2024",
    image: "/cloud-computing-infrastructure.jpg",
  },
  {
    id: 2,
    title: "Startup Growth: From Idea to Series A",
    excerpt: "Navigate the critical path to scaling your startup successfully.",
    category: "Business",
    categoryColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    author: "Emma Rodriguez",
    readTime: "7 min read",
    date: "Nov 26, 2024",
    image: "/startup-growth-business.jpg",
  },
  {
    id: 3,
    title: "Top 10 In-Demand Skills for 2025",
    excerpt: "Upskill strategically with the most sought-after professional competencies.",
    category: "Career",
    categoryColor: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    author: "James Wilson",
    readTime: "9 min read",
    date: "Nov 25, 2024",
    image: "/skills-training-education.jpg",
  },
  {
    id: 4,
    title: "Machine Learning for Business Applications",
    excerpt: "Practical ML implementations driving real business value.",
    category: "Technology",
    categoryColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    author: "Dr. Lisa Park",
    readTime: "8 min read",
    date: "Nov 24, 2024",
    image: "/machine-learning-ai.png",
  },
  {
    id: 5,
    title: "Personal Finance: Building Wealth in Your 20s",
    excerpt: "Smart financial strategies for early-career professionals.",
    category: "Education",
    categoryColor: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
    author: "Marcus Johnson",
    readTime: "7 min read",
    date: "Nov 23, 2024",
    image: "/finance-personal-wealth.jpg",
  },
  {
    id: 6,
    title: "Market Trends: Tech Sector Outlook 2025",
    excerpt: "Analysis of emerging opportunities and market dynamics.",
    category: "Market",
    categoryColor: "bg-rose-500/10 text-rose-600 dark:text-rose-400",
    author: "Thomas Anderson",
    readTime: "6 min read",
    date: "Nov 22, 2024",
    image: "/stock-market-trends.jpg",
  },
]

export default function RecentArticles() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Latest <span className="text-primary">Articles</span>
          </h2>
          <p className="text-lg text-muted-foreground">Fresh insights and breaking analysis, updated daily</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentArticles.map((article) => (
            <Link key={article.id} href="#">
              <article className="group cursor-pointer h-full flex flex-col">
                <div className="relative overflow-hidden rounded-lg mb-4 aspect-video bg-muted">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="space-y-3 flex-1 flex flex-col">
                  <div className="flex items-center gap-2">
                    <span
                      className={`inline-block px-2.5 py-1 text-xs font-semibold rounded-full ${article.categoryColor}`}
                    >
                      {article.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                    {article.title}
                  </h3>

                  <p className="text-sm text-muted-foreground line-clamp-2">{article.excerpt}</p>

                  <div className="flex items-center gap-3 text-xs text-muted-foreground mt-auto pt-4 border-t border-border">
                    <div className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  )
}
