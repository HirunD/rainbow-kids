// Soft wavy divider between sections. `color` is the fill of the wave (i.e. the
// colour of the section it points into). `flip` turns it upside-down.
const Wave = ({ color = "var(--c-bg)", flip = false }) => (
  <svg
    className="wave"
    viewBox="0 0 1440 90"
    preserveAspectRatio="none"
    aria-hidden="true"
    style={flip ? { transform: "rotate(180deg)" } : undefined}
  >
    <path
      fill={color}
      d="M0,40 C240,90 480,0 720,30 C960,60 1200,95 1440,45 L1440,90 L0,90 Z"
    />
  </svg>
);

export default Wave;
