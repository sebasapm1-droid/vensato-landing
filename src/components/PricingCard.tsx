"use client";

import { motion } from "framer-motion";

interface PricingCardProps {
  tier: string;
  price: string;
  period?: string;
  description: string;
  highlights: string[];
  inheritedFrom?: string;
  assistantHighlight?: string;
  highlighted?: boolean;
  badge?: string;
  ctaLabel?: string;
}

export default function PricingCard({
  tier,
  price,
  period = "/mes",
  description,
  highlights,
  inheritedFrom,
  assistantHighlight,
  highlighted = false,
  badge,
  ctaLabel = "Empezar ahora",
}: PricingCardProps) {
  const [propertiesHighlight, ...featureHighlights] = highlights;

  return (
    <motion.div
      whileHover={{ y: highlighted ? -4 : -8 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      style={{
        background: highlighted ? "var(--color-ink)" : "var(--color-surface)",
        borderRadius: "24px",
        padding: "36px 32px",
        border: highlighted ? "2px solid var(--color-sage)" : "1px solid var(--color-border)",
        boxShadow: highlighted
          ? "0 20px 60px rgba(31,41,36,0.25), 0 0 0 1px rgba(107,144,128,0.3)"
          : "0 2px 16px rgba(31,41,36,0.06)",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: "4px",
        height: "100%",
        transform: highlighted ? "scale(1.03)" : "scale(1)",
      }}
    >
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

      <div style={{ display: "flex", alignItems: "baseline", gap: "4px", marginBottom: "4px" }}>
        <motion.span
          key={price}
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
          {price}
        </motion.span>
        {price !== "Gratis" && (
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

      <p
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "0.875rem",
          color: highlighted ? "rgba(255,255,255,0.68)" : "var(--color-muted)",
          lineHeight: 1.5,
          marginBottom: "18px",
          marginTop: "8px",
        }}
      >
        {description}
      </p>

      {assistantHighlight && (
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            alignSelf: "flex-start",
            padding: "9px 14px",
            borderRadius: "999px",
            marginBottom: "14px",
            background: highlighted ? "rgba(224,122,95,0.16)" : "rgba(224,122,95,0.1)",
            border: highlighted ? "1px solid rgba(224,122,95,0.28)" : "1px solid rgba(224,122,95,0.18)",
            color: highlighted ? "#F6D6CD" : "var(--color-oxide)",
          }}
        >
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "currentColor",
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.78rem",
              fontWeight: 700,
              lineHeight: 1.2,
            }}
          >
            {assistantHighlight}
          </span>
        </div>
      )}

      {propertiesHighlight && (
        <div
          style={{
            borderRadius: "18px",
            padding: "16px 18px",
            marginBottom: "16px",
            background: highlighted ? "rgba(107,144,128,0.16)" : "rgba(107,144,128,0.08)",
            border: highlighted ? "1px solid rgba(107,144,128,0.26)" : "1px solid rgba(107,144,128,0.16)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.68rem",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              fontWeight: 700,
              color: highlighted ? "rgba(255,255,255,0.5)" : "var(--color-sage)",
              marginBottom: "6px",
            }}
          >
            Propiedades
          </p>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "1.15rem",
              fontWeight: 700,
              lineHeight: 1.15,
              color: highlighted ? "#fff" : "var(--color-ink)",
            }}
          >
            {propertiesHighlight}
          </p>
        </div>
      )}

      {inheritedFrom && (
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.82rem",
            fontWeight: 700,
            color: highlighted ? "var(--color-sage-light)" : "var(--color-sage-dark)",
            marginBottom: "16px",
          }}
        >
          {inheritedFrom}
        </p>
      )}

      <div
        style={{
          height: "1px",
          background: highlighted ? "rgba(255,255,255,0.1)" : "var(--color-border)",
          marginBottom: "18px",
        }}
      />

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
        {featureHighlights.map((item) => (
          <li
            key={item}
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.875rem",
              color: highlighted ? "rgba(255,255,255,0.88)" : "var(--color-ink)",
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
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                <path
                  d="M2 5.2 4.1 7.3 8 2.8"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            {item}
          </li>
        ))}
      </ul>

      <motion.a
        href="https://app.vensato.com/register"
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
