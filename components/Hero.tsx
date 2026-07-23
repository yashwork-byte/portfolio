"use client";

import { useRef, useState } from "react";
import { profile } from "@/data/profile";

export default function Hero() {
  const ballRef = useRef<HTMLButtonElement>(null);
  const [flash, setFlash] = useState(false);
  const [goal, setGoal] = useState(false);
  const kicked = useRef(false);

  function scrollToMatch() {
    document
      .getElementById("scoreboard")
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  function kickOff() {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || kicked.current) {
      scrollToMatch();
      return;
    }
    kicked.current = true;
    const ball = ballRef.current;
    ball?.classList.add("fly");
    window.setTimeout(() => {
      setFlash(true);
      setGoal(true);
    }, 520);
    window.setTimeout(scrollToMatch, 1050);
    window.setTimeout(() => {
      setFlash(false);
      setGoal(false);
      if (ball) ball.style.visibility = "hidden";
    }, 1750);
  }

  const [first, ...rest] = profile.name.split(" ");
  const last = rest.join(" ");

  return (
    <>
      <div className={`goalflash${flash ? " on" : ""}`} aria-hidden />
      <div className={`goaltxt display${goal ? " on" : ""}`} aria-hidden>
        Goooal!
      </div>

      <header className="hero floods">
        <p className="eyebrow">
          <b>●</b> Old Trafford · Night Match · <b>MUFC</b>
        </p>
        <h1 className="hero-title">
          {first} <span className="red">{last}</span>{" "}
          <span className="kit-no">{profile.kit}</span>
        </h1>
        <p className="hero-tag">{profile.tagline}</p>
        <p className="position">{profile.position}</p>

        <div className="pitch" aria-hidden>
          <svg viewBox="0 0 720 210" preserveAspectRatio="xMidYMax meet">
            <g fill="none" stroke="rgba(255,255,255,0.26)" strokeWidth="2">
              <ellipse cx="360" cy="230" rx="330" ry="120" />
              <ellipse cx="360" cy="180" rx="120" ry="46" />
              <line x1="0" y1="150" x2="720" y2="150" opacity="0.35" />
            </g>
            <circle cx="360" cy="176" r="3.5" fill="rgba(255,255,255,0.6)" />
          </svg>
          <button
            ref={ballRef}
            className="ball"
            onClick={kickOff}
            aria-label="Kick off"
          >
            <svg viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="48" fill="#fff" stroke="#cfd3d8" strokeWidth="1" />
              <polygon points="50,26 63,36 58,52 42,52 37,36" fill="#15181c" />
              <polygon points="50,74 60,66 68,72 64,82 52,82" fill="#15181c" opacity="0.9" />
              <polygon points="26,44 36,38 40,52 30,60 22,52" fill="#15181c" opacity="0.9" />
              <polygon points="74,44 78,54 70,60 62,52 66,40" fill="#15181c" opacity="0.9" />
            </svg>
          </button>
        </div>

        <button className="kick-cta" onClick={kickOff}>
          ▸ Kick off
        </button>
        <p className="kick-hint">…or just kick the ball</p>
      </header>
    </>
  );
}
