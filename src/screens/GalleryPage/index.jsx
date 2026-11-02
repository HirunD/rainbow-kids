import { useState } from "react";
import Seo from "../../components/Seo";
import PageHero from "../../components/PageHero";
import Placeholder from "../../components/Placeholder";
import CtaBand from "../../components/CtaBand";
import Wave from "../../components/Wave";
import { site } from "../../data/site";
import "./style.css";

// Placeholder media set — replace each tile with a real <img>. Keep `cat` for filtering.
const photos = [
  { emoji: "🎨", label: "Craft Show", cat: "Events", tint: "ph--pink" },
  { emoji: "🐄", label: "Farm Day", cat: "Events", tint: "ph--mint" },
  { emoji: "🦁", label: "Animal Day", cat: "Events", tint: "ph--sun" },
  { emoji: "🪴", label: "Practical life shelf", cat: "Classroom", tint: "ph--mint" },
  { emoji: "🔢", label: "Golden beads", cat: "Classroom", tint: "ph--lav" },
  { emoji: "🔤", label: "Moveable alphabet", cat: "Classroom", tint: "ph--sky" },
  { emoji: "🌻", label: "Garden beds", cat: "Outdoors", tint: "ph--mint" },
  { emoji: "💦", label: "Water play", cat: "Outdoors", tint: "ph--sky" },
  { emoji: "🧗", label: "Climbing frame", cat: "Outdoors", tint: "ph--sun" },
  { emoji: "🎵", label: "Music & movement", cat: "Classroom", tint: "ph--pink" },
  { emoji: "👵", label: "Grandparents' Day", cat: "Events", tint: "ph--lav" },
  { emoji: "🍲", label: "Family-style lunch", cat: "Classroom", tint: "ph--sun" },
  { emoji: "🦚", label: "Big collage project", cat: "Art", tint: "ph--mint" },
  { emoji: "🖼️", label: "Wall of paintings", cat: "Art", tint: "ph--pink" },
  { emoji: "🏮", label: "Lantern Evening", cat: "Events", tint: "ph--lav" },
  { emoji: "🎓", label: "Graduation walk", cat: "Events", tint: "ph--sky" },
];

const reels = [
  { emoji: "🐒", label: "Jungle Week", tint: "ph--mint" },
  { emoji: "✂️", label: "Craft Show prep", tint: "ph--pink" },
  { emoji: "🐄", label: "Farm Day", tint: "ph--sun" },
  { emoji: "🌟", label: "Kindness Week", tint: "ph--lav" },
  { emoji: "🍽️", label: "This moment matters", tint: "ph--sky" },
  { emoji: "🎨", label: "A day in art", tint: "ph--pink" },
];

const GalleryPage = () => {
  const cats = ["All", "Classroom", "Outdoors", "Events", "Art"];
  const [cat, setCat] = useState("All");
  const shown = photos.filter((p) => cat === "All" || p.cat === cat);

  return (
    <>
      <Seo
        title="Gallery"
        description="Photos and reels from inside Rainbow Kids Montessori — classroom work, the garden, art projects and events."
        path="/gallery"
      />

      <PageHero
        eyebrow="Gallery & reels"
        tint="lav"
        emoji="📸"
        title="Straight from the classroom"
        lead="Every tile here is a placeholder. The school will drop in real photos — and we can pull reels straight from Instagram."
      />

      {/* Reels */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Reels</span>
            <h2>Short films from our week</h2>
          </div>
          <div className="gallery-reels">
            {reels.map((r, i) => (
              <figure className="gallery-reel" key={i}>
                <Placeholder emoji={r.emoji} label={r.label} tint={r.tint} reel />
                <figcaption className="muted">{r.label}</figcaption>
              </figure>
            ))}
          </div>
          <p className="text-center muted" style={{ marginTop: "1rem" }}>
            Follow{" "}
            <a href={site.socials[0].href} target="_blank" rel="noreferrer">
              {site.socials[0].handle}
            </a>{" "}
            for new reels every week.
          </p>
        </div>
      </section>

      {/* Photo grid */}
      <section className="section section--tint-cream">
        <Wave color="var(--bg-butter)" flip />
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Photos</span>
            <h2>A look around</h2>
          </div>
          <div className="chip-row events-filter" style={{ justifyContent: "center", marginBottom: "2rem" }}>
            {cats.map((c) => (
              <button key={c} className={`chip ${cat === c ? "chip--on" : ""}`} onClick={() => setCat(c)}>
                {c}
              </button>
            ))}
          </div>
          <div className="gallery-grid">
            {shown.map((p, i) => (
              <Placeholder key={`${p.label}-${i}`} emoji={p.emoji} label={p.label} tint={p.tint} />
            ))}
          </div>
        </div>
        <Wave color="var(--bg-butter)" />
      </section>

      <CtaBand
        title="Prefer to see it in person?"
        text="Photos only go so far. Book a twenty-minute observation and stand quietly at the edge of a real work cycle."
      />
    </>
  );
};

export default GalleryPage;
