import { Check, Copy } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { profile } from "../data/profile";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Moeez34",
    icon: "/icons/github.svg",
    invertOnLight: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/moeez-ahmed2504/",
    icon: "/icons/linkedin.svg",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/_._moeez_._/",
    icon: "/icons/instagram.svg",
  },
  {
    label: "Twitter",
    href: "https://x.com/MoeezAhmed20312",
    icon: "/icons/twitter.svg",
    invertOnLight: true,
  },
];

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const timer = useRef(null);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
    } catch {
      const field = document.createElement("textarea");
      field.value = profile.email;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.opacity = "0";
      document.body.appendChild(field);
      field.select();
      try {
        document.execCommand("copy");
      } catch {}
      document.body.removeChild(field);
    }

    setCopied(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="w-full">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-ink-border to-transparent" />
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 pb-10 pt-12 sm:px-8 md:flex-row md:items-end md:justify-between">
        <div className="flex flex-col items-start text-left">
          <h2 className="font-display text-xl font-bold tracking-[-0.02em] text-ink-title sm:text-2xl">
            Let&rsquo;s build something
          </h2>
          <p className="mt-2 max-w-md text-sm leading-6 text-ink-muted">
            Have a project in mind or just want to say hi? My inbox is always
            open.
          </p>

          <div className="mt-5 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <a
              href={`mailto:${profile.email}`}
              className="text-sm font-medium text-ink-text underline-offset-4 transition-colors hover:text-ink-muted hover:underline"
            >
              {profile.email}
            </a>

            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface-raised px-4 py-2 text-sm font-medium text-ink-text transition-colors hover:border-line-hover hover:bg-surface-hover"
            >
              {copied ? (
                <Check size={15} strokeWidth={2} aria-hidden="true" />
              ) : (
                <Copy size={15} strokeWidth={1.8} aria-hidden="true" />
              )}
              <span>{copied ? "Copied!" : "Copy email"}</span>
            </button>
          </div>

          <span aria-live="polite" className="sr-only">
            {copied ? "Email address copied to clipboard" : ""}
          </span>
        </div>

        <div className="flex flex-col items-start gap-4 md:items-end">
          <ul className="flex items-center gap-5 sm:gap-6">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="inline-flex items-center justify-center opacity-70 transition-opacity hover:opacity-100"
                >
                  <img
                    src={social.icon}
                    alt=""
                    width={20}
                    height={20}
                    className={`size-5 ${social.invertOnLight ? "theme-social-icon" : ""}`}
                    loading="lazy"
                    decoding="async"
                  />
                </a>
              </li>
            ))}
          </ul>

          <p className="text-center text-sm text-ink-muted md:text-right">
            © {new Date().getFullYear()} Moeez Ahmed. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
