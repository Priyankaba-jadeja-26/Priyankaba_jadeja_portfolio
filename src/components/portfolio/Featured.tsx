import { Icons } from "./icons";
import { featuredProject } from "./data";

export function Featured() {
  const p = featuredProject;
  return (
    <section id="featured">
      <div className="section-wrap">
        <div className="section-tag fade-up">
          <span>✦</span> Currently Building
        </div>
        <h2 className="section-title fade-up" style={{ marginBottom: 8 }}>
          Featured Project
        </h2>
        <p className="section-sub fade-up" style={{ marginBottom: 36 }}>
          The project I'm pouring the most energy into right now.
        </p>

        <article className="featured-card glass fade-up">
          <div className="featured-shots">
            {p.screenshots.map((s, i) => (
              <figure className="featured-shot glass-sm" key={i}>
                <img src={s.src} alt={s.alt} loading="lazy" />
              </figure>
            ))}
          </div>

          <div className="featured-content">
            <div className="project-title-row">
              <span className="featured-title">{p.title}</span>
              <span className="featured-badge">In Development</span>
            </div>
            <p className="featured-tagline">{p.tagline}</p>
            <p className="project-desc" style={{ marginBottom: 18 }}>
              {p.desc}
            </p>

            <ul className="featured-highlights">
              {p.highlights.map((h) => (
                <li key={h}>
                  <span className="featured-check" aria-hidden="true">
                    ✓
                  </span>
                  {h}
                </li>
              ))}
            </ul>

            <div className="project-tags" style={{ marginBottom: 20 }}>
              {p.tags.map((t) => (
                <span className="tag" key={t}>
                  {t}
                </span>
              ))}
            </div>

            <div className="hero-btns" style={{ margin: 0 }}>
              {/* TODO: set live URL in data.ts (featuredProject.live) */}
              <a className="btn-primary" href={p.live} target="_blank" rel="noopener noreferrer">
                <Icons.ExternalLink /> Live Demo
              </a>
              {/* TODO: set GitHub URL in data.ts (featuredProject.github) */}
              <a className="btn-ghost" href={p.github} target="_blank" rel="noopener noreferrer">
                <Icons.Github /> GitHub
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
