import React from "react";
import Hero from "./components/Hero";
import { FloatingDockDemo } from "./components/FloatingDockDemo";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";

const App = () => {
  return (
    <div className="bg-[#161716]">
      <div className=" fixed bottom-4 left-0 right-0 z-50 flex justify-center">
        <FloatingDockDemo />
      </div>
      <Hero />
      <Projects />
      <TechStack />
    </div>
  );
};

export default App;
