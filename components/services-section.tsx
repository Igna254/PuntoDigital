import { Code2, Megaphone, BarChart3, Lightbulb, ArrowRight, type LucideIcon } from "lucide-react"

type Service = {
  icon: LucideIcon
  title: string
  description: string
  benefits: string[]
}

const services: Service[] = [
  {
    icon: Code2,
    title: "Software a la medida",
    description:
      "Diseñamos y desarrollamos plataformas web, móviles y sistemas internos pensados exactamente para tu operación, no para encajar a la fuerza en una herramienta genérica.",
    benefits: [
      "Soluciones escalables y seguras",
      "Automatización de procesos clave",
      "Integración con tus sistemas actuales",
    ],
  },
  {
    icon: Megaphone,
    title: "Marketing digital estratégico",
    description:
      "Más que campañas: construimos un sistema de adquisición de clientes basado en datos, con foco en retorno de inversión y crecimiento sostenible.",
    benefits: [
      "Estrategia de captación medible",
      "Posicionamiento de marca y SEO",
      "Optimización continua del ROI",
    ],
  },
  {
    icon: BarChart3,
    title: "Estudios de factibilidad",
    description:
      "Analizamos la viabilidad técnica, comercial y financiera de tu proyecto antes de invertir, para que tomes decisiones con certeza y no con intuición.",
    benefits: [
      "Análisis técnico, comercial y financiero",
      "Reducción de riesgo de inversión",
      "Modelos y proyecciones claras",
    ],
  },
  {
    icon: Lightbulb,
    title: "Formulación de proyectos",
    description:
      "Estructuramos y formulamos proyectos tecnológicos y de negocio listos para ejecutarse, financiarse o presentarse ante inversionistas y entidades.",
    benefits: [
      "Documentación lista para financiar",
      "Roadmap de ejecución detallado",
      "Alineación con objetivos de negocio",
    ],
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Nuestros servicios
          </span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Cuatro pilares que cubren todo el ciclo de tu proyecto
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Desde la idea hasta el lanzamiento y el crecimiento. Trabajamos como un
            solo equipo para que la tecnología y el negocio avancen juntos.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="group flex flex-col rounded-xl border border-border bg-card p-8 transition-all hover:border-accent/60 hover:shadow-lg hover:shadow-primary/5"
            >
              <span className="flex size-12 items-center justify-center rounded-lg bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="size-6" />
              </span>
              <h3 className="mt-6 text-xl font-semibold tracking-tight text-card-foreground">
                {service.title}
              </h3>
              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <ul className="mt-6 flex flex-col gap-2.5">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2.5 text-sm text-card-foreground">
                    <ArrowRight className="mt-0.5 size-4 shrink-0 text-accent" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
