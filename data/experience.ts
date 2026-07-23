export type Experience = {
  year: string;
  role: string;
  company: string;
  companyHref?: string;
  description: string;
  tags: string[];
};

// Reverse-chronological.
export const experience: Experience[] = [
  {
    year: "2025 to now",
    role: "Technology Analyst",
    company: "Barclays UK",
    companyHref: "https://www.barclays.co.uk/",
    description:
      "I built an AI layer on top of our incident system (NowAssist) using Barclays' Claude models. It auto-triages new incidents, suggests who should pick them up, and recommends fixes based on how similar ones were handled before. Triage accuracy went up by roughly 30% and the average time to resolve dropped by about a fifth to a quarter.",
    tags: ["Python", "Claude", "Celonis", "SQL"],
  },
  {
    year: "2024",
    role: "Technology Analyst Intern",
    company: "Barclays UK",
    companyHref: "https://www.barclays.co.uk/",
    description:
      "I worked with the GTSM team to automate a chunk of their control and validation checks. Swapping the old random-forest models for deep neural nets took accuracy from 75% to 82% and cut the manual review load by about 20%.",
    tags: ["Python", "Deep Learning", "SQL"],
  },
];
