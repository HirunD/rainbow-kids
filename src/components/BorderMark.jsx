// The 25-year border mark: a white curved corner, edged in a colour from the
// background's family, carrying the 25 YEARS logo. Brand rules:
//   • always use the border mark when the 25 logo appears on a surface
//   • the edge colour comes from the background's family (see `pairs`)
//   • any corner is fine, but keep the size consistent
//
// Place inside a `position: relative` parent.

// Background → edge colour, straight from the Soft / Bold Backgrounds sheets.
const pairs = {
  butter: "var(--brand-orange)",
  mint: "var(--brand-green)",
  peach: "var(--brand-orange)",
  sky: "var(--brand-blue)",
  lavender: "var(--brand-purple)",
  blush: "var(--brand-red)",
  forest: "var(--brand-green)",
  ocean: "var(--brand-yellow)",
  plum: "var(--brand-orange)",
  blue: "var(--brand-yellow)",
  purple: "var(--brand-yellow)",
  red: "var(--brand-yellow)",
  photo: "var(--doodle-sun)",
};

const BorderMark = ({ corner = "tr", on = "photo", size, logo = true }) => (
  <div className={`bmark bmark--${corner}`} style={size ? { "--bmark-size": size } : undefined} aria-hidden="true">
    <svg viewBox="0 0 100 100" preserveAspectRatio="none">
      <path fill="#fff" d="M0 0 H100 V100 C96 52 62 10 0 0 Z" />
      <path fill={pairs[on] || on} d="M0 0 C62 10 96 52 100 100 C99 78 88 62 68 60 C56 30 32 10 0 0 Z" />
    </svg>
    {logo && <img className="bmark__logo" src="/logo-25.png" alt="" />}
  </div>
);

export default BorderMark;
