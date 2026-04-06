"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import AnimatedButton from "@/components/AnimatedButton";
import SectionWrapper from "@/components/SectionWrapper";
import FlipFeatureCard from "@/components/FlipFeatureCard";
import PricingCard from "@/components/PricingCard";
import PainPoints from "@/components/PainPoints";
import FaqSection from "@/components/FaqSection";
import AppPreviewSection from "@/components/AppPreviewSection";

const HeroVisual = dynamic(() => import("@/components/HeroVisual"), { ssr: false });

// --- SVG Icons (no emojis) ------------------------------------------------

const IconAssistant = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M4 7a4 4 0 014-4h6a4 4 0 014 4v4a4 4 0 01-4 4h-3l-4 3v-3H8a4 4 0 01-4-4V7z" stroke="#6B9080" strokeWidth="1.8" strokeLinejoin="round" />
    <circle cx="9" cy="10" r="1" fill="#6B9080" />
    <circle cx="13" cy="10" r="1" fill="#6B9080" />
  </svg>
);

const IconEmail = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <rect x="3" y="5" width="16" height="12" rx="3" stroke="#E07A5F" strokeWidth="1.8" />
    <path d="M5.5 8l5.5 4.5L16.5 8" stroke="#E07A5F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconDocuments = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M6 2h7l5 5v13a1 1 0 01-1 1H6a1 1 0 01-1-1V3a1 1 0 011-1z" stroke="#6B9080" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M13 2v5h5" stroke="#6B9080" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="8" y1="12" x2="14" y2="12" stroke="#6B9080" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="8" y1="15" x2="12" y2="15" stroke="#6B9080" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const IconDashboard = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <rect x="2" y="2" width="8" height="8" rx="2" stroke="#6B9080" strokeWidth="1.8" />
    <rect x="12" y="2" width="8" height="5" rx="2" stroke="#6B9080" strokeWidth="1.8" />
    <rect x="12" y="10" width="8" height="10" rx="2" stroke="#6B9080" strokeWidth="1.8" />
    <rect x="2" y="13" width="8" height="7" rx="2" stroke="#6B9080" strokeWidth="1.8" />
  </svg>
);

const IconContract = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M6 2h8l4 4v13a1 1 0 01-1 1H6a1 1 0 01-1-1V3a1 1 0 011-1z" stroke="#E07A5F" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M14 2v4h4" stroke="#E07A5F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="8" y1="11" x2="15" y2="11" stroke="#E07A5F" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="8" y1="14" x2="13" y2="14" stroke="#E07A5F" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M8 17l1.6 1.4L13 15" stroke="#6B9080" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconMulti = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <circle cx="7" cy="8" r="3" stroke="#E07A5F" strokeWidth="1.8" />
    <circle cx="15" cy="8" r="3" stroke="#6B9080" strokeWidth="1.8" />
    <path d="M2.5 19c0-2.485 2.015-4.5 4.5-4.5" stroke="#E07A5F" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M19.5 19c0-2.485-2.015-4.5-4.5-4.5" stroke="#6B9080" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

// --- Features Data --------------------------------------------------------

const features = [
  {
    icon: <IconAssistant />,
    title: "Asistente Vensato",
    description:
      "Consulta propiedades, inquilinos, cobros, contratos y documentos en lenguaje natural. Tambien lee texto extraido y actualiza campos clave sin salir del dashboard.",
  },
  {
    icon: <IconEmail />,
    title: "Automatización del Recaudo",
    description:
      "Genera un PDF de la cuenta de cobro y envíalo al inquilino, tú decides si enviarlo manualmente o de manera automática mes a mes.",
  },
  {
    icon: <IconDocuments />,
    title: "Bóveda Documental",
    description:
      "Centraliza contratos, pólizas, identificaciones y soportes en un solo lugar para operar con más orden y tener la información lista cuando la necesites.",
  },
  {
    icon: <IconContract />,
    title: "Generación de Contratos",
    description:
      "Crea, personaliza y firma contratos de arrendamiento directamente en la plataforma. Sin impresoras, sin terceros.",
  },
  {
    icon: <IconDashboard />,
    title: "NOI y reportes avanzados",
    description:
      "Visualiza ingresos, gastos, NOI y rentabilidad real del portafolio para tomar decisiones de operacion y crecimiento con mas claridad.",
  },
  {
    icon: <IconMulti />,
    title: "Escalamos con tu portafolio",
    description:
      "Comienza con lo básico, no es necesario pagarle el 8% a un tercero para que gestiones tu portafolio. Crecemos contigo.",
  },
];

