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
    year: "2025 – now",
    role: "Technology Analyst",
    company: "Barclays UK",
    companyHref: "https://www.barclays.co.uk/",
    description:
      "AI incident-intelligence layer on NowAssist using BarclaysAI (Claude) — auto-triage, assignee and resolution recommendations. +30% triage accuracy, −20–25% MTTR.",
    tags: ["Python", "Claude", "Celonis", "SQL"],
  },
  {
    year: "2024",
    role: "Technology Analyst Intern",
    company: "Barclays UK",
    companyHref: "https://www.barclays.co.uk/",
    description:
      "ML for control & validation in the GTSM team — moved random-forest → DNNs, lifting accuracy 75% → 82% and cutting manual review 20%.",
    tags: ["Python", "Deep Learning", "SQL"],
  },
];
