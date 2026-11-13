import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { container, focusRing } from "../lib/layout";

export default function About() {
  return (
    <Layout title="About — Moeez Ahmed">
      <section className={`${container} pb-24 pt-8 sm:pt-10`}>
        <Link
          to="/"
          className={`group mb-10 inline-flex items-center gap-2 text-sm font-medium text-ink-muted transition-colors duration-200 hover:text-ink-text ${focusRing}`}
        >
          <ArrowLeft
            size={16}
            strokeWidth={1.8}
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:-translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none"
          />
          <span>Back to home</span>
        </Link>

        <div className="max-w-[42rem]">
          <p className="flex flex-wrap items-baseline gap-x-[0.9em] font-mono text-xs font-semibold uppercase tracking-[0.1em] text-ink-kicker sm:text-sm">
            <span>Terminal</span>
            <span aria-hidden="true">-</span>
            <span>About</span>
          </p>

          <div className="mt-8 space-y-7">
            <h1 className="text-balance font-gitlab text-[1.7rem] font-bold leading-[1.25] tracking-[-0.02em] text-ink-title sm:text-[2.1rem]">
              Hey, Moeez Ahmed this side an AI product &amp; full stack engineer.
            </h1>

            <p className="font-jetbrains text-base font-medium leading-8 text-ink-muted sm:text-[17px]">
              An engineer who loves to tempering with the code, I love breaking
              and reverse engineering things &amp; love to build cool things.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
