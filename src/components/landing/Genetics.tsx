const sires = [
  { name: "Relicario del Valle", title: "Padre Insignia", offspring: "32 hijos campeones", andar: "Trocha" },
  { name: "Magnífico", title: "Reproductor Principal", offspring: "18 grandes campeones", andar: "Paso Fino" },
  { name: "Centurión", title: "Patriarca", offspring: "47 descendientes premiados", andar: "Trote y Galope" },
];

export function Genetics() {
  return (
    <section id="genetica" className="bg-charcoal text-ivory py-28 lg:py-36">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-10 bg-gold" />
              <span className="eyebrow text-gold-soft">Patrimonio Genético</span>
            </div>
            <h2 className="font-serif text-4xl lg:text-6xl text-balance leading-[1.05]">
              Linajes que definen el <em>andar</em> colombiano.
            </h2>
          </div>
          <p className="max-w-md text-ivory/60 leading-relaxed">
            Nuestra selección no es azarosa. Es el resultado de décadas de
            estudio morfológico y temperamental, preservando la pureza de los
            ejemplares más emblemáticos del país.
          </p>
        </div>

        {/* Pedigree tree */}
        <div className="mb-24 bg-ivory/[0.03] border border-ivory/10 p-10 lg:p-16">
          <div className="text-center mb-12">
            <span className="eyebrow text-gold mb-3 block">Árbol Genealógico Insignia</span>
            <h3 className="font-serif text-3xl lg:text-4xl italic">Magnífico de Palonegro</h3>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 relative">
            <PedigreeNode
              tag="Abuelo Paterno"
              name="Relicario del Valle"
              note="Gran Campeón 2002"
            />
            <PedigreeNode tag="Abuela Paterna" name="Sinfonía" note="Línea Pincelada" />
            <PedigreeNode tag="Abuelo Materno" name="Soberano" note="3× Campeón" />
            <PedigreeNode tag="Abuela Materna" name="Aurora" note="Donante Élite" />
          </div>

          <div className="grid grid-cols-2 gap-6 mt-6">
            <div className="bg-olive/30 border border-gold/20 p-6">
              <div className="text-[10px] tracking-[0.3em] uppercase text-gold-soft mb-2">Padre</div>
              <div className="font-serif text-2xl">Relicario II</div>
            </div>
            <div className="bg-olive/30 border border-gold/20 p-6">
              <div className="text-[10px] tracking-[0.3em] uppercase text-gold-soft mb-2">Madre</div>
              <div className="font-serif text-2xl">Brisa de Oro</div>
            </div>
          </div>
        </div>

        {/* Featured sires */}
        <div className="grid md:grid-cols-3 gap-px bg-ivory/10">
          {sires.map((s) => (
            <div key={s.name} className="bg-charcoal p-10 group hover:bg-olive/40 transition-colors">
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-gold-soft mb-6">
                {s.title}
              </div>
              <h4 className="font-serif text-3xl mb-4">{s.name}</h4>
              <div className="text-xs uppercase tracking-widest text-ivory/40 mb-6">
                {s.andar}
              </div>
              <div className="pt-6 border-t border-ivory/10 text-sm text-ivory/70">
                {s.offspring}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PedigreeNode({ tag, name, note }: { tag: string; name: string; note: string }) {
  return (
    <div className="bg-ivory/[0.02] border border-ivory/10 p-5 text-center">
      <div className="text-[9px] tracking-[0.3em] uppercase text-ivory/40 mb-2">{tag}</div>
      <div className="font-serif text-lg">{name}</div>
      <div className="text-[10px] text-gold-soft mt-2 italic">{note}</div>
    </div>
  );
}
