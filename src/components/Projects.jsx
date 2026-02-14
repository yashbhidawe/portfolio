import { HoverEffect } from "./ui/card-hover-effect";
import { projects } from "../data";

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
