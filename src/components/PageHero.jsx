import Wave from "./Wave";
import Doodle from "./Doodle";
import "./PageHero.css";

// Title gradient per header tint, so interior pages vary like the guideline layouts.
const titleGrad = { pink: "t-sunset", mint: "t-ocean", sky: "t-ocean", lav: "t-berry", sun: "t-sunset" };

// Standard header band for interior pages.
const PageHero = ({ eyebrow, title, lead, tint = "pink", emoji, children }) => (
  <header className={`page-hero page-hero--${tint} has-doodles`}>
    <Doodle type="arcs" float style={{ top: "18%", left: "4%", width: 90, rotate: "-90deg" }} />
    <Doodle type="sun" float desk style={{ top: "10%", right: "6%", width: 110 }} />
    <Doodle type="heart" float desk style={{ bottom: "26%", left: "10%", width: 70 }} />
    <Doodle type="star" float style={{ bottom: "28%", right: "12%", width: 56 }} />

    <div className="wrap page-hero__inner">
      {emoji && (
        <div className="page-hero__emoji" aria-hidden="true">
          {emoji}
        </div>
      )}
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h1 className={titleGrad[tint]}>{title}</h1>
      {lead && <p className="page-hero__lead">{lead}</p>}
      {children}
    </div>
    <Wave color="var(--c-bg)" />
  </header>
);

export default PageHero;
