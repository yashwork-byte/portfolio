// Original personal crest — a trident (red-devil nod) over a football on a
// shield. Deliberately NOT the Manchester United badge; just fan-spirited.
export default function Crest({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 110"
      role="img"
      aria-label="Yash Tarun crest"
      fill="none"
    >
      {/* shield */}
      <path
        d="M50 4 L92 16 V56 C92 82 72 98 50 106 C28 98 8 82 8 56 V16 Z"
        fill="#141a20"
        stroke="#da291c"
        strokeWidth="3.5"
      />
      <path
        d="M50 4 L92 16 V56 C92 82 72 98 50 106 C28 98 8 82 8 56 V16 Z"
        fill="url(#g)"
      />
      {/* trident */}
      <g stroke="#da291c" strokeWidth="3.4" strokeLinecap="round" fill="none">
        <path d="M50 22 V60" />
        <path d="M34 30 C34 44 42 46 50 46 C58 46 66 44 66 30" />
        <path d="M34 30 V24 M66 30 V24 M50 22 V16" />
      </g>
      {/* football */}
      <circle cx="50" cy="74" r="15" fill="#fff" stroke="#c9ced4" strokeWidth="1" />
      <polygon points="50,66 55,70 53,76 47,76 45,70" fill="#141a20" />
      <path
        d="M50 66 L44 62 M50 66 L56 62 M45 70 L38 70 M55 70 L62 70 M47 76 L44 83 M53 76 L56 83"
        stroke="#141a20"
        strokeWidth="1.4"
      />
      <defs>
        <radialGradient id="g" cx="0.5" cy="0.3" r="0.8">
          <stop offset="0" stopColor="#da291c" stopOpacity="0.28" />
          <stop offset="0.6" stopColor="#da291c" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}