// --- Pricing Data ---------------------------------------------------------

const pricingTiers = [
  {
    tier: "Base",
    price: "Gratis",
    description: "Para empezar a organizar un portafolio pequeño con lo esencial.",
    highlights: [
      "Hasta 2",
      "Gestión de propiedades",
      "Gestión de inquilinos",
      "Gestión de contratos",
      "Gestión de cobros",
      "Dashboard básico",
    ],
    ctaLabel: "Empezar gratis",
  },
  {
    tier: "Inicio",
    price: "$15.900",
    description: "El primer plan serio para operar tu portafolio con más orden y menos fricción.",
    highlights: [
      "Hasta 5",
      "Bóveda documental",
      "Envío manual de cuentas de cobro por email",
    ],
    assistantHighlight: "Incluye Asistente IA Vensato",
    inheritedFrom: "Todo lo del plan Base +",
    ctaLabel: "Elegir Inicio",
  },
  {
    tier: "Portafolio",
    price: "$35.000",
    description: "Ideal para propietarios activos que quieren automatización real, visibilidad financiera y más control.",
    highlights: [
      "Hasta 15",
      "Reportes financieros",
      "NOI y rentabilidad",
      "Envío automático de cuentas de cobro por email",
    ],
    assistantHighlight: "Incluye Asistente IA Vensato",
    inheritedFrom: "Todo lo del plan Inicio +",
    highlighted: true,
    badge: "Recomendado",
    ctaLabel: "Elegir Portafolio",
  },
  {
    tier: "Patrimonio",
    price: "$85.000",
    description: "La capa premium para portafolios más amplios, con más holgura operativa y proyección de crecimiento.",
    highlights: [
      "Ilimitadas",
      "Bóveda documental",
      "Operación premium para escalar tu portafolio",
    ],
    assistantHighlight: "Incluye Asistente IA Vensato",
    inheritedFrom: "Todo lo del plan Portafolio +",
    ctaLabel: "Elegir Patrimonio",
  },
];

// --- Logo Cloud -----------------------------------------------------------
const logoCloud = [
  { name: "PSE", subtitle: "Pagos seguros" },
  { name: "Bancolombia", subtitle: "Transferencias" },
  { name: "Davivienda", subtitle: "Transferencias" },
  { name: "Nequi", subtitle: "Cobro directo" },
  { name: "Wompi", subtitle: "Automatizacion" },
];

// --- Hero stagger variants -----------------------------------------------

const heroContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const heroItem = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

// --- Cap Rate Result -----------------------------------------------------

function CapRateResult({ rate }: { rate: number | null }) {
  if (rate === null) return null;
  const color =
    rate >= 7 ? "#a8d5c2" : rate >= 5 ? "#f0c4b7" : "#f0a0a0";
  const label =
    rate >= 7 ? "Retorno excelente" : rate >= 5 ? "Retorno aceptable" : "Retorno bajo";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 350, damping: 22 }}
      style={{
        textAlign: "center",
        padding: "28px",
        background: "rgba(255,255,255,0.1)",
        borderRadius: "16px",
        border: "1px solid rgba(255,255,255,0.18)",
        backdropFilter: "blur(4px)",
      }}
    >
      <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", fontWeight: 700, color: "rgba(255,255,255,0.6)", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.08em" }}>
        Cap Rate estimado
      </p>
      <motion.p
        key={rate}
        initial={{ scale: 0.75 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 20 }}
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "3.5rem",
          fontWeight: 700,
          color: "#fff",
          lineHeight: 1,
          marginBottom: "8px",
        }}
      >
        {rate.toFixed(2)}%
      </motion.p>
      <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", fontWeight: 700, color }}>
        {label}
      </p>
    </motion.div>
  );
}

