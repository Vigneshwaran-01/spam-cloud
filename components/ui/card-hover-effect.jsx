import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export const HoverEffect = ({ items = [], className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={cn(
      "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10", // Reduced gap
      className
    )}>
      {items.map((item, idx) => (
        <Link
          href={item?.link || "#"}
          key={idx}
          className="relative group block h-full w-full" // Removed p-2
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-blue-50 dark:bg-gray-800/[0.8] block rounded-lg shadow-md" // Blue tint, shadow
                layoutId={`hoverBackground-${idx}`}
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
            {item.img && <CardImg src={item.img} alt={item.title || "Image"} />}
            {item.title && <CardTitle>{item.title}</CardTitle>}
            {item.description && <CardDescription>{item.description}</CardDescription>}
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-lg h-full w-full p-4 bg-white dark:bg-gray-900 shadow-md overflow-hidden border border-transparent hover:border-blue-200 transition-colors duration-200 relative z-20", // More padding, background, shadows
        className
      )}
    >
      <div className="relative z-50">
        {children}
      </div>
    </div>
  );
};

export const CardTitle = ({ className, children }) => {
  return (
    <h4 className={cn(
      "text-gray-800 dark:text-gray-50 font-semibold text-lg mb-2", // More muted, size, margin
      className
    )}>
      {children}
    </h4>
  );
};

export const CardDescription = ({ className, children }) => {
  return (
    <p className={cn(
      "text-gray-600 dark:text-gray-400 leading-relaxed text-sm", // Muted description, better leading
      className
    )}>
      {children}
    </p>
  );
};

export const CardImg = ({ src, alt, className }) => {
  return (
    <Image
      className={cn("rounded-md object-cover aspect-video", className)} // aspect ratio
      src={src}
      alt={alt || "Image"}
      width={500}
      height={300}
    />
  );
};