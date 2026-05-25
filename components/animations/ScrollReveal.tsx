"use client";

import { useRef, useEffect, useState, type ReactNode } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { LUXURY_EASE } from "@/lib/constants";

type RevealDirection = "up" | "down" | "left" | "right" | "none";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: RevealDirection;
  delay?: number;
  duration?: number;
  distance?: number;
  blur?: boolean;
  once?: boolean;
  className?: string;
  threshold?: number;
}

const buildVariants = (
  direction: RevealDirection,
  distance: number,
  blur: boolean
): Variants => {
  const axisMap: Record<RevealDirection, { x?: number; y?: number }> = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  };

  const hiddenTransform = axisMap[direction];

  return {
    hidden: {
      opacity: 0,
      filter: blur ? "blur(12px)" : "blur(0px)",
      ...hiddenTransform,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      x: 0,
      y: 0,
    },
  };
};

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.9,
  distance = 32,
  blur = true,
  once = true,
  className,
  threshold = 0.15,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) setHasAnimated(true);
  }, [isInView, hasAnimated]);

  const variants = buildVariants(direction, distance, blur);

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView || hasAnimated ? "visible" : "hidden"}
      transition={{
        duration,
        delay,
        ease: LUXURY_EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}