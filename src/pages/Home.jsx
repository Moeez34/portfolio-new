import { ArrowUpRight } from "lucide-react";
import GitHubActivity from "../components/GitHubActivity";
import Layout from "../components/Layout";
import ProfileHeader from "../components/ProfileHeader";
import ProofOfWork from "../components/ProofOfWork";
import { container, focusRing } from "../lib/layout";

export default function Home() {
  return (
    <Layout title="Moeez Ahmed — AI Product & Full Stack Engineer">
      <ProfileHeader />
      <ProofOfWork />

      <section aria-labelledby="activity" className={`${container} pb-20`}>
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line pt-8">
          <h2
            id="activity"
            className="font-mono text-xs font-semibold uppercase tracking-[0.1em] text-ink-kicker sm:text-sm"
          >
            Activity
          </h2>

          <a
            href="https://github.com/Moeez34"
            target="_blank"
            rel="noopener noreferrer"
            className={`group inline-flex items-center gap-1.5 text-sm font-medium text-ink-muted transition-colors duration-200 hover:text-ink-text ${focusRing}`}
          >
            <span>@Moeez34</span>
            <ArrowUpRight
              size={15}
              strokeWidth={1.9}
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none"
            />
          </a>
        </div>

        <div className="mt-8 flex flex-col items-center">
          <GitHubActivity username="Moeez34" showMonths />

          <figure className="relative mt-10 w-full max-w-[720px] overflow-hidden rounded-3xl border border-ink-border/60 bg-ink-text/[0.02] p-7 text-left sm:p-9">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-4 top-1 select-none font-quote text-[7rem] italic leading-none text-ink-text/10 sm:left-6 sm:text-[8rem]"
            >
              &ldquo;
            </span>

            <blockquote className="relative text-pretty font-quote text-2xl italic leading-snug tracking-tight text-ink-title sm:text-3xl">
              Moeez is a great software engineer. I tried to hire them, but they
              said my codebase needed a rewrite.
            </blockquote>

            <figcaption className="mt-6 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-ink-muted">
              <span aria-hidden="true" className="h-[1px] w-4 bg-ink-muted" />
              <span>Elon Musk</span>
            </figcaption>
          </figure>
        </div>
      </section>
    </Layout>
  );
}
