'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Download, ExternalLink, ChevronDown, Globe } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [isCvDropdownOpen, setIsCvDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const roles = [
    "Experto en IA & LLM",
    "Fullstack y Plataformas Cloud", 
    "Ingeniería de Contexto",
    "Arquitecto de Soluciones"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCvDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px),
                             radial-gradient(circle at 75% 75%, #8b5cf6 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="ml-2">Disponible para proyectos</span>
          </div>

            {/* Main Title */}
            <div>
            <div className="text-xl md:text-2xl italic text-gray-500 dark:text-gray-300 mb-1">
              Always learning, always improving
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Rodrigo Yáñez
              </span>
            </h1>
            </div>
            
            <div className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 h-12">
              <span className="font-medium">
                {roles[currentRole]}
              </span>
              <span className="animate-pulse">|</span>
            </div>
          </div>

          {/* Description */}
            <p className="text-xl text-gray-700 dark:text-gray-300 bold leading-relaxed">
              Especialista en implementar soluciones que resuelven problemas reales y que 
              optimizan procesos de forma innovadora. <br ></br>Aprovechando al máximo las últimas tecnologías de vanguardia.
            </p>
            <blockquote className="italic mt-10 mb-10 px-6 py-6 bg-white/70 dark:bg-gray-900/70 border-l-4 border-blue-500 dark:border-blue-400 rounded-xl shadow-lg max-w-3xl mx-auto">
              "Te ayudaré con tus proyectos, ideas y desafíos, desde la planificación hasta el despliegue y CI/CD.”
              </blockquote>
            

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Button 
              size="lg" 
              onClick={scrollToContent}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
            >
              Ver mi trabajo
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            
            {/* CV Download Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => setIsCvDropdownOpen(!isCvDropdownOpen)}
                className="border-2 border-gray-300 dark:border-gray-600 px-8 py-3 text-lg hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center gap-2"
              >
                <Download className="h-5 w-5" />
                Descarga mi CV
                <ChevronDown className={`h-4 w-4 transition-transform ${isCvDropdownOpen ? 'rotate-180' : ''}`} />
              </Button>
              
              {/* Dropdown Menu */}
              {isCvDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50 overflow-hidden">
                  <div className="flex">
                    <a
                      href="https://storage.googleapis.com/tu-bucket/cv-english.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border-r border-gray-200 dark:border-gray-700"
                      onClick={() => setIsCvDropdownOpen(false)}
                    >
                      <Globe className="h-4 w-4 mr-2 text-blue-600" />
                      <span>English</span>
                    </a>
                    <a
                      href="https://storage.googleapis.com/tu-bucket/cv-espanol.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      onClick={() => setIsCvDropdownOpen(false)}
                    >
                      <Globe className="h-4 w-4 mr-2 text-green-600" />
                      <span>Español</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
            
            <Link href="/contacto">
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-gray-300 dark:border-gray-600 px-8 py-3 text-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Contactarme
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">2+</div>
              <div className="text-gray-600 dark:text-gray-400">Años de experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">4</div>
              <div className="text-gray-600 dark:text-gray-400">Proyectos en producción (creados desde 0)</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">10+</div>
              <div className="text-gray-600 dark:text-gray-400">Trabajos freelance completados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">Si</div>
              <div className="text-gray-600 dark:text-gray-400">Horas de sueño pendientes <br />(un café por favor)</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-gray-400" />
        </div>
    </section>
  );
}
