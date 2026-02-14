import React from "react";
import Hero from "./components/Hero";
import { FloatingDockDemo } from "./components/FloatingDockDemo";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import { Experience } from "./components/Experience";
import { GITHUB_USERNAME } from "./data";

const App = () => {
  return (
    <div className="bg-[#161716] min-h-screen">
      <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center">
        <FloatingDockDemo />
      </div>

      <Hero />

      <Experience />
      <Projects />
      <TechStack />

      <section className="mt-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-white mb-6">
            GitHub Activity
          </h2>

          <img
            src={`https://ghchart.rshah.org/2a43a8/${GITHUB_USERNAME}`}
            alt={`${GITHUB_USERNAME} GitHub contributions`}
            className="w-full opacity-80"
          />

          <p className="text-xs text-neutral-500 mt-3">
            2300+ contributions in the last year
          </p>
        </div>
      </section>
      <Contact />
    </div>
  );
};
export default App;
