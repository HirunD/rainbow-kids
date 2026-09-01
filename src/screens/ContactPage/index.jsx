import { useState } from "react";
import { useSnackbar } from "notistack";
import Seo from "../../components/Seo";
import PageHero from "../../components/PageHero";
import Wave from "../../components/Wave";
import { site } from "../../data/site";
import "./style.css";

const TOPICS = ["Admissions / book a tour", "Volunteering", "Careers", "General enquiry"];

const admissionsSteps = [
  { title: "Enquire", text: "Send the form or a WhatsApp. We reply within two working days." },
  { title: "Observation morning", text: "Come and watch a work cycle for 20–30 minutes, then ask us anything." },
  { title: "Application & offer", text: "Complete the application form. Places for the next school year usually open a year ahead." },
  { title: "Settling-in plan", text: "We agree an individual start schedule so the first fortnight is gentle." },
];

const ContactPage = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    topic: TOPICS[0],
    childAge: "",
    startTerm: "",
    message: "",
  });

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    // Dummy site — no backend. Show confirmation and open a pre-filled email.
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Topic: ${form.topic}`,
      form.childAge && `Child's age: ${form.childAge}`,
      form.startTerm && `Preferred start: ${form.startTerm}`,
      "",
      form.message,
    ]
      .filter(Boolean)
      .join("\n");

    enqueueSnackbar("Thanks! Your enquiry is ready to send from your email app.", { variant: "success" });
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      `Website enquiry — ${form.topic}`
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <Seo
        title="Contact & Admissions"
        description="Contact Rainbow Kids Montessori — enquiry form, phone, WhatsApp, address and admissions steps. Book an observation morning."
        path="/contact"
      />

      <PageHero
        eyebrow="Contact & admissions"
        tint="pink"
        emoji="✉️"
        title="Let's talk"
        lead="Enquiries, tours, volunteering or careers — send the form below, or reach us directly. Contact details are placeholders."
      />

      <section className="section">
        <div className="wrap contact-grid">
          {/* Form */}
          <div className="contact-form-wrap" id="enquire">
            <h2 className="mt-0">Enquiry form</h2>
            <p className="muted">Fields marked * are required.</p>
            <form className="contact-form" onSubmit={onSubmit}>
              <label>
                <span>Your name *</span>
                <input name="name" required value={form.name} onChange={update} autoComplete="name" />
              </label>
              <div className="contact-form__row">
                <label>
                  <span>Email *</span>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={update}
                    autoComplete="email"
                  />
                </label>
                <label>
                  <span>Phone / WhatsApp</span>
                  <input name="phone" value={form.phone} onChange={update} autoComplete="tel" />
                </label>
              </div>
              <label>
                <span>What's it about? *</span>
                <select name="topic" value={form.topic} onChange={update}>
                  {TOPICS.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </label>
              <div className="contact-form__row">
                <label>
                  <span>Child's age (if enrolling)</span>
                  <input name="childAge" value={form.childAge} onChange={update} placeholder="e.g. 2 years 8 months" />
                </label>
                <label>
                  <span>Preferred start</span>
                  <input name="startTerm" value={form.startTerm} onChange={update} placeholder="e.g. January 2027" />
                </label>
              </div>
              <label>
                <span>Message *</span>
                <textarea name="message" rows="5" required value={form.message} onChange={update} />
              </label>
              <button type="submit" className="btn btn--lg">
                Send enquiry
              </button>
              <p className="muted contact-form__note">
                This demo has no server yet — submitting opens a pre-filled email. A real form handler can
                be wired up on launch.
              </p>
            </form>
          </div>

          {/* Details */}
          <aside className="contact-aside">
            <div className="card">
              <h3 className="mt-0">Reach us directly</h3>
              <ul className="contact-list">
                <li>
                  <span aria-hidden="true">📞</span>
                  <a href={site.phoneHref}>{site.phone}</a>
                </li>
                <li>
                  <span aria-hidden="true">💬</span>
                  <a href={site.whatsappHref} target="_blank" rel="noreferrer">
                    WhatsApp {site.whatsapp}
                  </a>
                </li>
                <li>
                  <span aria-hidden="true">✉️</span>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </li>
                <li>
                  <span aria-hidden="true">📍</span>
                  <span>{site.addressLines.join(", ")}</span>
                </li>
                <li>
                  <span aria-hidden="true">🕗</span>
                  <span>{site.hours}</span>
                </li>
              </ul>
              <a href={site.whatsappHref} target="_blank" rel="noreferrer" className="btn btn--wa" style={{ marginTop: ".5rem" }}>
                💬 Message on WhatsApp
              </a>
            </div>

            <div className="card contact-map" aria-label="Map placeholder">
              <span className="ph__emoji" aria-hidden="true">🗺️</span>
              <p className="muted">
                Map goes here.{" "}
                <a href={site.mapsUrl} target="_blank" rel="noreferrer">
                  Open in Google Maps →
                </a>
              </p>
            </div>

            <div className="card">
              <h3 className="mt-0">Follow along</h3>
              <div className="contact-socials">
                {site.socials.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
                    <span aria-hidden="true">{s.emoji}</span> {s.label}
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Admissions steps */}
      <section className="section section--tint-sky" id="admissions">
        <Wave color="var(--sky-soft)" flip />
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Admissions</span>
            <h2>Four steps to a place</h2>
          </div>
          <ol className="admissions-steps">
            {admissionsSteps.map((s, i) => (
              <li key={s.title} data-aos="fade-up" data-aos-delay={i * 60}>
                <span className="admissions-steps__n">{i + 1}</span>
                <strong>{s.title}</strong>
                <p className="muted">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
        <Wave color="var(--sky-soft)" />
      </section>
    </>
  );
};

export default ContactPage;
