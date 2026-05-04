"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const content = {
  es: {
    description:
      "Arquitecto de Soluciones especializado en IA y sistemas. Diseño, construyo y despliego productos digitales que conectan objetivos de negocio con arquitecturas escalables y mantenibles.",
    linksTitle: "Navegación",
    contactTitle: "Contacto",
    availability: "Disponible para conversar sobre arquitectura, IA aplicada y automatización.",
    copyright: (year: number) => `© ${year} Rodrigo Yáñez García. Todos los derechos reservados.`,
    links: [
      { name: "Perfil", href: "#sobre-mi" },
      { name: "Casos", href: "#proyectos" },
      { name: "Contacto", href: "#contacto" },
    ],
  },
  en: {
    description:
      "Solution Architect specialized in AI and systems. I design, build, and ship digital products that connect business goals with scalable, maintainable architectures.",
    linksTitle: "Navigation",
    contactTitle: "Contact",
    availability: "Available to discuss architecture, applied AI, and automation.",
    copyright: (year: number) => `© ${year} Rodrigo Yáñez García. All rights reserved.`,
    links: [
      { name: "Profile", href: "#sobre-mi" },
      { name: "Cases", href: "#proyectos" },
      { name: "Contact", href: "#contacto" },
    ],
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
  const text = content[language];

  return (
    <footer className="border-t border-[color:var(--border)] bg-[color:var(--background)] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_0.7fr_0.8fr]">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-[color:var(--foreground)] text-sm font-black text-[color:var(--background)]">
              RY
            </span>
            <span>
              <span className="block text-lg font-black text-[color:var(--foreground)]">Rodrigo Yáñez García</span>
              <span className="block text-sm font-semibold text-[color:var(--muted)]">Solution Architect · AI & Systems</span>
            </span>
          </Link>
          <p className="mt-5 max-w-xl text-sm leading-7 text-[color:var(--muted)]">{text.description}</p>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.18em] text-[color:var(--foreground)]">{text.linksTitle}</h2>
          <div className="mt-5 grid gap-3">
            {text.links.map((link) => (
              <Link key={link.name} href={link.href} className="text-sm font-bold text-[color:var(--muted)] hover:text-[color:var(--foreground)]">
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.18em] text-[color:var(--foreground)]">{text.contactTitle}</h2>
          <p className="mt-5 text-sm leading-7 text-[color:var(--muted)]">{text.availability}</p>
          <div className="mt-5 flex gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-md border border-[color:var(--border)] bg-[color:var(--surface)] text-[color:var(--foreground)]"
                aria-label={link.name}
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl border-t border-[color:var(--border)] pt-6">
        <p className="text-xs font-semibold text-[color:var(--muted)]">{text.copyright(currentYear)}</p>
      </div>
    </footer>
  );
}
