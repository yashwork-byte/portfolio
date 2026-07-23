import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";
import Reveal from "@/components/Reveal";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { experience } from "@/data/experience";
import { education } from "@/data/education";
import { skills } from "@/data/skills";

const nav = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  return (
    <main className="page">
      {/* ---------- header ---------- */}
      <header className="intro">
        <div className="intro-row">
          <div className="id">
            {profile.avatar && (
              <Image
                className="avatar"
                src={profile.avatar}
                alt={profile.name}
                width={220}
                height={220}
                priority
              />
            )}
            <div className="id-text">
              <h1>{profile.name}</h1>
              <p className="tagline">{profile.tagline}</p>
            </div>
          </div>
          <ThemeToggle />
        </div>
        <nav className="nav" aria-label="Sections">
          {nav.map((n) => (
            <a key={n.href} href={n.href}>
              {n.label}
            </a>
          ))}
          {profile.resumeHref && (
            <a href={profile.resumeHref} target="_blank" rel="noreferrer">
              Résumé
            </a>
          )}
        </nav>
      </header>

      {/* ---------- about ---------- */}
      <Reveal>
        <section id="about" className="section">
          <h2 className="section-label">About</h2>
          <div className="section-body">
            <p className="prose">{profile.about}</p>
          </div>
        </section>
      </Reveal>

      {/* ---------- experience ---------- */}
      <Reveal>
        <section id="work" className="section">
          <h2 className="section-label">Work</h2>
          <div className="section-body">
            <ul className="rows">
              {experience.map((e, i) => (
                <li key={`${e.company}-${i}`} className="row">
                  <span className="year">{e.year}</span>
                  <div className="row-body">
                    <p className="row-line">
                      <span className="strong">{e.role}</span>
                      <span className="muted">
                        {" · "}
                        {e.companyHref ? (
                          <a href={e.companyHref} target="_blank" rel="noreferrer">
                            {e.company}
                          </a>
                        ) : (
                          e.company
                        )}
                      </span>
                    </p>
                    <p className="sub">{e.description}</p>
                    {e.tags.length > 0 && (
                      <p className="tags">{e.tags.join(" · ")}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </Reveal>

      {/* ---------- projects ---------- */}
      <Reveal>
        <section id="projects" className="section">
          <h2 className="section-label">Projects</h2>
          <div className="section-body">
            <div className="project-list">
              {projects.map((p, i) => {
                const primary = p.demo ?? p.repo;
                return (
                  <article key={`${p.name}-${i}`} className="feature">
                    {p.thumb &&
                      (primary ? (
                        <a
                          className="feature-media"
                          href={primary}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${p.name} — open`}
                        >
                          <Image
                            src={p.thumb}
                            alt={`${p.name} screenshot`}
                            fill
                            sizes="(max-width: 620px) 100vw, 560px"
                          />
                        </a>
                      ) : (
                        <div className="feature-media">
                          <Image
                            src={p.thumb}
                            alt={`${p.name} screenshot`}
                            fill
                            sizes="(max-width: 620px) 100vw, 560px"
                          />
                        </div>
                      ))}
                    <div className="feature-head">
                      <div className="feature-head-left">
                        <h3 className="feature-title">{p.name}</h3>
                        {(p.repo || p.demo) && (
                          <span className="feature-links">
                            {p.repo && (
                              <a href={p.repo} target="_blank" rel="noreferrer">
                                repo
                              </a>
                            )}
                            {p.repo && p.demo && (
                              <span className="sep">·</span>
                            )}
                            {p.demo && (
                              <a href={p.demo} target="_blank" rel="noreferrer">
                                live
                              </a>
                            )}
                          </span>
                        )}
                      </div>
                      <span className="feature-year">{p.year}</span>
                    </div>
                    <p className="feature-blurb">{p.blurb}</p>
                    <p className="feature-desc">{p.description}</p>
                    {p.highlights.length > 0 && (
                      <ul className="feature-highlights">
                        {p.highlights.map((h, j) => (
                          <li key={j}>{h}</li>
                        ))}
                      </ul>
                    )}
                    {p.tags.length > 0 && (
                      <p className="tags feature-tags">{p.tags.join(" · ")}</p>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </Reveal>

      {/* ---------- skills ---------- */}
      <Reveal>
        <section id="stack" className="section">
          <h2 className="section-label">Stack</h2>
          <div className="section-body">
            <dl className="stack">
              {skills.map((g) => (
                <div key={g.label} className="stack-row">
                  <dt>{g.label}</dt>
                  <dd>{g.items.join(" · ")}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      </Reveal>

      {/* ---------- education ---------- */}
      <Reveal>
        <section id="education" className="section">
          <h2 className="section-label">Education</h2>
          <div className="section-body">
            <ul className="rows">
              {education.map((ed, i) => (
                <li key={`${ed.institution}-${i}`} className="row">
                  <span className="year">{ed.year}</span>
                  <div className="row-body">
                    <p className="row-line">
                      <span className="strong">{ed.degree}</span>
                      <span className="muted">
                        {" · "}
                        {ed.institutionHref ? (
                          <a
                            href={ed.institutionHref}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {ed.institution}
                          </a>
                        ) : (
                          ed.institution
                        )}
                      </span>
                    </p>
                    {ed.note && <p className="sub">{ed.note}</p>}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </Reveal>

      {/* ---------- footer ---------- */}
      <footer id="contact" className="footer">
        {profile.links.map((l, i) => (
          <span key={l.label}>
            {i > 0 && <span className="sep"> · </span>}
            <a href={l.href} target="_blank" rel="noreferrer">
              {l.label}
            </a>
          </span>
        ))}
      </footer>
    </main>
  );
}
