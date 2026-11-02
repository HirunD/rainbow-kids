import { Link } from "react-router";
import Seo from "../../components/Seo";
import PageHero from "../../components/PageHero";
import Placeholder from "../../components/Placeholder";
import CtaBand from "../../components/CtaBand";
import Wave from "../../components/Wave";
import { programmes, daySchedule, faqs } from "../../data/content";
import "./style.css";

const pillars = [
  {
    emoji: "🪴",
    name: "A prepared environment",
    text: "Beautiful, ordered, child-sized rooms. Everything has a place, there is one of each material, and the child can reach it all without asking.",
    tint: "ph--mint",
  },
  {
    emoji: "🧰",
    name: "Hands-on materials",
    text: "Specialised Montessori materials that isolate one idea and correct their own errors — so learning comes through the hands, not through being told.",
    tint: "ph--sun",
  },
  {
    emoji: "🎓",
    name: "AMI-certified guides",
    text: "Every lead guide holds an Association Montessori Internationale diploma. They observe, give the individual lesson, then step back.",
    tint: "ph--lav",
  },
  {
    emoji: "🧒🧑",
    name: "Collaborative, mixed-age learning",
    text: "Three-year age spans in one room. Younger children learn by watching; older children consolidate by helping. Independence, not competition.",
    tint: "ph--pink",
  },
];

const areas = [
  { emoji: "🧹", name: "Practical life", text: "Pouring, sweeping, buttoning, polishing. Real tasks that build coordination, order, concentration and independence." },
  { emoji: "🔺", name: "Sensorial", text: "Materials that isolate one quality — size, colour, sound, weight — so the child can refine and name what the senses take in." },
  { emoji: "🔤", name: "Language", text: "Sandpaper letters, the moveable alphabet, an enormous spoken vocabulary. Writing usually comes before reading." },
  { emoji: "🔢", name: "Mathematics", text: "Golden beads, spindle boxes, the stamp game. The child holds a thousand in their hand before it is ever abstract." },
  { emoji: "🌍", name: "Cultural studies", text: "Geography, botany, zoology, history, science, art and music — the world offered in concrete, hands-on pieces." },
  { emoji: "🕊️", name: "Grace & courtesy", text: "How to greet, wait, interrupt politely, carry a chair, resolve a squabble. Taught as deliberately as maths." },
];

