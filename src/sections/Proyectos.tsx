"use client";

import { useMemo, useState } from "react";
import { ExternalLink, Github, Calendar, Users, Code, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProjectImageModal from "@/components/ProjectImageModal";
import { useLanguage } from "@/context/LanguageContext";

type Language = "es" | "en";

type LocalizedString = Record<Language, string>;
type LocalizedList = Record<Language, string[]>;

type Project = {
  id: number;
  title: LocalizedString;
  description: LocalizedString;
  year: string;
  client: LocalizedString;
  status: LocalizedString;
  technologies: string[];
  aiHighlights?: LocalizedList;
  outcomes: LocalizedList;
  image: string;
  gallery: string[];
  demo?: string;
  repo?: string;
};

type OtherProject = {
  id: number;
  title: LocalizedString;
  description: LocalizedString;
  year: string;
  status: LocalizedString;
  technologies: string[];
};

const projects: Project[] = [
  {
    id: 1,
    title: {
      es: "Eva 3 – Calidad, Evaluaciones y Monitoreo",
      en: "Eva 3 – Quality, Evaluations & Monitoring",
    },
    description: {
      es: "Plataforma modular para monitorear equipos y entregar reportes operativos en tiempo real, con analítica accionable para líderes.",
      en: "Modular platform that monitors teams and delivers real-time operational reports with actionable analytics for managers.",
    },
    year: "2024",
    client: {
      es: "Cliente privado – Gestión de equipos de trabajo",
      en: "Private client – Workforce management",
    },
    status: {
      es: "En producción",
      en: "In production",
    },
    technologies: [
      "SaaS",
      "Gemini API",
      "Gmail API",
      "Python",
      "Flask",
      "React",
      "Firestore",
      "Google Cloud Functions",
    ],
    aiHighlights: {
      es: [
        "Integración de Gmail y Gemini para análisis inteligente de correos",
        "Motor RAG con base de conocimiento contextual",
        "Evaluación de sentimiento y respuestas sugeridas en tiempo real",
      ],
      en: [
        "Gmail + Gemini integration for intelligent email analysis",
        "RAG engine powered by a contextual knowledge base",
        "Real-time sentiment evaluation with suggested replies",
      ],
    },
    outcomes: {
      es: [
        "Reducción del 70% en tiempo de evaluación por supervisor",
        "Automatización del 80% del análisis de bandejas de entrada",
        "Tableros operativos en tiempo real para decisiones informadas",
      ],
      en: [
        "70% reduction in supervisor evaluation time",
        "80% of inbox analysis fully automated",
        "Real-time operational dashboards for faster decisions",
      ],
    },
    image: "https://storage.googleapis.com/imagenes-portafolio-rodrigoyg/Eva3/1.png",
    gallery: [
      "https://storage.googleapis.com/imagenes-portafolio-rodrigoyg/Eva3/1.png",
      "https://storage.googleapis.com/imagenes-portafolio-rodrigoyg/Eva3/2.png",
      "https://storage.googleapis.com/imagenes-portafolio-rodrigoyg/Eva3/3.png",
      "https://storage.googleapis.com/imagenes-portafolio-rodrigoyg/Eva3/4.png",
    ],
    demo: "#",
    repo: "#",
  },
  {
    id: 2,
    title: {
      es: "Docalysis",
      en: "Docalysis",
    },
    description: {
      es: "Automatiza la lectura de contratos y formularios, extrayendo datos clave con modelos de IA ajustados a cada negocio.",
      en: "Automates contract and form reading, extracting key data with AI models tuned for each business.",
    },
    year: "2025",
    client: {
      es: "Compañía de telecomunicaciones – Ventas",
      en: "Telecommunications company – Sales",
    },
    status: {
      es: "En producción",
      en: "In production",
    },
    technologies: [
      "Gemini 2.5 Pro",
      "Vertex AI",
      "Document AI",
      "Node.js",
      "MongoDB",
      "React",
      "Python",
    ],
    aiHighlights: {
      es: [
        "Modelos Gemini 2.5 y Document AI ajustados para extracción de campos críticos",
        "Pipeline RAG con fallback y auditoría de respuestas",
        "Preparado para integrarse con Salesforce y sistemas tributarios",
      ],
      en: [
        "Fine-tuned Gemini 2.5 + Document AI for critical field extraction",
        "RAG pipeline with fallback logic and response auditing",
        "Ready for integrations with Salesforce and national tax systems",
      ],
    },
    outcomes: {
      es: [
        "Consolida 10 documentos en promedio en menos de un minuto",
        "Reduce más del 80% de tareas repetitivas en backoffice",
        "Precisión superior al 90% en los datos entregados",
        "Expansión en curso hacia verticales legales, salud y educación",
      ],
      en: [
        "Consolidates an average of 10 documents in under a minute",
        "Cuts more than 80% of repetitive back-office work",
        "Delivers over 90% accuracy on extracted data",
        "Expanding into legal, healthcare, and education verticals",
      ],
    },
    image: "https://storage.googleapis.com/imagenes-portafolio-rodrigoyg/Docalysis/c.png",
    gallery: [
      "https://storage.googleapis.com/imagenes-portafolio-rodrigoyg/Docalysis/b.png",
      "https://storage.googleapis.com/imagenes-portafolio-rodrigoyg/Docalysis/c.png",
      "https://storage.googleapis.com/imagenes-portafolio-rodrigoyg/Docalysis/a.png",
      "https://storage.googleapis.com/imagenes-portafolio-rodrigoyg/Docalysis/d.png",
    ],
    demo: "#",
    repo: "#",
  },
  {
    id: 3,
    title: {
      es: "Sistema de análisis de alarmas",
      en: "Alarm Analytics Platform",
    },
    description: {
      es: "Genera reportes web, PDF y Excel a partir de datos crudos de alarmas de conducción para flotas de transporte.",
      en: "Generates web, PDF, and Excel reports from raw driving alarm data for transportation fleets.",
    },
    year: "2025",
    client: {
      es: "West Ingeniería",
      en: "West Ingeniería",
    },
    status: {
      es: "En producción",
      en: "In production",
    },
    technologies: [
      "React",
      "TypeScript",
      "Python",
      "FastAPI",
      "Google Cloud Run",
      "PostgreSQL",
      "Docker",
    ],
    outcomes: {
      es: [
        "Implementación completa en una semana desde la planificación",
        "Reportes PDF y Excel profesionales generados con un clic",
        "Interfaz amigable para usuarios no técnicos",
        "API REST lista para integraciones futuras",
      ],
      en: [
        "Complete implementation one week after planning",
        "Professional PDF and Excel reports generated in one click",
        "User-friendly interface for non-technical roles",
        "REST API ready for future integrations",
      ],
    },
    image: "https://storage.googleapis.com/imagenes-portafolio-rodrigoyg/ReportesConduccion/3.png",
    gallery: [
      "https://storage.googleapis.com/imagenes-portafolio-rodrigoyg/ReportesConduccion/1.png",
      "https://storage.googleapis.com/imagenes-portafolio-rodrigoyg/ReportesConduccion/3.png",
      "https://storage.googleapis.com/imagenes-portafolio-rodrigoyg/ReportesConduccion/4.png",
      "https://storage.googleapis.com/imagenes-portafolio-rodrigoyg/ReportesConduccion/2.png",
    ],
    demo: "https://reportes-west.ninfasolutions.com",
    repo: "https://github.com/Canariolol/ReportesConduccion/tree/RefactorizadoDashboard.tsx---Ok",
  },
];

const otherProjects: OtherProject[] = [
  {
    id: 4,
    title: {
      es: "Portal de onboarding asistido por IA",
      en: "AI-assisted onboarding portal",
    },
    description: {
      es: "Experiencia guiada que personaliza recursos, métricas y automatizaciones para nuevos colaboradores en empresas tech.",
      en: "Guided experience that personalizes resources, metrics, and automations for new hires in tech teams.",
    },
    year: "2025",
    status: {
      es: "En diseño",
      en: "In design",
    },
    technologies: ["Next.js", "Supabase", "Gemini", "n8n"],
  },
  {
    id: 5,
    title: {
      es: "Suite de reportes financieros inteligente",
      en: "Smart financial reporting suite",
    },
    description: {
      es: "Automatización de informes de gestión y KPI para directorios, con generación asistida de conclusiones y próximos pasos.",
      en: "Automates management reports and KPIs for boards, generating assisted conclusions and next steps.",
    },
    year: "2025",
    status: {
      es: "En desarrollo",
      en: "In development",
    },
    technologies: ["React", "NestJS", "LangChain", "BigQuery"],
  },
];

const processSteps: Record<Language, { step: string; title: string; description: string }[]> = {
  es: [
    {
      step: "01",
      title: "Análisis del problema",
      description: "Diagnóstico profundo para entender necesidades, restricciones y métricas de éxito.",
    },
    {
      step: "02",
      title: "Diseño de la solución",
      description: "Arquitectura, roadmap y prototipos rápidos para validar la dirección.",
    },
    {
      step: "03",
      title: "Desarrollo ágil",
      description: "Implementación iterativa con entregas frecuentes y retroalimentación continua.",
    },
    {
      step: "04",
      title: "Despliegue y evolución",
      description: "Puesta en producción, monitoreo y mejoras constantes para asegurar el impacto.",
    },
  ],
  en: [
    {
      step: "01",
      title: "Problem analysis",
      description: "Deep dive to understand needs, constraints, and success metrics.",
    },
    {
      step: "02",
      title: "Solution design",
      description: "Architecture, roadmap, and rapid prototypes to validate direction.",
    },
    {
      step: "03",
      title: "Agile development",
      description: "Iterative delivery with frequent releases and constant feedback.",
    },
    {
      step: "04",
      title: "Launch & evolution",
      description: "Production rollout, monitoring, and continuous enhancements to ensure impact.",
    },
  ],
};

const copy = {
  es: {
    sectionTag: "Proyectos",
    heading: "Proyectos destacados",
    highlight: "destacados",
    intro:
      "Estos son algunos de los proyectos que he construido de principio a fin. Cada uno combina IA, desarrollo fullstack y automatización aplicada.",
    viewGallery: "Ver galería",
    clientLabel: "Cliente",
    statusLabel: "Estado",
    aiHighlightsTitle: "IA en acción",
    outcomesTitle: "Impacto generado",
    technologiesTitle: "Tecnologías clave",
    demoLabel: "Ver demo",
    repoLabel: "Ver código",
    otherProjectsButton: "Otros proyectos",
    otherProjectsTitle: "Otros proyectos",
    otherProjectsSubtitle: "Ideas en progreso y próximos lanzamientos",
    comingSoon: "Próximamente",
    processTag: "Workflow",
    processHeading: "Mi Proceso de Trabajo",
    processSubtitle: "Así transformo problemas en soluciones funcionales",
    noProjects: "No se encontraron proyectos en esta categoría.",
  },
  en: {
    sectionTag: "Projects",
    heading: "Featured projects",
    highlight: "projects",
    intro:
      "A selection of end-to-end products I have delivered. Each blends AI, fullstack development, and automation with measurable outcomes.",
    viewGallery: "View gallery",
    clientLabel: "Client",
    statusLabel: "Status",
    aiHighlightsTitle: "AI in action",
    outcomesTitle: "Impact delivered",
    technologiesTitle: "Key technologies",
    demoLabel: "View demo",
    repoLabel: "View code",
    otherProjectsButton: "More projects",
    otherProjectsTitle: "Additional projects",
    otherProjectsSubtitle: "Ideas in progress and upcoming launches",
    comingSoon: "Coming soon",
    processTag: "Workflow",
    processHeading: "How I work",
    processSubtitle: "Turning complex challenges into functional solutions",
    noProjects: "No projects found in this category.",
  },
};

export default function Proyectos() {
  const { language } = useLanguage();
  const text = copy[language];
  const steps = processSteps[language];
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOtherProjectsModalOpen, setIsOtherProjectsModalOpen] = useState(false);

  const selectedProject = useMemo(
    () => projects.find((project) => project.id === selectedProjectId) || null,
    [selectedProjectId]
  );
  const closeLabel = language === "es" ? "Cerrar" : "Close";

  const openImageModal = (projectId: number) => {
    setSelectedProjectId(projectId);
    setIsModalOpen(true);
  };

  const closeImageModal = () => {
    setIsModalOpen(false);
  };

  const openOtherProjectsModal = () => setIsOtherProjectsModalOpen(true);
  const closeOtherProjectsModal = () => setIsOtherProjectsModalOpen(false);

  return (
    <section id="proyectos" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(147,197,253,0.12),transparent_55%),radial-gradient(circle_at_bottom_left,rgba(167,139,250,0.12),transparent_55%)]" />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src="/ReportesDir%20Backend.png"
          alt=""
          aria-hidden="true"
          className="absolute -right-64 bottom-24 hidden xl:block w-[520px] rotate-[3deg] skew-y-[4deg] opacity-75 shadow-[0_40px_90px_-60px_rgba(79,70,229,0.6)]"
          style={{ maskImage: "radial-gradient(circle at center, rgba(0, 0, 0, 0.85) 35%, transparent 80%)", WebkitMaskImage: "radial-gradient(circle at center, rgba(0, 0, 0, 0.85) 35%, transparent 80%)", transformOrigin: "center left" }}
        />
      </div>
      <div className="relative max-w-7xl mx-auto space-y-20">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-[0.35em] text-indigo-500 mb-4">
            {text.sectionTag}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {text.heading.replace(text.highlight, "").trim()} {" "}
            <span className="relative inline-block">
              <span className="absolute inset-x-0 -bottom-2 h-3 bg-gradient-to-r from-purple-200 via-blue-200 to-transparent dark:from-purple-500/20 dark:via-blue-400/30 dark:to-transparent rounded-full" />
              <span className="relative text-purple-600 dark:text-purple-400 capitalize">{text.highlight}</span>
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            {text.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/60 dark:border-slate-800 bg-white/85 dark:bg-slate-900/85 shadow-xl shadow-blue-500/5 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div
                className="relative h-56 overflow-hidden"
                onClick={() => openImageModal(project.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    openImageModal(project.id);
                  }
                }}
              >
                <img
                  src={project.image}
                  alt={project.title[language]}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-slate-900 shadow">
                    <Code className="h-4 w-4" />
                    {text.viewGallery}
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-8 space-y-6">
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-2">
                    <p className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                      <Calendar className="h-4 w-4" />
                      {project.year}
                    </p>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white leading-tight">
                      {project.title[language]}
                    </h3>
                  </div>
                  <span className="inline-flex items-center rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                    {project.status[language]}
                  </span>
                </div>

                <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.description[language]}
                </p>

                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <Users className="h-4 w-4" />
                  <span className="font-medium text-slate-700 dark:text-slate-200">
                    {text.clientLabel}:
                  </span>
                  <span>{project.client[language]}</span>
                </div>

                {project.aiHighlights && (
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold uppercase tracking-wide text-purple-500">
                      {text.aiHighlightsTitle}
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      {project.aiHighlights[language].map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-blue-500">
                    {text.outcomesTitle}
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    {project.outcomes[language].map((outcome) => (
                      <li key={outcome} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-500 to-sky-400" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                    {text.technologiesTitle}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-800/70 px-3 py-1 text-xs font-medium text-slate-600 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto flex items-center gap-3 pt-2">
                  {project.repo && project.repo !== "#" && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.repo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Github className="h-4 w-4" />
                        {text.repoLabel}
                      </a>
                    </Button>
                  )}
                  {project.demo && project.demo !== "#" && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <ExternalLink className="h-4 w-4" />
                        {text.demoLabel}
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={openOtherProjectsModal}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-xl"
          >
            {text.otherProjectsButton}
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-white/60 dark:border-slate-800 bg-white/85 dark:bg-slate-900/85 px-6 py-16 shadow-lg shadow-blue-500/5 backdrop-blur">
          <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />
          <div className="relative max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-blue-500">
                {text.processTag}
              </p>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                {text.processHeading}
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                {text.processSubtitle}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
              {steps.map((step) => (
                <div key={step.step} className="relative rounded-2xl border border-slate-200/70 dark:border-slate-700/70 bg-white/90 dark:bg-slate-900/90 p-6 shadow-sm">
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-lg font-bold text-white shadow-md">
                    {step.step}
                  </div>
                  <h4 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
                    {step.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {selectedProject && (
        <ProjectImageModal
          isOpen={isModalOpen}
          onClose={closeImageModal}
          images={selectedProject.gallery}
          currentImageIndex={0}
          projectName={selectedProject.title[language]}
        />
      )}

      {isOtherProjectsModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          onClick={closeOtherProjectsModal}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-3xl border border-white/60 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 p-8 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              onClick={closeOtherProjectsModal}
              className="absolute right-6 top-6 rounded-full border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 p-2 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
              aria-label={closeLabel}
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="space-y-2 pb-6 text-center">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {text.otherProjectsTitle}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {text.otherProjectsSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherProjects.map((project) => (
                <div
                  key={project.id}
                  className="rounded-2xl border border-slate-200/70 dark:border-slate-700/70 bg-white/90 dark:bg-slate-900/90 p-6 shadow-sm"
                >
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {project.title[language]}
                    </h4>
                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-600 dark:text-slate-300">
                      <CheckCircle className="h-3 w-3" />
                      {project.status[language]}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    {project.description[language]}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-4">
                    <Calendar className="h-4 w-4" />
                    {project.year}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/70 px-3 py-1 text-xs font-medium text-slate-600 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
