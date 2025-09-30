import { Code2, Server, Database, Zap, Users, Target, BrainCogIcon } from "lucide-react";
import TechStack from "../components/TechStack";

import ExpertiseCarousel from "../components/ExpertiseCarousel";

export default function SobreMi() {
  const habilidadesPrincipales = [
    {
      icon: <Zap className="w-8 h-8 text-purple-600" />,
      titulo: "IA & Automatización",
      descripcion: "Ingeniería de Contexto > Prompts. Integración de distintos LLM en entornos de trabajo, entrenamiento de modelos y fine-tuning en Vertex AI y Document AI de GCP. Workflows con n8n.",
    },
    {
      icon: <Code2 className="w-8 h-8 text-green-600" />,
      titulo: "Fullstack & DevOps",
      descripcion: "Desarrollo de aplicaciones web con Next.js, React, FastAPI, Flask, APIs REST. Contenedores Docker, CI/CD con GitHub Actions. Autenticación, BBDD, Administración de secretos y Despliegue en GCP.",
    },
    {
      icon: <Server className="w-8 h-8 text-orange-600" />,
      titulo: "Arquitectura de Soluciones",
      descripcion: "Diseño de sistemas escalables que integran capacidades de IA, desde el frontend hasta el backend y despliegue en la nube. Optimización de costos y rendimiento. ",
    },
    {
      icon: <BrainCogIcon className="w-8 h-8 text-blue-600" />,
      titulo: "Skillset Adicional",
      descripcion: "Español Nativo, Inglés C2. Uso avanzado de CRMs como Salesforce. Entendimiento de lógica de negocios y fundamentos de UX. Bases de QA y testing. Diseño y desarrollo de videojuegos (Unity/Unreal).",
    },
    {
      icon: <Users className="w-8 h-8 text-teal-600" />,
      titulo: "Habilidades Blandas",
      descripcion: "Comunicación efectiva, resolución de problemas complejos, adaptabilidad, y un fuerte enfoque en la colaboración y el feedback para el crecimiento continuo.",
    }
  ];

  const valores = [
    {
      icon: <Users className="w-6 h-6 text-blue-500" />,
      titulo: "Colaboración",
      descripcion: "Trabajo en equipo cercano con clientes y stakeholders para entender necesidades reales.",
    },
    {
      icon: <Target className="w-6 h-6 text-green-500" />,
      titulo: "Resultados",
      descripcion: "Enfoque en delivering valor tangible y medible en cada proyecto.",
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-500" />,
      titulo: "Innovación",
      descripcion: "Siempre buscando nuevas tecnologías y métodos para mejorar procesos.",
    },
  ];

  return (
    <section id="sobre-mi" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Sobre <span className="text-blue-600 dark:text-blue-400">Mí</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Con más de 5 años analizando problemas y los últimos 2 apoyando el desarrollo de soluciones tecnológicas, 
            he construido mi experiencia a través de la práctica constante y la resolución 
            real de desafíos para clientes con necesidades concretas, donde hoy cubro de forma independiente
            las necesidades y requerimientos que se me plantean.
          </p>
        </div>

        {/* Mi Expertise */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Mi Expertise
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Inteligencia Artificial | Bases sólidas en desarrollo web | Arquitectura de soluciones | Lógica de negocios
                | APIs y microservicios | DevOps & CI/CD
            </p>
          </div>

          <ExpertiseCarousel slides={habilidadesPrincipales} />
        </div>

        {/* AI Expertise Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              IA en Acción
              </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* LLM & Generative AI */}
            <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mr-4">
                  <Zap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                  LLM & Generative AI
                </h4>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Ingeniería de contexto en Fullstack/DevOps
                    </h5>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Diseño y optimización del entorno de trabajo (prompts, pipelines, infraestructura y flujos de información) para que la IA y las herramientas automáticas operen con el máximo entendimiento, reduciendo fricción y mejorando la calidad del código y los despliegues.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Fine-tuning de Modelos
                    </h5>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Especializado en adaptar modelos pre-entrenados para tareas específicas 
                      con datasets personalizados.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-1">
                      RAG (Retrieval-Augmented Generation)
                    </h5>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Implementación de sistemas que combinan búsqueda de información 
                      con generación de texto para respuestas más precisas, asegurando un fallback viable.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Automatización Práctica*/}
            <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mr-4">
                  <Zap className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Automatización Práctica
                </h4>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Automatización de Reportes y Documentos
                    </h5>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Implementación de sistemas que generan automáticamente reportes y procesan 
                      documentos usando IA y APIs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Análisis Inteligente de Comunicaciones
                    </h5>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Desarrollo de soluciones que analizan automáticamente correos electrónicos 
                      y bandejas de entrada para clasificar y priorizar.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Procesamiento de Datos con IA
                    </h5>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Creación de flujos que transforman y analizan datos automáticamente 
                      utilizando capacidades de IA para extraer insights.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Optimización de Flujos de Trabajo
                    </h5>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Rediseño e implementación de procesos empresariales automatizados 
                      que generan eficiencia y valor tangible.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          {/* Tecnologías */}
          <TechStack />
          <br /><br />
          <br /><br />
        {/* Valores */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Mis Valores
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valores.map((valor, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 dark:bg-gray-900 rounded-xl"
              >
                <div className="flex justify-center mb-4">{valor.icon}</div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {valor.titulo}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {valor.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
