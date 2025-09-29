import { Code2, Server, Database, Zap, Users, Target } from "lucide-react";

export default function SobreMi() {
  const habilidadesPrincipales = [
    {
      icon: <Zap className="w-8 h-8 text-purple-600" />,
      titulo: "IA & LLM Expertise",
      descripcion: "OpenAI, Anthropic, Hugging Face, LangChain. Desarrollo de soluciones avanzadas con modelos de lenguaje y automación inteligente.",
    },
    {
      icon: <Database className="w-8 h-8 text-blue-600" />,
      titulo: "Machine Learning",
      descripcion: "TensorFlow, PyTorch, scikit-learn. Entrenamiento y fine-tuning de modelos para tareas específicas de clasificación y predicción.",
    },
    {
      icon: <Code2 className="w-8 h-8 text-green-600" />,
      titulo: "Automatización con IA",
      descripcion: "RPA, flujos de trabajo automatizados, integración de APIs de IA en sistemas existentes. Optimización de procesos con inteligencia artificial.",
    },
    {
      icon: <Server className="w-8 h-8 text-orange-600" />,
      titulo: "Arquitectura de Soluciones",
      descripcion: "Diseño de sistemas escalables que integran capacidades de IA, desde el frontend hasta el backend y despliegue en la nube.",
    },
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

        {/* Mi Expertise en IA */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Mi Expertise en IA
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Especializado en aplicar inteligencia artificial y machine learning 
              para resolver problemas complejos de manera innovadora.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {habilidadesPrincipales.map((habilidad, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">{habilidad.icon}</div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {habilidad.titulo}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {habilidad.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* IA Expertise Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              IA en Acción
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Mi expertise en inteligencia artificial me permite crear soluciones innovadoras 
              que transforman la manera en que las empresas operan.
            </p>
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
                      Ingeniería de Prompts
                    </h5>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Diseño de prompts avanzados para maximizar la precisión y relevancia 
                      de las respuestas de los modelos.
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
                      con generación de texto para respuestas más precisas.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Machine Learning & Automation */}
            <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4">
                  <Database className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Machine Learning & Automation
                </h4>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Modelos Predictivos
                    </h5>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Desarrollo de modelos de clasificación, regresión y clustering 
                      para predecir tendencias y comportamientos.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Procesamiento de Lenguaje Natural
                    </h5>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Análisis de sentimiento, extracción de entidades y clasificación 
                      de texto para automatizar tareas de procesamiento.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Automatización Inteligente
                    </h5>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Integración de capacidades de IA en flujos de trabajo existentes 
                      para optimizar procesos y tomar decisiones automáticas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tecnologías */}
          <div className="mt-16">
            <h4 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
              Stack de IA que Domino
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                'OpenAI API', 'Anthropic Claude', 'LangChain', 'Hugging Face',
                'TensorFlow', 'PyTorch', 'scikit-learn', 'Pandas',
                'Transformers', 'FastAPI', 'Docker', 'AWS SageMaker'
              ].map((tech, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center hover:shadow-md transition-shadow"
                >
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

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
