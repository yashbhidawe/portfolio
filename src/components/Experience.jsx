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
              Rewrote a core feature that was originally flat and basic into a
              fully dynamic workflow powered by OpenCV and Tesseract, improving
              accuracy by about 90%.
            </li>
            <li className="mb-2">
              Built and maintained features across three different applications
              with different stacks: FastAPI + React + Hono, MERN, and React +
              Firebase.
            </li>
            <li className="mb-2">
              Improved backend stability, added proper validations, and cleaned
              up legacy code that was slowing the product down.
            </li>
            <li className="mb-2">
              Collaborated with the UI/UX team to redesign and rebuild key
              interfaces, focusing on usability and smoother user flows.
            </li>
            <li className="mb-2">
              Worked closely with the engineering team to plan changes, review
              code, and ship reliable features in a fast-paced environment.
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
