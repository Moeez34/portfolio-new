import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { container, focusRing } from "../lib/layout";
import ProjectCard from "./ProjectCard";

export default function ProofOfWork() {
  return (
    <section aria-labelledby="proof-of-work" className="w-full">
      <div className={`${container} pb-10 pt-12 sm:pt-14`}>
        <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-4">
          <div>
            <p className="flex flex-wrap items-baseline gap-x-[0.9em] font-mono text-xs font-semibold uppercase tracking-[0.1em] text-ink-kicker sm:text-sm">
              <span>Terminal</span>
              <span aria-hidden="true">-</span>
              <span>01</span>
            </p>

            <h2
              id="proof-of-work"
              className="mt-[0.28em] text-balance font-display text-[clamp(1.75rem,4.5vw,3rem)] font-bold leading-[0.95] tracking-[-0.01em] text-ink-title"
            >
              Proof of work
            </h2>
          </div>

          <Link
            to="/projects"
            className={`group mb-1 inline-flex shrink-0 items-center gap-2 rounded-full bg-ink-title px-4 py-2 text-sm font-semibold text-ink transition-opacity duration-200 hover:opacity-90 sm:mb-2 sm:px-5 sm:py-2.5 ${focusRing}`}
          >
            <span>View more projects</span>
            <ArrowUpRight
              size={16}
              strokeWidth={2}
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none"
            />
          </Link>
        </div>
      </div>

      <div
        className={`${container} flex flex-col gap-14 pb-16 sm:gap-16 sm:pb-20`}
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
