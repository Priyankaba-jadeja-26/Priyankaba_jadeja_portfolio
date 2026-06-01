import { Icons } from "./icons";
import { projects } from "./data";

export function Projects() {
  return (
    <section id="projects">
      <div className="section-wrap">
        <div className="projects-header fade-up">
          <div>
            <div className="section-tag"><span>✦</span> Work</div>
            <h2 className="section-title" style={{ marginBottom: 0 }}>Projects</h2>
          </div>
          {/* TODO: link to a full projects page or repository list */}
          <a href="#" style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--c-accent)", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>
            View All Projects <Icons.Arrow />
          </a>
        </div>
        <div className="projects-grid">
          {projects.map((p) => (
            <div className="project-card glass fade-up" key={p.title}>
              <img className="project-img" src={p.image} alt={p.title} loading="lazy" />
              <div className="project-body">
                <div className="project-title-row">
                  <span className="project-title">{p.title}</span>
                  {p.badge && <span className="featured-badge">{p.badge}</span>}
                </div>
                <p className="project-desc">{p.desc}</p>
                <div className="project-tags">
                  {p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
                </div>
                <div className="project-links">
                  <a className="project-link primary" href={p.live}><Icons.ExternalLink /> Live Demo</a>
                  <a className="project-link ghost" href={p.github}><Icons.Github /> GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}