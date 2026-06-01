// ── Portfolio content ──────────────────────────────────────────────
// TODO: Replace the placeholder content below with real portfolio data.

export const skills = [
  "Python", "Java", "C", "C++", "SQL", "JavaScript",
  "TypeScript", "HTML", "CSS", "Git", "GitHub", "Supabase",
];

export interface Project {
  title: string;
  badge?: string;
  desc: string;
  tags: string[];
  live: string;
  github: string;
  image: string;
}

export const projects: Project[] = [
  {
    title: "Aroha",
    badge: "Featured",
    desc: "A reflection and growth platform that helps users journal their thoughts, track progress and build mindfulness habits.",
    tags: ["TypeScript", "Supabase", "Tailwind CSS"],
    live: "#", // TODO: add live demo URL
    github: "#", // TODO: add GitHub repo URL
    image: "https://picsum.photos/seed/aroha/800/600",
  },
  {
    title: "Eye Spectacles Project",
    desc: "AI-based smart spectacles concept for eye health monitoring.",
    tags: ["Python", "AI/ML"],
    live: "#", // TODO: add live demo URL
    github: "#", // TODO: add GitHub repo URL
    image: "https://picsum.photos/seed/eye/800/600",
  },
  {
    title: "Personal Diary Website",
    desc: "A personal website to share experiences, thoughts and creative work.",
    tags: ["React", "CSS"],
    live: "#", // TODO: add live demo URL
    github: "#", // TODO: add GitHub repo URL
    image: "https://picsum.photos/seed/diary/800/600",
  },
];

export interface Experience {
  role: string;
  org: string;
  period: string;
  desc: string;
}

export const experiences: Experience[] = [
  {
    role: "Freelance Content Writer",
    org: "Self-employed",
    period: "2023 – Present",
    desc: "Wrote articles and blogs for clients, focused on research and engaging content.",
  },
  {
    role: "Content Creator – Jeevan Darshan",
    org: "Jeevan Darshan",
    period: "2022 – 2023",
    desc: "Created educational and motivational content, scripting and voice work.",
  },
];

export const navLinks = [
  "Home", "About", "Skills", "Projects", "Experience", "Education", "Contact",
];