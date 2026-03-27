import Image from "next/image";
import { siteConfig } from "@/lib/data";
import heroImage from "@/assets/images/heroImage.png";

export default function Hero() {
  return (
    <section className="max-w-2xl mx-auto h-screen px-6 pt-32 pb-20 md:pt-40 md:pb-28 flex flex-col justify-center">
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
            className="relative px-7 py-3.5 rounded-2xl bg-surface text-[0.85rem] font-bold tracking-wide text-on-surface/80 transition-all duration-400 ease-out hover:-translate-y-1 hover:text-primary active:translate-y-0.5 active:scale-95 inline-flex items-center gap-3 group border border-on-surface/[0.03] overflow-hidden"
            style={{
              boxShadow: `
                16px 16px 32px rgba(48, 51, 46, 0.06), 
                -16px -16px 32px rgba(255, 255, 255, 1),
                inset 3px 3px 6px rgba(255, 255, 255, 0.8),
                inset -3px -3px 6px rgba(48, 51, 46, 0.03)
              `,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/50 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <span className="relative z-10">View Resume</span>
            <span className="relative z-10 opacity-40 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
