// Visual stand-in for a real photo or video. Swap these for <img>/<video>
// once the school supplies media — see QUESTIONNAIRE.md ("Media").
const Placeholder = ({ emoji = "🌈", label, tint = "", reel = false, style }) => (
  <div className={`ph ${tint} ${reel ? "ph--reel" : ""}`} style={style} role="img" aria-label={label || "Photo placeholder"}>
    <span className="ph__emoji" aria-hidden="true">
      {emoji}
    </span>
    {label && <span style={{ marginTop: ".5rem", fontSize: ".95rem" }}>{label}</span>}
  </div>
);

export default Placeholder;
