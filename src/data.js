import {
  IconBrandNodejs,
  IconBrandReact,
  IconBrandMongodb,
  IconBrandTailwind,
  IconBrandFirebase,
  IconBrandFramerMotion,
  IconBrandTypescript,
  IconBrandNextjs,
} from "@tabler/icons-react";

import printi from "./assets/images/printi.png";
import portfolio from "./assets/images/portfolio.png";
import tinder from "./assets/images/tinder-for-geeks.png";
import trillicorn from "./assets/images/trillicorn-technology.png";
import guidena from "./assets/images/guidena.png";
import vakrtund from "./assets/images/vakrtund.png";

export const GITHUB_USERNAME = "yashbhidawe";

export const projects = [
  {
    title: "GuidenaHQ",
    description:
      "Seamless 1:1 mentorships where learners can connect with skilled mentors, send personalized requests, track statuses, manage ongoing mentorships, chat in real-time, and host video-based meetings.",
    link: "https://guidenahq.vercel.app/",
    imageUrl: guidena,
    tech: [
      IconBrandReact,
      IconBrandTypescript,
      IconBrandMongodb,
      IconBrandNodejs,
    ],
  },
  {
    title: "Vakratund Advertisings",
    description:
      "A creative agency specializing in impactful branding and digital marketing. The site was built as part of a freelance engagement, focused on delivering a visually appealing and mobile-first experience aligned with the client's brand identity.",
    link: "https://www.vakratundaadvertising.com/",
    imageUrl: vakrtund,
    tech: [
      IconBrandTypescript,
      IconBrandNextjs,
      IconBrandFramerMotion,
      IconBrandTailwind,
    ],
  },
  {
    title: "Tinder For Geeks",
    description:
      "A developer matchmaking app with real-time chat, profile swipes, and smooth animations for connecting like-minded coders.",
    link: "https://tinder-for-geeks.vercel.app",
    imageUrl: tinder,
    tech: [
      IconBrandReact,
      IconBrandTailwind,
      IconBrandMongodb,
      IconBrandNodejs,
    ],
  },
  {
    title: "Printi.in",
    description:
      "A modern custom printing platform supporting dynamics of e-commerce with admin control—built for print businesses.",
    link: "https://printi.in",
    imageUrl: printi,
    tech: [
      IconBrandReact,
      IconBrandFirebase,
      IconBrandTailwind,
      IconBrandNodejs,
    ],
  },
  {
    title: "Trillicorn Technology",
    description:
      "Responsive landing page built for a tech startup to showcase services, attract clients, and build credibility through clean UI/UX.",
    link: "https://trillicorn-technology.vercel.app/",
    imageUrl: trillicorn,
    tech: [IconBrandReact, IconBrandTailwind],
  },
  {
    title: "Itsokyash",
    description:
      "Personal portfolio site showcasing projects, experience, and contact form—built with smooth transitions and a focus on design precision.",
    link: "https://itsokyash.vercel.app",
    imageUrl: portfolio,
    tech: [IconBrandReact, IconBrandTailwind, IconBrandFramerMotion],
  },
];

export const contactInfo = [
  {
    icon: "SiGmail",
    title: "Mail Me",
    link: "mailto:ybh5179@gmail.com",
    color: "#EA4335",
  },
  {
    icon: "SiX",
    title: "X (Twitter)",
    link: "https://x.com/itsokyash_",
    color: "#1DA1F2",
  },
  {
    icon: "SiGithub",
    title: "Github",
    link: "https://github.com/yashbhidawe",
    color: "#000000",
  },
  {
    icon: "SiLinkedin",
    title: "Linkedin",
    link: "https://linkedin.com/in/itsokyash",
    color: "#0A66C2",
  },
  {
    icon: "SiInstagram",
    title: "Instagram",
    link: "https://www.instagram.com/itsokyash_/",
    color: "#E4405F",
  },
];

export const experienceData = [
  {
    title: "2026",
    company: "EaseMyExpo",
    role: "Software Engineer",
    description:
      "Built AI stall design engine generating photorealistic 3D layouts → 70% faster design cycles, 45% faster validation.",
    tech: "FastAPI / MERN / Three.js / Firebase / Redis",
  },
  {
    title: "2025",
    company: "EaseMyExpo",
    role: "Software Engineer (Intern)",
    description:
      "Built OCR stall data pipeline → 90% accuracy gain; shipped across 3 production apps with 25% latency reduction.",
    tech: "FastAPI / Hono / MERN / Firebase",
  },
  {
    title: "2024",
    company: "Freelance",
    role: "Frontend Developer",
    description:
      "Delivered e-commerce dashboard and marketing sites for international clients.",
    tech: "React / Tailwind / Firebase",
  },
  {
    title: "2023",
    company: "Trillicorn Technology",
    role: "Frontend Intern",
    description:
      "Built responsive nftOS SaaS UI and improved frontend performance.",
    tech: "Next.js / Tailwind",
  },
];
