"use client";

import { useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

const metadataByLanguage = {
  es: {
    title: "Rodrigo Yáñez García - Arquitecto de Soluciones",
    description: "Portafolio profesional de Rodrigo Yáñez García, Arquitecto de Soluciones especializado en IA, sistemas, automatización y plataformas cloud.",
    keywords: ["arquitecto de soluciones", "inteligencia artificial", "sistemas", "fullstack", "microservicios", "devops", "automatización", "next.js", "react", "google cloud"],
    author: "Rodrigo Yáñez García",
    locale: "es_ES",
  },
  en: {
    title: "Rodrigo Yáñez García - Solution Architect",
    description: "Professional portfolio of Rodrigo Yáñez García, Solution Architect specialized in AI, systems, automation, and cloud platforms.",
    keywords: ["solution architect", "artificial intelligence", "systems", "fullstack", "microservices", "devops", "automation", "next.js", "react", "google cloud"],
    author: "Rodrigo Yáñez García",
    locale: "en_US",
  },
};

export function useMetadata() {
  const { language } = useLanguage();

  useEffect(() => {
    const meta = metadataByLanguage[language];
    
    // Actualizar título de la página
    document.title = meta.title;
    
    // Actualizar meta descripción
    let descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) {
      descriptionMeta.setAttribute('content', meta.description);
    } else {
      descriptionMeta = document.createElement('meta');
      descriptionMeta.setAttribute('name', 'description');
      descriptionMeta.setAttribute('content', meta.description);
      document.head.appendChild(descriptionMeta);
    }
    
    // Actualizar meta keywords
    let keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (keywordsMeta) {
      keywordsMeta.setAttribute('content', meta.keywords.join(', '));
    } else {
      keywordsMeta = document.createElement('meta');
      keywordsMeta.setAttribute('name', 'keywords');
      keywordsMeta.setAttribute('content', meta.keywords.join(', '));
      document.head.appendChild(keywordsMeta);
    }
    
    // Actualizar Open Graph title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', meta.title);
    } else {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      ogTitle.setAttribute('content', meta.title);
      document.head.appendChild(ogTitle);
    }
    
    // Actualizar Open Graph description
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', meta.description);
    } else {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      ogDescription.setAttribute('content', meta.description);
      document.head.appendChild(ogDescription);
    }
    
    // Actualizar Open Graph locale
    let ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) {
      ogLocale.setAttribute('content', meta.locale);
    } else {
      ogLocale = document.createElement('meta');
      ogLocale.setAttribute('property', 'og:locale');
      ogLocale.setAttribute('content', meta.locale);
      document.head.appendChild(ogLocale);
    }
    
    // Actualizar Twitter title
    let twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', meta.title);
    } else {
      twitterTitle = document.createElement('meta');
      twitterTitle.setAttribute('name', 'twitter:title');
      twitterTitle.setAttribute('content', meta.title);
      document.head.appendChild(twitterTitle);
    }
    
    // Actualizar Twitter description
    let twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', meta.description);
    } else {
      twitterDescription = document.createElement('meta');
      twitterDescription.setAttribute('name', 'twitter:description');
      twitterDescription.setAttribute('content', meta.description);
      document.head.appendChild(twitterDescription);
    }
    
    // Actualizar idioma del documento
    document.documentElement.lang = language;
    
  }, [language]);
}
