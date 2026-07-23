export type Link = {
  label: string;
  href: string;
};

export const profile = {
  name: "Yash Tarun",
  // Reword freely — this is the top-line tagline.
  tagline: "Applied ML — on-device models, agents, eval-first",

  // Header avatar in public/ (face-cropped square). Empty string hides it.
  avatar: "/me-avatar.jpg",

  // Edit freely — 2–3 terse lines, no marketing tone.
  about:
    "Technology Analyst at Barclays UK and a CS grad from IIT (ISM) Dhanbad. " +
    "I build applied-ML systems — AI incident-triage tooling on Claude models at work, " +
    "and on-device models, agents, and eval-first pipelines of my own. " +
    "Codeforces Specialist, 800+ problems solved.",

  // Served from public/resume.pdf. Empty string hides the Résumé link.
  resumeHref: "/resume.pdf",

  links: [
    { label: "GitHub", href: "https://github.com/yashwork-byte" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/yash-tarun-522a7321a/" },
    { label: "Email", href: "mailto:tarunyash01@gmail.com" },
    { label: "X", href: "https://x.com/LenovoHere" },
    { label: "Medium", href: "https://medium.com/@tarunyash01" },
  ] satisfies Link[],
};
