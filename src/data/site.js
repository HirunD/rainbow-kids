// ---------------------------------------------------------------------------
// Central site config. Replace the DUMMY values with real details.
// Anything a parent might need to contact the school lives here.
// ---------------------------------------------------------------------------

export const site = {
  name: "Rainbow Kids Montessori",
  shortName: "Rainbow Kids",
  tagline: "25 years of AMI Montessori, held together by a 7-to-1 ratio.",
  established: 2001, // DUMMY — confirm founding year
  yearsBadge: 25,
  ratio: "7:1",

  // Contact — DUMMY, replace all
  phone: "+94 11 000 0000",
  phoneHref: "tel:+94110000000",
  whatsapp: "+94 77 000 0000",
  whatsappHref: "https://wa.me/94770000000",
  email: "hello@rainbowkids.lk",
  addressLines: ["123 Example Road", "Colombo 00000", "Sri Lanka"],
  mapsUrl: "https://maps.google.com/?q=Rainbow+Kids+Montessori",

  hours: "Monday–Friday, 7:30am – 3:00pm",

  socials: [
    { label: "Instagram", href: "https://instagram.com/", handle: "@rainbowkidsmontessori", emoji: "📸" },
    { label: "Facebook", href: "https://facebook.com/", handle: "/rainbowkidsmontessori", emoji: "👍" },
    { label: "YouTube", href: "https://youtube.com/", handle: "@rainbowkidsmontessori", emoji: "▶️" },
    { label: "TikTok", href: "https://tiktok.com/", handle: "@rainbowkidsmontessori", emoji: "🎵" },
  ],
};

export const nav = [
  { to: "/about", label: "About" },
  { to: "/curriculum", label: "Curriculum" },
  { to: "/events", label: "Events" },
  { to: "/gallery", label: "Gallery" },
  { to: "/reviews", label: "Reviews" },
  { to: "/blog", label: "Blog" },
  { to: "/get-involved", label: "Get Involved" },
  { to: "/contact", label: "Contact" },
];

// Headline numbers shown on the Home + About pages
export const stats = [
  { value: "25", label: "Years with families", emoji: "🎂" },
  { value: "7:1", label: "Children per teacher", emoji: "🧑‍🏫" },
  { value: "AMI", label: "Trained, not MMI", emoji: "🎓" },
  { value: "1,500+", label: "Alumni & counting", emoji: "🌈" }, // DUMMY
];
