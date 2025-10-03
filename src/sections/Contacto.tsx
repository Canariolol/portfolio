"use client";

import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageCircle, Sparkles, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./Contacto.module.css";

type FormState = {
  nombre: string;
  email: string;
  asunto: string;
  mensaje: string;
};

const copy = {
  es: {
    title: "Contacto",
    intro:
      "¿Tienes un proyecto en mente? ¿Buscas colaboración? Escríbeme y conversemos. Tu éxito es mi éxito.",
    formTitle: "Envíame un mensaje",
    nameLabel: "Nombre *",
    namePlaceholder: "Tu nombre",
    emailLabel: "Email *",
    emailPlaceholder: "tu@email.com",
    subjectLabel: "Asunto *",
    subjectPlaceholder: "¿Sobre qué quieres hablar?",
    messageLabel: "Mensaje *",
    messagePlaceholder: "Cuéntame sobre tu proyecto...",
    submitLabel: "Enviar mensaje",
    successMessage: "Gracias por tu mensaje. Me pondré en contacto contigo pronto.",
    contactTitle: "Información de contacto",
    followTitle: "Sígueme en",
    availabilityHeading: "¿Listo para comenzar?",
    availabilityBody:
      "Estoy disponible para trabajar en empresas y para proyectos freelance. Si tienes una idea que quieres llevar a producción, hablemos.",
    availabilityStatus: "Disponible al 100%",
  },
  en: {
    title: "Contact",
    intro:
      "Have a project in mind or a challenge you want to tackle together? Drop me a line, let's talk. Your success is my success.",
    formTitle: "Send me a message",
    nameLabel: "Name *",
    namePlaceholder: "Your name",
    emailLabel: "Email *",
    emailPlaceholder: "you@email.com",
    subjectLabel: "Subject *",
    subjectPlaceholder: "What would you like to discuss?",
    messageLabel: "Message *",
    messagePlaceholder: "Tell me about your project...",
    submitLabel: "Send message",
    successMessage: "Thanks for reaching out. I will get back to you shortly.",
    contactTitle: "Contact information",
    followTitle: "Follow me",
    availabilityHeading: "Ready to get started?",
    availabilityBody:
      "I’m currently available for corporate work or freelance proyects. If you have an idea you want to launch, let’s talk.",
    availabilityStatus: "Available 100%",
  },
};

const contactInfo = {
  es: [
    {
      icon: <Mail className="w-6 h-6 text-blue-600" />,
      title: "Email",
      value: "rodrigo.iyagar@gmail.com",
      link: "mailto:rodrigo.iyagar@gmail.com",
    },
    {
      icon: <Phone className="w-6 h-6 text-green-600" />,
      title: "Teléfono",
      value: "+56 9 5660 3856",
      link: "tel:+56956603856",
    },
    {
      icon: <MapPin className="w-6 h-6 text-red-600" />,
      title: "Ubicación",
      value: "Valdivia, Chile",
      link: "https://maps.google.com",
    },
  ],
  en: [
    {
      icon: <Mail className="w-6 h-6 text-blue-600" />,
      title: "Email",
      value: "rodrigo.iyagar@gmail.com",
      link: "mailto:rodrigo.iyagar@gmail.com",
    },
    {
      icon: <Phone className="w-6 h-6 text-green-600" />,
      title: "Phone",
      value: "+56 9 5660 3856",
      link: "tel:+56956603856",
    },
    {
      icon: <MapPin className="w-6 h-6 text-red-600" />,
      title: "Location",
      value: "Valdivia, Chile",
      link: "https://maps.google.com",
    },
  ],
};


const socialLinks = [
  {
    icon: <Github className="w-6 h-6" />,
    name: "GitHub",
    url: "https://github.com/Canariolol/",
    color: "hover:text-gray-900 dark:hover:text-white",
  },
  {
    icon: <Linkedin className="w-6 h-6" />,
    name: "LinkedIn",
    url: "www.linkedin.com/in/rodrigo-yanez-garcia-025614141",
    color: "hover:text-blue-600",
  },
  {
    icon: <Twitter className="w-6 h-6" />,
    name: "Twitter",
    url: "#",
    color: "hover:text-blue-400",
  },
];

