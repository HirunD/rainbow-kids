import { Link } from "react-router";
import { site } from "../data/site";
import BorderMark from "./BorderMark";
import Doodle from "./Doodle";
import "./CtaBand.css";

// Bold Blue background — pairs with the yellow border mark per the guidelines.
const CtaBand = ({
  title = "Come and see a work cycle",
  text = "The best way to understand Rainbow Kids is to stand quietly at the edge of a classroom for twenty minutes. Book an observation morning.",
  children,
}) => (
  <section className="ctaband">
    <div className="wrap">
      <div className="ctaband__body">
        <BorderMark corner="tr" on="blue" size="clamp(110px, 16%, 180px)" />
        <Doodle type="sun" style={{ bottom: "-34px", left: "-30px", width: 130 }} />
        <Doodle type="heart" desk style={{ top: "14%", left: "5%", width: 60 }} />
        <Doodle type="arcs" desk style={{ bottom: "10%", right: "4%", width: 80 }} />
        <div className="ctaband__copy text-center">
          <h2 className="t-white">{title}</h2>
          <p>{text}</p>
          <div className="ctaband__actions">
            {children || (
              <>
                <Link to="/contact#enquire" className="btn btn--sunny btn--lg">
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
    </div>
  </section>
);

export default CtaBand;
