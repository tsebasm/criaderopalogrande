import stables from "@/assets/stables.jpg";
import hacienda from "@/assets/hacienda.jpg";

const features = [
  { n: "01", t: "Pesebreras de Lujo", b: "32 pesebreras individuales con piso de caucho, ventilación cruzada y monitoreo 24/7." },
  { n: "02", t: "Potreros Rotativos", b: "120 hectáreas de pastos kikuyo y estrella seleccionados por agrónomos especializados." },
  { n: "03", t: "Pistas de Entrenamiento", b: "Pista cubierta y pista exterior con arena especializada para cada andar." },
  { n: "04", t: "Veterinaria Permanente", b: "Equipo médico residente, quirófano equino y programa nutricional personalizado." },
];

export function Experience() {
  return (
    <section id="experiencia" className="py-28 lg:py-36 bg-beige">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-20 items-end">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-10 bg-leather" />
              <span className="eyebrow text-leather">Experiencia en la Hacienda</span>
            </div>
            <h2 className="font-serif text-4xl lg:text-6xl text-olive-deep leading-[1.05] text-balance">
              Una hacienda diseñada para el bienestar del <em>ejemplar</em>.
            </h2>
          </div>
          <p className="lg:col-span-5 lg:col-start-8 text-charcoal/70 leading-relaxed">
            En Llanogrande, sobre los valles de Antioquia, cada metro cuadrado
            de Palonegro está pensado para garantizar el mejor desarrollo
            físico, mental y genético de nuestros caballos.
          </p>
        </div>

        {/* Image collage */}
        <div className="grid lg:grid-cols-12 gap-6 mb-20">
          <div className="lg:col-span-7 relative overflow-hidden">
            <img
              src={hacienda}
              alt="Entrada de la hacienda Palonegro"
              width={1600}
              height={1100}
              loading="lazy"
              className="w-full aspect-[16/11] object-cover hover:scale-105 transition-transform duration-[1500ms]"
            />
          </div>
          <div className="lg:col-span-5 relative overflow-hidden">
            <img
              src={stables}
              alt="Pesebreras interiores"
              width={1400}
              height={1000}
              loading="lazy"
              className="w-full aspect-[16/11] lg:h-full object-cover hover:scale-105 transition-transform duration-[1500ms]"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-charcoal/10">
          {features.map((f) => (
            <div key={f.n} className="bg-beige p-8 lg:p-10">
              <div className="font-mono text-[10px] tracking-[0.3em] text-leather mb-6">
                /{f.n}
              </div>
              <h3 className="font-serif text-2xl text-olive-deep mb-3">{f.t}</h3>
              <p className="text-sm text-charcoal/65 leading-relaxed">{f.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
