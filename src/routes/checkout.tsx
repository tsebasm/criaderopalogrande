import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { useCart } from "@/context/CartContext";
import { formatCOP } from "@/lib/horses";
import { Navigation } from "@/components/landing/Navigation";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Pago — Criadero Palonegro" },
      { name: "description", content: "Finaliza tu reserva de ejemplar Palonegro de forma segura." },
    ],
  }),
  component: Checkout,
});

type PaymentMethod = "wompi" | "transferencia" | "financiacion";

function Checkout() {
  const { items, remove, clear } = useCart();
  const navigate = useNavigate();
  const [method, setMethod] = useState<PaymentMethod>("wompi");
  const [submitting, setSubmitting] = useState(false);

  const subtotal = items.reduce((acc, h) => acc + (h.price ?? 0), 0);
  const transporte = items.length > 0 ? 0 : 0;
  const total = subtotal + transporte;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (items.length === 0) return;
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Reserva confirmada. Le contactaremos en menos de 24h.");
      clear();
      setSubmitting(false);
      navigate({ to: "/" });
    }, 900);
  };

  return (
    <div className="bg-ivory text-charcoal min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 pt-28 lg:pt-32 pb-24">
        <div className="container-x">
          <nav className="text-[10px] uppercase tracking-[0.25em] text-charcoal/55 mb-8 flex gap-2">
            <Link to="/" className="hover:text-olive">Inicio</Link>
            <span>/</span>
            <span className="text-olive">Pago</span>
          </nav>

          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-20">
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-12">
              <header>
                <div className="eyebrow text-leather">Finalizar Reserva</div>
                <h1 className="font-serif text-5xl lg:text-6xl text-olive-deep mt-4 leading-[1.05]">
                  Pago seguro.
                </h1>
                <p className="mt-4 text-charcoal/65 max-w-lg">
                  Complete sus datos. Su selección queda reservada por 48 horas
                  mientras coordinamos verificación veterinaria y transporte.
                </p>
              </header>

              {/* Contact */}
              <fieldset className="space-y-5">
                <legend className="font-serif text-2xl text-olive-deep mb-4">
                  Contacto
                </legend>
                <Field label="Nombre completo" name="name" required />
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Correo electrónico" name="email" type="email" required />
                  <Field label="Teléfono / WhatsApp" name="phone" type="tel" required />
                </div>
                <Field label="Documento de identidad" name="document" required />
              </fieldset>

              {/* Delivery */}
              <fieldset className="space-y-5">
                <legend className="font-serif text-2xl text-olive-deep mb-4">
                  Entrega
                </legend>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Ciudad" name="city" required />
                  <Field label="Departamento" name="department" required />
                </div>
                <Field label="Dirección de entrega" name="address" required />
                <Field
                  label="Notas para el transporte (opcional)"
                  name="notes"
                  textarea
                />
              </fieldset>

              {/* Payment Method */}
              <fieldset>
                <legend className="font-serif text-2xl text-olive-deep mb-4">
                  Método de Pago
                </legend>
                <div className="space-y-3">
                  <MethodOption
                    id="wompi"
                    label="Tarjeta / PSE (Wompi)"
                    sub="Visa, Mastercard, Amex, PSE y Bancolombia."
                    active={method === "wompi"}
                    onClick={() => setMethod("wompi")}
                  />
                  <MethodOption
                    id="transferencia"
                    label="Transferencia bancaria"
                    sub="Le enviamos los datos al confirmar. Reserva inmediata."
                    active={method === "transferencia"}
                    onClick={() => setMethod("transferencia")}
                  />
                  <MethodOption
                    id="financiacion"
                    label="Financiación a medida"
                    sub="Cuotas hasta 12 meses con respaldo del criadero."
                    active={method === "financiacion"}
                    onClick={() => setMethod("financiacion")}
                  />
                </div>
              </fieldset>

              <button
                type="submit"
                disabled={items.length === 0 || submitting}
                className="w-full bg-olive text-ivory py-5 text-xs uppercase tracking-[0.3em] font-bold hover:bg-charcoal transition-colors disabled:bg-charcoal/15 disabled:text-charcoal/40 disabled:cursor-not-allowed"
              >
                {submitting ? "Procesando..." : `Pagar ${formatCOP(total)}`}
              </button>

              <p className="text-[11px] text-charcoal/50 leading-relaxed">
                Al confirmar, acepta nuestros términos comerciales y la política
                de bienestar animal del criadero. Sus datos están protegidos.
              </p>
            </form>

            {/* Summary */}
            <aside className="lg:sticky lg:top-28 self-start bg-beige p-8 lg:p-10">
              <div className="eyebrow text-leather mb-5">Su Selección</div>

              {items.length === 0 ? (
                <div className="py-10 text-center">
                  <div className="font-serif text-2xl text-olive-deep mb-3">
                    Su selección está vacía
                  </div>
                  <Link
                    to="/"
                    hash="ejemplares"
                    className="inline-block mt-4 eyebrow text-leather border-b border-leather pb-1"
                  >
                    Explorar Ejemplares
                  </Link>
                </div>
              ) : (
                <ul className="space-y-6 divide-y divide-charcoal/10">
                  {items.map((h, i) => (
                    <li key={h.id} className={`flex gap-4 ${i > 0 ? "pt-6" : ""}`}>
                      <img
                        src={h.image}
                        alt={h.name}
                        className="size-20 object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="font-serif text-lg text-olive-deep leading-tight">
                          {h.name}
                        </div>
                        <div className="text-[10px] uppercase tracking-[0.22em] text-charcoal/55 mt-1">
                          {h.andar} · {h.sex}
                        </div>
                        <button
                          type="button"
                          onClick={() => remove(h.id)}
                          className="mt-2 text-[10px] uppercase tracking-[0.22em] text-charcoal/45 hover:text-destructive"
                        >
                          Quitar
                        </button>
                      </div>
                      <div className="font-serif text-base text-olive-deep shrink-0">
                        {formatCOP(h.price)}
                      </div>
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-8 pt-6 border-t border-charcoal/15 space-y-3 text-sm">
                <Row label="Subtotal" value={formatCOP(subtotal)} />
                <Row label="Transporte nacional" value="Cotizar" />
                <Row label="Verificación veterinaria" value="Incluida" />
              </div>

              <div className="mt-6 pt-6 border-t border-charcoal/15 flex justify-between items-baseline">
                <span className="text-[10px] tracking-[0.3em] uppercase text-charcoal/55 font-semibold">
                  Total
                </span>
                <span className="font-serif text-3xl text-olive-deep">
                  {formatCOP(total)}
                </span>
              </div>

              <div className="mt-8 text-[10px] uppercase tracking-[0.22em] text-charcoal/55 flex items-center gap-2">
                <span className="text-gold">✓</span> Pago 100% seguro
              </div>
              <div className="mt-2 text-[10px] uppercase tracking-[0.22em] text-charcoal/55 flex items-center gap-2">
                <span className="text-gold">✓</span> Reserva por 48 horas
              </div>
              <div className="mt-2 text-[10px] uppercase tracking-[0.22em] text-charcoal/55 flex items-center gap-2">
                <span className="text-gold">✓</span> Transporte certificado
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  textarea,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
}) {
  const base =
    "w-full bg-transparent border-b border-charcoal/20 py-3 text-charcoal placeholder:text-charcoal/35 focus:border-olive focus:outline-none transition-colors";
  return (
    <label className="block">
      <span className="block text-[10px] uppercase tracking-[0.25em] text-charcoal/55 mb-2">
        {label}
        {required && <span className="text-leather"> *</span>}
      </span>
      {textarea ? (
        <textarea name={name} rows={3} className={base} />
      ) : (
        <input name={name} type={type} required={required} className={base} />
      )}
    </label>
  );
}

function MethodOption({
  id,
  label,
  sub,
  active,
  onClick,
}: {
  id: string;
  label: string;
  sub: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full text-left p-5 border transition-colors ${
        active
          ? "border-olive bg-olive/5"
          : "border-charcoal/15 hover:border-charcoal/40"
      }`}
    >
      <div className="flex items-center gap-3">
        <span
          className={`size-4 rounded-full border-2 ${
            active ? "border-olive bg-olive" : "border-charcoal/30"
          }`}
        />
        <span className="font-serif text-lg text-olive-deep">{label}</span>
      </div>
      <p className="mt-2 ml-7 text-xs text-charcoal/60">{sub}</p>
    </button>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between">
      <span className="text-charcoal/65">{label}</span>
      <span className="text-charcoal font-medium">{value}</span>
    </div>
  );
}
