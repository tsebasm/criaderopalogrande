export function GeneticsHero() {
  return (
    <section className="relative min-h-[88vh] flex items-end overflow-hidden bg-charcoal">
      <img
        src="/genetics/hero.png"
        alt="Caballo de salto franqueando un obstáculo"
        className="absolute inset-0 h-full w-full object-cover animate-ken-burns"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/55 to-charcoal/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 to-transparent" />

      <div className="container-x relative pb-20 lg:pb-28 pt-40">
        <div className="max-w-3xl animate-fade-up">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-10 bg-gold" />
            <span className="eyebrow text-gold-soft">Genética Equina · Caballos de Salto</span>
          </div>
          <h1 className="font-serif text-ivory text-5xl lg:text-7xl leading-[1.02] text-balance">
            La élite de la cría de <em>salto</em>, en un solo marketplace.
          </h1>
          <p className="mt-8 max-w-xl text-ivory/70 leading-relaxed text-lg">
            Embriones, semen, padrotes, donadoras y preñeces de las líneas más
            reconocidas del mundo. Comercialice genética equina de alto valor con
            la garantía y la curaduría de Palonegro.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#catalogo-genetica"
              className="inline-flex items-center gap-2 bg-ivory text-charcoal text-[11px] uppercase tracking-[0.22em] font-semibold px-7 py-4 hover:bg-gold-soft transition-colors"
            >
              Explorar catálogo
            </a>
            <a
              href="#publicar-genetica"
              className="inline-flex items-center gap-2 border border-ivory/40 text-ivory text-[11px] uppercase tracking-[0.22em] font-semibold px-7 py-4 hover:bg-ivory/10 transition-colors"
            >
              Publicar genética
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
