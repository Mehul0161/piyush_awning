"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, HEADER_NAV_LINKS, PRODUCT_CATEGORIES } from "@/lib/constants";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileCollectionsOpen, setMobileCollectionsOpen] = useState(false);
  const [isCollectionsHovered, setIsCollectionsHovered] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
      ? "bg-white/90 backdrop-blur-md py-4 shadow-lg border-b border-sage-200/50"
      : "bg-transparent py-6 border-b border-transparent"
      }`}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3 transition-opacity hover:opacity-90"
        >
          <span className={`font-serif text-2xl tracking-tight font-bold lg:text-3xl transition-colors ${scrolled ? "text-charcoal" : "text-white"
            }`}>
            PIYUSH<span className="text-accent italic ml-1">AWNING</span>
          </span>
        </Link>

        <nav className="hidden md:flex md:items-center md:gap-10">
          {HEADER_NAV_LINKS.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href.split("?")[0]);
            const hasDropdown = link.href === "/products";

            return (
              <div
                key={link.href}
                className="group/nav relative h-full flex items-center"
                onMouseEnter={() => hasDropdown && setIsCollectionsHovered(true)}
                onMouseLeave={() => hasDropdown && setIsCollectionsHovered(false)}
              >
                <Link
                  href={link.href}
                  className={`group relative text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-300 ${isActive
                    ? "text-accent"
                    : scrolled ? "text-sage-500 hover:text-charcoal" : "text-white/70 hover:text-white"
                    }`}
                >
                  {link.label}
                  <motion.span
                    className="absolute -bottom-2 left-0 h-[2px] bg-accent"
                    initial={false}
                    animate={{ width: isActive ? "100%" : "0%" }}
                    transition={{ duration: 0.5 }}
                  />
                </Link>

                {hasDropdown && (
                  <AnimatePresence>
                    {isCollectionsHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, visibility: "hidden" }}
                        animate={{ opacity: 1, y: 0, visibility: "visible" }}
                        exit={{ opacity: 0, y: 10, transition: { delay: 0 } }}
                        transition={{ duration: 0.3, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                      >
                        <div className="w-56 overflow-hidden rounded-2xl bg-white border border-stone-100 shadow-2xl backdrop-blur-xl p-2">
                          {PRODUCT_CATEGORIES.map((cat) => (
                            <Link
                              key={cat.slug}
                              href={`/products?category=${cat.slug}#filter-section`}
                              className="block rounded-xl px-4 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-sage-600 hover:bg-stone-50 hover:text-accent transition-all"
                              onClick={() => setIsCollectionsHovered(false)}
                            >
                              {cat.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            );
          })}
          <Link
            href="/contact"
            className={`flex items-center justify-center rounded-full px-8 py-3 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 hover:scale-105 active:scale-95 ${scrolled
              ? "bg-accent text-white shadow-lg shadow-accent/20 hover:bg-accent-hover"
              : "bg-white text-charcoal shadow-xl shadow-white/10"
              }`}
          >
            Request Quote
          </Link>
        </nav>

        <button
          type="button"
          className="flex flex-col justify-center gap-1.5 rounded-lg p-2.5 md:hidden hover:bg-sage-100/60 transition-colors"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span
            className={`block h-0.5 w-6 rounded transition-all duration-200 ${mobileOpen ? "translate-y-2 rotate-45" : ""} ${scrolled ? "bg-sage-700" : "bg-white"}`}
          />
          <span
            className={`block h-0.5 w-6 rounded transition-opacity duration-200 ${mobileOpen ? "opacity-0" : ""} ${scrolled ? "bg-sage-700" : "bg-white"}`}
          />
          <span
            className={`block h-0.5 w-6 rounded transition-all duration-200 ${mobileOpen ? "-translate-y-2 -rotate-45" : ""} ${scrolled ? "bg-sage-700" : "bg-white"}`}
          />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-sage-200 bg-white md:hidden"
          >
            <nav className="flex flex-col gap-0.5 px-4 py-4">
              {HEADER_NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                const isCollections = link.href === "/products";

                if (isCollections) {
                  return (
                    <div key={link.href} className="flex flex-col">
                      <button
                        onClick={() => setMobileCollectionsOpen(!mobileCollectionsOpen)}
                        className={`flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${isActive || mobileCollectionsOpen ? "bg-sage-100 text-accent" : "text-sage-700 hover:bg-sage-100"}`}
                      >
                        {link.label}
                        <motion.svg
                          animate={{ rotate: mobileCollectionsOpen ? 180 : 0 }}
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </motion.svg>
                      </button>
                      <AnimatePresence>
                        {mobileCollectionsOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden flex flex-col pl-4 gap-1 mt-1"
                          >
                            {PRODUCT_CATEGORIES.map((cat) => (
                              <Link
                                key={cat.slug}
                                href={`/products?category=${cat.slug}#filter-section`}
                                className="px-3 py-2 text-xs font-bold uppercase tracking-widest text-sage-500 hover:text-accent"
                                onClick={() => setMobileOpen(false)}
                              >
                                {cat.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${pathname === link.href ? "bg-sage-100 text-accent" : "text-sage-700 hover:bg-sage-100 hover:text-accent"}`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-3 text-sm font-semibold text-white"
                onClick={() => setMobileOpen(false)}
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                CONTACT US
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
