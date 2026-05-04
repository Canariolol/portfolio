"use client";

import { Code2, Server, Zap, Users, Target, BrainCogIcon, Brain } from "lucide-react";
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

const sectionContent = {
  es: {
    title: "Sobre mí",
    highlight: "mí",
    description:
      "Soy Arquitecto de Soluciones especializado en IA y sistemas. Tengo 14 años de experiencia en telecomunicaciones y TI, combinando atención a clientes, análisis operativo, desarrollo fullstack, automatización e infraestructura para llevar ideas desde el descubrimiento técnico hasta producción.",
    expertiseTitle: "Mi Expertise",
    expertiseSubtitle:
      "Arquitectura de soluciones · IA aplicada · Microservicios · Datos e infraestructura · Observabilidad · Spec-driven development",
    aiTitle: "IA en Acción",
    aiSubtitle: "Cómo transformo los procesos en resultados reales",
    valuesTitle: "Mis Valores",
    valuesSubtitle: "Principios que guían mis decisiones",
  },
  en: {
    title: "About me",
    highlight: "me",
    description:
      "I am a Solution Architect focused on AI and systems. I bring 14 years across telecommunications and IT, combining customer-facing work, operational analysis, fullstack development, automation, and infrastructure to take ideas from technical discovery to production.",
    expertiseTitle: "My Expertise",
    expertiseSubtitle:
      "Solution architecture · Applied AI · Microservices · Data and infrastructure · Observability · Spec-driven development",
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
        "Context/prompt engineering, LangChain, RAG, LLMs y flujos de automatización orientados a reducir tiempos operativos con IA responsable.",
    },
    {
      key: "fullstack" as const,
      title: "Fullstack & DevOps",
      description:
        "Aplicaciones con TypeScript, React, Next.js, Python, FastAPI, Node.js y APIs RESTful. CI/CD, Docker, testing y despliegues en Google Cloud.",
    },
    {
      key: "architecture" as const,
      title: "Arquitectura de Soluciones",
      description:
        "Diseño de roadmaps, PRDs, especificaciones, arquitecturas de microservicios y sistemas escalables con observabilidad desde etapas tempranas.",
    },
    {
      key: "additional" as const,
      title: "Habilidades Complementarias",
      description:
        "PostgreSQL, Redis, RabbitMQ, Terraform, Prometheus, Loki, Grafana, Salesforce, Notion, n8n, QA manual y automatizado con Playwright, Selenium y Postman.",
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
        "Context/prompt engineering, LangChain, RAG, LLMs, and automation workflows focused on reducing operational time with responsible AI.",
    },
    {
      key: "fullstack" as const,
      title: "Fullstack & DevOps",
      description:
        "Applications with TypeScript, React, Next.js, Python, FastAPI, Node.js, and RESTful APIs. CI/CD, Docker, testing, and Google Cloud deployments.",
    },
    {
      key: "architecture" as const,
      title: "Solution Architecture",
      description:
        "Roadmaps, PRDs, specifications, microservice architectures, and scalable systems with observability from the early stages.",
    },
    {
      key: "additional" as const,
      title: "Additional Skillset",
      description:
        "PostgreSQL, Redis, RabbitMQ, Terraform, Prometheus, Loki, Grafana, Salesforce, Notion, n8n, and manual/automated QA with Playwright, Selenium, and Postman.",
    },
    {
      key: "soft" as const,
      title: "People Skills",
      description:
        "Clear communication, complex problem-solving, adaptability, and a collaborative mindset rooted in actionable feedback.",
    },
  ],
};

