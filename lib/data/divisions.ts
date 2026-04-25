/**
 * Owen Plumbing & Drain — homepage service panels.
 * Three full-bleed photo panels, each tied to a real Owen image so the
 * brand identity reads consistently across the page.
 */
export type DivisionAccent = "gold" | "ac-blue" | "tele-green" | "ck-terra";

export interface Division {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  badge: string;
  exploreLabel: string;
  accent: DivisionAccent;
  heroImage: string;
}

export const DIVISIONS: Division[] = [
  {
    slug: "residential-plumbing",
    name: "Residential Plumbing",
    tagline: "Repairs · fixtures · repipes",
    description:
      "Leaks, fixtures, repipes, and remodels across the Coastal Bend. We diagnose first, write the price, and leave the job site cleaner than we found it.",
    badge: "Same-day service",
    exploreLabel: "See plumbing services",
    accent: "gold",
    heroImage: "/images/owen-technician.png",
  },
  {
    slug: "drain-sewer",
    name: "Drain & Sewer",
    tagline: "Cabling · jetting · camera-located",
    description:
      "Cabling, hydro-jetting, and camera-located sewer work for homes built in '76 or last year. Trenchless options where they fit, dig-and-replace where they don't.",
    badge: "Camera-located",
    exploreLabel: "See drain services",
    accent: "ac-blue",
    heroImage: "/images/safety.jpg",
  },
  {
    slug: "emergency-service",
    name: "24/7 Emergency",
    tagline: "Burst pipes · backups · no-water calls",
    description:
      "Burst pipe? Call (361) 371-8163. We answer 24/7 with a tech on call for the calls that can't wait — burst lines, sewage backups, and no-water Saturdays.",
    badge: "Answered 24/7",
    exploreLabel: "Call the emergency line",
    accent: "tele-green",
    heroImage: "/images/owen-van.png",
  },
];
