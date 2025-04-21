import React from "react";
import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/starts-background";
import heroImage2 from "../assets/images/heroImage-2.png";
import { ArrowDown, ArrowDown01Icon, Download, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const skillBadgeVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 1.2 + i * 0.1,
        type: "spring",
        damping: 10,
        stiffness: 80,
      },
    }),
  };

  const skills = ["React", "Node.js", "MongoDB", "TypeScript"];

  return (
    <div className="h-screen rounded-md bg-neutral-900 relative w-full overflow-hidden">
      <ShootingStars minSpeed={30} starWidth={30} trailColor={"#1C39BB"} />
      <StarsBackground />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        <motion.div
          className="max-w-5xl w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 md:w-3/5">
              <motion.h2
                variants={itemVariants}
                className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-white to-indigo-300"
              >
                Hi, I am Yash!
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl text-gray-300 max-w-lg"
              >
                Full-stack developer turning ideas into interactive, scalable
                digital solutions with a passion for clean code and innovative
                user experiences.
              </motion.p>

              <motion.div variants={itemVariants} className="flex gap-4 pt-6">
                <a
                  href="https://drive.google.com/file/d/1JNDLqhHBwqM8fT7EXypclXkh96I8g9W1/view?usp=sharing"
                  target="_blank"
                >
                  <motion.button
                    className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white px-6 py-3 rounded-full font-medium transition-all shadow-md hover:shadow-indigo-500/50 cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Download size={18} />
                    Download CV
                  </motion.button>
                </a>

                <a href="#contact">
                  {" "}
                  <motion.button
                    className="flex items-center gap-2 bg-transparent border-2 border-gray-500 hover:border-white text-gray-300 hover:text-white px-6 py-3 rounded-full font-medium transition-all cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail size={18} />
                    Hire Me
                  </motion.button>
                </a>
              </motion.div>

              <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-4">
                {skills.map((tech, index) => (
                  <motion.span
                    key={tech}
                    custom={index}
                    variants={skillBadgeVariants}
                    className="px-3 py-1 bg-neutral-800 text-xs text-blue-300 rounded-full"
                    whileHover={{ scale: 1.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            <motion.div variants={itemVariants} className="md:w-2/5 relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full opacity-70 blur-sm animate-pulse"></div>
              <div className="relative">
                <img
                  src={heroImage2}
                  alt="Yash's profile"
                  className="rounded-full object-cover w-64 h-64 border-2 border-blue-400"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
