"use client";

import { Brain, CheckCircle2, Code2, Database, Eye, Server, Users, Workflow, Zap } from "lucide-react";
import TechStack from "@/components/TechStack";
import { useLanguage } from "@/context/LanguageContext";

const content = {
  es: {
    kicker: "Perfil",
    title: "Arquitectura con criterio de negocio",
    description:
      "Tengo 14 años de experiencia en telecomunicaciones y TI. Ese recorrido me permite traducir necesidades reales de operación, ventas y soporte en sistemas que la gente puede usar, mantener y escalar.",
    narrative:
      "Mi trabajo cruza descubrimiento técnico, planificación, desarrollo, testing, despliegue y observabilidad. Me interesa que una solución no solo compile: debe resolver el problema correcto, ahorrar tiempo y dejar al negocio en una posición mejor.",
    pillarsTitle: "Donde aporto más valor",
    stackTitle: "Stack y herramientas",
    valuesTitle: "Forma de trabajo",
    pillars: [
      {
        icon: Server,
        title: "Arquitectura de soluciones",
        description: "Roadmaps, PRDs, diseño técnico, microservicios, integraciones y criterios de evolución.",
      },
      {
        icon: Zap,
        title: "IA aplicada",
        description: "RAG, LangChain, LLMs, context engineering y automatización responsable para procesos B2B.",
      },
      {
        icon: Code2,
        title: "Fullstack productivo",
        description: "React, Next.js, TypeScript, Python, FastAPI, Node.js, APIs RESTful y despliegues cloud.",
      },
      {
        icon: Database,
        title: "Datos e infraestructura",
        description: "PostgreSQL, Redis, RabbitMQ, Docker, Terraform, Google Cloud y pipelines de entrega.",
      },
      {
        icon: Eye,
        title: "Observabilidad",
        description: "Métricas, logging, Prometheus, Loki, Grafana y monitoreo operativo para sistemas vivos.",
      },
      {
        icon: Users,
        title: "Puente con stakeholders",
        description: "Trabajo con equipos técnicos, áreas no técnicas y clientes para transformar dudas en decisiones.",
      },
    ],
    values: [
      "Spec-driven development antes de construir.",
      "Documentación suficiente para que el sistema pueda crecer.",
      "Testing manual y automatizado donde el riesgo lo justifica.",
      "Auditoría constante del código generado con IA.",
    ],
  },
  en: {
    kicker: "Profile",
    title: "Architecture with business judgment",
    description:
      "I bring 14 years across telecommunications and IT. That background helps me translate real operational, sales, and support needs into systems people can use, maintain, and scale.",
    narrative:
      "My work spans technical discovery, planning, development, testing, deployment, and observability. A solution should not merely compile: it should solve the right problem, save time, and leave the business in a stronger position.",
    pillarsTitle: "Where I create the most value",
    stackTitle: "Stack and tools",
    valuesTitle: "How I work",
    pillars: [
      {
        icon: Server,
        title: "Solution architecture",
        description: "Roadmaps, PRDs, technical design, microservices, integrations, and evolution criteria.",
      },
      {
        icon: Zap,
        title: "Applied AI",
        description: "RAG, LangChain, LLMs, context engineering, and responsible automation for B2B workflows.",
      },
      {
        icon: Code2,
        title: "Productive fullstack",
        description: "React, Next.js, TypeScript, Python, FastAPI, Node.js, RESTful APIs, and cloud delivery.",
      },
      {
        icon: Database,
        title: "Data and infrastructure",
        description: "PostgreSQL, Redis, RabbitMQ, Docker, Terraform, Google Cloud, and delivery pipelines.",
      },
      {
        icon: Eye,
        title: "Observability",
        description: "Metrics, logging, Prometheus, Loki, Grafana, and operational monitoring for living systems.",
      },
      {
        icon: Users,
        title: "Stakeholder bridge",
        description: "I work with technical teams, non-technical areas, and clients to turn uncertainty into decisions.",
      },
    ],
    values: [
      "Spec-driven development before building.",
      "Documentation strong enough for the system to grow.",
      "Manual and automated testing where risk justifies it.",
      "Constant review of AI-generated code.",
    ],
  },
};

export default function SobreMi() {
  const { language } = useLanguage();
  const text = content[language];

  return (
    <section id="sobre-mi" className="portfolio-section relative border-y border-[color:var(--border)] bg-[color:var(--surface)]/58">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="section-kicker">{text.kicker}</p>
            <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight text-[color:var(--foreground)] sm:text-5xl">
              {text.title}
            </h2>
            <p className="mt-6 text-lg leading-8 text-[color:var(--muted)]">{text.description}</p>
            <div className="surface-panel mt-8 rounded-lg p-6">
              <Brain className="mb-5 h-8 w-8 text-[color:var(--accent-strong)]" />
              <p className="text-lg font-semibold leading-8 text-[color:var(--foreground)]">{text.narrative}</p>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <div className="mb-6 flex items-end justify-between gap-4">
                <h3 className="text-2xl font-black text-[color:var(--foreground)]">{text.pillarsTitle}</h3>
                <Workflow className="h-6 w-6 text-[color:var(--accent-strong)]" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {text.pillars.map((pillar) => (
                  <article key={pillar.title} className="surface-panel rounded-lg p-5 transition-transform duration-200 hover:-translate-y-1">
                    <pillar.icon className="mb-5 h-7 w-7 text-[color:var(--accent-strong)]" />
                    <h4 className="text-lg font-black text-[color:var(--foreground)]">{pillar.title}</h4>
                    <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">{pillar.description}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="surface-panel rounded-lg p-6">
              <h3 className="text-2xl font-black text-[color:var(--foreground)]">{text.valuesTitle}</h3>
              <div className="mt-6 grid gap-3">
                {text.values.map((value) => (
                  <div key={value} className="flex gap-3 rounded-md bg-[color:var(--background)] p-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-[color:var(--accent-strong)]" />
                    <p className="text-sm font-semibold leading-6 text-[color:var(--foreground)]">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-8 text-2xl font-black text-[color:var(--foreground)]">{text.stackTitle}</h3>
              <TechStack />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
