import { Icons } from "./icons";

export function Footer() {
  const socials = [
    { icon: <Icons.Github />, href: "#" }, // TODO: real GitHub URL
    { icon: <Icons.Linkedin />, href: "#" }, // TODO: real LinkedIn URL
    { icon: <Icons.Mail />, href: "#" }, // TODO: real mailto link
  ];

  return (
    <footer>
      <div className="footer-inner">
        <p className="footer-copy">© 2025 Priyankaba Jadeja. All rights reserved.</p>
        <div className="footer-social">
          {socials.map((s, i) => (
            <a key={i} href={s.href} className="social-btn">{s.icon}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}