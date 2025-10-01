"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
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
  const { language } = useLanguage();
  const text = copy[language];
  const info = contactInfo[language];

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Formulario enviado:", formData);
    alert(text.successMessage);
    setFormData({ nombre: "", email: "", asunto: "", mensaje: "" });
  };

  return (
    <section id="contacto" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.1),transparent_60%),radial-gradient(circle_at_bottom,rgba(168,85,247,0.1),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.35em] text-emerald-500 mb-4">
            {language === "es" ? "Conversemos" : "Let’s talk"}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {text.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            {text.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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

              <Button type="submit" className="w-full" size="lg">
                <Send className="w-5 h-5 mr-2" />
                {text.submitLabel}
              </Button>
            </form>
          </div>

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

            <div className="bg-gradient-to-r from-blue-600 via-blue-800 to-purple-900 rounded-3xl p-8 text-white shadow-xl shadow-blue-500/30">
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

