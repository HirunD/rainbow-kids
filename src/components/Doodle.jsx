import { useId } from "react";

// Hand-drawn brand shapes: suns, rainbows, hearts, stars and soft blobs.
// Brand rule: scatter loosely around the edges, keep away from faces and text,
// never stretch, outline or recolour outside the palette.
//
//   <Doodle type="sun" style={{ top: "10%", left: "4%", width: 110 }} />
//
// `float` adds a slow bob; `desk` hides it on small screens.

const RAINBOW = ["#fe5450", "#f48522", "#fbda2e", "#54af56", "#29a1d6", "#8953a5"];

const shapes = {
  sun: (
    <g>
      <circle cx="50" cy="50" r="15" fill="var(--doodle-sun)" />
      <g stroke="var(--doodle-sun)" strokeWidth="7" strokeLinecap="round">
        <path d="M50 8 L51 21" />
        <path d="M76 18 L68 28" />
        <path d="M92 47 L79 49" />
        <path d="M82 78 L71 70" />
        <path d="M52 92 L50 79" />
        <path d="M21 83 L30 72" />
        <path d="M8 52 L21 50" />
        <path d="M20 21 L29 30" />
      </g>
    </g>
  ),
  rainbow: (
    <g fill="none" strokeLinecap="round" strokeWidth="6.2">
      {RAINBOW.map((c, i) => {
        const r = 44 - i * 7;
        return <path key={c} d={`M${50 - r} 60 A${r} ${r * 1.02} 0 0 1 ${50 + r} 60`} stroke={c} />;
      })}
    </g>
  ),
  arcs: (
    <g fill="none" strokeLinecap="round" strokeWidth="7">
      <path d="M12 92 C12 48 44 14 88 10" stroke="#fe5450" />
      <path d="M26 92 C27 58 52 30 84 26" stroke="var(--doodle-sun)" />
      <path d="M40 90 C42 66 58 46 78 42" stroke="#54af56" />
    </g>
  ),
  heart: (
    <path
      fill="var(--doodle-heart)"
      d="M49 90 C30 74 8 56 9 33 C10 17 24 8 37 12 C44 14 48 20 51 27 C55 18 62 11 72 11 C86 11 94 24 91 39 C87 59 67 76 49 90 Z"
    />
  ),
  star: (
    <path
      fill="var(--doodle-sun)"
      stroke="var(--doodle-sun)"
      strokeWidth="9"
      strokeLinejoin="round"
      d="M52 10 L60 38 L90 36 L66 54 L76 86 L50 66 L22 84 L33 54 L10 38 L40 37 Z"
    />
  ),
  "blob-sky": (
    <path
      fill="var(--doodle-sky)"
      d="M30 14 C44 6 58 14 60 26 C72 20 88 28 88 44 C88 60 74 66 66 62 C70 78 58 92 42 88 C24 84 22 70 26 62 C12 60 6 46 12 34 C16 24 22 18 30 14 Z"
    />
  ),
  "blob-pink": (
    <path
      fill="var(--doodle-pink)"
      d="M14 30 C18 12 44 8 64 16 C84 24 94 44 88 62 C82 80 62 82 50 70 C40 60 28 66 18 58 C8 50 11 40 14 30 Z"
    />
  ),
  "blob-lilac": (
    <path
      fill="var(--doodle-lilac)"
      d="M22 30 C26 12 52 6 70 14 C88 22 92 46 78 56 C64 66 56 58 44 70 C32 82 14 76 12 60 C10 48 19 42 22 30 Z"
    />
  ),
  "blob-sage": (
    <path
      fill="var(--doodle-sage)"
      d="M16 22 C34 8 68 8 84 20 C96 30 94 58 86 74 C76 92 44 94 26 86 C10 78 6 58 8 42 C9 32 11 26 16 22 Z"
    />
  ),
  squiggle: (
    <path
      fill="none"
      stroke="var(--doodle-moss)"
      strokeWidth="6"
      strokeLinecap="round"
      d="M8 30 C22 22 36 24 46 40 C56 56 64 72 92 70"
    />
  ),
};

const views = { rainbow: "0 0 100 64" };

const Doodle = ({ type = "sun", float = false, desk = false, className = "", style }) => {
  const id = useId().replace(/:/g, "");
  return (
    <svg
      className={`doodle ${float ? "doodle--float" : ""} ${desk ? "doodle--desk" : ""} ${className}`}
      viewBox={views[type] || "0 0 100 100"}
      style={style}
      aria-hidden="true"
      focusable="false"
    >
      {/* Slight wobble + grain so shapes read as crayon / paint, not vectors */}
      <filter id={`hd-${id}`} x="-10%" y="-10%" width="120%" height="120%">
        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="3" result="n" />
        <feDisplacementMap in="SourceGraphic" in2="n" scale="1.6" />
      </filter>
      <g filter={`url(#hd-${id})`}>{shapes[type]}</g>
    </svg>
  );
};

export default Doodle;
