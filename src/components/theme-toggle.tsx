"use client";
import { useRef, useCallback } from "react";
import { useTheme } from "@/lib/theme-context";
import { motion, AnimatePresence } from "motion/react";

function playClick() {
  const ctx = new AudioContext();
  const now = ctx.currentTime;

  // Noise burst for the sharp mechanical "clack"
  const bufferSize = ctx.sampleRate * 0.04;
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / bufferSize, 20);
  }
  const noise = ctx.createBufferSource();
  noise.buffer = buffer;

  const bandpass = ctx.createBiquadFilter();
  bandpass.type = "bandpass";
  bandpass.frequency.value = 3000;
  bandpass.Q.value = 1.5;

  const noiseGain = ctx.createGain();
  noiseGain.gain.setValueAtTime(0.4, now);
  noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

  noise.connect(bandpass);
  bandpass.connect(noiseGain);
  noiseGain.connect(ctx.destination);
  noise.start(now);

  // Low thunk for the mechanical body
  const thunk = ctx.createOscillator();
  thunk.type = "sine";
  thunk.frequency.setValueAtTime(150, now);
  thunk.frequency.exponentialRampToValueAtTime(50, now + 0.03);

  const thunkGain = ctx.createGain();
  thunkGain.gain.setValueAtTime(0.25, now);
  thunkGain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

  thunk.connect(thunkGain);
  thunkGain.connect(ctx.destination);
  thunk.start(now);
  thunk.stop(now + 0.05);
}

export default function ThemeToggle() {
  const { theme, toggle, animation } = useTheme();
  const btnRef = useRef<HTMLButtonElement>(null);
  const isAnimating = animation.phase !== "idle";

  const handleClick = useCallback(() => {
    if (isAnimating) return;
    const btn = btnRef.current;
    if (!btn) return;

    playClick();

    const rect = btn.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    toggle({ x, y });
  }, [toggle, isAnimating]);

  return (
    <button
      ref={btnRef}
      onClick={handleClick}
      disabled={isAnimating}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className="relative w-10 h-10 rounded-xl bg-surface-container-low flex items-center justify-center border border-on-surface/[0.06] transition-colors hover:bg-surface-container-high disabled:opacity-60"
      style={{
        boxShadow: `
          4px 4px 10px var(--shadow-dark)
        `,
      }}
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === "light" ? (
          <motion.svg
            key="sun"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-on-surface/60"
            initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
          </motion.svg>
        ) : (
          <motion.svg
            key="moon"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-on-surface/60"
            initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
          </motion.svg>
        )}
      </AnimatePresence>
    </button>
  );
}
