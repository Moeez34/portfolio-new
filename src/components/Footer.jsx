import { Check, Copy } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { profile } from "../data/profile";

const BURST_DIRECTIONS = [
  { x: 0, y: -34 },
  { x: 24, y: -24 },
  { x: 34, y: 0 },
  { x: 24, y: 24 },
  { x: 0, y: 34 },
  { x: -24, y: 24 },
  { x: -34, y: 0 },
  { x: -24, y: -24 },
];

function CopyBurst() {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 grid place-items-center"
    >
      <motion.span
        className="absolute inset-0 rounded-full border border-ink-blue"
        initial={{ opacity: 0.45, scale: 0.7 }}
        animate={{ opacity: 0, scale: 1.35 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      />
      {BURST_DIRECTIONS.map((direction, index) => (
        <motion.span
          key={index}
          className={`absolute size-1 rounded-full ${
            index % 2 === 0 ? "bg-ink-blue" : "bg-ink-text"
          }`}
          initial={{ opacity: 0, x: 0, y: 0, scale: 0.4 }}
          animate={{
            opacity: [0, 1, 0],
            x: direction.x,
            y: direction.y,
            scale: [0.4, 1, 0.3],
          }}
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
            delay: index * 0.012,
          }}
        />
      ))}
    </span>
  );
}

function GitHubIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function LinkedInIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
    </svg>
  );
}

function XIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z" />
    </svg>
  );
}

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Moeez34",
    Icon: GitHubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/moeez-ahmed2504/",
    Icon: LinkedInIcon,
  },
  {
    label: "X",
    href: "https://x.com/MoeezAhmed20312",
    Icon: XIcon,
  },
];

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-footer-ring focus-visible:ring-offset-2 focus-visible:ring-offset-footer";

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const [burst, setBurst] = useState(0);
  const timer = useRef(null);
  const reduceMotion = useReducedMotion();

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
    setBurst((value) => value + 1);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopied(false), 2000);
  };

  const backToTop = () => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    window.scrollTo({ top: 0, behavior: prefersReduced ? "auto" : "smooth" });
  };

  return (
    <footer className="relative w-full overflow-hidden border-t border-footer-line bg-footer">
      <div
        aria-hidden="true"
        className="footer-glow pointer-events-none absolute inset-x-0 top-0 h-40"
      />

      <div className="relative mx-auto w-full max-w-5xl px-4 pb-8 pt-12 sm:px-8 sm:pt-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between md:gap-12">
          <div className="max-w-xl">
            <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-bold leading-tight tracking-[-0.03em] text-ink-title">
              Let&rsquo;s build something
            </h2>

            <p className="mt-4 max-w-[44ch] text-balance text-[15px] leading-7 text-footer-text sm:text-base">
              Have a project or an idea? Email is the fastest way to reach me. I
              reply within a day.
            </p>

            <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={`mailto:${profile.email}`}
                className={`inline-flex min-w-0 items-center rounded-sm text-[15px] font-medium text-ink-text underline-offset-4 transition-colors hover:text-footer-icon-hover hover:underline ${focusRing}`}
              >
                <span className="break-words">{profile.email}</span>
              </a>

              <motion.button
                type="button"
                onClick={copyEmail}
                whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                animate={
                  !reduceMotion && copied
                    ? { scale: [1, 1.04, 1] }
                    : { scale: 1 }
                }
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className={`relative inline-flex w-full items-center justify-center gap-2 rounded-full bg-footer-cta px-5 py-2.5 text-sm font-semibold text-footer-cta-text transition-colors hover:bg-footer-cta-hover sm:w-auto sm:min-w-[152px] ${focusRing}`}
              >
                <AnimatePresence initial={false} mode="wait">
                  <motion.span
                    key={copied ? "check" : "copy"}
                    className="inline-flex"
                    initial={{ scale: 0.4, opacity: 0, rotate: copied ? -25 : 25 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    exit={{ scale: 0.4, opacity: 0 }}
                    transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {copied ? (
                      <Check size={16} strokeWidth={2.2} aria-hidden="true" />
                    ) : (
                      <Copy size={16} strokeWidth={1.8} aria-hidden="true" />
                    )}
                  </motion.span>
                </AnimatePresence>
                <span>{copied ? "Copied" : "Copy email"}</span>
                {!reduceMotion && copied && <CopyBurst key={burst} />}
              </motion.button>
            </div>

            <p className="mt-4 text-[13px] leading-5 text-footer-dim">
              Kolkata, India &middot; IST
            </p>

            <span aria-live="polite" className="sr-only">
              {copied ? "Email address copied to clipboard" : ""}
            </span>
          </div>

          <nav aria-label="Social links" className="md:pt-1">
            <ul className="flex items-center gap-1">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`group grid size-10 place-items-center rounded-full text-footer-icon transition-[color,background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-ink-text/5 hover:text-footer-icon-hover motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${focusRing}`}
                  >
                    <Icon className="size-5" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-footer-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] leading-5 text-footer-dim">
            &copy; {new Date().getFullYear()} Moeez Ahmed. All rights reserved.
          </p>

          <button
            type="button"
            onClick={backToTop}
            className={`inline-flex items-center gap-1.5 self-start rounded-sm text-[13px] leading-5 text-footer-dim transition-colors hover:text-footer-icon-hover sm:self-auto ${focusRing}`}
          >
            Back to top
            <span aria-hidden="true" className="text-sm leading-none">
              &uarr;
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
