import { Icons } from "./icons";
export function Achievements() {
  return (
    <section id="achievements">
      <div className="section-wrap">
        <div className="section-tag fade-up">
          <span>✦</span> Recognition
        </div>

        <h2 className="section-title fade-up">Achievements</h2>

        <div className="edu-card glass fade-up" style={{ marginTop: 36 }}>
          <div className="edu-icon-wrap">🏆</div>

          <div>
            <div className="edu-degree">First UG Student with Two SSIP Approved Projects</div>

            <div className="edu-uni">Student Startup & Innovation Policy (SSIP)</div>

            <div className="edu-year">2026</div>

            <p style={{ marginTop: "12px" }}>
              Became the first undergraduate student in the department to secure approval for two
              independent SSIP innovation projects, demonstrating research, innovation, and
              problem-solving capabilities.
            </p>
          </div>
        </div>

        <div className="edu-card glass fade-up" style={{ marginTop: 24 }}>
          <div className="edu-icon-wrap">👓</div>

          <div>
            <div className="edu-degree">AI Smart Spectacles Project</div>

            <div className="edu-year"> SSIP Approved Project • 2026 </div>

            <p style={{ marginTop: "8px" }}>
              AI-Based Smart Spectacles for Eye Health, Stress Monitoring and Mental Well-Being
            </p>
            <div style={{ marginTop: "12px" }}>
              <a
                className="project-link primary"
                href="/documents/PriyankabaSmartSpectaclesSSIP.pptx"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Proposal
              </a>
            </div>
          </div>
        </div>

        <div className="edu-card glass fade-up" style={{ marginTop: 24 }}>
          <div className="edu-icon-wrap">🧠</div>

          <div>
            <div className="edu-degree">Brain-Controlled Assistive Home System</div>

            <div className="edu-year"> SSIP Approved Project • 2026 </div>

            <p style={{ marginTop: "8px" }}>
              AI & IoT-Based Brain Controlled Assistive Home System
            </p>
            <div style={{ marginTop: "12px" }}>
              <a
                className="project-link primary"
                href="/documents/PriyankabaSSIP-AssistiveHome.pptx"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Proposal
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
