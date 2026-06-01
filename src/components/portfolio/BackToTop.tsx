import { Icons } from "./icons";

export function BackToTop({ visible }: { visible: boolean }) {
  return (
    <button
      className={`back-top${visible ? " visible" : ""}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
    >
      <Icons.ChevronUp />
    </button>
  );
}