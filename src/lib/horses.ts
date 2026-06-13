import horse1 from "@/assets/horse-1.jpg";
import horse2 from "@/assets/horse-2.jpg";
import horse3 from "@/assets/horse-3.jpg";
import horse4 from "@/assets/horse-4.jpg";
import horse5 from "@/assets/horse-5.jpg";
import horse6 from "@/assets/horse-6.jpg";

export type Andar =
  | "Paso Fino"
  | "Trocha"
  | "Trocha y Galope"
  | "Trote y Galope";

export type Categoria =
  | "Reproductor"
  | "Yegua"
  | "Potro"
  | "Potranca"
  | "Embrión";

export type Horse = {
  id: string;
  name: string;
  image: string;
  andar: Andar;
  age: string;
  sex: "Macho" | "Hembra";
  category: Categoria;
  lineage: string;
  price: number | null;
  status: "Disponible" | "Reservado" | "Vendido";
  featured?: boolean;
  awards?: string[];
};

export const horses: Horse[] = [
  {
    id: "insignia-de-la-noche",
    name: "Insignia de la Noche",
    image: horse1,
    andar: "Trocha",
    age: "4 años",
    sex: "Macho",
    category: "Reproductor",
    lineage: "Relicario × Pincelada del Sur",
    price: 145_000_000,
    status: "Disponible",
    featured: true,
    awards: ["Gran Campeón Medellín 2024", "Top 5 Manizalez 2023"],
  },
  {
    id: "amanecer-llanero",
    name: "Amanecer Llanero",
    image: horse2,
    andar: "Paso Fino",
    age: "3 años",
    sex: "Hembra",
    category: "Yegua",
    lineage: "Dulce Sueño × Aurora",
    price: 92_000_000,
    status: "Disponible",
    featured: true,
    awards: ["Reservada Gran Campeona 2024"],
  },
  {
    id: "diamante-gris",
    name: "Diamante Gris",
    image: horse3,
    andar: "Trote y Galope",
    age: "5 años",
    sex: "Macho",
    category: "Reproductor",
    lineage: "Favorito de Palo × Luna",
    price: 220_000_000,
    status: "Reservado",
    featured: true,
    awards: ["Tres veces Campeón Nacional"],
  },
  {
    id: "sol-de-oriente",
    name: "Sol de Oriente",
    image: horse4,
    andar: "Trocha y Galope",
    age: "1 año",
    sex: "Macho",
    category: "Potro",
    lineage: "Magnífico × Brisa de Oro",
    price: 48_000_000,
    status: "Disponible",
  },
  {
    id: "obsidiana",
    name: "Obsidiana",
    image: horse5,
    andar: "Paso Fino",
    age: "6 años",
    sex: "Macho",
    category: "Reproductor",
    lineage: "Centurión × Noche Oscura",
    price: 310_000_000,
    status: "Disponible",
    awards: ["Padre de 3 Grandes Campeones"],
  },
  {
    id: "perla-del-valle",
    name: "Perla del Valle",
    image: horse6,
    andar: "Trocha",
    age: "2 años",
    sex: "Hembra",
    category: "Potranca",
    lineage: "Soberano × Aurora",
    price: 75_000_000,
    status: "Disponible",
  },
];

export const formatCOP = (value: number | null) => {
  if (value === null) return "Consultar";
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(value);
};
