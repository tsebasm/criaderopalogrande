import { formatCOP } from "@/lib/horses";

export { formatCOP };

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

export type GeneticType = "Embrión" | "Donadora" | "Semen" | "Potro";

/** Modalidades (andares) del Caballo Criollo Colombiano. */
export type Andar =
  | "Trocha Pura (P3)"
  | "Trocha y Galope (P2)"
  | "Paso Fino Colombiano (P4)"
  | "Trote y Galope (P1)"
  | "Paseo";

export type Conservacion = "Fresco" | "Congelado" | "Refrigerado";

export const RAZA = "Caballo Criollo Colombiano";

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
  /** Línea / familia genética. */
  line: string;
  raza: string;
  andar: Andar;
  birthDate: string; // fecha de nacimiento
  sex: "Macho" | "Hembra";
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
  registry?: string; // registro Fedequinas
  height?: string; // alzada
  reproductiveHistory?: string; // historial reproductivo donadora
  results?: string[]; // premios / resultados
};

/* ------------------------------------------------------------------ */
/* Reproductores destacados (carousel · saltos de reproductores)       */
/* ------------------------------------------------------------------ */

export type PremiumLine = {
  name: string;
  andar: string;
  image: string;
  highlight: string;
  pricePerDose: number;
  blurb: string;
};

export const premiumLines: PremiumLine[] = [
  {
    name: "Greco del Trébol",
    andar: "Trocha Pura (P3)",
    image: "/genetics/repro-greco.png",
    highlight: "Reproductor Élite",
    pricePerDose: 2_000_000,
    blurb:
      "Semental de Trocha Pura con descendencia campeona. Salto disponible en fresco y congelado con registro Fedequinas.",
  },
  {
    name: "Ilusionista de Villa Laura",
    andar: "Trocha Pura (P3)",
    image: "/genetics/repro-ilusionista.png",
    highlight: "Servicio Reproductivo",
    pricePerDose: 800_000,
    blurb:
      "Línea Villa Laura, reconocida por la finura del andar y la transmisión de aplomos y temperamento dócil.",
  },
  {
    name: "Aurelio M de las Bermudas",
    andar: "Trocha Pura (P3)",
    image: "/genetics/repro-aurelio.png",
    highlight: "Servicio Reproductivo",
    pricePerDose: 600_000,
    blurb:
      "Reproductor de gran prepotencia, aporta brío, recogimiento y una notable calidad de movimiento a su progenie.",
  },
  {
    name: "Comanche",
    andar: "Paseo",
    image: "/genetics/repro-comanche.png",
    highlight: "Servicio Reproductivo",
    pricePerDose: 600_000,
    blurb:
      "Semental de paseo con morfología sobresaliente y un carácter equilibrado ideal para cría de pie de cría.",
  },
];

/* ------------------------------------------------------------------ */
/* Categories                                                          */
/* ------------------------------------------------------------------ */

export type GeneticCategory = {
  type: GeneticType;
  label: string;
  description: string;
};

export const geneticCategories: GeneticCategory[] = [
  {
    type: "Embrión",
    label: "Embriones",
    description:
      "Embriones de cruces seleccionados, listos para transferencia, frescos o congelados.",
  },
  {
    type: "Donadora",
    label: "Donantes",
    description:
      "Yeguas donadoras de alto índice genético con historial reproductivo comprobado.",
  },
  {
    type: "Semen",
    label: "Saltos de Reproductores",
    description:
      "Dosis y servicios reproductivos de sementales aprobados con registro Fedequinas.",
  },
  {
    type: "Potro",
    label: "Potros & Potrancas",
    description:
      "Crías jóvenes seleccionadas por su andar, modelo y potencial deportivo.",
  },
];