const CurriculumPage = () => (
  <>
    <Seo
      title="Curriculum"
      description="The Rainbow Kids curriculum: AMI Montessori (practical life, sensorial, language, mathematics, cultural studies) inside a holistic programme, with a 7:1 ratio. Programmes for ages 16 months to 6 years."
      path="/curriculum"
    />

    <PageHero
      eyebrow="Curriculum"
      tint="sky"
      emoji="🧩"
      title="Montessori, held inside a whole childhood"
      lead="The AMI Montessori curriculum is the spine. Garden, music, movement, mindfulness and food are the rest of the body."
    />

    {/* Philosophy statement */}
    <section className="section curr-philosophy">
      <div className="wrap" data-aos="fade-up">
        <p className="curr-philosophy__big">
          Montessori isn't just a curriculum. It's a way of seeing the child — and a movement that's
          nearly&nbsp;120&nbsp;years&nbsp;old.
        </p>
        <span className="curr-philosophy__rule" aria-hidden="true" />
        <p className="curr-philosophy__sub">
          Dr Maria Montessori believed education is far more than letters, numbers, colours and shapes.
          Our goal for your child is <strong>authentic, holistic independence</strong> — the knowledge,
          confidence, creativity and social ease to choose their own goals and pursue them over time.
        </p>
      </div>
    </section>

    {/* Method pillars — how we get there */}
    <section className="section section--tint-cream">
      <Wave color="var(--bg-butter)" flip />
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">How we do it</span>
          <h2>Four things every classroom has</h2>
        </div>
        <div className="grid grid--4">
          {pillars.map((p, i) => (
            <article className="card pillar-card" key={p.name} data-aos="fade-up" data-aos-delay={i * 60}>
              <div className={`pillar-card__media ph ${p.tint}`} aria-hidden="true">
                <span className="ph__emoji">{p.emoji}</span>
              </div>
              <h3>{p.name}</h3>
              <p className="muted">{p.text}</p>
            </article>
          ))}
        </div>
      </div>
      <Wave color="var(--bg-butter)" />
    </section>

    {/* Overview */}
    <section className="section" id="overview">
      <div className="wrap curr-split">
        <div data-aos="fade-right">
          <span className="eyebrow">The approach</span>
          <h2>“Montessori plus holistic education”</h2>
          <p>
            A Montessori classroom is a <strong>prepared environment</strong>: beautiful, ordered and
            child-sized, with one of every material so children learn to wait and to want. Within a
            three-hour uninterrupted <strong>work cycle</strong>, each child chooses their own work and
            repeats it as long as it holds them.
          </p>
          <p>
            Around that, we build the holistic half — daily time outdoors, gardening and cooking, music
            and movement, rest, and explicit teaching of kindness. Academic readiness arrives as a
            by-product.
          </p>
        </div>
        <div className="curr-split__media" data-aos="fade-left">
          <Placeholder emoji="🪴" label="The prepared environment" tint="ph--mint" />
        </div>
      </div>
    </section>

    {/* Areas */}
    <section className="section">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Inside the classroom</span>
          <h2>The areas of work</h2>
        </div>
        <div className="grid grid--3">
          {areas.map((a, i) => (
            <article className="card" key={a.name} data-aos="fade-up" data-aos-delay={i * 50}>
              <div className="badge">{a.emoji}</div>
              <h3>{a.name}</h3>
              <p className="muted">{a.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* Why Montessori */}
    <section className="section" id="why-montessori">
      <div className="wrap curr-why">
        <div data-aos="fade-up">
          <span className="eyebrow">Why Montessori</span>
          <h2>It matches how young children are built to learn</h2>
          <ul className="tick-list">
            <li>Children learn through the hands and through movement, not by sitting still and listening.</li>
            <li>Mixed-age classes let younger children learn from older ones, and older ones consolidate by teaching.</li>
            <li>Freedom within clear limits grows self-discipline — the child chooses, then owns the choice.</li>
            <li>Self-correcting materials mean a child finds their own mistakes, so learning is not tied to adult praise.</li>
            <li>Long, uninterrupted work builds the ability to concentrate — arguably the school-skill that matters most.</li>
          </ul>

          <div className="curr-grads" data-aos="fade-up">
            <span aria-hidden="true">🌟</span>
            <p>
              The list of notable Montessori alumni is long — the founders of Google and Amazon, the
              creators of <em>The Sims</em> and Wikipedia, chefs, novelists and heads of state all
              attended Montessori schools.{" "}
              <a href="https://en.wikipedia.org/wiki/List_of_Montessori_schools" target="_blank" rel="noreferrer">
                Read more →
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* AMI vs MMI */}
    <section className="section section--tint-lav" id="ami">
      <Wave color="var(--lavender-soft)" flip />
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">A real distinction</span>
          <h2>We do AMI, not MMI</h2>
          <p>Similar-sounding names, genuinely different trainings. Here is the difference in plain terms.</p>
        </div>
        <div className="compare">
          <div className="compare__col compare__col--yes">
            <h3>AMI — what we follow</h3>
            <ul className="tick-list">
              <li><strong>Association Montessori Internationale</strong>, founded by Dr Maria Montessori in 1929.</li>
              <li>Long, full-time, supervised diploma with hundreds of observed teaching hours.</li>
              <li>Hand-made materials albums; internationally recognised standard.</li>
              <li>Every lead guide at Rainbow Kids holds an AMI diploma; assistants are trained in-house to the same albums.</li>
            </ul>
          </div>
          <div className="compare__col compare__col--no">
            <h3>MMI — often confused with it</h3>
            <ul className="cross-list">
              <li><strong>Modern Montessori International</strong> — a separate commercial training &amp; franchise business.</li>
              <li>Shorter course, different structure, no connection to AMI.</li>
              <li>Does not lead to an AMI diploma.</li>
              <li>Not a criticism of individuals — simply a different qualification from the one we require.</li>
            </ul>
          </div>
        </div>
        <p className="text-center muted" style={{ marginTop: "1.5rem" }}>
          Happy to talk this through on a tour — bring your questions.
        </p>
      </div>
      <Wave color="var(--lavender-soft)" />
    </section>

    {/* Ratio */}
    <section className="section" id="ratio">
      <div className="wrap curr-ratio" data-aos="zoom-in">
        <div className="curr-ratio__num">7:1</div>
        <div>
          <h2 className="mt-0">The ratio is the point</h2>
          <p>
            A 7:1 child-to-teacher ratio is one of the highest levels of adult attention in early years
            education anywhere in the world. It is what lets a guide give an individual lesson, catch a
            struggling child early, and — most importantly — <em>not</em> interrupt a child who is deep in
            concentration just to manage the crowd.
          </p>
          <p className="muted">
            Class sizes and exact staffing are confirmed each year — ask us for the current numbers.
          </p>
        </div>
      </div>
    </section>

    {/* Programmes */}
    <section className="section section--tint-mint" id="programmes">
      <Wave color="var(--mint-soft)" flip />
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Programmes &amp; age groups</span>
          <h2>From 16 months to six years</h2>
        </div>
        <div className="grid grid--2">
          {programmes.map((p, i) => (
            <article className="card prog-full" key={p.id} data-aos="fade-up" data-aos-delay={i * 60}>
              <div className="prog-full__head">
                <div className={`prog-full__media ph ${p.tint}`} aria-hidden="true">
                  <span className="ph__emoji">{p.emoji}</span>
                </div>
                <div>
                  <h3>{p.name}</h3>
                  <span className="pill">{p.ages}</span>
                </div>
              </div>
              <p className="muted">{p.summary}</p>
              <ul className="tick-list">
                {p.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
      <Wave color="var(--mint-soft)" />
    </section>

    {/* A day */}
    <section className="section" id="day">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">A day at Rainbow Kids</span>
          <h2>What the morning actually looks like</h2>
        </div>
        <ol className="day-list">
          {daySchedule.map((d) => (
            <li key={d.time} data-aos="fade-up">
              <span className="day-list__time">{d.time}</span>
              <div>
                <strong>{d.label}</strong>
                <p className="muted">{d.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>

    {/* FAQ */}
    <section className="section section--tint-sky" id="faq">
      <Wave color="var(--sky-soft)" flip />
      <div className="wrap curr-faq">
        <div className="section-head">
          <span className="eyebrow">FAQ</span>
          <h2>Questions parents ask us</h2>
        </div>
        {faqs.map((f) => (
          <details className="faq" key={f.q}>
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
        <p className="text-center" style={{ marginTop: "1.5rem" }}>
          <Link to="/contact#enquire" className="btn btn--ghost">
            Ask us something else
          </Link>
        </p>
      </div>
      <Wave color="var(--sky-soft)" />
    </section>

    <CtaBand />
  </>
);

export default CurriculumPage;
