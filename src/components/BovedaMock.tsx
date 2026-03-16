"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type Category = "Contratos" | "Polizas" | "Identificaciones";

const docs: Record<Category, { name: string; tenant: string; date: string; size: string; status?: string }[]> = {
  Contratos: [
    { name: "Contrato_Mendoza_2024.pdf", tenant: "Carlos Mendoza · Apto 302", date: "15 Ene 2024", size: "1.2 MB", status: "Vigente" },
    { name: "Contrato_Fernandez_2023.pdf", tenant: "María Fernández · Casa 12", date: "3 Mar 2023", size: "980 KB", status: "Vigente" },
    { name: "Contrato_Rios_2024.pdf", tenant: "Andrés Ríos · Apto 501", date: "10 Jul 2024", size: "1.1 MB", status: "Vigente" },
  ],
  Polizas: [
    { name: "Poliza_Mendoza_2024.pdf", tenant: "Carlos Mendoza · Apto 302", date: "15 Ene 2024", size: "520 KB", status: "Vence Ene 2025" },
    { name: "Poliza_Fernandez_2023.pdf", tenant: "María Fernández · Casa 12", date: "3 Mar 2023", size: "480 KB", status: "Vence Mar 2025" },
  ],
  Identificaciones: [
    { name: "CC_Mendoza.pdf", tenant: "Carlos Mendoza", date: "15 Ene 2024", size: "200 KB" },
    { name: "CC_Fernandez.pdf", tenant: "María Fernández", date: "3 Mar 2023", size: "185 KB" },
    { name: "CC_Rios.pdf", tenant: "Andrés Ríos", date: "10 Jul 2024", size: "210 KB" },
  ],
};

const categoryTotal = Object.values(docs).flat().length;

function FileIcon({ color }: { color: string }) {
  return (
    <svg width="28" height="34" viewBox="0 0 28 34" fill="none">
      <path d="M4 2h14l8 8v22a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2z" fill={color} fillOpacity="0.1" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M18 2v8h8" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="7" y1="18" x2="21" y2="18" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="7" y1="23" x2="16" y2="23" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

const catColors: Record<Category, string> = {
  Contratos: "#6B9080",
  Polizas: "#E07A5F",
  Identificaciones: "#8BA99B",
};

export default function BovedaMock() {
  const [activeCategory, setActiveCategory] = useState<Category>("Contratos");
  const activeDocs = docs[activeCategory];

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "20px",
        border: "1px solid rgba(31,41,36,0.08)",
        boxShadow: "0 8px 40px rgba(31,41,36,0.10), 0 2px 8px rgba(31,41,36,0.05)",
        overflow: "hidden",
        fontFamily: "var(--font-sans)",
        maxWidth: "680px",
        width: "100%",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "20px 24px 16px",
          borderBottom: "1px solid rgba(31,41,36,0.07)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        <div>
          <p style={{ fontSize: "0.72rem", fontWeight: 700, color: "var(--color-muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "2px" }}>
            Boveda Documental
          </p>
          <p style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", fontWeight: 700, color: "var(--color-ink)" }}>
            {categoryTotal} archivos guardados
          </p>
        </div>
        <div
          style={{
            padding: "6px 14px",
            borderRadius: "8px",
            background: "var(--color-sage)",
            color: "#fff",
            fontSize: "0.75rem",
            fontWeight: 700,
            cursor: "default",
          }}
        >
          + Subir documento
        </div>
      </div>

      {/* Category tabs */}
      <div
        style={{
          display: "flex",
          gap: "0",
          borderBottom: "1px solid rgba(31,41,36,0.07)",
          padding: "0 24px",
        }}
      >
        {(Object.keys(docs) as Category[]).map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{
              position: "relative",
              padding: "11px 16px",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "0.78rem",
              fontWeight: 700,
              color: activeCategory === cat ? catColors[cat] : "var(--color-muted)",
              transition: "color 0.2s",
            }}
          >
            {cat} ({docs[cat].length})
            {activeCategory === cat && (
              <motion.div
                layoutId="doc-tab-indicator"
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "2px",
                  borderRadius: "2px 2px 0 0",
                  background: catColors[cat],
                }}
                transition={{ type: "spring", stiffness: 500, damping: 35 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Document list */}
      <div style={{ padding: "8px 0", minHeight: "200px" }}>
        {activeDocs.map((doc, i) => (
          <motion.div
            key={doc.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07, duration: 0.3 }}
            whileHover={{ background: "rgba(107,144,128,0.03)" }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              padding: "12px 24px",
              borderBottom: i < activeDocs.length - 1 ? "1px solid rgba(31,41,36,0.05)" : "none",
              cursor: "default",
              transition: "background 0.15s",
            }}
          >
            <FileIcon color={catColors[activeCategory]} />

            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--color-ink)", marginBottom: "2px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                {doc.name}
              </p>
              <p style={{ fontSize: "0.7rem", color: "var(--color-muted)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                {doc.tenant} · {doc.date} · {doc.size}
              </p>
            </div>

            {doc.status && (
              <span
                style={{
                  padding: "3px 8px",
                  borderRadius: "6px",
                  background: doc.status.startsWith("Vence") ? "rgba(224,122,95,0.08)" : "rgba(107,144,128,0.09)",
                  color: doc.status.startsWith("Vence") ? "var(--color-oxide)" : "var(--color-sage-dark)",
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.03em",
                  flexShrink: 0,
                }}
              >
                {doc.status}
              </span>
            )}

            {/* Download icon */}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, opacity: 0.35 }}>
              <path d="M8 3v7M5 8l3 3 3-3" stroke="var(--color-ink)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3 12h10" stroke="var(--color-ink)" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Storage bar */}
      <div
        style={{
          padding: "14px 24px",
          borderTop: "1px solid rgba(31,41,36,0.07)",
          background: "var(--color-bg)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
          <span style={{ fontSize: "0.71rem", fontWeight: 600, color: "var(--color-muted)" }}>Almacenamiento</span>
          <span style={{ fontSize: "0.71rem", fontWeight: 700, color: "var(--color-ink)" }}>3.2 GB / 10 GB</span>
        </div>
        <div style={{ height: "5px", borderRadius: "3px", background: "rgba(107,144,128,0.12)", overflow: "hidden" }}>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "32%" }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            style={{ height: "100%", borderRadius: "3px", background: "var(--color-sage)" }}
          />
        </div>
      </div>
    </div>
  );
}
