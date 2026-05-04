import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { MetadataUpdater } from "@/components/MetadataUpdater";
import { ScrollReveal } from "@/components/ScrollReveal";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Metadatos multilingües
const metadataByLanguage = {
  es: {
    title: "Rodrigo Yáñez García - Arquitecto de Soluciones",
    description: "Portafolio profesional de Rodrigo Yáñez García, Arquitecto de Soluciones especializado en IA, sistemas, automatización y plataformas cloud.",
    keywords: ["arquitecto de soluciones", "inteligencia artificial", "sistemas", "fullstack", "microservicios", "devops", "automatización", "next.js", "react", "google cloud"],
    author: "Rodrigo Yáñez García",
    locale: "es_ES",
  },
  en: {
    title: "Rodrigo Yáñez García - Solution Architect",
    description: "Professional portfolio of Rodrigo Yáñez García, Solution Architect specialized in AI, systems, automation, and cloud platforms.",
    keywords: ["solution architect", "artificial intelligence", "systems", "fullstack", "microservices", "devops", "automation", "next.js", "react", "google cloud"],
    author: "Rodrigo Yáñez García",
    locale: "en_US",
  },
};

// Función para generar metadatos dinámicamente
export function generateMetadata(): Metadata {
  // Por defecto usamos español, pero esto podría ser dinámico basado en la URL o headers
  const language = "es"; // Esto podría ser dinámico en el futuro
  const meta = metadataByLanguage[language as keyof typeof metadataByLanguage];

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    authors: [{ name: meta.author }],
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "website",
      locale: meta.locale,
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
    robots: "index, follow",
    alternates: {
      canonical: "/",
      languages: {
        "es": "/es",
        "en": "/en",
      },
    },
  };
}

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
        <ThemeProvider>
          <LanguageProvider>
            <MetadataUpdater />
            <ScrollReveal />
            <Header />
            <main>
              {children}
            </main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
