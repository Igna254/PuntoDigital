import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden">
      <Image
        src="/images/hero-abstract.png"
        alt=""
        fill
        priority
        className="-z-10 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-primary/85" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-primary via-primary/70 to-primary/40" />

      <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-6 py-28 md:py-36">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-primary-foreground/90">
          <span className="size-1.5 rounded-full bg-accent" />
          Consultora de tecnología y negocios
        </span>

        <h1 className="max-w-3xl text-pretty text-4xl font-semibold leading-tight tracking-tight text-primary-foreground md:text-6xl">
          Convertimos ideas en{" "}
          <span className="text-accent">negocios digitales rentables</span>.
        </h1>

        <p className="max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/80">
          En Punto Digital unimos ingeniería de software, marketing estratégico y
          análisis de negocio para diseñar, validar y lanzar proyectos tecnológicos
          que generan resultados medibles.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button
            size="lg"
            nativeButton={false}
            className="bg-accent text-accent-foreground hover:bg-accent/90"
            render={<a href="#contacto" />}
          >
            Cotiza tu proyecto
            <ArrowRight className="ml-1 size-4 transition-transform group-hover/button:translate-x-1" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            nativeButton={false}
            className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            render={<a href="#servicios" />}
          >
            Conoce nuestros servicios
          </Button>
        </div>

        <dl className="mt-6 grid grid-cols-2 gap-x-10 gap-y-6 sm:grid-cols-4">
          {[
            { value: "+120", label: "Proyectos entregados" },
            { value: "4", label: "Pilares de servicio" },
            { value: "98%", label: "Clientes que repiten" },
            { value: "360°", label: "Visión técnica y comercial" },
          ].map((stat) => (
            <div key={stat.label}>
              <dt className="text-3xl font-semibold tracking-tight text-primary-foreground">
                {stat.value}
              </dt>
              <dd className="mt-1 text-sm text-primary-foreground/70">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
