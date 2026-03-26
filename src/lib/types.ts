import type { StaticImageData } from "next/image";
import type { ComponentType } from "react";

export interface Project {
  title: string;
  description: string;
  link: string;
  imageUrl: StaticImageData;
  tech: ComponentType<{ className?: string }>[];
}

export interface ContactInfo {
  icon: string;
  title: string;
  link: string;
  color: string;
}

export interface Experience {
  title: string;
  company: string;
  role: string;
  description: string;
  tech: string;
}
