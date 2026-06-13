import finalCta from "@/assets/final-cta.jpg";

export function FinalCTA() {
  return (
    <section className="relative min-h-[80vh] flex items-center text-ivory overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={finalCta}
          alt="Campeón nacional"
          width={1920}
          height={1280}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/70 to-charcoal/30" />
      </div>
      <div className="relative container-x py-32">
        <div className="max-w-2xl">
          <span className="eyebrow text-gold-soft mb-6 block">El próximo capítulo</span>
          <h2 className="font-serif text-4xl lg:text-7xl leading-[1.02] text-balance">
            El próximo gran ejemplar de su <em>historia</em> puede estar aquí.
          </h2>
          <p className="mt-8 text-ivory/75 max-w-lg leading-relaxed">
            Reserve hoy su visita o escríbanos directamente por WhatsApp. Un
            asesor de Palonegro le acompañará en cada paso.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#visita"
              className="bg-gold text-charcoal px-8 py-4 text-xs uppercase tracking-[0.25em] font-semibold hover:bg-ivory transition-colors"
            >
              Agendar Visita
            </a>
            <a
              href="https://wa.me/573040000000"
              target="_blank"
              rel="noopener"
              className="border border-ivory/40 backdrop-blur-sm bg-ivory/5 px-8 py-4 text-xs uppercase tracking-[0.25em] font-semibold hover:bg-ivory hover:text-charcoal transition-colors"
            >
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
