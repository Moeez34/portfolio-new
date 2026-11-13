import { HugeiconsIcon } from "@hugeicons/react";
import { BloggerIcon } from "@hugeicons/core-free-icons";
import { FileText, Moon, Sun, UserRound } from "lucide-react";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [theme, setTheme] = useState("dark");

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
    if (meta) meta.setAttribute("content", initial === "light" ? "#ffffff" : "#000000");
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    const root = document.documentElement;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!reduceMotion) {
      root.classList.add("theme-anim");
      window.setTimeout(() => root.classList.remove("theme-anim"), 450);
    }

    setTheme(next);
    root.classList.toggle("light", next === "light");
    localStorage.setItem("theme", next);

    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", next === "light" ? "#ffffff" : "#000000");
  };

  const items = [
    {
      label: "Home",
      href: "/",
      icon: (
        <img
          src="/icons/home.png"
          alt=""
          className="theme-glyph size-5 opacity-90 transition-opacity group-hover:opacity-100"
          draggable="false"
        />
      ),
    },
    {
      label: "About",
      href: "/about",
      icon: (
        <UserRound
          className="size-5 text-icon transition-colors group-hover:text-icon-hover"
          strokeWidth={1.8}
        />
      ),
    },
    {
      label: "Resume",
      href: "/Syed_Moeez_Ahmed_Resume.pdf",
      icon: (
        <FileText
          className="size-5 text-icon transition-colors group-hover:text-icon-hover"
          strokeWidth={1.8}
        />
      ),
      external: true,
    },
    {
      label: "Research",
      href: "/Research-Paper-4.pdf",
      icon: (
        <img
          src="/icons/research.png"
          alt=""
          className="theme-glyph size-5 opacity-90 transition-opacity group-hover:opacity-100"
          draggable="false"
        />
      ),
      external: true,
    },
    {
      label: "Blogs",
      href: "/blogs",
      icon: (
        <span className="inline-flex text-icon transition-colors group-hover:text-icon-hover">
          <HugeiconsIcon
            icon={BloggerIcon}
            size={20}
            color="currentColor"
            strokeWidth={1.8}
          />
        </span>
      ),
    },
  ];

  return (
    <nav className="w-full bg-ink">
      <div className="flex w-full justify-center px-6 py-6 sm:py-8">
        <div className="w-full max-w-[420px] rounded-full border border-line-strong bg-surface-raised px-5 py-2.5 sm:px-6 sm:py-3">
          <ul className="flex items-center justify-between">
            {items.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  aria-label={item.label}
                  title={item.label}
                  className="group inline-flex items-center justify-center text-icon transition-colors hover:text-icon-hover"
                  {...(item.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {item.icon}
                </a>
              </li>
            ))}
            <li>
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
                aria-pressed={theme === "light"}
                title={theme === "light" ? "Dark mode" : "Light mode"}
                className="group inline-flex items-center justify-center text-icon transition-colors hover:text-icon-hover"
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
