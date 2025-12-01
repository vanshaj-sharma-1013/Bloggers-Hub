import ArticleGrid from "../components/article-grid";
import CategoriesShowcase from "../components/categories-showcase";
import FeaturedHero from "../components/featured-hero";
import Footer from "../components/footer";
import Header from "../components/header";
import TrendingArticles from "../components/trending-articles";


export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-background text-slate-900 dark:text-foreground overflow-hidden transition-colors duration-300">
      <Header />
      <div className="pt-16 md:pt-20" />
      <FeaturedHero />
      <CategoriesShowcase />
      <TrendingArticles />
      <ArticleGrid />
      <Footer />
    </main>
  )
}
