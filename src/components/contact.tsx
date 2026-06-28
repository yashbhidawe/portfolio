"use client";
import { contactInfo } from "@/lib/data";
import Link from "next/link";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { SiGmail, SiX, SiGithub, SiInstagram } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import type { ComponentType } from "react";
import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

const iconMap: Record<string, ComponentType<{ size?: number; className?: string }>> = {
  SiGmail,
  SiX,
  SiGithub,
  FaLinkedin,
  SiInstagram,
};

export default function Contact() {
  return (
    <section id="contact" className="max-w-2xl mx-auto px-6 pt-0 pb-16 md:pb-20">
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
          Contact
        </h2>
        <p className="font-body text-sm text-on-surface/40 uppercase tracking-widest leading-loose">
          Get in touch
        </p>
      </motion.div>

      <div className="space-y-8">
        <motion.p
          className="font-body text-[0.95rem] text-on-surface/70 leading-relaxed max-w-lg"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease, delay: 0.08 }}
        >
          I&apos;m always open to discussing new projects, creative ideas or
          opportunities to be part of your visions. My inbox is always open.
        </motion.p>

        <div className="flex flex-col gap-5">
          {contactInfo.map((contact, index) => {
            return (
              <motion.div
                key={index}
                className="flex items-center gap-6 group w-fit"
                initial={{ opacity: 0, x: -14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.45,
                  ease,
                  delay: index * 0.07,
                }}
              >
                <AnimatedTooltip
                  items={[
                    {
                      id: index,
                      name: contact.title,
                      designation: "Get in touch",
                      initials: contact.title.charAt(0).toUpperCase(),
                      icon: iconMap[contact.icon],
                    },
                  ]}
                />

                {/* Animated underline sweep via CSS-only (no hydration mismatch) */}
                <Link
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link font-body text-[0.95rem] font-semibold text-on-surface/80 hover:text-primary transition-colors pb-0.5"
                >
                  {contact.title}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
