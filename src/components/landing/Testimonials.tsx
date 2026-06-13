const testimonials = [
  {
    quote:
      "Comprar en Palonegro es comprar tranquilidad. La genética habla por sí sola y el acompañamiento post-venta es excepcional.",
    name: "Juan Esteban Vélez",
    role: "Caballista, Eje Cafetero",
  },
  {
    quote:
      "Mi yegua llegó a Bogotá en perfectas condiciones. El proceso de compra fue elegante, profesional y absolutamente transparente.",
    name: "María Camila Restrepo",
    role: "Coleccionista, Bogotá",
  },
  {
    quote:
      "Tres campeonatos regionales en dos años con ejemplares de Palonegro. La selección genética es de otro nivel.",
    name: "Carlos Andrés Mejía",
    role: "Criadero El Encanto",
  },
];

export function Testimonials() {
  return (
    <section className="py-28 lg:py-36 bg-beige">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-10 bg-leather" />
              <span className="eyebrow text-leather">Casos de Éxito</span>
            </div>
            <h2 className="font-serif text-4xl lg:text-6xl text-olive-deep leading-[1.05] text-balance max-w-3xl">
              La palabra de quienes <em>confían</em> en nosotros.
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-charcoal/10">
          {testimonials.map((t) => (
            <figure key={t.name} className="bg-beige p-10 flex flex-col">
              <svg className="size-10 text-gold mb-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 7H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v3H5v2h6v-8H9V7Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v3h-2v2h6v-8h-2V7Z" />
              </svg>
              <blockquote className="font-serif text-xl lg:text-2xl text-olive-deep leading-snug text-pretty flex-1">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-charcoal/15">
                <div className="text-sm font-semibold text-charcoal">{t.name}</div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-leather mt-1">
                  {t.role}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
