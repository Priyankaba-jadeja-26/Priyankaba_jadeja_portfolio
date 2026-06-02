// ── Portfolio content ──────────────────────────────────────────────
// TODO: Replace the placeholder content below with real portfolio data.

export const skills = [
  "Python",
  "Java",
  "C",
  "C++",
  "SQL",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "Git",
  "GitHub",
  "Supabase",
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

// ── Featured project (centerpiece) ─────────────────────────────────
export interface FeaturedProject {
  title: string;
  tagline: string;
  desc: string;
  tags: string[];
  live: string;
  github: string;
  highlights: string[];
  // TODO: replace with real product screenshots (optimized, ~1200px wide).
  screenshots: { src: string; alt: string }[];
}

export const featuredProject: FeaturedProject = {
  title: "Aroha",
  tagline: "A platform for reflection, growth & mindful living.",
  desc: "Aroha helps people journal their thoughts, track personal progress and build mindful habits. It combines a calm, focused interface with secure cloud sync so reflection feels effortless and private.",
  tags: ["TypeScript", "React", "Supabase", "Tailwind CSS"],
  live: "#", // TODO: add live demo URL
  github: "#", // TODO: add GitHub repo URL
  highlights: [
    "Secure authentication & private cloud sync",
    "Habit tracking with progress insights",
    "Distraction-free journaling experience",
  ],
  screenshots: [
    // TODO: replace these placeholders with real Aroha screenshots.
    { src: "https://picsum.photos/seed/aroha-1/1200/750", alt: "Aroha dashboard screenshot" },
    {
      src: "https://picsum.photos/seed/aroha-2/1200/750",
      alt: "Aroha journaling screen screenshot",
    },
  ],
};

export const projects: Project[] = [
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

// ── Highlights / achievements ──────────────────────────────────────
// TODO: replace with your real achievements & highlights.
export const highlights = [
  { num: "3+", label: "Projects shipped" },
  { num: "6+", label: "Technologies" },
  { num: "2+", label: "Years writing code" },
  { num: "1", label: "Product in active development" },
];

export const navLinks = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Education",
  "Contact",
];
