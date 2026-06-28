"use client";
import { experienceData } from "@/lib/data";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Experience() {
  return (
    <section className="max-w-2xl mx-auto px-6 pt-0 pb-12 md:pb-16">
      <div className="w-full border-t border-on-surface/[0.04] mb-6 md:mb-8" />

      {/* Section heading */}
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease }}
      >
        <h2 className="font-display text-headline mb-2 text-on-surface">
          Experience
        </h2>
        <p className="font-body text-sm text-on-surface/40 uppercase tracking-widest leading-loose">
          Recent roles
        </p>
      </motion.div>

      <div className="space-y-0 text-on-surface/80">
        {experienceData.map((item, index) => (
          <motion.div
            key={index}
            className="group"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.5,
              ease,
              delay: index * 0.08,
            }}
          >
            <div className="flex items-start gap-4 py-5">
              {/* Logo (With Animated Tooltip) */}
              <div className="shrink-0 flex items-center justify-center">
                <AnimatedTooltip
                  items={[
                    {
                      id: index,
                      name: item.company,
                      designation: item.role,
                      initials: item.company.charAt(0),
                    },
                  ]}
                />
              </div>

              {/* Text Info */}
              <div className="flex-1">
                <h3 className="font-body text-[0.95rem] font-semibold text-on-surface leading-tight group-hover:text-primary transition-colors duration-300">
                  {item.role} at {item.company}
                </h3>
                <p className="font-body text-xs text-on-surface/40 mt-1 uppercase tracking-wider">
                  {item.title}
                </p>
              </div>

              {/* Subtle right-arrow indicator */}
              <span
                className="text-on-surface/20 text-sm self-center opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out"
                aria-hidden
              >
                →
              </span>
            </div>

            {/* Subtle Divider */}
            {index !== experienceData.length - 1 && (
              <div className="w-full border-b border-on-surface/[0.03] border-dashed" />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
