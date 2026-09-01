import { Link, useParams } from "react-router";
import Seo from "../../components/Seo";
import CtaBand from "../../components/CtaBand";
import Wave from "../../components/Wave";
import { posts } from "../../data/blog";
import { formatDate } from "../../lib/format";
import "./style.css";

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);
  const others = posts.filter((p) => p.slug !== slug).slice(0, 2);

  if (!post) {
    return (
      <section className="section wrap text-center">
        <Seo title="Post not found" path={`/blog/${slug}`} />
        <div className="badge" style={{ margin: "0 auto 1rem" }}>🔍</div>
        <h1>We couldn't find that post</h1>
        <p className="muted">It may have moved or been renamed.</p>
        <Link to="/blog" className="btn">
          Back to the blog
        </Link>
      </section>
    );
  }

  return (
    <>
      <Seo title={post.title} description={post.excerpt} path={`/blog/${post.slug}`} />

      <article className="post">
        <header className={`post__hero page-hero--${post.tint.replace("ph--", "")}`}>
          <div className="wrap post__hero-inner">
            <Link to="/blog" className="post__back">
              ← All posts
            </Link>
            <div className="post__emoji" aria-hidden="true">
              {post.emoji}
            </div>
            <h1>{post.title}</h1>
            <p className="post__meta">
              {formatDate(post.date)} · {post.readMins} min read · {post.author}
            </p>
          </div>
          <Wave color="var(--c-bg)" />
        </header>

        <div className="wrap post__body">
          {post.body.map((block, i) =>
            Array.isArray(block) && block[0] === "h" ? (
              <h2 key={i}>{block[1]}</h2>
            ) : (
              <p key={i}>{block}</p>
            )
          )}

          <p className="post__disclaimer muted">
            This is placeholder content written to show the layout. The school's own writers will replace
            it.
          </p>
        </div>
      </article>

      <section className="section section--tint-cream">
        <Wave color="#fff8ec" flip />
        <div className="wrap">
          <h2 className="text-center">Keep reading</h2>
          <div className="grid grid--2" style={{ marginTop: "1.5rem" }}>
            {others.map((p) => (
              <Link to={`/blog/${p.slug}`} className="card post__next" key={p.slug}>
                <div className={`ph ${p.tint} post__next-media`} aria-hidden="true">
                  <span className="ph__emoji">{p.emoji}</span>
                </div>
                <div>
                  <h3>{p.title}</h3>
                  <p className="muted">{p.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <Wave color="#fff8ec" />
      </section>

      <CtaBand />
    </>
  );
};

export default BlogPostPage;
