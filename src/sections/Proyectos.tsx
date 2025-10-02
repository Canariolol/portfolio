"use client";

import { useMemo, useState } from "react";
import { ExternalLink, Github, Calendar, Users, Code, CheckCircle, ArrowRight, ArrowDown, ArrowLeft, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProjectImageModal from "@/components/ProjectImageModal";
import { useLanguage } from "@/context/LanguageContext";
import { useEffect, useRef } from "react";

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
  iaFeatures?: LocalizedList;
  achievements: LocalizedList;
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
  image: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: {
      es: "Eva3",
      en: "Eva3",
    },
    description: {
      es: "Sistema de monitoreo de equipos de trabajo. Modular, para ser adaptable a cualquier área, de empresas de cualquier rubro, que requieran evaluar a su personal y monitorear su desempeño. Capaz de generar reportes en tiempo real y mantener datos organizados para análisis posteriores.",
      en: "Modular workforce monitoring platform designed to adapt across teams, evaluate performance, and surface real-time reports for later analysis.",
    },
    year: "2024",
    client: {
      es: "Cliente Privado - Gestión de Equipos de Trabajo",
      en: "Private Client - Workforce Management",
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
      "Google Cloud Functions / Auth / Storage",
    ],
    iaFeatures: {
      es: [
        "Integración de Gmail API y Gemini para análisis inteligente de correos",
        "Sistema RAG para acceso a base de conocimientos",
        "Análisis de sentimiento en tiempo real",
        "Generación de respuestas contextualizadas",
      ],
      en: [
        "Gmail API and Gemini integration for intelligent email analysis",
        "RAG system to reach the knowledge base",
        "Real-time sentiment analysis",
        "Context-aware response generation",
      ],
    },
    achievements: {
      es: [
        "Reducción de más del 70% en tiempo de evaluación",
        "Reducción de sobre un 80% del tiempo gastado en análisis de correos",
        "Facilitación de la toma de decisiones con datos en tiempo real",
        "Satisfacción del cliente del 95%",
      ],
      en: [
        "Over 70% reduction in supervisor evaluation time",
        "More than 80% less time spent reviewing inboxes",
        "Faster decisions thanks to live dashboards",
        "95% customer satisfaction",
      ],
    },
    image: "https://storage.googleapis.com/imagenes-portafolio-rodrigoyg/Eva3/1a.png",
    gallery: [
      "https://storage.googleapis.com/imagenes-portafolio-rodrigoyg/Eva3/1a.png",
      "https://storage.googleapis.com/imagenes-portafolio-rodrigoyg/Eva3/2.png",
      "https://storage.googleapis.com/imagenes-portafolio-rodrigoyg/Eva3/3a.png",
      "https://storage.googleapis.com/imagenes-portafolio-rodrigoyg/Eva3/4a.png",
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
      es: "Sistema de automatización de análisis de documentos y extracción de datos. Utiliza modelos preentrenados y fine-tuning para capturar la información clave de contratos, formularios de venta y otros documentos legales.",
      en: "Automation platform that analyses documents and extracts the key fields using fine-tuned AI models for contracts, sales forms, and legal paperwork.",
    },
    year: "2025",
    client: {
      es: "Compañía de Telecomunicaciones - Ventas",
      en: "Telecommunications Company - Sales",
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
      "Prompt Engineering",
      "Python",
    ],
    iaFeatures: {
      es: [
        "Generación de resúmenes específicos para equipos de soporte a la venta",
        "Sistema RAG con fallback controlado",
        "Preparado para integrarse con Salesforce y SII",
        "En migración a una nueva plataforma para expandirse a nichos legales, salud y educación",
      ],
      en: [
        "Generates tailored summaries for sales-support teams",
        "RAG workflow with controlled fallback",
        "Ready to integrate with Salesforce and national tax services",
        "Migrating to a new platform to expand into legal, healthcare, and education",
      ],
    },
    achievements: {
      es: [
        "Consolidación promedio de 10 documentos en menos de 1 minuto",
        "Reducción de más del 80% del tiempo dedicado a tareas repetitivas",
        "Más del 90% de precisión en los datos extraídos",
        "Proceso activo de expansión a nuevos nichos",
      ],
      en: [
        "Consolidates 10 documents on average, in less than a minute",
        "Cuts repetitive back-office work by over 80%",
        "Delivers above 90% accuracy on extracted data",
        "Expanding into additional verticals",
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
      es: "Plataforma de generación de reportes web, PDF y Excel a partir de archivos en bruto con alertas de conducción para flotas de transporte.",
      en: "Reporting platform that turns raw driving alarm data into web, PDF, and Excel reports for transportation fleets.",
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
    iaFeatures: {
      es: [],
      en: [],
    },
    achievements: {
      es: [
        "Entrega del proyecto en tiempo record: una semana desde la planificación hasta producción",
        "PDF y Excel automáticos con estilo profesional",
        "Fácil uso para usuarios no técnicos",
        "API REST lista para integraciones futuras",
      ],
      en: [
        "Solution delivered in record time: one week from planning to production",
        "Automatic PDF and Excel reports with professional styling",
        "Easy to use for non-technical roles",
        "REST API ready for future integrations",
      ],
    },
    image: "https://storage.googleapis.com/imagenes-portafolio-rodrigoyg/ReportesConduccion/3.png",
    gallery: [
      "https://storage.googleapis.com/imagenes-portafolio-rodrigoyg/ReportesConduccion/1.png",
      "https://storage.googleapis.com/imagenes-portafolio-rodrigoyg/ReportesConduccion/3.png",
      "https://storage.googleapis.com/imagenes-portafolio-rodrigoyg/ReportesConduccion/4a.png",
      "https://storage.googleapis.com/imagenes-portafolio-rodrigoyg/ReportesConduccion/2a.png",
    ],
    /*demo: "https://reportes-west.ninfasolutions.com",
    repo: "https://github.com/Canariolol/ReportesConduccion/tree/RefactorizadoDashboard.tsx---Ok",*/
  },
];

const otherProjects: OtherProject[] = [
  {
    id: 4,
    image: "https://storage.googleapis.com/imagenes-portafolio-rodrigoyg/EmailFetch%20Pro/1.png",
    title: {
      es: "EmailFetch Pro",
      en: "EmailFetch Pro",
    },
    description: {
      es: "Plataforma especializada de extracción y análisis de correos electrónicos con IA.",
      en: "Specialized email extraction and analysis platform powered by AI.",
    },
    year: "2025",
    status: {
      es: "Mvp - En desarrollo",
      en: "Mvp - In development",
    },
    technologies: ["SaaS", "Next.js", "Firestore", "Gemini", "n8n", "Gmail API", "Azure"],
  },
  {
    id: 5,
    image: "https://storage.googleapis.com/imagenes-portafolio-rodrigoyg/Imeigenary/imei1.png",
    title: {
      es: "Imeigenary",
      en: "Imeigenary",
    },
    description: {
      es: "App simple de generación y exportación de IMEIs para gestiones de ventas y lógistica de dispositivos móviles.",
      en: "Simple IMEI generation and export app for mobile device sales and logistics management.",
    },
    year: "2024",
    status: {
      es: "En Producción",
      en: "In Production",
    },
    technologies: ["Javascript", "Luhn Algorithm", "Firebase Hosting"],
  },
  {
    id: 6,
    image: "https://storage.googleapis.com/imagenes-portafolio-rodrigoyg/Template/1.png",
    title: {
      es: "Template de desarrollo fullstack",
      en: "Fullstack development template",
    },
    description: {
      es: "Planilla de proyecto lista para producción, diseñado para acelerar el desarrollo. Combina un frontend moderno con React, un backend robusto con FastAPI y un pipeline de despliegue automatizado a Google Cloud Platform y Firebase.",
      en: "Production-ready project boilerplate designed to accelerate development. Combina un frontend moderno con React, un backend robusto con FastAPI y un pipeline de despliegue automatizado a Google Cloud Platform y Firebase.",
    },
    year: "2025",
    status: {
      es: "En producción - Público en GitHub",
      en: "In production - Public on GitHub",
    },
    technologies: ["React", "FastAPI", "Tailwind CSS", "Docker", "Terraform", "GitHub Actions", "GCP", "Firebase"],
  }
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
      "Estos son algunos proyectos end-to-end que muestran cómo mezclo IA, desarrollo fullstack y automatización aplicada.",
    viewGallery: "Ver galería",
    clientLabel: "Cliente",
    statusLabel: "Estado",
    achievementsTitle: "Logros",
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
      "A snapshot of end-to-end products where I blend AI, fullstack development, and practical automation.",
    viewGallery: "View gallery",
    clientLabel: "Client",
    statusLabel: "Status",
    achievementsTitle: "Achievements",
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
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);

  const [isOtherProjectsModalOpen, setIsOtherProjectsModalOpen] = useState(false);
  const [isOtherProjectsModalVisible, setIsOtherProjectsModalVisible] = useState(false);

  const [selectedImageUrl, setSelectedImageUrl] = useState<string | null>(null);
  const [isImageZoomModalOpen, setIsImageZoomModalOpen] = useState(false);
  const [isImageZoomModalVisible, setIsImageZoomModalVisible] = useState(false);

  const selectedProject = useMemo(
    () => projects.find((project) => project.id === selectedProjectId) ?? null,
    [selectedProjectId]
  );

  const openGalleryModal = (projectId: number) => {
    setSelectedProjectId(projectId);
    setIsGalleryModalOpen(true);
  };

  const closeGalleryModal = () => {
    setIsGalleryModalOpen(false);
  };

  const openOtherProjectsModal = () => {
    setIsOtherProjectsModalOpen(true);
    setTimeout(() => setIsOtherProjectsModalVisible(true), 10);
  };

  const closeOtherProjectsModal = () => {
    setIsOtherProjectsModalVisible(false);
    setTimeout(() => setIsOtherProjectsModalOpen(false), 300);
  };

  const openImageZoomModal = (imageUrl: string) => {
    setSelectedImageUrl(imageUrl);
    setIsImageZoomModalOpen(true);
    setTimeout(() => setIsImageZoomModalVisible(true), 10);
  };

  const closeImageZoomModal = () => {
    setIsImageZoomModalVisible(false);
    setTimeout(() => {
      setIsImageZoomModalOpen(false);
      setSelectedImageUrl(null);
    }, 300);
  };

  const closeLabel = language === "es" ? "Cerrar" : "Close";

  return (
    <section id="proyectos" className="section-transition section-transition-emerald relative py-24 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(147,197,253,0.12),transparent_55%),radial-gradient(circle_at_bottom_left,rgba(167,139,250,0.12),transparent_55%)]" />
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {projects.map((project, index) => (
            <div key={project.id} className="relative flex flex-col h-full">
              {index > 0 && (
                <div className="absolute -left-4 top-0 bottom-0 w-px hidden lg:block">
                  <div className="h-full w-px bg-gradient-to-b from-transparent via-purple-400/30 to-transparent" 
                       style={{ 
                         backgroundImage: 'repeating-linear-gradient(to bottom, transparent, transparent 4px, rgba(147, 51, 234, 0.3) 4px, rgba(147, 51, 234, 0.3) 8px)',
                         width: '1px'
                       }} />
                </div>
              )}
              <article
                className="group relative flex flex-col h-full overflow-hidden rounded-3xl border border-white/60 dark:border-slate-800 bg-white/85 dark:bg-slate-900/85 shadow-xl shadow-blue-500/5 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
              <div
                className="relative h-56 overflow-hidden"
                onClick={() => openGalleryModal(project.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    openGalleryModal(project.id);
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

              <div className="flex flex-1 flex-col p-8">
                <div className="flex-grow space-y-6">
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

                  {/* Mini contenedor 1: Descripción - altura ajustada por proyecto */}
                  <div className={`${project.id === 3 ? 'h-21' : 'h-36'} flex flex-col justify-start`}>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm overflow-hidden">
                      {project.description[language]}
                    </p>
                  </div>

                  {/* Línea divisoria entre descripción y cliente */}
                  <div className="relative py-2">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-dashed border-purple-300/40 dark:border-purple-400/30"></div>
                    </div>
                  </div>

                  {/* Mini contenedor 2: Cliente - altura fija */}
                  <div className="h-12 flex flex-col justify-start">
                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                      <Users className="h-4 w-4" />
                      <span className="font-medium text-slate-700 dark:text-slate-200">
                        {text.clientLabel}:
                      </span>
                      <span>{project.client[language]}</span>
                    </div>
                  </div>

                  {/* Línea divisoria entre cliente y logros */}
                  <div className="relative py-2">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-dashed border-purple-300/40 dark:border-purple-400/30"></div>
                    </div>
                  </div>

                  {/* Mini contenedor 3: Logros - altura fija */}
                  <div className="h-40 flex flex-col justify-start">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                        {text.achievementsTitle}:
                      </h4>
                      <ul className="space-y-1 overflow-hidden">
                        {project.achievements[language].map((achievement) => (
                          <li key={achievement} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                            <span className="text-green-500 mr-2 mt-0.5">•</span>
                            <span className="line-clamp-2">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Línea divisoria entre logros y tecnologías */}
                  <div className="relative py-2">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-dashed border-purple-300/40 dark:border-purple-400/30"></div>
                    </div>
                  </div>

                  {/* Mini contenedor 4: Tecnologías - altura fija */}
                  <div className="h-24 flex flex-col justify-start">
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                        {text.technologiesTitle}
                      </h4>
                      <div className="flex flex-wrap gap-1 overflow-hidden">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-800/70 px-2 py-1 text-xs font-medium text-slate-600 dark:text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-3 pt-2">
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
            </div>
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
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <img
              src="/PortafolioDir.png"
              alt=""
              aria-hidden="true"
              className="absolute -left-20 top-1/2 hidden lg:block w-[440px] -translate-y-1/2 rotate-[-2deg] skew-y-[-3deg] opacity-80 shadow-[0_45px_120px_-60px_rgba(59,130,246,0.45)] transition-all duration-700 ease-out transform"
              style={{ maskImage: "radial-gradient(ellipse at center, rgba(0,0,0,1) 40%, transparent 75%)", WebkitMaskImage: "radial-gradient(ellipse at center, rgba(0, 0, 0, 0.92) 58%, transparent 94%)", transformOrigin: "center right" }}
            />
          </div>
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
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] md:grid-rows-[1fr_auto_1fr] gap-x-8 gap-y-4 md:gap-y-8">
              {/* Step 1 */}
              <div className="md:col-start-1 md:row-start-1 rounded-2xl border border-slate-200/70 dark:border-slate-700/70 bg-white/90 dark:bg-slate-900/90 p-6 shadow-sm">
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-lg font-bold text-white shadow-md">
                  {steps[0].step}
                </div>
                <h4 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
                  {steps[0].title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {steps[0].description}
                </p>
              </div>

              {/* Arrow 1 -> 2 */}
              <div className="hidden md:flex col-start-2 row-start-1 items-center justify-center">
                <ArrowRight className="w-10 h-10 text-slate-300 dark:text-slate-600" />
              </div>

              {/* Step 2 */}
              <div className="md:col-start-3 md:row-start-1 rounded-2xl border border-slate-200/70 dark:border-slate-700/70 bg-white/90 dark:bg-slate-900/90 p-6 shadow-sm">
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-lg font-bold text-white shadow-md">
                  {steps[1].step}
                </div>
                <h4 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
                  {steps[1].title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {steps[1].description}
                </p>
              </div>

              {/* Arrow 2 -> 3 */}
              <div className="hidden md:flex col-start-3 row-start-2 items-center justify-center">
                <ArrowDown className="w-10 h-10 text-slate-300 dark:text-slate-600" />
              </div>

              {/* Step 3 */}
              <div className="md:col-start-3 md:row-start-3 rounded-2xl border border-slate-200/70 dark:border-slate-700/70 bg-white/90 dark:bg-slate-900/90 p-6 shadow-sm">
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-lg font-bold text-white shadow-md">
                  {steps[2].step}
                </div>
                <h4 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
                  {steps[2].title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {steps[2].description}
                </p>
              </div>

              {/* Arrow 3 -> 4 */}
              <div className="hidden md:flex col-start-2 row-start-3 items-center justify-center">
                <ArrowLeft className="w-10 h-10 text-slate-300 dark:text-slate-600" />
              </div>

              {/* Step 4 */}
              <div className="md:col-start-1 md:row-start-3 rounded-2xl border border-slate-200/70 dark:border-slate-700/70 bg-white/90 dark:bg-slate-900/90 p-6 shadow-sm">
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-lg font-bold text-white shadow-md">
                  {steps[3].step}
                </div>
                <h4 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
                  {steps[3].title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {steps[3].description}
                </p>
              </div>

              {/* Arrow 4 -> 1 */}
              <div className="hidden md:flex col-start-1 row-start-2 items-center justify-center">
                <ArrowUp className="w-10 h-10 text-slate-300 dark:text-slate-600" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectedProject && (
        <ProjectImageModal
          isOpen={isGalleryModalOpen}
          onClose={closeGalleryModal}
          images={selectedProject.gallery}
          currentImageIndex={0}
          projectName={selectedProject.title[language]}
        />
      )}

      {isOtherProjectsModalOpen && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isOtherProjectsModalVisible ? "opacity-100" : "opacity-0"}`}
          onClick={closeOtherProjectsModal}
        >
          <div
            className={`relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-3xl border border-white/60 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 shadow-2xl transition-all duration-300 ${isOtherProjectsModalVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              onClick={closeOtherProjectsModal}
              className="absolute right-6 top-6 rounded-full border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 p-2 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors z-10"
              aria-label={closeLabel}
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="space-y-2 pt-8 pb-6 text-center">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {text.otherProjectsTitle}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {text.otherProjectsSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-8 pb-8">
              {otherProjects.map((project) => (
                <div
                  key={project.id}
                  className="flex flex-col rounded-2xl border border-slate-200/70 dark:border-slate-700/70 bg-white/90 dark:bg-slate-900/90 shadow-sm overflow-hidden"
                >
                  <img
                    src={project.image}
                    alt={project.title[language]}
                    className="w-full h-40 object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
                    onClick={() => openImageZoomModal(project.image)}
                  />
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {project.title[language]}
                      </h4>
                      <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-600 dark:text-slate-300">
                        <CheckCircle className="h-3 w-3" />
                        {project.status[language]}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4 flex-grow">
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
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {isImageZoomModalOpen && selectedImageUrl && (
        <div
          className={`fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-lg p-4 transition-opacity duration-300 ${isImageZoomModalVisible ? "opacity-100" : "opacity-0"}`}
          onClick={closeImageZoomModal}
        >
          <div
            className={`relative transition-all duration-300 ${isImageZoomModalVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImageUrl}
              alt="Project image zoom"
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
            <button
              onClick={closeImageZoomModal}
              className="absolute -right-4 -top-4 rounded-full bg-white/20 p-2 text-white hover:bg-white/30 transition-colors"
              aria-label={closeLabel}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
