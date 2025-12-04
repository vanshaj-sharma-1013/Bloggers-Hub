import { Blog } from "../../lib/dummyBlogs";

export default function FoodDetail({ blog }: { blog: Blog }) {
  return (
    <article style={{padding: 24, background: '#fffdf7', color: '#111827', borderRadius: 8}}>
      <header style={{display: 'flex', gap: 16, alignItems: 'center'}}>
        <div style={{width: 80, height: 80, overflow: 'hidden', borderRadius: 12}}>
          <img src={blog.image} alt="" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
        </div>
        <div>
          <h1 style={{margin: 0}}>{blog.title}</h1>
          <p style={{margin: 0, opacity: 0.8}}>{blog.excerpt}</p>
        </div>
      </header>
      <section style={{marginTop: 16}}>
        <h3>Recipe & Notes</h3>
        <p style={{whiteSpace: 'pre-wrap'}}>{blog.content}</p>
      </section>
      <footer style={{marginTop: 20}}>
        <button style={{padding: '8px 12px', background: '#ef4444', color: 'white', border: 'none', borderRadius: 6}}>Get Recipe</button>
      </footer>
    </article>
  )
}
