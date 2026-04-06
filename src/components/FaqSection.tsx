"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const faqs = [
  {
    q: "¿El Asistente Vensato es un chatbot genérico?",
    a: "No. Es un asistente operativo y administrativo dentro del dashboard. Puede consultar propiedades, inquilinos, cobros, contratos y documentos, leer texto extraído y ayudarte a actualizar campos clave del portafolio.",
  },
  {
    q: "¿En qué planes está disponible el Asistente Vensato?",
    a: "Está disponible en Inicio, Portafolio y Patrimonio. El plan Base no incluye acceso al asistente.",
  },
  {
    q: "¿Qué significa envío de cuentas de cobro por correo?",
    a: "Es una funcionalidad transaccional enfocada en recaudo inmobiliario. Vensato genera la cuenta de cobro en PDF y la envía al correo del inquilino con trazabilidad desde la plataforma.",
  },
  {
    q: "¿El envío por correo es manual o automático?",
    a: "Depende del plan. Inicio incluye envío manual. Portafolio y Patrimonio incluyen envío manual y automático, incluyendo el recordatorio 5 días antes del vencimiento.",
  },
  {
    q: "¿Vensato retiene el dinero de mis arriendos?",
    a: "No. Vensato no es una billetera ni un intermediario financiero. El objetivo es ayudarte a administrar y cobrar mejor, no retener tus fondos.",
  },
];

function FaqItem({ item, index }: { item: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.45 }}
      style={{
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        style={{
          width: "100%",
          background: "none",
          border: "none",
          padding: "24px 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "16px",
          cursor: "pointer",
          textAlign: "left",
        }}
        aria-expanded={open}
      >
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.975rem",
            fontWeight: 600,
            color: "var(--color-ink)",
            lineHeight: 1.45,
          }}
        >
          {item.q}
        </span>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          style={{
            flexShrink: 0,
            width: "28px",
            height: "28px",
            borderRadius: "50%",
            background: open ? "var(--color-sage)" : "rgba(107,144,128,0.1)",
            border: "1px solid rgba(107,144,128,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background 0.2s",
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <line x1="6" y1="1" x2="6" y2="11" stroke={open ? "#fff" : "#6B9080"} strokeWidth="2" strokeLinecap="round" />
            <line x1="1" y1="6" x2="11" y2="6" stroke={open ? "#fff" : "#6B9080"} strokeWidth="2" strokeLinecap="round" />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.9rem",
                color: "var(--color-muted)",
                lineHeight: 1.7,
                paddingBottom: "24px",
                maxWidth: "680px",
              }}
            >
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FaqSection() {
  return (
    <SectionWrapper
      style={{
        padding: "100px 24px",
        background: "var(--color-bg)",
      }}
    >
      <div style={{ maxWidth: "760px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
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
            Preguntas frecuentes
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.7rem, 4vw, 2.5rem)",
              fontWeight: 700,
              color: "var(--color-ink)",
              letterSpacing: "-0.03em",
              lineHeight: 1.2,
            }}
          >
            Todo lo que necesitas saber antes de empezar.
          </h2>
        </div>

        <div>
          {faqs.map((item, i) => (
            <FaqItem key={item.q} item={item} index={i} />
          ))}
        </div>

        <div
          style={{
            marginTop: "48px",
            textAlign: "center",
            padding: "32px",
            background: "var(--color-surface)",
            borderRadius: "16px",
            border: "1px solid var(--color-border)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.9rem",
              color: "var(--color-muted)",
              marginBottom: "4px",
            }}
          >
            {"¿Tienes otra pregunta?"}
          </p>
          <motion.a
            href="#"
            whileHover={{ color: "var(--color-sage-dark)" }}
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.9rem",
              fontWeight: 700,
              color: "var(--color-sage)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
          >
            {"Escríbenos a hola@vensato.com"}
          </motion.a>
        </div>
      </div>
    </SectionWrapper>
  );
}
