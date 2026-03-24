"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const principles = [
  {
    number: "01",
    title: "Generous Whitespace",
    description:
      "Don't crowd content. Let each element breathe. Whitespace is a signal of confidence and clarity.",
    accent: "bg-orange",
  },
  {
    number: "02",
    title: "Orange Accents, Not Floods",
    description:
      "One highlight per section is enough. Orange is a signal — use it to draw attention, not dominate.",
    accent: "bg-orange",
  },
  {
    number: "03",
    title: "Geometric Structure",
    description:
      "Clean rectangles, no decorative flourishes. Every shape serves a purpose. Precision over ornament.",
    accent: "bg-emerald",
  },
  {
    number: "04",
    title: "Consistent Grid",
    description:
      "Align to a clear column structure. Visual rhythm creates trust and professionalism.",
    accent: "bg-emerald",
  },
  {
    number: "05",
    title: "Bold Typographic Hierarchy",
    description:
      "Big headings, small body text. Make the hierarchy unmistakable at a glance.",
    accent: "bg-dark",
  },
];

export default function LayoutPrinciples() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".principle-card");

      cards.forEach((card, i) => {
        if (i === cards.length - 1) return; // last card doesn't need animation

        ScrollTrigger.create({
          trigger: card,
          start: "top 10%",
          end: "bottom 10%",
          onEnter: () => {
            gsap.to(card, {
              scale: 0.92,
              opacity: 0.5,
              filter: "blur(8px)",
              duration: 0.4,
              ease: "power2.inOut",
            });
          },
          onLeaveBack: () => {
            gsap.to(card, {
              scale: 1,
              opacity: 1,
              filter: "blur(0px)",
              duration: 0.4,
              ease: "power2.inOut",
            });
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="principles"
      ref={sectionRef}
      className="py-24 sm:py-32 px-6 sm:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-dark tracking-tight mb-4">
          Layout{" "}
          <span className="text-emerald">Principles</span>
        </h2>
        <p className="text-gray text-base sm:text-lg max-w-xl mb-16">
          Five rules that make every OneLayer artifact feel coherent and
          premium.
        </p>

        <div ref={cardsRef} className="space-y-6">
          {principles.map((p) => (
            <div
              key={p.number}
              className="principle-card sticky top-24 rounded-[2rem] p-8 sm:p-12 bg-white border border-gray/10 shadow-sm transition-all"
            >
              <div className="flex items-start gap-6 sm:gap-10">
                {/* Number */}
                <div className="shrink-0">
                  <span className="font-mono text-3xl sm:text-4xl font-bold text-gray/20">
                    {p.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-3 h-3 rounded-full ${p.accent}`} />
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-dark">
                      {p.title}
                    </h3>
                  </div>
                  <p className="text-gray text-base sm:text-lg max-w-xl leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
