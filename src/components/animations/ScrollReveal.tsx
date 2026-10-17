import { ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

type Direction = "left" | "right" | "up" | "down";

type Props = {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
  amount?: number;
  once?: boolean;
  className?: string;
  scale?: boolean;
};

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 1.05,
  distance = 28,
  amount = 0.12,
  once = true,
  className = "",
  scale = false,
}: Props) {
  const shouldReduceMotion = useReducedMotion();

  const getPosition = () => {
    if (shouldReduceMotion) {
      return {
        x: 0,
        y: 0,
      };
    }

    switch (direction) {
      case "left":
        return {
          x: -distance,
          y: 0,
        };

      case "right":
        return {
          x: distance,
          y: 0,
        };

      case "down":
        return {
          x: 0,
          y: -distance,
        };

      case "up":
      default:
        return {
          x: 0,
          y: distance,
        };
    }
  };

  const position = getPosition();

  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: position.x,
      y: position.y,
      scale: scale && !shouldReduceMotion ? 0.985 : 1,
    },

    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,

      transition: {
        duration: shouldReduceMotion ? 0 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once,
        amount,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
