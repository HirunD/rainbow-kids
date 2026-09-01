import { site } from "../data/site";
import "./WhatsAppFab.css";

// Floating quick-contact button — echoes the "Messages" bubble on the school's
// Instagram, but wired straight to WhatsApp.
const WhatsAppFab = () => (
  <a
    className="wa-fab"
    href={site.whatsappHref}
    target="_blank"
    rel="noreferrer"
    aria-label={`Message ${site.shortName} on WhatsApp`}
  >
    <span className="wa-fab__icon" aria-hidden="true">💬</span>
    <span className="wa-fab__text">Chat with us</span>
  </a>
);

export default WhatsAppFab;
