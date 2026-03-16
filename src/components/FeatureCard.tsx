"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  large?: boolean;
  accentColor?: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
  large = false,
  accentColor = "var(--color-sage)",
}: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, boxShadow: `0 16px 48px rgba(107,144,128,0.18), 0 0 0 1.5px ${accentColor}` }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      style={{
        background: "var(--color-surface)",
        borderRadius: "20px",
        padding: large ? "40px" : "32px",
        border: "1px solid var(--color-border)",
        boxShadow: "0 2px 12px rgba(31,41,36,0.06)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        cursor: "default",
        gridColumn: large ? "span 2" : undefined,
      }}
    >
      {/* Icon container */}
      <motion.div
        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
        transition={{ duration: 0.4 }}
        style={{
          width: "52px",
          height: "52px",
          borderRadius: "14px",
          background: `linear-gradient(135deg, var(--color-bg) 0%, ${accentColor}20 100%)`,
          border: `1px solid ${accentColor}30`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.5rem",
        }}
      >
        {icon}
      </motion.div>

      {/* Title */}
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontSize: large ? "1.35rem" : "1.125rem",
          fontWeight: 700,
          color: "var(--color-ink)",
          lineHeight: 1.3,
        }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "0.9rem",
          color: "var(--color-muted)",
          lineHeight: 1.65,
          flex: 1,
        }}
      >
        {description}
      </p>

      {/* Accent bar */}
      <motion.div
        initial={{ width: 0 }}
        whileHover={{ width: "48px" }}
        transition={{ duration: 0.3 }}
        style={{
          height: "3px",
          borderRadius: "2px",
          background: accentColor,
        }}
      />
    </motion.div>
  );
}
