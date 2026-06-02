import { skills } from "./data";

export function Skills() {
  return (
    <section id="skills">
      <div className="section-wrap">
        <div className="section-tag fade-up">
          <span>✦</span> Expertise
        </div>
        <h2 className="section-title fade-up">My Skills</h2>
        <p className="section-sub fade-up">Technologies and tools I work with.</p>
        <div className="skills-grid fade-up">
          {skills.map((s) => (
            <div className="skill-pill" key={s}>
              <span className="skill-dot" /> {s}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
