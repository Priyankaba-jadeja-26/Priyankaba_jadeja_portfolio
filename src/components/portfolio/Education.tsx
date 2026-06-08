import { Icons } from "./icons";

export function Education() {
  return (
    <section id="education">
      <div className="section-wrap">
        <div className="section-tag fade-up">
          <span>✦</span> Academia
        </div>
        <h2 className="section-title fade-up">Education</h2>
        {/* MSc */}
        <div className="edu-card glass fade-up" style={{ marginTop: 36 }}>
          <div className="edu-icon-wrap">
            <Icons.GraduationCap />
          </div>

          <div>
            <div className="edu-degree">Integrated MSc (CA & IT)</div>

            <div className="edu-uni"> Krantiguru Shyamji Krishna Verma Kutch University </div>

            <div className="edu-year"> 2024 – Present | Expected Graduation: 2029 </div>

            <div style={{ marginTop: "12px", lineHeight: "1.8" }}>
              <div>Semester 1 • 8.18 SGPA</div>
              <div>Semester 2 • 8.18 SGPA</div>
              <div>Semester 3 • 8.36 SGPA</div>
              <div>Semester 4 • Result Awaited</div>
              <div
                style={{
                  marginTop: "16px",
                  display: "flex",
                  gap: "10px",
                  flexWrap: "wrap",
                }}
              >
                <a
                  className="project-link primary"
                  href="/documents/results/MarksheetSem1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sem 1
                </a>

                <a
                  className="project-link primary"
                  href="/documents/results/MarksheetSem2.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sem 2
                </a>

                <a
                  className="project-link primary"
                  href="/documents/results/MarksheetSem3.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sem 3
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Class 12 */}
        <div className="edu-card glass fade-up" style={{ marginTop: 24 }}>
          <div className="edu-icon-wrap">
            <Icons.GraduationCap />
          </div>

          <div>
            <div className="edu-degree">Higher Secondary Education (Class 12)</div>

            <div className="edu-uni">Matruchhaya Kanya Vidhyalay, Bhuj</div>

            <div className="edu-year">Science Stream (Physics, Chemistry & Mathematics) </div>

            <div style={{ marginTop: "8px" }}>
              Percentage: <strong>80.92%</strong>
            </div>
            <div style={{ marginTop: "12px" }}>
              <a
                className="project-link primary"
                href="/documents/results/Class12Marksheet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Result
              </a>
            </div>
          </div>
        </div>

        {/* Class 10 */}
        <div className="edu-card glass fade-up" style={{ marginTop: 24 }}>
          <div className="edu-icon-wrap">
            <Icons.GraduationCap />
          </div>

          <div>
            <div className="edu-degree">Secondary Education (Class 10)</div>

            <div className="edu-uni">Matruchhaya Kanya Vidhyalay, Bhuj</div>

            <div style={{ marginTop: "8px" }}>
              Percentage: <strong>83.67%</strong>
            </div>
            <div style={{ marginTop: "12px" }}>
              <a
                className="project-link primary"
                href="/documents/results/Class10Marksheet.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Result
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
