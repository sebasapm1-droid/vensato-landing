"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedButton from "./AnimatedButton";

const links = [
  { label: "Características", href: "#features" },
  { label: "Simulador", href: "#simulator" },
  { label: "Precios", href: "#pricing" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "background 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
          background: scrolled ? "rgba(255,255,255,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid #E2E8E5" : "1px solid transparent",
          boxShadow: scrolled ? "0 1px 20px rgba(31,41,36,0.05)" : "none",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 24px",
            height: "68px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <a
            href="#"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <img 
              src="/branding/Vensato Logo SVG.svg" 
              alt="Vensato" 
              style={{ height: "32px", width: "auto" }} 
            />
          </a>

          {/* Desktop Nav */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2rem",
            }}
            className="hidden-mobile"
          >
            {links.map((l) => (
              <motion.a
                key={l.label}
                href={l.href}
                whileHover={{ color: "#6B9080" }}
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  color: "var(--color-muted)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
              >
                {l.label}
              </motion.a>
            ))}
            <AnimatedButton href="https://app.vensato.com/login" variant="white" size="sm">
              Ingresar a la App
            </AnimatedButton>
            <AnimatedButton href="https://app.vensato.com/register" variant="primary" size="sm">
              Crear cuenta sin costo
            </AnimatedButton>
          </nav>

          {/* Mobile Burger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              color: "var(--color-ink)",
            }}
            className="show-mobile"
            aria-label="Abrir menú"
          >
            <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
              <rect width="22" height="2" rx="1" fill="currentColor" />
              <rect y="7" width="16" height="2" rx="1" fill="currentColor" />
              <rect y="14" width="22" height="2" rx="1" fill="currentColor" />
            </svg>
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "fixed",
              top: "68px",
              left: 0,
              right: 0,
              zIndex: 49,
              background: "rgba(255,255,255,0.97)",
              backdropFilter: "blur(12px)",
              borderBottom: "1px solid #E2E8E5",
              padding: "20px 24px 28px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 500,
                  color: "var(--color-ink)",
                  textDecoration: "none",
                  fontSize: "1rem",
                }}
              >
                {l.label}
              </a>
            ))}
            <AnimatedButton href="https://app.vensato.com/login" variant="white" size="sm">
              Ingresar a la App
            </AnimatedButton>
            <AnimatedButton href="https://app.vensato.com/register" variant="primary" size="sm">
              Crear cuenta sin costo
            </AnimatedButton>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 768px) {
          .show-mobile { display: none !important; }
          .hidden-mobile { display: flex !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </>
  );
}
