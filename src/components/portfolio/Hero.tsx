import { Icons, Sparkle } from "./icons";
import { profile } from "./profile";

interface HeroProps {
  scrollTo: (id: string) => void;
}

export function Hero({ scrollTo }: HeroProps) {
  return (
    <section id="home">
      <div className="section-wrap">
        <div className="hero-grid">
          <div>
            <div className="hero-badge fade-up visible">
              <span style={{ color: "var(--c-accent)" }}>✦</span>
              MSc CA &amp; IT Student <span>•</span> Software Developer
            </div>
            <h1 className="hero-title fade-up visible">
              Building <em>digital</em> <span className="grad">experiences</span> &amp; real-world
              solutions.
            </h1>
            <p className="hero-sub fade-up">
              I'm a passionate developer who loves turning ideas into meaningful products. Currently
              building <strong>Aroha</strong> — a platform for reflection, growth and mindful
              living.
            </p>
            <div className="hero-btns fade-up">
              <button className="btn-primary" onClick={() => scrollTo("projects")}>
                View Projects <Icons.Arrow />
              </button>
              {/* TODO: set profile.github in profile.ts */}
              <a
                className="btn-ghost"
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icons.Github /> GitHub
              </a>
              {/* TODO: set profile.linkedin in profile.ts */}
              <a
                className="btn-ghost"
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icons.Linkedin /> LinkedIn
              </a>
            </div>
          </div>

          <div className="hero-card glass fade-up">
            <Sparkle size={18} style={{ position: "absolute", top: 20, left: 20 }} />
            <Sparkle
              size={12}
              style={{ position: "absolute", bottom: 30, right: 24, animationDelay: "1s" }}
              className="sparkle-float"
            />
            <Sparkle
              size={22}
              style={{
                position: "absolute",
                top: 60,
                right: 16,
                opacity: 0.4,
                animationDelay: "0.5s",
              }}
            />
            <div className="hero-img-wrap float-soft">
              {/* TODO: set profile.photo in profile.ts */}
              <img
                src={profile.photo}
                alt={`Portrait of ${profile.name}`}
                width={130}
                height={130}
                loading="eager"
              />
            </div>
            <h2 className="hero-card-name">{profile.name}</h2>
            <p className="hero-card-role">{profile.role}</p>
            <p className="hero-card-tagline">{profile.tagline}</p>
            <div className="hero-card-actions">
              {/* TODO: set profile.resume in profile.ts */}
              <a
                className="btn-primary"
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icons.Download /> Resume
              </a>
              {/* TODO: set profile.email in profile.ts */}
              <a className="btn-ghost" href={`mailto:${profile.email}`}>
                <Icons.Mail /> Email
              </a>
            </div>
            <blockquote className="hero-quote">
              <span className="hero-quote-mark">"</span>
              Code. Build. Learn. Repeat.
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
