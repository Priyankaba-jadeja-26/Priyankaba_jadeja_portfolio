import { Icons } from "./icons";

interface AboutProps {
  scrollTo: (id: string) => void;
}

export function About({ scrollTo }: AboutProps) {
  const stats = [
    { icon: <Icons.Code />, num: "6+", label: "Technologies" },
    { icon: <Icons.Folder />, num: "3+", label: "Projects" },
    { icon: <Icons.Trophy />, num: "2+", label: "Experiences" },
  ];

  return (
    <section id="about">
      <div className="section-wrap">
        <div className="section-tag fade-up"><span>✦</span> About</div>
        <h2 className="section-title fade-up">About Me</h2>
        <div className="about-card glass fade-up">
          <div className="about-text">
            <p>
              I'm pursuing my MSc in Computer Applications &amp; Information Technology. I enjoy coding,
              building web applications, and solving problems through technology.
            </p>
            <p>
              I believe in continuous learning, clean code, and creating meaningful impact through software.
            </p>
            <button className="btn-primary" style={{ marginTop: 10 }} onClick={() => scrollTo("contact")}>
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
      </div>
    </section>
  );
}