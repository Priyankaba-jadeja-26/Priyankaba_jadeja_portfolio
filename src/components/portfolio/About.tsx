import { Icons } from "./icons";
import { highlights } from "./data";

interface AboutProps {
  scrollTo: (id: string) => void;
}

export function About({ scrollTo }: AboutProps) {
  const stats = [
    { icon: <Icons.Code />, num: "11+", label: "Technologies" },
    { icon: <Icons.Code />, num: "9", label: "Tools" },
    { icon: <Icons.Folder />, num: "2+", label: "Projects Deployed" },
    { icon: <Icons.Trophy />, num: "2+", label: "Years of learning" },
  ];

  return (
    <section id="about">
      <div className="section-wrap">
        <div className="section-tag fade-up">
          <span>✦</span> About
        </div>
        <h2 className="section-title fade-up">About Me</h2>
        <div className="about-card glass fade-up">
          <div className="about-text">
            <p>
              I'm Priyankaba Jadeja, an MSc CA & IT student and aspiring software developer
              passionate about transforming ideas into meaningful digital products. My journey in
              technology is driven by curiosity, continuous learning, and a desire to create
              solutions that make a real impact.
            </p>
            <p>
              Over time, I've explored different areas including frontend development, content
              creation, and AI-driven projects. I enjoy creating clean, user-focused experiences and
              and turning concepts into practical solutions. Whether it's developing web
              applications, designing thoughtful interfaces, or experimenting with innovative ideas,
              every project is an opportunity to learn and improve.
            </p>
            <p>
              Beyond coding, I enjoy public speaking and communication. I've anchored some events
              like a state level Seminar: on AI Tools in Research, an experience that strengthened
              my confidence, presentation skills, and ability to connect with people.
            </p>
            <p>
              I believe in learning by building, embracing challenges, and continuously improving.
              Whether it's developing applications, exploring emerging technologies, or speaking in
              front of an audience, I strive to grow, create value, and make a positive impact
              through my work.
            </p>
            <button
              className="btn-primary"
              style={{ marginTop: 10 }}
              onClick={() => scrollTo("contact")}
            >
              More About Me <Icons.Arrow />
            </button>
          </div>
          <div className="stat-cards">
            {stats.map((s) => (
              <div className="stat-card" key={s.label}>
                <div className="icon">{s.icon}</div>
                <span className="num">{s.num}</span>
                <div className="label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="highlights-grid fade-up">
          {highlights.map((h) => (
            <div className="highlight-card glass-sm" key={h.label}>
              <span className="num">{h.num}</span>
              <div className="label">{h.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
