"use client";

import { Code2, Server, Database, Zap, Users, Target, BrainCogIcon, Brain } from "lucide-react";
import TechStack from "@/components/TechStack";
import ExpertiseCarousel from "@/components/ExpertiseCarousel";
import { useLanguage } from "@/context/LanguageContext";

const skillIconMap = {
  ai: <Zap className="w-8 h-8 text-purple-600" />,
  fullstack: <Code2 className="w-8 h-8 text-green-600" />,
  architecture: <Server className="w-8 h-8 text-orange-600" />,
  additional: <BrainCogIcon className="w-8 h-8 text-blue-600" />,
  soft: <Users className="w-8 h-8 text-teal-600" />,
};

const valueIconMap = {
  collaboration: <Users className="w-6 h-6 text-blue-500" />,
  results: <Target className="w-6 h-6 text-green-500" />,
  improvement: <Brain className="w-6 h-6 text-purple-500" />,
};

const aiIconMap = {
  llm: <Brain className="w-6 h-6 text-blue-500" />,
  architecture: <Database className="w-6 h-6 text-purple-500" />,
  automation: <Zap className="w-6 h-6 text-green-500" />,
};

const sectionContent = {
  es: {
    title: "Sobre mí",
    highlight: "mí",
    description:
      "Con más de 5 años analizando problemas y los últimos 2 impulsando soluciones tecnológicas, he consolidado mi experiencia trabajando codo a codo con empresas que necesitaban resultados concretos. Hoy cubro todo el ciclo: desde la idea hasta el despliegue y la iteración continua.",
    expertiseTitle: "Mi Expertise",
    expertiseSubtitle:
      "Inteligencia Artificial · Desarrollo web sólido · Arquitectura de soluciones · Lógica de negocios · APIs y microservicios · DevOps & CI/CD",
    aiTitle: "IA en Acción",
    aiSubtitle: "Cómo transformo los procesos en resultados reales",
    valuesTitle: "Mis Valores",
    valuesSubtitle: "Principios que guían cada proyecto que lidero",
  },
  en: {
    title: "About me",
    highlight: "me",
    description:
      "With 5+ years dissecting business problems and the last 2 driving tech solutions, I build end-to-end products that deliver measurable impact. I partner with teams from the initial idea through deployment and continuous improvement.",
    expertiseTitle: "My Expertise",
    expertiseSubtitle:
      "Artificial Intelligence · Solid web foundations · Solution architecture · Business logic · APIs & microservices · DevOps & CI/CD",
    aiTitle: "AI in Action",
    aiSubtitle: "How I turn complex workflows into tangible outcomes",
    valuesTitle: "My Values",
    valuesSubtitle: "Principles that drive every engagement",
  },
};

const expertiseContent = {
  es: [
    {
      key: "ai" as const,
      title: "IA & Automatización",
      description:
        "Ingeniería de contexto, integración de LLM en entornos productivos, entrenamiento y fine-tuning en Vertex AI y Document AI. Workflows con n8n y automatizaciones a medida.",
    },
    {
      key: "fullstack" as const,
      title: "Fullstack & DevOps",
      description:
        "Aplicaciones web con Next.js, React, FastAPI y Flask. Contenedores Docker, CI/CD con GitHub Actions, autenticación, bases de datos y despliegues en GCP.",
    },
    {
      key: "architecture" as const,
      title: "Arquitectura de Soluciones",
      description:
        "Diseño de sistemas escalables que combinan IA, frontend, backend y nube. Optimización continua de costos y rendimiento.",
    },
    {
      key: "additional" as const,
      title: "Habilidades Complementarias",
      description:
        "Español nativo, inglés C2, dominio de CRMs como Salesforce, fundamentos UX, QA y testing. Experiencia en diseño y desarrollo de videojuegos.",
    },
    {
      key: "soft" as const,
      title: "Habilidades Humanas",
      description:
        "Comunicación clara, resolución de problemas complejos, adaptabilidad y foco en colaboración con feedback continuo.",
    },
  ],
  en: [
    {
      key: "ai" as const,
      title: "AI & Automation",
      description:
        "Context engineering beyond prompts, LLM integrations in production, training and fine-tuning on Vertex AI and Document AI. Tailored automation workflows with n8n.",
    },
    {
      key: "fullstack" as const,
      title: "Fullstack & DevOps",
      description:
        "Web applications with Next.js, React, FastAPI and Flask. Dockerized services, GitHub Actions pipelines, authentication, databases, and GCP deployments.",
    },
    {
      key: "architecture" as const,
      title: "Solution Architecture",
      description:
        "End-to-end systems that blend AI, frontend, backend, and cloud infrastructure. Continuous tuning for cost efficiency and performance.",
    },
    {
      key: "additional" as const,
      title: "Additional Skillset",
      description:
        "Native Spanish, C2 English, advanced CRM usage (Salesforce), UX fundamentals, QA/testing know-how, and game design experience.",
    },
    {
      key: "soft" as const,
      title: "People Skills",
      description:
        "Clear communication, complex problem-solving, adaptability, and a collaborative mindset rooted in actionable feedback.",
    },
  ],
};