const aiCards = {
  es: [
    {
      key: "llm",
      title: "LLM & Generative AI",
      overlayClass: "absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 animate-border-rise bg-[length:100%_200%] opacity-80",
      iconWrapperClass: "w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mr-4",
      iconClass: "w-6 h-6 text-purple-600 dark:text-purple-400",
      bullets: [
        {
          heading: "Ingeniería de contexto en Fullstack/DevOps",
          description: "Diseño y optimización del entorno de trabajo (prompts, pipelines, infraestructura y flujos de información) para que la IA y la automatización operen con máximo entendimiento, reduciendo fricción y mejorando la calidad del código y los despliegues.",
        },
        {
          heading: "Fine-tuning de modelos",
          description: "Adaptación de modelos preentrenados a tareas específicas usando conjuntos de datos personalizados y métricas de referencia.",
        },
        {
          heading: "RAG (Retrieval-Augmented Generation)",
          description: "Implementación de sistemas que combinan búsqueda de información con generación de texto para entregar respuestas precisas y con fallback controlado.",
        },
      ],
    },
    {
      key: "automation",
      title: "Automatización práctica",
      overlayClass: "absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400 via-green-600 to-green-800 animate-border-rise bg-[length:100%_200%] opacity-80",
      iconWrapperClass: "w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mr-4",
      iconClass: "w-6 h-6 text-green-600 dark:text-green-400",
      bullets: [
        {
          heading: "Automatización de reportes y documentos",
          description: "Sistemas que generan reportes y procesan documentos de forma automática usando IA y APIs de terceros.",
        },
        {
          heading: "Análisis inteligente de comunicaciones",
          description: "Soluciones que analizan correos y bandejas de entrada para clasificar, priorizar y responder con rapidez.",
        },
        {
          heading: "Procesamiento de datos con IA",
          description: "Flujos que transforman y analizan datos automáticamente para extraer insights accionables.",
        },
        {
          heading: "Optimización de flujos de trabajo",
          description: "Rediseño e implementación de procesos automatizados que generan eficiencia y valor tangible.",
        },
      ],
    },
  ],
  en: [
    {
      key: "llm",
      title: "LLM & Generative AI",
      overlayClass: "absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 animate-border-rise bg-[length:100%_200%] opacity-80",
      iconWrapperClass: "w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mr-4",
      iconClass: "w-6 h-6 text-purple-600 dark:text-purple-400",
      bullets: [
        {
          heading: "Fullstack/DevOps context engineering",
          description: "Design and fine-tune prompts, pipelines, infrastructure, and information flows so AI and automation operate with maximum understanding, reducing friction and improving delivery.",
        },
        {
          heading: "Model fine-tuning",
          description: "Specialise in adapting pre-trained models to specific tasks using custom datasets and evaluation metrics.",
        },
        {
          heading: "RAG (Retrieval-Augmented Generation)",
          description: "Build systems that combine retrieval and generation for precise answers with reliable fallbacks.",
        },
      ],
    },
    {
      key: "automation",
      title: "Practical automation",
      overlayClass: "absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400 via-green-600 to-green-800 animate-border-rise bg-[length:100%_200%] opacity-80",
      iconWrapperClass: "w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mr-4",
      iconClass: "w-6 h-6 text-green-600 dark:text-green-400",
      bullets: [
        {
          heading: "Automated reports and documents",
          description: "Implement systems that automatically produce reports and process documents using AI and third-party APIs.",
        },
        {
          heading: "Intelligent communications analysis",
          description: "Develop solutions that analyse inboxes to classify, prioritise, and respond faster.",
        },
        {
          heading: "Data processing with AI",
          description: "Create pipelines that transform and analyse data automatically to surface insights.",
        },
        {
          heading: "Workflow optimisation",
          description: "Redesign and implement automated business processes that drive efficiency and measurable value.",
        },
      ],
    },
  ],
};


const valuesContent = {
  es: [
    {
      key: "collaboration" as const,
      title: "Inmersión colaborativa",
      description: "Detras de cada desafío hay una necesidad y tras cada necesidad hay un motivo. Mi misión es sumergirme, entender y resolver.",
    },
    {
      key: "results" as const,
      title: "Resultados",
      description: "Foco en métricas y entregables claros que demuestren un avance real desde el primer sprint.",
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
      title: "Collaborative immersion",
      description: "Behind every challenge lies a need, and behind every need lies a why. My mission is to immerse, understand, and solve.",
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

const valueCardClassMap = {
  collaboration: "hover:shadow-xl hover:shadow-blue-500/20",
  results: "hover:shadow-xl hover:shadow-green-500/20",
  improvement: "hover:shadow-xl hover:shadow-purple-500/20",
};


export default function SobreMi() {
  const { language } = useLanguage();
  const section = sectionContent[language];
  const slides = expertiseContent[language].map((item) => ({
    icon: skillIconMap[item.key],
    titulo: item.title,
    descripcion: item.description,
  }));
  const cards = aiCards[language];
  const values = valuesContent[language];

  return (
    <section id="sobre-mi" className="section-transition section-transition-purple relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.08),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.08),transparent_55%)]" />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src="/ReportesDir%20Backend.png"
          alt=""
          aria-hidden="true"
          className="absolute right-[-5rem] bottom-[-6rem] hidden lg:block w-[460px] rotate-[3deg] skew-y-[2deg] opacity-70 shadow-[0_45px_120px_-70px_rgba(59,130,246,0.45)] transition-all duration-700 ease-out"
          style={{ maskImage: "radial-gradient(ellipse at center, rgba(0, 0, 0, 0.9) 40%, transparent 83%)", WebkitMaskImage: "radial-gradient(ellipse at center, rgba(0, 0, 0, 0.9) 60%, transparent 93%)", transformOrigin: "center left" }}
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {cards.map((card) => (
              <div
                key={card.key}
                className="group relative bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 shadow-lg"
              >
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className={card.overlayClass} />
                  <div className="absolute inset-1 bg-gray-50 dark:bg-gray-900 rounded-xl" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className={card.iconWrapperClass}>
                      <Zap className={card.iconClass} />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {card.title}
                    </h4>
                  </div>
                  <div className="space-y-4">
                    {card.bullets.map((bullet) => (
                      <div key={bullet.heading} className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1">&#10003;</span>
                        <div>
                          <h5 className="font-semibold text-gray-900 dark:text-white mb-1">
                            {bullet.heading}
                          </h5>
                          <p className="text-gray-600 dark:text-gray-300 text-sm">
                            {bullet.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <TechStack />
        </div>
        <br /><br /><br /><br />

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
                className={`group relative text-center p-8 bg-white/80 dark:bg-gray-900/80 rounded-2xl border border-slate-100 dark:border-slate-800 transition-all duration-300 hover:-translate-y-2 backdrop-blur ${valueCardClassMap[valor.key]}`}
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
