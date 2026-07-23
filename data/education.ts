export type Education = {
  year: string;
  degree: string;
  institution: string;
  institutionHref?: string;
  note?: string;
};

export const education: Education[] = [
  {
    year: "2020 – 2025",
    degree: "B.Tech (Double Major), Computer Science & Engineering",
    institution: "IIT (ISM) Dhanbad",
    institutionHref: "https://www.iitism.ac.in/",
    note: "GPA 8.13 / 10 · Deep Learning, Advanced Algorithms, DBMS, OS, Networks",
  },
];
