"use client";

import { motion } from "framer-motion";

const messages = [
  {
    id: "user-1",
    role: "user" as const,
    text: "Muéstrame los cobros pendientes de abril y dime qué contratos vencen este mes.",
  },
  {
    id: "assistant-1",
    role: "assistant" as const,
    text: "Tienes 3 cobros pendientes en abril. También encontré 2 contratos por vencer este mes: Apto 302 y Casa 12.",
  },
  {
    id: "user-2",
    role: "user" as const,
    text: "Actualiza el canon del Apto 302 a $2.650.000 y déjalo registrado.",
  },
  {
    id: "assistant-2",
    role: "assistant" as const,
    text: "Listo. Ya actualicé el canon del Apto 302 y guardé la trazabilidad en el historial del inmueble.",
  },
];

const stats = [
  { label: "Propiedades", value: "5 activas" },
  { label: "Cobros", value: "3 pendientes" },
  { label: "Documentos", value: "12 leídos" },
];

export default function AsistenteVensatoMock() {
  return (
    <div
      style={{
        position: "relative",
        background: "linear-gradient(180deg, #1F2924 0%, #26352E 100%)",
        borderRadius: "24px",
        padding: "26px",
        boxShadow: "0 26px 60px rgba(31,41,36,0.22)",
        maxWidth: "720px",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-80px",
          right: "-40px",
          width: "220px",
          height: "220px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(107,144,128,0.28) 0%, transparent 72%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "12px",
          marginBottom: "18px",
          position: "relative",
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
              color: "rgba(255,255,255,0.45)",
              marginBottom: "4px",
            }}
          >
            Asistente Vensato
          </p>
          <h4 style={{ fontFamily: "var(--font-display)", fontSize: "1.35rem", color: "#fff" }}>
            Conversa con tu operación en tiempo real
          </h4>
        </div>
        <div
          style={{
            padding: "8px 12px",
            borderRadius: "999px",
            background: "rgba(107,144,128,0.14)",
            border: "1px solid rgba(107,144,128,0.32)",
            fontFamily: "var(--font-sans)",
            fontSize: "0.74rem",
            fontWeight: 700,
            color: "var(--color-sage-light)",
          }}
        >
          Popup global
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 0.8fr",
          gap: "16px",
          alignItems: "stretch",
          position: "relative",
        }}
      >
        <div
          style={{
            borderRadius: "20px",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.09)",
            padding: "18px",
            display: "flex",
            flexDirection: "column",
            minHeight: "420px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "16px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div
                style={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "12px",
                  background: "rgba(107,144,128,0.18)",
                  display: "grid",
                  placeItems: "center",
                  color: "#DDE9E3",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.82rem",
                  fontWeight: 800,
                }}
              >
                V
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.84rem", color: "#fff", fontWeight: 700 }}>
                  Chat operativo
                </p>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.72rem", color: "rgba(255,255,255,0.45)" }}>
                  Propiedades, cobros, contratos y documentos
                </p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "4px" }}>
              {[0, 1, 2].map((dot) => (
                <span
                  key={dot}
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.24)",
                    display: "inline-block",
                  }}
                />
              ))}
            </div>
          </div>

          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              marginBottom: "16px",
            }}
          >
            {messages.map((message, index) => {
              const isUser = message.role === "user";

              return (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 12, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.18 * index + 0.1, duration: 0.35 }}
                  style={{
                    display: "flex",
                    justifyContent: isUser ? "flex-end" : "flex-start",
                  }}
                >
                  <div
                    style={{
                      maxWidth: "82%",
                      padding: "14px 16px",
                      borderRadius: isUser ? "18px 18px 6px 18px" : "18px 18px 18px 6px",
                      background: isUser ? "#F6F8F7" : "rgba(107,144,128,0.16)",
                      color: isUser ? "var(--color-ink)" : "#fff",
                      border: isUser ? "1px solid rgba(255,255,255,0.22)" : "1px solid rgba(107,144,128,0.22)",
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.9rem",
                      lineHeight: 1.65,
                      boxShadow: isUser ? "0 8px 18px rgba(0,0,0,0.08)" : "none",
                    }}
                  >
                    {message.text}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.35 }}
            style={{
              borderRadius: "16px",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.08)",
              padding: "12px 14px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                flex: 1,
                color: "rgba(255,255,255,0.42)",
                fontFamily: "var(--font-sans)",
                fontSize: "0.84rem",
              }}
            >
              Escribe una instrucción sobre tu portafolio...
            </div>
            <div
              style={{
                width: "34px",
                height: "34px",
                borderRadius: "12px",
                background: "var(--color-sage)",
                display: "grid",
                placeItems: "center",
                color: "#fff",
                flexShrink: 0,
              }}
            >
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M2 7.5h9M8.5 4L12 7.5 8.5 11" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </motion.div>
        </div>

        <div style={{ display: "grid", gap: "12px" }}>
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 * index + 0.4, duration: 0.35 }}
              style={{
                borderRadius: "18px",
                padding: "16px",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.09)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.68rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.4)",
                  fontWeight: 700,
                  marginBottom: "6px",
                }}
              >
                {item.label}
              </p>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", color: "#fff" }}>
                {item.value}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}