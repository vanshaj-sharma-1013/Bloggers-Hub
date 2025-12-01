import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary rounded-full text-sm text-secondary-foreground font-medium">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              Welcome to Insight Hub
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-balance leading-tight">
              Discover <span className="text-primary">Insights</span> That Shape Tomorrow
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Explore in-depth analysis on technology innovation, business strategy, career advancement, and market
              trends. Stay ahead with expertly curated content for professionals and learners.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="#featured"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors group"
              >
                Explore Articles
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#categories"
                className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg font-medium hover:bg-secondary transition-colors"
              >
                Browse Categories
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8">
              <div>
                <p className="text-2xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground">Articles Published</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">50K+</p>
                <p className="text-sm text-muted-foreground">Active Readers</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">5+</p>
                <p className="text-sm text-muted-foreground">Expert Categories</p>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-3xl -z-10"></div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-border/50">
              <div className="aspect-square bg-gradient-to-br from-primary to-accent rounded-lg opacity-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
