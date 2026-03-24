"use client";

import { Download, Palette, FileText, ScanSearch } from "lucide-react";
import type { Skill } from "@/lib/skills";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Palette,
  FileText,
  ScanSearch,
};

export default function SkillCard({ skill }: { skill: Skill }) {
  const Icon = iconMap[skill.icon] || Palette;

  return (
    <div className="group rounded-[2rem] bg-white border border-gray/10 p-6 sm:p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col">
      {/* Icon + version */}
      <div className="flex items-start justify-between mb-5">
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center">
          <Icon size={22} className="text-emerald" />
        </div>
        <span className="px-2.5 py-0.5 bg-offwhite rounded-full text-[10px] font-mono font-medium text-gray">
          v{skill.version}
        </span>
      </div>

      {/* Content */}
      <h3 className="text-lg font-bold text-dark">{skill.name}</h3>
      <p className="text-sm text-gray mt-2 leading-relaxed flex-1">
        {skill.description}
      </p>

      {/* Download */}
      <a
        href={`/skills/${skill.filename}`}
        download
        className="mt-6 inline-flex items-center justify-center gap-2 w-full px-5 py-3 bg-dark text-white text-sm font-semibold rounded-full btn-magnetic group-hover:bg-orange transition-colors duration-300"
      >
        <Download size={16} />
        Download .skill
      </a>
    </div>
  );
}
