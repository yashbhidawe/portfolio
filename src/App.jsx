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

      {/* Introduction */}
      <Hero />

      {/* Skills showcase */}
      <TechStack />

      {/* Professional background */}
      <Experience />

      {/* Work showcase */}
      <Projects />

      {/* GitHub Activity */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            GitHub Activity
          </h2>

          <div className="bg-neutral-900 rounded-2xl p-6 border border-neutral-800">
            <img
              src={`https://ghchart.rshah.org/2a43a8/${GITHUB_USERNAME}`}
              alt={`${GITHUB_USERNAME} GitHub contributions`}
              className="w-full opacity-80 rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Contact/Footer */}
      <Contact />
    </div>
  );
};

export default App;
