import { useState } from "react";
import { toast } from "sonner";
import { geneticCategories, type GeneticType } from "@/lib/genetics";

const publishableTypes: { type: GeneticType; label: string }[] = geneticCategories
  .filter((c) => c.type !== "Servicio")
  .map((c) => ({ type: c.type as GeneticType, label: c.label }))
  .concat([{ type: "Servicio", label: "Servicio Reproductivo" }]);

export function PublishGeneticsForm() {
  const [type, setType] = useState<GeneticType>("Embrión");
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    // Placeholder for future API / payments / featured-listing integration.
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      setType("Embrión");
      toast.success("Publicación enviada", {
        description: "Nuestro equipo revisará tu genética y la activará en el marketplace.",
      });
    }, 800);
  };

  const showReproductive = type !== "Servicio";
  const showConservacion = type === "Embrión" || type === "Semen";

  return (
    <section id="publicar-genetica" className="bg-charcoal text-ivory py-24 lg:py-32">
      <div className="container-x">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20">
          <div className="lg:sticky lg:top-28 h-fit">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-10 bg-gold" />
              <span className="eyebrow text-gold-soft">Publicar Genética</span>
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl text-balance leading-[1.05]">
              Comercializa tu genética de alto valor.
            </h2>
            <p className="mt-6 text-ivory/60 leading-relaxed">
              Criaderos, centros reproductivos y propietarios pueden publicar
              embriones, semen, padrotes, donadoras, preñeces y servicios. Cada
              publicación es verificada antes de salir al marketplace.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Verificación de documentos y registros",
                "Fotos, videos y PDF de respaldo",
                "Árbol genealógico de 3 generaciones",
                "Listo para pagos y suscripciones",
              ].map((f) => (
                <li key={f} className="flex gap-3 text-sm text-ivory/70">
                  <span className="text-gold">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <form onSubmit={onSubmit} className="bg-ivory/[0.03] border border-ivory/10 p-8 lg:p-10">
            {/* Tipo de publicación */}
            <Field label="Tipo de publicación">
              <div className="flex flex-wrap gap-2">
                {publishableTypes.map((t) => (
                  <button
                    key={t.type}
                    type="button"
                    onClick={() => setType(t.type)}
                    className={`px-4 py-2.5 text-[10px] uppercase tracking-[0.18em] font-semibold border transition-colors ${
                      type === t.type
                        ? "bg-gold text-charcoal border-gold"
                        : "border-ivory/20 text-ivory/70 hover:border-gold/50"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </Field>

            <div className="grid sm:grid-cols-2 gap-5 mt-6">
              <Field label="Nombre">
                <Input name="name" required placeholder="Nombre del ejemplar / lote" />
              </Field>
              <Field label="Precio (COP)">
                <Input name="price" type="number" min={0} placeholder="0" />
              </Field>
            </div>
            <div className="grid sm:grid-cols-2 gap-5 mt-5">
              <Field label="Raza">
                <Input name="breed" placeholder="Caballo Criollo Colombiano..." defaultValue="Caballo Criollo Colombiano" />
              </Field>
              <Field label="Modalidad (Andar)">
                <select name="discipline" className={selectClass}>
                  <option>Trocha Pura (P3)</option>
                  <option>Trocha y Galope (P2)</option>
                  <option>Paso Fino Colombiano (P4)</option>
                  <option>Trote y Galope (P1)</option>
                  <option>Paseo</option>
                </select>
              </Field>
            </div>

            <div className="grid sm:grid-cols-2 gap-5 mt-5">
              <Field label="País de origen">
                <Input name="origin" placeholder="Colombia..." defaultValue="Colombia" />
              </Field>
              <Field label="Ubicación">
                <Input name="location" placeholder="Ciudad, departamento" />
              </Field>
            </div>

            {showConservacion && (
              <Field label="Conservación" className="mt-5">
                <select name="conservacion" className={selectClass}>
                  <option>Fresco</option>
                  <option>Congelado</option>
                  <option>Refrigerado</option>
                </select>
              </Field>
            )}

            {/* Pedigrí */}
            <div className="mt-8 pt-8 border-t border-ivory/10">
              <div className="eyebrow text-gold-soft mb-5">Pedigrí · 3 Generaciones</div>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Padre"><Input name="sire" placeholder="Nombre del padre" /></Field>
                <Field label="Madre"><Input name="dam" placeholder="Nombre de la madre" /></Field>
                <Field label="Abuelo paterno"><Input name="sireSire" /></Field>
                <Field label="Abuela paterna"><Input name="sireDam" /></Field>
                <Field label="Abuelo materno"><Input name="damSire" /></Field>
                <Field label="Abuela materna"><Input name="damDam" /></Field>
              </div>
            </div>

            {showReproductive && (
              <Field label="Información reproductiva" className="mt-5">
                <Textarea
                  name="reproductive"
                  placeholder="Historial reproductivo, índices, resultados deportivos…"
                />
              </Field>
            )}

            <Field label="Descripción" className="mt-5">
              <Textarea name="description" placeholder="Describe la genética, sus virtudes y condiciones de venta." />
            </Field>

            {/* Media */}
            <div className="mt-8 pt-8 border-t border-ivory/10 grid sm:grid-cols-3 gap-4">
              <Upload label="Fotos" accept="image/*" multiple icon="photo" />
              <Upload label="Videos" accept="video/*" multiple icon="video" />
              <Upload label="Documentos PDF" accept="application/pdf" multiple icon="doc" />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="mt-8 w-full bg-gold text-charcoal py-4 text-[11px] uppercase tracking-[0.22em] font-bold hover:bg-gold-soft transition-colors disabled:opacity-60"
            >
              {submitting ? "Enviando…" : "Publicar genética"}
            </button>
            <p className="mt-3 text-center text-[10px] text-ivory/40">
              Al publicar aceptas la verificación de documentos por parte de Palonegro.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

const inputClass =
  "w-full bg-ivory/[0.04] border border-ivory/15 px-3.5 py-3 text-sm text-ivory placeholder:text-ivory/30 focus:outline-none focus:border-gold/60";
const selectClass = inputClass;

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={inputClass} />;
}

function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea rows={4} {...props} className={`${inputClass} resize-none`} />;
}

function Field({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="block text-[10px] uppercase tracking-[0.2em] text-ivory/55 mb-2">
        {label}
      </span>
      {children}
    </label>
  );
}

function Upload({
  label,
  accept,
  multiple,
  icon,
}: {
  label: string;
  accept: string;
  multiple?: boolean;
  icon: "photo" | "video" | "doc";
}) {
  const [count, setCount] = useState(0);
  const paths: Record<string, React.ReactNode> = {
    photo: <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5 8 12l4 3.5L16 11l5 5M3 6h18v12H3z" />,
    video: <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h12v12H3zM15 9l6-3v12l-6-3z" />,
    doc: <path strokeLinecap="round" strokeLinejoin="round" d="M7 3h7l5 5v13H7zM14 3v5h5M9 13h6M9 17h6" />,
  };
  return (
    <label className="border border-dashed border-ivory/20 p-5 text-center cursor-pointer hover:border-gold/50 transition-colors block">
      <input
        type="file"
        accept={accept}
        multiple={multiple}
        className="hidden"
        onChange={(e) => setCount(e.target.files?.length ?? 0)}
      />
      <span className="size-9 mx-auto grid place-items-center rounded-full bg-ivory/5 text-gold-soft mb-2">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
          {paths[icon]}
        </svg>
      </span>
      <span className="block text-[10px] uppercase tracking-[0.18em] text-ivory/60">{label}</span>
      <span className="block text-[10px] text-gold-soft mt-1">
        {count > 0 ? `${count} archivo${count > 1 ? "s" : ""}` : "Subir"}
      </span>
    </label>
  );
}
