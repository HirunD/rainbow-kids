import { Link } from "react-router";
import { site } from "../data/site";
import Wave from "./Wave";
import "./CtaBand.css";

const CtaBand = ({
  title = "Come and see a work cycle",
  text = "The best way to understand Rainbow Kids is to stand quietly at the edge of a classroom for twenty minutes. Book an observation morning.",
  children,
}) => (
  <section className="ctaband">
    <Wave color="var(--pink)" />
    <div className="ctaband__body">
      <div className="wrap text-center">
        <h2>{title}</h2>
        <p>{text}</p>
        <div className="ctaband__actions">
          {children || (
            <>
              <Link to="/contact#enquire" className="btn btn--lg">
                Enquire about a place
              </Link>
              <a href={site.whatsappHref} target="_blank" rel="noreferrer" className="btn btn--wa btn--lg">
                💬 WhatsApp us
              </a>
            </>
          )}
        </div>
      </div>
    </div>
    <Wave color="var(--pink)" flip />
  </section>
);

export default CtaBand;
