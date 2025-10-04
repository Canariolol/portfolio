"use client";

import { useState, useEffect } from "react";
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
  const [isHeaderExpanded, setIsHeaderExpanded] = useState(false);
  const { language, setLanguage } = useLanguage();

  const items = navigation[language];
  const labels = languageLabels[language];
  const toggleLabel = language === "es" ? "Abrir o cerrar menú" : "Toggle menu";
  const expandLabel = language === "es" ? "Mostrar menú" : "Show menu";

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

  // Close expanded header when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isHeaderExpanded && window.innerWidth <= 767) {
        const target = event.target as Element;
        if (!target.closest(`.${styles.headerContainer}`) && 
            !target.closest(`.${styles.floatingMenuButton}`) &&
            !target.closest(`.${styles.mobileLanguageSelectorFixed}`)) {
          setIsHeaderExpanded(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isHeaderExpanded]);

  // Close expanded header on escape key
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isHeaderExpanded) {
        setIsHeaderExpanded(false);
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, [isHeaderExpanded]);

  // Auto-close expanded header when viewport changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767 && isHeaderExpanded) {
        setIsHeaderExpanded(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isHeaderExpanded]);

  return (
    <>
      <header className={`${styles.headerContainer} ${isHeaderExpanded ? styles.expanded : ""}`}>
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

        {/* Navigation menu for expanded header */}
        {isHeaderExpanded && (
          <div className={styles.expandedMenu}>
            <div className={styles.expandedTitle}>
              Rodrigo Yanez <span className={styles.logoHighlight}>G.</span> - Portfolio
            </div>
            <nav>
              <ul className={styles.expandedNavList}>
                {items.map((item) => (
                  <li key={item.name}>
                    {item.type === "scroll" ? (
                      <button
                        onClick={() => {
                          scrollToSection(item.href.substring(1));
                          setIsHeaderExpanded(false);
                        }}
                        className={styles.expandedNavLink}
                      >
                        {item.name}
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setIsHeaderExpanded(false)}
                        className={styles.expandedNavLink}
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </header>

      {/* Floating menu button for mobile and tablet */}
      <button
        onClick={() => setIsHeaderExpanded(!isHeaderExpanded)}
        className={styles.floatingMenuButton}
        aria-label={expandLabel}
      >
        {isHeaderExpanded ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Fixed language selector for mobile and tablet */}
      <div className={styles.mobileLanguageSelectorFixed}>
        <button
          onClick={() => handleLanguageChange("es")}
          className={`${styles.mobileLanguageOptionFixed} ${language === "es" ? styles.active : ""}`}
        >
          ES
        </button>
        <button
          onClick={() => handleLanguageChange("en")}
          className={`${styles.mobileLanguageOptionFixed} ${language === "en" ? styles.active : ""}`}
        >
          EN
        </button>
      </div>
    </>
  );
}
