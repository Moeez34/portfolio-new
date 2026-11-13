import { Check, Copy } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { profile } from "../data/profile";
import { container } from "../lib/layout";
import { socialLinks } from "./icons";

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

      <div className={`relative ${container} pb-8 pt-12 sm:pt-16`}>
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
              {socialLinks.map(({ label, href, Icon }) => (
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
