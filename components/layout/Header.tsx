"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, HEADER_NAV_LINKS } from "@/lib/constants";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
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
            return (
              <Link
                key={link.href}
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
                  transition={{ duration: 0.3 }}
                />
              </Link>
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
              {HEADER_NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${pathname === link.href ? "bg-sage-100 text-accent" : "text-sage-700 hover:bg-sage-100 hover:text-accent"
                    }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
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
