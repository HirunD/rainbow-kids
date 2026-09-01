import { Link } from "react-router";
import Seo from "../../components/Seo";
import StatStrip from "../../components/StatStrip";
import Placeholder from "../../components/Placeholder";
import Wave from "../../components/Wave";
import CtaBand from "../../components/CtaBand";
import { site } from "../../data/site";
import { specials, programmes } from "../../data/content";
import { events } from "../../data/events";
import { posts } from "../../data/blog";
import { parentReviews } from "../../data/reviews";
import { formatShortDate, formatDate, isUpcoming } from "../../lib/format";
import "./style.css";

const HomePage = () => {
  const upcoming = events.filter((e) => isUpcoming(e.date)).slice(0, 3);
  const latestPosts = [...posts].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 2);

  return (
    <>
      <Seo
        title=""
        description="Rainbow Kids Montessori — an AMI Montessori preschool in Sri Lanka with 25 years of experience, a 7:1 child-to-teacher ratio and a holistic education philosophy."
        path="/"
      />

      {/* ---------- Hero ---------- */}
      <section className="hero">
        <span className="hero__blob hero__blob--1" aria-hidden="true" />
        <span className="hero__blob hero__blob--2" aria-hidden="true" />
        <span className="hero__blob hero__blob--3" aria-hidden="true" />

        <div className="wrap hero__inner">
          <div className="hero__copy" data-aos="fade-right">
            <span className="eyebrow">Est. {site.established} · {site.yearsBadge} years</span>
            <h1>
              A gentle, <span className="hl hl--pink">un-rushed</span> start to school
            </h1>
            <p className="hero__lead">
              Rainbow Kids is an <strong>AMI Montessori</strong> preschool wrapped in a wider circle of
              holistic education — garden, music, mindfulness and kindness. With a{" "}
              <strong>{site.ratio} child-to-teacher ratio</strong>, one of the highest in the world, every
              child is genuinely known.
            </p>
            <div className="hero__actions">
              <Link to="/contact#enquire" className="btn btn--lg">
                Enquire about a place
              </Link>
              <Link to="/curriculum" className="btn btn--ghost btn--lg">
                How we teach
              </Link>
            </div>
            <p className="hero__note muted">
              📞 {site.phone} &nbsp;·&nbsp; 💬 WhatsApp {site.whatsapp}
            </p>
          </div>

          <div className="hero__collage" data-aos="fade-left">
            <span className="hero__sticker" aria-hidden="true">
              25<small>years</small>
            </span>
            <Placeholder emoji="🎨" label="Art shelf" tint="ph--pink" />
            <Placeholder emoji="🌻" label="Garden classroom" tint="ph--mint" />
            <Placeholder emoji="📚" label="Work cycle" tint="ph--sun" />
            <Placeholder emoji="🧩" label="Sensorial work" tint="ph--lav" />
          </div>
        </div>
        <Wave color="var(--c-bg)" />
      </section>

      {/* ---------- Stats ---------- */}
      <div className="wrap home-stats" data-aos="fade-up">
        <StatStrip />
      </div>

      {/* ---------- Welcome ---------- */}
      <section className="section">
        <div className="wrap home-welcome">
          <div data-aos="fade-up">
            <span className="eyebrow">Welcome</span>
            <h2>Montessori, plus a whole childhood</h2>
            <p>
              For 25 years, families in our community have trusted us with their children's first years
              away from home. We hold to the Montessori method as Dr Montessori designed it — but we also
              believe a four-year-old needs mud, songs, quiet, friendship and a proper lunch.
            </p>
            <p>
              That combination — <strong>Montessori plus holistic education</strong> — is what a morning
              here actually feels like.
            </p>
            <Link to="/about" className="btn btn--ghost">
              Our story
            </Link>
          </div>
          <div className="home-welcome__aside" data-aos="fade-up" data-aos-delay="100">
            <div className="callout">
              <h3 className="mt-0">We follow AMI — not MMI</h3>
              <p className="muted">
                Every lead guide holds a diploma from the Association Montessori Internationale, the body
                founded by Maria Montessori herself. It is a real distinction, and we are happy to explain
                it.
              </p>
              <Link to="/curriculum#ami">What that means →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- What makes us special ---------- */}
      <section className="section section--tint-mint">
        <Wave color="var(--mint-soft)" flip />
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">What makes us special</span>
            <h2>Six things you'll notice on day one</h2>
          </div>
          <div className="grid grid--3">
            {specials.map((s, i) => (
              <article className="card" key={s.title} data-aos="fade-up" data-aos-delay={i * 60}>
                <div className="badge">{s.emoji}</div>
                <h3>{s.title}</h3>
                <p className="muted">{s.text}</p>
              </article>
            ))}
          </div>
        </div>
        <Wave color="var(--mint-soft)" />
      </section>

      {/* ---------- Ratio band ---------- */}
      <section className="section ratio-band">
        <div className="wrap ratio-band__inner" data-aos="zoom-in">
          <div className="ratio-band__big">7<span>:</span>1</div>
          <div>
            <h2 className="mt-0">Seven children to one adult</h2>
            <p>
              Many preschools run at fifteen to one or higher. Our ratio means a guide can give an
              individual lesson, notice the child who is struggling, and let deep concentration run its
              course. It is the quiet engine behind everything else we do.
            </p>
            <Link to="/curriculum#ratio" className="btn btn--sunny">
              Why the ratio matters
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- Programmes ---------- */}
      <section className="section section--tint-sky">
        <Wave color="var(--sky-soft)" flip />
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Age groups</span>
            <h2>A place for every age from 16 months to 6</h2>
          </div>
          <div className="grid grid--4">
            {programmes.map((p, i) => (
              <article className="card prog-card" key={p.id} data-aos="fade-up" data-aos-delay={i * 60}>
                <div className="prog-card__emoji" aria-hidden="true">{p.emoji}</div>
                <h3>{p.name}</h3>
                <span className="pill">{p.ages}</span>
                <p className="muted">{p.summary}</p>
              </article>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: "2rem" }}>
            <Link to="/curriculum#programmes" className="btn btn--ghost">
              Full curriculum & programmes
            </Link>
          </div>
        </div>
        <Wave color="var(--sky-soft)" />
      </section>

      {/* ---------- Events preview ---------- */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Life at Rainbow Kids</span>
            <h2>What's coming up</h2>
            <p>Farm days, theme weeks, family mornings — our calendar is busy and mostly muddy.</p>
          </div>
          <div className="grid grid--3">
            {upcoming.map((e, i) => (
              <article className="card event-mini" key={e.id} data-aos="fade-up" data-aos-delay={i * 60}>
                <div className={`event-mini__media ph ${e.tint}`} aria-hidden="true">
                  <span className="ph__emoji">{e.emoji}</span>
                </div>
                <span className="pill">{formatShortDate(e.date)} · {e.category}</span>
                <h3>{e.title}</h3>
                <p className="muted">{e.blurb}</p>
              </article>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: "2rem" }}>
            <Link to="/events" className="btn btn--ghost">
              See the full events calendar
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- Gallery + reels preview ---------- */}
      <section className="section section--tint-lav">
        <Wave color="var(--lavender-soft)" flip />
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Gallery & reels</span>
            <h2>Straight from the classroom</h2>
          </div>
          <div className="home-reels">
            {["🐒", "🐄", "🎨", "🦚", "☀️"].map((emoji, i) => (
              <Placeholder key={i} emoji={emoji} tint={["ph--mint", "ph--sun", "ph--pink", "ph--lav", "ph--sky"][i % 5]} reel />
            ))}
          </div>
          <div className="text-center" style={{ marginTop: "2rem" }}>
            <Link to="/gallery" className="btn btn--ghost">
              Open the gallery
            </Link>
          </div>
        </div>
        <Wave color="var(--lavender-soft)" />
      </section>

      {/* ---------- Reviews preview ---------- */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">From our families</span>
            <h2>Parents, in their own words</h2>
          </div>
          <div className="grid grid--3">
            {parentReviews.slice(0, 3).map((r, i) => (
              <blockquote className="card review-card" key={r.name} data-aos="fade-up" data-aos-delay={i * 60}>
                <div className="review-card__stars" aria-label={`${r.stars} out of 5`}>
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
          <div className="text-center" style={{ marginTop: "2rem" }}>
            <Link to="/reviews" className="btn btn--ghost">
              Reviews & alumni stories
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- Volunteer teaser ---------- */}
      <section className="section section--tint-cream">
        <div className="wrap home-vol" data-aos="fade-up">
          <div className="home-vol__art" aria-hidden="true">🌏</div>
          <div>
            <span className="eyebrow">Get involved</span>
            <h2 className="mt-0">Volunteers from around the world</h2>
            <p>
              We host international Montessori volunteers all year, and we are always on the lookout for
              AMI-trained guides and assistants. If you'd like to spend a few weeks — or a career — in our
              classrooms, we'd love to hear from you.
            </p>
            <Link to="/get-involved" className="btn">
              Volunteering & careers
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- Blog preview ---------- */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">From the blog</span>
            <h2>Notes for parents</h2>
          </div>
          <div className="grid grid--2">
            {latestPosts.map((p, i) => (
              <Link to={`/blog/${p.slug}`} className="card blog-mini" key={p.slug} data-aos="fade-up" data-aos-delay={i * 60}>
                <div className={`blog-mini__media ph ${p.tint}`} aria-hidden="true">
                  <span className="ph__emoji">{p.emoji}</span>
                </div>
                <div>
                  <span className="pill">{formatDate(p.date)} · {p.readMins} min</span>
                  <h3>{p.title}</h3>
                  <p className="muted">{p.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: "2rem" }}>
            <Link to="/blog" className="btn btn--ghost">
              Read the blog
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
};

export default HomePage;