export default function Contacto() {
  const [formData, setFormData] = useState<FormState>({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });
  const [status, setStatus] = useState('');
  const { language } = useLanguage();
  const text = copy[language];
  const info = contactInfo[language];

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.nombre,
          email: formData.email,
          message: formData.mensaje,
          subject: formData.asunto
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ nombre: "", email: "", asunto: "", mensaje: "" });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error sending form:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contacto" className="section-transition section-transition-emerald relative py-24 px-4 sm:px-6 lg:px-8 min-h-screen overflow-hidden">
      {/* Fondo mejorado con efectos visuales */}
      <div className={styles.sectionBackground}>
        <div className={styles.sectionBackgroundGradient} />
        <div className={styles.sectionBackgroundRadial} />
        {/* Elementos decorativos */}
        <div className={`${styles.decorativeBlob} ${styles.decorativeBlobTop}`} />
        <div className={`${styles.decorativeBlob} ${styles.decorativeBlobBottom}`} />
      </div>

      <div className={styles.content}>
        {/* Header consistente con otras secciones */}
        <div className={styles.header}>
          <p className={styles.tagline}>
            {language === "es" ? "Conversemos" : "Let's talk"}
          </p>
          <h2 className={styles.title}>
            {text.title.split(' ').map((word, index) => (
              <span key={index} className="inline-block mr-2">
                {word === 'Contacto' || word === 'Contact' ? (
                  <span className={styles.titleHighlight}>
                    <span className={styles.titleHighlightText}>{word}</span>
                  </span>
                ) : (
                  word
                )}
              </span>
            ))}
          </h2>
          <p className={styles.intro}>
            {text.intro}
          </p>
        </div>

        <div className={styles.mainGrid}>
          {/* Formulario simplificado */}
          <div className={styles.formCard}>
            <h3 className={styles.formTitle}>
              {text.formTitle}
            </h3>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="nombre" className={styles.formLabel}>
                    {text.nameLabel}
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className={styles.formInput}
                    placeholder={text.namePlaceholder}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.formLabel}>
                    {text.emailLabel}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={styles.formInput}
                    placeholder={text.emailPlaceholder}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="asunto" className={styles.formLabel}>
                  {text.subjectLabel}
                </label>
                <input
                  type="text"
                  id="asunto"
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleChange}
                  required
                  className={styles.formInput}
                  placeholder={text.subjectPlaceholder}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="mensaje" className={styles.formLabel}>
                  {text.messageLabel}
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={styles.formTextarea}
                  placeholder={text.messagePlaceholder}
                />
              </div>

              <div className={styles.formActions}>
                <Button type="submit" className={styles.submitButton} size="lg" disabled={status === 'loading'}>
                  <Send className="w-5 h-5 mr-2" />
                  {status === 'loading' ? (language === 'es' ? 'Enviando...' : 'Sending...') : text.submitLabel}
                </Button>
              </div>
            </form>
            
            {status === 'success' && <p className={`${styles.formMessage} ${styles.formMessageSuccess}`}>{text.successMessage}</p>}
            {status === 'error' && <p className={`${styles.formMessage} ${styles.formMessageError}`}>{language === 'es' ? 'Hubo un error al enviar el mensaje.' : 'There was an error sending the message.'}</p>}
          </div>

          {/* Información de contacto simplificada */}
          <div className={styles.infoSection}>
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>
                {text.contactTitle}
              </h3>

              <div className={styles.contactInfoList}>
                {info.map((item) => (
                  <div key={item.title} className={styles.contactInfoItem}>
                    <div className={styles.contactInfoIcon}>
                      {item.icon}
                    </div>
                    <div className={styles.contactInfoContent}>
                      <h4 className={styles.contactInfoTitle}>
                        {item.title}
                      </h4>
                      <a
                        href={item.link}
                        className={styles.contactInfoLink}
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>
                {text.followTitle}
              </h3>

              <div className={styles.socialLinksGrid}>
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.socialLinkCard} ${social.name.toLowerCase()}`}
                  >
                    <div className={styles.socialLinkIcon}>{social.icon}</div>
                    <span className={styles.socialLinkName}>
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className={styles.availabilityCard}>
              <h3 className={styles.availabilityTitle}>
                {text.availabilityHeading}
              </h3>
              <p className={styles.availabilityDescription}>
                {text.availabilityBody}
              </p>
              <div className={styles.availabilityStatus}>
                <div className={styles.availabilityIndicator} />
                <span className={styles.availabilityText}>
                  {text.availabilityStatus}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
