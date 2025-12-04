import { Blog } from "../../../lib/dummyBlogs";

export default function TechDetail({ blog }: { blog: Blog }) {
  return (
    <article style={{padding: 24, background: '#0f172a', color: 'white', borderRadius: 8}}>
      <header>
        <h1 style={{margin: 0}}>{blog.title}</h1>
        <p style={{opacity: 0.8}}>{blog.excerpt}</p>
      </header>
      <section style={{display: 'flex', gap: 20, marginTop: 16}}>
        <img src={blog.image} alt="" style={{width: 260, height: 160, objectFit: 'cover', borderRadius: 6}} />
        <div>
          <h3 style={{marginTop: 0}}>Tech Insights</h3>
          <p style={{whiteSpace: 'pre-wrap'}}>{blog.content}</p>
        </div>
      </section>
      <footer style={{marginTop: 20, display: 'flex', gap: 8}}>
        <button style={{padding: '8px 12px', background: '#06b6d4', border: 'none', borderRadius: 6}}>Listen</button>
        <button style={{padding: '8px 12px', background: '#0ea5a3', border: 'none', borderRadius: 6}}>Save</button>
      </footer>
    </article>
  )
}
