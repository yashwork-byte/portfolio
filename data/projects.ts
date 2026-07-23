export type Project = {
  year: string;
  name: string;
  blurb: string; // one-line subtitle
  description: string; // 2–3 sentences: what it is + how it works
  highlights: string[]; // short technical / result bullets
  tags: string[];
  // Both optional. `repo` = source, `demo` = live site / Space.
  repo?: string;
  demo?: string;
  // Screenshot in public/thumbs (captured from the live site).
  thumb?: string;
};

// Reverse-chronological.
export const projects: Project[] = [
  {
    year: "2026",
    name: "MemoryPlace",
    blurb: "neutral leaderboard for agentic-memory architectures",
    description:
      "There are a dozen agent-memory tools out now (mem0, Zep, Letta and the rest) and no honest way to line them up. MemoryPlace runs them all through the same benchmark, and only submissions from the shared Hub count, so the leaderboard numbers actually mean something.",
    highlights: [
      "scored by an LLM judge, plus latency and token cost",
      "evals run on Modal; every submission is public and reproducible",
      "a recommender and marketplace sit on top of the benchmark",
    ],
    tags: ["evals", "modal", "leaderboard"],
    repo: "https://github.com/yashwork-byte/memoryplace",
    demo: "https://memoryplace.vercel.app/",
    thumb: "/thumbs/memoryplace.png",
  },
  {
    year: "2026",
    name: "CodeComp",
    blurb: "codebase QA + agentic edits",
    description:
      "Ask it about a codebase you've never seen, or tell it to make a change and it reviews, verifies and re-indexes the result. It pulls functions out with tree-sitter, stores them in Qdrant, and combines plain vector search with call-graph expansion so the answer includes the code that actually matters up and down the chain.",
    highlights: [
      "routing, reasoning and debugging agents, with context compression",
      "call-graph-aware retrieval cut irrelevant context by about 30%",
      "works across Python, JS/TS, Go, Java, Rust and C/C++",
    ],
    tags: ["tree-sitter", "qdrant", "langfuse"],
    repo: "https://github.com/yashwork-byte/CompCode",
    demo: "https://compcode-beta.vercel.app/",
    thumb: "/thumbs/codecomp.png",
  },
  {
    year: "2026",
    name: "Suno",
    blurb: "on-device WhatsApp voice-note digester",
    description:
      "Record a voice note the way you would on WhatsApp and Suno turns it into something you can actually search, all on the phone itself. It works out the language on its own (Hindi, Tamil, Bengali and more), keeps notes grouped by who was talking, and lets you ask questions across everything you've saved.",
    highlights: [
      "IndicConformer for speech, Sarvam-Translate 4B for translation, fully offline",
      "sqlite-vec semantic search over your own notes",
      "turns rambling voice notes into per-speaker digests",
    ],
    tags: ["IndicConformer", "Sarvam-Translate", "sqlite-vec"],
    repo: "https://github.com/yashwork-byte/voice-note-digester",
    demo: "https://voice-note-digester.vercel.app/",
    thumb: "/thumbs/suno.png",
  },
  {
    year: "2026",
    name: "Field-naturalist logbook",
    blurb: "offline bird-ID logbook",
    description:
      "Point it at a photo of a bird and a fine-tuned LFM2-VL tells you the species and writes up a proper observation, taxonomy and the traits it spotted included. It's small enough to run offline out in the field. I built it for the Liquid AI hackathon.",
    highlights: [
      "fine-tuned the LFM2.5-VL-1.6B vision-language model",
      "gives you a structured observation, not just a label",
      "runs on-device with no connection needed",
    ],
    tags: ["LFM2-VL", "fine-tuning", "on-device"],
    repo: "https://github.com/yashwork-byte/field-naturalist-logbook",
    demo: "https://huggingface.co/spaces/yashwork-byte/field-naturalist-logbook",
    thumb: "/thumbs/field-naturalist.png",
  },
];
