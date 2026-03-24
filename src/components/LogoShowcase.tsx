"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Download } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface LogoVariant {
  label: string;
  description: string;
  svgPath: string;
  pngPath: string;
  bgClass: string;
  width: number;
  height: number;
}

const variants: LogoVariant[] = [
  {
    label: "Horizontal Light",
    description: "Default. White or light backgrounds.",
    svgPath: "/logotype/horizontal-light.svg",
    pngPath: "/logotype/horizontal-light@2x.png",
    bgClass: "bg-white border border-gray/10",
    width: 240,
    height: 50,
  },
  {
    label: "Horizontal Dark",
    description: "Dark, emerald, or saturated backgrounds.",
    svgPath: "/logotype/horizontal-dark.svg",
    pngPath: "/logotype/horizontal-dark@2x.png",
    bgClass: "bg-emerald",
    width: 240,
    height: 50,
  },
  {
    label: "Vertical Light",
    description: "Large-scale hero on light background.",
    svgPath: "/logotype/vertical-light.svg",
    pngPath: "/logotype/vertical-light@2x.png",
    bgClass: "bg-white border border-gray/10",
    width: 160,
    height: 80,
  },
  {
    label: "Vertical Dark",
    description: "Large-scale hero on dark background.",
    svgPath: "/logotype/vertical-dark.svg",
    pngPath: "/logotype/vertical-dark@2x.png",
    bgClass: "bg-emerald",
    width: 160,
    height: 80,
  },
  {
    label: "Mark Light",
    description: "Symbol only, tight space on light background. Min 32px.",
    svgPath: "/logotype/mark-light.svg",
    pngPath: "/logotype/mark-light@2x.png",
    bgClass: "bg-white border border-gray/10",
    width: 80,
    height: 60,
  },
  {
    label: "Mark Dark",
    description: "Symbol only, tight space on dark background. Min 32px.",
    svgPath: "/logotype/mark-dark.svg",
    pngPath: "/logotype/mark-dark@2x.png",
    bgClass: "bg-emerald",
    width: 80,
    height: 60,
  },
];

const dontRules = [
  "Recolor the logo",
  "Rotate or distort",
  "Add drop shadows",
  "Separate icon from wordmark",
  "Use unapproved variants",
];

export default function LogoShowcase() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".logo-card");
      gsap.set(cards, { y: 30, opacity: 0 });

      ScrollTrigger.batch(cards, {
        onEnter: (batch) => {
          gsap.to(batch, {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
          });
        },
        start: "top 90%",
        once: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="logos" ref={sectionRef} className="py-24 sm:py-32 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark tracking-tight">
          Logo<span className="text-orange">type</span>
        </h2>
        <p className="mt-4 text-gray text-base sm:text-lg max-w-xl">
          6 approved variants only. When in doubt, use Horizontal. Use SVG for
          web, @2x PNG for documents and presentations.
        </p>

        {/* Logo grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {variants.map((v) => (
            <div
              key={v.label}
              className="logo-card rounded-[2rem] overflow-hidden bg-white border border-gray/10 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              <div
                className={`${v.bgClass} h-40 flex items-center justify-center px-8 rounded-t-[2rem]`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={v.svgPath}
                  alt={v.label}
                  className="object-contain max-h-20 w-auto"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-dark text-sm">{v.label}</h3>
                <p className="text-xs text-gray mt-1">{v.description}</p>
                <div className="flex gap-2 mt-3">
                  <a
                    href={v.svgPath}
                    download
                    className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium bg-offwhite text-dark rounded-full hover:bg-gray/10 transition-colors"
                  >
                    <Download size={12} />
                    SVG
                  </a>
                  <a
                    href={v.pngPath}
                    download
                    className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium bg-offwhite text-dark rounded-full hover:bg-gray/10 transition-colors"
                  >
                    <Download size={12} />
                    PNG
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Don't rules */}
        <div className="mt-16 p-8 sm:p-10 bg-dark rounded-[2rem]">
          <h3 className="text-white font-semibold text-lg mb-4">
            Never do this
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {dontRules.map((rule) => (
              <div
                key={rule}
                className="flex items-center gap-2 px-4 py-3 bg-white/5 rounded-2xl"
              >
                <span className="text-orange text-lg leading-none">✕</span>
                <span className="text-white/70 text-sm">{rule}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
