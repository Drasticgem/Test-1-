export interface Testimonial {
  name: string;
  quote: string;
  location: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Maria R.",
    quote:
      "They got the heater swapped before the cold front hit. Showed up when they said, cleaned up when they were done.",
    location: "Calallen",
  },
  {
    name: "David T.",
    quote:
      "Quoted the slab leak on the spot, jackhammered exactly where they said, no surprise charges at the end.",
    location: "Flour Bluff",
  },
  {
    name: "Jenna P.",
    quote:
      "Called at 11pm with a burst line. A real person answered, a real tech showed up by midnight. That's worth every penny.",
    location: "Portland",
  },
  {
    name: "Hector G.",
    quote:
      "We've used Owen for three remodels now. Crew is straight, work is clean, paperwork is done right.",
    location: "Rockport",
  },
];
