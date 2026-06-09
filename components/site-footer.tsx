export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background py-14">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2">
            <span className="flex size-8 items-center justify-center rounded-md bg-primary">
              <span className="size-2.5 rounded-full bg-accent" />
            </span>
            <span className="text-lg font-semibold tracking-tight text-foreground">
              Punto<span className="text-accent">.</span>Digital
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Tecnología, estrategia y negocio en un solo punto. Diseñamos, validamos
            y lanzamos proyectos digitales rentables.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">Servicios</h3>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm text-muted-foreground">
            <li><a href="#servicios" className="hover:text-foreground">Software a la medida</a></li>
            <li><a href="#servicios" className="hover:text-foreground">Marketing digital</a></li>
            <li><a href="#servicios" className="hover:text-foreground">Estudios de factibilidad</a></li>
            <li><a href="#servicios" className="hover:text-foreground">Formulación de proyectos</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">Empresa</h3>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm text-muted-foreground">
            <li><a href="#por-que" className="hover:text-foreground">Por qué elegirnos</a></li>
            <li><a href="#proceso" className="hover:text-foreground">Proceso</a></li>
            <li><a href="#nosotros" className="hover:text-foreground">Nosotros</a></li>
            <li><a href="#contacto" className="hover:text-foreground">Contacto</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">Contacto</h3>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm text-muted-foreground">
            <li>joseigramirez@gmail.com</li>
            <li>+ (506) 8690-4507</li>
            <li>Alajuela, Costa Rica</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-border px-6 pt-6">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Punto Digital. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
