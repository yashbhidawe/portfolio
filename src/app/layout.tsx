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
    "A digital archive of high-impact engineering, AI tools, and polished interfaces.",
  metadataBase: new URL("https://itsokyash.vercel.app"),
  openGraph: {
    title: "Yash Bhidawe — Full-Stack Engineer",
    description:
      "A digital archive of high-impact engineering, AI tools, and polished interfaces.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${newsreader.variable} ${publicSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
