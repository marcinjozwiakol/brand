"use client";

import { Download, Palette, FileText, ScanSearch, Clock } from "lucide-react";
import type { Skill } from "@/lib/skills";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Palette,
  FileText,
  ScanSearch,
};

export default function SkillCard({ skill }: { skill: Skill }) {
  const Icon = iconMap[skill.icon] || Palette;

  return (
    <div className={`group rounded-[2rem] bg-white border border-gray/10 p-6 sm:p-8 transition-all duration-300 flex flex-col ${skill.comingSoon ? "opacity-70" : "hover:shadow-lg hover:-translate-y-1"}`}>
      {/* Icon + badge */}
      <div className="flex items-start justify-between mb-5">
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${skill.comingSoon ? "bg-gray/10" : "bg-emerald-50"}`}>
          <Icon size={22} className={skill.comingSoon ? "text-gray" : "text-emerald"} />
        </div>
        {skill.comingSoon ? (
          <span className="px-2.5 py-0.5 bg-orange-50 text-orange rounded-full text-[10px] font-mono font-medium">
            Coming Soon
          </span>
        ) : (
          <span className="px-2.5 py-0.5 bg-offwhite rounded-full text-[10px] font-mono font-medium text-gray">
            v{skill.version}
          </span>
        )}
      </div>

      {/* Content */}
      <h3 className="text-lg font-bold text-dark">{skill.name}</h3>
      <p className="text-sm text-gray mt-2 leading-relaxed flex-1">
        {skill.description}
      </p>

      {/* Download or Coming Soon */}
      {skill.comingSoon ? (
        <div className="mt-6 inline-flex items-center justify-center gap-2 w-full px-5 py-3 bg-gray/10 text-gray text-sm font-semibold rounded-full cursor-default">
          <Clock size={16} />
          Coming Soon
        </div>
      ) : (
        <a
          href={`/skills/${skill.filename}`}
          download
          className="mt-6 inline-flex items-center justify-center gap-2 w-full px-5 py-3 bg-dark text-white text-sm font-semibold rounded-full btn-magnetic group-hover:bg-orange transition-colors duration-300"
        >
          <Download size={16} />
          Download .skill
        </a>
      )}
    </div>
  );
}
