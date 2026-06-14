import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { horses, formatCOP } from "@/lib/horses";
import { useCart } from "@/context/CartContext";
import { Navigation } from "@/components/landing/Navigation";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/ejemplares/$horseId")({
  loader: ({ params }) => {
    const horse = horses.find((h) => h.id === params.horseId);
    if (!horse) throw notFound();
    return { horse };
  },
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center bg-ivory">
      <div className="text-center">
        <h1 className="font-serif text-4xl text-olive-deep">Ejemplar no encontrado</h1>
        <Link to="/" className="mt-6 inline-block eyebrow text-leather">
          Volver al inicio
        </Link>
      </div>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="min-h-screen grid place-items-center bg-ivory text-charcoal">
      <p>{error.message}</p>
    </div>
  ),
  component: HorseDetail,
});

function HorseDetail() {
  const { horse } = Route.useLoaderData();
  const { add, has, setOpen } = useCart();
  const inCart = has(horse.id);
  const sold = horse.status !== "Disponible";

  const specs: Array<{ label: string; value: string }> = [
    { label: "Andar", value: horse.andar },
    { label: "Categoría", value: horse.category },
    { label: "Sexo", value: horse.sex },
    { label: "Edad", value: horse.age },
    { label: "Linaje", value: horse.lineage },
    { label: "Estado", value: horse.status },
  ];

  return (
    <div className="bg-ivory text-charcoal">
      <Navigation />
      <main className="pt-28 lg:pt-32 pb-24">
        <div className="container-x">
          {/* Breadcrumb */}
          <nav className="text-[10px] uppercase tracking-[0.25em] text-charcoal/55 mb-8 flex gap-2">
            <Link to="/" className="hover:text-olive">Inicio</Link>
            <span>/</span>
            <Link to="/" hash="ejemplares" className="hover:text-olive">Ejemplares</Link>
            <span>/</span>
            <span className="text-olive">{horse.name}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Image */}
            <div className="relative aspect-[4/5] overflow-hidden bg-beige">
              <img
                src={horse.image}
                alt={horse.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute top-5 left-5 flex flex-col gap-2">
                {horse.featured && (
                  <span className="bg-gold text-charcoal text-[9px] uppercase tracking-[0.25em] font-bold px-3 py-1.5">
                    Destacado
                  </span>
                )}
                {horse.status !== "Disponible" && (
                  <span className="bg-charcoal text-ivory text-[9px] uppercase tracking-[0.25em] font-bold px-3 py-1.5">
                    {horse.status}
                  </span>
                )}
              </div>
            </div>

            {/* Info */}
            <div>
              <div className="eyebrow text-leather">{horse.category}</div>
              <h1 className="font-serif text-5xl lg:text-6xl text-olive-deep mt-4 leading-[1.05]">
                {horse.name}
              </h1>
              <div className="mt-6 font-serif text-3xl text-gold">
                {formatCOP(horse.price)}
              </div>

              <div className="mt-10 border-t border-charcoal/10 pt-8">
                <div className="eyebrow text-leather mb-5">Especificaciones</div>
                <dl className="grid grid-cols-2 gap-y-5 gap-x-8">
                  {specs.map((s) => (
                    <div key={s.label}>
                      <dt className="text-[10px] uppercase tracking-[0.25em] text-charcoal/50">
                        {s.label}
                      </dt>
                      <dd className="mt-1.5 font-serif text-lg text-olive-deep">
                        {s.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              {horse.awards && horse.awards.length > 0 && (
                <div className="mt-10 border-t border-charcoal/10 pt-8">
                  <div className="eyebrow text-leather mb-5">Palmarés</div>
                  <ul className="space-y-2">
                    {horse.awards.map((a: string) => (
                      <li key={a} className="flex gap-3 text-sm text-charcoal/75">
                        <span className="text-gold">★</span>
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-10 border-t border-charcoal/10 pt-8">
                <div className="eyebrow text-leather mb-4">Descripción</div>
                <p className="text-charcoal/75 leading-relaxed">
                  Ejemplar criado bajo los más estrictos estándares genéticos y
                  morfológicos del Criadero Palonegro. Evaluación veterinaria
                  completa, registros Asdepaso al día y temperamento confirmado
                  por nuestros jinetes. Disponible para entrega con transporte
                  certificado a todo Colombia.
                </p>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  disabled={sold || inCart}
                  onClick={() => {
                    add(horse);
                    setOpen(true);
                  }}
                  className={`flex-1 py-4 text-xs uppercase tracking-[0.25em] font-semibold transition-colors ${
                    sold
                      ? "bg-charcoal/10 text-charcoal/30 cursor-not-allowed"
                      : inCart
                        ? "bg-olive text-ivory"
                        : "bg-olive text-ivory hover:bg-charcoal"
                  }`}
                >
                  {sold ? "No disponible" : inCart ? "En el carrito ✓" : "Agregar al carrito"}
                </button>
                <Link
                  to="/checkout"
                  onClick={() => !inCart && !sold && add(horse)}
                  className="flex-1 text-center py-4 text-xs uppercase tracking-[0.25em] font-semibold border border-olive text-olive hover:bg-olive hover:text-ivory transition-colors"
                >
                  Comprar ahora
                </Link>
              </div>

              <a
                href={`https://wa.me/573040000000?text=Hola%2C%20me%20interesa%20${encodeURIComponent(horse.name)}`}
                target="_blank"
                rel="noopener"
                className="mt-4 block text-center text-[11px] uppercase tracking-[0.25em] text-leather font-semibold py-3 hover:text-olive"
              >
                Consultar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
