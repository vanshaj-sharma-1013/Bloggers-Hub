import Link from "next/link"
import { Code, TrendingUp, Briefcase, BookOpen, BarChart3, Users } from "lucide-react"

const categories = [
  {
    id: "technology",
    name: "Technology",
    description: "AI, cloud computing, web development, cybersecurity trends",
    icon: Code,
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    href: "#",
  },
  {
    id: "business",
    name: "Business Strategy",
    description: "Leadership, startups, corporate insights, market analysis",
    icon: TrendingUp,
    color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    href: "#",
  },
  {
    id: "career",
    name: "Career Development",
    description: "Job trends, skills, interviews, professional growth",
    icon: Briefcase,
    color: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    href: "#",
  },
  {
    id: "education",
    name: "Learning & Education",
    description: "Online courses, certifications, skill development resources",
    icon: BookOpen,
    color: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
    href: "#",
  },
  {
    id: "market",
    name: "Market Insights",
    description: "Stock market, crypto, economics, financial analysis",
    icon: BarChart3,
    color: "bg-rose-500/10 text-rose-600 dark:text-rose-400",
    href: "#",
  },
  {
    id: "innovation",
    name: "Innovation",
    description: "Emerging tech, startups, disruptive ideas, future trends",
    icon: Users,
    color: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
    href: "#",
  },
]

export default function Categories() {
  return (
    <section id="categories" className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore Our <span className="text-primary">Categories</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose your area of interest and dive into expertly curated content
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <Link key={category.id} href={category.href} className="group">
                <div className="p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${category.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{category.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{category.description}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
