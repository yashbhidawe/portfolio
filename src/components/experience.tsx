import { experienceData } from "@/lib/data";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

export default function Experience() {
  return (
    <section className="max-w-2xl mx-auto px-6 py-24 pb-40">
      <div className="w-full border-t border-on-surface/[0.04] mb-20" />
      <div className="mb-12">
        <h2 className="font-display text-headline mb-2 text-on-surface">
          Experience
        </h2>
        <p className="font-body text-sm text-on-surface/40 uppercase tracking-widest leading-loose">
          Recent roles
        </p>
      </div>

      <div className="space-y-0 text-on-surface/80">
        {experienceData.map((item, index) => (
          <div key={index} className="group">
            <div className="flex items-start gap-6 py-8">
              {/* Logo (With Animated Tooltip) */}
              <div className="shrink-0 flex items-center justify-center">
                <AnimatedTooltip
                  items={[
                    {
                      id: index,
                      name: item.company,
                      designation: item.role,
                      initials: item.company.charAt(0),
                    },
                  ]}
                />
              </div>

              {/* Text Info */}
              <div className="pt-1 flex-1">
                <h3 className="font-body text-[0.95rem] font-semibold text-on-surface leading-tight">
                  {item.role} at {item.company}
                </h3>
                <p className="font-body text-xs text-on-surface/40 mt-1 uppercase tracking-wider">
                  {item.title}
                </p>
              </div>
            </div>

            {/* Subtle Divider */}
            {index !== experienceData.length - 1 && (
              <div className="w-full border-b border-on-surface/[0.03] border-dashed" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
