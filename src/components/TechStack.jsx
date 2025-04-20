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
} from "react-icons/si";

const SiRestApi = (props) => (
  <div
    {...props}
    className={`${props.className || ""} flex items-center justify-center`}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width="1em"
      height="1em"
    >
      <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm2.5 12h1.93c.42 0 .79-.23.93-.59l1.69-4.51c.14-.38.1-.76-.11-1.05-.19-.3-.52-.45-.9-.45H9.1c-.42 0-.79.23-.93.59l-1.7 4.51c-.13.38-.1.76.11 1.05.19.3.52.45.92.45zm8 2h1c.55 0 1-.45 1-1v-1h-1c-.55 0-1 .45-1 1v1zm-8-8h1c.55 0 1-.45 1-1V7h-1c-.55 0-1 .45-1 1v1zm14-1c0-.55-.45-1-1-1h-1v1c0 .55.45 1 1 1h1V8zM5 7c-.55 0-1 .45-1 1v1h1c.55 0 1-.45 1-1V7H5zm14 9c0-.55-.45-1-1-1h-1v1c0 .55.45 1 1 1h1v-1zM5 15c-.55 0-1 .45-1 1v1h1c.55 0 1-.45 1-1v-1H5z" />
    </svg>
  </div>
);

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
    { Icon: SiRestApi, name: "REST APIs", color: "#6BA539" },
  ],
};

const TechStack = () => {
  const renderTechSection = (techArray, title) => (
    <div className="mt-12 mb-16">
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
                background: tech.color,
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
        Tech That I Use!
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
