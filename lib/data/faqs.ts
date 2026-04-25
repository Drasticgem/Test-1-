export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: "Do you give written estimates before you start?",
    answer:
      "Always. We diagnose, write the price, and only run equipment with your sign-off. No surprise charges after we start.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "Corpus Christi, Portland, Rockport, Aransas Pass, Robstown, Kingsville, Ingleside, and the rest of the Coastal Bend.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes — Texas Master Plumber license M8552 and full liability and workers' comp insurance.",
  },
  {
    question: "Do you really answer 24/7?",
    answer:
      "Yes. A real Owen tech is on call every night and every weekend for true emergencies — burst pipes, sewage backups, and no-water calls.",
  },
  {
    question: "Can you handle a full repipe or just patch jobs?",
    answer:
      "Both. We patch single leaks and run whole-home PEX or copper repipes — drywall patched, permit pulled, inspected.",
  },
  {
    question: "Will I pay extra for after-hours service?",
    answer:
      "After-hours has a dispatch fee that we'll quote on the call before we leave the shop. The hourly rate is the same as daytime.",
  },
];
