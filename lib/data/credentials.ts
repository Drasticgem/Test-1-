/**
 * Trust signals — surfaced on the hero trust row and the WhyChooseUs badges.
 */
export interface Credential {
  value: string;
  smallValue?: boolean;
  title: string;
  sub: string;
  shortLabel: string;
}

export const CREDENTIALS: Credential[] = [
  {
    value: "M8552",
    smallValue: true,
    title: "Master plumber licensed",
    sub: "Texas Master Lic. M8552",
    shortLabel: "Master Lic. M8552",
  },
  {
    value: "1976",
    title: "Family-owned since",
    sub: "Three generations in the Coastal Bend",
    shortLabel: "Est. 1976",
  },
  {
    value: "24/7",
    title: "Emergency line answered",
    sub: "Burst pipes, sewage backups, no-water calls",
    shortLabel: "24/7 Emergency",
  },
];
