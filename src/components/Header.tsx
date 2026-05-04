"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

type NavigationItem = {
  name: string;
  href: string;
  type: "link" | "scroll";
};

const navigation: Record<"es" | "en", NavigationItem[]> = {
  es: [
    { name: "Inicio", href: "/", type: "link" },
    { name: "Perfil", href: "#sobre-mi", type: "scroll" },
    { name: "Casos", href: "#proyectos", type: "scroll" },
    { name: "Contacto", href: "#contacto", type: "scroll" },
  ],
  en: [
    { name: "Home", href: "/", type: "link" },
    { name: "Profile", href: "#sobre-mi", type: "scroll" },
    { name: "Cases", href: "#proyectos", type: "scroll" },
    { name: "Contact", href: "#contacto", type: "scroll" },
  ],
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const items = navigation[language];
  const toggleLabel = language === "es" ? "Cambiar tema" : "Toggle theme";

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleLanguageChange = (lang: "es" | "en") => {
    setLanguage(lang);
    setIsMenuOpen(false);
  };

  const renderNavigationItem = (item: NavigationItem, mobile = false) => {
    const className = mobile
      ? "block w-full rounded-md px-3 py-3 text-left text-sm font-semibold text-[color:var(--foreground)] hover:bg-[color:var(--surface-muted)]"
      : "text-sm font-semibold text-[color:var(--muted)] transition-colors hover:text-[color:var(--foreground)]";

    if (item.type === "scroll") {
      return (
        <button
          key={item.name}
          type="button"
          onClick={() => {
            scrollToSection(item.href.substring(1));
            setIsMenuOpen(false);
          }}
          className={className}
        >
          {item.name}
        </button>
      );
    }

    return (
      <Link key={item.name} href={item.href} onClick={() => setIsMenuOpen(false)} className={className}>
        {item.name}
      </Link>
    );
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[color:var(--border)]/80 bg-[color:var(--background)]/88 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-[color:var(--foreground)] text-sm font-black text-[color:var(--background)]">
            RY
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-black tracking-tight text-[color:var(--foreground)]">Rodrigo Yáñez G.</span>
            <span className="block text-xs font-semibold text-[color:var(--muted)]">Solution Architect</span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          <nav className="flex items-center gap-6">{items.map((item) => renderNavigationItem(item))}</nav>

          <div className="flex items-center gap-2">
            <div className="flex rounded-md border border-[color:var(--border)] bg-[color:var(--surface)] p-1 text-xs font-black">
              <button
                type="button"
                onClick={() => handleLanguageChange("es")}
                className={`rounded px-2.5 py-1.5 ${language === "es" ? "bg-[color:var(--foreground)] text-[color:var(--background)]" : "text-[color:var(--muted)]"}`}
                aria-pressed={language === "es"}
              >
                ES
              </button>
              <button
                type="button"
                onClick={() => handleLanguageChange("en")}
                className={`rounded px-2.5 py-1.5 ${language === "en" ? "bg-[color:var(--foreground)] text-[color:var(--background)]" : "text-[color:var(--muted)]"}`}
                aria-pressed={language === "en"}
              >
                EN
              </button>
            </div>
            <button
              type="button"
              onClick={toggleTheme}
              className="flex h-10 w-10 items-center justify-center rounded-md border border-[color:var(--border)] bg-[color:var(--surface)] text-[color:var(--foreground)] transition-transform hover:-translate-y-0.5"
              aria-label={toggleLabel}
              title={toggleLabel}
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-[color:var(--border)] bg-[color:var(--surface)] text-[color:var(--foreground)] md:hidden"
          aria-label={language === "es" ? "Abrir menú" : "Open menu"}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-[color:var(--border)] bg-[color:var(--background)] px-4 py-4 md:hidden">
          <nav className="space-y-1">{items.map((item) => renderNavigationItem(item, true))}</nav>
          <div className="mt-4 flex items-center gap-2">
            <button
              type="button"
              onClick={() => handleLanguageChange("es")}
              className={`rounded-md border border-[color:var(--border)] px-4 py-2 text-sm font-bold ${language === "es" ? "bg-[color:var(--foreground)] text-[color:var(--background)]" : "text-[color:var(--foreground)]"}`}
            >
              Español
            </button>
            <button
              type="button"
              onClick={() => handleLanguageChange("en")}
              className={`rounded-md border border-[color:var(--border)] px-4 py-2 text-sm font-bold ${language === "en" ? "bg-[color:var(--foreground)] text-[color:var(--background)]" : "text-[color:var(--foreground)]"}`}
            >
              English
            </button>
            <button
              type="button"
              onClick={toggleTheme}
              className="ml-auto flex h-10 w-10 items-center justify-center rounded-md border border-[color:var(--border)] text-[color:var(--foreground)]"
              aria-label={toggleLabel}
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
