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
      "An open, neutral place to compare agent-memory stacks — mem0, Zep, Letta, and the rest — on the same footing. You pick an architecture, it's evaluated the same way, and only runs from the shared Hub are allowed onto the leaderboard, so the numbers stay reproducible.",
    highlights: [
      "LLM-judge scoring alongside latency and token-cost",
      "evals run on Modal; public-only, reproducible submissions",
      "recommender + marketplace on top of the benchmark",
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
      "Ask questions about an unfamiliar codebase, or ask it to make a change — reviewed, verified, and re-indexed. Functions are extracted with tree-sitter and embedded into Qdrant; retrieval blends vector similarity with call-graph expansion so answers pull in the right upstream and downstream context.",
    highlights: [
      "multi-agent routing / reasoning / debugging with context compression",
      "call-graph-aware retrieval cut irrelevant context ~30%",
      "handles Python, JS/TS, Go, Java, Rust, C/C++",
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
      "Speak a WhatsApp-style voice note and Suno files it — transcribed, translated, and searchable — entirely on-device. Language is auto-detected across Hindi, Tamil, Bengali and more, notes are grouped by speaker, and you can ask questions across everything you've recorded.",
    highlights: [
      "IndicConformer STT + Sarvam-Translate 4B, running offline",
      "sqlite-vec semantic search over your own notes",
      "per-speaker digests from raw voice input",
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
      "Point it at a bird photo and a fine-tuned LFM2-VL identifies the species and writes a structured observation — species, taxonomy, and observed traits — small enough to run offline in the field. Built for the Liquid AI hackathon series.",
    highlights: [
      "fine-tuned LFM2.5-VL-1.6B vision-language model",
      "structured JSON observations, not just a label",
      "on-device, no connectivity required",
    ],
    tags: ["LFM2-VL", "fine-tuning", "on-device"],
    repo: "https://github.com/yashwork-byte/field-naturalist-logbook",
    demo: "https://huggingface.co/spaces/yashwork-byte/field-naturalist-logbook",
    thumb: "/thumbs/field-naturalist.png",
  },
];
