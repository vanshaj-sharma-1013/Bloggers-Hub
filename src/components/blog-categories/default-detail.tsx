import { Blog } from "../../../lib/dummyBlogs";

export default function DefaultDetail({ blog }: { blog: Blog }) {
  return (
    <article style={{padding: 20, borderRadius: 8, background: '#f3f4f6'}}>
      <h1>{blog.title}</h1>
      <p style={{opacity: 0.8}}>{blog.excerpt}</p>
      <div style={{marginTop: 12}}>
        <p style={{whiteSpace: 'pre-wrap'}}>{blog.content}</p>
      </div>
    </article>
  )
}
