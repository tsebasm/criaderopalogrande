import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { useCart } from "@/context/CartContext";

const links = [
  { href: "/#legado", label: "Legado" },
  { href: "/#ejemplares", label: "Ejemplares" },
  { href: "/#experiencia", label: "Hacienda" },
  { href: "/#transporte", label: "Transporte" },
  { href: "/#visita", label: "Contacto" },
];

export function Navigation() {
  const { items, setOpen } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ivory/90 backdrop-blur-md border-b border-charcoal/8 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container-x flex items-center justify-between gap-6">
        <a href="/#top" className="flex items-center gap-3 group">
          <span
            className={`size-9 rounded-full grid place-items-center ring-1 transition-colors ${
              scrolled
                ? "bg-olive text-ivory ring-olive/30"
                : "bg-ivory/10 text-ivory ring-ivory/30 backdrop-blur-sm"
            }`}
            aria-hidden
          >
            <span className="font-serif italic text-base">P</span>
          </span>
          <div className="leading-tight">
            <div
              className={`font-serif text-xl tracking-wider ${
                scrolled ? "text-olive-deep" : "text-ivory"
              }`}
            >
              PALONEGRO
            </div>
            <div
              className={`text-[9px] tracking-[0.3em] uppercase ${
                scrolled ? "text-leather" : "text-gold-soft"
              }`}
            >
              Criadero · Antioquia
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-[11px] uppercase tracking-[0.22em] font-medium transition-colors ${
                scrolled
                  ? "text-charcoal/70 hover:text-olive"
                  : "text-ivory/80 hover:text-gold-soft"
              }`}
            >
              {l.label}
            </a>
          ))}
          <Link
            to="/genetica"
            className={`text-[11px] uppercase tracking-[0.22em] font-semibold transition-colors ${
              scrolled ? "text-olive hover:text-olive-deep" : "text-gold-soft hover:text-ivory"
            }`}
          >
            Genética Equina
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#visita"
            className={`hidden md:inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] font-semibold px-5 py-3 transition-colors ${
              scrolled
                ? "bg-olive text-ivory hover:bg-olive-deep"
                : "bg-ivory text-charcoal hover:bg-gold-soft"
            }`}
          >
            Agendar Visita
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className={`relative size-11 grid place-items-center rounded-full ring-1 transition-colors ${
              scrolled
                ? "ring-charcoal/15 text-charcoal hover:bg-beige"
                : "ring-ivory/30 text-ivory hover:bg-ivory/10"
            }`}
            aria-label="Carrito"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218a.75.75 0 0 0 .73-.583l1.642-7.5a.75.75 0 0 0-.73-.917H5.106M7.5 14.25L5.106 5.25" />
            </svg>
            {items.length > 0 && (
              <span className="absolute -top-1 -right-1 size-5 rounded-full bg-gold text-charcoal text-[10px] font-bold grid place-items-center">
                {items.length}
              </span>
            )}
          </button>
          <button
            type="button"
            onClick={() => setMobile((v) => !v)}
            className={`lg:hidden size-11 grid place-items-center rounded-full ${
              scrolled ? "text-charcoal" : "text-ivory"
            }`}
            aria-label="Menú"
          >
            <div className="flex flex-col gap-1.5">
              <span className="block h-px w-5 bg-current" />
              <span className="block h-px w-5 bg-current" />
            </div>
          </button>
        </div>
      </div>

      {mobile && (
        <div className="lg:hidden bg-ivory border-t border-charcoal/10 mt-3">
          <div className="container-x py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobile(false)}
                className="text-sm uppercase tracking-[0.2em] text-charcoal/80 hover:text-olive py-2"
              >
                {l.label}
              </a>
            ))}
            <Link
              to="/genetica"
              onClick={() => setMobile(false)}
              className="text-sm uppercase tracking-[0.2em] font-semibold text-olive hover:text-olive-deep py-2"
            >
              Genética Equina
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
