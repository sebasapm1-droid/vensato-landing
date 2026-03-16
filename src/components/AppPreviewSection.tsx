"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import SectionWrapper from "./SectionWrapper";
import InquilinosMock from "./InquilinosMock";
import BovedaMock from "./BovedaMock";

const DashboardMock = dynamic(() => import("./DashboardMock"), { ssr: false });

const tabs = [
  {
    id: "portafolio",
    label: "Portafolio",
    description: "Ingresos, gastos y Cap Rate de cada propiedad en tiempo real.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="1" y="5" width="14" height="9" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 5V4a4 4 0 018 0v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "inquilinos",
    label: "Inquilinos",
    description: "Historial de pagos, documentos y estado de cada inquilino en un vistazo.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="6" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M1 14c0-2.761 2.239-5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="11" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M15 14c0-2.761-2.239-5-5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "boveda",
    label: "Boveda",
    description: "Contratos, polizas e identificaciones organizados y disponibles cuando los necesites.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M3 2h7l4 4v8a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M10 2v4h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const mockMap: Record<string, React.ReactNode> = {
  portafolio: <DashboardMock />,
  inquilinos: <InquilinosMock />,
  boveda: <BovedaMock />,
};

export default function AppPreviewSection() {
  const [activeTab, setActiveTab] = useState("portafolio");
  const activeData = tabs.find((t) => t.id === activeTab)!;

  return (
    <SectionWrapper
      style={{
        padding: "100px 24px",
        background: "var(--color-surface)",
        borderTop: "1px solid var(--color-border)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "52px" }}>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.78rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "var(--color-sage)",
              marginBottom: "12px",
            }}
          >
            La plataforma por dentro
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
              fontWeight: 700,
              color: "var(--color-ink)",
              letterSpacing: "-0.03em",
              lineHeight: 1.2,
              marginBottom: "14px",
            }}
          >
            Diseñada para que gestiones todo en minutos.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.95rem",
              color: "var(--color-muted)",
              lineHeight: 1.65,
              maxWidth: "500px",
              margin: "0 auto",
            }}
          >
            Un vistazo a lo que te espera en nuestra plataforma
          </p>
        </div>

        {/* Tab bar */}
        <div
          style={{
            display: "flex",
            gap: "8px",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "16px",
          }}
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "7px",
                  padding: "9px 18px",
                  borderRadius: "12px",
                  border: isActive ? "1.5px solid var(--color-sage)" : "1.5px solid var(--color-border)",
                  background: isActive ? "var(--color-sage)" : "var(--color-surface)",
                  color: isActive ? "#fff" : "var(--color-muted)",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  cursor: "pointer",
                  transition: "all 0.2s",
                  outline: "none",
                }}
              >
                {tab.icon}
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Active tab description */}
        <AnimatePresence mode="wait">
          <motion.p
            key={activeTab + "-desc"}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.85rem",
              color: "var(--color-muted)",
              textAlign: "center",
              marginBottom: "36px",
              minHeight: "22px",
            }}
          >
            {activeData.description}
          </motion.p>
        </AnimatePresence>

        {/* Mock display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {mockMap[activeTab]}
          </motion.div>
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}
