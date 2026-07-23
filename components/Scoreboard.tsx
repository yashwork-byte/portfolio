"use client";

import { useEffect, useRef, useState } from "react";
import { profile } from "@/data/profile";

function Stat({
  value,
  suffix,
  label,
  run,
  red,
}: {
  value: number;
  suffix: string;
  label: string;
  run: boolean;
  red?: boolean;
}) {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!run) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setN(value);
      return;
    }
    const dur = 1100;
    const t0 = performance.now();
    let raf = 0;
    const step = (t: number) => {
      const p = Math.min((t - t0) / dur, 1);
      setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [run, value]);

  return (
    <div className="stat">
      <div className={`stat-n${red ? " red" : ""}`}>
        {n.toLocaleString()}
        {suffix}
      </div>
      <div className="stat-l">{label}</div>
    </div>
  );
}

export default function Scoreboard() {
  const ref = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setRun(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="scoreboard" id="scoreboard" ref={ref}>
      {profile.scoreboard.map((s, i) => (
        <Stat key={s.label} {...s} run={run} red={i === 0} />
      ))}
    </div>
  );
}
