import { Link } from "react-router";
import Seo from "../../components/Seo";
import PageHero from "../../components/PageHero";
import CtaBand from "../../components/CtaBand";
import Wave from "../../components/Wave";
import { parentReviews, alumniStories } from "../../data/reviews";
import { site } from "../../data/site";
import "./style.css";

const ReviewsPage = () => (
  <>
    <Seo
      title="Reviews & Alumni"
      description="What parents say about Rainbow Kids Montessori, and where our alumni are now — 25 years of families."
      path="/reviews"
    />

    <PageHero
      eyebrow="Reviews & alumni"
      tint="pink"
      emoji="💬"
      title="Twenty-five years of families"
      lead="Quotes below are placeholders. The school will replace them with real, consented reviews and alumni updates."
    />

    <section className="section">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Parent reviews</span>
          <h2>In their own words</h2>
        </div>
        <div className="reviews-masonry">
          {parentReviews.map((r, i) => (
            <blockquote className="card review-full" key={r.name} data-aos="fade-up" data-aos-delay={(i % 3) * 60}>
              <div className="review-full__stars" aria-label={`${r.stars} out of 5 stars`}>
                {"★".repeat(r.stars)}
              </div>
              <p>“{r.quote}”</p>
              <footer>
                <strong>{r.name}</strong>
                <span className="muted"> — {r.detail}</span>
              </footer>
            </blockquote>
          ))}
        </div>
        <p className="text-center" style={{ marginTop: "2rem" }}>
          <a href={site.mapsUrl} target="_blank" rel="noreferrer" className="btn btn--ghost">
            Leave a review on Google
          </a>
        </p>
      </div>
    </section>

    <section className="section section--tint-lav">
      <Wave color="var(--lavender-soft)" flip />
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Alumni</span>
          <h2>Where they are now</h2>
          <p>
            Some of our first pupils are in their late twenties. A few are enrolling their own children.
          </p>
        </div>
        <div className="grid grid--3">
          {alumniStories.map((a, i) => (
            <article className="card alumni-card" key={a.name} data-aos="fade-up" data-aos-delay={i * 60}>
              <div className="alumni-card__avatar" aria-hidden="true">🎓</div>
              <h3>{a.name}</h3>
              <span className="pill">{a.years}</span>
              <p className="alumni-card__now">{a.now}</p>
              <p className="muted">“{a.quote}”</p>
            </article>
          ))}
        </div>
        <p className="text-center" style={{ marginTop: "2rem" }}>
          <Link to="/blog/the-seven-to-one-ratio" className="btn btn--ghost">
            Read our alumni tracer notes on the blog
          </Link>
        </p>
      </div>
      <Wave color="var(--lavender-soft)" />
    </section>

    <section className="section">
      <div className="wrap alumni-cta text-center" style={{ maxWidth: 620 }}>
        <div className="badge" style={{ margin: "0 auto 1rem" }}>📮</div>
        <h2>Are you a Rainbow Kids alum?</h2>
        <p className="muted">
          We'd love an update — where you landed, what stuck. Drop us a line and we may feature your story
          (with your permission).
        </p>
        <a href={`mailto:${site.email}?subject=Rainbow Kids alum`} className="btn">
          Send us your story
        </a>
      </div>
    </section>

    <CtaBand />
  </>
);

export default ReviewsPage;
