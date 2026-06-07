const steps = [
  {
    number: "01",
    title: "Descubrimiento",
    text: "Entendemos tu negocio, tus objetivos y tus restricciones. Definimos el problema real a resolver.",
  },
  {
    number: "02",
    title: "Factibilidad y estrategia",
    text: "Validamos viabilidad técnica, comercial y financiera, y trazamos la ruta más eficiente.",
  },
  {
    number: "03",
    title: "Diseño y desarrollo",
    text: "Construimos el software o la campaña con entregas iterativas y métricas claras.",
  },
  {
    number: "04",
    title: "Lanzamiento y crecimiento",
    text: "Salimos al mercado y optimizamos de forma continua para maximizar resultados.",
  },
]

export function ProcessSection() {
  return (
    <section id="proceso" className="bg-secondary py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Cómo trabajamos
          </span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Un proceso claro, de la idea al resultado
          </h2>
        </div>

        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li
              key={step.number}
              className="rounded-xl border border-border bg-card p-7"
            >
              <span className="text-3xl font-semibold tracking-tight text-accent">
                {step.number}
              </span>
              <h3 className="mt-4 text-lg font-semibold tracking-tight text-card-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
