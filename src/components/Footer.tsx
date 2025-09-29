import Link from 'next/link';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/tu-usuario', icon: Github },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/tu-perfil', icon: Linkedin },
    { name: 'Email', href: 'mailto:tu-email@ejemplo.com', icon: Mail },
  ];

  const quickLinks = [
    { name: 'Sobre Mí', href: '/sobre-mi' },
    { name: 'Habilidades', href: '/habilidades' },
    { name: 'Proyectos', href: '/proyectos' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Contacto', href: '/contacto' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Portfolio</h2>
            <p className="text-gray-300 mb-4 max-w-md">
              Mi enfoque principal es resolver problemas y optimizar procesos. 
              Realizando integraciones en herramientas ya existentes o creando desde cero 
              aplicaciones web fullstack, siempre manteniendo el balance entre los resultados, 
              la usabilidad y la rapidez de entrega.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={link.name}
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-2 text-gray-400">
              <p>Disponible para proyectos freelance</p>
              <p>Respuesta rápida garantizada</p>
              <a
                href="mailto:tu-email@ejemplo.com"
                className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1"
              >
                <Mail size={16} />
                Enviar mensaje
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Portfolio. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Política de Privacidad
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Términos de Servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
