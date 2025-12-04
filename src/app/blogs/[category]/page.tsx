import Link from "next/link";
import { blogs } from "../../../lib/dummyBlogs";
import { notFound } from "next/navigation";

type Props = {
  params: {
    category: string;
  } | Promise<{ category: string }>
};

export default async function CategoryPage({ params }: Props) {
  const { category } = (await params) as { category: string }
  const categoryBlogs = blogs.filter((b) => b.category === category)

  if (!categoryBlogs || categoryBlogs.length === 0) return notFound();
  return (
    <main className="p-5">
      <h1 className="text-2xl font-bold">
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </h1>
      <section className="grid gap-3 mt-3">
        {categoryBlogs.map((b) => (
          <article
            key={b.id}
            style={{
              padding: 14,
              border: "1px solid #e6e7ea",
              borderRadius: 8,
            }}
          >
            <h3 style={{ margin: "0 0 6px 0" }}>
              <Link href={`/blogs/${b.category}/${b.id}`}>{b.title}</Link>
            </h3>
            <p style={{ margin: 0, opacity: 0.85 }}>{b.excerpt}</p>
            <div style={{ marginTop: 8 }}>
              <Link href={`/blogs/${b.category}/${b.id}`}>Open post →</Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
