import { Icons } from "./icons";
import { profile } from "./profile";

export function Footer() {
  // TODO: set links in profile.ts
  const socials = [
    { icon: <Icons.Github />, href: profile.github, label: "GitHub" },
    { icon: <Icons.Linkedin />, href: profile.linkedin, label: "LinkedIn" },
    { icon: <Icons.ExternalLink />, href: profile.portfolio, label: "Portfolio" },
    { icon: <Icons.Mail />, href: `mailto:${profile.email}`, label: "Email" },
  ];

  return (
    <footer>
      <div className="footer-inner">
        <p className="footer-copy">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <div className="footer-social">
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.href}
              className="social-btn"
              aria-label={s.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
