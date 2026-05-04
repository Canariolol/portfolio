"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowDown, ArrowRight, ChevronDown, Download, Globe, RadioTower, ShieldCheck, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

type HeroContent = {
  badge: string;
  eyebrow: string;
  name: string;
  headline: string;
  roles: string[];
  description: string;
  quote: string;
  primaryCta: string;
  contactCta: string;
  cvButton: string;
  cvOptions: { label: string; lang: "es" | "en"; url: string }[];
  stats: { value: string; label: string }[];
  systemCards: { title: string; value: string; detail: string }[];
};

const content: Record<"es" | "en", HeroContent> = {
  es: {
    badge: "Arquitecto de Soluciones | IA y Sistemas",
    eyebrow: "Chile · IA aplicada · Plataformas cloud",
    name: "Rodrigo Yáñez García",
    headline: "Diseño sistemas que convierten procesos lentos en ventaja operativa.",
    roles: ["Arquitectura", "IA aplicada", "Microservicios", "Observabilidad"],
    description:
      "Conecto objetivos de negocio con arquitecturas escalables y mantenibles. Trabajo desde el descubrimiento técnico hasta producción, con planificación, documentación, testing y foco en impacto medible.",
    quote: "Mi misión es ayudar a ahorrar el recurso más valioso de todos: el tiempo.",
    primaryCta: "Ver casos",
    contactCta: "Hablemos",
    cvButton: "CV actualizado",
    cvOptions: [{ label: "Español 2026", lang: "es", url: "/cv/rodrigo-yanez-2026-es.pdf" }],
    stats: [
      { value: "14", label: "años en telecomunicaciones y TI" },
      { value: "90%", label: "menos tiempo en gestión documental" },
      { value: "3.5k/s", label: "puntos GPS procesados en promedio" },
    ],
    systemCards: [
      { title: "Discovery", value: "PRD", detail: "requerimientos, alcance y criterios" },
      { title: "Build", value: "API + IA", detail: "microservicios, datos y automatización" },
      { title: "Run", value: "Obs", detail: "métricas, logs y mejora continua" },
    ],
  },
  en: {
    badge: "Solution Architect | AI & Systems",
    eyebrow: "Chile · Applied AI · Cloud platforms",
    name: "Rodrigo Yáñez García",
    headline: "I design systems that turn slow processes into operational advantage.",
    roles: ["Architecture", "Applied AI", "Microservices", "Observability"],
    description:
      "I connect business goals with scalable, maintainable architectures. I work from technical discovery to production with planning, documentation, testing, and measurable impact.",
    quote: "My mission is to help save the most valuable resource of all: time.",
    primaryCta: "View cases",
    contactCta: "Let's talk",
    cvButton: "Updated CV",
    cvOptions: [{ label: "Spanish 2026", lang: "es", url: "/cv/rodrigo-yanez-2026-es.pdf" }],
    stats: [
      { value: "14", label: "years across telecom and IT" },
      { value: "90%", label: "less time in document workflows" },
      { value: "3.5k/s", label: "average GPS points processed" },
    ],
    systemCards: [
      { title: "Discovery", value: "PRD", detail: "requirements, scope, and criteria" },
      { title: "Build", value: "API + AI", detail: "microservices, data, and automation" },
      { title: "Run", value: "Obs", detail: "metrics, logs, and evolution" },
    ],
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
      setCurrentRole((previousRole) => (previousRole + 1) % roles.length);
    }, 2400);
    return () => clearInterval(interval);
  }, [roles.length]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCvDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollTo = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="portfolio-shell relative flex min-h-screen items-center overflow-hidden px-4 pb-20 pt-28 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-16 h-px bg-[color:var(--border)]" />
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.06fr_0.94fr]">
        <div className="max-w-3xl">
          <div className="mb-8 inline-flex items-center gap-3 rounded-md border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
            <span className="h-2 w-2 rounded-full bg-[color:var(--accent)]" />
            {heroContent.badge}
          </div>

          <p className="mb-5 text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--muted)]">{heroContent.eyebrow}</p>
          <h1 className="max-w-5xl text-5xl font-black leading-[0.96] tracking-tight text-[color:var(--foreground)] sm:text-6xl lg:text-7xl">
            {heroContent.name}
            <span className="mt-5 block text-[color:var(--accent-strong)]">{heroContent.headline}</span>
          </h1>

          <div className="mt-8 flex min-h-10 flex-wrap items-center gap-3 text-xl font-black text-[color:var(--foreground)]">
            <span className="rounded-md bg-[color:var(--accent-soft)] px-3 py-1 text-[color:var(--accent-strong)]">{roles[currentRole]}</span>
            <span className="text-[color:var(--muted)]">/ {language === "es" ? "de idea a producción" : "from idea to production"}</span>
          </div>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[color:var(--muted)]">{heroContent.description}</p>
          <blockquote className="mt-7 border-l-4 border-[color:var(--accent)] pl-5 text-lg font-semibold text-[color:var(--foreground)]">
            “{heroContent.quote}”
          </blockquote>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              onClick={() => scrollTo("proyectos")}
              className="h-12 rounded-md bg-[color:var(--foreground)] px-6 text-[color:var(--background)] hover:opacity-90"
            >
              {heroContent.primaryCta}
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollTo("contacto")}
              className="h-12 rounded-md border-[color:var(--border)] bg-[color:var(--surface)] px-6 text-[color:var(--foreground)] hover:bg-[color:var(--surface-muted)]"
            >
              {heroContent.contactCta}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <div className="relative" ref={dropdownRef}>
              <Button
                size="lg"
                variant="outline"
                onClick={() => setIsCvDropdownOpen((isOpen) => !isOpen)}
                className="h-12 rounded-md border-[color:var(--border)] bg-transparent px-6 text-[color:var(--foreground)] hover:bg-[color:var(--surface-muted)]"
              >
                <Download className="mr-2 h-4 w-4" />
                {heroContent.cvButton}
                <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${isCvDropdownOpen ? "rotate-180" : ""}`} />
              </Button>
              {isCvDropdownOpen && (
                <div className="absolute left-0 top-full z-30 mt-2 w-56 overflow-hidden rounded-md border border-[color:var(--border)] bg-[color:var(--surface)] shadow-2xl">
                  {heroContent.cvOptions.map((option) => (
                    <a
                      key={option.label}
                      href={option.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-3 text-sm font-bold text-[color:var(--foreground)] hover:bg-[color:var(--surface-muted)]"
                      onClick={() => setIsCvDropdownOpen(false)}
                    >
                      <Globe className="h-4 w-4 text-[color:var(--accent-strong)]" />
                      {option.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="mt-12 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
            {heroContent.stats.map((stat) => (
              <div key={stat.value} className="border-l border-[color:var(--border)] pl-4">
                <div className="text-3xl font-black text-[color:var(--foreground)]">{stat.value}</div>
                <div className="mt-1 text-sm font-semibold leading-5 text-[color:var(--muted)]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="surface-panel overflow-hidden rounded-lg">
            <div className="flex items-center justify-between border-b border-[color:var(--border)] px-5 py-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[color:var(--muted)]">Architecture map</p>
                <h2 className="mt-1 text-xl font-black text-[color:var(--foreground)]">Business goal → production system</h2>
              </div>
              <RadioTower className="h-6 w-6 text-[color:var(--accent-strong)]" />
            </div>

            <div className="grid gap-4 p-5">
              {heroContent.systemCards.map((card, index) => (
                <div key={card.title} className="grid grid-cols-[auto_1fr] gap-4 rounded-md border border-[color:var(--border)] bg-[color:var(--background)] p-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-[color:var(--foreground)] text-sm font-black text-[color:var(--background)]">
                    0{index + 1}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-black text-[color:var(--foreground)]">{card.title}</h3>
                      <span className="rounded bg-[color:var(--accent-soft)] px-2 py-1 text-xs font-black text-[color:var(--accent-strong)]">{card.value}</span>
                    </div>
                    <p className="mt-1 text-sm font-medium text-[color:var(--muted)]">{card.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 border-t border-[color:var(--border)]">
              <div className="p-5">
                <ShieldCheck className="mb-3 h-6 w-6 text-[color:var(--accent-strong)]" />
                <p className="text-sm font-black text-[color:var(--foreground)]">QA + docs</p>
                <p className="mt-1 text-sm text-[color:var(--muted)]">manual, automated, spec-driven</p>
              </div>
              <div className="border-l border-[color:var(--border)] p-5">
                <Workflow className="mb-3 h-6 w-6 text-[color:var(--accent-strong)]" />
                <p className="text-sm font-black text-[color:var(--foreground)]">Ops ready</p>
                <p className="mt-1 text-sm text-[color:var(--muted)]">metrics, logs, delivery</p>
              </div>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-3 text-xs font-black uppercase tracking-[0.16em] text-[color:var(--muted)]">
            <span>Node</span>
            <span>Python</span>
            <span>GCP</span>
            <span>Redis</span>
            <span>RabbitMQ</span>
            <span>PostgreSQL</span>
          </div>
        </div>
      </div>
    </section>
  );
}
