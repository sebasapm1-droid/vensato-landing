"use client";

import { motion, Variants } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const painPoints = [
  {
    problem: "Olvidar el incremento anual de ley y el pago oportuno del predial.",
    solution: "Alertas algorítmicas automáticas del incremento del IPC y el predial para que no pierda dinero.",
    label: "IPC y Predial",
  },
  {
    problem: "Desorden contable y conciliaciones manuales que consumen horas cada mes.",
    solution: "Generación automática de cuentas de cobro en PDF enviadas directamente al inquilino.",
    label: "Contabilidad",
  },
  {
    problem: "Pagar el 10% de comisión mensual a la inmobiliaria sobre cada arriendo.",
    solution: "Autogestión inteligente donde el propietario retiene el 100% de su rentabilidad.",
    label: "Comisiones",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

export default function PainPoints() {
  return (
    <SectionWrapper
      style={{
        padding: "100px 24px",
        background: "var(--color-surface)",
        borderTop: "1px solid var(--color-border)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.78rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "var(--color-oxide)",
              marginBottom: "14px",
            }}
          >
            El problema que resolvemos
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 700,
              color: "var(--color-ink)",
              letterSpacing: "-0.03em",
              lineHeight: 1.2,
              maxWidth: "680px",
              margin: "0 auto",
            }}
          >
            El arrendador independiente enfrenta tres pérdidas silenciosas cada mes.
          </h2>
        </div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {painPoints.map((point, i) => (
            <motion.div
              key={point.label}
              variants={cardVariants}
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                border: "1px solid var(--color-border)",
                boxShadow: "0 2px 12px rgba(31,41,36,0.05)",
              }}
            >
              {/* Problem block */}
              <div
                style={{
                  padding: "28px 28px 24px",
                  background: "rgba(224,122,95,0.05)",
                  borderBottom: "1px solid rgba(224,122,95,0.12)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "12px",
                  }}
                >
                  <div
                    style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "50%",
                      background: "rgba(224,122,95,0.12)",
                      border: "1px solid rgba(224,122,95,0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <line x1="1" y1="1" x2="9" y2="9" stroke="#E07A5F" strokeWidth="2" strokeLinecap="round" />
                      <line x1="9" y1="1" x2="1" y2="9" stroke="#E07A5F" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      color: "var(--color-oxide)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    El problema · {i + 1}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.925rem",
                    color: "var(--color-ink)",
                    lineHeight: 1.65,
                    fontWeight: 500,
                  }}
                >
                  {point.problem}
                </p>
              </div>

              {/* Solution block */}
              <div
                style={{
                  padding: "24px 28px 28px",
                  background: "var(--color-surface)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "12px",
                  }}
                >
                  <div
                    style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "50%",
                      background: "rgba(107,144,128,0.1)",
                      border: "1px solid rgba(107,144,128,0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4l3 3 5-6" stroke="#6B9080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      color: "var(--color-sage)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    Vensato lo resuelve
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.925rem",
                    color: "var(--color-ink)",
                    lineHeight: 1.65,
                  }}
                >
                  {point.solution}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
