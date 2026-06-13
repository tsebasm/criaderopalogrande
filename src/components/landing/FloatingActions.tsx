import { Link } from "@tanstack/react-router";
import { useCart } from "@/context/CartContext";
import { formatCOP } from "@/lib/horses";

export function FloatingActions() {
  const { open, setOpen, items, remove } = useCart();
  const total = items.reduce((acc, h) => acc + (h.price ?? 0), 0);

  return (
    <>
      {/* WhatsApp floating */}
      <a
        href="https://wa.me/573040000000?text=Hola%20Palonegro%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n"
        target="_blank"
        rel="noopener"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-40 size-14 rounded-full bg-[#25D366] text-white grid place-items-center shadow-2xl hover:scale-110 transition-transform"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="size-7">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        </svg>
      </a>

      {/* Cart drawer */}
      <div
        className={`fixed inset-0 z-50 transition-opacity ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          aria-label="Cerrar"
          onClick={() => setOpen(false)}
          className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm"
        />
        <aside
          className={`absolute right-0 top-0 h-full w-full max-w-md bg-ivory text-charcoal flex flex-col transition-transform duration-500 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <header className="p-8 border-b border-charcoal/10 flex items-center justify-between">
            <div>
              <div className="eyebrow text-leather">Su Selección</div>
              <h3 className="font-serif text-2xl text-olive-deep mt-2">
                Reserva de Ejemplares
              </h3>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="size-10 rounded-full grid place-items-center hover:bg-beige"
              aria-label="Cerrar carrito"
            >
              ✕
            </button>
          </header>

          <div className="flex-1 overflow-y-auto p-8 space-y-6">
            {items.length === 0 && (
              <div className="text-center py-20">
                <div className="font-serif text-2xl text-olive-deep mb-3">
                  Su selección está vacía
                </div>
                <p className="text-sm text-charcoal/55">
                  Explore nuestros ejemplares y agréguelos para coordinar su
                  reserva.
                </p>
              </div>
            )}
            {items.map((h) => (
              <div key={h.id} className="flex gap-4">
                <img
                  src={h.image}
                  alt={h.name}
                  className="size-24 object-cover"
                />
                <div className="flex-1 min-w-0">
                  <div className="font-serif text-lg text-olive-deep">{h.name}</div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-charcoal/55 mt-1">
                    {h.andar} · {h.sex}
                  </div>
                  <div className="text-sm font-medium mt-2">
                    {formatCOP(h.price)}
                  </div>
                </div>
                <button
                  onClick={() => remove(h.id)}
                  className="text-[10px] uppercase tracking-[0.22em] text-charcoal/45 hover:text-destructive self-start"
                >
                  Quitar
                </button>
              </div>
            ))}
          </div>

          {items.length > 0 && (
            <footer className="p-8 border-t border-charcoal/10 bg-beige">
              <div className="flex justify-between items-baseline mb-6">
                <span className="text-[10px] tracking-[0.3em] uppercase text-charcoal/55 font-semibold">
                  Total estimado
                </span>
                <span className="font-serif text-2xl text-olive-deep">
                  {formatCOP(total)}
                </span>
              </div>
              <a
                href="#visita"
                onClick={() => setOpen(false)}
                className="block w-full bg-olive text-ivory text-center py-4 text-xs uppercase tracking-[0.3em] font-bold hover:bg-charcoal transition-colors"
              >
                Formalizar Reserva
              </a>
              <a
                href="https://wa.me/573040000000"
                target="_blank"
                rel="noopener"
                className="block w-full mt-3 text-center text-[11px] uppercase tracking-[0.25em] text-leather font-semibold py-3 hover:text-olive"
              >
                Coordinar por WhatsApp
              </a>
            </footer>
          )}
        </aside>
      </div>
    </>
  );
}
