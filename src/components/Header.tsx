"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

type NavigationItem = {
  name: string;
  href: string;
  type: "link" | "scroll";
};

const navigation: Record<"es" | "en", NavigationItem[]> = {
  es: [
    { name: "Inicio", href: "/", type: "link" },
    { name: "Sobre mí", href: "#sobre-mi", type: "scroll" },
    { name: "Proyectos", href: "#proyectos", type: "scroll" },
    { name: "Contacto", href: "#contacto", type: "scroll" },
  ],
  en: [
    { name: "Home", href: "/", type: "link" },
    { name: "About", href: "#sobre-mi", type: "scroll" },
    { name: "Projects", href: "#proyectos", type: "scroll" },
    { name: "Contact", href: "#contacto", type: "scroll" },
  ],
};

const languageLabels = {
  es: {
    selector: "Idioma",
    mobile: {
      es: "Español",
      en: "Inglés",
    },
  },
  en: {
    selector: "Language",
    mobile: {
      es: "Spanish",
      en: "English",
    },
  },
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const items = navigation[language];
  const labels = languageLabels[language];
  const toggleLabel = language === "es" ? "Abrir o cerrar menú" : "Toggle menu";

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLanguageChange = (lang: "es" | "en") => {
    setLanguage(lang);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Portfolio
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-6">
              {items.map((item) => (
                item.type === "scroll" ? (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href.substring(1))}
                    className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </nav>
            <div className="flex items-center gap-2 rounded-full border border-slate-200/70 dark:border-slate-700/70 bg-white/70 dark:bg-gray-800/70 px-2 py-1 text-xs font-semibold shadow-sm" aria-label={labels.selector}>
              <button
                type="button"
                onClick={() => handleLanguageChange("es")}
                className={`px-3 py-1 rounded-full transition-colors ${language === "es" ? "bg-blue-600 text-white" : "text-slate-600 dark:text-slate-300 hover:text-blue-600"}`}
                aria-pressed={language === "es"}
              >
                ES
              </button>
              <button
                type="button"
                onClick={() => handleLanguageChange("en")}
                className={`px-3 py-1 rounded-full transition-colors ${language === "en" ? "bg-blue-600 text-white" : "text-slate-600 dark:text-slate-300 hover:text-blue-600"}`}
                aria-pressed={language === "en"}
              >
                EN
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              aria-label={toggleLabel}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200 dark:border-slate-800">
            <nav className="flex flex-col space-y-2">
              {items.map((item) => (
                item.type === "scroll" ? (
                  <button
                    key={item.name}
                    onClick={() => {
                      scrollToSection(item.href.substring(1));
                      setIsMenuOpen(false);
                    }}
                    className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2 text-left"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2"
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </nav>
            <div className="flex items-center gap-3 mt-6">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                {labels.selector}
              </span>
              <button
                type="button"
                onClick={() => handleLanguageChange("es")}
                className={`px-3 py-1 text-sm rounded-full border transition-colors ${language === "es" ? "bg-blue-600 text-white border-blue-600" : "border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300"}`}
              >
                {labels.mobile.es}
              </button>
              <button
                type="button"
                onClick={() => handleLanguageChange("en")}
                className={`px-3 py-1 text-sm rounded-full border transition-colors ${language === "en" ? "bg-blue-600 text-white border-blue-600" : "border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300"}`}
              >
                {labels.mobile.en}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
