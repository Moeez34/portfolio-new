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
        className="flex flex-col overflow-hidden rounded-2xl border border-ink-border/80 bg-[#0b0b0b] transition-colors duration-300 hover:border-[#4a4f54] sm:flex-row"
      >
        <div className="relative flex w-full shrink-0 items-center justify-center overflow-hidden bg-[#050505] p-3 sm:w-[42%] sm:min-h-[380px]">
          <img
            src={blog.image}
            alt={`${blog.title} cover`}
            loading="lazy"
            decoding="async"
            className="h-auto max-h-[440px] w-auto max-w-full rounded-lg object-contain transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          />
        </div>

        <div className="flex min-w-0 flex-1 flex-col justify-between gap-6 p-6 sm:p-8">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.1em] text-ink-kicker">
              {blog.source}
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold leading-tight tracking-[-0.02em] text-ink-title sm:text-[2rem]">
              {blog.title}
            </h2>
            <p className="mt-3 max-w-xl text-[15px] leading-6 text-ink-muted sm:text-base">
              {blog.description}
            </p>
          </div>

          <span className="inline-flex items-center gap-2 text-sm font-medium text-ink-text">
            <span>Read article</span>
            <ArrowUpRight size={16} strokeWidth={1.8} />
          </span>
        </div>
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
