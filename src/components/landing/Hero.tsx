import heroImage from "@/assets/hero.jpg";

const stats = [
  { value: "35+", label: "Años de Tradición" },
  { value: "140", label: "Ejemplares Criados" },
  { value: "27", label: "Grandes Campeonatos" },
  { value: "+400", label: "Familias Caballistas" },
];

export function Hero() {
  return (
    <section id="top" className="relative text-ivory">
      <div className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Caballo Criollo Colombiano galopando al amanecer en Antioquia"
            width={1920}
            height={1280}
            className="h-full w-full object-cover animate-ken-burns"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/40 to-charcoal/85" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 via-transparent to-transparent" />
        </div>

        <div className="relative container-x min-h-screen flex flex-col justify-end pb-24 pt-40">
          <div className="max-w-4xl animate-fade-up">
            <div className="flex items-center gap-4 mb-8">
              <span className="h-px w-12 bg-gold" />
              <span className="eyebrow text-gold-soft">
                Fundado en 1989 · Llanogrande, Antioquia
              </span>
            </div>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-8xl leading-[1.02] text-balance text-ivory">
              Donde la genética,<br />
              la tradición y la <em className="text-gold-soft font-medium">excelencia</em><br />
              cabalgan juntas.
            </h1>
            <p className="mt-10 max-w-xl text-base lg:text-lg text-ivory/75 leading-relaxed font-light text-pretty">
              Criamos ejemplares excepcionales para quienes entienden el verdadero
              valor del Caballo Criollo Colombiano. Cada animal es una obra de
              décadas de selección genética y pasión familiar.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#ejemplares"
                className="group inline-flex items-center gap-3 bg-gold text-charcoal px-8 py-4 text-xs uppercase tracking-[0.25em] font-semibold hover:bg-ivory transition-colors"
              >
                Ver Caballos Disponibles
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#visita"
                className="inline-flex items-center gap-3 border border-ivory/40 backdrop-blur-sm bg-ivory/5 text-ivory px-8 py-4 text-xs uppercase tracking-[0.25em] font-semibold hover:bg-ivory hover:text-charcoal transition-colors"
              >
                Agendar Visita
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar — separado para no tapar los botones del hero */}
      <div className="bg-charcoal text-ivory">
        <div className="container-x grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`py-8 lg:py-10 ${i % 2 === 1 ? "border-l border-ivory/10" : ""} ${i === 2 ? "md:border-l" : ""}`}
            >
              <div className="font-serif text-3xl lg:text-4xl text-gold-soft">{s.value}</div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.28em] text-ivory/60">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
