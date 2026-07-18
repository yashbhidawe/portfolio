"use client";
import { useCallback, useRef } from "react";
import { skills } from "@/lib/data";
import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

function playHover() {
  const ctx = new AudioContext();
  const now = ctx.currentTime;

  // Low thump body
  const osc = ctx.createOscillator();
  osc.type = "sine";
  osc.frequency.setValueAtTime(120, now);
  osc.frequency.exponentialRampToValueAtTime(40, now + 0.08);

  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.2, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);

  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(now);
  osc.stop(now + 0.1);
}

export default function Skills() {
  const lastHover = useRef(0);

  const handleMouseEnter = useCallback(() => {
    const now = Date.now();
    if (now - lastHover.current < 80) return;
    lastHover.current = now;
    playHover();
  }, []);

  return (
    <section className="max-w-2xl mx-auto px-6 pt-0 pb-12 md:pb-16">
      <div className="w-full border-t border-on-surface/[0.04] mb-6 md:mb-8" />

      <motion.div
        className="mb-6"
        initial={{ opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease }}
      >
        <h2 className="font-display text-headline mb-2 text-on-surface">
          Skills
        </h2>
        <p className="font-body text-sm text-on-surface/40 uppercase tracking-widest leading-loose">
          Tech stack
        </p>
      </motion.div>

      <div className="flex flex-wrap gap-2.5">
        {skills.map((skill, i) => (
          <motion.span
            key={skill}
            className="px-4 py-2 rounded-lg bg-surface-container-low border border-outline-variant/15 font-body text-sm text-on-surface/70 cursor-default select-none transition-colors hover:bg-surface-container-high hover:text-on-surface hover:border-primary/30"
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.4,
              ease,
              delay: i * 0.03,
            }}
            whileHover={{
              y: -4,
              scale: 1.05,
              boxShadow: "0 4px 20px -4px rgba(90, 106, 140, 0.25)",
            }}
            onMouseEnter={handleMouseEnter}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
