import { projects } from "@/lib/data";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";
import { SiGithub } from "react-icons/si";

export default function Projects() {
  return (
    <section className="max-w-2xl mx-auto px-6 pt-0 pb-16 md:pb-20">
      <div className="w-full border-t border-on-surface/[0.04] mb-8 md:mb-10" />
      <div className="mb-8">
        <h2 className="font-display text-headline mb-2 text-on-surface">
          Projects
        </h2>
        <p className="font-body text-sm text-on-surface/40 uppercase tracking-widest leading-loose">
          Selected work
        </p>
      </div>

      <div className="space-y-0 text-on-surface/80">
        {projects.map((project, index) => (
          <div key={index} className="group">
            <div className="flex items-start gap-5 py-6">
              {/* Logo (With Animated Tooltip) */}
              <div className="shrink-0 flex items-center justify-center mt-1 group-hover:scale-105 transition-transform duration-300">
                <Link href={project.link} target="_blank" rel="noopener noreferrer">
                  <AnimatedTooltip
                    items={[
                      {
                        id: index,
                        name: project.title,
                        designation: "View Project",
                        initials: project.title.charAt(0).toUpperCase(),
                      },
                    ]}
                  />
                </Link>
              </div>

              {/* Text Info */}
              <div className="pt-1 flex-1">
                <div className="flex items-center gap-3">
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 group-hover:text-primary transition-colors"
                  >
                    <h3 className="font-body text-[0.95rem] font-semibold text-on-surface leading-tight">
                      {project.title}
                    </h3>
                    <IconArrowUpRight className="w-3.5 h-3.5 text-on-surface/40 group-hover:text-primary transition-colors" />
                  </Link>
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-on-surface/30 hover:text-on-surface transition-colors mt-0.5"
                    >
                      <SiGithub className="w-4 h-4" />
                    </Link>
                  )}
                </div>
                <p className="font-body text-sm text-on-surface/60 mt-2.5 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-4 mt-4">
                  {project.tech.map((Icon, i) => (
                    <div
                      key={i}
                      className="text-on-surface/40 hover:text-on-surface transition-colors duration-300"
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Subtle Divider */}
            {index !== projects.length - 1 && (
              <div className="w-full border-b border-on-surface/[0.03] border-dashed" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
