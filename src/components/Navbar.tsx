"use client";

import { useEffect, useState } from "react";
const navLinks = [
  { label: "Colors", href: "#colors" },
  { label: "Typography", href: "#typography" },
  { label: "Logos", href: "#logos" },
  { label: "Principles", href: "#principles" },
  { label: "Skills", href: "#skills" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 px-2 py-2 rounded-full transition-all duration-500 ${
        scrolled
          ? "bg-white/70 backdrop-blur-xl border border-gray/20 shadow-lg"
          : "bg-white/5 backdrop-blur-sm border border-white/10"
      }`}
    >
      {/* Logo mark */}
      <a href="#" className="flex items-center pl-2 pr-3 shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={scrolled ? "/logotype/mark-light.svg" : "/logotype/mark-dark.svg"}
          alt="OneLayer"
          width={28}
          height={28}
          className="transition-opacity duration-300"
        />
      </a>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-1">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ${
              scrolled
                ? "text-dark hover:bg-offwhite"
                : "text-white/80 hover:text-white hover:bg-white/10"
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* CTA */}
      <a
        href="#skills"
        className="hidden md:flex items-center ml-1 px-4 py-1.5 bg-orange text-white text-sm font-semibold rounded-full btn-magnetic"
      >
        Download Skills
      </a>

      {/* Mobile menu button */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className={`md:hidden p-2 rounded-full ${scrolled ? "text-dark" : "text-white"}`}
        aria-label="Menu"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d={mobileOpen ? "M5 5l10 10M15 5L5 15" : "M3 6h14M3 10h14M3 14h14"}
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 p-4 bg-white/90 backdrop-blur-xl rounded-3xl border border-gray/20 shadow-xl md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-2 text-sm font-medium text-dark rounded-2xl hover:bg-offwhite"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#skills"
            onClick={() => setMobileOpen(false)}
            className="block mt-2 px-4 py-2 bg-orange text-white text-sm font-semibold rounded-full text-center"
          >
            Download Skills
          </a>
        </div>
      )}
    </nav>
  );
}
