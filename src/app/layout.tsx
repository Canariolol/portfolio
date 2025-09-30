import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tu Nombre - Desarrollador Fullstack & DevOps",
  description: "Portafolio profesional de desarrollador fullstack especializado en crear aplicaciones web modernas y optimizar procesos con DevOps.",
  keywords: ["desarrollador fullstack", "devops", "freelance", "web development", "next.js", "react"],
  authors: [{ name: "Tu Nombre" }],
  openGraph: {
    title: "Tu Nombre - Desarrollador Fullstack & DevOps",
    description: "Portafolio profesional de desarrollador fullstack especializado en crear aplicaciones web modernas y optimizar procesos con DevOps.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tu Nombre - Desarrollador Fullstack & DevOps",
    description: "Portafolio profesional de desarrollador fullstack especializado en crear aplicaciones web modernas y optimizar procesos con DevOps.",
  },
  robots: "index, follow",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <LanguageProvider>
          <Header />
          <main className="pt-16">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
