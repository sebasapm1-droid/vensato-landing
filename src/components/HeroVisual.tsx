"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from "framer-motion";

// ─── Building SVGs ────────────────────────────────────────────────────────────

const BuildingA = () => (
  <svg width="28" height="38" viewBox="0 0 28 38" fill="none">
    <rect x="3" y="6" width="22" height="30" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
    <rect x="7" y="11" width="5" height="4" rx="0.5" fill="currentColor" fillOpacity="0.35" />
    <rect x="16" y="11" width="5" height="4" rx="0.5" fill="currentColor" fillOpacity="0.35" />
    <rect x="7" y="19" width="5" height="4" rx="0.5" fill="currentColor" fillOpacity="0.35" />
    <rect x="16" y="19" width="5" height="4" rx="0.5" fill="currentColor" fillOpacity="0.35" />
    <rect x="11" y="28" width="6" height="8" rx="0.5" fill="currentColor" fillOpacity="0.3" />
    <path d="M14 1L3 6h22L14 1z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
  </svg>
);

const BuildingB = () => (
  <svg width="32" height="34" viewBox="0 0 32 34" fill="none">
    <rect x="2" y="12" width="28" height="20" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
    <rect x="6" y="17" width="5" height="4" rx="0.5" fill="currentColor" fillOpacity="0.35" />
    <rect x="13.5" y="17" width="5" height="4" rx="0.5" fill="currentColor" fillOpacity="0.35" />
    <rect x="21" y="17" width="5" height="4" rx="0.5" fill="currentColor" fillOpacity="0.35" />
    <rect x="12" y="25" width="8" height="7" rx="0.5" fill="currentColor" fillOpacity="0.3" />
    <path d="M2 12L16 4l14 8" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    <rect x="10" y="1" width="12" height="11" rx="1" stroke="currentColor" strokeWidth="1.4" />
  </svg>
);

const BuildingC = () => (
  <svg width="22" height="44" viewBox="0 0 22 44" fill="none">
    <rect x="2" y="4" width="18" height="38" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
    <rect x="5" y="8" width="4" height="3.5" rx="0.5" fill="currentColor" fillOpacity="0.35" />
    <rect x="13" y="8" width="4" height="3.5" rx="0.5" fill="currentColor" fillOpacity="0.35" />
    <rect x="5" y="15" width="4" height="3.5" rx="0.5" fill="currentColor" fillOpacity="0.35" />
    <rect x="13" y="15" width="4" height="3.5" rx="0.5" fill="currentColor" fillOpacity="0.35" />
    <rect x="5" y="22" width="4" height="3.5" rx="0.5" fill="currentColor" fillOpacity="0.35" />
    <rect x="13" y="22" width="4" height="3.5" rx="0.5" fill="currentColor" fillOpacity="0.35" />
    <rect x="5" y="29" width="4" height="3.5" rx="0.5" fill="currentColor" fillOpacity="0.35" />
    <rect x="13" y="29" width="4" height="3.5" rx="0.5" fill="currentColor" fillOpacity="0.35" />
    <rect x="8" y="35" width="6" height="7" rx="0.5" fill="currentColor" fillOpacity="0.3" />
    <rect x="7" y="1" width="8" height="5" rx="1" stroke="currentColor" strokeWidth="1.4" />
  </svg>
);

// ─── Animated Counter ─────────────────────────────────────────────────────────

