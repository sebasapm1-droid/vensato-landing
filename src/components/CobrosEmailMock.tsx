"use client";

import { motion } from "framer-motion";

const timeline = [
  { label: "PDF generado", meta: "Cuenta de cobro abril" },
  { label: "Correo enviado", meta: "camila@inquilino.com" },
  { label: "Recordatorio programado", meta: "5 días antes del vencimiento" },
];

export default function CobrosEmailMock() {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "24px",
        border: "1px solid rgba(31,41,36,0.08)",
        boxShadow: "0 24px 50px rgba(31,41,36,0.12)",
        maxWidth: "720px",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          padding: "20px 24px",
          borderBottom: "1px solid rgba(31,41,36,0.08)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "12px",
          flexWrap: "wrap",
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--color-muted)",
              marginBottom: "4px",
            }}
          >
            Cobros por correo
          </p>
          <h4 style={{ fontFamily: "var(--font-display)", fontSize: "1.35rem", color: "var(--color-ink)" }}>
            Cuentas de cobro transaccionales con trazabilidad
          </h4>
        </div>
        <div
          style={{
            padding: "8px 12px",
            borderRadius: "999px",
            background: "rgba(107,144,128,0.1)",
            border: "1px solid rgba(107,144,128,0.22)",
            fontFamily: "var(--font-sans)",
            fontSize: "0.74rem",
            fontWeight: 700,
            color: "var(--color-sage-dark)",
          }}
        >
          Manual y automático
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 0.9fr",
          gap: "0",
        }}
      >
        <div style={{ padding: "24px" }}>
          <div
            style={{
              borderRadius: "18px",
              border: "1px solid var(--color-border)",
              overflow: "hidden",
              background: "var(--color-bg)",
            }}
          >
            <div
              style={{
                padding: "14px 16px",
                background: "var(--color-ink)",
                color: "#fff",
              }}
            >
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.72rem", opacity: 0.6, marginBottom: "4px" }}>
                Envío de cuenta de cobro
              </p>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem" }}>
                Torre Nogal · Apto 302
              </p>
            </div>

            <div style={{ padding: "16px" }}>
              {[
                ["Inquilino", "Camila Torres"],
                ["Valor", "$2.650.000 COP"],
                ["Vencimiento", "05 Mayo 2026"],
                ["Adjunto", "Cuenta-cobro-abril.pdf"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "16px",
                    padding: "10px 0",
                    borderBottom: "1px solid rgba(31,41,36,0.06)",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.82rem",
                  }}
                >
                  <span style={{ color: "var(--color-muted)" }}>{label}</span>
                  <span style={{ color: "var(--color-ink)", fontWeight: 700, textAlign: "right" }}>{value}</span>
                </div>
              ))}

              <div style={{ display: "flex", gap: "10px", marginTop: "16px", flexWrap: "wrap" }}>
                <span
                  style={{
                    borderRadius: "999px",
                    padding: "8px 12px",
                    background: "rgba(107,144,128,0.12)",
                    color: "var(--color-sage-dark)",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.74rem",
                    fontWeight: 700,
                  }}
                >
                  Envío manual disponible
                </span>
                <span
                  style={{
                    borderRadius: "999px",
                    padding: "8px 12px",
                    background: "rgba(224,122,95,0.12)",
                    color: "var(--color-oxide)",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.74rem",
                    fontWeight: 700,
                  }}
                >
                  Cron 5 días antes
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            padding: "24px",
            background: "linear-gradient(180deg, rgba(107,144,128,0.08) 0%, rgba(255,255,255,0) 100%)",
            borderLeft: "1px solid rgba(31,41,36,0.06)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.72rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "var(--color-sage)",
              marginBottom: "14px",
            }}
          >
            Trazabilidad
          </p>
          <div style={{ display: "grid", gap: "12px" }}>
            {timeline.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.16 * index + 0.2, duration: 0.35 }}
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "flex-start",
                  padding: "12px 0",
                  borderBottom: "1px solid rgba(31,41,36,0.06)",
                }}
              >
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: index === 1 ? "var(--color-oxide)" : "var(--color-sage)",
                    marginTop: "6px",
                    flexShrink: 0,
                  }}
                />
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.84rem",
                      color: "var(--color-ink)",
                      fontWeight: 700,
                      marginBottom: "2px",
                    }}
                  >
                    {item.label}
                  </p>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.76rem", color: "var(--color-muted)" }}>
                    {item.meta}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}