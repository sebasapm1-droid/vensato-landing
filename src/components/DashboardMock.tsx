"use client";

import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const revenueData = [
  { mes: "Ago", ingresos: 4200000, gastos: 1800000 },
  { mes: "Sep", ingresos: 4350000, gastos: 1920000 },
  { mes: "Oct", ingresos: 4100000, gastos: 1750000 },
  { mes: "Nov", ingresos: 4600000, gastos: 1870000 },
  { mes: "Dic", ingresos: 5100000, gastos: 2100000 },
  { mes: "Ene", ingresos: 4800000, gastos: 1980000 },
  { mes: "Feb", ingresos: 5200000, gastos: 2050000 },
  { mes: "Mar", ingresos: 5450000, gastos: 2200000 },
];

const metrics = [
  { label: "NOI Mensual", value: "$3.2M", change: "+8.4%", positive: true },
  { label: "Cap Rate", value: "7.4%", change: "+0.3pp", positive: true },
  { label: "Ocupación", value: "96%", change: "Estable", positive: true },
];

// Custom Tooltip for chart
function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number; name: string }>; label?: string }) {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          background: "#fff",
          border: "1px solid #E2E8E5",
          borderRadius: "10px",
          padding: "10px 14px",
          boxShadow: "0 4px 20px rgba(31,41,36,0.1)",
          fontFamily: "var(--font-sans)",
          fontSize: "0.78rem",
        }}
      >
        <p style={{ color: "#728178", marginBottom: "4px", fontWeight: 600 }}>{label}</p>
        {payload.map((p) => (
          <p key={p.name} style={{ color: "#1F2924", fontWeight: 700 }}>
            {p.name === "ingresos" ? "Ingresos" : "Gastos"}:{" "}
            <span style={{ color: p.name === "ingresos" ? "#6B9080" : "#E07A5F" }}>
              ${(p.value / 1000000).toFixed(1)}M
            </span>
          </p>
        ))}
      </div>
    );
  }
  return null;
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function DashboardMock() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{
        background: "var(--color-surface)",
        borderRadius: "24px",
        padding: "28px",
        boxShadow: "0 40px 80px rgba(31,41,36,0.14), 0 8px 24px rgba(31,41,36,0.08), 0 0 0 1px rgba(226,232,229,0.8)",
        width: "100%",
        maxWidth: "680px",
        margin: "0 auto",
        position: "relative",
      }}
    >
      {/* Top bar */}
      <motion.div
        variants={itemVariants}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <div>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "var(--color-muted)", fontWeight: 600 }}>
            PORTAFOLIO 2025
          </p>
          <h4 style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", color: "var(--color-ink)", fontWeight: 700 }}>
            Resumen de Ingresos
          </h4>
        </div>
        <div
          style={{
            background: "rgba(107,144,128,0.1)",
            borderRadius: "20px",
            padding: "5px 12px",
            fontFamily: "var(--font-sans)",
            fontSize: "0.75rem",
            fontWeight: 700,
            color: "var(--color-sage-dark)",
          }}
        >
          📈 Últimos 8 meses
        </div>
      </motion.div>

      {/* Metrics row */}
      <motion.div
        variants={itemVariants}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "12px",
          marginBottom: "24px",
        }}
      >
        {metrics.map((m) => (
          <div
            key={m.label}
            style={{
              background: "var(--color-bg)",
              borderRadius: "14px",
              padding: "14px 12px",
              border: "1px solid var(--color-border)",
            }}
          >
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.68rem", color: "var(--color-muted)", fontWeight: 600, marginBottom: "4px" }}>
              {m.label}
            </p>
            <p style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 700, color: "var(--color-ink)", lineHeight: 1 }}>
              {m.value}
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", color: "var(--color-sage)", fontWeight: 600, marginTop: "4px" }}>
              {m.change}
            </p>
          </div>
        ))}
      </motion.div>

      {/* Chart */}
      <motion.div variants={itemVariants} style={{ height: "190px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={revenueData} margin={{ top: 5, right: 0, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorIngresos" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6B9080" stopOpacity={0.25} />
                <stop offset="95%" stopColor="#6B9080" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorGastos" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#E07A5F" stopOpacity={0.15} />
                <stop offset="95%" stopColor="#E07A5F" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#E2E8E5" vertical={false} />
            <XAxis
              dataKey="mes"
              tick={{ fontFamily: "var(--font-sans)", fontSize: 11, fill: "#728178" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fontFamily: "var(--font-sans)", fontSize: 10, fill: "#728178" }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v: number) => `$${(v / 1000000).toFixed(1)}M`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="ingresos"
              stroke="#6B9080"
              strokeWidth={2.5}
              fill="url(#colorIngresos)"
              dot={false}
              activeDot={{ r: 5, fill: "#6B9080", strokeWidth: 0 }}
            />
            <Area
              type="monotone"
              dataKey="gastos"
              stroke="#E07A5F"
              strokeWidth={1.5}
              strokeDasharray="4 3"
              fill="url(#colorGastos)"
              dot={false}
              activeDot={{ r: 4, fill: "#E07A5F", strokeWidth: 0 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Legend */}
      <motion.div
        variants={itemVariants}
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "12px",
          justifyContent: "flex-end",
        }}
      >
        {[
          { color: "#6B9080", label: "Ingresos" },
          { color: "#E07A5F", label: "Gastos", dashed: true },
        ].map((l) => (
          <div key={l.label} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <div
              style={{
                width: "24px",
                height: "2.5px",
                background: l.dashed
                  ? `repeating-linear-gradient(to right, ${l.color} 0, ${l.color} 4px, transparent 4px, transparent 7px)`
                  : l.color,
                borderRadius: "2px",
              }}
            />
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.72rem", color: "var(--color-muted)", fontWeight: 500 }}>
              {l.label}
            </span>
          </div>
        ))}
      </motion.div>

      {/* Floating property badges */}
      <motion.div
        initial={{ opacity: 0, x: 30, y: -10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        style={{
          position: "absolute",
          top: "-18px",
          right: "-20px",
          background: "#fff",
          border: "1px solid #E2E8E5",
          borderRadius: "14px",
          padding: "10px 14px",
          boxShadow: "0 8px 24px rgba(31,41,36,0.1)",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#6B9080" }} />
        <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", fontWeight: 700, color: "var(--color-ink)" }}>
          6 propiedades activas
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -30, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        style={{
          position: "absolute",
          bottom: "-16px",
          left: "-16px",
          background: "#fff",
          border: "1px solid #E2E8E5",
          borderRadius: "14px",
          padding: "10px 14px",
          boxShadow: "0 8px 24px rgba(31,41,36,0.1)",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span style={{ fontSize: "1rem" }}>💳</span>
        <div>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.65rem", color: "var(--color-muted)", fontWeight: 600 }}>
            COBRO EXITOSO
          </p>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", fontWeight: 700, color: "var(--color-ink)" }}>
            $1.850.000 PSE
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