/* ------------------------------------------------------------------ */
/* Listings (catálogo · datos adaptados de Criadero Palonegro)         */
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
  /* ---------------------------- Embriones --------------------------- */
  {
    id: "embrion-excesiva-de-las-diosas",
    type: "Embrión",
    name: "Excesiva de las Diosas / Embrión",
    image: "/genetics/mare-3.png",
    line: "Las Diosas",
    raza: RAZA,
    andar: "Trocha Pura (P3)",
    birthDate: "30 de julio de 2023",
    sex: "Hembra",
    location: "Criadero Palonegro · Colombia",
    price: 80_000_000,
    status: "Disponible",
    featured: true,
    conservacion: "Congelado",
    description:
      "Embrión de Trocha Pura de la reconocida línea Las Diosas. Vientre de máxima jerarquía con genética campeona, listo para transferencia.",
    pedigree: ped(
      "Sortario de la Esmeralda",
      "Diosa de las Majadas",
      "Resorte IV",
      "Pincelada del Sur",
      "Capuchino",
      "Excelsa de las Diosas",
    ),
  },
  {
    id: "embrion-tijuana-de-las-majadas",
    type: "Embrión",
    name: "Tijuana de las Majadas / Embrión",
    image: "/genetics/mare.png",
    line: "Las Majadas",
    raza: RAZA,
    andar: "Trocha Pura (P3)",
    birthDate: "29 de agosto de 2022",
    sex: "Hembra",
    location: "Criadero Palonegro · Colombia",
    price: 30_000_000,
    status: "Disponible",
    featured: true,
    conservacion: "Congelado",
    description:
      "Embrión de Trocha Pura, hija de la línea Las Majadas. Excelente finura de andar y aplomos correctos.",
    pedigree: ped(
      "Gran Señor de la 14",
      "Majada del Café",
      "Terremoto de Manizales",
      "Cascabela",
      "Conquistador",
      "Mansión de las Majadas",
    ),
  },
  {
    id: "embrion-tirana-de-palonegro",
    type: "Embrión",
    name: "Tirana de Palonegro / Embrión",
    image: "/genetics/mare-2.png",
    line: "Palonegro",
    raza: RAZA,
    andar: "Trocha y Galope (P2)",
    birthDate: "10 de octubre de 2022",
    sex: "Hembra",
    location: "Criadero Palonegro · Colombia",
    price: 25_000_000,
    status: "Disponible",
    conservacion: "Fresco",
    description:
      "Embrión de Trocha y Galope de la casa Palonegro. Genética de doble propósito con gran despliegue y energía.",
    pedigree: ped(
      "Vendaval de Palonegro",
      "Reina de Palonegro",
      "Embrujo de Palonegro",
      "Gardenia",
      "Sultán del Café",
      "Tirana Vieja",
    ),
  },

  /* ---------------------------- Donantes ---------------------------- */
  {
    id: "donante-excesiva-de-las-diosas",
    type: "Donadora",
    name: "Excesiva de las Diosas",
    image: "/genetics/mare-3.png",
    line: "Las Diosas",
    raza: RAZA,
    andar: "Trocha Pura (P3)",
    birthDate: "30 de julio de 2016",
    sex: "Hembra",
    location: "Criadero Palonegro · Colombia",
    price: 80_000_000,
    status: "Disponible",
    featured: true,
    height: "1.46 m",
    registry: "Fedequinas 18-4421",
    reproductiveHistory: "9 embriones viables · 6 productos en pista",
    results: ["Gran Campeona Trocha Pura 2022", "Mejor Andar Manizales 2021"],
    description:
      "Yegua donadora insignia de la línea Las Diosas. Vientre probado con productos campeones y finura de andar excepcional.",
    pedigree: ped(
      "Sortario de la Esmeralda",
      "Diosa de las Majadas",
      "Resorte IV",
      "Pincelada del Sur",
      "Capuchino",
      "Excelsa de las Diosas",
    ),
  },
  {
    id: "donante-dulce-bendicion-villa-gloria",
    type: "Donadora",
    name: "Dulce Bendición de Villa Gloria",
    image: "/genetics/mare.png",
    line: "Villa Gloria",
    raza: RAZA,
    andar: "Paso Fino Colombiano (P4)",
    birthDate: "04 de octubre de 2017",
    sex: "Hembra",
    location: "Criadero Palonegro · Colombia",
    price: 80_000_000,
    status: "Disponible",
    featured: true,
    height: "1.44 m",
    registry: "Fedequinas 19-7782",
    reproductiveHistory: "11 embriones viables · 8 productos nacidos",
    results: ["Campeona Paso Fino 2023", "Reservada Gran Campeona 2022"],
    description:
      "Donadora de Paso Fino Colombiano de la casa Villa Gloria. Andar fino y acompasado, de gran reputación reproductiva.",
    pedigree: ped(
      "Dulce Sueño de Villa Gloria",
      "Bendición del Norte",
      "Capuchino",
      "Aurora de Villa Gloria",
      "Sereno",
      "Gloria Eterna",
    ),
  },
  {
    id: "donante-tijuana-de-las-majadas",
    type: "Donadora",
    name: "Tijuana de las Majadas",
    image: "/genetics/mare-2.png",
    line: "Las Majadas",
    raza: RAZA,
    andar: "Trocha Pura (P3)",
    birthDate: "29 de agosto de 2015",
    sex: "Hembra",
    location: "Criadero Palonegro · Colombia",
    price: 40_000_000,
    status: "Disponible",
    height: "1.45 m",
    registry: "Fedequinas 16-3310",
    reproductiveHistory: "7 embriones viables · 5 productos en pista",
    results: ["Top 5 Trocha Pura Medellín 2020"],
    description:
      "Vientre de la línea Las Majadas, reconocido por transmitir finura de andar y excelente disposición.",
    pedigree: ped(
      "Gran Señor de la 14",
      "Majada del Café",
      "Terremoto de Manizales",
      "Cascabela",
      "Conquistador",
      "Mansión de las Majadas",
    ),
  },
  {
    id: "donante-almendra-fg",
    type: "Donadora",
    name: "Almendra de F.G",
    image: "/genetics/mare-3.png",
    line: "F.G",
    raza: RAZA,
    andar: "Trocha Pura (P3)",
    birthDate: "20 de junio de 2016",
    sex: "Hembra",
    location: "Criadero Palonegro · Colombia",
    price: 35_000_000,
    status: "Disponible",
    height: "1.43 m",
    registry: "Fedequinas 17-9054",
    reproductiveHistory: "6 embriones viables · 4 productos nacidos",
    description:
      "Donadora de Trocha Pura de la línea F.G, con destacada morfología y un andar limpio y sostenido.",
    pedigree: ped(
      "Faraón de F.G",
      "Gladiola",
      "Sultán del Café",
      "Almendra Vieja",
      "Resorte IV",
      "Gardenia de F.G",
    ),
  },
  {
    id: "donante-tirana-de-palonegro",
    type: "Donadora",
    name: "Tirana de Palonegro",
    image: "/genetics/mare.png",
    line: "Palonegro",
    raza: RAZA,
    andar: "Trocha y Galope (P2)",
    birthDate: "10 de octubre de 2015",
    sex: "Hembra",
    location: "Criadero Palonegro · Colombia",
    price: 35_000_000,
    status: "Disponible",
    height: "1.47 m",
    registry: "Fedequinas 16-2218",
    reproductiveHistory: "8 embriones viables · 6 productos en pista",
    results: ["Campeona Trocha y Galope 2021"],
    description:
      "Yegua donadora de la casa Palonegro en la modalidad de Trocha y Galope. Gran energía, despliegue y prepotencia.",
    pedigree: ped(
      "Vendaval de Palonegro",
      "Reina de Palonegro",
      "Embrujo de Palonegro",
      "Gardenia",
      "Sultán del Café",
      "Tirana Vieja",
    ),
  },
  {
    id: "donante-replica-villa-maria",
    type: "Donadora",
    name: "Réplica de Villa María",
    image: "/genetics/mare-2.png",
    line: "Villa María",
    raza: RAZA,
    andar: "Trote y Galope (P1)",
    birthDate: "08 de octubre de 2016",
    sex: "Hembra",
    location: "Criadero Palonegro · Colombia",
    price: 30_000_000,
    status: "Disponible",
    height: "1.48 m",
    registry: "Fedequinas 17-5566",
    reproductiveHistory: "5 embriones viables · 3 productos nacidos",
    description:
      "Donadora de Trote y Galope de la línea Villa María, de gran alzada y movimientos amplios y elásticos.",
    pedigree: ped(
      "Magnífico de Villa María",
      "Réplica Vieja",
      "Centurión",
      "María del Campo",
      "Soberano",
      "Brisa de Villa María",
    ),
  },

  /* --------------------- Saltos de reproductores -------------------- */
  {
    id: "semen-greco-del-trebol",
    type: "Semen",
    name: "Greco del Trébol",
    image: "/genetics/repro-greco.png",
    line: "El Trébol",
    raza: RAZA,
    andar: "Trocha Pura (P3)",
    birthDate: "22 de junio de 2014",
    sex: "Macho",
    location: "Criadero Palonegro · Colombia",
    price: null,
    pricePerDose: 2_000_000,
    dosesAvailable: 30,
    registry: "Fedequinas 15-1180",
    conservacion: "Congelado",
    status: "Disponible",
    featured: true,
    height: "1.48 m",
    results: ["Gran Campeón Trocha Pura", "Padre de campeones nacionales"],
    description:
      "Salto reproductivo del semental Greco del Trébol. Trocha Pura con descendencia campeona, disponible en fresco y congelado.",
    pedigree: ped(
      "Resorte IV de Hatoviejo",
      "Esmeralda del Trébol",
      "Resorte III",
      "Capuchina",
      "Terremoto de Manizales",
      "Trébol Real",
    ),
  },
  {
    id: "semen-ilusionista-villa-laura",
    type: "Semen",
    name: "Ilusionista de Villa Laura / Servicio Reproductivo",
    image: "/genetics/repro-ilusionista.png",
    line: "Villa Laura",
    raza: RAZA,
    andar: "Trocha Pura (P3)",
    birthDate: "09 de mayo de 2016",
    sex: "Macho",
    location: "Criadero Palonegro · Colombia",
    price: null,
    pricePerDose: 800_000,
    dosesAvailable: 40,
    registry: "Fedequinas 17-6642",
    conservacion: "Fresco",
    status: "Disponible",
    height: "1.46 m",
    description:
      "Servicio reproductivo (semen) del semental Ilusionista de Villa Laura. Finura de andar y temperamento dócil.",
    pedigree: ped(
      "Embrujo de Villa Laura",
      "Ilusión del Norte",
      "Capuchino",
      "Laura del Café",
      "Sereno",
      "Villa Laura Vieja",
    ),
  },
  {
    id: "semen-aurelio-m-bermudas",
    type: "Semen",
    name: "Aurelio M de las Bermudas / Servicio Reproductivo",
    image: "/genetics/repro-aurelio.png",
    line: "Las Bermudas",
    raza: RAZA,
    andar: "Trocha Pura (P3)",
    birthDate: "10 de febrero de 2015",
    sex: "Macho",
    location: "Criadero Palonegro · Colombia",
    price: null,
    pricePerDose: 600_000,
    dosesAvailable: 35,
    registry: "Fedequinas 16-4471",
    conservacion: "Fresco",
    status: "Disponible",
    height: "1.45 m",
    description:
      "Servicio reproductivo (semen) del semental Aurelio M de las Bermudas. Gran prepotencia, brío y recogimiento.",
    pedigree: ped(
      "Mandamás de las Bermudas",
      "Aurelia del Mar",
      "Conquistador",
      "Bermuda Real",
      "Capuchino",
      "Mar de las Bermudas",
    ),
  },
  {
    id: "semen-comanche",
    type: "Semen",
    name: "Comanche / Servicio Reproductivo",
    image: "/genetics/repro-comanche.png",
    line: "Comanche",
    raza: RAZA,
    andar: "Paseo",
    birthDate: "01 de enero de 2015",
    sex: "Macho",
    location: "Criadero Palonegro · Colombia",
    price: null,
    pricePerDose: 600_000,
    dosesAvailable: 25,
    registry: "Fedequinas 15-9928",
    conservacion: "Fresco",
    status: "Disponible",
    height: "1.50 m",
    description:
      "Servicio reproductivo (semen) del semental Comanche, modalidad de paseo. Morfología sobresaliente y carácter equilibrado.",
    pedigree: ped(
      "Jefe Comanche",
      "Pradera del Llano",
      "Soberano",
      "Comanche Vieja",
      "Magnífico",
      "Llanura del Sur",
    ),
  },

  /* ------------------------- Potros & Potrancas --------------------- */
  {
    id: "potro-tahur-de-las-diosas",
    type: "Potro",
    name: "Tahúr de las Diosas",
    image: "/genetics/foal.png",
    line: "Las Diosas",
    raza: RAZA,
    andar: "Trocha Pura (P3)",
    birthDate: "3 de agosto de 2024",
    sex: "Macho",
    location: "Criadero Palonegro · Colombia",
    price: null,
    status: "Disponible",
    height: "1.20 m (en crecimiento)",
    description:
      "Potro de Trocha Pura de la línea Las Diosas. Excelente modelo y andar prometedor desde temprana edad. Precio a consultar.",
    pedigree: ped(
      "Greco del Trébol",
      "Excesiva de las Diosas",
      "Resorte IV de Hatoviejo",
      "Esmeralda del Trébol",
      "Sortario de la Esmeralda",
      "Diosa de las Majadas",
    ),
  },
];

/* ------------------------------------------------------------------ */
/* Filter helpers                                                      */
/* ------------------------------------------------------------------ */

export const geneticTypeLabels: Record<GeneticType, string> = {
  Embrión: "Embriones",
  Donadora: "Donantes",
  Semen: "Saltos de Reproductores",
  Potro: "Potros & Potrancas",
};

export const andares: Andar[] = [
  "Trocha Pura (P3)",
  "Trocha y Galope (P2)",
  "Paso Fino Colombiano (P4)",
  "Trote y Galope (P1)",
  "Paseo",
];

export const formatPrice = (l: GeneticListing): string => {
  if (l.type === "Semen" && l.pricePerDose) {
    return `${formatCOP(l.pricePerDose)} / dosis`;
  }
  return formatCOP(l.price);
};
