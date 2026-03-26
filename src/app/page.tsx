import Hero from "@/components/hero";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import GitHubGraph from "@/components/github-graph";

export default function Page() {
  return (
    <div className="min-h-screen bg-surface selection:bg-primary/20 selection:text-primary">
      <Hero />
      <Experience />
      <Projects />
      <GitHubGraph />
    </div>
  );
}
