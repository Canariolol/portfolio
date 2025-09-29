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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Sobre <span className="text-blue-600 dark:text-blue-400">Mí</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Con más de 5 años analizando problemas y desarrollando soluciones tecnológicas, 
            he construido mi experiencia a través de la práctica constante y la resolución 
            real de desafíos para clientes con necesidades concretas.
          </p>
        </div>
      </section>

      {/* Mis Habilidades */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Mi Expertise en IA
            </h2>
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
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {habilidad.titulo}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {habilidad.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mi Filosofía */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Mi Filosofía de Trabajo
            </h2>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Mi enfoque principal es resolver problemas de manera práctica y eficiente. 
                He aprendido que la mejor manera de adquirir experiencia es enfrentándose 
                a desafíos reales y encontrando soluciones que funcionen en el mundo real.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Creo que el valor real de un desarrollador no está en los años de experiencia formal, 
                sino en la capacidad de entender problemas, aprender rápidamente las tecnologías 
                necesarias y entregar soluciones que realmente resuelvan las necesidades del cliente.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Cada proyecto es una oportunidad para aprender algo nuevo y demostrar que con 
                dedicación y enfoque en el problema, se pueden lograr resultados profesionales 
                sin necesidad de una trayectoria corporativa tradicional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Mis Valores
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valores.map((valor, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 dark:bg-gray-900 rounded-xl"
              >
                <div className="flex justify-center mb-4">{valor.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {valor.titulo}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {valor.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IA Expertise Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              IA en Acción
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Mi expertise en inteligencia artificial me permite crear soluciones innovadoras 
              que transforman la manera en que las empresas operan.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* LLM & Generative AI */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mr-4">
                  <Zap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  LLM & Generative AI
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Fine-tuning de Modelos
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Especializado en adaptar modelos pre-entrenados para tareas específicas 
                      con datasets personalizados.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Ingeniería de Prompts
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Diseño de prompts avanzados para maximizar la precisión y relevancia 
                      de las respuestas de los modelos.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      RAG (Retrieval-Augmented Generation)
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Implementación de sistemas que combinan búsqueda de información 
                      con generación de texto para respuestas más precisas.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Machine Learning & Automation */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4">
                  <Database className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Machine Learning & Automation
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Modelos Predictivos
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Desarrollo de modelos de clasificación, regresión y clustering 
                      para predecir tendencias y comportamientos.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Procesamiento de Lenguaje Natural
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Análisis de sentimiento, extracción de entidades y clasificación 
                      de texto para automatizar tareas de procesamiento.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Automatización Inteligente
                    </h4>
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
            <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
              Stack de IA que Domino
            </h3>
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
      </section>

      {/* Experiencia Destacada */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Mi Camino de Aprendizaje
            </h2>
          </div>

          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Desarrollo de Soluciones Prácticas
                </h3>
                <span className="text-blue-600 dark:text-blue-400 font-medium">
                  2020 - Presente
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                Enfocado en analizar problemas reales y desarrollar soluciones completas 
                desde la conceptualización hasta el despliegue en producción.
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm">
                  Análisis de Problemas
                </span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm">
                  Desarrollo Fullstack
                </span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm">
                  Despliegue en Producción
                </span>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Aprendizaje Continuo y Autodidacta
                </h3>
                <span className="text-blue-600 dark:text-blue-400 font-medium">
                  2019 - Presente
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                Mantenimiento constante de habilidades actualizadas a través de 
                proyectos personales, cursos especializados y documentación técnica.
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm">
                  Aprendizaje Autodidacta
                </span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm">
                  Tecnologías Emergentes
                </span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm">
                  Mejores Prácticas
                </span>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Proyectos para Clientes Reales
                </h3>
                <span className="text-blue-600 dark:text-blue-400 font-medium">
                  2023 - Presente
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                Desarrollo y entrega de 3 proyectos completos que actualmente 
                están en producción, resolviendo necesidades específicas de clientes.
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm">
                  Gestión de Proyectos
                </span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm">
                  Comunicación con Clientes
                </span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm">
                  Soporte Continuo
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
