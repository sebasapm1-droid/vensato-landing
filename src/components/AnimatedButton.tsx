"use client";

import { motion } from "framer-motion";

interface AnimatedButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost" | "white";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  type?: "button" | "submit";
}

const styles = {
  primary: {
    base: {
      background: "var(--color-oxide)",
      color: "#fff",
      border: "none",
    },
    hover: { scale: 1.04, filter: "brightness(1.08)" },
    shadow: "0 4px 20px rgba(224,122,95,0.35)",
  },
  outline: {
    base: {
      background: "transparent",
      color: "var(--color-sage)",
      border: "2px solid var(--color-sage)",
    },
    hover: { scale: 1.04, backgroundColor: "rgba(107,144,128,0.06)" },
    shadow: "none",
  },
  ghost: {
    base: {
      background: "transparent",
      color: "var(--color-ink)",
      border: "none",
    },
    hover: { scale: 1.03, color: "var(--color-sage)" },
    shadow: "none",
  },
  white: {
    base: {
      background: "#fff",
      color: "var(--color-ink)",
      border: "2px solid rgba(31,41,36,0.12)",
    },
    hover: { scale: 1.04, filter: "brightness(0.96)" },
    shadow: "0 2px 12px rgba(31,41,36,0.08)",
  },
};

const sizes = {
  sm: { padding: "8px 20px", fontSize: "0.875rem" },
  md: { padding: "12px 28px", fontSize: "0.95rem" },
  lg: { padding: "16px 40px", fontSize: "1rem" },
};

export default function AnimatedButton({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  fullWidth = false,
  type = "button",
}: AnimatedButtonProps) {
  const s = styles[variant];
  const sz = sizes[size];

  const baseStyle: React.CSSProperties = {
    ...s.base,
    ...sz,
    fontFamily: "var(--font-sans)",
    fontWeight: 600,
    borderRadius: "10px",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    textDecoration: "none",
    letterSpacing: "-0.01em",
    transition: "box-shadow 0.2s ease",
    width: fullWidth ? "100%" : "auto",
    boxShadow: s.shadow,
    whiteSpace: "nowrap",
  };

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={s.hover}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        style={baseStyle}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={s.hover}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      style={baseStyle}
    >
      {children}
    </motion.button>
  );
}
