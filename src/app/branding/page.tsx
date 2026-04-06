import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vensato Branding",
  description: "Assets oficiales de branding de Vensato en formato SVG.",
  robots: {
    index: false,
    follow: false,
  },
};

const assets = [
  {
    name: "Vensato Logo SVG",
    file: "/branding/Vensato Logo SVG.svg",
    size: "1500 x 499",
    note: "Version principal del logo para aplicaciones sobre fondos claros.",
    previewWidth: 420,
    previewBackground: "#F7F9F8",
  },
  {
    name: "Vensato Logo SVG Claro",
    file: "/branding/Vensato Logo SVG Claro.svg",
    size: "1500 x 499",
    note: "Version clara del logo para piezas donde necesitas mas contraste de marca.",
    previewWidth: 420,
    previewBackground: "#1F2924",
  },
  {
    name: "Vensato Favicon SVG",
    file: "/branding/Vensato Favicon SVG.svg",
    size: "1500 x 1500",
    note: "Isotipo oficial para favicon, accesos directos y piezas cuadradas.",
    previewWidth: 220,
    previewBackground: "linear-gradient(180deg, #FFFFFF 0%, #EEF3F0 100%)",
  },
];

const pageStyle: Record<string, string | number> = {
  minHeight: "100vh",
  padding: "96px 24px 72px",
  background:
    "radial-gradient(circle at top, rgba(107,144,128,0.14) 0%, transparent 32%), linear-gradient(180deg, #f7f9f8 0%, #eef3f0 100%)",
};

const shellStyle: Record<string, string | number> = {
  maxWidth: "1180px",
  margin: "0 auto",
};

const cardStyle: Record<string, string | number> = {
  background: "rgba(255,255,255,0.82)",
  border: "1px solid #E2E8E5",
  borderRadius: "28px",
  boxShadow: "0 24px 80px rgba(31,41,36,0.08)",
  backdropFilter: "blur(12px)",
};

const downloadLinkStyle: Record<string, string | number> = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "12px 18px",
  borderRadius: "999px",
  background: "#1F2924",
  color: "#fff",
  fontFamily: "var(--font-sans)",
  fontSize: "0.9rem",
  fontWeight: 700,
  textDecoration: "none",
};

export default function BrandingPage() {
  return (
    <main style={pageStyle}>
      <div style={shellStyle}>
        <section
          style={{
            ...cardStyle,
            padding: "56px clamp(24px, 5vw, 56px)",
            marginBottom: "28px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg, rgba(107,144,128,0.12) 0%, rgba(107,144,128,0) 38%, rgba(224,122,95,0.12) 100%)",
              pointerEvents: "none",
            }}
          />
          <div style={{ position: "relative", zIndex: 1 }}>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.82rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--color-sage)",
                marginBottom: "16px",
              }}
            >
              Branding privado
            </p>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.3rem, 5vw, 4.3rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.05em",
                color: "var(--color-ink)",
                marginBottom: "18px",
              }}
            >
              Assets SVG de Vensato listos para descargar.
            </h1>
            <p
              style={{
                maxWidth: "760px",
                fontFamily: "var(--font-sans)",
                fontSize: "1rem",
                lineHeight: 1.75,
                color: "var(--color-muted)",
                marginBottom: "28px",
              }}
            >
              Esta ruta ahora usa unicamente los tres archivos que agregaste como fuente de verdad. Tambien elimine los SVG anteriores que ya no aportaban nada al proyecto.
            </p>
          </div>
        </section>

        <section style={{ marginBottom: "28px" }}>
          <div style={{ marginBottom: "18px" }}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "2rem",
                letterSpacing: "-0.04em",
                color: "var(--color-ink)",
                marginBottom: "8px",
              }}
            >
              Assets oficiales
            </h2>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                color: "var(--color-muted)",
              }}
            >
              Solo quedan los entregables que definiste como importantes para el branding.
            </p>
          </div>

          <div
            className="branding-assets-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            {assets.map((asset) => (
              <article key={asset.file} style={{ ...cardStyle, padding: "24px" }}>
                <div
                  style={{
                    minHeight: "220px",
                    display: "grid",
                    placeItems: "center",
                    borderRadius: "20px",
                    background: asset.previewBackground,
                    border: "1px solid #E9EFEC",
                    marginBottom: "20px",
                    padding: "24px",
                  }}
                >
                  <Image
                    src={asset.file}
                    alt={asset.name}
                    width={1500}
                    height={1500}
                    style={{ width: "100%", maxWidth: `${asset.previewWidth}px`, height: "auto" }}
                  />
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.4rem",
                    color: "var(--color-ink)",
                    marginBottom: "6px",
                  }}
                >
                  {asset.name}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.84rem",
                    color: "var(--color-sage)",
                    fontWeight: 700,
                    marginBottom: "8px",
                  }}
                >
                  {asset.size}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    color: "var(--color-muted)",
                    fontSize: "0.94rem",
                    lineHeight: 1.65,
                    marginBottom: "16px",
                  }}
                >
                  {asset.note}
                </p>
                <a href={asset.file} download={asset.file.split("/").pop()} style={downloadLinkStyle}>
                  Descargar SVG
                </a>
              </article>
            ))}
          </div>
        </section>

        <style>{`
          @media (max-width: 720px) {
            .branding-assets-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </main>
  );
}
