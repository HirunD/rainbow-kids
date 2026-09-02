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

// Evaluated once at load — the countdown doesn't need to tick within a session.
const daysToAnniversary = Math.max(
  0,
  Math.ceil((new Date(site.anniversaryISO).getTime() - new Date().getTime()) / 86_400_000)
);

const HomePage = () => {
  const upcoming = events.filter((e) => isUpcoming(e.date)).slice(0, 3);
  const latestPosts = [...posts].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 2);

  return (
    <>
      <Seo
        title=""
        description="Rainbow Kids Montessori — an AMI Montessori preschool in Sri Lanka with 25 years of experience, a ~7:1 child-to-teacher ratio and a holistic approach that takes learning beyond the classroom."
        path="/"
      />

      {/* ---------- Hero ---------- */}
      <section className="hero">
        <div className="wrap hero__inner">
          <div className="hero__copy" data-aos="fade-up">
            <span className="hero__ribbon">
              <span aria-hidden="true">🌈</span> Celebrating 25 years · {site.established}–2027
            </span>
            <h1>
              25 years of growing <span className="hero__accent">curious minds</span>
            </h1>
            <p className="hero__lead">
              An <strong>AMI Montessori</strong> education, enriched by real-world experiences that help
              children explore, understand and connect with the world around them.
            </p>
            <div className="hero__actions">
              <a href={site.whatsappHref} target="_blank" rel="noreferrer" className="btn btn--wa btn--lg">
                💬 Enquire on WhatsApp
              </a>
              <Link to="/about" className="btn btn--ghost btn--lg">
                Explore Rainbow Kids
              </Link>
            </div>
            <p className="hero__phone muted">
              Prefer to call? <a href={site.phoneHref}>{site.phone}</a> · {site.hours}
            </p>
          </div>

          <div className="hero__media" data-aos="fade-up" data-aos-delay="120">
            <div className="hero__photo hero__photo--main">
              <Placeholder emoji="🧒" label="A child, deep in concentration" tint="ph--pink" />
            </div>
            <div className="hero__photo hero__photo--sub">
              <Placeholder emoji="🌱" label="Learning in the garden" tint="ph--mint" />
            </div>
            <span className="hero__media-chip">Real Rainbow Kids photography — coming soon</span>
          </div>
        </div>

        {/* Two audiences, two clear paths (see brief §02) */}
        <div className="wrap hero__paths">
          <Link to="/contact#enquire" className="hero__path">
            <span className="hero__path-icon" aria-hidden="true">👪</span>
            <span>
              <strong>Considering Rainbow Kids for your child?</strong>
              <br />
              Book a visit or ask us anything →
            </span>
          </Link>
          <Link to="/get-involved" className="hero__path">
            <span className="hero__path-icon" aria-hidden="true">🌏</span>
            <span>
              <strong>Hoping to volunteer or teach with us?</strong>
              <br />
              See how to join the community →
            </span>
          </Link>
        </div>

        <Wave color="var(--c-bg)" />
      </section>

      {/* ---------- Stats ---------- */}
      <div className="wrap home-stats" data-aos="fade-up">
        <StatStrip />
      </div>

      {/* ---------- 25th anniversary ---------- */}
      <section className="anniv">
        <div className="wrap anniv__inner" data-aos="fade-up">
          <div>
            <strong>25 Years. Thousands of little stories.</strong>
            <span className="muted">
              {" "}
              Our 25th anniversary — {site.anniversaryLabel}
              {daysToAnniversary > 0 ? ` · ${daysToAnniversary} days to go` : ""}
            </span>
          </div>
          <Link to="/about#story" className="btn btn--ghost">
            The Rainbow Kids story
          </Link>
        </div>
      </section>

      {/* ---------- Why Rainbow Kids ---------- */}
      <section className="section">
        <div className="wrap home-welcome">
          <div data-aos="fade-up">
            <span className="eyebrow">Why Rainbow Kids</span>
            <h2>Montessori at the foundation. The world as the classroom.</h2>
            <p>
              The AMI Montessori method is our educational foundation. But children's learning does not
              stop at the classroom door — it continues through themes, nature, animals, arts, music,
              movement, culture, celebrations and community experiences.
            </p>
            <p>
              These are not add-ons. They are how a young child comes to{" "}
              <strong>understand and experience the world around them</strong>.
            </p>
            <div className="flow" aria-hidden="true">
              <span>Montessori foundation</span>
              <span className="flow__arrow">↓</span>
              <span>Holistic, real-world experiences</span>
              <span className="flow__arrow">↓</span>
              <span className="flow__end">Curiosity · Independence · Understanding</span>
            </div>
            <div className="hero__actions">
              <Link to="/curriculum" className="btn btn--ghost">
                How we teach
              </Link>
              <Link to="/about" className="btn btn--ghost">
                Our story
              </Link>
            </div>
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
          <div className="ratio-band__big">~7<span>:</span>1</div>
          <div>
            <h2 className="mt-0">About seven children to each teacher</h2>
            <p>
              Many preschools run at fifteen to one or higher. A smaller ratio is not just a number — it
              means <strong>more individual attention, closer observation, stronger relationships and a
              deeper understanding of each child</strong>. It is the quiet engine behind everything else
              we do.
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
            <h2 className="mt-0">Come learn, contribute &amp; experience Sri Lanka</h2>
            <p>
              We host international Montessori volunteers all year — a chance to work alongside our
              educators, connect with the children and become part of the Rainbow Kids community. We are
              also always on the lookout for AMI-trained guides and assistants.
            </p>
            <Link to="/get-involved" className="btn">
              Volunteer with Rainbow Kids
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
