import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { blogs } from "../data/blogs";

function BlogCard({ blog }) {
  return (
    <article className="group">
      <a
        href={blog.href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 rounded-xl border border-ink-border/80 bg-surface-raised p-3 transition-colors duration-300 hover:border-line-hover sm:gap-5 sm:p-4"
      >
        <div className="relative size-24 shrink-0 overflow-hidden rounded-lg bg-surface-sunken sm:size-28">
          <img
            src={blog.image}
            alt={`${blog.title} cover`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
        </div>

        <div className="min-w-0 flex-1">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-ink-kicker">
            {blog.source}
          </p>
          <h2 className="mt-1 font-display text-base font-bold leading-snug tracking-[-0.01em] text-ink-title sm:text-lg">
            {blog.title}
          </h2>
          <p className="mt-1 line-clamp-2 text-sm leading-5 text-ink-muted">
            {blog.description}
          </p>
        </div>

        <ArrowUpRight
          size={16}
          strokeWidth={1.8}
          className="shrink-0 text-ink-muted transition-colors group-hover:text-ink-text"
        />
      </a>
    </article>
  );
}

export default function Blogs() {
  return (
    <div className="min-h-dvh bg-ink font-sans text-ink-text antialiased">
      <NavBar />
      <main className="min-h-dvh w-full">
        <section className="px-4 pb-20 pt-10 sm:px-8 sm:pt-12 lg:px-12">
          <div className="mx-auto w-full max-w-[900px]">
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
              <span>Blogs</span>
            </p>
            <h1 className="mt-[0.28em] font-display text-[clamp(1.75rem,4.5vw,3rem)] font-bold leading-[0.95] tracking-[-0.01em] text-ink-title">
              Blogs
            </h1>

            <div className="mt-10 flex flex-col gap-8">
              {blogs.map((blog) => (
                <BlogCard key={blog.title} blog={blog} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