const aiContent = {
  es: [
    {
      key: "llm" as const,
      heading: "LLM & Generative AI",
      intro:
        "Experimentos rápidos que se convierten en productos estables, con estrategias RAG, evaluación continua y monitoreo de calidad.",
      bullets: [
        "Diseño de contextos híbridos (RAG + herramientas especiales) con fallback inteligente",
        "Evaluación automática de prompts y respuestas para mantener precisión",
        "Experimentos controlados para iterar modelos, embeddings y pipelines",
      ],
    },
    {
      key: "architecture" as const,
      heading: "Arquitectura y Datos",
      intro:
        "Bases sólidas para soportar la automatización: APIs, permisos, pipelines de datos y observabilidad end-to-end.",
      bullets: [
        "Diseño de APIs y microservicios listos para escalar",
        "Modelado y orquestación de datos para reportes en tiempo real",
        "Monitoreo y alertas que mantienen la operación saludable",
      ],
    },
    {
      key: "automation" as const,
      heading: "Automatización Práctica",
      intro:
        "Flujos que impactan: reportes automáticos, clasificación inteligente y generación de entregables listos para negocio.",
      bullets: [
        "Procesos que reducen horas manuales en análisis de información",
        "Sistemas que entienden correos y bandejas de entrada para priorizar",
        "Documentos, reportes y dashboards generados de forma automática",
      ],
    },
  ],
  en: [
    {
      key: "llm" as const,
      heading: "LLMs & Generative AI",
      intro:
        "Fast experiments that turn into reliable products with RAG strategies, continuous evaluation, and quality monitoring.",
      bullets: [
        "Hybrid context design (RAG + specialized tools) with graceful fallbacks",
        "Automated prompt and response evaluation to sustain accuracy",
        "Controlled experiments to iterate models, embeddings, and pipelines",
      ],
    },
    {
      key: "architecture" as const,
      heading: "Architecture & Data",
      intro:
        "Solid foundations for automation: APIs, permissions, data pipelines, and end-to-end observability.",
      bullets: [
        "API and microservice design built for scale",
        "Data modeling and orchestration for real-time reporting",
        "Monitoring and alerting that keeps operations healthy",
      ],
    },
    {
      key: "automation" as const,
      heading: "Practical Automation",
      intro:
        "Workflows that matter: automated reports, intelligent classification, and business-ready deliverables.",
      bullets: [
        "Processes that cut manual hours in information analysis",
        "Systems that read inboxes to categorize and prioritize",
        "Documents, reports, and dashboards generated on demand",
      ],
    },
  ],
};

