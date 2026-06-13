import { useState } from "react";

const faqs = [
  {
    q: "¿Cómo certifican el pedigrí de cada ejemplar?",
    a: "Todos nuestros caballos están inscritos ante Fedequinas y Asdepaso, con genealogía verificada hasta la cuarta generación y pruebas de ADN cuando corresponde.",
  },
  {
    q: "¿Ofrecen financiación o planes de pago?",
    a: "Sí. Manejamos planes de hasta 12 meses sin intereses con reserva del 20%. Para inversiones mayores estructuramos planes a medida con entidades financieras aliadas.",
  },
  {
    q: "¿Qué incluye el servicio de transporte nacional?",
    a: "Transporte climatizado puerta a puerta, seguro contra todo riesgo, trámite de guías ICA, monitoreo GPS y acompañamiento veterinario durante todo el trayecto.",
  },
  {
    q: "¿Realizan exportación internacional?",
    a: "Sí, contamos con experiencia en exportaciones a Estados Unidos, Panamá, Costa Rica y Ecuador. El proceso incluye cuarentena, certificados sanitarios y coordinación logística internacional.",
  },
  {
    q: "¿Puedo reservar un ejemplar sin conocerlo en persona?",
    a: "Ofrecemos videollamadas en vivo, videos profesionales en alta resolución y reportes veterinarios completos. La reserva se formaliza con el 20% y es 100% reembolsable durante los primeros 7 días tras la entrega.",
  },
  {
    q: "¿Tienen ejemplares disponibles para temporada de exposiciones?",
    a: "Sí, mantenemos un grupo selecto de caballos en preparación de pista listos para participar. Consulte por disponibilidad según calendario nacional.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-28 lg:py-36 bg-charcoal text-ivory">
      <div className="container-x grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-10 bg-gold" />
            <span className="eyebrow text-gold-soft">Preguntas Frecuentes</span>
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl leading-[1.05] text-balance">
            Las respuestas que <em>importan</em>.
          </h2>
          <p className="mt-6 text-ivory/55 leading-relaxed">
            Resolvemos las dudas más comunes sobre compra, financiación,
            transporte y certificaciones.
          </p>
        </div>

        <ul className="lg:col-span-8 divide-y divide-ivory/10 border-y border-ivory/10">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <li key={f.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-7 text-left group"
                >
                  <span className="font-serif text-xl lg:text-2xl text-ivory group-hover:text-gold-soft transition-colors">
                    {f.q}
                  </span>
                  <span
                    className={`shrink-0 size-9 rounded-full border border-ivory/30 grid place-items-center transition-transform ${
                      isOpen ? "rotate-45 bg-gold border-gold text-charcoal" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-500 ease-out ${
                    isOpen ? "grid-rows-[1fr] pb-7" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-ivory/65 leading-relaxed max-w-2xl">{f.a}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
