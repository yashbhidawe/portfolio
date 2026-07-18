"use client";
import { useTheme } from "@/lib/theme-context";
import { useEffect, useRef, useState } from "react";

export default function ThemeTransition() {
  const { animation } = useTheme();
  const { phase, origin, targetTheme } = animation;
  const overlayRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  const darkBg = "#1a1c1e";
  const lightBg = "#fbf9f5";

  useEffect(() => {
    if (phase === "wipe-in") {
      setVisible(true);
    }
  }, [phase]);

  useEffect(() => {
    const el = overlayRef.current;
    if (!el) return;

    if (phase === "wipe-in") {
      // Calculate max radius to cover entire viewport from origin
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const maxR = Math.sqrt(vw * vw + vh * vh) + 200;

      el.style.clipPath = `circle(0% at ${origin.x}px ${origin.y}px)`;
      el.style.opacity = "1";

      // Force reflow then animate
      el.offsetHeight;
      el.style.transition = "clip-path 400ms cubic-bezier(0.22, 1, 0.36, 1)";
      el.style.clipPath = `circle(${maxR}px at ${origin.x}px ${origin.y}px)`;
    } else if (phase === "swap") {
      // Hold at full size, no transition
      el.style.transition = "none";
    } else if (phase === "wipe-out") {
      // Fade out the overlay
      el.style.transition = "opacity 400ms cubic-bezier(0.22, 1, 0.36, 1)";
      el.style.opacity = "0";
    } else if (phase === "idle") {
      setVisible(false);
      el.style.transition = "none";
    }
  }, [phase, origin]);

  if (!visible && phase === "idle") return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] pointer-events-none theme-transition-overlay"
      style={{
        backgroundColor: targetTheme === "dark" ? darkBg : lightBg,
        willChange: "clip-path, opacity",
      }}
    />
  );
}
