"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./Header.module.css";

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
    <>
      <header className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <div className={styles.logoContainer}>
            <Link href="/" className={styles.logo}>
              Rodrigo Yanez G<span className={styles.logoHighlight}>.</span>
            </Link>
          </div>

          <div className={styles.navigation}>
            <nav>
              <ul className={styles.navList}>
                {items.map((item) => (
                  <li key={item.name}>
                    {item.type === "scroll" ? (
                      <button
                        onClick={() => scrollToSection(item.href.substring(1))}
                        className={styles.navLink}
                      >
                        {item.name}
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className={styles.navLink}
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            
            <div className={styles.languageSelector}>
              <button
                onClick={() => handleLanguageChange("es")}
                className={`${styles.languageOption} ${language === "es" ? styles.active : ""}`}
              >
                ES
              </button>
              <button
                onClick={() => handleLanguageChange("en")}
                className={`${styles.languageOption} ${language === "en" ? styles.active : ""}`}
              >
                EN
              </button>
            </div>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={styles.mobileMenuButton}
            aria-label={toggleLabel}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ""}`}>
          <nav>
            <ul className={styles.mobileNavList}>
              {items.map((item) => (
                <li key={item.name}>
                  {item.type === "scroll" ? (
                    <button
                      onClick={() => {
                        scrollToSection(item.href.substring(1));
                        setIsMenuOpen(false);
                      }}
                      className={styles.mobileNavLink}
                    >
                      {item.name}
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={styles.mobileNavLink}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          
          <div className={styles.mobileLanguageSelector}>
            <div className={styles.mobileLanguageDropdown}>
              <button
                onClick={() => handleLanguageChange("es")}
                className={`${styles.mobileLanguageOption} ${language === "es" ? styles.active : ""}`}
              >
                {labels.mobile.es}
              </button>
              <button
                onClick={() => handleLanguageChange("en")}
                className={`${styles.mobileLanguageOption} ${language === "en" ? styles.active : ""}`}
              >
                {labels.mobile.en}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className={`${styles.mobileMenuOverlay} ${isMenuOpen ? styles.open : ""}`} />
    </>
  );
}
