import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { horses, formatCOP, type Andar } from "@/lib/horses";
import { useCart } from "@/context/CartContext";

const filters: ("Todos" | Andar | "Yeguas" | "Reproductores" | "Potros" | "Embriones")[] = [
  "Todos",
  "Paso Fino",
  "Trocha",
  "Trocha y Galope",
  "Trote y Galope",
  "Yeguas",
  "Reproductores",
  "Potros",
  "Embriones",
];

export function Marketplace() {
  const { add, has } = useCart();
  const [active, setActive] = useState<(typeof filters)[number]>("Todos");

  const visible = useMemo(() => {
    if (active === "Todos") return horses;
    if (active === "Yeguas") return horses.filter((h) => h.category === "Yegua");
    if (active === "Reproductores") return horses.filter((h) => h.category === "Reproductor");
    if (active === "Potros") return horses.filter((h) => h.category === "Potro" || h.category === "Potranca");
    if (active === "Embriones") return horses.filter((h) => h.category === "Embrión");
    return horses.filter((h) => h.andar === active);
  }, [active]);

  return (
    <section id="ejemplares" className="bg-ivory py-28 lg:py-36">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-14">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-10 bg-leather" />
              <span className="eyebrow text-leather">Marketplace Equino</span>
            </div>
            <h2 className="font-serif text-4xl lg:text-6xl text-olive-deep text-balance leading-[1.05]">
              Ejemplares <em>disponibles</em>.
            </h2>
            <p className="mt-6 text-charcoal/65 max-w-lg leading-relaxed">
              Cada ejemplar pasa por nuestro proceso de evaluación morfológica,
              temperamental y veterinaria. Filtre por andar o categoría.
            </p>
          </div>
          <a href="#visita" className="hidden lg:inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] font-semibold text-olive border-b border-olive pb-1">
            Solicitar catálogo completo
          </a>
        </div>

        {/* Filters */}
        <div className="flex gap-2 overflow-x-auto pb-3 no-scrollbar mb-10 border-b border-charcoal/10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`whitespace-nowrap px-5 py-3 text-[10px] uppercase tracking-[0.22em] font-semibold transition-colors ${
                active === f
                  ? "bg-olive text-ivory"
                  : "text-charcoal/60 hover:text-olive"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-x-8 lg:gap-y-16">
          {visible.map((h) => {
            const inCart = has(h.id);
            const sold = h.status !== "Disponible";
            return (
              <article key={h.id} className="group">
                <div className="relative overflow-hidden bg-beige mb-6 aspect-[4/5]">
                  <img
                    src={h.image}
                    alt={`${h.name} — ${h.andar}`}
                    width={1000}
                    height={1250}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {h.featured && (
                      <span className="bg-gold text-charcoal text-[9px] uppercase tracking-[0.25em] font-bold px-3 py-1.5">
                        Destacado
                      </span>
                    )}
                    {h.status === "Reservado" && (
                      <span className="bg-charcoal text-ivory text-[9px] uppercase tracking-[0.25em] font-bold px-3 py-1.5">
                        Reservado
                      </span>
                    )}
                    {h.status === "Vendido" && (
                      <span className="bg-leather text-ivory text-[9px] uppercase tracking-[0.25em] font-bold px-3 py-1.5">
                        Vendido
                      </span>
                    )}
                  </div>
                  <div className="absolute inset-x-4 bottom-4 flex gap-2 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <Link
                      to="/ejemplares/$horseId"
                      params={{ horseId: h.id }}
                      className="flex-1 bg-ivory text-charcoal text-[10px] uppercase tracking-[0.22em] font-semibold py-3 text-center hover:bg-gold"
                    >
                      Ver Perfil
                    </Link>
                  </div>
                </div>

                <div className="flex justify-between items-start gap-4">
                  <div className="min-w-0">
                    <h3 className="font-serif text-2xl text-olive-deep leading-tight">
                      {h.name}
                    </h3>
                    <div className="mt-2 text-[10px] uppercase tracking-[0.22em] text-charcoal/55">
                      {h.andar} · {h.age} · {h.sex}
                    </div>
                    <div className="mt-2 text-[11px] text-leather italic">
                      {h.lineage}
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="font-serif text-lg text-olive-deep">
                      {formatCOP(h.price)}
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  disabled={sold || inCart}
                  onClick={() => add(h)}
                  className={`mt-5 w-full py-3.5 text-[10px] uppercase tracking-[0.25em] font-semibold border transition-colors ${
                    sold
                      ? "border-charcoal/15 text-charcoal/30 cursor-not-allowed"
                      : inCart
                        ? "border-olive bg-olive text-ivory"
                        : "border-olive text-olive hover:bg-olive hover:text-ivory"
                  }`}
                >
                  {sold ? "No disponible" : inCart ? "En el carrito ✓" : "Agregar al carrito"}
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
