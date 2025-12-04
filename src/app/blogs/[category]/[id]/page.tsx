import DefaultDetail from '../../../../components/blog-categories/default-detail'
import FoodDetail from '../../../../components/blog-categories/food-detail'
import TechDetail from '../../../../components/blog-categories/tech-detail'
import TravelDetail from '../../../../components/blog-categories/travel-detail'
import { getBlogByCategoryAndId } from '../../../../lib/dummyBlogs'
import { notFound } from "next/navigation";

type Props = {
  params: {
    category: string;
    id: string;
  } | Promise<{ category: string; id: string }>;
}

export default async function BlogDetailPage({ params }: Props) {
  const { category, id } = (await params) as { category: string; id: string };
  const blog = getBlogByCategoryAndId(category, id);

  if (!blog) return notFound();

  // Render specific component per category
  switch (category.toLowerCase()) {
    case "tech":
      return <TechDetail blog={blog} />;
    case "travel":
      return <TravelDetail blog={blog} />;
    case "food":
      return <FoodDetail blog={blog} />;
    default:
      return <DefaultDetail blog={blog} />;
  }
}
