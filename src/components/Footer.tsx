"use client";

const navLinks = [
  { label: "Colors", href: "#colors" },
  { label: "Typography", href: "#typography" },
  { label: "Logos", href: "#logos" },
  { label: "Principles", href: "#principles" },
  { label: "Skills", href: "#skills" },
];

export default function Footer() {
  return (
    <footer className="bg-emerald rounded-t-[3rem] sm:rounded-t-[4rem] mt-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logotype/horizontal-dark.svg"
              alt="OneLayer"
              width={140}
              height={29}
            />
            <p className="mt-4 text-white/50 text-sm leading-relaxed max-w-xs">
              Brand guidelines and Claude Code skills for the OneLayer
              ecosystem.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white/40 text-xs font-medium uppercase tracking-wider mb-4">
              Sections
            </h4>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/70 text-sm hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Status */}
          <div>
            <h4 className="text-white/40 text-xs font-medium uppercase tracking-wider mb-4">
              System
            </h4>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
              </span>
              <span className="font-mono text-xs text-white/60">
                All systems operational
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} OneLayer. All rights reserved.
          </p>
          <p className="text-white/30 text-xs font-mono">
            Built with Next.js + Vercel
          </p>
        </div>
      </div>
    </footer>
  );
}
