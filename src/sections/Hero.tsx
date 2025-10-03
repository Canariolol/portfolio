"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { ArrowDown, Download, ExternalLink, ChevronDown, Globe } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./Hero.module.css";

type HeroContent = {
  badge: string;
  tagline: string;
  name: string;
  roles: string[];
  description: string;
  quote: string;
  primaryCta: string;
  contactCta: string;
  cvButton: string;
  cvOptions: { label: string; lang: "es" | "en"; url: string }[];
  stats: { value: string; label: string | string[] }[];
  mobileLanguageLabel: string;
  quoteAttribution?: string;
};

const content: Record<"es" | "en", HeroContent> = {
  es: {
    badge: "Disponible para proyectos",
    tagline: "Siempre aprendiendo, siempre mejorando",
    name: "Rodrigo Yáñez",
    roles: [
      "Experto en IA y LLM",
      "Fullstack y Plataformas Cloud",
      "Ingeniería de Contexto",
      "Arquitecto de Soluciones",
    ],
    description:
      "Especialista en implementar soluciones que resuelven problemas reales y optimizan procesos de forma innovadora. Aprovechando al máximo las tecnologías de vanguardia.",
    quote:
      "Te ayudaré con tus proyectos, ideas y desafíos, desde la planificación hasta el despliegue y CI/CD.",
    primaryCta: "Ver mi trabajo",
    contactCta: "Contactarme",
    cvButton: "Descarga mi CV",
    cvOptions: [
      { label: "Inglés", lang: "en", url: "https://storage.googleapis.com/imagenes-portafolio-rodrigoyg/CVs/CV%20-%20Rodrigo%20Yanez%2010-2025%20Eng.pdf" },
      { label: "Español", lang: "es", url: "https://storage.googleapis.com/imagenes-portafolio-rodrigoyg/CVs/CV%20-%20Rodrigo%20Yanez%2010-2025%20Esp.pdf" },
    ],
    stats: [
      { value: "2+", label: "Años de experiencia en Desarrollo" },
      { value: "4", label: "Proyectos en producción (creados desde cero)" },
      { value: "10+", label: "Trabajos freelance completados" },
      { value: "Sí", label: ["Déficit de horas de sueño", "(café... por favor)"] },
    ],
    mobileLanguageLabel: "Idioma",
  },
  en: {
    badge: "Available for new projects",
    tagline: "Always learning, always improving",
    name: "Rodrigo Yáñez",
    roles: [
      "AI & LLM Specialist",
      "Fullstack & Cloud Platforms",
      "Context Engineering",
      "Solution Architect",
    ],
    description:
      "Specialist in implementing solutions that solve real problems and streamline processes in innovative ways. Always leveraging cutting-edge technology.",
    quote:
      "I'll help you bring ideas to life—from planning to deployment and CI/CD, every step of the way.",
    primaryCta: "View my work",
    contactCta: "Get in touch",
    cvButton: "Download my CV",
    cvOptions: [
      { label: "English", lang: "en", url: "https://storage.googleapis.com/tu-bucket/cv-english.pdf" },
      { label: "Spanish", lang: "es", url: "https://storage.googleapis.com/tu-bucket/cv-espanol.pdf" },
    ],
    stats: [
      { value: "2+", label: "Years of experience as Developer" },
      { value: "4", label: "Production projects (built from scratch)" },
      { value: "10+", label: "Freelance engagements delivered" },
      { value: "Yes", label: ["Sleep hours deficit", "(coffee... please)"] },
    ],
    mobileLanguageLabel: "Language",
  },
};

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [isCvDropdownOpen, setIsCvDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();

  const heroContent = content[language];
  const roles = useMemo(() => heroContent.roles, [heroContent.roles]);

  useEffect(() => {
    setCurrentRole(0);
  }, [language]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [language, roles.length]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCvDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('proyectos');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={`${styles.heroSection} section-transition section-transition-blue`}>
      <div className={styles.heroContent}>
        <div className={styles.heroSpace}>
          <div className={styles.badge}>
            <span className={styles.badgePulse}>
              <span className={styles.badgePing} />
              <span className={styles.badgeDot} />
            </span>
            <span>{heroContent.badge}</span>
          </div>

          <div className={styles.titleContainer}>
            <div className={styles.tagline}>{heroContent.tagline}</div>
            <h1 className={styles.mainTitle}>
              <span className={styles.titleGradient}>{heroContent.name}</span>
            </h1>
          </div>

          <div className={styles.rolesContainer}>
            <span className={styles.currentRole}>{roles[currentRole]}</span>
            <span className={styles.roleSeparator}>|</span>
          </div>

          <p className={styles.description}>{heroContent.description}</p>

          <blockquote className={styles.quote}>
            "{heroContent.quote}"
          </blockquote>

          <div className={styles.actionsContainer}>
            <button
              onClick={scrollToProjects}
              className={styles.primaryButton}
            >
              {heroContent.primaryCta}
              <ArrowDown className="ml-3 h-5 w-5" />
            </button>

            <div className={styles.cvDropdown} ref={dropdownRef}>
              <button
                onClick={() => setIsCvDropdownOpen(!isCvDropdownOpen)}
                className={styles.cvButton}
              >
                <Download className={styles.cvIcon} />
                {heroContent.cvButton}
                <ChevronDown className={`${styles.chevronIcon} ${isCvDropdownOpen ? styles.rotated : ""}`} />
              </button>

              {isCvDropdownOpen && (
                <div className={styles.cvDropdownMenu}>
                  <div className={styles.cvDropdownContent}>
                    {heroContent.cvOptions.map((option) => (
                      <a
                        key={option.lang}
                        href={option.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.cvOption}
                        onClick={() => setIsCvDropdownOpen(false)}
                      >
                        <Globe className={styles.cvOptionIcon} />
                        <span>{option.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => {
                const contactSection = document.getElementById('contacto');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className={styles.contactButton}
            >
              {heroContent.contactCta}
              <ExternalLink className={styles.externalIcon} />
            </button>
          </div>

          <div className={styles.statsContainer}>
            {heroContent.stats.map((stat) => (
              <div key={stat.value} className={styles.statItem}>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>
                  {Array.isArray(stat.label) 
                    ? stat.label.map((line, lineIndex) => (
                        <React.Fragment key={lineIndex}>
                          {line}
                          {lineIndex < stat.label.length - 1 && <br />}
                        </React.Fragment>
                      ))
                    : stat.label
                  }
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.scrollIndicator}>
          <ArrowDown className={styles.scrollIcon} />
        </div>
      </div>
    </section>
  );
}
