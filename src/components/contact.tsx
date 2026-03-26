import { contactInfo } from "@/lib/data";
import Link from "next/link";
import * as SiIcons from "react-icons/si";
import * as FaIcons from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="max-w-2xl mx-auto px-6 py-24 pb-40">
      <div className="w-full border-t border-on-surface/[0.04] mb-20" />
      <div className="mb-12">
        <h2 className="font-display text-headline mb-2 text-on-surface">
          Contact
        </h2>
        <p className="font-body text-sm text-on-surface/40 uppercase tracking-widest leading-loose">
          Get in touch
        </p>
      </div>

      <div className="space-y-12">
        <p className="font-body text-[0.95rem] text-on-surface/70 leading-relaxed max-w-lg">
          I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions. My inbox is always open.
        </p>

        <div className="flex flex-col gap-6">
          {contactInfo.map((contact, index) => {
            const Icon = (SiIcons as any)[contact.icon] || (FaIcons as any)[contact.icon];
            return (
              <div key={index} className="flex items-center gap-6 group w-fit">
                <div 
                  className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center shrink-0 border border-on-surface/[0.03] transition-transform duration-300 group-hover:scale-105"
                  style={{
                    boxShadow: `
                      8px 8px 16px rgba(48, 51, 46, 0.04), 
                      -8px -8px 16px rgba(255, 255, 255, 0.4),
                      inset 3px 3px 6px rgba(255, 255, 255, 0.9),
                      inset -3px -3px 6px rgba(48, 51, 46, 0.02)
                    `,
                  }}
                >
                  {Icon && <Icon className="w-5 h-5 text-on-surface/40 group-hover:text-primary transition-colors duration-300" />}
                </div>
                
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
