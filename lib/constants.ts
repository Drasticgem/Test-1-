/**
 * Owen Plumbing & Drain — business constants.
 * Source: owenplumbing.com + brand guidelines (Master Lic. M8552, est. 1976).
 */
export const BUSINESS = {
  name: "Owen Plumbing & Drain",
  shortName: "OWEN",
  tagline: "Plumbing & Drain",
  positioning: "Honest work. Clean solutions.",
  founder: "the Owen family",
  founded: 1976,
  license: "Master Lic. M8552",

  phone: "+13613718163",
  phoneDisplay: "(361) 371-8163",
  phoneHref: "tel:+13613718163",
  email: "service@owenplumbing.com",

  paymentUrl: "#",
  bookingUrl: "#contact",

  // Brand primary (Tide). Token kept for any inline color reads.
  primaryColor: "#0A2F4F",

  address: {
    street: "4830 Kostoryz Rd",
    city: "Corpus Christi",
    state: "TX",
    zip: "78415",
    full: "4830 Kostoryz Rd, Corpus Christi, TX 78415",
  },

  areaServed: [
    "Corpus Christi",
    "Portland",
    "Rockport",
    "Aransas Pass",
    "Robstown",
    "Kingsville",
    "Ingleside",
  ],

  hours: {
    weekdays: "8:00 AM – 5:00 PM",
    saturday: "Emergency only",
    sunday: "Emergency only",
    emergency: "24/7 emergency line",
  },

  socials: {
    facebook: "https://www.facebook.com/owenplumbingcorpuschristi",
    instagram: "https://www.instagram.com/owenplumbing",
    google: "https://g.page/owenplumbing",
  },

  locations: [
    { name: "Corpus Christi", isHQ: true },
    { name: "Coastal Bend", isHQ: false },
  ],
} as const;
