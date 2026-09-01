import { stats } from "../data/site";
import "./StatStrip.css";

const StatStrip = ({ items = stats }) => (
  <div className="statstrip">
    {items.map((s) => (
      <div className="statstrip__item" key={s.label} data-aos="zoom-in">
        <span className="statstrip__emoji" aria-hidden="true">
          {s.emoji}
        </span>
        <span className="statstrip__value">{s.value}</span>
        <span className="statstrip__label">{s.label}</span>
      </div>
    ))}
  </div>
);

export default StatStrip;
