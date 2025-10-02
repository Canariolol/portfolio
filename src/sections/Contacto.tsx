"use client";

import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageCircle, Sparkles, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

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
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.15),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(168,85,247,0.15),transparent_50%)]" />
        {/* Elementos decorativos */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header consistente con otras secciones */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.35em] text-emerald-500 mb-4">
            {language === "es" ? "Conversemos" : "Let's talk"}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {text.title.split(' ').map((word, index) => (
              <span key={index} className="inline-block mr-2">
                {word === 'Contacto' || word === 'Contact' ? (
                  <span className="relative inline-block">
                    <span className="absolute inset-x-0 -bottom-2 h-3 bg-gradient-to-r from-emerald-200 via-green-200 to-transparent dark:from-emerald-500/20 dark:via-green-400/30 dark:to-transparent rounded-full" />
                    <span className="relative text-emerald-600 dark:text-emerald-400">{word}</span>
                  </span>
                ) : (
                  word
                )}
              </span>
            ))}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            {text.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulario simplificado */}
          <div className="bg-white/85 dark:bg-gray-900/85 rounded-3xl p-8 shadow-xl shadow-blue-500/5 border border-white/60 dark:border-gray-700/60 backdrop-blur">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {text.formTitle}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {text.nameLabel}
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder={text.namePlaceholder}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {text.emailLabel}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder={text.emailPlaceholder}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="asunto" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {text.subjectLabel}
                </label>
                <input
                  type="text"
                  id="asunto"
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder={text.subjectPlaceholder}
                />
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {text.messageLabel}
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none"
                  placeholder={text.messagePlaceholder}
                />
              </div>

              <Button type="submit" className="w-full" size="lg" disabled={status === 'loading'}>
                <Send className="w-5 h-5 mr-2" />
                {status === 'loading' ? (language === 'es' ? 'Enviando...' : 'Sending...') : text.submitLabel}
              </Button>
            </form>
            
            {status === 'success' && <p className="text-green-500 mt-4">{text.successMessage}</p>}
            {status === 'error' && <p className="text-red-500 mt-4">{language === 'es' ? 'Hubo un error al enviar el mensaje.' : 'There was an error sending the message.'}</p>}
          </div>

          {/* Información de contacto simplificada */}
          <div className="space-y-8">
            <div className="bg-white/85 dark:bg-gray-900/85 rounded-3xl p-8 shadow-xl shadow-blue-500/5 border border-white/60 dark:border-gray-700/60 backdrop-blur">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {text.contactTitle}
              </h3>

              <div className="space-y-6">
                {info.map((item) => (
                  <div key={item.title} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      {item.icon}
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        {item.title}
                      </h4>
                      <a
                        href={item.link}
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/85 dark:bg-gray-900/85 rounded-3xl p-8 shadow-xl shadow-blue-500/5 border border-white/60 dark:border-gray-700/60 backdrop-blur">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {text.followTitle}
              </h3>

              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-xl transition-all duration-200 hover:scale-105 ${social.color}`}
                  >
                    <div className="mb-2">{social.icon}</div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-700 via-blue-850 to-purple-900 rounded-3xl p-8 text-white shadow-xl shadow-blue-600/20">
              <h3 className="text-2xl font-bold mb-4">
                {text.availabilityHeading}
              </h3>
              <p className="text-blue-100 mb-6">
                {text.availabilityBody}
              </p>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-emerald-400 rounded-full mr-3 animate-pulse" />
                <span className="text-sm font-medium">
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
