import { HugeiconsIcon } from "@hugeicons/react";
import { BloggerIcon } from "@hugeicons/core-free-icons";
import { FileText, Moon, Sun, UserRound } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

const itemClass =
  "group inline-flex size-9 touch-manipulation items-center justify-center rounded-full text-icon transition-colors duration-200 hover:bg-ink-text/[0.06] hover:text-icon-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-surface-raised";

const activeClass = "bg-ink-text/[0.08] text-ink-text";

function Glyph({ src, isActive }) {
  return (
    <img
      src={src}
      alt=""
      draggable="false"
      className={`theme-glyph size-5 transition-opacity duration-200 ${
        isActive ? "opacity-100" : "opacity-60 group-hover:opacity-100"
      }`}
    />
  );
}

const navItems = [
  {
    label: "Home",
    to: "/",
    end: true,
    icon: (isActive) => <Glyph src="/icons/home.png" isActive={isActive} />,
  },
  {
    label: "About",
    to: "/about",
    icon: () => <UserRound className="size-5" strokeWidth={1.8} />,
  },
  {
    label: "Resume",
    href: "/Syed_Moeez_Ahmed_Resume.pdf",
    external: true,
    icon: () => <FileText className="size-5" strokeWidth={1.8} />,
  },
  {
    label: "Research",
    href: "/Research-Paper-4.pdf",
    external: true,
    icon: (isActive) => (
      <Glyph src="/icons/research.png" isActive={isActive} />
    ),
  },
  {
    label: "Blogs",
    to: "/blogs",
    icon: () => (
      <HugeiconsIcon
        icon={BloggerIcon}
        size={20}
        color="currentColor"
        strokeWidth={1.8}
      />
    ),
  },
];

export default function NavBar() {
  const [theme, setTheme] = useState("dark");
  const overlayRef = useRef(null);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const initial = saved
      ? saved === "light"
        ? "light"
        : "dark"
      : window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark";
    setTheme(initial);
    document.documentElement.classList.toggle("light", initial === "light");
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta)
      meta.setAttribute("content", initial === "light" ? "#ffffff" : "#000000");
  }, []);

  useEffect(
    () => () => {
      overlayRef.current?.remove();
      overlayRef.current = null;
    },
    [],
  );

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    const root = document.documentElement;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Suppress the per-element hover transitions for two frames so the flip
    // is a single paint instead of dozens of simultaneous color transitions.
    root.classList.add("theme-instant");
    const restoreTransitions = () => root.classList.remove("theme-instant");
    requestAnimationFrame(() => requestAnimationFrame(restoreTransitions));
    window.setTimeout(restoreTransitions, 500);

    // Swap instantly: one class flip repaints the page in a single frame,
    // with no per-element transitions and no snapshot cost.
    setTheme(next);
    root.classList.toggle("light", next === "light");
    localStorage.setItem("theme", next);

    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta)
      meta.setAttribute("content", next === "light" ? "#ffffff" : "#000000");

    if (reduceMotion) return;

    // Then fade one GPU-composited layer of the previous background over the
    // new theme. A single opacity animation stays smooth on low-end phones.
    overlayRef.current?.remove();
    const overlay = document.createElement("div");
    overlay.className = "theme-fade";
    overlay.setAttribute("aria-hidden", "true");
    overlay.style.cssText =
      "position:fixed;inset:0;z-index:9999;pointer-events:none;" +
      `background:${next === "light" ? "#000000" : "#ffffff"};` +
      "opacity:1;transition:opacity 200ms ease-out;will-change:opacity;";
    document.body.appendChild(overlay);
    overlayRef.current = overlay;

    // Commit the opaque frame, then fade. Painting the old background first
    // means the new theme is never flashed in for a frame.
    overlay.getBoundingClientRect();
    overlay.style.opacity = "0";

    const cleanup = () => {
      if (overlayRef.current === overlay) overlayRef.current = null;
      overlay.remove();
    };
    overlay.addEventListener("transitionend", cleanup, { once: true });
    window.setTimeout(cleanup, 320);
  };

  return (
    <nav aria-label="Primary" className="w-full bg-ink">
      <div className="flex w-full justify-center px-4 py-6 sm:py-8">
        <div className="w-full max-w-[420px] rounded-full border border-line-strong bg-surface-raised px-3 py-2 sm:px-4 sm:py-2.5">
          <ul className="flex items-center justify-between gap-1">
            {navItems.map((item) =>
              item.external ? (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    title={item.label}
                    className={itemClass}
                  >
                    {item.icon(false)}
                  </a>
                </li>
              ) : (
                <li key={item.label}>
                  <NavLink
                    to={item.to}
                    end={item.end}
                    aria-label={item.label}
                    title={item.label}
                    className={({ isActive }) =>
                      `${itemClass}${isActive ? ` ${activeClass}` : ""}`
                    }
                  >
                    {({ isActive }) => item.icon(isActive)}
                  </NavLink>
                </li>
              ),
            )}

            <li>
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={
                  theme === "light"
                    ? "Switch to dark theme"
                    : "Switch to light theme"
                }
                aria-pressed={theme === "light"}
                title={theme === "light" ? "Dark mode" : "Light mode"}
                className={itemClass}
              >
                {theme === "light" ? (
                  <Moon className="size-5" strokeWidth={1.8} />
                ) : (
                  <Sun className="size-5" strokeWidth={1.8} />
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
