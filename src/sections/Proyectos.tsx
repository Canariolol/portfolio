"use client";

import { useMemo, useState } from "react";
import { ExternalLink, Github, Calendar, Users, Code, CheckCircle, ArrowRight, ArrowDown, ArrowLeft, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProjectImageModal from "@/components/ProjectImageModal";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { useEffect, useRef } from "react";
import styles from "./Proyectos.module.css";

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
      <div className={styles.sectionBackground} />
      <div className="relative max-w-7xl mx-auto space-y-20">
        <div className={styles.sectionHeader}>
          <p className={styles.sectionTagline}>
            {text.sectionTag}
          </p>
          <h2 className={styles.sectionHeading}>
            {text.heading.replace(text.highlight, "").trim()} {" "}
            <span className={styles.sectionHighlight}>
              <span className={styles.sectionHighlightText}>{text.highlight}</span>
            </span>
          </h2>
          <p className={styles.sectionIntro}>
            {text.intro}
          </p>
        </div>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div key={project.id} className={styles.projectCardContainer}>
              {index > 0 && (
                <div className={styles.projectDivider}>
                  <div className={styles.projectDividerLine} />
                </div>
              )}
              <article className={styles.projectCard}>
                <div
                  className={styles.projectImageContainer}
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
                    className={styles.projectImage}
                  />
                  <div className={styles.projectImageOverlay}>
                    <span className={styles.viewGalleryButton}>
                      <Code className="h-4 w-4" />
                      {text.viewGallery}
                    </span>
                  </div>
                </div>

                <div className={styles.projectContent}>
                  <div className={styles.projectContentMain}>
                    <div className={styles.projectHeader}>
                      <div className={styles.projectMeta}>
                        <p className={styles.projectDate}>
                          <Calendar className="h-4 w-4" />
                          {project.year}
                        </p>
                        <h3 className={styles.projectTitle}>
                          {project.title[language]}
                        </h3>
                      </div>
                      <span className={styles.projectStatus}>
                        {project.status[language]}
                      </span>
                    </div>

                    <div className={styles.projectSection}>
                      <div className={styles.projectSectionDivider} />
                    </div>
                    <div className={styles.projectDescription}>
                      <p className={styles.projectDescriptionText}>
                        {project.description[language]}
                      </p>
                    </div>

                    <div className={styles.projectSection}>
                      <div className={styles.projectSectionDivider} />
                    </div>
                    <div className={styles.projectClient}>
                      <div className={styles.projectClientInfo}>
                        <Users className="h-4 w-4" />
                        <span className={styles.projectClientLabel}>
                          {text.clientLabel}:
                        </span>
                        <span>{project.client[language]}</span>
                      </div>
                    </div>

                    <div className={styles.projectSection}>
                      <div className={styles.projectSectionDivider} />
                    </div>
                    <div className={styles.projectAchievements}>
                      <div>
                        <h4 className={styles.projectAchievementsTitle}>
                          {text.achievementsTitle}:
                        </h4>
                        <ul className={styles.projectAchievementsList}>
                          {project.achievements[language].map((achievement) => (
                            <li key={achievement} className={styles.projectAchievementItem}>
                              <span className={styles.projectAchievementBullet}>•</span>
                              <span className={styles.projectAchievementText}>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className={styles.projectSection}>
                      <div className={styles.projectSectionDivider} />
                    </div>
                    <div className={styles.projectTechnologies}>
                      <div className={styles.projectTechnologiesHeader}>
                        <h4 className={styles.projectTechnologiesTitle}>
                          {text.technologiesTitle}
                        </h4>
                        <div className={styles.projectTechnologiesList}>
                          {project.technologies.map((tech) => (
                            <span key={tech} className={styles.projectTechnology}>
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={styles.projectActions}>
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
            className={styles.otherProjectsButton}
          >
            {text.otherProjectsButton}
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>

        <div className="relative">
          <Image
            src="/PortafolioDir.png"
            alt="Imagen decorativa del proceso de trabajo"
            width={440}
            height={550}
            className={styles.processDecorativeImage}
          />
          <div className={styles.processSection}>
            <div className={styles.processDecorativeBlobs} />
            <div className={styles.processContent}>
              <div className={styles.processHeader}>
                <p className={styles.processTagline}>
                  {text.processTag}
                </p>
                <h3 className={styles.processTitle}>
                  {text.processHeading}
                </h3>
                <p className={styles.processSubtitle}>
                  {text.processSubtitle}
                </p>
              </div>
              <div className={styles.processGrid}>
                {/* Step 1 */}
                <div className={`${styles.processStep} ${styles.processStep1}`}>
                  <div className={styles.processStepIcon}>
                    {steps[0].step}
                  </div>
                  <h4 className={styles.processStepTitle}>
                    {steps[0].title}
                  </h4>
                  <p className={styles.processStepDescription}>
                    {steps[0].description}
                  </p>
                </div>

                {/* Arrow 1 -> 2 */}
                <div className={`${styles.processArrow} ${styles.processArrow1}`}>
                  <ArrowRight className="w-10 h-10" />
                </div>

                {/* Step 2 */}
                <div className={`${styles.processStep} ${styles.processStep2}`}>
                  <div className={styles.processStepIcon}>
                    {steps[1].step}
                  </div>
                  <h4 className={styles.processStepTitle}>
                    {steps[1].title}
                  </h4>
                  <p className={styles.processStepDescription}>
                    {steps[1].description}
                  </p>
                </div>

                {/* Arrow 2 -> 3 */}
                <div className={`${styles.processArrow} ${styles.processArrow2}`}>
                  <ArrowDown className="w-10 h-10" />
                </div>

                {/* Step 3 */}
                <div className={`${styles.processStep} ${styles.processStep3}`}>
                  <div className={styles.processStepIcon}>
                    {steps[2].step}
                  </div>
                  <h4 className={styles.processStepTitle}>
                    {steps[2].title}
                  </h4>
                  <p className={styles.processStepDescription}>
                    {steps[2].description}
                  </p>
                </div>

                {/* Arrow 3 -> 4 */}
                <div className={`${styles.processArrow} ${styles.processArrow3}`}>
                  <ArrowLeft className="w-10 h-10" />
                </div>

                {/* Step 4 */}
                <div className={`${styles.processStep} ${styles.processStep4}`}>
                  <div className={styles.processStepIcon}>
                    {steps[3].step}
                  </div>
                  <h4 className={styles.processStepTitle}>
                    {steps[3].title}
                  </h4>
                  <p className={styles.processStepDescription}>
                    {steps[3].description}
                  </p>
                </div>

                {/* Arrow 4 -> 1 */}
                <div className={`${styles.processArrow} ${styles.processArrow4}`}>
                  <ArrowUp className="w-10 h-10" />
                </div>
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
          className={`${styles.modalBackdropInline} ${isOtherProjectsModalVisible ? styles.modalBackdropInlineVisible : styles.modalBackdropInlineHidden}`}
          onClick={closeOtherProjectsModal}
        >
          <div
            className={`${styles.modalInline} ${isOtherProjectsModalVisible ? styles.modalInlineVisible : styles.modalInlineHidden}`}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              onClick={closeOtherProjectsModal}
              className={styles.modalCloseButtonInline}
              aria-label={closeLabel}
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className={`${styles.modalHeaderInline} space-y-2 pt-8 pb-6 text-center`}>
              <h3 className={styles.modalTitleInline}>
                {text.otherProjectsTitle}
              </h3>
              <p className={styles.modalSubtitleInline}>
                {text.otherProjectsSubtitle}
              </p>
            </div>

            <div className={`${styles.modalContentInline} ${styles.otherProjectsGridInline}`}>
              {otherProjects.map((project) => (
                <div
                  key={project.id}
                  className={styles.otherProjectCardInline}
                >
                  <img
                    src={project.image}
                    alt={project.title[language]}
                    className={styles.otherProjectImageInline}
                    onClick={() => openImageZoomModal(project.image)}
                  />
                  <div className={styles.otherProjectContentInline}>
                    <div className={`${styles.otherProjectHeaderInline} mb-4`}>
                      <h4 className={styles.otherProjectTitleInline}>
                        {project.title[language]}
                      </h4>
                      <span className={styles.otherProjectStatusInline}>
                        <CheckCircle className="h-3 w-3" />
                        {project.status[language]}
                      </span>
                    </div>
                    <p className={`${styles.otherProjectDescriptionInline} mb-4 flex-grow`}>
                      {project.description[language]}
                    </p>
                    <div className={`${styles.otherProjectDateInline} mb-4`}>
                      <Calendar className="h-4 w-4" />
                      {project.year}
                    </div>
                    <div className={styles.otherProjectTechnologiesInline}>
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={styles.otherProjectTechnologyInline}
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
          className={`${styles.imageZoomModalInline} ${isImageZoomModalVisible ? styles.imageZoomModalInlineVisible : styles.imageZoomModalInlineHidden}`}
          onClick={closeImageZoomModal}
        >
          <div
            className={`${styles.imageZoomContentInline} ${isImageZoomModalVisible ? styles.imageZoomContentInlineVisible : styles.imageZoomContentInlineHidden}`}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImageUrl}
              alt="Project image zoom"
              className={styles.imageZoomImageInline}
            />
            <button
              onClick={closeImageZoomModal}
              className={styles.imageZoomCloseButtonInline}
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
