"use client";
import { createContext, useContext, useEffect, useState, useCallback, useRef, type ReactNode } from "react";

type Theme = "light" | "dark";
type AnimationPhase = "idle" | "wipe-in" | "swap" | "wipe-out";

interface ThemeContextValue {
  theme: Theme;
  toggle: (origin: { x: number; y: number }) => void;
  animation: {
    phase: AnimationPhase;
    origin: { x: number; y: number };
    targetTheme: Theme;
  };
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "light",
  toggle: () => {},
  animation: { phase: "idle", origin: { x: 0, y: 0 }, targetTheme: "dark" },
});

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);
  const [animation, setAnimation] = useState<ThemeContextValue["animation"]>({
    phase: "idle",
    origin: { x: 0, y: 0 },
    targetTheme: "dark",
  });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme") as Theme | null;
    if (stored) {
      setTheme(stored);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  const toggle = useCallback(
    (origin: { x: number; y: number }) => {
      const next: Theme = theme === "light" ? "dark" : "light";

      // Phase 1: wipe in (circle expands from origin)
      setAnimation({ phase: "wipe-in", origin, targetTheme: next });

      // Phase 2: swap theme variables at peak
      rafRef.current = window.setTimeout(() => {
        setTheme(next);
        setAnimation({ phase: "swap", origin, targetTheme: next });

        // Phase 3: wipe out (overlay fades away)
        rafRef.current = window.setTimeout(() => {
          setAnimation({ phase: "wipe-out", origin, targetTheme: next });

          // Phase 4: back to idle
          rafRef.current = window.setTimeout(() => {
            setAnimation({ phase: "idle", origin, targetTheme: next });
          }, 500);
        }, 50);
      }, 400);
    },
    [theme]
  );

  useEffect(() => {
    return () => clearTimeout(rafRef.current);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggle, animation }}>
      {children}
    </ThemeContext.Provider>
  );
}
