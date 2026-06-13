const steps = [
  { t: "Seleccione su Ejemplar", b: "Explore el marketplace o solicite asesoría personalizada con nuestro equipo." },
  { t: "Agende Visita o Videollamada", b: "Conozca al caballo en persona o en tour virtual guiado." },
  { t: "Reserva con 20%", b: "Aseguramos su ejemplar mediante reserva formal mientras se completan trámites." },
  { t: "Formalización Documental", b: "Contrato de compraventa, registro de propiedad y pedigree certificado." },
  { t: "Transporte Especializado", b: "Coordinamos la ruta más segura hasta su destino en Colombia." },
  { t: "Entrega Segura", b: "Acompañamiento veterinario y soporte post-entrega de 30 días." },
];

export function Process() {
  return (
    <section className="py-28 lg:py-36 bg-ivory">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-px w-10 bg-leather" />
            <span className="eyebrow text-leather">Proceso de Compra</span>
            <span className="h-px w-10 bg-leather" />
          </div>
          <h2 className="font-serif text-4xl lg:text-6xl text-olive-deep leading-[1.05]">
            Seis pasos, una <em>experiencia</em> impecable.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-charcoal/10">
          {steps.map((s, i) => (
            <div key={s.t} className="bg-ivory p-10 group hover:bg-beige transition-colors">
              <div className="flex items-baseline gap-4 mb-6">
                <span className="font-serif text-6xl text-gold-soft leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="h-px flex-1 bg-charcoal/15 mb-2" />
              </div>
              <h3 className="font-serif text-2xl text-olive-deep mb-3">{s.t}</h3>
              <p className="text-sm text-charcoal/65 leading-relaxed">{s.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
