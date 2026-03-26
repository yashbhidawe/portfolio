"use client";
import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "motion/react";

export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number;
    name: string;
    designation: string;
    initials: string;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 60, damping: 20 }; // Softer, more damped spring
  const x = useMotionValue(0);

  // Reduced intensity for rotation and translation (minimal movement)
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-15, 15]), 
    springConfig
  );
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-20, 20]), 
    springConfig
  );

  const handleMouseMove = (event: any) => {
    const halfWidth = event.currentTarget.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <>
      {items.map((item) => (
        <div
          className="group relative"
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
          onMouseMove={handleMouseMove}
        >
          <AnimatePresence mode="popLayout">
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }} // Softer entry (less pop)
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 100, // Reduced stiffness for smoother feel
                    damping: 15,
                  },
                }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-16 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center justify-center rounded-md bg-on-surface px-4 py-2 text-xs shadow-xl"
              >
                <div className="absolute inset-x-10 -bottom-px z-30 h-px w-[20%] bg-gradient-to-r from-transparent via-primary to-transparent" />
                <div className="absolute -bottom-px left-10 z-30 h-px w-[40%] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                <div className="relative z-30 text-base font-bold text-surface">
                  {item.name}
                </div>
                <div className="text-xs text-surface/80">{item.designation}</div>
              </motion.div>
            )}
          </AnimatePresence>

          <div
            className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center shrink-0 border border-on-surface/[0.03] transition-transform duration-300 group-hover:scale-105 group-hover:z-30 relative cursor-pointer"
            style={{
              boxShadow: `
                8px 8px 16px rgba(48, 51, 46, 0.04), 
                -8px -8px 16px rgba(255, 255, 255, 0.8),
                inset 3px 3px 6px rgba(255, 255, 255, 0.9),
                inset -3px -3px 6px rgba(48, 51, 46, 0.02)
              `,
            }}
          >
            <span className="font-body font-bold text-on-surface/60">
              {item.initials}
            </span>
          </div>
        </div>
      ))}
    </>
  );
};
