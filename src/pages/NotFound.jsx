import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { container, focusRing } from "../lib/layout";

export default function NotFound() {
  return (
    <Layout title="Page not found — Moeez Ahmed">
      <section className={`${container} pb-24 pt-8 sm:pt-10`}>
        <p className="flex flex-wrap items-baseline gap-x-[0.9em] font-mono text-xs font-semibold uppercase tracking-[0.1em] text-ink-kicker sm:text-sm">
          <span>Terminal</span>
          <span aria-hidden="true">-</span>
          <span>404</span>
        </p>

        <h1 className="mt-[0.28em] text-balance font-display text-[clamp(1.75rem,4.5vw,3rem)] font-bold leading-[0.95] tracking-[-0.01em] text-ink-title">
          Page not found
        </h1>

        <p className="mt-4 max-w-[46ch] text-[15px] leading-7 text-ink-muted sm:text-base">
          The page you were looking for does not exist or has moved.
        </p>

        <Link
          to="/"
          className={`group mt-8 inline-flex items-center gap-2 rounded-full bg-ink-title px-5 py-2.5 text-sm font-semibold text-ink transition-opacity duration-200 hover:opacity-90 ${focusRing}`}
        >
          <ArrowLeft
            size={16}
            strokeWidth={2}
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:-translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none"
          />
          <span>Back to home</span>
        </Link>
      </section>
    </Layout>
  );
}
