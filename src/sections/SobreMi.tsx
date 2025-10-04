"use client";

import { Code2, Server, Zap, Users, Target, BrainCogIcon, Brain } from "lucide-react";
import TechStack from "@/components/TechStack";
import ExpertiseCarousel from "@/components/ExpertiseCarousel";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./SobreMi.module.css";

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
      "Con más de 5 años analizando problemas y los últimos 2 impulsando soluciones tecnológicas, he consolidado mi experiencia en base a la práctica y los desafíos del mundo empresarial real. Hoy cubro todo el ciclo: desde la idea hasta el despliegue y la iteración continua.",
    expertiseTitle: "Mi Expertise",
    expertiseSubtitle:
      "Inteligencia Artificial · Desarrollo web sólido · Arquitectura de soluciones · Lógica de negocios · APIs y microservicios · DevOps & CI/CD",
    aiTitle: "IA en Acción",
    aiSubtitle: "Cómo transformo los procesos en resultados reales",
    valuesTitle: "Mis Valores",
    valuesSubtitle: "Principios que guían mis decisiones",
  },
  en: {
    title: "About me",
    highlight: "me",
    description:
      "With 5+ years dissecting business problems and the last 2 driving tech solutions, I've honed my expertise through hands-on practice and real-world challenges. Today, I cover the full cycle: from ideation to deployment and continuous iteration.",
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
    <section id="sobre-mi" className={styles.section}>
      <div className={styles.sectionBackground} />
      <div className={styles.sectionBackground}>
        <img
          src="/ReportesDir%20Backend.png"
          alt=""
          aria-hidden="true"
          className={styles.decorativeImage}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <p className={styles.tagline}>
            {language === "es" ? "Perfil" : "Profile"}
          </p>
          <h2 className={styles.title}>
            {section.title.split(section.highlight)[0]}
            <span className={styles.titleHighlight}>
              <span className={styles.titleHighlightText}>{section.highlight}</span>
            </span>
          </h2>
          <p className={styles.description}>
            {section.description}
          </p>
        </div>

        <div className={styles.expertiseSection}>
          <div className={styles.expertiseHeader}>
            <p className={styles.expertiseTagline}>
              {language === "es" ? "Expertise" : "Expertise"}
            </p>
            <h3 className={styles.expertiseTitle}>
              {section.expertiseTitle}
            </h3>
            <p className={styles.expertiseSubtitle}>
              {section.expertiseSubtitle}
            </p>
          </div>
          <div className="relative">
            <ExpertiseCarousel slides={slides} />
          </div>
        </div>

        <div className={styles.aiSection}>
          <div className={styles.aiHeader}>
            <p className={styles.aiTagline}>
              {language === "es" ? "IA" : "AI"}
            </p>
            <h3 className={styles.aiTitle}>
              {section.aiTitle}
            </h3>
            <p className={styles.aiSubtitle}>
              {section.aiSubtitle}
            </p>
          </div>

          <div className={styles.aiCardsGrid}>
            {cards.map((card) => (
              <div
                key={card.key}
                className={styles.aiCard}
              >
                <div className={styles.aiCardOverlay}>
                  <div className={card.overlayClass} />
                  <div className={styles.aiCardOverlayInner} />
                </div>

                <div className={styles.aiCardContent}>
                  <div className={styles.aiCardHeader}>
                    <div className={card.iconWrapperClass}>
                      <Zap className={card.iconClass} />
                    </div>
                    <h4 className={styles.aiCardTitle}>
                      {card.title}
                    </h4>
                  </div>
                  <div className={styles.aiCardBullets}>
                    {card.bullets.map((bullet) => (
                      <div key={bullet.heading} className={styles.aiCardBullet}>
                        <span className={styles.aiCardBulletIcon}>&#10003;</span>
                        <div>
                          <h5 className={styles.aiCardBulletHeading}>
                            {bullet.heading}
                          </h5>
                          <p className={styles.aiCardBulletDescription}>
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
            <br  />
        <div className={styles.valuesSection}>
          <div className={styles.valuesHeader}>
            <p className={styles.valuesTagline}>
              {language === "es" ? "Valores" : "Values"}
            </p>
            <h3 className={styles.valuesTitle}>
              {section.valuesTitle}
            </h3>
            <p className={styles.valuesSubtitle}>
              {section.valuesSubtitle}
            </p>
          </div>

          <div className={styles.valuesGrid}>
            {values.map((valor) => (
              <div
                key={valor.title}
                className={`${styles.valueCard} ${styles[`valueCard${valor.key.charAt(0).toUpperCase() + valor.key.slice(1)}`]}`}
              >
                <div className={styles.valueCardIcon}>{valueIconMap[valor.key]}</div>
                <h4 className={styles.valueCardTitle}>
                  {valor.title}
                </h4>
                <p className={styles.valueCardDescription}>
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
