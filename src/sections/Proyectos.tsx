"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, ExternalLink, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

type Language = "es" | "en";
type LocalizedString = Record<Language, string>;

type Project = {
  title: LocalizedString;
  eyebrow: LocalizedString;
  description: LocalizedString;
  impact: Record<Language, string[]>;
  technologies: string[];
  image: string;
  gallery: string[];
};

const projects: Project[] = [
  {
    title: { es: "Eva3", en: "Eva3" },
    eyebrow: { es: "Gestión de equipos · IA · Producción", en: "Workforce management · AI · Production" },
    description: {
      es: "Plataforma modular para monitorear desempeño, evaluar equipos y convertir información operativa en reportes accionables para gerencia.",
      en: "Modular platform to monitor performance, evaluate teams, and turn operational data into actionable management reports.",
    },
    impact: {
      es: ["Más de 70% menos tiempo de evaluación", "Más de 80% menos tiempo revisando correos", "KPIs y métricas listas para informes"],
      en: ["Over 70% less evaluation time", "Over 80% less time reviewing emails", "KPIs and metrics ready for reporting"],
    },
    technologies: ["Gemini API", "Gmail API", "Python", "Flask", "React", "Firestore", "GCP"],
    image: "https://storage.googleapis.com/imagenes-portafolio-rodrigoyg/Eva3/1a.png",
    gallery: [
      "https://storage.googleapis.com/imagenes-portafolio-rodrigoyg/Eva3/1a.png",
      "https://storage.googleapis.com/imagenes-portafolio-rodrigoyg/Eva3/2.png",
      "https://storage.googleapis.com/imagenes-portafolio-rodrigoyg/Eva3/3a.png",
      "https://storage.googleapis.com/imagenes-portafolio-rodrigoyg/Eva3/4a.png",
    ],
  },
  {
    title: { es: "Docailysis", en: "Docailysis" },
    eyebrow: { es: "IDP SaaS · OCR · LLM", en: "IDP SaaS · OCR · LLM" },
    description: {
      es: "SaaS de análisis documental con IA para automatizar revisión de documentos complejos, scans y PDFs con capas de OCR y procesamiento con LLM.",
      en: "AI document analysis SaaS to automate reviews of complex documents, scans, and PDFs through OCR and LLM processing layers.",
    },
    impact: {
      es: ["Hasta 90% menos tiempo de gestión", "90% de precisión promedio en lotes complejos", "Base para expansión internacional B2B"],
      en: ["Up to 90% less processing time", "90% average accuracy in complex batches", "Foundation for global B2B expansion"],
    },
    technologies: ["Gemini", "LangChain", "Vertex AI", "Document AI", "Node.js", "MongoDB", "React"],
    image: "https://storage.googleapis.com/imagenes-portafolio-rodrigoyg/Docalysis/c.png",
    gallery: [
      "https://storage.googleapis.com/imagenes-portafolio-rodrigoyg/Docalysis/b.png",
      "https://storage.googleapis.com/imagenes-portafolio-rodrigoyg/Docalysis/c.png",
      "https://storage.googleapis.com/imagenes-portafolio-rodrigoyg/Docalysis/a.png",
      "https://storage.googleapis.com/imagenes-portafolio-rodrigoyg/Docalysis/d.png",
    ],
  },
  {
    title: { es: "Sistema de análisis de alarmas", en: "Alarm Analytics Platform" },
    eyebrow: { es: "Reportería · FastAPI · Cloud Run", en: "Reporting · FastAPI · Cloud Run" },
    description: {
      es: "Sistema de reportería web, PDF y Excel para transformar archivos en bruto con alertas de conducción en información útil para flotas.",
      en: "Web, PDF, and Excel reporting system that turns raw driving alarm files into useful fleet operations information.",
    },
    impact: {
      es: ["Entrega completa en una semana", "Hasta 90% menos tiempo de gestión", "API REST lista para integraciones futuras"],
      en: ["Complete delivery in one week", "Up to 90% less management time", "REST API ready for future integrations"],
    },
    technologies: ["React", "TypeScript", "Python", "FastAPI", "PostgreSQL", "Docker", "Cloud Run"],
    image: "https://storage.googleapis.com/imagenes-portafolio-rodrigoyg/ReportesConduccion/3.png",
    gallery: [
      "https://storage.googleapis.com/imagenes-portafolio-rodrigoyg/ReportesConduccion/1.png",
      "https://storage.googleapis.com/imagenes-portafolio-rodrigoyg/ReportesConduccion/3.png",
      "https://storage.googleapis.com/imagenes-portafolio-rodrigoyg/ReportesConduccion/4a.png",
      "https://storage.googleapis.com/imagenes-portafolio-rodrigoyg/ReportesConduccion/2a.png",
    ],
  },
];

