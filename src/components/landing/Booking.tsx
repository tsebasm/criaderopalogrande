import { useState, type FormEvent } from "react";
import { toast } from "sonner";

export function Booking() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Solicitud recibida", {
      description: "Nuestro equipo le contactará en menos de 24 horas.",
    });
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="visita" className="py-28 lg:py-36 bg-ivory">
      <div className="container-x grid lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-10 bg-leather" />
            <span className="eyebrow text-leather">Agende su Visita</span>
          </div>
          <h2 className="font-serif text-4xl lg:text-6xl text-olive-deep leading-[1.05] text-balance">
            Quiero conocer el <em>criadero</em>.
          </h2>
          <p className="mt-8 text-charcoal/70 leading-relaxed max-w-md">
            Reserve una experiencia personalizada en Llanogrande: recorrido por
            la hacienda, presentación de ejemplares y almuerzo en nuestra casona.
          </p>
          <div className="mt-12 space-y-6 border-t border-charcoal/10 pt-10">
            <ContactLine label="Ubicación" value="Llanogrande, Rionegro · Antioquia" />
            <ContactLine label="WhatsApp" value="+57 304 000 0000" />
            <ContactLine label="Correo" value="visitas@palonegro.co" />
            <ContactLine label="Horario" value="Lun – Sáb · 8:00 a.m. – 5:00 p.m." />
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="lg:col-span-7 bg-beige p-8 lg:p-14 grid sm:grid-cols-2 gap-x-6 gap-y-7"
        >
          <Field label="Nombre Completo" name="name" placeholder="Andrés Restrepo" required />
          <Field label="Ciudad" name="city" placeholder="Medellín" required />
          <Field label="WhatsApp" name="phone" type="tel" placeholder="+57 300 000 0000" required />
          <Field label="Correo Electrónico" name="email" type="email" placeholder="usted@correo.com" required />
          <Select label="Caballo de interés" name="horse" className="sm:col-span-2">
            <option>Cualquier ejemplar disponible</option>
            <option>Insignia de la Noche</option>
            <option>Amanecer Llanero</option>
            <option>Obsidiana</option>
            <option>Sol de Oriente</option>
            <option>Solicitar asesoría general</option>
          </Select>
          <Field label="Fecha deseada" name="date" type="date" className="sm:col-span-2" />
          <div className="sm:col-span-2 flex flex-col gap-2">
            <label className="text-[10px] tracking-[0.3em] uppercase text-charcoal/55 font-semibold">
              Comentarios
            </label>
            <textarea
              name="comments"
              rows={4}
              placeholder="Cuéntenos qué tipo de ejemplar busca o el propósito de la visita."
              className="bg-transparent border-b border-charcoal/20 py-3 text-sm focus:outline-none focus:border-olive resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={submitted}
            className="sm:col-span-2 mt-4 bg-olive text-ivory py-5 text-xs uppercase tracking-[0.3em] font-bold hover:bg-charcoal transition-colors disabled:opacity-70"
          >
            {submitted ? "Solicitud enviada ✓" : "Quiero conocer el criadero"}
          </button>
        </form>
      </div>
    </section>
  );
}

function ContactLine({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-6">
      <span className="text-[10px] tracking-[0.3em] uppercase text-charcoal/45 font-semibold">
        {label}
      </span>
      <span className="font-serif text-lg text-olive-deep text-right">{value}</span>
    </div>
  );
}

function Field({
  label,
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div className={`flex flex-col gap-2 ${className ?? ""}`}>
      <label className="text-[10px] tracking-[0.3em] uppercase text-charcoal/55 font-semibold">
        {label}
      </label>
      <input
        {...props}
        className="bg-transparent border-b border-charcoal/20 py-3 text-sm focus:outline-none focus:border-olive"
      />
    </div>
  );
}

function Select({
  label,
  children,
  className,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement> & { label: string }) {
  return (
    <div className={`flex flex-col gap-2 ${className ?? ""}`}>
      <label className="text-[10px] tracking-[0.3em] uppercase text-charcoal/55 font-semibold">
        {label}
      </label>
      <select
        {...props}
        className="bg-transparent border-b border-charcoal/20 py-3 text-sm focus:outline-none focus:border-olive appearance-none"
      >
        {children}
      </select>
    </div>
  );
}
