import { HoverEffect } from "./ui/card-hover-effect";
import printi from "../assets/images/printi.png";
import portfolio from "../assets/images/portfolio.png";
import tinder from "../assets/images/tinder-for-geeks.png";
import trillicorn from "../assets/images/trillicorn-technology.png";
import {
  IconBrandNodejs,
  IconBrandReact,
  IconBrandMongodb,
  IconBrandTailwind,
  IconBrandFirebase,
  IconBrandFramerMotion,
} from "@tabler/icons-react";

export default function Projects() {
  return (
    <div
      id="projects"
      className="max-w-5xl mx-auto px-8 flex flex-col justify-center items-center"
    >
      <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-white to-indigo-300">
        What I've Built
      </h1>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
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
