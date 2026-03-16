"use client";

import { motion } from "framer-motion";

interface PricingCardProps {
  tier: string;
  price: string;
  priceAnnual?: string;
  period?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
  ctaLabel?: string;
  isAnnual: boolean;
}

export default function PricingCard({
  tier,
  price,
  priceAnnual,
  period = "/mes",
  description,
  features,
  highlighted = false,
  badge,
  ctaLabel = "Empezar ahora",
  isAnnual,
}: PricingCardProps) {
  const displayPrice = isAnnual && priceAnnual ? priceAnnual : price;

  return (
    <motion.div
      whileHover={{ y: highlighted ? -4 : -8 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      style={{
        background: highlighted ? "var(--color-ink)" : "var(--color-surface)",
        borderRadius: "24px",
        padding: "36px 32px",
        border: highlighted
          ? "2px solid var(--color-sage)"
          : "1px solid var(--color-border)",
        boxShadow: highlighted
          ? "0 20px 60px rgba(31,41,36,0.25), 0 0 0 1px rgba(107,144,128,0.3)"
          : "0 2px 16px rgba(31,41,36,0.06)",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: "4px",
        transform: highlighted ? "scale(1.04)" : "scale(1)",
      }}
    >
      {/* Subtle gradient orb for highlighted */}
      {highlighted && (
        <div
          style={{
            position: "absolute",
            top: "-60px",
            right: "-60px",
            width: "180px",
            height: "180px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(107,144,128,0.25) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
      )}

      {/* Badge */}
      {badge && (
        <div
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            background: "var(--color-oxide)",
            color: "#fff",
            fontSize: "0.7rem",
            fontWeight: 700,
            padding: "4px 10px",
            borderRadius: "20px",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            fontFamily: "var(--font-sans)",
          }}
        >
          {badge}
        </div>
      )}

      {/* Tier name */}
      <p
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "0.78rem",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          color: highlighted ? "var(--color-sage-light)" : "var(--color-sage)",
          marginBottom: "6px",
        }}
      >
        {tier}
      </p>

      {/* Price */}
      <div style={{ display: "flex", alignItems: "baseline", gap: "4px", marginBottom: "4px" }}>
        <motion.span
          key={displayPrice}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "2.4rem",
            fontWeight: 700,
            color: highlighted ? "#fff" : "var(--color-ink)",
            lineHeight: 1,
          }}
        >
          {displayPrice}
        </motion.span>
        {displayPrice !== "Gratis" && (
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.85rem",
              color: highlighted ? "rgba(255,255,255,0.55)" : "var(--color-muted)",
            }}
          >
            {period}
          </span>
        )}
      </div>

      {/* Annual savings note */}
      {isAnnual && priceAnnual && price !== "Gratis" && (
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.78rem",
            color: highlighted ? "var(--color-sage-light)" : "var(--color-sage)",
            fontWeight: 600,
            marginBottom: "2px",
          }}
        >
          ✓ Ahorras 2 meses al año
        </p>
      )}

      {/* Description */}
      <p
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "0.875rem",
          color: highlighted ? "rgba(255,255,255,0.6)" : "var(--color-muted)",
          lineHeight: 1.5,
          marginBottom: "20px",
          marginTop: "8px",
        }}
      >
        {description}
      </p>

      {/* Divider */}
      <div
        style={{
          height: "1px",
          background: highlighted ? "rgba(255,255,255,0.1)" : "var(--color-border)",
          marginBottom: "20px",
        }}
      />

      {/* Features */}
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          flex: 1,
          marginBottom: "28px",
        }}
      >
        {features.map((f) => (
          <li
            key={f}
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.875rem",
              color: highlighted ? "rgba(255,255,255,0.85)" : "var(--color-ink)",
              display: "flex",
              alignItems: "flex-start",
              gap: "10px",
              lineHeight: 1.5,
            }}
          >
            <span
              style={{
                width: "18px",
                height: "18px",
                borderRadius: "50%",
                background: highlighted ? "var(--color-sage)" : "rgba(107,144,128,0.12)",
                color: highlighted ? "#fff" : "var(--color-sage)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                fontSize: "0.65rem",
                fontWeight: 700,
                marginTop: "1px",
              }}
            >
              ✓
            </span>
            {f}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <motion.a
        href="#"
        whileHover={{
          scale: 1.04,
          filter: highlighted ? "brightness(1.1)" : "brightness(0.97)",
        }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        style={{
          fontFamily: "var(--font-sans)",
          fontWeight: 700,
          fontSize: "0.9rem",
          padding: "14px 20px",
          borderRadius: "12px",
          textDecoration: "none",
          textAlign: "center",
          display: "block",
          background: highlighted ? "var(--color-sage)" : "transparent",
          color: highlighted ? "#fff" : "var(--color-sage)",
          border: highlighted ? "none" : "2px solid var(--color-sage)",
          cursor: "pointer",
          boxShadow: highlighted ? "0 4px 20px rgba(107,144,128,0.4)" : "none",
        }}
      >
        {ctaLabel}
      </motion.a>
    </motion.div>
  );
}
