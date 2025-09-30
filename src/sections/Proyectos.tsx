'use client';

import { useState } from 'react';
import { ExternalLink, Github, Calendar, Users, Code, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProjectImageModal from '@/components/ProjectImageModal';

export default function Proyectos() {
  // const [filtroActivo, setFiltroActivo] = useState('todos');
  const [selectedProject, setSelectedProject] = useState<{ name: string; images: string[] } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOtherProjectsModalOpen, setIsOtherProjectsModalOpen] = useState(false);

  // const filtros = [
  //   { id: 'todos', nombre: 'Todos los Proyectos' },
  //   { id: 'ia', nombre: 'Inteligencia Artificial' },
  //   { id: 'web', nombre: 'Aplicaciones Web' },
  //   { id: 'automatizacion', nombre: 'Automatización' },
  //   { id: 'backend', nombre: 'Backend' },
  // ];

  const proyectos = [
    {
      id: 1,
      titulo: 'Eva 3 - Calidad, Evaluaciones y Monitoreo',
      descripcion: 'Sistema de monitoreo de equipos de trabajo. Modular, para ser adaptable a cualquier área, de empresas de cualquier rubro, que requieran evaluar a su personal y monitorear su desempeño. Capaz de generar reportes en tiempo real y mantener datos organizados para análisis posteriores.',
      imagenPrincipal: '/api/placeholder/600/400',
      imagenesGaleria: [
        '/api/placeholder/800/600',
        '/api/placeholder/800/600',
        '/api/placeholder/800/600',
        '/api/placeholder/800/600'
      ],
      tecnologias: ['SaaS', 'Gemini API', 'Gmail API', 'Python', 'Flask', 'React', 'Firestore', 'Google Cloud Functions / Auth / Storage'],
      categoria: 'ia',
      estado: 'en-produccion',
      fecha: '2024',
      cliente: 'Cliente Privado - Gestión de Equipos de Trabajo',
      urlDemo: '#',
      urlGithub: '#',
      iaFeatures: [
        'Integración de Gmail Api y Gemini Api para analisis de correos inteligente',
        'Sistema RAG para acceso a base de conocimientos',
        'Análisis de sentimiento en tiempo real',
        'Generación de respuestas contextualizadas'
      ],
      logros: [
        'Reducción de más del 70% en tiempo de evaluación',
        'Reducción de sobre un 80% del tiempo gastado en analisis de correos',
        'Facilitación de la toma de decisiones con datos en tiempo real',
        'Satisfacción del cliente del 95%'
      ]
    },
    {
      id: 2,
      titulo: 'Docalysis',
      descripcion: 'Sistema de automatización de analisis de documentos y extracción de datos. Utiliza modelo pre entrenado y fine tunned, para extraer datos clave de contratos, formularios de venta y otros documentos legales.',
      imagenPrincipal: 'https://storage.googleapis.com/imagenes-portafolio-rodrigoyg/Docalysis/3.png',
      imagenesGaleria: [
        'https://storage.googleapis.com/imagenes-portafolio-rodrigoyg/Docalysis/2.png',
        'https://storage.googleapis.com/imagenes-portafolio-rodrigoyg/Docalysis/3.png',
        '/api/placeholder/800/600',
        '/api/placeholder/800/600'
      ],
      tecnologias: ['Gemini 2.5 Pro', 'Vertex AI', 'Document AI', 'Node.js', 'MongoDB', 'React', 'Prompt Engineering', 'Python'],
      categoria: 'ia',
      estado: 'en-produccion',
      fecha: '2025',
      cliente: 'Compañía de Telecomunicaciones - Ventas',
      urlDemo: '#',
      urlGithub: '#',
      iaFeatures: [
        'Generación de resumenes especificos para áreas de soporte a la venta',
        'Sistema RAG para acceso a base de conocimientos y Fallback',
        'Potencial/Eventual integración con Salesforce y Sii.cl, para automatizar y optimizar más los procesos',
        'Actualmente se encuentra en migración a plataforma nueva para diversificar la herramienta y abarcar nuevos nichos: legal, salud, educación, etc.'
      ],
      logros: [
        'Consolidación de información (promedio 10 documentos por revisión) en tiempos al rededor de 1 minuto',
        'Reducción de más de un 80% del tiempo gastado en tareas repetitivas',
        'Precisión de sobre el 90% en la consolidación de datos entregada',
        'Se encuentra en proceso de expansión a nuevos nichos y mercados'
      ]
    },
    {
      id: 3,
      titulo: 'Sistema de analisis de alarmas',
      descripcion: 'Plataforma de generación de reportes web, excel y pdf, a partir de archivos excel con datos en bruto de alarmas de conducción para camiones de carga en carretera.',
      imagenPrincipal: 'https://storage.googleapis.com/imagenes-portafolio-rodrigoyg/ReportesConduccion/3.png',
      imagenesGaleria: [
        'https://storage.googleapis.com/imagenes-portafolio-rodrigoyg/ReportesConduccion/1.png',
        'https://storage.googleapis.com/imagenes-portafolio-rodrigoyg/ReportesConduccion/3.png',
        'https://storage.googleapis.com/imagenes-portafolio-rodrigoyg/ReportesConduccion/4.png',
        'https://storage.googleapis.com/imagenes-portafolio-rodrigoyg/ReportesConduccion/2.png'
      ],
      tecnologias: ['React', 'Typescript', 'Python', 'FastAPI', 'Google Cloud Run', 'PostgreSQL', 'Docker'],
      categoria: 'ia',
      estado: 'en-produccion',
      fecha: '2025',
      cliente: 'West Ingeniería',
      urlDemo: 'https://reportes-west.ninfasolutions.com',
      urlGithub: 'https://github.com/Canariolol/ReportesConduccion/tree/RefactorizadoDashboard.tsx---Ok',
      iaFeatures: [
        ''
      ],
      logros: [
        'Entrega del proyecto en tiempo record: 1 semana desde planificación a producción',
        'Generación de PDF y Excel automáticos con un solo click. Estilos atractivos y profesionales',
        'Fácil uso para usuarios no técnicos',
        'API RESTful con múltiples endpoints para futuras integraciones y expansiones'
      ]
    }
  ];

  // const proyectosFiltrados = filtroActivo === 'todos' 
  //   ? proyectos 
  //   : proyectos.filter(proyecto => proyecto.categoria === filtroActivo);
  const proyectosFiltrados = proyectos;

  const openImageModal = (projectName: string, images: string[]) => {
    setSelectedProject({ name: projectName, images });
    setIsModalOpen(true);
  };

  const closeImageModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const openOtherProjectsModal = () => {
    setIsOtherProjectsModalOpen(true);
  };

  const closeOtherProjectsModal = () => {
    setIsOtherProjectsModalOpen(false);
  };

  return (
    <section id="proyectos" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Proyectos <span className="text-purple-600 dark:text-purple-400">Destacados</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Estos son algunos de los proyectos que he creado de forma independiente y que se encuentran en producción real. <br />
            Cada uno demuestra mi capacidad para resolver problemas y optimizar procesos, utilizando inteligencia artificial y tecnologías avanzadas.
          </p>
        </div>

        {/* Filtros - Comentados temporalmente */}
        {/* <div className="max-w-4xl mx-auto mb-12">
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
        </div> */}

        {/* Proyectos */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {proyectosFiltrados.map((proyecto) => (
              <div
                key={proyecto.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col"
              >
                {/* Franja con nombre del proyecto */}
                <div className="bg-gradient-to-r from-purple-700 via-cyan-600 to-blue-400 text-white py-1 px-2 text-center">
                  <h3 className="text-lg font-semibold text-center truncate">
                    {proyecto.titulo}
                  </h3>
                </div>
                
                {/* Imagen del Proyecto */}
                <div 
                  className="relative h-48 cursor-pointer group"
                  onClick={() => openImageModal(proyecto.titulo, proyecto.imagenesGaleria)}
                >
                  <img
                    src={proyecto.imagenPrincipal}
                    alt={proyecto.titulo}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-center">
                      <Code className="w-16 h-16 mx-auto mb-2" />
                      <p className="text-sm">Ver galería</p>
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
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {proyecto.fecha}
                    </span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed flex-1">
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
                  <div className="flex gap-3 mt-auto">
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

          {/* Botón para ver otros proyectos */}
          <div className="text-center mt-12">
            <Button 
              onClick={openOtherProjectsModal}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              {'Otros Proyectos -->'}
            </Button>
          </div>
        </div>

        {/* Sección de Proceso de Trabajo */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Mi Proceso de Trabajo
              </h3>
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
        </div>
      </div>

      {/* Modal de Galería */}
      {selectedProject && (
        <ProjectImageModal
          isOpen={isModalOpen}
          onClose={closeImageModal}
          images={selectedProject.images}
          currentImageIndex={0}
          projectName={selectedProject.name}
        />
      )}

      {/* Modal de Otros Proyectos */}
      {isOtherProjectsModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-0 flex items-center justify-center z-50 p-4 transition-all duration-300"
          style={{ backgroundColor: isOtherProjectsModalOpen ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0)' }}
          onClick={closeOtherProjectsModal}
        >
          <div 
            className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-95 opacity-0"
            style={{ 
              transform: isOtherProjectsModalOpen ? 'scale(1)' : 'scale(0.95)',
              opacity: isOtherProjectsModalOpen ? 1 : 0
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Otros Proyectos
                </h3>
                <button
                  onClick={closeOtherProjectsModal}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Tarjeta de proyecto 4 - Placeholder */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                  {/* Franja con nombre del proyecto */}
                  <div className="bg-gradient-to-r from-purple-700 via-cyan-600 to-blue-400 text-white py-1 px-2 text-center">
                    <h3 className="text-lg font-semibold text-center truncate">
                      Proyecto 4
                    </h3>
                  </div>
                  
                  {/* Imagen del Proyecto */}
                  <div className="relative h-48 cursor-pointer group">
                    <div className="w-full h-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
                      <Code className="w-16 h-16 text-gray-400" />
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-center">
                        <Code className="w-16 h-16 mx-auto mb-2" />
                        <p className="text-sm">Ver galería</p>
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
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        2025
                      </span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed flex-1">
                      Espacio reservado para otro proyecto. Aquí irá la descripción detallada del proyecto cuando se complete.
                    </p>

                    {/* Cliente */}
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <Users className="w-4 h-4 mr-2" />
                      Cliente por definir
                    </div>

                    {/* Tecnologías */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {['Tecnología 1', 'Tecnología 2', 'Tecnología 3'].map((tech, index) => (
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
                        {['Logro 1 del proyecto', 'Logro 2 del proyecto', 'Logro 3 del proyecto'].map((logro, index) => (
                          <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                            <span className="text-green-500 mr-2 mt-0.5">•</span>
                            {logro}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Acciones */}
                    <div className="flex gap-3 mt-auto">
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

                {/* Tarjeta de proyecto 5 - Placeholder */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                  {/* Franja con nombre del proyecto */}
                  <div className="bg-gradient-to-r from-purple-700 via-cyan-600 to-blue-400 text-white py-1 px-2 text-center">
                    <h3 className="text-lg font-semibold text-center truncate">
                      Proyecto 5
                    </h3>
                  </div>
                  
                  {/* Imagen del Proyecto */}
                  <div className="relative h-48 cursor-pointer group">
                    <div className="w-full h-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
                      <Code className="w-16 h-16 text-gray-400" />
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-center">
                        <Code className="w-16 h-16 mx-auto mb-2" />
                        <p className="text-sm">Ver galería</p>
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
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        2025
                      </span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed flex-1">
                      Espacio reservado para otro proyecto. Aquí irá la descripción detallada del proyecto cuando se complete.
                    </p>

                    {/* Cliente */}
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <Users className="w-4 h-4 mr-2" />
                      Cliente por definir
                    </div>

                    {/* Tecnologías */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {['Tecnología 1', 'Tecnología 2', 'Tecnología 3'].map((tech, index) => (
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
                        {['Logro 1 del proyecto', 'Logro 2 del proyecto', 'Logro 3 del proyecto'].map((logro, index) => (
                          <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                            <span className="text-green-500 mr-2 mt-0.5">•</span>
                            {logro}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Acciones */}
                    <div className="flex gap-3 mt-auto">
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

                {/* Tarjeta de proyecto 6 - Placeholder */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                  {/* Franja con nombre del proyecto */}
                  <div className="bg-gradient-to-r from-purple-700 via-cyan-600 to-blue-400 text-white py-1 px-2 text-center">
                    <h3 className="text-lg font-semibold text-center truncate">
                      Proyecto 6
                    </h3>
                  </div>
                  
                  {/* Imagen del Proyecto */}
                  <div className="relative h-48 cursor-pointer group">
                    <div className="w-full h-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
                      <Code className="w-16 h-16 text-gray-400" />
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-center">
                        <Code className="w-16 h-16 mx-auto mb-2" />
                        <p className="text-sm">Ver galería</p>
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
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        2025
                      </span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed flex-1">
                      Espacio reservado para otro proyecto. Aquí irá la descripción detallada del proyecto cuando se complete.
                    </p>

                    {/* Cliente */}
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <Users className="w-4 h-4 mr-2" />
                      Cliente por definir
                    </div>

                    {/* Tecnologías */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {['Tecnología 1', 'Tecnología 2', 'Tecnología 3'].map((tech, index) => (
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
                        {['Logro 1 del proyecto', 'Logro 2 del proyecto', 'Logro 3 del proyecto'].map((logro, index) => (
                          <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                            <span className="text-green-500 mr-2 mt-0.5">•</span>
                            {logro}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Acciones */}
                    <div className="flex gap-3 mt-auto">
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
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
