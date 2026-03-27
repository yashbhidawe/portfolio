import { contactInfo } from "@/lib/data";
import Link from "next/link";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

export default function Contact() {
  return (
    <section id="contact" className="max-w-2xl mx-auto px-6 pt-0 pb-16 md:pb-20">
      <div className="w-full border-t border-on-surface/[0.04] mb-8 md:mb-10" />
      <div className="mb-8">
        <h2 className="font-display text-headline mb-2 text-on-surface">
          Contact
        </h2>
        <p className="font-body text-sm text-on-surface/40 uppercase tracking-widest leading-loose">
          Get in touch
        </p>
      </div>

      <div className="space-y-8">
        <p className="font-body text-[0.95rem] text-on-surface/70 leading-relaxed max-w-lg">
          I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions. My inbox is always open.
        </p>

        <div className="flex flex-col gap-5">
          {contactInfo.map((contact, index) => {
            return (
              <div key={index} className="flex items-center gap-6 group w-fit">
                <AnimatedTooltip
                  items={[
                    {
                      id: index,
                      name: contact.title,
                      designation: "Get in touch",
                      initials: contact.title.charAt(0).toUpperCase(),
                    },
                  ]}
                />

                <Link
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-[0.95rem] font-semibold text-on-surface/80 hover:text-primary transition-colors pb-0.5 border-b border-transparent hover:border-primary/30"
                >
                  {contact.title}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