function AnimatedCounter({ to, duration = 1.8, delay = 0 }: { to: number; duration?: number; delay?: number }) {
  const count = useMotionValue(0);
  const display = useTransform(count, (v) =>
    `$${Math.round(v)
      .toLocaleString("es-CO")}`
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      const ctrl = animate(count, to, { duration, ease: "easeOut" });
      return ctrl.stop;
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [to, duration, delay]);

  return <motion.span>{display}</motion.span>;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const properties = [
  {
    id: 1,
    Icon: BuildingA,
    name: "Apto 302",
    address: "El Nogal · Bog.",
    income: 2400000,
    status: "al-dia",
    tenant: "C. Mendoza",
    delay: 0.1,
  },
  {
    id: 2,
    Icon: BuildingB,
    name: "Casa 12",
    address: "Q. Camacho · Bog.",
    income: 1850000,
    status: "al-dia",
    tenant: "M. Fernández",
    delay: 0.28,
  },
  {
    id: 3,
    Icon: BuildingC,
    name: "Apto 501",
    address: "Chapinero · Bog.",
    income: 3100000,
    status: "al-dia",
    tenant: "A. Ríos",
    delay: 0.46,
  },
];

const TOTAL_NOI = 7350000;

const pillsQueue = [
  { id: "p1", label: "Cobro recibido", value: "+$2.400.000", accent: "#6B9080" },
  { id: "p2", label: "IPC actualizado", value: "+3.18%",      accent: "#8dbdaa" },
  { id: "p3", label: "Predial recordado", value: "30 días",   accent: "#E07A5F" },
  { id: "p4", label: "Contrato vigente",  value: "Abr 2026",  accent: "#6B9080" },
  { id: "p5", label: "Cap Rate",          value: "7.4% NOI",  accent: "#8dbdaa" },
];

// ─── Decorative floating dot ─────────────────────────────────────────────────

function FloatingDot({ x, y, size, duration, delay }: { x: string; y: string; size: number; duration: number; delay: number }) {
  return (
    <motion.div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: size,
        height: size,
        borderRadius: "50%",
        background: "rgba(107,144,128,0.18)",
        pointerEvents: "none",
      }}
      animate={{ y: [0, -14, 0], opacity: [0.18, 0.38, 0.18] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function HeroVisual() {
  const [pillIndex, setPillIndex] = useState(0);
  const [activePills, setActivePills] = useState<{ uid: string; pill: (typeof pillsQueue)[number]; x: number }[]>([]);
  const uidRef = useRef(0);

  // Spawn a pill every 2.2s
  useEffect(() => {
    const interval = setInterval(() => {
      const pill = pillsQueue[pillIndex % pillsQueue.length];
      const uid = `pill-${uidRef.current++}`;
      const x = 15 + Math.random() * 60; // % horizontal position
      setActivePills((prev) => [...prev, { uid, pill, x }]);
      setPillIndex((i) => i + 1);

      // Remove after 3.2s
      setTimeout(() => {
        setActivePills((prev) => prev.filter((p) => p.uid !== uid));
      }, 3200);
    }, 2200);
    return () => clearInterval(interval);
  }, [pillIndex]);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "680px",
        borderRadius: "24px",
        background: "linear-gradient(160deg, #1F2924 0%, #16211c 60%, #1a2a24 100%)",
        border: "1px solid rgba(107,144,128,0.22)",
        boxShadow: "0 24px 80px rgba(31,41,36,0.55), 0 0 0 1px rgba(107,144,128,0.12)",
        overflow: "hidden",
        padding: "32px 28px 28px",
      }}
    >
      {/* ── Radial sage glow ── */}
      <div
        style={{
          position: "absolute",
          top: "-60px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "500px",
          height: "260px",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(107,144,128,0.22) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      {/* Bottom oxide glow */}
      <div
        style={{
          position: "absolute",
          bottom: "-40px",
          right: "-40px",
          width: "220px",
          height: "220px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(224,122,95,0.09) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* ── Decorative floating dots ── */}
      <FloatingDot x="5%" y="20%" size={5} duration={4.5} delay={0} />
      <FloatingDot x="88%" y="15%" size={4} duration={5.2} delay={1.1} />
      <FloatingDot x="92%" y="70%" size={6} duration={4} delay={2} />
      <FloatingDot x="3%" y="75%" size={4} duration={5.8} delay={0.5} />

      {/* ── Top bar ── */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px" }}>
        <div>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.68rem", fontWeight: 700, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "2px" }}>
            Tu portafolio
          </p>
          <p style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem", fontWeight: 700, color: "#fff" }}>
            3 propiedades activas
          </p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "6px", padding: "5px 12px", borderRadius: "20px", background: "rgba(107,144,128,0.14)", border: "1px solid rgba(107,144,128,0.22)" }}>
          <motion.div
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#6B9080" }}
          />
          <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.72rem", fontWeight: 700, color: "rgba(255,255,255,0.7)" }}>
            En vivo
          </span>
        </div>
      </div>

      {/* ── Property cards ── */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px", marginBottom: "20px", position: "relative", zIndex: 1 }}>
        {properties.map((prop) => (
          <motion.div
            key={prop.id}
            initial={{ opacity: 0, y: 30, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: prop.delay, duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.09)",
              borderRadius: "16px",
              padding: "16px 14px",
              backdropFilter: "blur(8px)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Hover glow */}
            <motion.div
              animate={{ opacity: [0.06, 0.14, 0.06] }}
              transition={{ duration: 3.5 + prop.id * 0.4, repeat: Infinity, ease: "easeInOut", delay: prop.id * 0.6 }}
              style={{
                position: "absolute",
                inset: 0,
                background: "radial-gradient(circle at 50% 0%, rgba(107,144,128,0.35) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />

            {/* Icon */}
            <div style={{ color: "#6B9080", marginBottom: "10px" }}>
              <prop.Icon />
            </div>

            {/* Name + address */}
            <p style={{ fontFamily: "var(--font-display)", fontSize: "0.875rem", fontWeight: 700, color: "#fff", marginBottom: "2px", lineHeight: 1.2 }}>
              {prop.name}
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.63rem", color: "rgba(255,255,255,0.4)", marginBottom: "10px", lineHeight: 1.3 }}>
              {prop.address}
            </p>

            {/* Income */}
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", fontWeight: 800, color: "#fff", marginBottom: "6px" }}>
              <AnimatedCounter to={prop.income} duration={1.6} delay={prop.delay + 0.3} />
            </p>

            {/* Status badge */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: "4px", padding: "2px 7px", borderRadius: "5px", background: "rgba(107,144,128,0.18)", border: "1px solid rgba(107,144,128,0.25)" }}>
              <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#6B9080" }} />
              <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.6rem", fontWeight: 700, color: "#8dbdaa", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Al día
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── Floating pills zone ── */}
      <div style={{ position: "relative", height: "52px", marginBottom: "16px", overflow: "hidden" }}>
        <AnimatePresence>
          {activePills.map(({ uid, pill, x }) => (
            <motion.div
              key={uid}
              initial={{ opacity: 0, y: 44, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.92 }}
              transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                position: "absolute",
                left: `${x}%`,
                bottom: 0,
                transform: "translateX(-50%)",
                display: "inline-flex",
                alignItems: "center",
                gap: "7px",
                padding: "5px 12px",
                borderRadius: "20px",
                background: "rgba(31,41,36,0.85)",
                border: `1px solid rgba(107,144,128,0.28)`,
                backdropFilter: "blur(8px)",
                boxShadow: "0 4px 16px rgba(0,0,0,0.35)",
                whiteSpace: "nowrap",
              }}
            >
              <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: pill.accent, flexShrink: 0 }} />
              <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", fontWeight: 600, color: "rgba(255,255,255,0.75)" }}>
                {pill.label}
              </span>
              <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", fontWeight: 800, color: pill.accent }}>
                {pill.value}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* ── Total NOI bar ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "14px 18px",
          borderRadius: "14px",
          background: "rgba(107,144,128,0.1)",
          border: "1px solid rgba(107,144,128,0.2)",
        }}
      >
        <div>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.65rem", fontWeight: 700, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "3px" }}>
            NOI Total mensual
          </p>
          <p style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 700, color: "#fff" }}>
            <AnimatedCounter to={TOTAL_NOI} duration={2.2} delay={0.9} />
          </p>
        </div>
        <div style={{ textAlign: "right" }}>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.65rem", fontWeight: 700, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "3px" }}>
            Cap Rate
          </p>
          <p style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 700, color: "#8dbdaa" }}>
            7.4%
          </p>
        </div>
      </motion.div>
    </div>
  );
}
