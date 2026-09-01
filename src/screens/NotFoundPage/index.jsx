import { Link } from "react-router";
import Seo from "../../components/Seo";

const NotFoundPage = () => (
  <section className="section wrap text-center" style={{ minHeight: "60vh", display: "grid", placeContent: "center" }}>
    <Seo title="Page not found" description="That page doesn't exist." path="/404" />
    <div style={{ fontSize: "4rem" }} aria-hidden="true">
      🧩
    </div>
    <h1>That page wandered off</h1>
    <p className="muted">The link may be old, or the page has moved.</p>
    <div style={{ display: "flex", gap: ".75rem", justifyContent: "center", flexWrap: "wrap", marginTop: "1rem" }}>
      <Link to="/" className="btn">
        Back to home
      </Link>
      <Link to="/contact#enquire" className="btn btn--ghost">
        Contact us
      </Link>
    </div>
  </section>
);

export default NotFoundPage;
