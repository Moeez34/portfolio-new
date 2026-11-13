import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({
  project,
  index = 0,
  headingLevel: Heading = "h3",
}) {
  return (
    <article className="group relative">
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-ink-border/80 bg-surface-raised transition-colors duration-300 group-hover:border-line-hover">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
            className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02] motion-reduce:transform-none motion-reduce:transition-none"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-surface-hover via-surface-raised to-surface-soft p-8">
            <p className="font-display text-2xl font-bold text-ink-title">
              {project.title}
            </p>
          </div>
        )}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 motion-reduce:transition-none"
        />
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-3">
            <Heading className="font-display text-2xl font-bold tracking-[-0.02em] text-ink-title sm:text-[2rem] sm:leading-[1.1]">
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm after:absolute after:inset-0 after:rounded-2xl focus-visible:outline-none focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:outline-offset-4 focus-visible:after:outline-focus"
              >
                {project.title}
              </a>
            </Heading>

            <span
              aria-hidden="true"
              className="grid size-9 shrink-0 place-items-center rounded-full border border-ink-border text-ink-muted transition-colors duration-200 group-hover:border-line-hover group-hover:text-ink-text motion-reduce:transition-none"
            >
              <ArrowUpRight
                size={18}
                strokeWidth={1.8}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none"
              />
            </span>
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
