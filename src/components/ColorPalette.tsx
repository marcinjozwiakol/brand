"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Swatch {
  name: string;
  hex: string;
  role?: string;
}

const corePalette: Swatch[] = [
  { name: "Blaze Orange", hex: "#FF4801", role: "Primary accent" },
  { name: "Deep Emerald", hex: "#004734", role: "Secondary / sections" },
  { name: "Near Black", hex: "#1E1E1E", role: "Body text / dark" },
  { name: "Mid Gray", hex: "#878787", role: "Subtle text" },
  { name: "Off White", hex: "#F5F5F5", role: "Light background" },
  { name: "White", hex: "#FFFFFF", role: "White" },
];

const orangeShades: Swatch[] = [
  { name: "50", hex: "#FEE9E6" },
  { name: "100", hex: "#FFCBB9" },
  { name: "200", hex: "#FFAA8B" },
  { name: "300", hex: "#FF875C" },
  { name: "400", hex: "#FF6B36" },
  { name: "500", hex: "#FF4F06" },
  { name: "600", hex: "#FF4801" },
  { name: "700", hex: "#F14100" },
  { name: "800", hex: "#E33900" },
  { name: "900", hex: "#CB2800" },
];

const emeraldShades: Swatch[] = [
  { name: "50", hex: "#DFF1EE" },
  { name: "100", hex: "#B1DDD4" },
  { name: "200", hex: "#7FC7B9" },
  { name: "300", hex: "#4EB09D" },
  { name: "400", hex: "#2AA08A" },
  { name: "500", hex: "#0D8F77" },
  { name: "600", hex: "#0B826B" },
  { name: "700", hex: "#07725C" },
  { name: "800", hex: "#03634E" },
  { name: "900", hex: "#004734" },
];

function CopySwatch({ swatch, large }: { swatch: Swatch; large?: boolean }) {
  const [copied, setCopied] = useState(false);
  const isDark =
    swatch.hex !== "#FFFFFF" &&
    swatch.hex !== "#F5F5F5" &&
    swatch.hex !== "#FEE9E6" &&
    swatch.hex !== "#FFCBB9" &&
    swatch.hex !== "#DFF1EE" &&
    swatch.hex !== "#B1DDD4" &&
    swatch.hex !== "#FFAA8B";

  const copy = () => {
    navigator.clipboard.writeText(swatch.hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  if (large) {
    return (
      <button
        onClick={copy}
        className="group flex flex-col rounded-[2rem] overflow-hidden border border-gray/10 bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
      >
        <div
          className="h-28 sm:h-32 w-full flex items-end justify-between px-4 pb-3"
          style={{ backgroundColor: swatch.hex }}
        >
          <span
            className={`font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity ${
              isDark ? "text-white/70" : "text-dark/50"
            }`}
          >
            {copied ? "Copied!" : "Click to copy"}
          </span>
        </div>
        <div className="px-4 py-3 text-left">
          <p className="text-sm font-semibold text-dark">{swatch.name}</p>
          <p className="text-xs font-mono text-gray mt-0.5">{swatch.hex}</p>
          {swatch.role && (
            <p className="text-xs text-gray mt-1">{swatch.role}</p>
          )}
        </div>
      </button>
    );
  }

  return (
    <button
      onClick={copy}
      className="group flex flex-col items-center gap-1.5"
    >
      <div
        className="w-full aspect-[3/2] rounded-2xl border border-gray/10 transition-all duration-300 group-hover:scale-105 group-hover:shadow-md flex items-center justify-center"
        style={{ backgroundColor: swatch.hex }}
      >
        <span
          className={`font-mono text-[10px] opacity-0 group-hover:opacity-100 transition-opacity ${
            isDark ? "text-white/80" : "text-dark/50"
          }`}
        >
          {copied ? "Copied!" : swatch.hex}
        </span>
      </div>
      <span className="text-[10px] font-mono text-gray">{swatch.name}</span>
    </button>
  );
}

export default function ColorPalette() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
        },
      });

      const swatches = gsap.utils.toArray<HTMLElement>(".core-swatch");
      gsap.set(swatches, { y: 30, opacity: 0 });
      ScrollTrigger.batch(swatches, {
        onEnter: (batch) => {
          gsap.to(batch, { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: "power3.out" });
        },
        start: "top 90%",
        once: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="colors" ref={sectionRef} className="py-24 sm:py-32 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto">
        <h2
          ref={headingRef}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark tracking-tight"
        >
          Color <span className="text-orange">Palette</span>
        </h2>
        <p className="mt-4 text-gray text-base sm:text-lg max-w-xl">
          Orange is an accent — use it sparingly for highlights, CTAs, and key
          data. Emerald for sections and dark backgrounds.
        </p>

        {/* Core palette */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-12">
          {corePalette.map((s) => (
            <div key={s.hex} className="core-swatch">
              <CopySwatch swatch={s} large />
            </div>
          ))}
        </div>

        {/* Extended: Orange */}
        <div className="mt-16">
          <h3 className="text-lg font-semibold text-dark mb-4">
            Orange Shades
          </h3>
          <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
            {orangeShades.map((s) => (
              <CopySwatch key={s.hex} swatch={s} />
            ))}
          </div>
        </div>

        {/* Extended: Emerald */}
        <div className="mt-10">
          <h3 className="text-lg font-semibold text-dark mb-4">
            Emerald Shades
          </h3>
          <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
            {emeraldShades.map((s) => (
              <CopySwatch key={s.hex} swatch={s} />
            ))}
          </div>
        </div>

        {/* Gradients */}
        <div className="mt-10">
          <h3 className="text-lg font-semibold text-dark mb-4">Gradients</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="h-20 rounded-2xl bg-gradient-to-r from-[#FF4902] to-[#FF8556] flex items-center justify-center">
              <span className="font-mono text-xs text-white/80">
                #FF4902 → #FF8556
              </span>
            </div>
            <div className="h-20 rounded-2xl bg-gradient-to-r from-[#346C5D] to-[#87BDAE] flex items-center justify-center">
              <span className="font-mono text-xs text-white/80">
                #346C5D → #87BDAE
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
