import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { nav, site } from "../../data/site";
import "./style.css";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <header className={`site-nav ${scrolled ? "is-scrolled" : ""}`}>
      <div className="wrap site-nav__inner">
        <Link to="/" className="site-nav__brand" aria-label={`${site.name} — home`} onClick={close}>
          <img src="/logo.png" alt="" width="46" height="46" />
          <span>
            Rainbow&nbsp;Kids
            <small>Montessori</small>
          </span>
        </Link>

        <button
          className={`site-nav__burger ${open ? "is-open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`site-nav__links ${open ? "is-open" : ""}`} aria-label="Primary">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={close}
              className={({ isActive }) => `site-nav__link ${isActive ? "is-active" : ""}`}
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/contact#enquire" className="btn site-nav__cta" onClick={close}>
            Enquire
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