// --- Page ----------------------------------------------------------------

export default function HomePage() {
  const [precio, setPrecio] = useState("");
  const [arriendo, setArriendo] = useState("");
  const [admin, setAdmin] = useState("");
  const [capRate, setCapRate] = useState<number | null>(null);

  const heroRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const dashboardY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const dashboardOpacity = useTransform(scrollYProgress, [0.65, 1], [1, 0]);

  const parseCOP = (v: string) => parseFloat(v.replace(/[^0-9.]/g, "")) || 0;

  const simulate = () => {
    const p = parseCOP(precio);
    const a = parseCOP(arriendo);
    const g = parseCOP(admin);
    if (p > 0 && a > 0) {
      setCapRate((((a - g) * 12) / p) * 100);
    }
  };

  return (
    <>
      <Navbar />

      {/* --- HERO -------------------------------------------------------- */}
      <section
        ref={heroRef}
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "130px 24px 90px",
          background: `radial-gradient(ellipse 80% 60% at 50% 0%, rgba(107,144,128,0.12) 0%, transparent 70%)`,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236B9080' fill-opacity='0.035'%3E%3Cpath d='M0 0h40v1H0zM0 0v40h1V0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            pointerEvents: "none",
          }}
        />

        {/* Badge */}
        {/* Main copy */}
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          style={{ maxWidth: "920px", margin: "0 auto" }}
        >
          <motion.h1
            variants={heroItem}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.4rem, 5.8vw, 4.3rem)",
              fontWeight: 700,
              color: "var(--color-ink)",
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              marginBottom: "28px",
            }}
          >
            La forma más{" "}
            <span
              style={{
                background: "linear-gradient(135deg, var(--color-sage) 0%, var(--color-sage-light) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              inteligente
            </span>{" "}
            de gestionar tus{" "}
            <span
              style={{
                background: "linear-gradient(135deg, var(--color-sage) 0%, var(--color-sage-light) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              propiedades
            </span>
          </motion.h1>

          <motion.p
            variants={heroItem}
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(0.975rem, 2vw, 1.1rem)",
              color: "var(--color-muted)",
              lineHeight: 1.7,
              maxWidth: "720px",
              margin: "0 auto 34px",
            }}
          >
            Centraliza la gestión de tus inmuebles. Carga documentos, fotos, contratos, etc. Conversa con nuestro asistente IA diseñado para ahorrarte horas de trabajo. Toma el control de tus rentas con automatización de cobros.
          </motion.p>

          <motion.div
            variants={heroItem}
            style={{
              display: "flex",
              gap: "14px",
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: "40px",
            }}
          >
            <AnimatedButton href="https://app.vensato.com/register" variant="primary" size="lg">
              Crear mi cuenta gratis
            </AnimatedButton>
            <AnimatedButton href="#pricing" variant="outline" size="lg">
              Ver planes y beneficios
            </AnimatedButton>
          </motion.div>

        </motion.div>

        {/* Hero Visual Float */}
        <motion.div
          style={{
            y: dashboardY,
            opacity: dashboardOpacity,
            width: "100%",
            maxWidth: "680px",
            padding: "0 16px",
            position: "relative",
          }}
          initial={{ opacity: 0, y: 50, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.75, duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <HeroVisual />
        </motion.div>
      </section>

      {/* --- LOGO CLOUD -------------------------------------------------- */}
      <SectionWrapper>
        <div
          style={{
            borderTop: "1px solid var(--color-border)",
            borderBottom: "1px solid var(--color-border)",
            background: "var(--color-surface)",
            padding: "36px 0",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.8rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "var(--color-muted)",
              textAlign: "center",
              marginBottom: "28px",
            }}
          >
            Automatiza recaudo y operacion con
          </p>

          {/* Marquee container - Constrained to central area */}
          <div
            style={{
              maxWidth: "900px",
              margin: "0 auto",
              overflow: "hidden",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
              maskImage:
                "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
            }}
          >
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 28, ease: "linear", repeat: Infinity }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "clamp(40px, 7vw, 80px)",
                width: "100%",
                paddingLeft: "clamp(40px, 7vw, 80px)",
              }}
            >
              {/* Duplicated for seamless loop */}
              {[...logoCloud, ...logoCloud, ...logoCloud, ...logoCloud].map((l, i) => (
                <div
                  key={`${l.name}-${i}`}
                  style={{ opacity: 0.5, textAlign: "center", flexShrink: 0 }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontWeight: 800,
                      fontSize: "1.15rem",
                      color: "var(--color-ink)",
                      letterSpacing: "-0.02em",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {l.name}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.68rem",
                      color: "var(--color-muted)",
                      fontWeight: 500,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {l.subtitle}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </SectionWrapper>


      {/* --- PAIN POINTS ------------------------------------------------- */}
      <PainPoints />

      {/* --- FEATURES ---------------------------------------------------- */}
      <SectionWrapper id="features" style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
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
              Capas de producto
            </motion.p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontWeight: 700,
                color: "var(--color-ink)",
                letterSpacing: "-0.03em",
                lineHeight: 1.2,
                maxWidth: "640px",
                margin: "0 auto",
              }}
            >
              Gestiona tu portafolio con IA contextual, cobro ordenado y automatización real.
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            {features.map((f, i) => (
              <FlipFeatureCard
                key={f.title}
                icon={f.icon}
                title={f.title}
                description={f.description}
                index={i}
              />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* --- APP PREVIEW ------------------------------------------------- */}
      <AppPreviewSection />

      {/* --- SIMULADOR --------------------------------------------------- */}
      <SectionWrapper id="simulator">
        <div
          style={{
            background: `linear-gradient(135deg, var(--color-ink) 0%, #1a2e26 60%, #2a4038 100%)`,
            padding: "100px 24px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-80px",
              right: "-80px",
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(107,144,128,0.18) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-80px",
              left: "-80px",
              width: "280px",
              height: "280px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(224,122,95,0.1) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              maxWidth: "600px",
              margin: "0 auto",
              position: "relative",
              zIndex: 1,
            }}
          >
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.76rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--color-sage-light)",
                  marginBottom: "12px",
                }}
              >
                Simulador de Rentabilidad
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.7rem, 4vw, 2.5rem)",
                  fontWeight: 700,
                  color: "#fff",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.2,
                  marginBottom: "14px",
                }}
              >
                ¿Cuánto te rinde realmente tu propiedad?
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.95rem",
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.65,
                }}
              >
                Calcula tu Cap Rate en segundos. Así de fácil se ve el análisis con Vensato.
              </p>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                marginBottom: "24px",
              }}
            >
              {[
                { label: "Precio del inmueble (COP)", value: precio, set: setPrecio, ph: "ej. 350.000.000" },
                { label: "Arriendo mensual (COP)", value: arriendo, set: setArriendo, ph: "ej. 2.500.000" },
                { label: "Admin y gastos fijos mensuales (COP)", value: admin, set: setAdmin, ph: "ej. 300.000" },
              ].map((inp) => (
                <div key={inp.label}>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      color: "rgba(255,255,255,0.6)",
                      marginBottom: "6px",
                    }}
                  >
                    {inp.label}
                  </label>
                  <input
                    type="text"
                    inputMode="numeric"
                    value={inp.value}
                    onChange={(e) => {
                      inp.set(e.target.value);
                      setCapRate(null);
                    }}
                    placeholder={inp.ph}
                    style={{
                      width: "100%",
                      padding: "14px 16px",
                      borderRadius: "12px",
                      border: "1px solid rgba(255,255,255,0.14)",
                      background: "rgba(255,255,255,0.07)",
                      color: "#fff",
                      fontFamily: "var(--font-sans)",
                      fontSize: "1rem",
                      fontWeight: 500,
                      outline: "none",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "rgba(107,144,128,0.7)";
                      e.target.style.background = "rgba(255,255,255,0.11)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(255,255,255,0.14)";
                      e.target.style.background = "rgba(255,255,255,0.07)";
                    }}
                  />
                </div>
              ))}
            </div>

            <AnimatedButton onClick={simulate} variant="primary" size="lg" fullWidth>
              Calcular rentabilidad
            </AnimatedButton>

            {capRate !== null && (
              <div style={{ marginTop: "24px" }}>
                <CapRateResult rate={capRate} />
              </div>
            )}

            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.7rem",
                color: "rgba(255,255,255,0.28)",
                textAlign: "center",
                marginTop: "16px",
              }}
            >
              Estimación orientativa. Vensato calcula datos reales de tu portafolio en tiempo real.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* --- PRICING ----------------------------------------------------- */}
      <SectionWrapper id="pricing" style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
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
              Nos ajustamos a tu portafolio
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontWeight: 700,
                color: "var(--color-ink)",
                letterSpacing: "-0.03em",
                lineHeight: 1.2,
                marginBottom: "18px",
              }}
            >
              Elige según el nivel de operación que necesitas hoy
            </h2>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.95rem",
                color: "var(--color-muted)",
                maxWidth: "780px",
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Puedes cancelar o cambiar de plan en cualquier momento.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(265px, 1fr))",
              gap: "24px",
              alignItems: "stretch",
              marginBottom: "32px",
            }}
          >
            {pricingTiers.map((tier, i) => (
              <motion.div
                key={tier.tier}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.55 }}
                style={{ height: "100%" }}
              >
                <PricingCard {...tier} />
              </motion.div>
            ))}
          </div>


          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.78rem",
              color: "var(--color-muted)",
              textAlign: "center",
              marginTop: "28px",
            }}
          >
            Precios en pesos colombianos (COP) por mes. El envío de correo es transaccional y aplica exclusivamente para cuentas de cobro.
          </p>
        </div>
      </SectionWrapper>

      {/* --- FAQ --------------------------------------------------------- */}
      <FaqSection />

      {/* --- FOOTER ------------------------------------------------------ */}
      <footer
        style={{
          background: "var(--color-ink)",
          color: "rgba(255,255,255,0.65)",
          padding: "60px 24px 40px",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexWrap: "wrap",
              gap: "32px",
              marginBottom: "48px",
            }}
          >
            <div style={{ maxWidth: "320px" }}>
              <img
                src="/branding/Vensato Logo SVG Claro.svg"
                alt="Vensato"
                style={{
                  height: "36px",
                  width: "auto",
                  marginBottom: "16px",
                  display: "block",
                }}
              />
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.875rem",
                  lineHeight: 1.65,
                }}
              >
                El Property Management System para inversionistas inmobiliarios independientes en Colombia. Control total, sin comisiones, sin intermediarios.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.4)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                Empieza hoy
              </p>
              <AnimatedButton href="#" variant="primary" size="md">
                Crear mi cuenta gratis
              </AnimatedButton>
            </div>
          </div>

          <div
            style={{
              height: "1px",
              background: "rgba(255,255,255,0.07)",
              marginBottom: "28px",
            }}
          />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.76rem",
              }}
            >
              © 2025 Vensato. Todos los derechos reservados.
            </p>
            <div style={{ display: "flex", gap: "24px" }}>
              {["Privacidad", "Terminos", "Contacto"].map((l) => (
                <motion.a
                  key={l}
                  href="#"
                  whileHover={{ color: "#fff" }}
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.76rem",
                    color: "rgba(255,255,255,0.4)",
                    textDecoration: "none",
                  }}
                >
                  {l}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

