"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  "Software a la medida",
  "Marketing digital estratégico",
  "Estudios de factibilidad",
  "Formulación de proyectos",
  "Aún no estoy seguro",
]

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contacto" className="bg-background py-24">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-2">
        <div>
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Contacto
          </span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Agenda una consultoría sin costo
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Cuéntanos tu idea o reto. En una primera conversación identificamos por
            dónde empezar y cómo Punto Digital puede ayudarte a avanzar.
          </p>

          <ul className="mt-8 flex flex-col gap-4">
            <li className="flex items-center gap-3 text-foreground">
              <span className="flex size-10 items-center justify-center rounded-lg bg-secondary text-primary">
                <Mail className="size-5" />
              </span>
              hola@puntodigital.com
            </li>
            <li className="flex items-center gap-3 text-foreground">
              <span className="flex size-10 items-center justify-center rounded-lg bg-secondary text-primary">
                <Phone className="size-5" />
              </span>
              +52 (55) 1234 5678
            </li>
            <li className="flex items-center gap-3 text-foreground">
              <span className="flex size-10 items-center justify-center rounded-lg bg-secondary text-primary">
                <MapPin className="size-5" />
              </span>
              Ciudad de México · Remoto en LATAM
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-border bg-card p-8">
          {submitted ? (
            <div className="flex h-full flex-col items-center justify-center gap-4 py-12 text-center">
              <CheckCircle2 className="size-12 text-accent" />
              <h3 className="text-xl font-semibold text-card-foreground">
                ¡Mensaje recibido!
              </h3>
              <p className="text-muted-foreground">
                Gracias por contactarnos. Te responderemos en menos de 24 horas.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-card-foreground">
                    Nombre
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none ring-ring/50 focus:ring-2"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="company" className="text-sm font-medium text-card-foreground">
                    Empresa
                  </label>
                  <input
                    id="company"
                    name="company"
                    className="rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none ring-ring/50 focus:ring-2"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-card-foreground">
                  Correo electrónico
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none ring-ring/50 focus:ring-2"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="service" className="text-sm font-medium text-card-foreground">
                  Servicio de interés
                </label>
                <select
                  id="service"
                  name="service"
                  className="rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none ring-ring/50 focus:ring-2"
                >
                  {services.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-card-foreground">
                  Cuéntanos sobre tu proyecto
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="resize-none rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none ring-ring/50 focus:ring-2"
                />
              </div>

              <Button type="submit" size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Enviar solicitud
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
