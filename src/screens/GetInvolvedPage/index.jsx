import { Link } from "react-router";
import Seo from "../../components/Seo";
import PageHero from "../../components/PageHero";
import CtaBand from "../../components/CtaBand";
import Wave from "../../components/Wave";
import Placeholder from "../../components/Placeholder";
import { volunteerRoles } from "../../data/content";
import { site } from "../../data/site";
import "./style.css";

const steps = [
  { n: 1, title: "Tell us about you", text: "A short message: who you are, your experience with children, and the dates you have in mind." },
  { n: 2, title: "A video call", text: "We talk through the classrooms, expectations, safeguarding and what you'd like to get from the time." },
  { n: 3, title: "Paperwork", text: "Police clearance from your home country, two references, and a signed child-protection policy. We provide a visa support letter." },
  { n: 4, title: "Arrival & induction", text: "Two days of observation before you join a classroom, plus help finding a homestay or nearby accommodation." },
];

const GetInvolvedPage = () => (
  <>
    <Seo
      title="Get Involved — Volunteer & Careers"
      description="Volunteer at Rainbow Kids Montessori in Sri Lanka — international classroom volunteers, skills projects, and paid roles for AMI-trained guides and assistants."
      path="/get-involved"
    />

    <PageHero
      eyebrow="Get involved"
      tint="sun"
      emoji="🌏"
      title="Volunteers & team, from near and far"
      lead="We host international volunteers all year, and we are always on the lookout for AMI-trained guides and assistants."
    />

    {/* Roles */}
    <section className="section">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Ways to join us</span>
          <h2>Three doors in</h2>
        </div>
        <div className="grid grid--3">
          {volunteerRoles.map((r, i) => (
            <article className="card vol-card" key={r.title} data-aos="fade-up" data-aos-delay={i * 60}>
              <div className="badge">{r.emoji}</div>
              <h3>{r.title}</h3>
              <p className="muted">{r.text}</p>
              <div className="chip-row">
                {r.tags.map((t) => (
                  <span className="pill" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* International volunteers detail */}
    <section className="section section--tint-mint" id="volunteer">
      <Wave color="var(--mint-soft)" flip />
      <div className="wrap vol-split">
        <div data-aos="fade-right">
          <span className="eyebrow">International classroom volunteers</span>
          <h2>Spend a season in a Children's House</h2>
          <p>
            Volunteers bring their language, songs, stories and simply another warm adult into the room.
            It suits gap-year students, Montessori trainees on observation placements, career-breakers and
            retired teachers.
          </p>
          <ul className="tick-list">
            <li>Minimum commitment 4 weeks; most stay 6–12.</li>
            <li>Weekday mornings in the classroom; afternoons free.</li>
            <li>Visa support letter and homestay introductions provided.</li>
            <li>Safeguarding training and a police clearance from your home country are required.</li>
            <li>This is an unpaid, self-funded volunteer placement.</li>
          </ul>
        </div>
        <div className="vol-split__media" data-aos="fade-left">
          <Placeholder emoji="🎶" label="A volunteer's song circle" tint="ph--sun" />
        </div>
      </div>
      <Wave color="var(--mint-soft)" />
    </section>

    {/* How to apply */}
    <section className="section" id="apply">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">How it works</span>
          <h2>From first message to first morning</h2>
        </div>
        <ol className="vol-steps">
          {steps.map((s) => (
            <li key={s.n} data-aos="fade-up">
              <span className="vol-steps__n">{s.n}</span>
              <div>
                <strong>{s.title}</strong>
                <p className="muted">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>

    {/* Careers */}
    <section className="section section--tint-lav" id="careers">
      <Wave color="var(--lavender-soft)" flip />
      <div className="wrap vol-careers">
        <div data-aos="fade-up">
          <span className="eyebrow">Careers</span>
          <h2>We keep a warm list</h2>
          <p>
            We are continually on the lookout for <strong>AMI-trained guides</strong>, classroom
            assistants and a garden coordinator. Even when nothing is advertised, send a CV and a short
            note — when a place opens, this list is the first thing we look at.
          </p>
          <ul className="tick-list">
            <li>Lead guide roles: AMI primary or Assistants to Infancy diploma.</li>
            <li>Assistants: no prior Montessori training needed — we train in-house to our albums.</li>
            <li>Part-time and job-share considered for experienced guides.</li>
          </ul>
          <a href={`mailto:${site.email}?subject=Careers — CV`} className="btn">
            Send a CV
          </a>
        </div>
      </div>
      <Wave color="var(--lavender-soft)" />
    </section>

    <CtaBand
      title="Ready to express interest?"
      text="Use the enquiry form and choose 'Volunteering' or 'Careers' as the topic — it comes straight to the right person."
    >
      <Link to="/contact#enquire" className="btn btn--lg">
        Go to the form
      </Link>
    </CtaBand>
  </>
);

export default GetInvolvedPage;