const valuesContent = {
  es: [
    {
      key: "collaboration" as const,
      title: "Colaboración",
      description: "Trabajo cercano con equipos y stakeholders para entender lo esencial y construir sin sorpresas.",
    },
    {
      key: "results" as const,
      title: "Resultados",
      description: "Foco en métricas y entregables claros que demuestren impacto real desde el primer sprint.",
    },
    {
      key: "improvement" as const,
      title: "Perfeccionamiento continuo",
      description: "Si lo sé, lo aplico. Si tengo dudas, lo valido. Si no lo sé, lo investigo, lo aprendo y lo resuelvo.",
    },
  ],
  en: [
    {
      key: "collaboration" as const,
      title: "Collaboration",
      description: "Close partnership with teams and stakeholders to pinpoint what matters and deliver without surprises.",
    },
    {
      key: "results" as const,
      title: "Results",
      description: "Obsessed with clear metrics and deliverables that prove real impact from sprint one.",
    },
    {
      key: "improvement" as const,
      title: "Continuous improvement",
      description: "If I know it, I apply it. If I doubt it, I validate it. If I don’t, I research, learn, and solve it.",
    },
  ],
};

export default function SobreMi() {
  const { language } = useLanguage();
  const section = sectionContent[language];
  const slides = expertiseContent[language].map((item) => ({
    icon: skillIconMap[item.key],
    titulo: item.title,
    descripcion: item.description,
  }));
  const aiSections = aiContent[language];
  const values = valuesContent[language];

  return (
    <section id="sobre-mi" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.08),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.08),transparent_55%)]" />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src="/PortafolioDir.png"
          alt=""
          aria-hidden="true"
          className="absolute -left-72 top-32 hidden lg:block w-[480px] rotate-[-2deg] skew-y-[-3deg] opacity-80 shadow-[0_40px_90px_-60px_rgba(59,130,246,0.65)]"
          style={{ maskImage: "radial-gradient(circle at center, rgba(0, 0, 0, 0.85) 40%, transparent 85%)", WebkitMaskImage: "radial-gradient(circle at center, rgba(0, 0, 0, 0.85) 40%, transparent 85%)", transformOrigin: "center right" }}
        />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-sm uppercase tracking-[0.35em] text-blue-500 mb-4">
            {language === "es" ? "Perfil" : "Profile"}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {section.title.split(section.highlight)[0]}
            <span className="relative inline-block">
              <span className="absolute inset-x-0 -bottom-2 h-3 bg-gradient-to-r from-blue-200 via-sky-200 to-transparent dark:from-blue-500/20 dark:via-sky-400/30 dark:to-transparent rounded-full" />
              <span className="relative text-blue-600 dark:text-blue-400">{section.highlight}</span>
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            {section.description}
          </p>
        </div>

        <div className="mb-24">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-purple-500 mb-3">
              {language === "es" ? "Expertise" : "Expertise"}
            </p>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {section.expertiseTitle}
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {section.expertiseSubtitle}
            </p>
          </div>
          <div className="relative">
            <ExpertiseCarousel slides={slides} />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent dark:from-gray-900" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent dark:from-gray-900" />
          </div>
        </div>

        <div className="mb-24">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-500 mb-3">
              {language === "es" ? "IA" : "AI"}
            </p>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {section.aiTitle}
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {section.aiSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {aiSections.map((item) => (
              <div key={item.heading} className="group relative bg-white/80 dark:bg-gray-900/80 rounded-2xl p-8 shadow-lg shadow-blue-500/5 dark:shadow-none border border-slate-100 dark:border-slate-800 backdrop-blur">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 via-blue-400/0 to-purple-500/0 transition-opacity duration-500 group-hover:opacity-10" />
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-100/80 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mr-4">
                      {aiIconMap[item.key]}
                    </div>
                    <h4 className="text-2xl font-semibold text-gray-900 dark:text-white">
                      {item.heading}
                    </h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {item.intro}
                  </p>
                  <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <span className="mt-0.5 inline-flex h-2 w-2 rounded-full bg-gradient-to-br from-blue-500 to-purple-500" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-24">
          <TechStack />
        </div>

        <div>
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-500 mb-3">
              {language === "es" ? "Valores" : "Values"}
            </p>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {section.valuesTitle}
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {section.valuesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((valor) => (
              <div
                key={valor.title}
                className="group relative text-center p-8 bg-white/80 dark:bg-gray-900/80 rounded-2xl border border-slate-100 dark:border-slate-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl shadow-blue-500/5 backdrop-blur"
              >
                <div className="flex justify-center mb-4">{valueIconMap[valor.key]}</div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {valor.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {valor.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
