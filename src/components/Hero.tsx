"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });
      tl.from(line1Ref.current, {
        y: 50,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      })
        .from(
          line2Ref.current,
          { y: 50, opacity: 0, duration: 0.9, ease: "power3.out" },
          "-=0.6"
        )
        .from(
          subRef.current,
          { y: 30, opacity: 0, duration: 0.7, ease: "power3.out" },
          "-=0.5"
        )
        .from(
          ctaRef.current,
          { y: 20, opacity: 0, duration: 0.6, ease: "power3.out" },
          "-=0.4"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-dvh flex items-end overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f0d] via-emerald to-emerald-900" />

      {/* Floating logo mark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logotype/mark-dark.svg"
          alt=""
          width={400}
          height={400}
          className="opacity-[0.04] select-none"
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 pb-20 sm:pb-28">
        <div className="max-w-4xl">
          <span
            ref={line1Ref}
            className="block text-white/90 text-3xl sm:text-5xl lg:text-6xl font-bold font-heading tracking-tight leading-tight"
          >
            Brand is the
          </span>
          <span
            ref={line2Ref}
            className="block text-white font-bold font-heading text-6xl sm:text-8xl lg:text-[7rem] leading-[0.95] mt-2"
          >
            <span className="text-orange">Experience.</span>
          </span>
          <p
            ref={subRef}
            className="mt-6 text-white/60 text-base sm:text-lg max-w-lg leading-relaxed"
          >
            OneLayer brand guidelines and Claude Code skills — everything you
            need to build on-brand.
          </p>
          <a
            ref={ctaRef}
            href="#colors"
            className="inline-flex items-center mt-8 px-7 py-3.5 bg-orange text-white font-semibold rounded-full btn-magnetic text-sm sm:text-base"
          >
            Explore Guidelines
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
