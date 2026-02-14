import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function Experience() {
  const data = [
    {
      title: "2023",
      content: (
        <div id="experience">
          <p className="mb-2 text-sm font-medium text-white dark:text-neutral-100">
            Frontend Developer Intern · Trillicorn Technology (Dec 2023 – Mar
            2024)
          </p>
          <ul className="list-disc pl-4 text-xs font-normal text-white md:text-sm dark:text-neutral-200">
            <li className="mb-2">
              Contributed to nftOS, the flagship product, by delivering scalable
              and performant frontend features.
            </li>
            <li className="mb-2">
              Created responsive and elegant web pages with Next.js and Tailwind
              CSS, enhancing performance and UX.
            </li>
            <li className="mb-2">
              Applied modern UI/UX principles focused on accessibility,
              usability, and aesthetic coherence through design research and
              prototyping.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="mb-2 text-sm font-medium text-white dark:text-neutral-100">
            Frontend Developer · Freelance (2024 – 2025)
          </p>
          <ul className="list-disc pl-4 text-xs font-normal text-white md:text-sm dark:text-neutral-200">
            <li className="mb-2">
              Developed a feature-rich E-commerce Admin Dashboard for a
              Dubai-based client, enabling streamlined inventory management,
              order tracking, and analytics with an intuitive UI/UX.
            </li>
            <li className="mb-2">
              Designed and deployed a landing page for Trillicorn Technologies
              to highlight their services and increase client engagement.
            </li>
            <li className="mb-2">
              Delivered multiple frontend projects using React, Tailwind, and
              Firebase—emphasizing user-centric design and collaborative
              development.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <p className="mb-2 text-sm font-medium text-white dark:text-neutral-100">
            Software Engineer Intern · EaseMyExpo (Aug 2025 – Nov 2025)
          </p>
          <ul className="list-disc pl-4 text-xs font-normal text-white md:text-sm dark:text-neutral-200">
            <li className="mb-2">
              Engineered an <strong>automated data extraction pipeline</strong>{" "}
              by replacing static workflows with dynamic image processing and
              OCR, achieving a{" "}
              <strong>90% improvement in processing accuracy</strong> for core
              stall data.
            </li>
            <li className="mb-2">
              Developed and maintained production features across{" "}
              <strong>3 distinct applications</strong> with diverse tech stacks,
              including{" "}
              <strong>FastAPI, Hono, MERN, and Firebase-backed React</strong>{" "}
              architectures.
            </li>
            <li className="mb-2">
              Optimized backend performance and stability by refactoring legacy
              code and implementing robust schema validations, resulting in a{" "}
              <strong>25% reduction in system latency</strong> and improved
              error handling.
            </li>
            <li className="mb-2">
              Partnered with the UI/UX team to redesign{" "}
              <strong>10+ key interfaces</strong>, focusing on user flow
              optimization and accessibility, which led to a{" "}
              <strong>30% increase in user task completion efficiency</strong>.
            </li>
            <li className="mb-2">
              Active participant in the full SDLC, contributing to{" "}
              <strong>50+ peer code reviews</strong> and collaborating on
              technical roadmaps in a high-velocity, fast-paced engineering
              environment.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "2026",
      content: (
        <div>
          <p className="mb-2 text-sm font-medium text-white dark:text-neutral-100">
            Software Engineer · EaseMyExpo (Nov 2025 – Present)
          </p>
          <ul className="list-disc pl-4 text-xs font-normal text-white md:text-sm dark:text-neutral-200">
            <li className="mb-2">
              Developed an <strong>automated design engine</strong> that
              processes <strong>50+ architectural parameters</strong>{" "}
              (dimensions, materials, lighting) to generate photorealistic
              exhibition stalls, reducing manual design cycles by{" "}
              <strong>70%</strong>.
            </li>
            <li className="mb-2">
              Engineered an <strong>interactive 3D visualization layer</strong>{" "}
              with 360° camera controls using Three.js, increasing user design
              validation speed by <strong>45%</strong> across{" "}
              <strong>25+ complex UI modules</strong>.
            </li>
            <li className="mb-2">
              Architected a <strong>predictive blueprinting system</strong> that
              generates 1:1 scale wireframes as structural anchors, ensuring{" "}
              <strong>100% spatial accuracy</strong> and eliminating structural
              inconsistencies in generated outputs.
            </li>
            <li className="mb-2">
              Built a <strong>centralized usage analytics dashboard</strong>{" "}
              tracking <strong>1,000+ monthly design iterations</strong>,
              providing real-time resource allocation insights that improved
              operational efficiency by <strong>20%</strong>.
            </li>
            <li className="mb-2">
              Optimized frontend performance via{" "}
              <strong>lazy-loading and advanced state management</strong> for
              high-complexity forms, reducing initial bundle weight by{" "}
              <strong>35%</strong> and significantly improving load times.
            </li>
          </ul>
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
