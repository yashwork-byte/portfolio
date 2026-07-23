import Image from "next/image";
import Hero from "@/components/Hero";
import Scoreboard from "@/components/Scoreboard";
import Reveal from "@/components/Reveal";
import Crest from "@/components/Crest";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { experience } from "@/data/experience";
import { education } from "@/data/education";
import { skills } from "@/data/skills";
import { honours } from "@/data/honours";

const nav = [
  { label: "Profile", href: "#profile" },
  { label: "Season", href: "#season" },
  { label: "Signings", href: "#signings" },
  { label: "Attributes", href: "#attributes" },
  { label: "Honours", href: "#honours" },
  { label: "Full Time", href: "#contact" },
];

export default function Home() {
  return (
    <>
      {/* ---------- top bar ---------- */}
      <nav className="topbar" aria-label="Sections">
        <a className="brand" href="#top">
          <Crest className="brand-crest" />
          <span>
            Yash Tarun <b>{profile.kit}</b>
          </span>
        </a>
        <div className="topbar-links">
          {nav.map((n) => (
            <a key={n.href} href={n.href}>
              {n.label}
            </a>
          ))}
          {profile.resumeHref && (
            <a className="cta" href={profile.resumeHref} target="_blank" rel="noreferrer">
              Résumé
            </a>
          )}
        </div>
      </nav>

      <span id="top" />
      <Hero />

      <main>
        <Scoreboard />

        {/* ---------- player profile ---------- */}
        <Reveal>
          <section id="profile" className="block">
            <div className="sec-head">
              <span className="sec-kicker">01</span>
              <h2>Player Profile</h2>
              <span className="rule" />
            </div>
            <div className="profile">
              <div className="profile-badge">
                <Crest className="profile-crest" />
              </div>
              <div>
                <p className="profile-bio">{profile.about}</p>
                <dl className="profile-meta">
                  <div>
                    <dt>Position</dt>
                    <dd>Full-stack ML · agents · eval</dd>
                  </div>
                  <div>
                    <dt>Club</dt>
                    <dd>Barclays UK</dd>
                  </div>
                  {education[0] && (
                    <div>
                      <dt>Academy</dt>
                      <dd>
                        {education[0].institution} · {education[0].degree}
                        {education[0].note ? ` · ${education[0].note}` : ""}
                      </dd>
                    </div>
                  )}
                  <div>
                    <dt>Form</dt>
                    <dd>Codeforces Specialist</dd>
                  </div>
                </dl>
              </div>
            </div>
          </section>
        </Reveal>

        {/* ---------- season so far (work) ---------- */}
        <Reveal>
          <section id="season" className="block">
            <div className="sec-head">
              <span className="sec-kicker">02</span>
              <h2>Season So Far</h2>
              <span className="rule" />
            </div>
            <div className="results">
              {experience.map((e, i) => (
                <div key={`${e.company}-${i}`} className="result">
                  <div className="badge-w">W</div>
                  <div>
                    <div className="result-role">
                      {e.role}
                      <span className="club">
                        {" · "}
                        {e.companyHref ? (
                          <a href={e.companyHref} target="_blank" rel="noreferrer">
                            {e.company}
                          </a>
                        ) : (
                          e.company
                        )}
                      </span>
                    </div>
                    <div className="result-desc">{e.description}</div>
                    {e.tags.length > 0 && (
                      <div className="result-tags">{e.tags.join(" · ")}</div>
                    )}
                  </div>
                  <div className="result-when">{e.year}</div>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* ---------- signings (projects) ---------- */}
        <Reveal>
          <section id="signings" className="block">
            <div className="sec-head">
              <span className="sec-kicker">03</span>
              <h2>Signings</h2>
              <span className="rule" />
            </div>
            <div className="signings">
              {projects.map((p, i) => {
                const primary = p.demo ?? p.repo;
                return (
                  <article key={`${p.name}-${i}`} className="signing">
                    {p.thumb && (
                      <a
                        className="signing-media"
                        href={primary}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${p.name} — open`}
                      >
                        <Image
                          src={p.thumb}
                          alt={`${p.name} screenshot`}
                          fill
                          sizes="(max-width: 680px) 100vw, 480px"
                        />
                      </a>
                    )}
                    <div className="signing-body">
                      <div className="signing-top">
                        <h3>{p.name}</h3>
                        <span className="signing-year">{p.year}</span>
                      </div>
                      <p className="signing-pos">{p.blurb}</p>
                      <p className="signing-desc">{p.description}</p>
                      {p.highlights.length > 0 && (
                        <ul className="signing-highlights">
                          {p.highlights.map((h, j) => (
                            <li key={j}>{h}</li>
                          ))}
                        </ul>
                      )}
                      <div className="signing-foot">
                        <span className="signing-tags">{p.tags.join(" · ")}</span>
                        {(p.repo || p.demo) && (
                          <span className="signing-links">
                            {p.repo && (
                              <a href={p.repo} target="_blank" rel="noreferrer">
                                repo
                              </a>
                            )}
                            {p.demo && (
                              <a href={p.demo} target="_blank" rel="noreferrer">
                                live
                              </a>
                            )}
                          </span>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        </Reveal>

        {/* ---------- attributes (skills) ---------- */}
        <Reveal>
          <section id="attributes" className="block">
            <div className="sec-head">
              <span className="sec-kicker">04</span>
              <h2>Attributes</h2>
              <span className="rule" />
            </div>
            <div className="attributes">
              {skills.map((g) => (
                <div key={g.label} className="attr-row">
                  <div className="attr-label">{g.label}</div>
                  <div className="chips">
                    {g.items.map((it) => (
                      <span key={it} className="chip">
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* ---------- honours ---------- */}
        <Reveal>
          <section id="honours" className="block">
            <div className="sec-head">
              <span className="sec-kicker">05</span>
              <h2>Trophy Cabinet</h2>
              <span className="rule" />
            </div>
            <ul className="honours">
              {honours.map((h, i) => (
                <li key={i} className="honour">
                  <span className="honour-cup">🏆</span>
                  <div>
                    <div className="honour-title">{h.title}</div>
                    <div className="honour-detail">{h.detail}</div>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        {/* ---------- full time (contact) ---------- */}
        <footer id="contact" className="fulltime">
          <div className="ft-line">— Full Time —</div>
          <div className="ft-socials">
            {profile.links.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noreferrer">
                {l.label}
              </a>
            ))}
          </div>
        </footer>
      </main>
    </>
  );
}
