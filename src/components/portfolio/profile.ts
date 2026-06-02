// ── Single source of truth for personal info & links ──────────────
// TODO: Replace every placeholder below with your real details.

export const profile = {
  name: "Priyankaba Jadeja",
  initials: "PJ",
  role: "Software Developer | MSc CA & IT Student",
  tagline: "I turn ideas into clean, reliable software — focused on building products that genuinely help people.",
  // TODO: replace with a real, optimized profile photo (square, ~600x600).
  photo: "https://images.unsplash.com/photo-1494790108755-2616b332b70b?w=600&q=80&auto=format&fit=crop",
  // TODO: replace with your real links / contact details.
  email: "priyankaba@email.com",
  github: "#", // TODO: https://github.com/your-handle
  linkedin: "#", // TODO: https://linkedin.com/in/your-handle
  resume: "#", // TODO: link to your resume PDF
  portfolio: "#", // TODO: link to live portfolio / personal site
};

export const socialLinks = [
  { label: "GitHub", href: profile.github, key: "github" },
  { label: "LinkedIn", href: profile.linkedin, key: "linkedin" },
  { label: "Resume", href: profile.resume, key: "resume" },
  { label: "Portfolio", href: profile.portfolio, key: "portfolio" },
] as const;