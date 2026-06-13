import legacyImage from "@/assets/legacy.jpg";

const timeline = [
  { year: "1989", title: "El Origen", body: "Don Octavio Restrepo funda Palonegro con tres yeguas y un sueño: preservar la pureza del andar colombiano." },
  { year: "2002", title: "Primer Gran Campeón", body: "Relicario del Valle se consagra Gran Campeón Nacional y marca el inicio de un linaje legendario." },
  { year: "2014", title: "Expansión Genética", body: "Inauguramos el programa de transferencia embrionaria con la genética más selecta de Antioquia." },
  { year: "Hoy", title: "Legado Vivo", body: "Más de 140 ejemplares criados, 27 campeonatos y un compromiso intacto con la excelencia." },
];

export function Legacy() {
  return (
    <section id="legado" className="relative py-28 lg:py-40 bg-ivory">
      <div className="container-x grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
        <div className="lg:col-span-5 lg:sticky lg:top-32">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-10 bg-leather" />
            <span className="eyebrow text-leather">Nuestro Legado</span>
          </div>
          <h2 className="font-serif text-4xl lg:text-6xl text-olive-deep leading-[1.05] text-balance">
            Una historia <em>escrita</em> sobre el campo colombiano.
          </h2>
          <p className="mt-8 text-charcoal/70 leading-relaxed text-pretty max-w-md">
            Más que un criadero, somos guardianes de un patrimonio genético que
            define el temperamento, la nobleza y la elegancia del Caballo Criollo
            Colombiano. Tres generaciones, una misma pasión.
          </p>
          <div className="mt-10 relative overflow-hidden">
            <img
              src={legacyImage}
              alt="Fotografía histórica de la familia fundadora"
              width={1200}
              height={1500}
              loading="lazy"
              className="w-full max-w-md aspect-[4/5] object-cover grayscale-[40%] sepia-[20%]"
            />
            <div className="absolute bottom-4 left-4 text-[10px] tracking-[0.3em] uppercase text-ivory bg-charcoal/70 px-3 py-1">
              Archivo · circa 1992
            </div>
          </div>
        </div>

        <ol className="lg:col-span-7 relative space-y-14">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-leather/60 via-charcoal/15 to-transparent" />
          {timeline.map((t) => (
            <li key={t.year} className="relative pl-12">
              <span className="absolute left-0 top-2 size-4 rounded-full border-2 border-leather bg-ivory" />
              <div className="font-mono text-xs tracking-[0.3em] text-leather mb-3">
                {t.year}
              </div>
              <h3 className="font-serif text-3xl lg:text-4xl text-olive-deep mb-3">
                {t.title}
              </h3>
              <p className="text-charcoal/70 leading-relaxed max-w-xl">{t.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
