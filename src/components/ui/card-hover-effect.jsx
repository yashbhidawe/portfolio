import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { LinkIcon } from "lucide-react";
import { useState } from "react";

export const HoverEffect = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          href={item?.link}
          key={item?.link || idx}
          className="relative group block p-2 h-full w-full"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-600 to-indigo-700 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardImage>{item.imageUrl}</CardImage>
            <CardTitle>{item.title}</CardTitle>
            {item.tech && <TechUsed technologies={item.tech} />}
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </a>
      ))}
    </div>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const TechUsed = ({ technologies }) => {
  if (
    !technologies ||
    !Array.isArray(technologies) ||
    technologies.length === 0
  ) {
    return null;
  }

  const techNameMap = {
    IconBrandReact: "React",
    IconBrandTailwind: "Tailwind",
    IconBrandMongodb: "MongoDB",
    IconBrandNodejs: "Node.js",
    IconBrandFirebase: "Firebase",
    IconBrandFramerMotion: "Framer Motion",
  };

  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {technologies.map((Tech, index) => {
        if (!Tech) return null;

        const techComponentName = Tech.displayName || Tech.name;
        const displayName =
          techNameMap[techComponentName] || techComponentName || "Tech";

        return (
          <div
            key={index}
            className="bg-zinc-800 text-zinc-200 px-3 py-1 rounded-full flex items-center text-xs"
          >
            <Tech className="w-4 h-4 mr-1" />
            {displayName}
          </div>
        );
      })}
    </div>
  );
};

export const CardImage = ({ className, children }) => {
  if (!children) return null;

  return (
    <div className="relative z-50">
      <img
        className={cn(
          "rounded-2xl h-full w-full object-cover object-center",
          className
        )}
        src={children}
        alt=""
      />
    </div>
  );
};

export const CardTitle = ({ className, children }) => {
  return (
    <div className="flex justify-between items-center h-8">
      <h4
        className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}
      >
        {children}
      </h4>
      <LinkIcon className="w-4 h-4 text-gray-500 hover:text-white transition-all" />
    </div>
  );
};

export const CardDescription = ({ className, children }) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
