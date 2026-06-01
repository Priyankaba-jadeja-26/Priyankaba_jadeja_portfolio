import { Icons, Sparkle } from "./icons";

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
              Building <em>digital</em> <span className="grad">experiences</span> &amp; real-world solutions.
            </h1>
            <p className="hero-sub fade-up">
              I'm a passionate developer who loves turning ideas into meaningful products.
              Currently building <strong>Aroha</strong> — a platform for reflection, growth and mindful living.
            </p>
            <div className="hero-btns fade-up">
              <button className="btn-primary" onClick={() => scrollTo("projects")}>
                View Projects <Icons.Arrow />
              </button>
              {/* TODO: add real GitHub profile URL */}
              <a className="btn-ghost" href="#" target="_blank" rel="noopener noreferrer">
                <Icons.Github /> GitHub
              </a>
              {/* TODO: add real LinkedIn profile URL */}
              <a className="btn-ghost" href="#" target="_blank" rel="noopener noreferrer">
                <Icons.Linkedin /> LinkedIn
              </a>
            </div>
          </div>

          <div className="hero-card glass fade-up">
            <Sparkle size={18} style={{ position: "absolute", top: 20, left: 20 }} />
            <Sparkle size={12} style={{ position: "absolute", bottom: 30, right: 24, animationDelay: "1s" }} className="sparkle-float" />
            <Sparkle size={22} style={{ position: "absolute", top: 60, right: 16, opacity: 0.4, animationDelay: "0.5s" }} />
            <div className="hero-img-wrap">
              {/* TODO: replace with a real profile photo */}
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616b332b70b?w=600&q=80&auto=format&fit=crop"
                alt="Priyankaba Jadeja"
              />
            </div>
            <blockquote className="hero-quote">
              <span className="hero-quote-mark">"</span>
              Code. Build. Learn.<br />Repeat.
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}