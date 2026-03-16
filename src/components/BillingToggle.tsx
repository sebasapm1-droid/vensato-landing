"use client";

import { motion } from "framer-motion";

interface BillingToggleProps {
  isAnnual: boolean;
  onChange: (val: boolean) => void;
}

export default function BillingToggle({ isAnnual, onChange }: BillingToggleProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "14px",
        fontFamily: "var(--font-sans)",
        fontSize: "0.9rem",
        fontWeight: 500,
      }}
    >
      <span style={{ color: !isAnnual ? "var(--color-ink)" : "var(--color-muted)" }}>
        Mensual
      </span>

      {/* Track */}
      <button
        onClick={() => onChange(!isAnnual)}
        aria-label="Toggle billing period"
        style={{
          width: "52px",
          height: "28px",
          borderRadius: "14px",
          background: isAnnual ? "var(--color-sage)" : "var(--color-border)",
          border: "none",
          cursor: "pointer",
          position: "relative",
          transition: "background 0.3s ease",
          flexShrink: 0,
          padding: 0,
        }}
      >
        {/* Thumb */}
        <motion.div
          animate={{ x: isAnnual ? 26 : 2 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          style={{
            position: "absolute",
            top: "3px",
            left: "0px",
            width: "22px",
            height: "22px",
            borderRadius: "50%",
            background: "#fff",
            boxShadow: "0 2px 6px rgba(0,0,0,0.18)",
          }}
        />
      </button>

      <span style={{ color: isAnnual ? "var(--color-ink)" : "var(--color-muted)" }}>
        Anual{" "}
        <motion.span
          animate={{ opacity: isAnnual ? 1 : 0, scale: isAnnual ? 1 : 0.8 }}
          transition={{ duration: 0.2 }}
          style={{
            display: "inline-block",
            background: "rgba(107,144,128,0.15)",
            color: "var(--color-sage-dark)",
            fontSize: "0.7rem",
            fontWeight: 700,
            padding: "2px 7px",
            borderRadius: "20px",
            verticalAlign: "middle",
          }}
        >
          −20%
        </motion.span>
      </span>
    </div>
  );
}
