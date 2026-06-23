import { geneticCategories } from "@/lib/genetics";

const icons: Record<string, React.ReactNode> = {
  Embrión: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3a9 9 0 1 0 9 9c0-2-1-3.5-2.5-4.5C17 6.5 15 6 12 6s-2 .5-2 2 1.5 2 3 2" />
  ),
  Semen: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 3h6M10 3v4l-3.5 11A2.5 2.5 0 0 0 9 21h6a2.5 2.5 0 0 0 2.5-3L14 7V3" />
  ),
  Padrote: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 21V11l4-2 2-4 3 2 5 1-2 4v9M9 9l1 4" />
  ),
  Donadora: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 20c0-5 3-9 8-9s8 4 8 9M9 7a3 3 0 1 0 6 0 3 3 0 0 0-6 0Z" />
  ),
  Preñez: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-12a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z" />
  ),
  Potro: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 21v-7l3-2 1.5-3.5L13 11l5 1-2 3v6M9 9.5 10 13" />
  ),
  Servicio: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v3m0 12v3m9-9h-3M6 12H3m13.5-6.5-2 2m-7 7-2 2m11 0-2-2m-7-7-2-2M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
  ),
};

export function GeneticsCategories() {
  return (
    <section id="categorias-genetica" className="bg-ivory py-24 lg:py-32">
      <div className="container-x">
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-10 bg-leather" />
            <span className="eyebrow text-leather">Categorías</span>
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl text-olive-deep text-balance leading-[1.05]">
            Todo el ciclo reproductivo, en un mismo lugar.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-charcoal/10 border border-charcoal/10">
          {geneticCategories.map((c) => (
            <a
              key={c.type}
              href="#catalogo-genetica"
              className="bg-ivory p-8 lg:p-10 group hover:bg-beige transition-colors"
            >
              <span className="size-12 grid place-items-center rounded-full bg-olive/10 text-olive mb-6 group-hover:bg-olive group-hover:text-ivory transition-colors">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                  {icons[c.type]}
                </svg>
              </span>
              <h3 className="font-serif text-2xl text-olive-deep mb-3">{c.label}</h3>
              <p className="text-sm text-charcoal/60 leading-relaxed">{c.description}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] font-semibold text-leather">
                Ver publicaciones
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
