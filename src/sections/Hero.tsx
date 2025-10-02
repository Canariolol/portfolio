"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, ExternalLink, ChevronDown, Globe } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

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
      { value: "2+", label: "Años de experiencia (Dev)" },
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
      { value: "2+", label: "Years of experience" },
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
    <section className="min-h-screen flex items-center justify-center bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.12),transparent_55%),radial-gradient(circle_at_80%_0%,rgba(168,85,247,0.12),transparent_55%),linear-gradient(135deg,rgba(15,23,42,0.05),rgba(2,132,199,0.08))] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(96,165,250,0.12),transparent_55%),radial-gradient(circle_at_80%_0%,rgba(168,85,247,0.14),transparent_55%),linear-gradient(135deg,rgba(15,23,42,0.55),rgba(30,64,175,0.35))] relative overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, rgba(59,130,246,0.28) 1px, transparent 1px), radial-gradient(circle at 75% 75%, rgba(139,92,246,0.28) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100/70 dark:bg-blue-900/40 text-blue-700 dark:text-blue-200 rounded-full text-sm font-medium backdrop-blur">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-70" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
            </span>
            <span className="ml-2">
              {heroContent.badge}
            </span>
          </div>

          <div>
            <div className="text-xl md:text-2xl italic text-slate-500 dark:text-slate-300 mb-1">
              {heroContent.tagline}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-500 to-purple-600">
                {heroContent.name}
              </span>
            </h1>
          </div>

          <div className="text-2xl md:text-3xl text-slate-700 dark:text-slate-200 h-12 flex items-center justify-center gap-2">
            <span className="font-medium">{roles[currentRole]}</span>
            <span className="animate-pulse">|</span>
          </div>

          <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto">
            {heroContent.description}
          </p>

          <blockquote className="italic mt-10 mb-10 px-6 py-6 bg-white/75 dark:bg-slate-900/80 border-l-4 border-blue-500 dark:border-blue-400 rounded-xl shadow-lg max-w-3xl mx-auto">
            “{heroContent.quote}”
          </blockquote>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Button
                variant="outline"
                size="lg"
                onClick={scrollToProjects}
                className="border-2 border-slate-200 dark:border-slate-600 px-8 py-3 text-lg hover:bg-slate-100 dark:hover:bg-slate-800"
              >
              {heroContent.primaryCta}
              <ArrowDown className="ml-3 h-5 w-5" />
            </Button>

            <div className="relative" ref={dropdownRef}>
              <Button
                variant="outline"
                size="lg"
                onClick={() => setIsCvDropdownOpen(!isCvDropdownOpen)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg shadow-lg shadow-blue-500/20"
              >
                <Download className="h-5 w-5" />
                {heroContent.cvButton}
                <ChevronDown className={`h-4 w-4 transition-transform ${isCvDropdownOpen ? "rotate-180" : ""}`} />
              </Button>

              {isCvDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-slate-900 rounded-lg shadow-2xl border border-slate-200 dark:border-slate-700 z-50 overflow-hidden">
                  <div className="flex divide-x divide-slate-200 dark:divide-slate-700">
                    {heroContent.cvOptions.map((option) => (
                      <a
                        key={option.lang}
                        href={option.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center px-4 py-3 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        onClick={() => setIsCvDropdownOpen(false)}
                      >
                        <Globe className="h-4 w-4 mr-2 text-blue-600" />
                        <span>{option.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/contacto">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-slate-200 dark:border-slate-600 px-8 py-3 text-lg hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                {heroContent.contactCta}
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {heroContent.stats.map((stat) => (
  <div key={stat.value} className="text-center">
    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</div>
    <div className="text-slate-600 dark:text-slate-400 text-sm md:text-base">
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

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-slate-400" />
        </div>
      </div>
    </section>
  );
}
