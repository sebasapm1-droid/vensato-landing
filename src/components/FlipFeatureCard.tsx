"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface FlipFeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index?: number;
}

// Alternating color schemes for front face accents
const schemes = [
  { iconBg: "rgba(107,144,128,0.1)", iconBorder: "rgba(107,144,128,0.2)", backBg: "#1F2924", backAccent: "var(--color-sage)" },
  { iconBg: "rgba(224,122,95,0.1)", iconBorder: "rgba(224,122,95,0.2)", backBg: "#2a1f1a", backAccent: "var(--color-oxide)" },
];

export default function FlipFeatureCard({ icon, title, description, index = 0 }: FlipFeatureCardProps) {
  const [flipped, setFlipped] = useState(false);
  const scheme = schemes[index % 2];

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      onClick={() => setFlipped((v) => !v)}
      style={{
        height: "260px",
        perspective: "1400px",
        cursor: "pointer",
        userSelect: "none",
      }}
      aria-label={`${title} — click para ver detalle`}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.9 }}
        style={{
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          position: "relative",
        }}
      >
        {/* ─── FRONT ─── */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            borderRadius: "20px",
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            boxShadow: "0 2px 16px rgba(31,41,36,0.06)",
            padding: "32px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {/* Icon in circle */}
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "14px",
              background: scheme.iconBg,
              border: `1px solid ${scheme.iconBorder}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            {icon}
          </div>

          {/* Title */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.15rem",
                fontWeight: 700,
                color: "var(--color-ink)",
                lineHeight: 1.25,
                marginBottom: "10px",
              }}
            >
              {title}
            </p>
            {/* Flip hint */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                fontFamily: "var(--font-sans)",
                fontSize: "0.7rem",
                fontWeight: 600,
                color: scheme.backAccent,
                opacity: 0.7,
              }}
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path
                  d="M1 5h8M6 2l3 3-3 3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Ver detalle
            </div>
          </div>
        </div>

        {/* ─── BACK ─── */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            borderRadius: "20px",
            background: scheme.backBg,
            border: `1px solid ${scheme.iconBorder}`,
            boxShadow: `0 8px 32px rgba(31,41,36,0.18), 0 0 0 1px ${scheme.iconBorder}`,
            padding: "32px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {/* Accent top line */}
          <div
            style={{
              width: "36px",
              height: "3px",
              borderRadius: "2px",
              background: scheme.backAccent,
              marginBottom: "16px",
            }}
          />

          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.92rem",
              color: "rgba(255,255,255,0.85)",
              lineHeight: 1.7,
              flex: 1,
            }}
          >
            {description}
          </p>

          {/* Close hint */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              fontFamily: "var(--font-sans)",
              fontSize: "0.7rem",
              fontWeight: 600,
              color: "rgba(255,255,255,0.35)",
              marginTop: "16px",
            }}
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path
                d="M9 5H1M4 2L1 5l3 3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Volver
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
