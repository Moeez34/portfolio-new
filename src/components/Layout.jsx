import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";

export default function Layout({ title, children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <div className="flex min-h-dvh flex-col bg-ink font-sans text-ink-text antialiased">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink-title focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink"
      >
        Skip to content
      </a>

      <NavBar />

      <main id="main" tabIndex={-1} className="w-full flex-1 outline-none">
        {children}
      </main>

      <Footer />
    </div>
  );
}
