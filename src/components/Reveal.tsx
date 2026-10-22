"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  x?: number;
  className?: string;
  as?: "div" | "span" | "h1" | "h2" | "p" | "section" | "ul" | "figure";
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  y = 28,
  x = 0,
  className = "",
  as = "div",
}) => {
  const shouldReduce = useReducedMotion();
  const Component = (motion[as as keyof typeof motion] || motion.div) as any;

  if (shouldReduce) {
    return <Component className={className}>{children}</Component>;
  }

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const }}
    >
      {children}
    </Component>
  );
};

export default Reveal;
