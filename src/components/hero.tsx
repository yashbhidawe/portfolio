"use client";
import Image from "next/image";
import { siteConfig } from "@/lib/data";
import heroImage from "@/assets/images/heroImage.png";
import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="max-w-2xl mx-auto h-screen px-6 pt-32 pb-20 md:pt-40 md:pb-28 flex flex-col justify-center">
      {/* Identity card */}
      <motion.div
        className="flex items-center gap-5 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
      >
        <motion.div
          className="w-16 h-16 rounded-md overflow-hidden ambient-shadow shrink-0"
          initial={{ rotate: -6 }}
          animate={{ rotate: -3 }}
          whileHover={{ rotate: 0, scale: 1.06 }}
          transition={{ type: "spring", stiffness: 200, damping: 18 }}
        >
          <Image
            src={heroImage}
            alt={siteConfig.name}
            width={64}
            height={64}
            className="object-cover w-full h-full"
            priority
          />
        </motion.div>
        <div className="space-y-0.5">
          <h2 className="font-body text-sm font-semibold tracking-wide text-on-surface">
            {siteConfig.name}
          </h2>
          <p className="font-body text-xs text-on-surface/40 uppercase tracking-widest">
            {siteConfig.location}
          </p>
        </div>
      </motion.div>

      {/* Headline */}
      <motion.h1
        className="font-display text-[2.5rem] md:text-[3.25rem] leading-[1.15] tracking-tight text-on-surface mb-10 whitespace-pre-line"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease, delay: 0.12 }}
      >
        {siteConfig.headline}
      </motion.h1>

      {/* Bio + CTA */}
      <motion.div
        className="space-y-6 text-on-surface/70 text-[0.95rem] leading-relaxed max-w-lg"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease, delay: 0.24 }}
      >
        <p>
          Building{" "}
          <a
            href={siteConfig.currentCompanyUrl}
            className="text-on-surface underline decoration-on-surface/20 underline-offset-4 hover:decoration-primary transition-colors font-medium"
          >
            {siteConfig.currentCompany}
          </a>{" "}
          as a {siteConfig.currentRole}. {siteConfig.bio}
        </p>

        <div className="flex items-center gap-4 pt-4">
          <motion.a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative px-7 py-3.5 rounded-2xl bg-surface text-[0.85rem] font-bold tracking-wide text-on-surface/80 inline-flex items-center gap-3 group border border-on-surface/[0.03] overflow-hidden"
            style={{
              boxShadow: `
                16px 16px 32px rgba(48, 51, 46, 0.06), 
                -16px -16px 32px rgba(255, 255, 255, 1),
                inset 3px 3px 6px rgba(255, 255, 255, 0.8),
                inset -3px -3px 6px rgba(48, 51, 46, 0.03)
              `,
            }}
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ y: 1, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/50 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <span className="relative z-10">View Resume</span>
            <motion.span
              className="relative z-10 opacity-40"
              initial={false}
              animate={{}}
              whileHover={{ x: 4, opacity: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
            >
              →
            </motion.span>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
