export type SkillGroup = {
  label: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  { label: "Languages", items: ["Python", "C++", "Java", "TypeScript", "SQL"] },
  {
    label: "ML & LLM",
    items: [
      "PyTorch",
      "Hugging Face",
      "VLMs",
      "RAG",
      "vector DBs",
      "prompt engineering",
      "evals",
    ],
  },
  {
    label: "Systems & infra",
    items: [
      "Node.js",
      "Spring Boot",
      "Redis",
      "PostgreSQL",
      "MongoDB",
      "Qdrant",
      "Docker",
      "Kubernetes",
      "Modal",
      "Git",
      "Linux",
    ],
  },
];
