import { Icons } from "./icons";
import { navLinks } from "./data";
import { profile } from "./profile";

interface NavbarProps {
  scrolled: boolean;
  mobileOpen: boolean;
  activeSection: string;
  setMobileOpen: (open: boolean) => void;
  scrollTo: (id: string) => void;
}

export function Navbar({ scrolled, mobileOpen, activeSection, setMobileOpen, scrollTo }: NavbarProps) {
  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div className="nav-inner">
        <a className="nav-logo" href="#home" onClick={(e) => { e.preventDefault(); scrollTo("home"); }}>
          <div className="nav-logo-badge">PJ</div>
          <span className="nav-logo-name">Priyankaba Jadeja</span>
        </a>
        <ul className="nav-links">
          {navLinks.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className={activeSection === l.toLowerCase() ? "active" : ""}
                onClick={(e) => { e.preventDefault(); scrollTo(l.toLowerCase()); }}
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
        {/* TODO: set profile.resume in profile.ts */}
        <a className="nav-resume-btn" href={profile.resume} target="_blank" rel="noopener noreferrer">
          <Icons.Download /> Resume
        </a>
        <button className="nav-mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <Icons.X /> : <Icons.Menu />}
        </button>
      </div>
      <div className={`nav-mobile-menu${mobileOpen ? " open" : ""}`}>
        {navLinks.map((l) => (
          <a key={l} href={`#${l.toLowerCase()}`} onClick={(e) => { e.preventDefault(); scrollTo(l.toLowerCase()); }}>
            {l}
          </a>
        ))}
        {/* TODO: set profile.resume in profile.ts */}
        <a href={profile.resume} target="_blank" rel="noopener noreferrer" style={{ marginTop: 8, color: "var(--c-accent)", fontWeight: 600 }}>
          <Icons.Download /> &nbsp;Download Resume
        </a>
      </div>
    </nav>
  );
}