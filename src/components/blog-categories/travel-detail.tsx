import { Blog } from "../../../lib/dummyBlogs";

export default function TravelDetail({ blog }: { blog: Blog }) {
  return (
    <article style={{padding: 24, background: '#fff7ed', color: '#1f2937', borderRadius: 8}}>
      <header>
        <h1 style={{margin: 0}}>{blog.title}</h1>
        <p style={{opacity: 0.9}}>{blog.excerpt}</p>
      </header>
      <section style={{marginTop: 16}}>
        <div style={{borderRadius: 6, overflow: 'hidden'}}>
          <img src={blog.image} alt="" style={{width: '100%', height: 300, objectFit: 'cover'}} />
        </div>
        <div style={{marginTop: 12}}>
          <p style={{whiteSpace: 'pre-wrap'}}>{blog.content}</p>
        </div>
      </section>
      <footer style={{marginTop: 20}}>
        <small>Travel tips • Itinerary • Photos</small>
      </footer>
    </article>
  )
}
