export type Link = {
  label: string;
  href: string;
};

export const profile = {
  name: "Yash Tarun",
  // The top-line tagline.
  tagline: "Applied ML: on-device models, agents, and eval-first",

  // Football framing (Old Trafford night-match theme).
  kit: "08",
  position: "CDM · Box-to-box engineer · Barclays UK",

  // Header avatar in public/ (face-cropped square). Empty string hides it.
  avatar: "/me-avatar.jpg",

  // Scoreboard stat tiles (count up on scroll).
  scoreboard: [
    { value: 4, suffix: "", label: "Projects shipped" },
    { value: 1590, suffix: "", label: "Codeforces rating" },
    { value: 800, suffix: "+", label: "Problems solved" },
    { value: 2, suffix: "", label: "Barclays spells" },
  ],

  about:
    "I'm a Technology Analyst at Barclays UK and a computer science grad from " +
    "IIT (ISM) Dhanbad. At work I build AI tooling for incident triage on Barclays' " +
    "Claude models. In my own time I keep shipping on-device models, agents, and " +
    "eval-first pipelines, mostly because I like getting ML to actually hold up under " +
    "real constraints instead of in a demo. Off the clock I'm a Manchester United fan " +
    "through and through, and there's usually Pink Floyd or Guns N' Roses playing while I code.",

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
