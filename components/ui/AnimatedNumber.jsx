
"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

export default function AnimatedNumber({ value, formatter }) {
  const motionValue = useMotionValue(value);
  const rounded = useTransform(motionValue, (latest) => formatter(Math.round(latest)));
  const prevValue = useRef(value);

  useEffect(() => {
    const controls = animate(prevValue.current, value, {
      duration: 0.4,
      ease: "easeOut",
      onUpdate: (latest) => motionValue.set(latest),
    });
    prevValue.current = value;
    return controls.stop;
  }, [value]);

  return <motion.span>{rounded}</motion.span>;
}