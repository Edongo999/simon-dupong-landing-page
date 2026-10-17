import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  padStart?: number;
  separator?: boolean;
  className?: string;
}

export default function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 1.6,
  padStart = 0,
  separator = true,
  className = "",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.6,
  });

  const shouldReduceMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState(
    shouldReduceMotion ? value : 0,
  );

  useEffect(() => {
    if (!isInView) return;

    if (shouldReduceMotion) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDisplayValue(value);
      return;
    }

    const controls = animate(0, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],

      onUpdate(latest) {
        setDisplayValue(Math.round(latest));
      },
    });

    return () => controls.stop();
  }, [isInView, value, duration, shouldReduceMotion]);

  const formattedValue = separator
    ? displayValue.toLocaleString("fr-FR")
    : String(displayValue);

  const paddedValue =
    padStart > 0 ? formattedValue.padStart(padStart, "0") : formattedValue;

  return (
    <motion.span ref={ref} className={className}>
      {prefix}
      {paddedValue}
      {suffix}
    </motion.span>
  );
}
