"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

type FooterLink = {
  name: string;
  href: string;
};

type FooterContent = {
  description: string;
  quickLinks: FooterLink[];
  quickLinksTitle: string;
  contactTitle: string;
  contactAvailability: string;
  contactResponse: string;
  sendMessage: string;
  privacy: string;
  terms: string;
  copyright: (year: number) => string;
};

const content: Record<"es" | "en", FooterContent> = {
  es: {
    description:
      "Mi enfoque principal es resolver problemas y optimizar procesos. Integraciones en herramientas existentes o creaci\u00f3n de aplicaciones web fullstack desde cero, siempre equilibrando resultados, usabilidad y velocidad de entrega.",
    quickLinksTitle: "Enlaces r\u00e1pidos",
    quickLinks: [
      { name: "Sobre m\u00ed", href: "#sobre-mi" },
      { name: "Proyectos", href: "#proyectos" },
      { name: "Contacto", href: "#contacto" },
    ],
    contactTitle: "Contacto",
    contactAvailability: "Disponible para trabajo y proyectos freelance.",
    contactResponse: "Respuesta r\u00e1pida garantizada",
    sendMessage: "Enviar mensaje",
    privacy: "Pol\u00edtica de Privacidad",
    terms: "T\u00e9rminos de Servicio",
    copyright: (year: number) => `\u00a9 ${year} Rodrigo Yáñez G. Todos los derechos reservados.`,
  },
  en: {
    description:
      "My focus is on solving problems and streamlining processes. Whether integrating with existing tools or building fullstack web applications from scratch, I balance outcomes, usability, and delivery speed.",
    quickLinksTitle: "Quick links",
    quickLinks: [
      { name: "About", href: "#sobre-mi" },
      { name: "Projects", href: "#proyectos" },
      { name: "Contact", href: "#contacto" },
    ],
    contactTitle: "Contact",
    contactAvailability: "Available for work and freelance projects.",
    contactResponse: "Fast response guaranteed",
    sendMessage: "Send message",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    copyright: (year: number) => `\u00a9 ${year} Rodrigo Yanez G. All rights reserved.`,
  },
};

const socialLinks = [
  { name: "GitHub", href: "https://github.com/Canariolol", icon: Github },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/rodrigo-yanez-garcia-025614141", icon: Linkedin },
  { name: "Email", href: "mailto:rodrigo.iyagar@gmail.com", icon: Mail },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();
  const footerContent = content[language];

  return (
    <footer className="relative bg-gray-950 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(96,165,250,0.18),transparent_55%),radial-gradient(circle_at_bottom,rgba(168,85,247,0.12),transparent_55%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl text-cyan-700 font-bold mb-4">Rodrigo Yanez G.</h2>
            <p className="text-gray-300 mb-6 max-w-md">
              {footerContent.description}
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

          <div>
            <h3 className="text-lg font-semibold mb-4 capitalize">{footerContent.quickLinksTitle}</h3>
            <ul className="space-y-2">
              {footerContent.quickLinks.map((link) => (
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

          <div>
            <h3 className="text-lg font-semibold mb-4">{footerContent.contactTitle}</h3>
            <div className="space-y-2 text-gray-400">
              <p>{footerContent.contactAvailability}</p>
              <p>{footerContent.contactResponse}</p>
              <a
                href="mailto:rodrigo.iyagar@gmail.com"
                className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1"
              >
                <Mail size={16} />
                {footerContent.sendMessage}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p className="text-gray-400 text-sm">
              {footerContent.copyright(currentYear)}
            </p>
            {/*starCount > 0 && (
              <div className="flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full border border-purple-400/30 animate-pulse">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span className="text-sm text-purple-300 font-medium">
                  {language === "es" ? `Clickeaste ${starCount} estrellita${starCount !== 1 ? 's' : ''}` : `You clicked ${starCount} star${starCount !== 1 ? 's' : ''}`}
                </span>
              </div>
            )*/}
          </div>
          {/*<div className="flex space-x-6">
            <a
              href="#"
              className="flex items-center gap-1 text-gray-400 hover:text-white text-sm transition-colors"
            >
              {footerContent.privacy}
              <ExternalLink size={14} />
            </a>
            <a
              href="#"
              className="flex items-center gap-1 text-gray-400 hover:text-white text-sm transition-colors"
            >
              {footerContent.terms}
              <ExternalLink size={14} />
            </a>
          </div>*/}
        </div>
      </div>
    </footer>
  );
}
