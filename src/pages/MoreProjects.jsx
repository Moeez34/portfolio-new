import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";
import { moreProjects, projects } from "../data/projects";
import { container, focusRing } from "../lib/layout";

const allProjects = [...projects, ...moreProjects];

export default function MoreProjects() {
  return (
    <Layout title="Projects — Moeez Ahmed">
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

        <p className="flex flex-wrap items-baseline gap-x-[0.9em] font-mono text-xs font-semibold uppercase tracking-[0.1em] text-ink-kicker sm:text-sm">
          <span>Terminal</span>
          <span aria-hidden="true">-</span>
          <span>02</span>
        </p>

        <h1 className="mt-[0.28em] text-balance font-display text-[clamp(1.75rem,4.5vw,3rem)] font-bold leading-[0.95] tracking-[-0.01em] text-ink-title">
          Projects
        </h1>

        <div className="mt-10 flex flex-col gap-14 sm:gap-16">
          {allProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              headingLevel="h2"
            />
          ))}
        </div>
      </section>
    </Layout>
  );
}
