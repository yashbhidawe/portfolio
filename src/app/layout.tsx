import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Newsreader, Public_Sans } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yash Bhidawe — Full-Stack Engineer",
  description:
    "Yash Bhidawe is a Full-Stack Software Engineer building scalable systems and pixel-perfect UIs. Explore my digital archive of MERN & FastAPI apps and AI tools.",
  keywords: [
    "Yash Bhidawe",
    "Full-Stack Engineer",
    "Software Engineer",
    "Pune",
    "React",
    "Next.js",
    "FastAPI",
    "TypeScript",
    "MERN",
    "AI Tools",
  ],
  authors: [{ name: "Yash Bhidawe", url: "https://itsokyash.online" }],
  creator: "Yash Bhidawe",
  metadataBase: new URL("https://itsokyash.online"),
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Yash Bhidawe — Full-Stack Engineer",
    description:
      "Yash Bhidawe is a Full-Stack Software Engineer building scalable systems and pixel-perfect UIs. Explore my digital archive of MERN & FastAPI apps and AI tools.",
    url: "https://itsokyash.online",
    siteName: "Yash Bhidawe Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://itsokyash.online/og-image.png",
        width: 1200,
        height: 630,
        alt: "Yash Bhidawe — Full-Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yash Bhidawe — Full-Stack Engineer",
    description:
      "Yash Bhidawe is a Full-Stack Software Engineer building scalable systems and pixel-perfect UIs. Explore my digital archive of MERN & FastAPI apps and AI tools.",
    creator: "@itsokyash_",
    images: ["https://itsokyash.online/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Yash Bhidawe",
    url: "https://itsokyash.online",
    jobTitle: "Software Engineer",
    worksFor: {
      "@type": "Organization",
      name: "EaseMyExpo",
    },
    sameAs: [
      "https://github.com/yashbhidawe",
      "https://linkedin.com/in/itsokyash",
      "https://x.com/itsokyash_",
    ],
  };

  return (
    <html lang="en" className={`${newsreader.variable} ${publicSans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
