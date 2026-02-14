import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function Experience() {
  const data = [
    {
      title: "2026",
      content: (
        <div>
          <p className="text-sm font-medium text-white">EaseMyExpo</p>
          <p className="text-sm text-neutral-300">Software Engineer</p>
          <p className="mt-1 text-sm text-neutral-400">
            Built AI stall design engine generating photorealistic 3D layouts →
            70% faster design cycles, 45% faster validation.
          </p>
          <p className="mt-2 text-xs text-neutral-500">
            FastAPI / MERN / Three.js / Firebase / Redis
          </p>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <p className="text-sm font-medium text-white">EaseMyExpo</p>
          <p className="text-sm text-neutral-300">Software Engineer (Intern)</p>
          <p className="mt-1 text-sm text-neutral-400">
            Built OCR stall data pipeline → 90% accuracy gain; shipped across 3
            production apps with 25% latency reduction.
          </p>
          <p className="mt-2 text-xs text-neutral-500">
            FastAPI / Hono / MERN / Firebase
          </p>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="text-sm font-medium text-white">Freelance</p>
          <p className="text-sm text-neutral-300">Frontend Developer</p>
          <p className="mt-1 text-sm text-neutral-400">
            Delivered e-commerce dashboard and marketing sites for international
            clients.
          </p>
          <p className="mt-2 text-xs text-neutral-500">
            React / Tailwind / Firebase
          </p>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="text-sm font-medium text-white">
            Trillicorn Technology
          </p>
          <p className="text-sm text-neutral-300">Frontend Intern</p>
          <p className="mt-1 text-sm text-neutral-400">
            Built responsive nftOS SaaS UI and improved frontend performance.
          </p>
          <p className="mt-2 text-xs text-neutral-500">Next.js / Tailwind</p>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
