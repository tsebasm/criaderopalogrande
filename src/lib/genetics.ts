import { formatCOP } from "@/lib/horses";

export { formatCOP };

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

export type GeneticType =
  | "Embrión"
  | "Semen"
  | "Padrote"
  | "Donadora"
  | "Preñez"
  | "Potro"
  | "Servicio";

export type Disciplina = "Salto" | "Doma" | "Concurso Completo" | "Polo";

export type Conservacion = "Fresco" | "Congelado" | "Refrigerado";

/** A single ancestor node within a pedigree. */
export type Ancestor = {
  name: string;
  note?: string;
};

/**
 * Three–generation pedigree. The listing subject is generation 0.
 * Generation 1 = parents, generation 2 = grandparents.
 */
export type Pedigree = {
  sire: Ancestor; // padre
  dam: Ancestor; // madre
  sireSire: Ancestor; // abuelo paterno
  sireDam: Ancestor; // abuela paterna
  damSire: Ancestor; // abuelo materno
  damDam: Ancestor; // abuela materna
};

export type GeneticListing = {
  id: string;
  type: GeneticType;
  name: string;
  image: string;
  /** Recognised genetic line / family. */
  line: string;
  breed: string; // raza
  discipline: Disciplina;
  origin: string; // país de origen
  location: string; // ubicación física
  price: number | null;
  status: "Disponible" | "Reservado" | "Vendido";
  featured?: boolean;
  pedigree: Pedigree;
  description: string;

  /* Type specific (all optional) */
  conservacion?: Conservacion; // embrión / semen
  dosesAvailable?: number; // semen
  pricePerDose?: number; // semen
  registry?: string; // registro
  height?: string; // alzada (padrote / donadora)
  age?: string;
  results?: string[]; // resultados deportivos
  reproductiveHistory?: string; // historial reproductivo donadora
  gestationDays?: number; // preñez
};

/* ------------------------------------------------------------------ */
/* Premium international lines (carousel)                              */
/* ------------------------------------------------------------------ */

export type PremiumLine = {
  name: string;
  origin: string;
  image: string;
  discipline: string;
  highlight: string;
  blurb: string;
};

export const premiumLines: PremiumLine[] = [
  {
    name: "Chacco Blue",
    origin: "Alemania",
    image: "/genetics/line-chacco.png",
    discipline: "Salto 1.60m",
    highlight: "#1 WBFSH Sire Ranking",
    blurb:
      "El semental de salto más influyente de la última década, padre de campeones olímpicos y de Grand Prix.",
  },
  {
    name: "Cornet Obolensky",
    origin: "Bélgica",
    image: "/genetics/line-cornet.png",
    discipline: "Salto 1.60m",
    highlight: "Línea Olímpica",
    blurb:
      "Sangre Holsteiner moderna con elasticidad, técnica y un temperamento excepcional para la alta competencia.",
  },
  {
    name: "Diamant de Semilly",
    origin: "Francia",
    image: "/genetics/line-diamant.png",
    discipline: "Salto 1.60m",
    highlight: "Campeón del Mundo SF",
    blurb:
      "Pilar del Selle Français, transmite potencia, coraje y un galope de competición inconfundible.",
  },
  {
    name: "Balou du Rouet",
    origin: "Alemania",
    image: "/genetics/line-chacco.png",
    discipline: "Salto 1.55m",
    highlight: "Oldenburg Élite",
    blurb:
      "Reconocido por la calidad de sus productos y una rara combinación de sangre, modelo y rendimiento.",
  },
  {
    name: "Conthargos",
    origin: "Alemania",
    image: "/genetics/line-diamant.png",
    discipline: "Salto 1.55m",
    highlight: "Sangre Contender",
    blurb:
      "Semental moderno que aporta reflejos, cuidado de barras y una excelente transmisión morfológica.",
  },
  {
    name: "Stakkato",
    origin: "Alemania",
    image: "/genetics/line-cornet.png",
    discipline: "Salto 1.60m",
    highlight: "Hannoveriano Legendario",
    blurb:
      "Padre de sementales por excelencia, su descendencia domina los rankings de cría hannoveriana.",
  },
];

/* ------------------------------------------------------------------ */
/* Categories                                                          */
/* ------------------------------------------------------------------ */

export type GeneticCategory = {
  type: GeneticType | "Todos";
  label: string;
  description: string;
};

