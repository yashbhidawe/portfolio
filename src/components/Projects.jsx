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
    <div className="max-w-5xl mx-auto px-8 flex flex-col justify-center items-center">
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
      "A technology company that builds economic infrastructure for the internet.",
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
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
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
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://trillicorn-technology.vercel.app/",
    imageUrl: trillicorn,
    tech: [IconBrandReact, IconBrandTailwind],
  },
  {
    title: "Itsokyash",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://itsokyash.vercel.app",
    imageUrl: portfolio,
    tech: [IconBrandReact, IconBrandTailwind, IconBrandFramerMotion],
  },
];
