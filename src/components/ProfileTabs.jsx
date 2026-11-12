import { useEffect, useState } from "react";
import { tabs } from "../data/profile";

export default function ProfileTabs() {
  const [active, setActive] = useState(tabs[0].id);

  useEffect(() => {
    const sections = tabs
      .map((tab) => document.getElementById(tab.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.1, 0.5, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  function scrollToSection(id) {
    const section = document.getElementById(id);
    if (!section) return;

    section.scrollIntoView({ behavior: "smooth", block: "start" });
    setActive(id);
  }

  return (
    <div className="sticky top-0 z-20 border-b border-ink-border bg-black/80 backdrop-blur-md">
      <div
        role="tablist"
        aria-label="Profile sections"
        className="flex items-stretch"
      >
        {tabs.map((tab) => {
          const selected = active === tab.id;

          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={tab.id}
              onClick={() => scrollToSection(tab.id)}
              className={`relative flex-1 px-2 py-4 text-[15px] leading-5 transition-colors hover:bg-white/5 ${
                selected
                  ? "font-bold text-ink-text"
                  : "font-medium text-ink-muted"
              }`}
            >
              {tab.label}
              {selected && (
                <span className="absolute bottom-0 left-1/2 h-1 w-14 -translate-x-1/2 rounded-full bg-ink-blue" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
