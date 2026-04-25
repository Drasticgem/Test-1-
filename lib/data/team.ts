export interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

export const team: TeamMember[] = [
  {
    name: "The Owen family",
    role: "Owners · Master plumbers",
    bio: "Three generations on the same Coastal Bend ground since 1976. Master plumber license M8552.",
  },
  {
    name: "Field crew",
    role: "Licensed technicians",
    bio: "Long-tenured techs in branded uniforms and trucks — same faces, year after year.",
  },
  {
    name: "Dispatch",
    role: "Office & emergency line",
    bio: "Picks up the phone — including nights, weekends, and holidays — and tells you exactly when a tech can be there.",
  },
];
