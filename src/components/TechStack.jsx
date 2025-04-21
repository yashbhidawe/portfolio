import React from "react";
import { filterProps, motion } from "motion/react";
import { SiZedindustries } from "react-icons/si";

import {
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
  SiInternetcomputer,
} from "react-icons/si";

const techStackData = {
  frontend: [
    { Icon: SiReact, name: "React.js", color: "#61DAFB" },
    { Icon: SiTypescript, name: "Typescript", color: "#3079c6" },
    { Icon: SiNextdotjs, name: "Next.js", color: "#000000" },
    { Icon: SiRedux, name: "Redux Toolkit", color: "#764ABC" },
    { Icon: SiZedindustries, name: "Zustand", color: "#ffffff" },
    { Icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4" },
    { Icon: SiShadcnui, name: "ShadCN", color: "#000000" },
    { Icon: SiFramer, name: "Framer Motion", color: "#feeb0f" },
    { Icon: SiDaisyui, name: "DaisyUI", color: "#06B6D4" },
    { Icon: SiJavascript, name: "JavaScript (ES6)", color: "#F7DF1E" },
    { Icon: SiHtml5, name: "HTML5", color: "#E34F26" },
    { Icon: SiCss3, name: "CSS3", color: "#1572B6" },
  ],

  backend: [
    { Icon: SiNodedotjs, name: "Node.js", color: "#339933" },
    { Icon: SiExpress, name: "Express.js", color: "#000000" },
    { Icon: SiMongodb, name: "MongoDB", color: "#47A248" },
    { Icon: SiFirebase, name: "Firebase", color: "#FFCA28" },
    { Icon: SiAppwrite, name: "Appwrite", color: "#F02E65" },
    { Icon: SiSocketdotio, name: "Socket.io", color: "#010101" },
  ],

  tools: [
    { Icon: SiGit, name: "Git", color: "#F05032" },
    { Icon: SiGithub, name: "GitHub", color: "#181717" },
    { Icon: SiPostman, name: "Postman", color: "#FF6C37" },
    { Icon: SiFigma, name: "Figma", color: "#F24E1E" },
    { Icon: SiJsonwebtokens, name: "JWT", color: "#000000" },
    { Icon: SiInternetcomputer, name: "REST APIs", color: "#6BA539" },
  ],
};

const TechStack = () => {
  const renderTechSection = (techArray, title) => (
    <div id="tech" className="mt-12 mb-16">
      <h2 className="text-2xl font-semibold text-white mb-6 text-center">
        {title}
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8">
        {techArray.map((tech, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
          >
            <motion.div
              className="w-24 h-24 flex items-center justify-center bg-zinc-800  md:bg-zinc-800  rounded-md mb-2"
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 },
                background: "#000000",
              }}
            >
              <tech.Icon className="w-8 h-8 text-gray-300 transition-colors duration-300" />
            </motion.div>
            <span className="text-sm text-gray-300 text-center">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex justify-center items-center flex-col py-16 px-4">
      <motion.h1
        className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-white to-indigo-300 mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Tech That I've Used!
      </motion.h1>
      <div className="max-w-2xl w-full">
        {renderTechSection(techStackData.frontend, "Frontend")}
        {renderTechSection(techStackData.backend, "Backend")}
        {renderTechSection(techStackData.tools, "Tools & Others")}
      </div>
    </div>
  );
};

export default TechStack;