export const geneticCategories: GeneticCategory[] = [
  {
    type: "Embrión",
    label: "Embriones",
    description: "Cruces de élite listos para transferencia, frescos o congelados.",
  },
  {
    type: "Semen",
    label: "Semen",
    description: "Dosis de sementales internacionales con registro y logística incluida.",
  },
  {
    type: "Padrote",
    label: "Padrotes",
    description: "Sementales aprobados con palmarés deportivo comprobado.",
  },
  {
    type: "Donadora",
    label: "Yeguas Donadoras",
    description: "Vientres de alto índice genético e historial reproductivo.",
  },
  {
    type: "Preñez",
    label: "Preñeces Confirmadas",
    description: "Gestaciones verificadas por ecografía con pedigrí garantizado.",
  },
  {
    type: "Potro",
    label: "Potros por Genética",
    description: "Crías jóvenes seleccionadas por su potencial de salto.",
  },
  {
    type: "Servicio",
    label: "Servicios Reproductivos",
    description: "Transferencia de embriones, ICSI, congelación y asesoría.",
  },
];

/* ------------------------------------------------------------------ */
/* Listings (mock catalogue)                                          */
/* ------------------------------------------------------------------ */

const ped = (
  sire: string,
  dam: string,
  ss: string,
  sd: string,
  ds: string,
  dd: string,
): Pedigree => ({
  sire: { name: sire },
  dam: { name: dam },
  sireSire: { name: ss },
  sireDam: { name: sd },
  damSire: { name: ds },
  damDam: { name: dd },
});

