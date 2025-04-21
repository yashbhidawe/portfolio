import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import { SiLetterboxd, SiSocketdotio } from "react-icons/si";
import { Contact } from "lucide-react";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-white dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Projects",
      icon: (
        <IconTerminal2 className="h-full w-full text-white dark:text-neutral-300" />
      ),
      href: "#projects",
    },
    {
      title: "Experience",
      icon: (
        <SiLetterboxd className="h-full w-full text-white dark:text-neutral-300" />
      ),
      href: "#experience",
    },
    {
      title: "Tech-Stack",
      icon: (
        <SiSocketdotio className="h-full w-full text-white dark:text-neutral-300" />
      ),
      href: "#tech",
    },

    {
      title: "Contact",
      icon: (
        <Contact className="h-full w-full text-white dark:text-neutral-300" />
      ),
      href: "#contact",
    },

    {
      title: "X(Twitter)",
      icon: (
        <IconBrandX className="h-full w-full text-white dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-white dark:text-neutral-300" />
      ),
      href: "https://www.github.com/yashbhidawe",
    },
  ];
  return (
    <div className="flex w-full  ">
      <FloatingDock
        // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
