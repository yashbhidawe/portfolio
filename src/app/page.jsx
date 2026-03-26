import React from "react";
import { projects, experienceData } from "./data";

const Tile = ({ children, className = "", surface = "surface-container-low", span = "col-span-1" }) => (
  <div className={`p-8 md:p-12 rounded-sm ${surface} ${span} ${className} ambient-shadow flex flex-col justify-between`}>
    {children}
  </div>
);

const Page = () => {
  return (
    <div className="min-h-screen bg-surface font-body text-on-surface relative selection:bg-primary/20 selection:text-primary">
      {/* Texture Filter Overlays */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] z-[9999] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      <main className="max-w-6xl mx-auto p-6 md:p-16 lg:p-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* THE MANIFESTO: Hero Title (Span 2 to create asymmetry) */}
          <Tile span="md:col-span-2 md:row-span-2" surface="surface-container-lowest" className="pt-24 border-l-2 border-primary/10">
            <div>
              <span className="archivist-label text-primary/40 mb-6 block">The Manifesto</span>
              <h1 className="font-display text-display-lg leading-[1.1] text-on-surface mb-8">
                Building with the precision of an archivist.
              </h1>
              <p className="text-body-lg text-on-surface/80 max-w-sm leading-relaxed">
                I am Yash, a full-stack engineer and digital curator. Currently crafting high-impact AI tools for the next generation of creators.
              </p>
            </div>
            <div className="mt-16">
              <button className="archivist-ink-paper text-on-primary px-10 py-4 rounded-sm font-body font-bold transition-transform hover:-translate-y-0.5 active:translate-y-0">
                Contact Archive
              </button>
            </div>
          </Tile>

          {/* THE CHRONICLES: Single High-Impact Experience */}
          <Tile className="md:col-span-1 bg-surface-container-low">
             <div className="space-y-4">
                <span className="archivist-label text-on-surface/30 block mb-6">Latest Update</span>
                <div className="space-y-2">
                  <h3 className="font-display text-headline">{experienceData[0].company}</h3>
                   <span className="font-body text-label-sm opacity-50 block uppercase tracking-widest">{experienceData[0].title}</span>
                </div>
                <p className="font-body text-on-surface/70 text-sm italic leading-loose">
                  {experienceData[0].description}
                </p>
             </div>
          </Tile>

          {/* THE EVIDENCE: Minimal Project List */}
          <Tile span="md:col-span-1" surface="surface-container-highest">
             <div className="space-y-6">
                <span className="archivist-label text-on-surface/30 block">The Evidence</span>
                <div className="space-y-4">
                  {projects.slice(0, 3).map((project, idx) => (
                    <a key={idx} href={project.link} className="group block py-2">
                      <h4 className="font-display text-body-lg group-hover:text-primary transition-colors">{project.title}</h4>
                      <p className="text-sm opacity-40 uppercase tracking-widest mt-1">Review Entry #0{idx+1}</p>
                    </a>
                  ))}
                </div>
             </div>
          </Tile>

        </div>
      </main>
    </div>
  );
};

export default Page;