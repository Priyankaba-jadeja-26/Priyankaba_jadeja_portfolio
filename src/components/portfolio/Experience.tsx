import { experiences } from "./data";

export function Experience() {
  return (
    <section id="experience">
      <div className="section-wrap">
        <div className="section-tag fade-up"><span>✦</span> Journey</div>
        <h2 className="section-title fade-up">Experience</h2>
        <div className="timeline">
          {experiences.map((e) => (
            <div className="timeline-item fade-up" key={e.role}>
              <div className="timeline-dot" />
              <div className="timeline-card glass">
                <div className="timeline-role">{e.role}</div>
                <div className="timeline-meta">{e.org} · {e.period}</div>
                <p className="timeline-desc">{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}