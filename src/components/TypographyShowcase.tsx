"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const hierarchy = [
  {
    level: "Title",
    font: "Inter Bold",
    size: "36–48pt",
    example: "Bold Statements",
    className: "text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight",
  },
  {
    level: "Section",
    font: "Inter Bold",
    size: "20–28pt",
    example: "Section Heading",
    className: "text-2xl sm:text-3xl font-bold tracking-tight",
  },
  {
    level: "Body",
    font: "Inter Regular",
    size: "10–12pt",
    example:
      "Body text sets the tone for content. It should feel clean, legible, and professional across every medium.",
    className: "text-base font-normal leading-relaxed",
  },
  {
    level: "Labels",
    font: "Inter Medium",
    size: "Small uppercase",
    example: "SYSTEM STATUS",
    className: "text-xs font-medium tracking-widest uppercase",
  },
];

export default function TypographyShowcase() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const rows = gsap.utils.toArray<HTMLElement>(".type-row");
      gsap.set(rows, { y: 30, opacity: 0 });
      ScrollTrigger.batch(rows, {
        onEnter: (batch) => {
          gsap.to(batch, { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power3.out" });
        },
        start: "top 90%",
        once: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="typography"
      ref={sectionRef}
      className="py-24 sm:py-32 px-6 sm:px-12 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark tracking-tight">
          Typo<span className="text-emerald">graphy</span>
        </h2>
        <p className="mt-4 text-gray text-base sm:text-lg max-w-xl">
          Inter for body and headings. Maison for internal heading use — contact
          the brand team for access. Arial as universal fallback.
        </p>

        <div className="mt-12 space-y-0 divide-y divide-gray/10">
          {hierarchy.map((item) => (
            <div
              key={item.level}
              className="type-row grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-4 lg:gap-8 py-8"
            >
              {/* Meta */}
              <div className="flex flex-col gap-1">
                <span className="font-mono text-xs text-orange font-medium uppercase tracking-wider">
                  {item.level}
                </span>
                <span className="text-sm text-gray">{item.font}</span>
                <span className="text-sm text-gray">{item.size}</span>
              </div>

              {/* Rendered example */}
              <div className="flex items-center">
                <span className={`text-dark ${item.className}`}>
                  {item.example}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Brand statement */}
        <div className="mt-12 p-8 sm:p-12 bg-emerald rounded-[2rem]">
          <p className="text-white/50 text-sm font-medium uppercase tracking-wider mb-4">
            Brand Statement
          </p>
          <p className="font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight">
            Where precision meets{" "}
            <span className="text-orange">purpose.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
