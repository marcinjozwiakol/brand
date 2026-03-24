"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const hierarchy = [
  {
    level: "Title",
    font: "Maison Bold",
    size: "36–48pt",
    example: "Bold Statements",
    className: "text-4xl sm:text-5xl lg:text-6xl font-bold font-heading tracking-tight",
  },
  {
    level: "Section",
    font: "Maison Bold",
    size: "20–28pt",
    example: "Section Heading",
    className: "text-2xl sm:text-3xl font-bold font-heading tracking-tight",
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

function StatementBlock() {
  return (
    <div className="mt-20 -mx-6 sm:-mx-12">
      <div className="relative overflow-hidden rounded-[2rem] mx-6 sm:mx-12 min-h-[500px] sm:min-h-[600px] flex items-center">
        {/* Video background — pre-baked ping-pong loop */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/statement-loop.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-emerald/70" />

        {/* Content */}
        <div className="relative z-10 px-8 sm:px-16 py-16 sm:py-24 max-w-5xl">
          <p className="text-white/40 text-xs sm:text-sm font-medium uppercase tracking-[0.2em] mb-6">
            Brand Statement
          </p>
          <h2 className="font-bold font-heading text-white text-3xl sm:text-5xl lg:text-7xl leading-[1.05] tracking-tight">
            Zero Trust Security
            <br />
            and Asset Management
            <br />
            for <span className="text-emerald-100">Private 5G/LTE</span>
            <br />
            <span className="text-emerald-100">Devices</span>
          </h2>
          <p className="mt-8 text-white/50 text-sm sm:text-base max-w-lg leading-relaxed">
            OneLayer provides complete visibility, onboarding, and security
            for every device on your private cellular network — from SIM
            authentication to automated segmentation.
          </p>
        </div>
      </div>
    </div>
  );
}

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
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-dark tracking-tight">
          Typo<span className="text-emerald">graphy</span>
        </h2>
        <p className="mt-4 text-gray text-base sm:text-lg max-w-xl">
          Maison for display and headings. Inter for body, labels, and captions.
          Arial as universal fallback.
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

        {/* Brand statement — expanded with video background */}
        <StatementBlock />
      </div>
    </section>
  );
}
