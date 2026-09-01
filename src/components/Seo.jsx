import { useEffect } from "react";
import { site } from "../data/site";

// Lightweight per-route <head> manager — no extra dependency.
// Usage: <Seo title="Curriculum" description="..." path="/curriculum" />
const BASE_URL = "https://www.rainbowkids.lk";

const setMeta = (selector, attr, value) => {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    const [key, val] = selector.replace(/^meta\[|\]$/g, "").split("=");
    el.setAttribute(key, val.replace(/["']/g, ""));
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
};

const Seo = ({ title, description, path = "/", image = "/logo.png" }) => {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${site.name}` : `${site.name} | AMI Montessori Preschool — 25 Years`;
    const desc = description || site.tagline;
    const url = `${BASE_URL}${path}`;

    document.title = fullTitle;
    setMeta('meta[name="description"]', "content", desc);
    setMeta('meta[property="og:title"]', "content", fullTitle);
    setMeta('meta[property="og:description"]', "content", desc);
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('meta[property="og:image"]', "content", `${BASE_URL}${image}`);
    setMeta('meta[name="twitter:title"]', "content", fullTitle);
    setMeta('meta[name="twitter:description"]', "content", desc);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);
  }, [title, description, path, image]);

  return null;
};

export default Seo;
