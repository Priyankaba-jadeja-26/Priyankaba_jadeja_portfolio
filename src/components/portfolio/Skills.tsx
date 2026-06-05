import { languages, technologies, tools } from "./data";

export function Skills() {
  return (
    <section id="skills">
      <div className="section-wrap">
        <div className="section-tag fade-up">
          <span>✦</span> Expertise
        </div>
        <h3 className="skills-heading">Languages</h3>
        <div className="skills-grid">
          {languages.map((skill) => (
            <span className="skill-pill" key={skill}>
              {skill}
            </span>
          ))}
        </div>

        <h3 className="skills-heading">Web Technologies</h3>
        <div className="skills-grid">
          {technologies.map((skill) => (
            <span className="skill-pill" key={skill}>
              {skill}
            </span>
          ))}
        </div>

        <h3 className="skills-heading">Tools & Platforms</h3>
        <div className="skills-grid">
          {tools.map((skill) => (
            <span className="skill-pill" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
