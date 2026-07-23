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
      "An AI layer on top of our incident system (NowAssist), built on Barclays' Claude models. It auto-triages new incidents, suggests who should pick them up, and recommends fixes drawn from how similar ones were handled before. Triage accuracy climbed by roughly 30%, and average time to resolve fell by about a fifth to a quarter.",
    tags: ["Python", "Claude", "Celonis", "SQL"],
  },
  {
    year: "2024",
    role: "Technology Analyst Intern",
    company: "Barclays UK",
    companyHref: "https://www.barclays.co.uk/",
    description:
      "Automated a good chunk of the GTSM team's control and validation checks. Swapping the old random-forest models for deep neural nets took accuracy from 75% to 82% and cut the manual review load by about 20%.",
    tags: ["Python", "Deep Learning", "SQL"],
  },
];
