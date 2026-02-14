import React from "react";
import * as Icons from "react-icons/si";
import { motion } from "framer-motion";
import { contactInfo } from "../data";

const Contact = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div
      id="contact"
      className="flex flex-col justify-center items-center py-16 px-4"
    >
      <motion.h1
        className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-white to-indigo-300 mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Wanna Talk?
      </motion.h1>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl w-full"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {contactInfo.map((contact, index) => {
          const IconComponent = Icons[contact.icon];
          return (
            <motion.div key={index} className="w-full" variants={item}>
              <motion.a
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-zinc-800 hover:bg-zinc-700 p-6 rounded-lg text-white transition-all duration-300"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: contact.color,
                }}
                whileTap={{ scale: 0.95 }}
                aria-label={contact.title}
              >
                {IconComponent && <IconComponent className="w-8 h-8" />}
                <h2 className="text-xl font-medium">{contact.title}</h2>
              </motion.a>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.p
        className="mt-12 text-gray-400 text-center max-w-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Feel free to reach out through any of these platforms. I'm always open
        to discussing new projects, creative ideas, or opportunities to be part
        of your vision.
      </motion.p>
    </div>
  );
};

export default Contact;
