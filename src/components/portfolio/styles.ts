// Global styles for the portfolio, injected via a <style> tag to keep the
// original design exactly as authored.
export const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Playfair+Display:ital,wght@0,700;1,600&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --c-bg: #f0f2ff;
    --c-bg2: #ede9ff;
    --c-surface: rgba(255,255,255,0.55);
    --c-surface2: rgba(255,255,255,0.35);
    --c-border: rgba(99,102,241,0.15);
    --c-text: #1a1a2e;
    --c-muted: #64748b;
    --c-accent: #6366f1;
    --c-accent2: #8b5cf6;
    --c-pink: #f472b6;
    --c-blue: #60a5fa;
    --font-display: 'Playfair Display', serif;
    --font-body: 'DM Sans', sans-serif;
    --blur: blur(16px);
    --shadow: 0 8px 30px rgba(99,102,241,0.10), 0 2px 8px rgba(99,102,241,0.06);
    --shadow-lg: 0 24px 70px rgba(99,102,241,0.18), 0 6px 18px rgba(99,102,241,0.08);
    --radius: 20px;
    --radius-sm: 12px;
  }

  html { scroll-behavior: smooth; }

  body {
    font-family: var(--font-body);
    background: var(--c-bg);
    color: var(--c-text);
    line-height: 1.6;
    overflow-x: hidden;
  }

  /* Accessible focus states */
  a:focus-visible, button:focus-visible, .form-field:focus-visible {
    outline: 2px solid var(--c-accent);
    outline-offset: 2px;
    border-radius: 8px;
  }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after { animation: none !important; transition: none !important; }
    .fade-up { opacity: 1; transform: none; }
  }

  /* Blobs */
  .blob {
    position: fixed;
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.35;
    pointer-events: none;
    z-index: 0;
  }
  .blob-1 { width: 500px; height: 500px; background: #c7d2fe; top: -100px; left: -150px; animation: blobFloat 8s ease-in-out infinite; }
  .blob-2 { width: 400px; height: 400px; background: #ddd6fe; top: 40vh; right: -100px; animation: blobFloat 10s ease-in-out infinite reverse; }
  .blob-3 { width: 350px; height: 350px; background: #fce7f3; bottom: 10vh; left: 20%; animation: blobFloat 12s ease-in-out infinite 2s; }

  @keyframes blobFloat {
    0%,100% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-30px) scale(1.05); }
  }

  /* Glassmorphism card */
  .glass {
    background: var(--c-surface);
    backdrop-filter: var(--blur);
    -webkit-backdrop-filter: var(--blur);
    border: 1px solid var(--c-border);
    border-radius: var(--radius);
    box-shadow: var(--shadow);
  }
  .glass-sm {
    background: var(--c-surface2);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid var(--c-border);
    border-radius: var(--radius-sm);
  }

  /* Navbar */
  .navbar {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    padding: 14px 0;
    background: rgba(240,242,255,0.7);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--c-border);
    transition: box-shadow 0.3s;
  }
  .navbar.scrolled { box-shadow: 0 4px 30px rgba(99,102,241,0.1); }
  .nav-inner { max-width: 1100px; margin: 0 auto; padding: 0 24px; display: flex; align-items: center; justify-content: space-between; }
  .nav-logo { display: flex; align-items: center; gap: 10px; text-decoration: none; }
  .nav-logo-badge {
    width: 38px; height: 38px;
    background: linear-gradient(135deg, var(--c-accent), var(--c-accent2));
    border-radius: 10px;
    display: flex; align-items: center; justify-content: center;
    color: white; font-weight: 700; font-size: 13px;
    box-shadow: 0 4px 14px rgba(99,102,241,0.35);
  }
  .nav-logo-name { font-weight: 600; font-size: 15px; color: var(--c-text); }
  .nav-links { display: flex; align-items: center; gap: 4px; list-style: none; }
  .nav-links a {
    padding: 6px 14px; border-radius: 30px;
    text-decoration: none; font-size: 14px; font-weight: 500; color: var(--c-muted);
    transition: all 0.2s; position: relative;
  }
  .nav-links a:hover, .nav-links a.active { color: var(--c-accent); }
  .nav-links a.active::after {
    content: ''; position: absolute; bottom: 2px; left: 50%; transform: translateX(-50%);
    width: 4px; height: 4px; border-radius: 50%; background: var(--c-accent);
  }
  .nav-resume-btn {
    display: flex; align-items: center; gap: 6px;
    padding: 8px 18px; border-radius: 30px;
    background: linear-gradient(135deg, var(--c-accent), var(--c-accent2));
    color: white; font-size: 13px; font-weight: 600;
    text-decoration: none; transition: all 0.2s;
    box-shadow: 0 4px 14px rgba(99,102,241,0.3);
  }
  .nav-resume-btn:hover { transform: translateY(-1px); box-shadow: 0 6px 20px rgba(99,102,241,0.4); }
  .nav-mobile-toggle { display: none; background: none; border: none; cursor: pointer; color: var(--c-text); }
  .nav-mobile-menu {
    display: none; flex-direction: column; gap: 4px;
    padding: 16px 24px 20px; border-top: 1px solid var(--c-border);
    background: rgba(240,242,255,0.95); backdrop-filter: blur(20px);
  }
  .nav-mobile-menu.open { display: flex; }
  .nav-mobile-menu a { padding: 10px 16px; border-radius: 10px; text-decoration: none; font-weight: 500; color: var(--c-muted); }
  .nav-mobile-menu a:hover { color: var(--c-accent); background: rgba(99,102,241,0.08); }

  @media (max-width: 768px) {
    .nav-links, .nav-resume-btn { display: none; }
    .nav-mobile-toggle { display: block; }
  }

  /* Sections */
  section { position: relative; z-index: 1; }
  .section-wrap { max-width: 1100px; margin: 0 auto; padding: 0 24px; }
  .section-tag {
    display: inline-flex; align-items: center; gap: 6px;
    padding: 5px 14px; border-radius: 30px;
    background: rgba(99,102,241,0.1);
    color: var(--c-accent); font-size: 12px; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase;
    margin-bottom: 14px;
  }
  .section-title {
    font-family: var(--font-display);
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 700; line-height: 1.2;
    color: var(--c-text);
    margin-bottom: 14px;
  }
  .section-sub { font-size: 16px; color: var(--c-muted); max-width: 520px; }

  /* Hero */
  #home { min-height: 100vh; display: flex; align-items: center; padding: 100px 0 60px; }
  .hero-grid { display: grid; grid-template-columns: 1fr 380px; gap: 48px; align-items: center; }
  .hero-badge {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 6px 16px; border-radius: 30px;
    background: var(--c-surface); border: 1px solid var(--c-border);
    backdrop-filter: blur(10px); font-size: 13px; font-weight: 500;
    color: var(--c-accent); margin-bottom: 24px;
    box-shadow: 0 2px 10px rgba(99,102,241,0.1);
  }
  .hero-badge span { opacity: 0.5; }
  .hero-title {
    font-family: var(--font-display);
    font-size: clamp(2.4rem, 5vw, 3.8rem);
    line-height: 1.15; font-weight: 700;
    color: var(--c-text); margin-bottom: 20px;
  }
  .hero-title em { font-style: italic; color: var(--c-accent); }
  .hero-title .grad {
    background: linear-gradient(135deg, var(--c-accent), var(--c-pink));
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  }
  .hero-sub { font-size: 17px; color: var(--c-muted); max-width: 480px; line-height: 1.7; margin-bottom: 36px; }
  .hero-btns { display: flex; flex-wrap: wrap; gap: 14px; margin-bottom: 36px; }
  .btn-primary {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 13px 28px; border-radius: 50px;
    background: linear-gradient(135deg, var(--c-accent), var(--c-accent2));
    color: white; font-size: 15px; font-weight: 600;
    text-decoration: none; border: none; cursor: pointer;
    box-shadow: 0 6px 24px rgba(99,102,241,0.35);
    transition: all 0.25s;
  }
  .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 10px 32px rgba(99,102,241,0.45); }
  .btn-ghost {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 12px 22px; border-radius: 50px;
    background: var(--c-surface); border: 1px solid var(--c-border);
    backdrop-filter: blur(10px); color: var(--c-text);
    font-size: 14px; font-weight: 500; text-decoration: none; cursor: pointer;
    transition: all 0.25s;
  }
  .btn-ghost:hover { background: rgba(255,255,255,0.8); transform: translateY(-1px); box-shadow: 0 4px 16px rgba(99,102,241,0.1); }
  .hero-card {
    border-radius: var(--radius);
    padding: 30px 24px;
    text-align: center;
    position: relative;
    overflow: hidden;
  }
  .hero-img-wrap {
    width: 220px; height: 280px;
    border-radius: 24px;
    margin: 0 auto 20px;
    padding: 4px;
    background: linear-gradient(135deg, var(--c-accent), var(--c-pink), var(--c-blue));
    box-shadow: 0 8px 32px rgba(99,102,241,0.25);
  }
  .hero-img-wrap img { width: 100%; height: 100%; border-radius: 24px; object-fit: cover; border: 3px solid white; object-position: center top; transform: scale(1.05) }
  .float-soft { animation: floatSoft 5s ease-in-out infinite; }
  @keyframes floatSoft { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-10px);} }
  .hero-card-name { font-family: var(--font-display); font-size: 22px; font-weight: 700; color: var(--c-text); margin-bottom: 4px; }
  .hero-card-role { font-size: 13px; font-weight: 600; color: var(--c-accent); margin-bottom: 12px; }
  .hero-card-tagline { font-size: 14px; color: var(--c-muted); line-height: 1.6; margin: 0 auto 20px; max-width: 280px; }
  .hero-card-actions { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; margin-bottom: 22px; }
  .hero-card-actions .btn-primary { padding: 10px 20px; font-size: 14px; }
  .hero-card-actions .btn-ghost { padding: 9px 18px; font-size: 13px; }
  .hero-quote {
    font-family: var(--font-display); font-size: 15px; font-style: italic;
    color: var(--c-muted); line-height: 1.5;
    padding-top: 18px; border-top: 1px solid var(--c-border);
  }
  .hero-quote-mark { color: var(--c-accent); font-size: 28px; line-height: 1; margin-bottom: 4px; display: block; }
  .sparkle-float { animation: sparkleFloat 3s ease-in-out infinite; }
  @keyframes sparkleFloat { 0%,100%{transform:translateY(0) rotate(0deg);} 50%{transform:translateY(-8px) rotate(15deg);} }

  /* About */
  #about { padding: 80px 0; }
  .about-card { padding: 44px; display: grid; grid-template-columns: 1fr auto; gap: 40px; align-items: start; }
  .about-text p { color: var(--c-muted); font-size: 16px; line-height: 1.8; margin-bottom: 14px; }
  .stat-cards { display: flex; flex-direction: column; gap: 14px; min-width: 160px; }
  .stat-card {
    padding: 18px 20px; text-align: center;
    border-radius: var(--radius-sm);
    background: rgba(255,255,255,0.7);
    border: 1px solid var(--c-border);
  }
  .stat-card .num {
    font-family: var(--font-display);
    font-size: 28px; font-weight: 700; color: var(--c-accent); display: block; line-height: 1;
  }
  .stat-card .label { font-size: 12px; color: var(--c-muted); margin-top: 4px; }
  .stat-card .icon { display: flex; justify-content: center; margin-bottom: 6px; color: var(--c-accent); }

  /* Highlights */
  .highlights-grid {
    display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-top: 22px;
  }
  .highlight-card {
    padding: 22px 16px; text-align: center;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }
  .highlight-card:hover { transform: translateY(-4px); box-shadow: var(--shadow); }
  .highlight-card .num {
    font-family: var(--font-display); font-size: 30px; font-weight: 700;
    color: var(--c-accent); display: block; line-height: 1;
  }
  .highlight-card .label { font-size: 12.5px; color: var(--c-muted); margin-top: 6px; }

  /* Featured project */
  #featured { padding: 80px 0; }
  .featured-card {
    padding: 28px; display: grid; grid-template-columns: 1.1fr 1fr; gap: 36px; align-items: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .featured-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); }
  .featured-shots { display: flex; flex-direction: column; gap: 16px; }
  .featured-shot { overflow: hidden; padding: 6px; transition: transform 0.3s ease, box-shadow 0.3s ease; }
  .featured-shot:hover { transform: translateY(-4px) scale(1.01); box-shadow: var(--shadow-lg); }
  .featured-shot img { width: 100%; display: block; border-radius: 8px; aspect-ratio: 16 / 8.25; object-fit: cover; }
  .featured-title { font-family: var(--font-display); font-weight: 700; font-size: 26px; color: var(--c-text); }
  .featured-tagline { font-size: 15px; font-weight: 600; color: var(--c-accent); margin-bottom: 12px; }
  .featured-highlights { list-style: none; display: flex; flex-direction: column; gap: 10px; margin-bottom: 18px; }
  .featured-highlights li { display: flex; align-items: flex-start; gap: 10px; font-size: 14px; color: var(--c-text); line-height: 1.5; }
  .featured-check {
    flex-shrink: 0; width: 20px; height: 20px; border-radius: 50%;
    background: rgba(99,102,241,0.12); color: var(--c-accent);
    display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 700;
  }

  /* Skills */
  #skills { padding: 80px 0; }
  .skills-grid { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 18px; margin-bottom: 36px }
  .skills-heading {
  margin-bottom: 18px;
  font-size: 20px;
  font-weight: 600;
}
  .skill-pill {
    display: flex; align-items: center; gap: 8px;
    padding: 10px 20px; border-radius: 50px;
    background: var(--c-surface); border: 1px solid var(--c-border);
    backdrop-filter: blur(10px);
    font-size: 14px; font-weight: 500; color: var(--c-text);
    transition: all 0.2s; cursor: default;
  }
  .skill-pill:hover {
    background: rgba(99,102,241,0.1); border-color: var(--c-accent);
    color: var(--c-accent); transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(99,102,241,0.15);
  }
  .skill-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--c-accent); }

  /* Projects */
  #projects { padding: 80px 0; }
  .projects-header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 36px; }
  .projects-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 24px; }
  .project-card { overflow: hidden; display: flex; flex-direction: column; transition: transform 0.25s ease, box-shadow 0.25s ease; }
  .project-card:hover { transform: translateY(-6px); box-shadow: var(--shadow-lg); }
  .project-img { height: 180px; width: 100%; object-fit: cover; display: block; }
  .project-body { padding: 22px; display: flex; flex-direction: column; flex: 1; }
  .project-title-row { display: flex; align-items: center; gap: 10px; margin-bottom: 8px; }
  .project-title { font-weight: 700; font-size: 17px; }
  .featured-badge {
    padding: 2px 10px; border-radius: 30px; font-size: 11px; font-weight: 700;
    background: linear-gradient(135deg, var(--c-accent), var(--c-pink));
    color: white;
  }
  .project-desc { font-size: 14px; color: var(--c-muted); line-height: 1.6; margin-bottom: 14px; }
  .project-desc p {
    margin-bottom: 16px;
    line-height: 1.8;
  }
  .project-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 16px; }
  .tag {
    padding: 3px 10px; border-radius: 30px; font-size: 12px; font-weight: 500;
    background: rgba(99,102,241,0.1); color: var(--c-accent);
    border: 1px solid rgba(99,102,241,0.2);
  }
  .project-links { display: flex; gap: 10px; margin-top: auto; }
  .project-link {
    display: inline-flex; align-items: center; gap: 5px;
    padding: 6px 14px; border-radius: 30px; font-size: 12px; font-weight: 600;
    text-decoration: none; transition: all 0.2s;
  }
  .project-link.primary {
    background: linear-gradient(135deg, var(--c-accent), var(--c-accent2));
    color: white; box-shadow: 0 2px 10px rgba(99,102,241,0.25);
  }
  .project-link.ghost { background: rgba(0,0,0,0.06); color: var(--c-text); }
  .project-link:hover { opacity: 0.85; transform: translateY(-1px); }

  /* Experience */
  #experience { padding: 80px 0; }
  .timeline { position: relative; padding-left: 28px; margin-top: 40px; }
  .timeline::before {
    content: ''; position: absolute; left: 7px; top: 0; bottom: 0;
    width: 2px; background: linear-gradient(to bottom, var(--c-accent), var(--c-pink));
    border-radius: 2px;
  }
  .timeline-item { position: relative; margin-bottom: 30px; }
  .timeline-dot {
    position: absolute; left: -25px; top: 20px;
    width: 14px; height: 14px; border-radius: 50%;
    background: linear-gradient(135deg, var(--c-accent), var(--c-accent2));
    border: 3px solid white; box-shadow: 0 0 0 2px rgba(99,102,241,0.3);
  }
  .timeline-card { padding: 22px 24px; }
  .timeline-role { font-weight: 700; font-size: 16px; margin-bottom: 3px; }
  .timeline-meta { font-size: 13px; color: var(--c-accent); font-weight: 500; margin-bottom: 10px; }
  .timeline-desc { font-size: 14px; color: var(--c-muted); line-height: 1.6; }

  /* Education */
  #education { padding: 80px 0; }
  .edu-card { padding: 36px; display: flex; gap: 24px; align-items: center; }
  .edu-icon-wrap {
    width: 60px; height: 60px; border-radius: 16px; flex-shrink: 0;
    background: linear-gradient(135deg, var(--c-accent), var(--c-accent2));
    display: flex; align-items: center; justify-content: center; color: white;
    box-shadow: 0 6px 20px rgba(99,102,241,0.3);
  }
  .edu-degree { font-weight: 700; font-size: 20px; margin-bottom: 6px; }
  .edu-uni { color: var(--c-accent); font-weight: 600; font-size: 15px; margin-bottom: 6px; }
  .edu-year { font-size: 13px; color: var(--c-muted); }

  /* Contact */
  #contact { padding: 80px 0; }
  .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; margin-top: 40px; }
  .contact-form-group { display: flex; flex-direction: column; gap: 16px; }
  label { font-size: 13px; font-weight: 600; color: var(--c-text); margin-bottom: 4px; display: block; }
  .form-field {
    padding: 13px 16px; border-radius: var(--radius-sm);
    background: rgba(255,255,255,0.7); border: 1px solid var(--c-border);
    font-family: var(--font-body); font-size: 15px; color: var(--c-text);
    outline: none; transition: border-color 0.2s, box-shadow 0.2s; width: 100%;
  }
  .form-field:focus { border-color: var(--c-accent); box-shadow: 0 0 0 3px rgba(99,102,241,0.1); }
  textarea.form-field { resize: vertical; min-height: 120px; }
  .contact-info { padding: 32px; display: flex; flex-direction: column; gap: 20px; }
  .contact-item { display: flex; align-items: center; gap: 14px; }
  a.contact-item { text-decoration: none; padding: 8px; margin: -8px; border-radius: 12px; transition: background 0.2s ease, transform 0.2s ease; }
  a.contact-item:hover { background: rgba(99,102,241,0.06); transform: translateX(2px); }
  .contact-item-icon {
    width: 44px; height: 44px; border-radius: 12px; flex-shrink: 0;
    background: rgba(99,102,241,0.1); color: var(--c-accent);
    display: flex; align-items: center; justify-content: center;
  }
  .contact-item-label { font-size: 12px; color: var(--c-muted); font-weight: 500; margin-bottom: 2px; }
  .contact-item-val { font-size: 14px; font-weight: 600; color: var(--c-text); }

  /* Footer */
  footer { padding: 32px 0; border-top: 1px solid var(--c-border); margin-top: 20px; position: relative; z-index: 1; }
  .footer-inner { max-width: 1100px; margin: 0 auto; padding: 0 24px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px; }
  .footer-copy { font-size: 13px; color: var(--c-muted); }
  .footer-social { display: flex; gap: 12px; }
  .social-btn {
    width: 38px; height: 38px; border-radius: 10px; display: flex; align-items: center; justify-content: center;
    background: var(--c-surface); border: 1px solid var(--c-border); color: var(--c-muted);
    text-decoration: none; transition: all 0.2s;
  }
  .social-btn:hover { color: var(--c-accent); border-color: var(--c-accent); background: rgba(99,102,241,0.08); transform: translateY(-2px); }

  /* Back to top */
  .back-top {
    position: fixed; bottom: 28px; right: 28px;
    width: 46px; height: 46px; border-radius: 50%;
    background: linear-gradient(135deg, var(--c-accent), var(--c-accent2));
    color: white; display: flex; align-items: center; justify-content: center;
    box-shadow: 0 6px 20px rgba(99,102,241,0.35); cursor: pointer; border: none;
    z-index: 99; transition: all 0.25s; opacity: 0; transform: translateY(20px);
  }
  .back-top.visible { opacity: 1; transform: translateY(0); }
  .back-top:hover { transform: translateY(-3px); box-shadow: 0 10px 28px rgba(99,102,241,0.45); }

  /* Fade-up animation */
  .fade-up { opacity: 0; transform: translateY(28px); transition: opacity 0.6s ease, transform 0.6s ease; }
  .fade-up.visible { opacity: 1; transform: translateY(0); }

  /* Responsive */
  @media (max-width: 900px) {
    .hero-grid { grid-template-columns: 1fr; }
    .hero-card { max-width: 340px; margin: 0 auto; }
    .about-card { grid-template-columns: 1fr; }
    .stat-cards { flex-direction: row; }
    .contact-grid { grid-template-columns: 1fr; }
    .featured-card { grid-template-columns: 1fr; gap: 24px; }
    .highlights-grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 600px) {
    .projects-header { flex-direction: column; align-items: flex-start; gap: 10px; }
    .stat-cards { flex-direction: column; }
    .featured-card { padding: 20px; }
    .featured-title { font-size: 22px; }
  }
`;
