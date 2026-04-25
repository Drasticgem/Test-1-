export interface Service {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
}

export const services: Service[] = [
  {
    slug: "drain-cleaning",
    title: "Drain Cleaning",
    description: "Slow, smelly, or backed up — we clear it and tell you why it happened.",
    longDescription:
      "Cabling, hydro-jetting, and camera inspection on residential and commercial lines. We diagnose first, quote next, and only run equipment with your sign-off.",
    features: ["Camera inspection", "Hydro-jetting", "Same-day appointments"],
  },
  {
    slug: "water-heaters",
    title: "Water Heaters",
    description: "Tankless, gas, electric — install, repair, and replace.",
    longDescription:
      "From a no-hot-water Saturday call to a full tankless retrofit, we handle the swap, the gas line, the venting, and the haul-away. Every install is permitted and inspected.",
    features: ["Tankless retrofits", "Gas & electric", "Permitted installs"],
  },
  {
    slug: "leak-repair",
    title: "Leak Repair",
    description: "Slab, wall, ceiling, yard — we find it before we open anything.",
    longDescription:
      "Acoustic and thermal leak location keeps the demolition to a minimum. You get a written cause, a fixed price, and a clean job site when we're done.",
    features: ["Slab leak detection", "Pinhole pipe repair", "Written estimates"],
  },
  {
    slug: "repipes",
    title: "Repipes",
    description: "PEX and copper repipes for older Coastal Bend homes.",
    longDescription:
      "Galvanized failing? Pinholes coming back every year? We repipe full homes with PEX or type-L copper, patch drywall, and pull a permit on every job.",
    features: ["PEX & copper", "Whole-home repipes", "Drywall patch included"],
  },
  {
    slug: "sewer-line",
    title: "Sewer & Main Line",
    description: "Locate, repair, or replace. Trenchless options where it fits.",
    longDescription:
      "Roots, bellies, broken clay — we camera the line, mark the spot, and quote dig-and-replace or trenchless lining. No surprise charges after we start.",
    features: ["Trenchless lining", "Spot repairs", "City permit pulled"],
  },
  {
    slug: "fixtures-remodels",
    title: "Fixtures & Remodels",
    description: "Faucets, toilets, disposals, and full bath rough-ins.",
    longDescription:
      "Working with a contractor or going it alone — we set fixtures, rough in baths, and re-vent kitchens. Brass, PEX, ABS, cast iron, we've installed it.",
    features: ["Toilet & faucet swaps", "Bath rough-ins", "Disposal & dishwasher"],
  },
  {
    slug: "gas-lines",
    title: "Gas Lines",
    description: "Test, repair, and run new lines for ranges, heaters, and grills.",
    longDescription:
      "Pressure tests on existing systems, new black-iron or CSST runs, and outdoor extensions for grills and pool heaters. Code-compliant and inspected.",
    features: ["Pressure testing", "New runs", "Outdoor extensions"],
  },
  {
    slug: "emergency",
    title: "24/7 Emergency",
    description: "Burst pipe? Call (361) 371-8163. We answer 24/7.",
    longDescription:
      "We keep a tech on call for genuine emergencies — burst lines, sewage backups, no-water calls. If we say we'll be there at two, we'll be there at two.",
    features: ["After-hours dispatch", "Burst pipe response", "Sewage backups"],
  },
];
