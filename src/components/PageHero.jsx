import Wave from "./Wave";
import "./PageHero.css";

// Standard header band for interior pages.
const PageHero = ({ eyebrow, title, lead, tint = "pink", emoji, children }) => (
  <header className={`page-hero page-hero--${tint}`}>
    <div className="wrap page-hero__inner">
      {emoji && (
        <div className="page-hero__emoji" aria-hidden="true">
          {emoji}
        </div>
      )}
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h1>{title}</h1>
      {lead && <p className="page-hero__lead">{lead}</p>}
      {children}
    </div>
    <Wave color="var(--c-bg)" />
  </header>
);

export default PageHero;
