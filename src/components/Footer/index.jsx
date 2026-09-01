import { Link } from "react-router";
import { nav, site } from "../../data/site";
import "./style.css";

const Footer = () => (
  <footer className="site-foot">
    <div className="wrap site-foot__grid">
      <div className="site-foot__col site-foot__brand">
        <div className="site-foot__logo">
          <img src="/logo.png" alt="" width="52" height="52" />
          <strong>Rainbow Kids Montessori</strong>
        </div>
        <p className="muted">{site.tagline}</p>
        <div className="site-foot__socials">
          {site.socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} title={s.label}>
              <span aria-hidden="true">{s.emoji}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="site-foot__col">
        <h4>Explore</h4>
        <ul>
          {nav.map((n) => (
            <li key={n.to}>
              <Link to={n.to}>{n.label}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="site-foot__col">
        <h4>Visit</h4>
        <address>
          {site.addressLines.map((l) => (
            <span key={l}>{l}</span>
          ))}
        </address>
        <p className="muted">{site.hours}</p>
        <a href={site.mapsUrl} target="_blank" rel="noreferrer">
          Open in Maps →
        </a>
      </div>

      <div className="site-foot__col">
        <h4>Talk to us</h4>
        <ul>
          <li>
            <a href={site.phoneHref}>📞 {site.phone}</a>
          </li>
          <li>
            <a href={site.whatsappHref} target="_blank" rel="noreferrer">
              💬 WhatsApp {site.whatsapp}
            </a>
          </li>
          <li>
            <a href={`mailto:${site.email}`}>✉️ {site.email}</a>
          </li>
        </ul>
        <Link to="/get-involved" className="btn btn--ghost site-foot__vol">
          Volunteer with us
        </Link>
      </div>
    </div>

    <div className="wrap site-foot__legal">
      <span>
        © {new Date().getFullYear()} {site.name}. Established {site.established}.
      </span>
      <span className="muted">AMI Montessori · Holistic early childhood education · Sri Lanka</span>
    </div>
  </footer>
);

export default Footer;
