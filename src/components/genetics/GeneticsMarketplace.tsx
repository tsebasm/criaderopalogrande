import { useMemo, useState } from "react";
import {
  geneticListings,
  geneticCategories,
  formatPrice,
  formatCOP,
  type GeneticType,
  type Conservacion,
} from "@/lib/genetics";
import { PedigreeTree } from "./PedigreeTree";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type TypeFilter = GeneticType | "Todos";

const PRICE_MAX = 450_000_000;

const unique = <T,>(arr: T[]) => Array.from(new Set(arr));

export function GeneticsMarketplace() {
  const [type, setType] = useState<TypeFilter>("Todos");
  const [search, setSearch] = useState("");
  const [breed, setBreed] = useState("Todas");
  const [discipline, setDiscipline] = useState("Todas");
  const [origin, setOrigin] = useState("Todos");
  const [maxPrice, setMaxPrice] = useState(PRICE_MAX);
  const [conservacion, setConservacion] = useState<Conservacion[]>([]);

  const breeds = useMemo(() => unique(geneticListings.map((l) => l.breed)), []);
  const disciplines = useMemo(() => unique(geneticListings.map((l) => l.discipline)), []);
  const origins = useMemo(() => unique(geneticListings.map((l) => l.origin)), []);

  const toggleConservacion = (c: Conservacion) =>
    setConservacion((prev) =>
      prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c],
    );

  const visible = useMemo(() => {
    return geneticListings.filter((l) => {
      if (type !== "Todos" && l.type !== type) return false;
      if (breed !== "Todas" && l.breed !== breed) return false;
      if (discipline !== "Todas" && l.discipline !== discipline) return false;
      if (origin !== "Todos" && l.origin !== origin) return false;

      const effPrice = l.pricePerDose ?? l.price ?? 0;
      if (effPrice > maxPrice) return false;

      if (conservacion.length > 0) {
        if (!l.conservacion || !conservacion.includes(l.conservacion)) return false;
      }

      if (search.trim()) {
        const q = search.toLowerCase();
        const hay = [
          l.name,
          l.line,
          l.pedigree.sire.name,
          l.pedigree.dam.name,
          l.pedigree.sireSire.name,
          l.pedigree.damSire.name,
        ]
          .join(" ")
          .toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [type, breed, discipline, origin, maxPrice, conservacion, search]);

  const resetFilters = () => {
    setType("Todos");
    setSearch("");
    setBreed("Todas");
    setDiscipline("Todas");
    setOrigin("Todos");
    setMaxPrice(PRICE_MAX);
    setConservacion([]);
  };

  const typeTabs: TypeFilter[] = [
    "Todos",
    ...geneticCategories.map((c) => c.type as GeneticType),
  ];

  return (
    <section id="catalogo-genetica" className="bg-beige py-24 lg:py-32">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-10 bg-leather" />
              <span className="eyebrow text-leather">Marketplace de Genética</span>
            </div>
            <h2 className="font-serif text-4xl lg:text-6xl text-olive-deep text-balance leading-[1.05]">
              Publicaciones <em>disponibles</em>.
            </h2>
          </div>
        </div>

        {/* Type tabs */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-3 mb-8 border-b border-charcoal/10">
          {typeTabs.map((t) => (
            <button
              key={t}
              onClick={() => setType(t)}
              className={`whitespace-nowrap px-5 py-3 text-[10px] uppercase tracking-[0.2em] font-semibold transition-colors ${
                type === t ? "bg-olive text-ivory" : "text-charcoal/60 hover:text-olive"
              }`}
            >
              {t === "Todos" ? "Todos" : geneticCategories.find((c) => c.type === t)?.label ?? t}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-10">
          {/* Filters */}
          <aside className="lg:sticky lg:top-28 h-fit">
            <div className="bg-ivory border border-charcoal/10 p-6">
              <div className="flex items-center justify-between mb-6">
                <span className="eyebrow text-leather">Filtros</span>
                <button
                  onClick={resetFilters}
                  className="text-[10px] uppercase tracking-[0.15em] text-charcoal/50 hover:text-olive"
                >
                  Limpiar
                </button>
              </div>

              <FilterGroup label="Buscar padre / abuelo">
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Ej. Chacco Blue"
                  className="w-full bg-beige/60 border border-charcoal/10 px-3 py-2.5 text-sm text-charcoal placeholder:text-charcoal/35 focus:outline-none focus:border-olive"
                />
              </FilterGroup>

              <FilterGroup label="Raza">
                <Select value={breed} onChange={setBreed} options={["Todas", ...breeds]} />
              </FilterGroup>

              <FilterGroup label="Disciplina">
                <Select value={discipline} onChange={setDiscipline} options={["Todas", ...disciplines]} />
              </FilterGroup>

              <FilterGroup label="País de origen">
                <Select value={origin} onChange={setOrigin} options={["Todos", ...origins]} />
              </FilterGroup>

              <FilterGroup label={`Precio máx · ${formatCOP(maxPrice)}`}>
                <input
                  type="range"
                  min={5_000_000}
                  max={PRICE_MAX}
                  step={5_000_000}
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-olive"
                />
              </FilterGroup>

              <FilterGroup label="Conservación">
                <div className="flex flex-col gap-2">
                  {(["Fresco", "Congelado", "Refrigerado"] as Conservacion[]).map((c) => (
                    <label key={c} className="flex items-center gap-2.5 text-sm text-charcoal/75 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={conservacion.includes(c)}
                        onChange={() => toggleConservacion(c)}
                        className="size-4 accent-olive"
                      />
                      {c}
                    </label>
                  ))}
                </div>
              </FilterGroup>
            </div>
          </aside>

          {/* Grid */}
          <div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-charcoal/50 mb-6">
              {visible.length} {visible.length === 1 ? "publicación" : "publicaciones"}
            </div>

            {visible.length === 0 ? (
              <div className="bg-ivory border border-charcoal/10 p-16 text-center">
                <p className="font-serif text-2xl text-olive-deep">Sin resultados</p>
                <p className="mt-2 text-sm text-charcoal/55">
                  Ajuste los filtros para ver más publicaciones.
                </p>
                <button onClick={resetFilters} className="mt-6 eyebrow text-leather">
                  Limpiar filtros
                </button>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 gap-8">
                {visible.map((l) => (
                  <ListingCard key={l.id} listing={l} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ListingCard({ listing: l }: { listing: (typeof geneticListings)[number] }) {
  return (
    <article className="bg-ivory border border-charcoal/10 group flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden bg-beige">
        <img
          src={l.image}
          alt={l.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          <span className="bg-olive text-ivory text-[9px] uppercase tracking-[0.2em] font-bold px-3 py-1.5">
            {l.type}
          </span>
          {l.featured && (
            <span className="bg-gold text-charcoal text-[9px] uppercase tracking-[0.2em] font-bold px-3 py-1.5">
              Destacado
            </span>
          )}
        </div>
        {l.status !== "Disponible" && (
          <span className="absolute top-3 right-3 bg-charcoal text-ivory text-[9px] uppercase tracking-[0.2em] font-bold px-3 py-1.5">
            {l.status}
          </span>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="text-[10px] uppercase tracking-[0.2em] text-leather mb-2">
          {l.line} · {l.breed}
        </div>
        <h3 className="font-serif text-2xl text-olive-deep leading-tight">{l.name}</h3>

        {/* Type-specific spec lines */}
        <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-[11px]">
          <Spec label="Padre" value={l.pedigree.sire.name} />
          <Spec label="Madre" value={l.pedigree.dam.name} />
          {l.conservacion && <Spec label="Estado" value={l.conservacion} />}
          {l.dosesAvailable != null && <Spec label="Dosis" value={`${l.dosesAvailable} disp.`} />}
          {l.registry && <Spec label="Registro" value={l.registry} />}
          {l.height && <Spec label="Alzada" value={l.height} />}
          {l.age && <Spec label="Edad" value={l.age} />}
          {l.gestationDays != null && <Spec label="Gestación" value={`${l.gestationDays} días`} />}
          {l.reproductiveHistory && (
            <div className="col-span-2">
              <dt className="text-[9px] uppercase tracking-[0.2em] text-charcoal/45">Historial</dt>
              <dd className="text-charcoal/75">{l.reproductiveHistory}</dd>
            </div>
          )}
          <Spec label="Origen" value={l.origin} />
          <Spec label="Ubicación" value={l.location} />
        </dl>

        {l.results && l.results.length > 0 && (
          <ul className="mt-4 space-y-1.5">
            {l.results.map((r) => (
              <li key={r} className="flex gap-2 text-[11px] text-charcoal/70">
                <span className="text-gold">★</span>
                {r}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto pt-6 flex items-end justify-between gap-4">
          <div>
            <div className="text-[9px] uppercase tracking-[0.2em] text-charcoal/45">Precio</div>
            <div className="font-serif text-xl text-olive-deep">{formatPrice(l)}</div>
          </div>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <button className="mt-5 w-full py-3 text-[10px] uppercase tracking-[0.22em] font-semibold border border-olive text-olive hover:bg-olive hover:text-ivory transition-colors">
              Ver pedigrí
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl bg-ivory border-charcoal/10">
            <DialogHeader>
              <DialogTitle className="font-serif text-2xl text-olive-deep">
                Pedigrí · {l.name}
              </DialogTitle>
            </DialogHeader>
            <p className="text-sm text-charcoal/60 leading-relaxed mb-2">{l.description}</p>
            <div className="mt-2">
              <PedigreeTree subject={l.name} pedigree={l.pedigree} variant="light" />
            </div>
            <a
              href="#publicar-genetica"
              className="mt-4 inline-flex items-center justify-center w-full py-3.5 text-[10px] uppercase tracking-[0.22em] font-semibold bg-olive text-ivory hover:bg-olive-deep transition-colors"
            >
              Solicitar información
            </a>
          </DialogContent>
        </Dialog>
      </div>
    </article>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[9px] uppercase tracking-[0.2em] text-charcoal/45">{label}</dt>
      <dd className="text-charcoal/80 leading-tight">{value}</dd>
    </div>
  );
}

function FilterGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mb-6 last:mb-0">
      <div className="text-[10px] uppercase tracking-[0.2em] text-charcoal/55 mb-2.5">{label}</div>
      {children}
    </div>
  );
}

function Select({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-beige/60 border border-charcoal/10 px-3 py-2.5 text-sm text-charcoal focus:outline-none focus:border-olive"
    >
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  );
}
