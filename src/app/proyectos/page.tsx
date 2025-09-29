'use client';

import { useState } from 'react';
import { ExternalLink, Github, Calendar, Users, Code, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Proyectos() {
  const [filtroActivo, setFiltroActivo] = useState('todos');

  const filtros = [
    { id: 'todos', nombre: 'Todos los Proyectos' },
    { id: 'ia', nombre: 'Inteligencia Artificial' },
    { id: 'web', nombre: 'Aplicaciones Web' },
    { id: 'automatizacion', nombre: 'Automatización' },
    { id: 'backend', nombre: 'Backend' },
  ];

  const proyectos = [
    {
      id: 1,
      titulo: 'Asistente de Ventas con IA',
      descripcion: 'Sistema de chatbot inteligente con fine-tuning de GPT-4 para atención al cliente y ventas automatizadas. Incluye análisis de sentimiento, generación de respuestas personalizadas y aprendizaje continuo de interacciones.',
      imagen: '/api/placeholder/600/400',
      tecnologias: ['OpenAI API', 'LangChain', 'Python', 'FastAPI', 'PostgreSQL', 'Vector DB'],
      categoria: 'ia',
      estado: 'en-produccion',
      fecha: '2024',
      cliente: 'E-commerce de Moda',
      urlDemo: '#',
      urlGithub: '#',
      iaFeatures: [
        'Fine-tuning de modelo GPT-4 con datos del cliente',
        'Sistema RAG para acceso a base de conocimientos',
        'Análisis de sentimiento en tiempo real',
        'Generación de respuestas contextualizadas'
      ],
      logros: [
        'Reducción del 65% en tiempo de respuesta al cliente',
        'Aumento del 30% en conversiones de ventas',
        'Manejo de 1000+ conversaciones simultáneas',
        'Satisfacción del cliente del 95%'
      ]
    },
    {
      id: 2,
      titulo: 'Plataforma de Automatización de Contenido',
      descripcion: 'Sistema que utiliza IA para generar, optimizar y distribuir contenido automáticamente en múltiples plataformas. Incluye procesamiento de lenguaje natural para análisis de tendencias y generación de texto optimizado para SEO.',
      imagen: '/api/placeholder/600/400',
      tecnologias: ['Anthropic Claude', 'Hugging Face', 'Transformers', 'Node.js', 'MongoDB', 'Airflow'],
      categoria: 'ia',
      estado: 'en-produccion',
      fecha: '2024',
      cliente: 'Agencia de Marketing Digital',
      urlDemo: '#',
      urlGithub: '#',
      iaFeatures: [
        'Generación de contenido con múltiples LLMs',
        'Análisis de tendencias con NLP',
        'Optimización SEO automática',
        'Programación de publicación inteligente'
      ],
      logros: [
        'Generación de 200+ artículos mensuales automatizados',
        'Aumento del 150% en tráfico orgánico',
        'Reducción del 90% en tiempo de creación de contenido',
        'Integración con 5 plataformas sociales'
      ]
    },
    {
      id: 3,
      titulo: 'Sistema Predictivo de Mantenimiento',
      descripcion: 'Plataforma de machine learning para predecir fallas en equipos industriales utilizando datos de sensores IoT. Implementa modelos de series temporales y anomaly detection para mantenimiento predictivo.',
      imagen: '/api/placeholder/600/400',
      tecnologias: ['TensorFlow', 'PyTorch', 'scikit-learn', 'Python', 'InfluxDB', 'Grafana'],
      categoria: 'ia',
      estado: 'en-produccion',
      fecha: '2023',
      cliente: 'Empresa Manufacturera',
      urlDemo: '#',
      urlGithub: '#',
      iaFeatures: [
        'Modelos predictivos con LSTM y Prophet',
        'Detección de anomalías en tiempo real',
        'Dashboard de monitoreo con alertas automáticas',
        'Retraining automático de modelos'
      ],
      logros: [
        'Predicción de fallas con 24h de anticipación',
        'Reducción del 40% en costos de mantenimiento',
        'Aumento del 25% en eficiencia operativa',
        'Monitoreo de 500+ sensores en tiempo real'
      ]
    }
  ];

  const proyectosFiltrados = filtroActivo === 'todos' 
    ? proyectos 
    : proyectos.filter(proyecto => proyecto.categoria === filtroActivo);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Proyectos de <span className="text-purple-600 dark:text-purple-400">IA</span> en Producción
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Aquí presento mis 3 proyectos especializados en inteligencia artificial que están 
            funcionando actualmente para clientes reales. Cada uno demuestra mi capacidad para 
            aplicar IA, machine learning y automatización en resolver problemas complejos.
          </p>
        </div>
      </section>

      {/* Filtros */}
      <section className="px-4 sm:px-6 lg:px-8 mb-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {filtros.map((filtro) => (
              <button
                key={filtro.id}
                onClick={() => setFiltroActivo(filtro.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  filtroActivo === filtro.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600'
                }`}
              >
                {filtro.nombre}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Proyectos */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {proyectosFiltrados.map((proyecto) => (
              <div
                key={proyecto.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                {/* Imagen del Proyecto */}
                <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center">
                      <Code className="w-16 h-16 mx-auto mb-2 opacity-80" />
                      <p className="text-sm opacity-90">{proyecto.titulo}</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-green-500 text-white text-xs font-medium rounded-full">
                      <CheckCircle className="w-3 h-3 inline mr-1" />
                      En Producción
                    </span>
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {proyecto.titulo}
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {proyecto.fecha}
                    </span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {proyecto.descripcion}
                  </p>

                  {/* Cliente */}
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <Users className="w-4 h-4 mr-2" />
                    {proyecto.cliente}
                  </div>

                  {/* Tecnologías */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {proyecto.tecnologias.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Logros */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Resultados Alcanzados:
                    </h4>
                    <ul className="space-y-1">
                      {proyecto.logros.map((logro, index) => (
                        <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                          <span className="text-green-500 mr-2 mt-0.5">•</span>
                          {logro}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Acciones */}
                  <div className="flex gap-3">
                    <Button className="flex-1" size="sm">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Ver Demo
                    </Button>
                    <Button variant="outline" size="sm">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mensaje cuando no hay proyectos */}
          {proyectosFiltrados.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400">
                No se encontraron proyectos en esta categoría.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Sección de Proceso de Trabajo */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Mi Proceso de Trabajo
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Así es como transformo problemas en soluciones funcionales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                paso: '01',
                titulo: 'Análisis del Problema',
                descripcion: 'Entiendo a fondo las necesidades y desafíos del cliente para definir la solución adecuada.'
              },
              {
                paso: '02',
                titulo: 'Diseño de la Solución',
                descripcion: 'Planifico la arquitectura y selecciono las tecnologías más apropiadas para el proyecto.'
              },
              {
                paso: '03',
                titulo: 'Desarrollo Ágil',
                descripcion: 'Construyo la solución con iteraciones frecuentes y validación constante.'
              },
              {
                paso: '04',
                titulo: 'Despliegue y Soporte',
                descripcion: 'Pongo en producción la solución y ofrezco soporte continuo para garantizar su éxito.'
              }
            ].map((paso, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {paso.paso}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {paso.titulo}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {paso.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
