"use client";

import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
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
    kicker: "Contacto",
    title: "Conversemos sobre el próximo sistema que necesita existir.",
    intro:
      "Estoy disponible para conversaciones sobre arquitectura de soluciones, IA aplicada, automatización y productos donde el impacto operativo sea tan importante como el código.",
    formTitle: "Enviar mensaje",
    nameLabel: "Nombre",
    namePlaceholder: "Tu nombre",
    emailLabel: "Email",
    emailPlaceholder: "tu@email.com",
    subjectLabel: "Asunto",
    subjectPlaceholder: "¿Sobre qué quieres conversar?",
    messageLabel: "Mensaje",
    messagePlaceholder: "Cuéntame el contexto, objetivo o problema a resolver.",
    submitLabel: "Enviar",
    loading: "Enviando...",
    successMessage: "Gracias por tu mensaje. Te responderé pronto.",
    errorMessage: "Hubo un error al enviar el mensaje.",
    availability: "Disponible para conversar",
    location: "Chile",
    response: "Respuesta clara, foco en contexto y próximos pasos.",
  },
  en: {
    kicker: "Contact",
    title: "Let's talk about the next system that needs to exist.",
    intro:
      "I am available for conversations around solution architecture, applied AI, automation, and products where operational impact matters as much as code.",
    formTitle: "Send message",
    nameLabel: "Name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "you@email.com",
    subjectLabel: "Subject",
    subjectPlaceholder: "What would you like to discuss?",
    messageLabel: "Message",
    messagePlaceholder: "Tell me the context, goal, or problem to solve.",
    submitLabel: "Send",
    loading: "Sending...",
    successMessage: "Thanks for reaching out. I will get back to you shortly.",
    errorMessage: "There was an error sending the message.",
    availability: "Available to talk",
    location: "Chile",
    response: "Clear response, context first, practical next steps.",
  },
};

const socials = [
  { name: "GitHub", href: "https://github.com/Canariolol/", icon: Github },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/rodrigo-yanez-garcia-025614141", icon: Linkedin },
  { name: "Email", href: "mailto:rodrigo.iyagar@gmail.com", icon: Mail },
];

export default function Contacto() {
  const [formData, setFormData] = useState<FormState>({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });
  const [status, setStatus] = useState("");
  const { language } = useLanguage();
  const text = copy[language];

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((currentData) => ({
      ...currentData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.nombre,
          email: formData.email,
          message: formData.mensaje,
          subject: formData.asunto,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ nombre: "", email: "", asunto: "", mensaje: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error sending form:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contacto" className="portfolio-section border-t border-[color:var(--border)] bg-[color:var(--surface)]">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="section-kicker">{text.kicker}</p>
          <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight text-[color:var(--foreground)] sm:text-5xl">{text.title}</h2>
          <p className="mt-6 text-lg leading-8 text-[color:var(--muted)]">{text.intro}</p>

          <div className="mt-10 grid gap-4">
            <div className="surface-panel rounded-lg p-5">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">{text.availability}</p>
              <p className="mt-3 text-lg font-black text-[color:var(--foreground)]">{text.response}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <a href="mailto:rodrigo.iyagar@gmail.com" className="surface-panel rounded-lg p-5 text-[color:var(--foreground)]">
                <Mail className="mb-4 h-6 w-6 text-[color:var(--accent-strong)]" />
                <p className="text-sm font-black">Email</p>
                <p className="mt-1 break-all text-sm text-[color:var(--muted)]">rodrigo.iyagar@gmail.com</p>
              </a>
              <a href="tel:+56956603856" className="surface-panel rounded-lg p-5 text-[color:var(--foreground)]">
                <Phone className="mb-4 h-6 w-6 text-[color:var(--accent-strong)]" />
                <p className="text-sm font-black">{language === "es" ? "Teléfono" : "Phone"}</p>
                <p className="mt-1 text-sm text-[color:var(--muted)]">+56 9 5660 3856</p>
              </a>
            </div>
            <div className="surface-panel flex items-center gap-4 rounded-lg p-5">
              <MapPin className="h-6 w-6 text-[color:var(--accent-strong)]" />
              <div>
                <p className="text-sm font-black text-[color:var(--foreground)]">{language === "es" ? "Ubicación" : "Location"}</p>
                <p className="text-sm text-[color:var(--muted)]">{text.location}</p>
              </div>
            </div>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-md border border-[color:var(--border)] bg-[color:var(--background)] text-[color:var(--foreground)] transition-transform hover:-translate-y-0.5"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="surface-panel rounded-lg p-5 sm:p-8">
          <h3 className="text-2xl font-black text-[color:var(--foreground)]">{text.formTitle}</h3>
          <div className="mt-7 grid gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-black text-[color:var(--foreground)]">
                {text.nameLabel}
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  placeholder={text.namePlaceholder}
                  className="h-12 rounded-md border border-[color:var(--border)] bg-[color:var(--background)] px-4 text-sm font-medium text-[color:var(--foreground)] outline-none focus:border-[color:var(--accent)]"
                />
              </label>
              <label className="grid gap-2 text-sm font-black text-[color:var(--foreground)]">
                {text.emailLabel}
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder={text.emailPlaceholder}
                  className="h-12 rounded-md border border-[color:var(--border)] bg-[color:var(--background)] px-4 text-sm font-medium text-[color:var(--foreground)] outline-none focus:border-[color:var(--accent)]"
                />
              </label>
            </div>
            <label className="grid gap-2 text-sm font-black text-[color:var(--foreground)]">
              {text.subjectLabel}
              <input
                type="text"
                name="asunto"
                value={formData.asunto}
                onChange={handleChange}
                required
                placeholder={text.subjectPlaceholder}
                className="h-12 rounded-md border border-[color:var(--border)] bg-[color:var(--background)] px-4 text-sm font-medium text-[color:var(--foreground)] outline-none focus:border-[color:var(--accent)]"
              />
            </label>
            <label className="grid gap-2 text-sm font-black text-[color:var(--foreground)]">
              {text.messageLabel}
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                required
                rows={7}
                placeholder={text.messagePlaceholder}
                className="resize-none rounded-md border border-[color:var(--border)] bg-[color:var(--background)] px-4 py-3 text-sm font-medium text-[color:var(--foreground)] outline-none focus:border-[color:var(--accent)]"
              />
            </label>
          </div>

          <Button type="submit" size="lg" disabled={status === "loading"} className="mt-7 h-12 w-full rounded-md bg-[color:var(--foreground)] text-[color:var(--background)] hover:opacity-90">
            <Send className="mr-2 h-4 w-4" />
            {status === "loading" ? text.loading : text.submitLabel}
          </Button>

          {status === "success" && <p className="mt-4 text-sm font-bold text-[color:var(--accent-strong)]">{text.successMessage}</p>}
          {status === "error" && <p className="mt-4 text-sm font-bold text-red-600">{text.errorMessage}</p>}
        </form>
      </div>
    </section>
  );
}
