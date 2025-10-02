import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageContext";
import { MetadataUpdater } from "@/components/MetadataUpdater";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Metadatos multilingües
const metadataByLanguage = {
  es: {
    title: "Rodrigo Yanez Dev - Portafolio",
    description: "Portafolio profesional de desarrollador especializado en IA y optimización de procesos.",
    keywords: ["desarrollador", "fullstack", "devops", "freelance", "desarrollo web", "next.js", "react", "inteligencia artificial", "procesos", "ia"],
    author: "Rodrigo Yanez",
    locale: "es_ES",
  },
  en: {
    title: "Rodrigo Yanez Dev - Portfolio",
    description: "Professional portfolio of a fullstack developer specialized in AI and process optimization.",
    keywords: ["fullstack", "developer", "devops", "freelance", "web development", "next.js", "react", "artificial intelligence", "processes", "ai"],
    author: "Rodrigo Yanez",
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
        <LanguageProvider>
          <MetadataUpdater />
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
