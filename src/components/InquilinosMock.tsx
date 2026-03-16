"use client";

import { motion } from "framer-motion";

const tenants = [
  {
    name: "Carlos Mendoza",
    initials: "CM",
    property: "Apto 302 · El Nogal",
    status: "al-dia" as const,
    amount: "$2.400.000",
    nextDate: "1 Abr 2025",
    since: "Desde Ene 2023",
  },
  {
    name: "María Fernández",
    initials: "MF",
    property: "Casa 12 · Quinta Camacho",
    status: "vencido" as const,
    amount: "$1.850.000",
    nextDate: "Vencido hace 5 días",
    since: "Desde Mar 2022",
  },
  {
    name: "Andrés Ríos",
    initials: "AR",
    property: "Apto 501 · Chapinero Alto",
    status: "al-dia" as const,
    amount: "$3.100.000",
    nextDate: "3 Abr 2025",
    since: "Desde Jul 2024",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const rowVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.45 } },
};

export default function InquilinosMock() {
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
            Gestión de Inquilinos
          </p>
          <p style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", fontWeight: 700, color: "var(--color-ink)" }}>
            3 inquilinos activos
          </p>
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          <div
            style={{
              padding: "6px 12px",
              borderRadius: "8px",
              background: "rgba(107,144,128,0.08)",
              border: "1px solid rgba(107,144,128,0.18)",
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "var(--color-sage-dark)",
              cursor: "default",
            }}
          >
            2 al día
          </div>
          <div
            style={{
              padding: "6px 12px",
              borderRadius: "8px",
              background: "rgba(224,122,95,0.08)",
              border: "1px solid rgba(224,122,95,0.18)",
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "var(--color-oxide)",
              cursor: "default",
            }}
          >
            1 vencido
          </div>
        </div>
      </div>

      {/* Search bar */}
      <div style={{ padding: "12px 24px", borderBottom: "1px solid rgba(31,41,36,0.06)" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "8px 14px",
            background: "var(--color-bg)",
            border: "1px solid var(--color-border)",
            borderRadius: "10px",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="6" cy="6" r="4.5" stroke="var(--color-muted)" strokeWidth="1.5" />
            <path d="M9.5 9.5l2.5 2.5" stroke="var(--color-muted)" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span style={{ fontSize: "0.82rem", color: "var(--color-muted)" }}>Buscar inquilino o propiedad...</span>
        </div>
      </div>

      {/* Tenant rows */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ padding: "8px 0" }}
      >
        {tenants.map((t, i) => (
          <motion.div
            key={t.name}
            variants={rowVariants}
            whileHover={{ background: "rgba(107,144,128,0.03)" }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              padding: "14px 24px",
              borderBottom: i < tenants.length - 1 ? "1px solid rgba(31,41,36,0.05)" : "none",
              cursor: "default",
              transition: "background 0.15s",
            }}
          >
            {/* Avatar */}
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "12px",
                background: t.status === "al-dia" ? "rgba(107,144,128,0.12)" : "rgba(224,122,95,0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-sans)",
                fontSize: "0.75rem",
                fontWeight: 700,
                color: t.status === "al-dia" ? "var(--color-sage-dark)" : "var(--color-oxide)",
                flexShrink: 0,
              }}
            >
              {t.initials}
            </div>

            {/* Info */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--color-ink)", marginBottom: "2px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                {t.name}
              </p>
              <p style={{ fontSize: "0.72rem", color: "var(--color-muted)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                {t.property} · {t.since}
              </p>
            </div>

            {/* Amount + status */}
            <div style={{ textAlign: "right", flexShrink: 0 }}>
              <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--color-ink)", marginBottom: "4px" }}>{t.amount}</p>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  padding: "3px 8px",
                  borderRadius: "6px",
                  background: t.status === "al-dia" ? "rgba(107,144,128,0.1)" : "rgba(224,122,95,0.1)",
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  color: t.status === "al-dia" ? "var(--color-sage-dark)" : "var(--color-oxide)",
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                }}
              >
                <div
                  style={{
                    width: "5px",
                    height: "5px",
                    borderRadius: "50%",
                    background: t.status === "al-dia" ? "var(--color-sage)" : "var(--color-oxide)",
                  }}
                />
                {t.status === "al-dia" ? `Prox. ${t.nextDate}` : t.nextDate}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Footer action */}
      <div
        style={{
          padding: "14px 24px",
          borderTop: "1px solid rgba(31,41,36,0.07)",
          background: "var(--color-bg)",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--color-sage)", cursor: "default" }}>
          + Agregar inquilino
        </span>
      </div>
    </div>
  );
}
