"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import SectionWrapper from "./SectionWrapper";
import BovedaMock from "./BovedaMock";
import AsistenteVensatoMock from "./AsistenteVensatoMock";
import CobrosEmailMock from "./CobrosEmailMock";

const DashboardMock = dynamic(() => import("./DashboardMock"), { ssr: false });

const tabs = [
  {
    id: "portafolio",
    label: "Portafolio",
    description: "NOI, rentabilidad y estado operativo de tus inmuebles desde un solo panel.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="2" y="2" width="5" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="9" y="2" width="5" height="3.5" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="9" y="7.5" width="5" height="6.5" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="2" y="9" width="5" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: "asistente",
    label: "Asistente",
    description: "Consulta propiedades, cobros, contratos y documentos en lenguaje natural y actualiza campos clave.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M3 4.5A2.5 2.5 0 015.5 2h5A2.5 2.5 0 0113 4.5v3A2.5 2.5 0 0110.5 10H8l-2.5 2V10H5.5A2.5 2.5 0 013 7.5v-3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="6.1" cy="6" r=".8" fill="currentColor" />
        <circle cx="8" cy="6" r=".8" fill="currentColor" />
        <circle cx="9.9" cy="6" r=".8" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "cobros",
    label: "Cobros",
    description: "Envía cuentas de cobro en PDF por correo con trazabilidad y automatización según el plan.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="2" y="3" width="12" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3.5 5l4.5 3.5L12.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "boveda",
    label: "Bóveda",
    description: "Centraliza contratos, pólizas y soportes, y deja la información lista para el asistente.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M3 2h7l3 3v8a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M10 2v3h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const mockMap: Record<string, React.ReactNode> = {
  portafolio: <DashboardMock />,
  asistente: <AsistenteVensatoMock />,
  cobros: <CobrosEmailMock />,
  boveda: <BovedaMock />,
};

export default function AppPreviewSection() {
  const [activeTab, setActiveTab] = useState("asistente");
  const activeData = tabs.find((tab) => tab.id === activeTab)!;

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
              fontSize: "clamp(1.8rem, 4vw, 2.9rem)",
              fontWeight: 700,
              color: "var(--color-ink)",
              letterSpacing: "-0.03em",
              lineHeight: 1.2,
              marginBottom: "14px",
            }}
          >
            No solo registras inmuebles. Operas, cobras y respondes más rápido.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.98rem",
              color: "var(--color-muted)",
              lineHeight: 1.7,
              maxWidth: "640px",
              margin: "0 auto",
            }}
          >
            Vensato combina gestión inmobiliaria, bóveda documental, asistente contextual y envío transaccional de cuentas de cobro para reducir trabajo manual real.
          </p>
        </div>

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
                  padding: "10px 18px",
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

        <AnimatePresence mode="wait">
          <motion.p
            key={`${activeTab}-desc`}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.9rem",
              color: "var(--color-muted)",
              textAlign: "center",
              marginBottom: "36px",
              minHeight: "24px",
            }}
          >
            {activeData.description}
          </motion.p>
        </AnimatePresence>

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