import React from "react";
import { motion } from "framer-motion";
import {
  SiDocker,
  SiExpo,
  SiFastapi,
  SiNestjs,
  SiOpencv,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiFramer,
  SiDaisyui,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiAppwrite,
  SiSocketdotio,
  SiGit,
  SiGithub,
  SiPostman,
  SiFigma,
  SiJsonwebtokens,
  SiShadcnui,
} from "react-icons/si";
import { IconBrandReactNative } from "@tabler/icons-react";

const allTechStack = [
  { Icon: SiReact, name: "React.js", color: "#61DAFB" },
  { Icon: SiTypescript, name: "Typescript", color: "#3079c6" },
  { Icon: SiNextdotjs, name: "Next.js", color: "#ffffff" },
  { Icon: SiRedux, name: "Redux Toolkit", color: "#764ABC" },
  { Icon: SiExpo, name: "Expo", color: "#000020" },
  { Icon: IconBrandReactNative, name: "React Native", color: "#61DAFB" },
  { Icon: SiShadcnui, name: "ShadCN", color: "#000000" },
  { Icon: SiFramer, name: "Framer Motion", color: "#ff0055" },
  { Icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  { Icon: SiHtml5, name: "HTML5", color: "#E34F26" },
  { Icon: SiCss3, name: "CSS3", color: "#1572B6" },
  { Icon: SiNodedotjs, name: "Node.js", color: "#339933" },
  { Icon: SiPython, name: "Python", color: "#3776AB" },
  { Icon: SiExpress, name: "Express.js", color: "#000000" },
  { Icon: SiNestjs, name: "NestJS", color: "#E0234E" },
  { Icon: SiFastapi, name: "FastAPI", color: "#009688" },
  { Icon: SiFirebase, name: "Firebase", color: "#FFCA28" },
  { Icon: SiMongodb, name: "MongoDB", color: "#47A248" },
  { Icon: SiPostgresql, name: "PostgreSQL", color: "#336791" },
  { Icon: SiGit, name: "Git", color: "#F05032" },
  { Icon: SiGithub, name: "GitHub", color: "#181717" },
  { Icon: SiPostman, name: "Postman", color: "#FF6C37" },
  { Icon: SiFigma, name: "Figma", color: "#F24E1E" },
  { Icon: SiOpencv, name: "OpenCV", color: "#5C3EE8" },
  { Icon: SiDocker, name: "Docker", color: "#2496ED" },
];

const TechStack = () => {
  const duplicatedTech = [...allTechStack, ...allTechStack];

  return (
    <div className="max-w-5xl mx-auto overflow-hidden px-8 flex flex-col justify-center items-center relative">
      <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
        Tools that I have used
      </h2>

      <div className="relative w-full">
        {/* Main scrolling stripe */}
        <motion.div
          className="flex gap-6 py-6"
          animate={{
            x: [0, "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
        >
          {duplicatedTech.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-6 py-3 bg-zinc-800 rounded-full border border-neutral-700 hover:border-neutral-500 transition-colors whitespace-nowrap flex-shrink-0"
              style={{
                boxShadow: `0 0 20px ${tech.color}20`,
              }}
            >
              <tech.Icon className="text-2xl" style={{ color: tech.color }} />
              <span className="text-white font-medium">{tech.name}</span>
            </div>
          ))}
        </motion.div>

        {/* Second row - opposite direction */}
        <motion.div
          className="flex gap-6 py-6 mt-6"
          animate={{
            x: ["-50%", 0],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
        >
          {duplicatedTech.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-6 py-3 bg-neutral-900 rounded-full border border-neutral-700 hover:border-neutral-500 transition-colors whitespace-nowrap flex-shrink-0"
              style={{
                boxShadow: `0 0 20px ${tech.color}20`,
              }}
            >
              <tech.Icon className="text-2xl" style={{ color: tech.color }} />
              <span className="text-white font-medium">{tech.name}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Gradient overlays for smooth edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#161716] to-transparent pointer-events-none z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#161716] to-transparent pointer-events-none z-10" />
    </div>
  );
};

export default TechStack;
