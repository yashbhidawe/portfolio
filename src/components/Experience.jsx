import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { experienceData } from "../data";

export function Experience() {
  const data = experienceData.map((exp) => ({
    title: exp.title,
    content: (
      <div>
        <p className="text-sm font-medium text-white">{exp.company}</p>
        <p className="text-sm text-neutral-300">{exp.role}</p>
        <p className="mt-1 text-sm text-neutral-400">{exp.description}</p>
        <p className="mt-2 text-xs text-neutral-500">{exp.tech}</p>
      </div>
    ),
  }));

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