const copy = {
  es: {
    kicker: "Casos seleccionados",
    title: "Productos que reducen fricción operativa",
    intro:
      "Cada proyecto combina descubrimiento, arquitectura, desarrollo y puesta en producción. El foco no es mostrar tecnología por sí sola, sino resultados que el negocio pueda medir.",
    viewCase: "Explorar galería",
    impact: "Impacto",
    stack: "Stack",
    close: "Cerrar",
  },
  en: {
    kicker: "Selected cases",
    title: "Products that reduce operational friction",
    intro:
      "Each project combines discovery, architecture, development, and production delivery. The focus is not technology for its own sake, but measurable business outcomes.",
    viewCase: "Explore gallery",
    impact: "Impact",
    stack: "Stack",
    close: "Close",
  },
};

export default function Proyectos() {
  const { language } = useLanguage();
  const text = copy[language];
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);

  const openGallery = (project: Project) => {
    setSelectedProject(project);
    setSelectedImage(0);
  };

  return (
    <section id="proyectos" className="portfolio-section bg-[color:var(--background)]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.75fr_1fr] lg:items-end">
          <div>
            <p className="section-kicker">{text.kicker}</p>
            <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight text-[color:var(--foreground)] sm:text-5xl">{text.title}</h2>
          </div>
          <p className="max-w-3xl text-lg leading-8 text-[color:var(--muted)]">{text.intro}</p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <article key={project.title.es} className="surface-panel overflow-hidden rounded-lg">
              <div className={`grid gap-0 lg:grid-cols-2 ${index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}>
                <button
                  type="button"
                  onClick={() => openGallery(project)}
                  className="group relative min-h-80 overflow-hidden bg-[color:var(--surface-muted)] text-left"
                >
                  <img
                    src={project.image}
                    alt={project.title[language]}
                    className="h-full min-h-80 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/68 via-black/8 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-black text-black">
                      {text.viewCase}
                      <ExternalLink className="h-4 w-4" />
                    </span>
                  </div>
                </button>

                <div className="flex min-h-80 flex-col justify-between p-6 sm:p-8 lg:p-10">
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">{project.eyebrow[language]}</p>
                    <h3 className="mt-4 text-3xl font-black tracking-tight text-[color:var(--foreground)]">{project.title[language]}</h3>
                    <p className="mt-5 text-base leading-7 text-[color:var(--muted)]">{project.description[language]}</p>

                    <div className="mt-7 grid gap-4 md:grid-cols-[0.9fr_1.1fr]">
                      <div>
                        <h4 className="mb-3 text-sm font-black uppercase tracking-[0.16em] text-[color:var(--foreground)]">{text.impact}</h4>
                        <div className="space-y-3">
                          {project.impact[language].map((item) => (
                            <div key={item} className="flex gap-3">
                              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-[color:var(--accent-strong)]" />
                              <p className="text-sm font-semibold leading-5 text-[color:var(--foreground)]">{item}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="mb-3 text-sm font-black uppercase tracking-[0.16em] text-[color:var(--foreground)]">{text.stack}</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span key={tech} className="rounded-md border border-[color:var(--border)] bg-[color:var(--background)] px-2.5 py-1.5 text-xs font-bold text-[color:var(--muted)]">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => openGallery(project)}
                    className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-black text-[color:var(--accent-strong)]"
                  >
                    {text.viewCase}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/78 p-4 backdrop-blur-md" onClick={() => setSelectedProject(null)}>
          <div className="max-h-[92vh] w-full max-w-6xl overflow-hidden rounded-lg bg-[color:var(--surface)] shadow-2xl" onClick={(event) => event.stopPropagation()}>
            <div className="flex items-center justify-between border-b border-[color:var(--border)] px-5 py-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">{selectedProject.eyebrow[language]}</p>
                <h3 className="mt-1 text-xl font-black text-[color:var(--foreground)]">{selectedProject.title[language]}</h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="flex h-10 w-10 items-center justify-center rounded-md border border-[color:var(--border)] text-[color:var(--foreground)]"
                aria-label={text.close}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="grid gap-0 lg:grid-cols-[1fr_220px]">
              <div className="flex max-h-[70vh] items-center justify-center bg-black">
                <img src={selectedProject.gallery[selectedImage]} alt={selectedProject.title[language]} className="max-h-[70vh] w-full object-contain" />
              </div>
              <div className="grid max-h-[70vh] gap-3 overflow-y-auto border-l border-[color:var(--border)] p-4">
                {selectedProject.gallery.map((image, index) => (
                  <button
                    key={image}
                    type="button"
                    onClick={() => setSelectedImage(index)}
                    className={`overflow-hidden rounded-md border-2 ${selectedImage === index ? "border-[color:var(--accent)]" : "border-transparent"}`}
                  >
                    <img src={image} alt="" className="h-28 w-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
