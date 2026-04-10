import {
  SiNodedotjs,
  SiReact,
  SiMongodb,
  SiTailwindcss,
  SiFirebase,
  SiFramer,
  SiTypescript,
  SiNextdotjs,
  SiPostgresql,
  SiRedis,
  SiNestjs,
  SiFastapi,
} from "react-icons/si";

import type { Project, ContactInfo, Experience } from "./types";

import printi from "@/assets/images/printi.png";
import portfolio from "@/assets/images/portfolio.png";
import tinder from "@/assets/images/tinder-for-geeks.png";
import trillicorn from "@/assets/images/trillicorn-technology.png";
import guidena from "@/assets/images/guidena.png";
import vakrtund from "@/assets/images/vakrtund.png";

export const GITHUB_USERNAME = "yashbhidawe";

export const siteConfig = {
  name: "Yash",
  headline: "Full-stack dev \n Who cares about UX!",

  location: "Pune, India",

  currentRole: "Software Engineer",
  currentCompany: "EaseMyExpo",
  currentCompanyUrl: "https://easemyexpo.com",

  bio: "I ship end-to-end web apps using MERN and FastAPI. Previously freelanced with clients across India and abroad.",

  highlights: [
    "MERN stack + FastAPI",
    "System design + DSA focused",
    "UI/UX detail-oriented",
    "Startup experience",
  ],

  resumeUrl:
    "https://drive.google.com/file/d/1JNDLqhHBwqM8fT7EXypclXkh96I8g9W1/view",
};
export const projects: Project[] = [
  {
    title: "GuidenaHQ",
    description:
      "Seamless 1:1 mentorships where learners can connect with skilled mentors, send personalized requests, track statuses, manage ongoing mentorships, chat in real-time, and host video-based meetings.",
    link: "https://guidenahq.vercel.app/",
    github: "https://github.com/yashbhidawe/GuidenaHQ",
    imageUrl: guidena,
    tech: [SiReact, SiTypescript, SiMongodb, SiNodedotjs],
  },
  {
    title: "Live-Auction",
    description:
      "Live auction is a React Native app for bidding on items in real-time.",
    link: "https://expo.dev/accounts/itsokyash/projects/live-auction/builds/53493fe0-3a46-447e-a86b-e1e7c464ebc7",
    github: "https://github.com/yashbhidawe/Live-Auction-Client",
    imageUrl: portfolio,
    tech: [SiReact, SiPostgresql, SiRedis, SiNestjs],
  },
  {
    title: "Printi.in",
    description:
      "A modern custom printing platform supporting dynamics of e-commerce with admin control—built for print businesses.",
    link: "https://printi.in",
    github: "https://github.com/yashbhidawe/printi.in",
    imageUrl: printi,
    tech: [SiReact, SiFirebase, SiTailwindcss, SiNodedotjs],
  },
  {
    title: "Stallscan",
    description:
      "StallScan is a tool for extracting structured data from exhibition floorplans. It identifies stall numbers, sizes, and company details using OCR + LLMs. Built with FastAPI, React, and TypeScript to power automated lead generation.",
    link: "https://stallscan.vercel.app/",
    imageUrl: portfolio,
    tech: [SiFastapi, SiReact, SiTailwindcss, SiFramer],
  },
  {
    title: "Tinder For Geeks",
    description:
      "A developer matchmaking app with real-time chat, profile swipes, and smooth animations for connecting like-minded coders.",
    link: "https://tinder-for-geeks.vercel.app",
    github: "https://github.com/yashbhidawe/devTinder",
    imageUrl: tinder,
    tech: [SiReact, SiTailwindcss, SiMongodb, SiNodedotjs],
  },
  {
    title: "Trillicorn Technology",
    description:
      "Responsive landing page built for a tech startup to showcase services, attract clients, and build credibility through clean UI/UX.",
    link: "https://trillicorn-technology.vercel.app/",
    github: "https://github.com/yashbhidawe/",
    imageUrl: trillicorn,
    tech: [SiReact, SiTailwindcss],
  },
  {
    title: "Vakratund Advertisings",
    description:
      "A creative agency specializing in impactful branding and digital marketing. The site was built as part of a freelance engagement, focused on delivering a visually appealing and mobile-first experience aligned with the client's brand identity.",
    link: "https://www.vakratundaadvertising.com/",
    github: "https://github.com/yashbhidawe/",
    imageUrl: vakrtund,
    tech: [SiTypescript, SiNextdotjs, SiFramer, SiTailwindcss],
  },
];

export const contactInfo: ContactInfo[] = [
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
    icon: "FaLinkedin",
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

export const experienceData: Experience[] = [
  {
    title: "2025 - Present",
    company: "EaseMyExpo",
    role: "Software Engineer",
    description:
      "Built AI stall design engine generating photorealistic 3D layouts → 70% faster design cycles, 45% faster validation.",
    tech: "FastAPI / MERN / Three.js / Firebase / Redis",
  },
  {
    title: "Aug 2025 - Nov 2025",
    company: "EaseMyExpo",
    role: "Software Engineer (Intern)",
    description:
      "Built OCR stall data pipeline → 90% accuracy gain; shipped across 3 production apps with 25% latency reduction.",
    tech: "FastAPI / Hono / MERN / Firebase",
  },
  {
    title: "2024 - 2025",
    company: "Freelance",
    role: "Frontend Developer",
    description:
      "Delivered e-commerce dashboard and marketing sites for international clients.",
    tech: "React / Tailwind / Firebase",
  },
  {
    title: "2023 - 2024",
    company: "Trillicorn Technology",
    role: "Frontend Intern",
    description:
      "Built responsive nftOS SaaS UI and improved frontend performance.",
    tech: "Next.js / Tailwind",
  },
];
