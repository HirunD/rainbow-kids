import { useEffect } from "react";
import { useLocation } from "react-router";
import AOS from "aos";

// Reset scroll position on every route change (unless linking to an #anchor),
// and re-scan the new page for AOS scroll animations.
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        AOS.refreshHard();
        return;
      }
    }
    window.scrollTo(0, 0);
    AOS.refreshHard();
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
