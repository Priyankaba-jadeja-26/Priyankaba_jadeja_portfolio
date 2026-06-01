import { Icons } from "./icons";

export function Education() {
  return (
    <section id="education">
      <div className="section-wrap">
        <div className="section-tag fade-up"><span>✦</span> Academia</div>
        <h2 className="section-title fade-up">Education</h2>
        <div className="edu-card glass fade-up" style={{ marginTop: 36 }}>
          <div className="edu-icon-wrap">
            <Icons.GraduationCap />
          </div>
          <div>
            <div className="edu-degree">MSc (CA &amp; IT)</div>
            <div className="edu-uni">Krantiguru Shyamji Krishna Verma Kutch University</div>
            <div className="edu-year">Expected Graduation: 2029</div>
          </div>
        </div>
      </div>
    </section>
  );
}