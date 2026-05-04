"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Brain, Cloud, Code2, Database, Eye, Plus, Workflow } from "lucide-react";
import {
  SiDocker,
  SiFastapi,
  SiFirebase,
  SiFlask,
  SiGithubactions,
  SiGooglegemini,
  SiGooglecloud,
  SiJavascript,
  SiMui,
  SiN8N,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { useLanguage } from "@/context/LanguageContext";

type Language = "es" | "en";
type Category = "frontend" | "backend" | "ai" | "data" | "cloud" | "ops";

type Tool = {
  name: string;
  category: Category | "more";
  icon: React.ReactNode;
  description: Record<Language, string>;
  usage: Record<Language, string>;
};

const categories: Record<Category, { icon: React.ElementType; label: Record<Language, string> }> = {
  frontend: { icon: Code2, label: { es: "Frontend", en: "Frontend" } },
  backend: { icon: Workflow, label: { es: "Backend", en: "Backend" } },
  ai: { icon: Brain, label: { es: "IA", en: "AI" } },
  data: { icon: Database, label: { es: "Datos", en: "Data" } },
  cloud: { icon: Cloud, label: { es: "Cloud", en: "Cloud" } },
  ops: { icon: Eye, label: { es: "Ops", en: "Ops" } },
};

const tools: Tool[] = [
  {
    name: "TypeScript",
    category: "frontend",
    icon: <SiTypescript />,
    description: { es: "Tipado fuerte para interfaces y lógica de producto mantenible.", en: "Strong typing for maintainable product interfaces and logic." },
    usage: { es: "Aplicaciones React/Next.js, componentes y contratos de datos.", en: "React/Next.js apps, components, and data contracts." },
  },
  {
    name: "React",
    category: "frontend",
    icon: <SiReact />,
    description: { es: "Interfaces interactivas con componentes reutilizables.", en: "Interactive interfaces with reusable components." },
    usage: { es: "Dashboards, portales SaaS y vistas operativas.", en: "Dashboards, SaaS portals, and operational views." },
  },
  {
    name: "Next.js",
    category: "frontend",
    icon: <SiNextdotjs />,
    description: { es: "Framework para sitios y productos web modernos.", en: "Framework for modern sites and web products." },
    usage: { es: "Portafolios, landing pages, SaaS y APIs livianas.", en: "Portfolios, landing pages, SaaS, and lightweight APIs." },
  },
  {
    name: "TailwindCSS",
    category: "frontend",
    icon: <SiTailwindcss />,
    description: { es: "Sistema visual rápido, consistente y fácil de iterar.", en: "Fast, consistent visual systems that are easy to iterate." },
    usage: { es: "Diseño UI, prototipos y sistemas responsivos.", en: "UI design, prototypes, and responsive systems." },
  },
  {
    name: "JavaScript",
    category: "frontend",
    icon: <SiJavascript />,
    description: { es: "Base para automatizaciones web y lógica cliente.", en: "Foundation for web automation and client logic." },
    usage: { es: "Integraciones, scripting y productos web.", en: "Integrations, scripting, and web products." },
  },
  {
    name: "MUI",
    category: "frontend",
    icon: <SiMui />,
    description: { es: "Componentes robustos para interfaces empresariales.", en: "Robust components for enterprise interfaces." },
    usage: { es: "Dashboards internos y herramientas de gestión.", en: "Internal dashboards and management tools." },
  },
  {
    name: "Python",
    category: "backend",
    icon: <SiPython />,
    description: { es: "Backend, procesamiento de datos y automatización.", en: "Backend, data processing, and automation." },
    usage: { es: "APIs, pipelines, scripts y servicios de IA.", en: "APIs, pipelines, scripts, and AI services." },
  },
  {
    name: "FastAPI",
    category: "backend",
    icon: <SiFastapi />,
    description: { es: "APIs rápidas, tipadas y listas para documentación.", en: "Fast, typed APIs ready for documentation." },
    usage: { es: "Microservicios, reportes y backends de producto.", en: "Microservices, reporting, and product backends." },
  },
  {
    name: "Node.js",
    category: "backend",
    icon: <SiNodedotjs />,
    description: { es: "Servicios y APIs con alto ecosistema de integración.", en: "Services and APIs with a strong integration ecosystem." },
    usage: { es: "Integraciones, workers y servicios web.", en: "Integrations, workers, and web services." },
  },
  {
    name: "Flask",
    category: "backend",
    icon: <SiFlask />,
    description: { es: "Backend liviano para prototipos y servicios acotados.", en: "Lightweight backend for prototypes and scoped services." },
    usage: { es: "MVPs, APIs pequeñas y soluciones internas.", en: "MVPs, small APIs, and internal solutions." },
  },
  {
    name: "Gemini",
    category: "ai",
    icon: <SiGooglegemini />,
    description: { es: "Modelos generativos para análisis, extracción y asistencia.", en: "Generative models for analysis, extraction, and assistance." },
    usage: { es: "IDP, análisis de correos, RAG y automatización.", en: "IDP, email analysis, RAG, and automation." },
  },
  {
    name: "OpenAI",
    category: "ai",
    icon: <SiOpenai />,
    description: { es: "LLMs para razonamiento, asistentes y flujos generativos.", en: "LLMs for reasoning, assistants, and generative workflows." },
    usage: { es: "Prototipos, agentes, soporte y clasificación.", en: "Prototypes, agents, support, and classification." },
  },
  {
    name: "n8n",
    category: "ai",
    icon: <SiN8N />,
    description: { es: "Automatización visual para conectar servicios y procesos.", en: "Visual automation for connecting services and processes." },
    usage: { es: "Workflows internos, integraciones y tareas repetitivas.", en: "Internal workflows, integrations, and repetitive tasks." },
  },
  {
    name: "PostgreSQL",
    category: "data",
    icon: <SiPostgresql />,
    description: { es: "Base relacional sólida para productos y reporting.", en: "Solid relational database for products and reporting." },
    usage: { es: "Sistemas operativos, analítica y persistencia crítica.", en: "Operational systems, analytics, and critical persistence." },
  },
  {
    name: "Redis",
    category: "data",
    icon: <SiRedis />,
    description: { es: "Cache y estructuras rápidas para sistemas exigentes.", en: "Cache and fast structures for demanding systems." },
    usage: { es: "Colas, sesiones, performance y procesamiento sostenido.", en: "Queues, sessions, performance, and sustained processing." },
  },
  {
    name: "Google Cloud",
    category: "cloud",
    icon: <SiGooglecloud />,
    description: { es: "Infraestructura cloud para servicios, datos e IA.", en: "Cloud infrastructure for services, data, and AI." },
    usage: { es: "Cloud Run, Functions, Storage, Vertex AI y despliegues.", en: "Cloud Run, Functions, Storage, Vertex AI, and deployments." },
  },
  {
    name: "Firebase",
    category: "cloud",
    icon: <SiFirebase />,
    description: { es: "Autenticación, hosting y backend administrado.", en: "Authentication, hosting, and managed backend." },
    usage: { es: "MVPs, SaaS livianos y productos con tiempo acotado.", en: "MVPs, lightweight SaaS, and time-constrained products." },
  },
  {
    name: "Docker",
    category: "ops",
    icon: <SiDocker />,
    description: { es: "Contenedores reproducibles para desarrollo y despliegue.", en: "Reproducible containers for development and deployment." },
    usage: { es: "Microservicios, ambientes locales y entrega cloud.", en: "Microservices, local environments, and cloud delivery." },
  },
  {
    name: "GitHub Actions",
    category: "ops",
    icon: <SiGithubactions />,
    description: { es: "CI/CD para validar y desplegar con confianza.", en: "CI/CD to validate and deploy with confidence." },
    usage: { es: "Pipelines, tests, builds y automatización de releases.", en: "Pipelines, tests, builds, and release automation." },
  },
  {
    name: "Y más...",
    category: "more",
    icon: <Plus />,
    description: {
      es: "Puedo investigar otras tecnologías y adoptarlas según los requerimientos, restricciones y objetivos del proyecto.",
      en: "I can research other technologies and adopt them according to the project requirements, constraints, and goals.",
    },
    usage: {
      es: "Evaluación técnica, prototipos controlados y adopción pragmática cuando una herramienta nueva aporta valor real.",
      en: "Technical evaluation, controlled prototypes, and pragmatic adoption when a new tool brings real value.",
    },
  },
];

const copy = {
  es: {
    tag: "Tecnología",
    title: "Stack y herramientas",
    subtitle: "Herramientas agrupadas por rol dentro de una arquitectura: interfaz, servicios, IA, datos, cloud y operación.",
    all: "Todo",
    selected: "Detalle",
    focus: "Uso principal",
  },
  en: {
    tag: "Technology",
    title: "Stack and tools",
    subtitle: "Tools grouped by role inside an architecture: interface, services, AI, data, cloud, and operations.",
    all: "All",
    selected: "Detail",
    focus: "Main use",
  },
};

export default function TechStack() {
  const { language } = useLanguage();
  const text = copy[language];
  const [activeCategory, setActiveCategory] = useState<Category | "all">("all");
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);
  const [closingTool, setClosingTool] = useState<Tool | null>(null);
  const closeTimeoutRef = useRef<number | null>(null);

  const visibleTools = useMemo(
    () => (activeCategory === "all" ? tools : tools.filter((tool) => tool.category === activeCategory)),
    [activeCategory]
  );

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        window.clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const closeTooltip = (tool: Tool) => {
    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current);
    }
    setClosingTool(tool);
    setSelectedTool(null);
    closeTimeoutRef.current = window.setTimeout(() => {
      setClosingTool((currentTool) => (currentTool?.name === tool.name ? null : currentTool));
      closeTimeoutRef.current = null;
    }, 160);
  };

  const handleToolClick = (tool: Tool) => {
    if (selectedTool?.name === tool.name) {
      closeTooltip(tool);
      return;
    }
    if (selectedTool) {
      setClosingTool(selectedTool);
      if (closeTimeoutRef.current) {
        window.clearTimeout(closeTimeoutRef.current);
      }
      closeTimeoutRef.current = window.setTimeout(() => {
        setClosingTool(null);
        closeTimeoutRef.current = null;
      }, 160);
    }
    setSelectedTool(tool);
  };

  return (
    <section className="relative border-y border-[color:var(--border)] py-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[color:var(--accent)]/70" />
      <div className="grid gap-6 lg:grid-cols-[0.38fr_1.62fr]">
        <div>
          <p className="section-kicker">{text.tag}</p>
          <h3 className="mt-3 text-3xl font-black tracking-tight text-[color:var(--foreground)]">{text.title}</h3>
          <p className="mt-3 max-w-sm text-sm leading-6 text-[color:var(--muted)]">{text.subtitle}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className={`shine-button h-9 rounded-md border px-3 text-xs font-black transition-colors ${activeCategory === "all" ? "border-[color:var(--foreground)] bg-[color:var(--foreground)] text-[color:var(--background)]" : "border-[color:var(--border)] text-[color:var(--muted)] hover:text-[color:var(--foreground)]"}`}
            >
              {text.all}
            </button>
            {(Object.keys(categories) as Category[]).map((category) => {
              const Icon = categories[category].icon;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`shine-button inline-flex h-9 items-center gap-2 rounded-md border px-3 text-xs font-black transition-colors ${activeCategory === category ? "border-[color:var(--foreground)] bg-[color:var(--foreground)] text-[color:var(--background)]" : "border-[color:var(--border)] text-[color:var(--muted)] hover:text-[color:var(--foreground)]"}`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span className="max-w-20 truncate">{categories[category].label[language]}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="min-w-0">
          <div key={activeCategory} className="grid grid-cols-[repeat(auto-fit,minmax(9.5rem,1fr))] gap-2">
            {visibleTools.map((tool, index) => (
              <div
                key={tool.name}
                className={`stack-tool-enter relative ${selectedTool?.name === tool.name || closingTool?.name === tool.name ? "z-30" : ""}`}
                style={{ animationDelay: `${Math.min(index, 10) * 26}ms` }}
              >
                <button
                  type="button"
                  onClick={() => handleToolClick(tool)}
                  className={`shine-button grid h-14 w-full grid-cols-[2rem_minmax(0,1fr)] items-center gap-2.5 rounded-lg border px-3 text-left transition-colors duration-200 ${selectedTool?.name === tool.name ? "border-[color:var(--accent)] bg-[color:var(--accent-soft)]" : "border-[color:var(--border)] bg-[color:var(--background)] hover:bg-[color:var(--surface-muted)]"}`}
                  aria-describedby={`tool-${tool.name.replace(/\W+/g, "-").toLowerCase()}`}
                  aria-expanded={selectedTool?.name === tool.name}
                >
                  <span className="relative z-10 flex h-8 w-8 items-center justify-center self-center justify-self-start rounded-md bg-[color:var(--surface)] text-xl text-[color:var(--accent-strong)]">
                    {tool.icon}
                  </span>
                  <span className="relative z-10 min-w-0 self-center">
                    <span className="block max-w-full truncate text-sm font-black leading-tight text-[color:var(--foreground)]">
                      {tool.name}
                    </span>
                  </span>
                </button>
                {(selectedTool?.name === tool.name || closingTool?.name === tool.name) && (
                  <span
                    id={`tool-${tool.name.replace(/\W+/g, "-").toLowerCase()}`}
                    role="tooltip"
                    className={`${closingTool?.name === tool.name ? "click-tooltip-exit" : "click-tooltip"} absolute left-0 top-[calc(100%+0.45rem)] z-40 w-64 max-w-[calc(100vw-2rem)] rounded-md border border-[color:var(--border)] bg-[color:var(--surface)] p-3 text-left shadow-2xl`}
                  >
                    <span className="block truncate text-xs font-black uppercase tracking-[0.14em] text-[color:var(--accent-strong)]">
                      {tool.name}
                    </span>
                    <span className="mt-2 block text-xs font-semibold leading-5 text-[color:var(--foreground)]">
                      {tool.description[language]}
                    </span>
                    <span className="mt-3 block border-t border-[color:var(--border)] pt-2 text-[11px] font-semibold leading-5 text-[color:var(--muted)]">
                      <span className="font-black uppercase tracking-[0.12em] text-[color:var(--foreground)]">{text.focus}: </span>
                      {tool.usage[language]}
                    </span>
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