export const geneticListings: GeneticListing[] = [
  {
    id: "embrion-chacco-cornet",
    type: "Embrión",
    name: "Embrión Chacco Blue × Cornet",
    image: "/genetics/embryo.png",
    line: "Chacco Blue",
    breed: "Holsteiner",
    discipline: "Salto",
    origin: "Alemania",
    location: "Rionegro, Antioquia",
    price: 38_000_000,
    status: "Disponible",
    featured: true,
    conservacion: "Congelado",
    description:
      "Embrión de doble línea de salto internacional, congelado y listo para transferencia. Documentación genética completa.",
    pedigree: ped(
      "Chacco Blue",
      "Cornetta",
      "Chambertin",
      "Contara",
      "Cornet Obolensky",
      "Larina",
    ),
  },
  {
    id: "semen-diamant-semilly",
    type: "Semen",
    name: "Diamant de Semilly",
    image: "/genetics/line-diamant.png",
    line: "Diamant de Semilly",
    breed: "Selle Français",
    discipline: "Salto",
    origin: "Francia",
    location: "Importado · Logística nacional",
    price: null,
    pricePerDose: 6_500_000,
    dosesAvailable: 24,
    registry: "SF 94-117",
    conservacion: "Congelado",
    status: "Disponible",
    featured: true,
    description:
      "Dosis de semen congelado del campeón del mundo de sementales Selle Français. Envío en termo de nitrógeno.",
    pedigree: ped(
      "Le Tot de Semilly",
      "Venise des Cresles",
      "Grand Veneur",
      "Petite Mascotte",
      "Elf III",
      "Isatis",
    ),
  },
  {
    id: "padrote-imperio-real",
    type: "Padrote",
    name: "Imperio Real",
    image: "/genetics/line-chacco.png",
    line: "Chacco Blue",
    breed: "Holsteiner",
    discipline: "Salto",
    origin: "Colombia",
    location: "La Ceja, Antioquia",
    price: 420_000_000,
    status: "Disponible",
    featured: true,
    height: "1.70 m",
    age: "8 años",
    registry: "Fedecuestre 0091",
    results: [
      "Campeón Gran Premio 1.50m Bogotá 2024",
      "Top 3 Copa Federación 2023",
    ],
    description:
      "Semental aprobado con descendencia en competencia. Servicio disponible por monta dirigida y colecta.",
    pedigree: ped(
      "Chacco Blue",
      "Reina del Valle",
      "Chambertin",
      "Wanita",
      "Cornet Obolensky",
      "Galana",
    ),
  },
  {
    id: "donadora-estrella-del-sur",
    type: "Donadora",
    name: "Estrella del Sur",
    image: "/genetics/mare.png",
    line: "Cornet Obolensky",
    breed: "BWP",
    discipline: "Salto",
    origin: "Bélgica",
    location: "Rionegro, Antioquia",
    price: 290_000_000,
    status: "Reservado",
    featured: true,
    height: "1.66 m",
    age: "10 años",
    reproductiveHistory: "12 embriones viables · 7 potros nacidos",
    description:
      "Yegua donadora de alto índice, vientre probado con productos en competencia internacional.",
    pedigree: ped(
      "Cornet Obolensky",
      "Bamba van het Eigenlo",
      "Clinton",
      "Rabanna du Bois",
      "Darco",
      "Wendy",
    ),
  },
  {
    id: "preniez-balou-stakkato",
    type: "Preñez",
    name: "Preñez Balou du Rouet × Stakkato",
    image: "/genetics/mare.png",
    line: "Balou du Rouet",
    breed: "Oldenburg",
    discipline: "Salto",
    origin: "Alemania",
    location: "La Ceja, Antioquia",
    price: 72_000_000,
    status: "Disponible",
    gestationDays: 210,
    description:
      "Preñez confirmada por ecografía, receptora sana y certificada. Pedigrí de doble línea de salto.",
    pedigree: ped(
      "Balou du Rouet",
      "Stakkata",
      "Baloubet du Rouet",
      "Georgia",
      "Stakkato",
      "Walesca",
    ),
  },
  {
    id: "potro-conthargos-diamant",
    type: "Potro",
    name: "Potro Conthargos × Diamant",
    image: "/genetics/foal.png",
    line: "Conthargos",
    breed: "Holsteiner",
    discipline: "Salto",
    origin: "Colombia",
    location: "Rionegro, Antioquia",
    price: 95_000_000,
    status: "Disponible",
    age: "1 año",
    height: "1.45 m (proyectada 1.68 m)",
    description:
      "Potro de un año con excelente modelo y mecánica de salto en libertad. Genética doble de Grand Prix.",
    pedigree: ped(
      "Conthargos",
      "Diamantina",
      "Converter",
      "Cynthia",
      "Diamant de Semilly",
      "Roxana",
    ),
  },
  {
    id: "servicio-transferencia-embriones",
    type: "Servicio",
    name: "Programa de Transferencia de Embriones",
    image: "/genetics/embryo.png",
    line: "Servicio Reproductivo",
    breed: "Todas las razas",
    discipline: "Salto",
    origin: "Colombia",
    location: "Centro Reproductivo · Antioquia",
    price: 12_000_000,
    status: "Disponible",
    description:
      "Programa integral: sincronización, colecta, transferencia y seguimiento ecográfico con receptoras propias.",
    pedigree: ped("—", "—", "—", "—", "—", "—"),
  },
  {
    id: "semen-cornet-obolensky",
    type: "Semen",
    name: "Cornet Obolensky",
    image: "/genetics/line-cornet.png",
    line: "Cornet Obolensky",
    breed: "BWP",
    discipline: "Salto",
    origin: "Bélgica",
    location: "Importado · Logística nacional",
    price: null,
    pricePerDose: 7_800_000,
    dosesAvailable: 15,
    registry: "BWP 02-318",
    conservacion: "Congelado",
    status: "Disponible",
    description:
      "Semen congelado de uno de los sementales de salto más cotizados del mundo. Disponibilidad limitada.",
    pedigree: ped(
      "Clinton",
      "Rabanna du Bois",
      "Corrado I",
      "Urte",
      "Randel",
      "Nabanna",
    ),
  },
  {
    id: "embrion-stakkato-diamant",
    type: "Embrión",
    name: "Embrión Stakkato × Diamant",
    image: "/genetics/embryo.png",
    line: "Stakkato",
    breed: "Hannoveriano",
    discipline: "Salto",
    origin: "Alemania",
    location: "La Ceja, Antioquia",
    price: 33_000_000,
    status: "Disponible",
    conservacion: "Fresco",
    description:
      "Embrión fresco de cruce hannoveriano-francés, disponible para transferencia inmediata.",
    pedigree: ped(
      "Stakkato",
      "Diamantina",
      "Spartan",
      "Pia",
      "Diamant de Semilly",
      "Roxana",
    ),
  },
];

/* ------------------------------------------------------------------ */
/* Filter helpers                                                      */
/* ------------------------------------------------------------------ */

export const geneticTypeLabels: Record<GeneticType, string> = {
  Embrión: "Embriones",
  Semen: "Semen",
  Padrote: "Padrotes",
  Donadora: "Donadoras",
  Preñez: "Preñeces",
  Potro: "Potros",
  Servicio: "Servicios",
};

export const formatPrice = (l: GeneticListing): string => {
  if (l.type === "Semen" && l.pricePerDose) {
    return `${formatCOP(l.pricePerDose)} / dosis`;
  }
  return formatCOP(l.price);
};
