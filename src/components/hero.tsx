import Image from "next/image";
import { siteConfig } from "@/lib/data";
import heroImage from "@/assets/images/heroImage.png";

export default function Hero() {
  return (
    <section className="max-w-2xl mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="flex items-center gap-5 mb-12">
        <div className="w-16 h-16 rounded-md overflow-hidden ambient-shadow rotate-[-3deg] hover:rotate-0 transition-transform duration-500 shrink-0">
          <Image
            src={heroImage}
            alt={siteConfig.name}
            width={64}
            height={64}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <div className="space-y-0.5">
          <h2 className="font-body text-sm font-semibold tracking-wide text-on-surface">
            {siteConfig.name}
          </h2>
          <p className="font-body text-xs text-on-surface/40 uppercase tracking-widest">
            {siteConfig.location}
          </p>
        </div>
      </div>

      <h1 className="font-display text-[2.5rem] md:text-[3.25rem] leading-[1.15] tracking-tight text-on-surface mb-10 whitespace-pre-line">
        {siteConfig.headline}
      </h1>

      <div className="space-y-6 text-on-surface/70 text-[0.95rem] leading-relaxed max-w-lg">
        <p>
          Building  <a
            href={siteConfig.currentCompanyUrl}
            className="text-on-surface underline decoration-on-surface/20 underline-offset-4 hover:decoration-primary transition-colors font-medium"
          >
            {siteConfig.currentCompany}
          </a> as a {siteConfig.currentRole}
         
          . {siteConfig.bio}
        </p>

        <div className="flex items-center gap-4 pt-4">
          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-2xl bg-surface text-[0.85rem] font-semibold text-on-surface/80 transition-all duration-300 active:scale-95 inline-flex items-center gap-2 group"
            style={{
              boxShadow: `
                12px 12px 24px rgba(48, 51, 46, 0.04), 
                -12px -12px 24px rgba(255, 255, 255, 0.8),
                inset 4px 4px 8px rgba(255, 255, 255, 0.9),
                inset -4px -4px 8px rgba(48, 51, 46, 0.02)
              `,
            }}
          >
            <span>View Resume</span>
            <span className="opacity-40 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
