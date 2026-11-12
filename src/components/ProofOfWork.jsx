import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects";

function ProjectCard({ project, index }) {
  return (
    <article className="group">
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block overflow-hidden rounded-2xl border border-ink-border/80 bg-[#0b0b0b] transition-colors duration-300 hover:border-[#4a4f54]"
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#050505]">
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
            className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            aria-hidden="true"
          />
        </div>
      </a>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-3">
            <h3 className="font-display text-2xl font-bold tracking-[-0.02em] text-ink-title sm:text-[2rem] sm:leading-[1.1]">
              {project.title}
            </h3>
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.title}`}
              className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-ink-border text-ink-muted transition-colors hover:border-[#4a4f54] hover:text-ink-text"
            >
              <ArrowUpRight size={18} strokeWidth={1.8} />
            </a>
          </div>
          <p className="mt-2 max-w-2xl text-[15px] leading-6 text-ink-muted sm:text-base">
            {project.description}
          </p>
        </div>

        <ul className="flex flex-wrap gap-2 sm:max-w-[220px] sm:justify-end">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-ink-border/80 px-3 py-1 text-xs font-medium tracking-wide text-ink-kicker"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function ProofOfWork() {
  return (
    <section id="about" className="w-full">
      <div className="px-4 pb-10 pt-14 sm:px-8 sm:pt-16 lg:px-12">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="flex flex-wrap items-baseline gap-x-[0.9em] font-mono text-xs font-semibold uppercase tracking-[0.1em] text-ink-kicker sm:text-sm">
              <span>Terminal</span>
              <span aria-hidden="true">-</span>
              <span>01</span>
            </p>

            <h2 className="mt-[0.28em] font-display text-[clamp(2rem,6vw,4.5rem)] font-bold leading-[0.95] tracking-[-0.01em] text-ink-title">
              Proof of work
            </h2>
          </div>

          <a
            href="https://github.com/Moeez34"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-flex shrink-0 items-center gap-2 rounded-full border border-[#2a2a2a] bg-[#f2f2ee] px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-white sm:px-5 sm:py-2.5"
          >
            <span>View all work</span>
            <span aria-hidden="true" className="text-base leading-none">+</span>
          </a>
        </div>
      </div>

      <div className="flex flex-col gap-14 px-4 pb-20 sm:gap-16 sm:px-8 lg:px-12">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
