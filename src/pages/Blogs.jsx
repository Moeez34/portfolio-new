import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { blogs } from "../data/blogs";
import { container, focusRing } from "../lib/layout";

function BlogCard({ blog }) {
  return (
    <article>
      <a
        href={blog.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`group flex items-center gap-4 rounded-2xl border border-ink-border/80 bg-surface-raised p-3 transition-colors duration-300 hover:border-line-hover sm:gap-5 sm:p-4 ${focusRing}`}
      >
        <div className="relative size-24 shrink-0 overflow-hidden rounded-xl bg-surface-sunken sm:size-28">
          <img
            src={blog.image}
            alt={`${blog.title} cover`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transform-none motion-reduce:transition-none"
          />
        </div>

        <div className="min-w-0 flex-1">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-ink-kicker">
            {blog.source}
          </p>
          <h2 className="mt-1 text-pretty font-display text-base font-bold leading-snug tracking-[-0.01em] text-ink-title sm:text-lg">
            {blog.title}
          </h2>
          <p className="mt-1 line-clamp-2 text-sm leading-5 text-ink-muted">
            {blog.description}
          </p>
        </div>

        <ArrowUpRight
          size={16}
          strokeWidth={1.8}
          aria-hidden="true"
          className="shrink-0 text-ink-muted transition-[color,transform] duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink-text motion-reduce:transform-none motion-reduce:transition-none"
        />
      </a>
    </article>
  );
}

export default function Blogs() {
  return (
    <Layout title="Blogs — Moeez Ahmed">
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
          <span>03</span>
        </p>

        <h1 className="mt-[0.28em] text-balance font-display text-[clamp(1.75rem,4.5vw,3rem)] font-bold leading-[0.95] tracking-[-0.01em] text-ink-title">
          Blogs
        </h1>

        <div className="mt-10 flex flex-col gap-6">
          {blogs.map((blog) => (
            <BlogCard key={blog.title} blog={blog} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
