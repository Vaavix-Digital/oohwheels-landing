"use client";

import React, { useState, useEffect } from "react";
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
  y = 20,
  x = 0,
  className = "",
  as = "div",
}) => {
  const shouldReduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const Component = (motion[as as keyof typeof motion] || motion.div) as any;

  // On SSR, before mount, or with reduced motion: render clean HTML that is 100% visible
  if (!mounted || shouldReduce) {
    const Tag = as as any;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "0px", amount: 0.05 }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] as const }}
    >
      {children}
    </Component>
  );
};

export default Reveal;

