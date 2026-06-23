import { useRef } from "react";
import { premiumLines } from "@/lib/genetics";

export function PremiumLines() {
  const scroller = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = scroller.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <section className="bg-charcoal text-ivory py-24 lg:py-32">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-10 bg-gold" />
              <span className="eyebrow text-gold-soft">Genética Premium Internacional</span>
            </div>
            <h2 className="font-serif text-4xl lg:text-6xl text-balance leading-[1.05]">
              Líneas que dominan el <em>Grand Prix</em>.
            </h2>
          </div>
          <div className="flex gap-2 shrink-0">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              className="size-12 grid place-items-center rounded-full ring-1 ring-ivory/25 text-ivory hover:bg-ivory/10 transition-colors"
              aria-label="Anterior"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              className="size-12 grid place-items-center rounded-full ring-1 ring-ivory/25 text-ivory hover:bg-ivory/10 transition-colors"
              aria-label="Siguiente"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={scroller}
          className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory -mx-6 px-6 lg:mx-0 lg:px-0"
        >
          {premiumLines.map((line) => (
            <article
              key={line.name}
              className="snap-start shrink-0 w-[280px] sm:w-[340px] group"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-olive/20">
                <img
                  src={line.image}
                  alt={line.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/10 to-transparent" />
                <span className="absolute top-4 left-4 bg-gold text-charcoal text-[9px] uppercase tracking-[0.22em] font-bold px-3 py-1.5">
                  {line.highlight}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-gold-soft mb-1">
                    {line.origin} · {line.discipline}
                  </div>
                  <h3 className="font-serif text-3xl text-ivory leading-none">{line.name}</h3>
                </div>
              </div>
              <p className="mt-4 text-sm text-ivory/60 leading-relaxed">{line.blurb}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
