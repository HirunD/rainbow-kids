import { Link } from "react-router";
import Seo from "../../components/Seo";
import PageHero from "../../components/PageHero";
import StatStrip from "../../components/StatStrip";
import Placeholder from "../../components/Placeholder";
import CtaBand from "../../components/CtaBand";
import Wave from "../../components/Wave";
import { timeline, values, specials } from "../../data/content";
import { leadership, faculty } from "../../data/team";
import "./style.css";

const AboutPage = () => (
  <>
    <Seo
      title="About Us"
      description="Rainbow Kids Montessori has served families for 25 years with an AMI Montessori programme, a holistic philosophy and a 7:1 ratio. Our story, values and faculty."
      path="/about"
    />

    <PageHero
      eyebrow="About us"
      tint="pink"
      emoji="🌈"
      title="Twenty-five years, one idea"
      lead="That small children deserve calm, beauty, real work and an adult who has the time to watch them."
    />

    <section className="section">
      <div className="wrap">
        <StatStrip />
      </div>
    </section>

    {/* Our story / timeline */}
    <section className="section section--tint-cream" id="story">
      <Wave color="#fff8ec" flip />
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Our story</span>
          <h2>From one borrowed set of materials</h2>
          <p>
            The details below are a placeholder timeline — the real dates and milestones will come from
            the school (see the questionnaire).
          </p>
        </div>
        <ol className="timeline">
          {timeline.map((t, i) => (
            <li key={t.year} data-aos="fade-up" data-aos-delay={i * 40}>
              <span className="timeline__year">{t.year}</span>
              <div className="timeline__card">
                <h3>{t.title}</h3>
                <p className="muted">{t.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <Wave color="#fff8ec" />
    </section>

    {/* Principal's message */}
    <section className="section" id="principal">
      <div className="wrap about-principal">
        <div className="about-principal__portrait" data-aos="fade-right">
          <Placeholder emoji="👩‍🏫" label="Principal's portrait" tint="ph--lav" />
        </div>
        <div data-aos="fade-left">
          <span className="eyebrow">Principal's message</span>
          <h2>“We are not in a hurry, and neither is your child.”</h2>
          <p>
            When I opened Rainbow Kids in 2002, I wanted one thing: a room where a child could become
            absorbed in something and not be interrupted. Everything since — the AMI faculty, the garden,
            the {""}
            <strong>7:1 ratio</strong> — has been in service of protecting that quiet.
          </p>
          <p>
            Twenty-five years on, some of the children I first taught now bring their own children to our
            gate. I still teach one small-group lesson every morning. It is the best part of my day.
          </p>
          <p className="about-principal__sign">— Mrs. Anjali Rathnayake, Founder &amp; Principal <span className="muted">(placeholder)</span></p>
        </div>
      </div>
    </section>

    {/* Mission & vision */}
    <section className="section section--tint-mint">
      <Wave color="var(--mint-soft)" flip />
      <div className="wrap grid grid--2">
        <div className="card" data-aos="fade-up">
          <div className="badge">🎯</div>
          <h3>Our mission</h3>
          <p className="muted">
            To give every child an unhurried, Montessori start — inside a wider circle of holistic
            education — with enough adults in the room to truly follow the child.
          </p>
        </div>
        <div className="card" data-aos="fade-up" data-aos-delay="80">
          <div className="badge">🔭</div>
          <h3>Our vision</h3>
          <p className="muted">
            A generation of children who are independent, kind and deeply able to concentrate — and a
            local Montessori community strong enough to train the next set of guides.
          </p>
        </div>
      </div>
      <Wave color="var(--mint-soft)" />
    </section>

    {/* Core values */}
    <section className="section" id="values">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Core values</span>
          <h2>What we will not compromise on</h2>
        </div>
        <div className="grid grid--3">
          {values.map((v, i) => (
            <article className="card" key={v.title} data-aos="fade-up" data-aos-delay={i * 50}>
              <div className="badge">{v.emoji}</div>
              <h3>{v.title}</h3>
              <p className="muted">{v.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* What makes us special (condensed) */}
    <section className="section section--tint-sky">
      <Wave color="var(--sky-soft)" flip />
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">What makes us special</span>
          <h2>The short list</h2>
        </div>
        <div className="grid grid--3">
          {specials.map((s) => (
            <div className="special-line" key={s.title}>
              <span aria-hidden="true">{s.emoji}</span>
              <div>
                <strong>{s.title}</strong>
                <p className="muted">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Wave color="var(--sky-soft)" />
    </section>

    {/* Faculty */}
    <section className="section" id="faculty">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Faculty</span>
          <h2>The people in the room</h2>
          <p>Placeholder names and roles — real staff profiles and photos to follow.</p>
        </div>

        <div className="grid grid--3">
          {leadership.map((p, i) => (
            <article className="card lead-card" key={p.name} data-aos="fade-up" data-aos-delay={i * 60}>
              <div className="lead-card__avatar" aria-hidden="true">{p.emoji}</div>
              <h3>{p.name}</h3>
              <span className="pill">{p.role}</span>
              <p className="muted">{p.bio}</p>
            </article>
          ))}
        </div>

        <div className="faculty-grid">
          {faculty.map((f) => (
            <div className="faculty-grid__item" key={f.name}>
              <span aria-hidden="true">{f.emoji}</span>
              <strong>{f.name}</strong>
              <span className="muted">{f.role}</span>
            </div>
          ))}
        </div>

        <div className="text-center" style={{ marginTop: "2rem" }}>
          <p className="muted">We are always on the lookout for AMI-trained guides and assistants.</p>
          <Link to="/get-involved#careers" className="btn btn--ghost">
            Careers &amp; volunteering
          </Link>
        </div>
      </div>
    </section>

    <CtaBand />
  </>
);

export default AboutPage;
