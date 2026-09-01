import { useMemo, useState } from "react";
import Seo from "../../components/Seo";
import PageHero from "../../components/PageHero";
import CtaBand from "../../components/CtaBand";
import Wave from "../../components/Wave";
import { events } from "../../data/events";
import { formatDate, isUpcoming, groupByMonth } from "../../lib/format";
import "./style.css";

const EventsPage = () => {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(events.map((e) => e.category)))],
    []
  );
  const [filter, setFilter] = useState("All");

  const filtered = events.filter((e) => filter === "All" || e.category === filter);
  const upcoming = filtered
    .filter((e) => isUpcoming(e.date))
    .sort((a, b) => a.date.localeCompare(b.date));
  const past = filtered
    .filter((e) => !isUpcoming(e.date))
    .sort((a, b) => b.date.localeCompare(a.date));
  const months = groupByMonth(upcoming);

  return (
    <>
      <Seo
        title="Events"
        description="The Rainbow Kids Montessori events calendar — farm days, theme weeks, family mornings, ceremonies and past highlights."
        path="/events"
      />

      <PageHero
        eyebrow="Events calendar"
        tint="sun"
        emoji="🗓️"
        title="A busy, mostly-muddy calendar"
        lead="Farm days, theme weeks, family mornings and end-of-year ceremonies. Dates below are placeholders for the school to confirm."
      />

      <section className="section">
        <div className="wrap">
          <div className="chip-row events-filter" role="tablist" aria-label="Filter events by category">
            {categories.map((c) => (
              <button
                key={c}
                role="tab"
                aria-selected={filter === c}
                className={`chip ${filter === c ? "chip--on" : ""}`}
                onClick={() => setFilter(c)}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Upcoming */}
          <h2 className="events-h">Upcoming</h2>
          {months.length === 0 && <p className="muted">No upcoming events in this category yet.</p>}
          {months.map((group) => (
            <div className="events-month" key={group.key}>
              <h3 className="events-month__label">{group.key}</h3>
              <div className="events-list">
                {group.items.map((e) => (
                  <article className="event-row" key={e.id} data-aos="fade-up">
                    <div className={`event-row__badge ph ${e.tint}`} aria-hidden="true">
                      <span className="ph__emoji">{e.emoji}</span>
                    </div>
                    <div className="event-row__body">
                      <div className="event-row__meta">
                        <span className="pill">{e.category}</span>
                        <span className="muted">
                          {formatDate(e.date, { weekday: "short", day: "numeric", month: "long" })} · {e.time}
                        </span>
                      </div>
                      <h4>{e.title}</h4>
                      <p className="muted">{e.blurb}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}

          {/* Past highlights */}
          {past.length > 0 && (
            <>
              <h2 className="events-h" style={{ marginTop: "3rem" }}>
                Past highlights
              </h2>
              <div className="grid grid--3">
                {past.map((e) => (
                  <article className="card event-past" key={e.id} data-aos="fade-up">
                    <div className={`event-past__media ph ${e.tint}`} aria-hidden="true">
                      <span className="ph__emoji">{e.emoji}</span>
                    </div>
                    <span className="pill">{formatDate(e.date, { month: "short", year: "numeric" })}</span>
                    <h4>{e.title}</h4>
                    <p className="muted">{e.blurb}</p>
                  </article>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <section className="section section--tint-mint">
        <Wave color="var(--mint-soft)" flip />
        <div className="wrap text-center" style={{ maxWidth: 620 }}>
          <h2>Want the calendar in your pocket?</h2>
          <p className="muted">
            Once dates are confirmed we can publish a subscribe-able calendar (Google / Apple) and send a
            termly printable. For now, follow us on Instagram for reminders.
          </p>
        </div>
        <Wave color="var(--mint-soft)" />
      </section>

      <CtaBand
        title="Come to an open morning"
        text="Several events each year are open to prospective families. Tell us you'd like to visit and we'll point you to the next one."
      />
    </>
  );
};

export default EventsPage;
