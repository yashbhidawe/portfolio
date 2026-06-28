"use client";
import { projects } from "@/lib/data";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";
import { SiGithub } from "react-icons/si";
import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Projects() {
  return (
    <section className="max-w-2xl mx-auto px-6 pt-0 pb-16 md:pb-20">
      <div className="w-full border-t border-on-surface/[0.04] mb-8 md:mb-10" />

      {/* Section heading */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease }}
      >
        <h2 className="font-display text-headline mb-2 text-on-surface">
          Projects
        </h2>
        <p className="font-body text-sm text-on-surface/40 uppercase tracking-widest leading-loose">
          Selected work
        </p>
      </motion.div>

      <div className="space-y-0 text-on-surface/80">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.5,
              ease,
              delay: index * 0.07,
            }}
          >
            <div className="flex items-start gap-5 py-6 rounded-xl transition-colors duration-300 group-hover:bg-on-surface/[0.018] -mx-3 px-3">
              {/* Logo (With Animated Tooltip) */}
              <div className="shrink-0 flex items-center justify-center mt-1">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -4 }}
                  transition={{ type: "spring", stiffness: 260, damping: 16 }}
                >
                  <Link href={project.link} target="_blank" rel="noopener noreferrer">
                    <AnimatedTooltip
                      items={[
                        {
                          id: index,
                          name: project.title,
                          designation: "View Project",
                          initials: project.title.charAt(0).toUpperCase(),
                        },
                      ]}
                    />
                  </Link>
                </motion.div>
              </div>

              {/* Text Info */}
              <div className="pt-1 flex-1">
                <div className="flex items-center gap-3">
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 group-hover:text-primary transition-colors"
                  >
                    <h3 className="font-body text-[0.95rem] font-semibold text-on-surface leading-tight group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <motion.span
                      className="text-on-surface/40 group-hover:text-primary transition-colors"
                      whileHover={{ x: 2, y: -2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    >
                      <IconArrowUpRight className="w-3.5 h-3.5" />
                    </motion.span>
                  </Link>
                  {project.github && (
                    <motion.span
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 18 }}
                    >
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-on-surface/30 hover:text-on-surface transition-colors mt-0.5 inline-block"
                      >
                        <SiGithub className="w-4 h-4" />
                      </Link>
                    </motion.span>
                  )}
                </div>
                <p className="font-body text-sm text-on-surface/60 mt-2.5 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-4 mt-4">
                  {project.tech.map((Icon, i) => (
                    <motion.div
                      key={i}
                      className="text-on-surface/40 hover:text-on-surface transition-colors duration-300 cursor-default"
                      whileHover={{ scale: 1.3, y: -2 }}
                      transition={{ type: "spring", stiffness: 350, damping: 16 }}
                    >
                      <Icon className="w-4 h-4" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Subtle Divider */}
            {index !== projects.length - 1 && (
              <div className="w-full border-b border-on-surface/[0.03] border-dashed" />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
