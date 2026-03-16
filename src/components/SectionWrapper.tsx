"use client";

import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function SectionWrapper({
  children,
  id,
  delay = 0,
  className,
  style,
}: SectionWrapperProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94], delay }}
      className={className}
      style={style}
    >
      {children}
    </motion.section>
  );
}
