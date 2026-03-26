"use client";

import dynamic from "next/dynamic";
import { useCallback, useState, useEffect } from "react";
import { motion } from "framer-motion";
import type { Activity } from "react-github-calendar";
import { GITHUB_USERNAME } from "@/lib/data";

const GitHubCalendar = dynamic(() => import("react-github-calendar").then((mod) => mod.GitHubCalendar), {
  ssr: false,
  loading: () => <div className="h-[160px] w-full animate-pulse bg-on-surface/5 rounded-2xl" />,
});

export default function GitHubGraph() {
  const [totalCount, setTotalCount] = useState(0);
  const [todayHours, setTodayHours] = useState<string>("--");

  const GITHUB_THEME = {
    light: ["#f0f1f3", "#7ca481", "#3e6e44", "#254e2a", "#122a15"],
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  };

  const processContributions = useCallback((contributions: Activity[]) => {
    setTimeout(() => {
      const total = contributions
        .map((el) => el.count)
        .reduce((acc, curr) => acc + curr, 0);

      setTotalCount(total);
    }, 0);

    return contributions.slice(91, 365);
  }, []);

  useEffect(() => {
    fetch("/api/coding-time") // Assuming this API exists, otherwise it defaults to 0
      .then((res) => res.json())
      .then((data) => {
        if (data.hours) {
          setTodayHours(data.hours);
        } else {
          setTodayHours("0");
        }
      })
      .catch(() => {
        setTodayHours("0");
      });
  }, []);

  return (
    <section className="max-w-2xl mx-auto px-6 py-24 pb-48">
      {/* Subtle Divider */}
      <div className="w-full border-t border-on-surface/[0.04] mb-20" />

      <div className="mb-12">
        <h2 className="font-display text-[2rem] text-on-surface leading-tight mb-4">
          GitHub
        </h2>
        <a 
          href="https://wakatime.com/@16826cb0-56ce-4a6e-b9c9-768be250881b" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100"
        >
          <img 
            src="https://wakatime.com/badge/user/16826cb0-56ce-4a6e-b9c9-768be250881b.svg" 
            alt="wakatime" 
            className="h-5 w-auto"
          />
        </a>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="relative overflow-hidden grayscale"
      >
        <div 
          className="overflow-x-auto pb-6 no-scrollbar"
        >
          <style>{`
            .no-scrollbar::-webkit-scrollbar {
              display: none !important;
            }
            .no-scrollbar {
              -ms-overflow-style: none !important; /* IE and Edge */
              scrollbar-width: none !important; /* Firefox */
            }
          `}</style>
          <div className="no-scrollbar">
            <GitHubCalendar
              username={GITHUB_USERNAME}
              transformData={processContributions}
              blockSize={11}
              blockMargin={4}
              fontSize={12}
              colorScheme="light"
              theme={GITHUB_THEME}
              showColorLegend={false}
              showTotalCount={false}
            />
          </div>
        </div>

        <div className="flex justify-between items-center text-[0.65rem] text-on-surface/30 font-body uppercase tracking-[0.15em] border-t border-on-surface/[0.03] pt-6">
          <span>{totalCount.toLocaleString()} contributions in the last year</span>
          <div className="flex items-center gap-3">
            <span>Less</span>
            <div className="flex gap-1.5">
              {GITHUB_THEME.light.map((color, i) => (
                <div
                  key={i}
                  className="w-2.5 h-2.5 rounded-[3px] shadow-sm"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            <span>More</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
