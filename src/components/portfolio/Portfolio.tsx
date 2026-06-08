import { useEffect, useState } from "react";
import { globalStyles } from "./styles";
import { navLinks } from "./data";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { About } from "./About";
import { Featured } from "./Featured";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Experience } from "./Experience";
import { Education } from "./Education";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { BackToTop } from "./BackToTop";
import { Achievements } from "./Achievements";

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [showBack, setShowBack] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowBack(window.scrollY > 400);

      // Active section tracking
      const sections = navLinks.map((l) => l.toLowerCase());
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Intersection observer for fade-up animations
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".fade-up").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <style>{globalStyles}</style>

      {/* Background blobs */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      <Navbar
        scrolled={scrolled}
        mobileOpen={mobileOpen}
        activeSection={activeSection}
        setMobileOpen={setMobileOpen}
        scrollTo={scrollTo}
      />

      <Hero scrollTo={scrollTo} />
      <About scrollTo={scrollTo} />
      <Featured />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Achievements />
      <Contact />
      <Footer />

      <BackToTop visible={showBack} />
    </>
  );
}
