import headingScreen from "../assets/Heading_Screen.png";
import EyeSpectacles from "../assets/Eye_Spectacles_Reference.png";
import PortfolioImage from "../assets/Portfolio_home.png";
import shadesOfPriyanka from "../assets/Shades_of_Priyanka.png";
import tasksScreen from "../assets/Tasks_and_progress_screen.png";
import reflectionScreen from "../assets/Reflection_Screen.png";

export const languages = ["JavaScript", "TypeScript", "Python", "Java", "C", "C++", "SQL"];

export const technologies = ["HTML", "CSS", "React", "WordPress", "Vite", "Firebase", "Supabase"];

export const tools = [
  "VS Code",
  "Git",
  "GitHub",
  "Vercel",
  "Netlify",
  "Lovable",
  "RStudio",
  "Canva",
  "ChatGPT",
  "Claude",
];

export interface Project {
  title: string;
  badge?: string;
  desc: string;
  tags: string[];
  live: string;
  github: string;
  image: string;
  primaryButton?: string;
  secondaryButton?: string;
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
  desc: `Aroha is a personal growth and reflection platform designed to help users build better habits, stay organized, and develop greater self-awareness through consistent daily practice. The application combines task management, journaling, mood reflection, and progress tracking into a single distraction-free experience focused on long-term personal development.


  Users can manage daily tasks, record reflections, monitor their growth journey, and gain meaningful insights into their habits and productivity. 
  


  Built with React, TypeScript, and Supabase, Aroha demonstrates my skills in frontend development, authentication, database integration, responsive design, and user-centered product development.`,
  tags: ["TypeScript", "React", "Supabase", "Tailwind CSS"],
  live: "https://aroha-daily-growth-ui.vercel.app",
  github: "https://github.com/Priyankaba-jadeja-26/aroha-daily-growth-ui",
  highlights: [
    "Secure authentication & private cloud sync",
    "Daily reflection & mood tracking",
    "Progress analytics and insights",
    "Habit & task management system",
    "Responsive modern UI",
    "Built with React, TypeScript & Supabase",
  ],
  screenshots: [
    {
      src: headingScreen,
      alt: "Aroha dashboard screenshot",
    },
    {
      src: tasksScreen,
      alt: "Aroha tasks screen",
    },
    {
      src: reflectionScreen,
      alt: "Aroha reflection screen",
    },
  ],
};

export const projects: Project[] = [
  {
    title: "Eye Spectacles Project",
    desc: "AI-based smart spectacles concept selected under SSIP. The project focuses on eye movement tracking, blink-rate analysis, fatigue detection, and stress monitoring through wearable technology. Main objective of the project is to show user how their screen time is affecting their mental well-being. Currently in the research stage.",
    tags: ["AI/ML", "Research", "Healthcare"],
    live: "/documents/PriyankabaSmartSpectaclesSSIP.pptx", // TODO: add live demo URL
    github: "/documents/SSIP-ProjectApproved.PDF", // TODO: add GitHub repo URL
    image: EyeSpectacles,
    primaryButton: "View Proposal",
    secondaryButton: "Approval Letter",
  },
  {
    title: "Personal Diary Website",
    desc: "A personal storytelling website developed during my first year of college using HTML, CSS, and JavaScript. The platform showcases my journey through technology, achievements, travels, photographs, and personal experiences while helping me strengthen my frontend development and UI design skills.",
    tags: ["HTML", "CSS", "JavaScript"],

    live: "https://priyankaba-jadeja-26.github.io/Personal-Diary/", // TODO: add live demo URL
    github: "https://github.com/Priyankaba-jadeja-26/Personal-Diary", // TODO: add GitHub repo URL
    image: shadesOfPriyanka,
    primaryButton: "Live Demo",
    secondaryButton: "GitHub",
  },
  {
    title: "Portfolio Website",
    desc: "A modern portfolio website built with React, TypeScript, and Vite to showcase my projects, skills, experience, and development journey. Designed with a clean UI, responsive layout, and interactive sections to create a professional online presence.",
    tags: ["React", "TypeScript", "Vercel", "Vite"],
    live: "https://your-vercel-url.vercel.app",
    github: "https://github.com/Priyankaba-jadeja-26/your-portfolio-repo",
    image: PortfolioImage,
    primaryButton: "Live Demo",
    secondaryButton: "GitHub",
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
    role: "Part-Time Teacher",
    org: "IRead Classes, Bhuj",
    period: "Apr 2025 – Present",
    desc: "Teaching English and Mathematics to school students while helping them strengthen problem-solving, communication, and academic skills.",
  },

  {
    role: "Freelance Content Writer & Scriptwriter",
    org: "Independent / Freelance",
    period: "2024 – Present",
    desc: "Created scripts for educational and spiritual YouTube content. Assisted with content planning, audience engagement strategies, and voice-over production while improving storytelling and communication skills.",
  },

  {
    role: "Event Host & Public Speaker",
    org: "College & Academic Events",
    period: "2025 – Present",
    desc: "Hosted Freshers Fiesta 2025 and anchored a state-level seminar on AI Tools in Research. Developed confidence in public speaking, audience engagement, stage management, and professional communication.",
  },

  {
    role: "Brand Identity Designer & Social Media Consultant",
    org: "Confidential Client Project",
    period: "2024",
    desc: "Built the complete visual identity for a client-owned Instagram brand, including logo design, color systems, branding guidelines, and content direction. Project details are available upon request due to confidentiality requirements.",
  },
];

// ── Highlights / achievements ──────────────────────────────────────
// TODO: replace with your real achievements & highlights.
export const highlights = [
  { num: "12+", label: "Stage Appearances" },
  { num: "5+", label: "Content Projects" },
  { num: "2+", label: "Events Hosted" },
  { num: "4+", label: "Domains Explored" },
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
