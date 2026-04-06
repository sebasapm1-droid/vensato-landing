import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vensato — Tu portafolio inmobiliario, sin Excel, sin caos",
  description:
    "Vensato es el Property Management System para inversionistas inmobiliarios en Colombia. Usa el Asistente IA de Vensato, calcula tu rentabilidad real y gestiona inquilinos desde un solo lugar.",
  keywords: ["PMS", "propiedad", "inmobiliario", "Colombia", "PSE", "Cap Rate", "rentas", "gestion"],
  icons: {
    icon: "/branding/Vensato Favicon SVG.svg",
  },
  openGraph: {
    title: "Vensato — Tu portafolio inmobiliario, Automatizado, sin caos",
    description: "Automatiza cobros, calcula rentabilidad y gestiona inquilinos. Sin complicaciones.",
    url: "https://vensato.com",
    siteName: "Vensato",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${playfairDisplay.variable} ${plusJakartaSans.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
