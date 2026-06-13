import transportImg from "@/assets/transport.jpg";

const cities = [
  "Medellín", "Bogotá", "Cali", "Cartagena", "Barranquilla",
  "Bucaramanga", "Pereira", "Manizales", "Villavicencio", "Santa Marta",
];

const features = [
  { t: "Seguro Integral", b: "Póliza contra todo riesgo durante toda la ruta, incluida en cada entrega." },
  { t: "Médico Veterinario a Bordo", b: "Personal sanitario calificado acompaña cada traslado de larga distancia." },
  { t: "Trámite ICA y Guías", b: "Nos encargamos de toda la documentación y permisos de movilización." },
  { t: "Seguimiento en Tiempo Real", b: "Monitoreo GPS y reportes fotográficos cada cuatro horas." },
];

export function Transport() {
  return (
    <section id="transporte" className="relative py-28 lg:py-36 bg-olive-deep text-ivory overflow-hidden">
      <div className="container-x grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative">
        <div>
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-10 bg-gold" />
            <span className="eyebrow text-gold-soft">Logística Especializada</span>
          </div>
          <h2 className="font-serif text-4xl lg:text-6xl leading-[1.05] text-balance">
            Llegamos a cada rincón de <em>Colombia</em>.
          </h2>
          <p className="mt-8 text-ivory/70 leading-relaxed max-w-lg">
            Su nuevo ejemplar viaja con la misma elegancia con la que fue criado.
            Flota propia, climatizada, con seguro total y personal veterinario a
            bordo.
          </p>

          <div className="mt-12 grid sm:grid-cols-2 gap-px bg-ivory/10">
            {features.map((f, i) => (
              <div key={f.t} className="bg-olive-deep p-6">
                <div className="text-gold-soft font-mono text-xs mb-3">0{i + 1}</div>
                <div className="font-serif text-lg mb-2">{f.t}</div>
                <p className="text-xs text-ivory/55 leading-relaxed">{f.b}</p>
              </div>
            ))}
          </div>

          <a
            href="#visita"
            className="mt-12 inline-flex items-center gap-3 bg-gold text-charcoal px-8 py-4 text-xs uppercase tracking-[0.25em] font-semibold hover:bg-ivory transition-colors"
          >
            Cotizar Transporte
            <span>→</span>
          </a>
        </div>

        <div className="relative">
          <img
            src={transportImg}
            alt="Transporte equino especializado en rutas colombianas"
            width={1600}
            height={1000}
            loading="lazy"
            className="w-full aspect-[5/4] object-cover ring-1 ring-ivory/10"
          />
          <div className="absolute -bottom-6 -left-6 bg-ivory text-charcoal p-6 max-w-[260px] shadow-2xl hidden md:block">
            <div className="text-[9px] tracking-[0.3em] uppercase text-leather mb-2">Próxima Ruta</div>
            <div className="font-serif text-xl text-olive-deep">Medellín → Cartagena</div>
            <div className="text-[10px] text-charcoal/50 mt-2 italic">28 de Junio · 2 cupos disponibles</div>
          </div>
        </div>
      </div>

      {/* City marquee */}
      <div className="mt-24 border-t border-ivory/10 pt-10">
        <div className="text-center mb-6 eyebrow text-gold-soft">Cobertura Nacional</div>
        <div className="overflow-hidden">
          <div className="flex gap-12 animate-marquee whitespace-nowrap font-serif text-2xl lg:text-3xl text-ivory/40">
            {[...cities, ...cities, ...cities].map((c, i) => (
              <span key={i} className="flex items-center gap-12">
                {c}
                <span className="size-1.5 rounded-full bg-gold/60" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
