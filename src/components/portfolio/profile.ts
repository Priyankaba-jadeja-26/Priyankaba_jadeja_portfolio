import profilePhoto from "../assets/profile.jpeg";
// ── Single source of truth for personal info & links ──────────────
// TODO: Replace every placeholder below with your real details.

export const profile = {
  name: "Priyankaba Jadeja",
  initials: "PJ",
  role: "Software Developer | MSc CA & IT Student",
  tagline:
    "I turn ideas into clean, reliable software — focused on building products that genuinely help people.",
  // TODO: replace with a real, optimized profile photo (square, ~600x600).
  photo: profilePhoto,
  email: "priyankaba2611@gmail.com",
  github: "https://github.com/Priyankaba-jadeja-26",
  linkedin: "https://www.linkedin.com/in/priyankaba-jadeja-41b768319",
  resume: "#", // TODO: link to your resume PDF
  portfolio: "https://priyankaba-jadeja-portfolio.vercel.app/",
};

export const socialLinks = [
  { label: "GitHub", href: profile.github, key: "github" },
  { label: "LinkedIn", href: profile.linkedin, key: "linkedin" },
  { label: "Resume", href: profile.resume, key: "resume" },
  { label: "Portfolio", href: profile.portfolio, key: "portfolio" },
] as const;
