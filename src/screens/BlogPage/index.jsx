import { Link } from "react-router";
import Seo from "../../components/Seo";
import PageHero from "../../components/PageHero";
import CtaBand from "../../components/CtaBand";
import { posts } from "../../data/blog";
import { formatDate } from "../../lib/format";
import "./style.css";

const BlogPage = () => {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  const [lead, ...rest] = sorted;

  return (
    <>
      <Seo
        title="Blog"
        description="Notes for parents from Rainbow Kids Montessori — Montessori at home, the 7:1 ratio, AMI vs MMI, settling in, and why outdoor time counts as curriculum."
        path="/blog"
      />

      <PageHero
        eyebrow="Blog"
        tint="mint"
        emoji="✍️"
        title="Notes for parents"
        lead="Short, practical pieces on Montessori, holistic early years, and life at Rainbow Kids. Placeholder posts for now."
      />

      <section className="section">
        <div className="wrap">
          <Link to={`/blog/${lead.slug}`} className="blog-feature" data-aos="fade-up">
            <div className={`blog-feature__media ph ${lead.tint}`} aria-hidden="true">
              <span className="ph__emoji">{lead.emoji}</span>
            </div>
            <div className="blog-feature__body">
              <span className="pill">
                Latest · {formatDate(lead.date)} · {lead.readMins} min read
              </span>
              <h2>{lead.title}</h2>
              <p className="muted">{lead.excerpt}</p>
              <span className="blog-feature__more">Read the post →</span>
            </div>
          </Link>

          <div className="grid grid--3 blog-grid">
            {rest.map((p, i) => (
              <Link to={`/blog/${p.slug}`} className="card blog-card" key={p.slug} data-aos="fade-up" data-aos-delay={i * 50}>
                <div className={`blog-card__media ph ${p.tint}`} aria-hidden="true">
                  <span className="ph__emoji">{p.emoji}</span>
                </div>
                <span className="pill">
                  {formatDate(p.date)} · {p.readMins} min
                </span>
                <h3>{p.title}</h3>
                <p className="muted">{p.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Have a topic you'd like us to write about?"
        text="Ask a question and we may turn the answer into a post — it is probably one other families are wondering too."
      />
    </>
  );
};

export default BlogPage;
