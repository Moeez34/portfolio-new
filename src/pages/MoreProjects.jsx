import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { moreProjects, projects } from "../data/projects";

function ProjectCard({ project }) {
  return (
    <article className="group">
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block overflow-hidden rounded-2xl border border-ink-border/80 bg-surface-raised transition-colors duration-300 hover:border-line-hover"
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-sunken">
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-surface-hover via-surface-raised to-surface-soft p-8">
              <p className="font-display text-2xl font-bold text-ink-title">
                {project.title}
              </p>
            </div>
          )}
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
              className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-ink-border text-ink-muted transition-colors hover:border-line-hover hover:text-ink-text"
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

const allProjects = [...projects, ...moreProjects];

export default function MoreProjects() {
  return (
    <div className="min-h-dvh bg-ink font-sans text-ink-text antialiased">
      <NavBar />
      <main className="min-h-dvh w-full">
        <section className="px-4 pb-20 pt-10 sm:px-8 sm:pt-12 lg:px-12">
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-ink-muted transition-colors hover:text-ink-text"
          >
            <ArrowLeft size={16} strokeWidth={1.8} />
            <span>Back to home</span>
          </Link>

          <p className="flex flex-wrap items-baseline gap-x-[0.9em] font-mono text-xs font-semibold uppercase tracking-[0.1em] text-ink-kicker sm:text-sm">
            <span>Terminal</span>
            <span aria-hidden="true">-</span>
            <span>02</span>
          </p>
          <h1 className="mt-[0.28em] font-display text-[clamp(1.75rem,4.5vw,3rem)] font-bold leading-[0.95] tracking-[-0.01em] text-ink-title">
            More projects
          </h1>

          <div className="mt-10 flex flex-col gap-14 sm:gap-16">
            {allProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
