"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skills } from "@/lib/skills";
import SkillCard from "./SkillCard";

gsap.registerPlugin(ScrollTrigger);

export default function SkillLibrary() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".skill-card");
      gsap.set(cards, { y: 30, opacity: 0 });
      ScrollTrigger.batch(cards, {
        onEnter: (batch) => {
          gsap.to(batch, { y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: "power3.out" });
        },
        start: "top 90%",
        once: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 sm:py-32 px-6 sm:px-12 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark tracking-tight">
          Claude Code{" "}
          <span className="text-orange">Skills</span>
        </h2>
        <p className="mt-4 text-gray text-base sm:text-lg max-w-xl">
          Download and install these skills into Claude Code. Each skill teaches
          Claude domain-specific knowledge for OneLayer workflows.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {skills.map((skill) => (
            <div key={skill.id} className="skill-card">
              <SkillCard skill={skill} />
            </div>
          ))}
        </div>

        {/* Install instructions */}
        <div className="mt-12 p-6 sm:p-8 bg-offwhite rounded-[2rem] border border-gray/10">
          <h3 className="font-semibold text-dark text-sm mb-3">
            How to install
          </h3>
          <ol className="space-y-2 text-sm text-gray">
            <li className="flex gap-2">
              <span className="font-mono text-orange font-bold">1.</span>
              Download the <code className="font-mono text-dark bg-white px-1.5 py-0.5 rounded">.skill</code> file
            </li>
            <li className="flex gap-2">
              <span className="font-mono text-orange font-bold">2.</span>
              Open Claude Code and use{" "}
              <code className="font-mono text-dark bg-white px-1.5 py-0.5 rounded">
                /install-skill
              </code>
            </li>
            <li className="flex gap-2">
              <span className="font-mono text-orange font-bold">3.</span>
              Point it to the downloaded file — done!
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
