"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface AnimateInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right" | "none";
}

export function AnimateIn({
  children,
  delay = 0,
  className,
  direction = "up",
}: AnimateInProps) {
  const directionOffset = {
    up: { y: 30 },
    left: { x: -30 },
    right: { x: 30 },
    none: {},
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directionOffset[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
