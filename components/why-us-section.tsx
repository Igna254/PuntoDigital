import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

const reasons = [
  {
    title: "Visión técnica y comercial unida",
    text: "No somos solo desarrolladores ni solo marketeros. Entendemos el código y el mercado, y eso evita construir productos que nadie usa.",
  },
  {
    title: "Decisiones basadas en datos",
    text: "Cada recomendación se respalda con estudios de factibilidad y métricas reales, reduciendo el riesgo de tu inversión.",
  },
  {
    title: "Un solo equipo, todo el ciclo",
    text: "De la idea al lanzamiento y crecimiento, sin perder coherencia entre lo que se construye y cómo se vende.",
  },
  {
    title: "Resultados medibles",
    text: "Definimos objetivos claros desde el inicio y reportamos avances con transparencia en cada etapa.",
  },
]

export function WhyUsSection() {
  return (
    <section id="por-que" className="bg-primary py-24 text-primary-foreground">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-2">
        <div>
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Por qué elegirnos
          </span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            La fusión entre ingeniería sólida y crecimiento comercial
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-primary-foreground/80">
            La mayoría de proyectos fallan por una desconexión: la tecnología no
            conversa con el negocio. En Punto Digital integramos software,
            factibilidad, marketing y formulación de proyectos en una sola
            estrategia, para que cada decisión técnica impulse un objetivo comercial
            y cada meta comercial se sostenga en una base técnica confiable.
          </p>

          <ul className="mt-8 grid gap-5 sm:grid-cols-2">
            {reasons.map((reason) => (
              <li key={reason.title} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" />
                <div>
                  <h3 className="font-semibold">{reason.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-primary-foreground/70">
                    {reason.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-primary-foreground/15">
          <Image
            src="/images/team-working.png"
            alt="Equipo de Punto Digital colaborando en un proyecto tecnológico"
            width={720}
            height={820}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
