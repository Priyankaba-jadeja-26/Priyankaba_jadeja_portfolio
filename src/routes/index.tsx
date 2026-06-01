import { createFileRoute } from "@tanstack/react-router";
import Portfolio from "@/components/portfolio/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Priyankaba Jadeja — Software Developer Portfolio" },
      { name: "description", content: "Portfolio of Priyankaba Jadeja, an MSc CA & IT student and software developer building digital experiences and real-world solutions." },
      { property: "og:title", content: "Priyankaba Jadeja — Software Developer Portfolio" },
      { property: "og:description", content: "Portfolio of Priyankaba Jadeja, an MSc CA & IT student and software developer building digital experiences and real-world solutions." },
    ],
  }),
  component: Index,
});

function Index() {
  return <Portfolio />;
}
