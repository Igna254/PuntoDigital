import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section id="nosotros" className="bg-secondary py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <span className="text-sm font-semibold uppercase tracking-wider text-accent">
          Nosotros
        </span>
        <h2 className="mt-3 text-balance text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl">
          Somos el punto donde la tecnología se encuentra con el negocio
        </h2>
        <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
          Punto Digital nace para resolver un problema común: equipos que construyen
          tecnología sin pensar en el mercado, y equipos comerciales que venden sin
          una base técnica sólida. Reunimos ingenieros, analistas y estrategas para
          que tu proyecto avance con precisión técnica y visión de negocio, desde la
          primera idea hasta resultados sostenibles.
        </p>
        <div className="mt-8 flex justify-center">
          <Button
            size="lg"
            nativeButton={false}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            render={<a href="#contacto" />}
          >
            Agenda una consultoría
          </Button>
        </div>
      </div>
    </section>
  )
}
