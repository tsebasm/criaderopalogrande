import type { Pedigree } from "@/lib/genetics";

type Variant = "light" | "dark";

type PedigreeTreeProps = {
  subject: string;
  pedigree: Pedigree;
  variant?: Variant;
};

/**
 * Reusable three–generation pedigree tree.
 * Generation 0 = subject, 1 = parents, 2 = grandparents.
 * Responsive: stacks into a vertical lineage on small screens and
 * expands into a horizontal bracket layout from `md` upwards.
 */
export function PedigreeTree({
  subject,
  pedigree,
  variant = "light",
}: PedigreeTreeProps) {
  const dark = variant === "dark";

  const palette = dark
    ? {
        line: "bg-ivory/20",
        subjectBox: "bg-gold text-charcoal",
        parentBox: "bg-olive/40 border border-gold/25 text-ivory",
        gpBox: "bg-ivory/[0.04] border border-ivory/12 text-ivory",
        tag: "text-gold-soft",
        gpTag: "text-ivory/45",
        note: "text-gold-soft",
      }
    : {
        line: "bg-charcoal/15",
        subjectBox: "bg-olive text-ivory",
        parentBox: "bg-beige border border-leather/20 text-olive-deep",
        gpBox: "bg-ivory border border-charcoal/12 text-olive-deep",
        tag: "text-leather",
        gpTag: "text-charcoal/45",
        note: "text-leather",
      };

  return (
    <div className="w-full">
      {/* Mobile: vertical lineage */}
      <div className="md:hidden flex flex-col gap-3">
        <Box
          tag="Ejemplar"
          name={subject}
          className={palette.subjectBox}
          tagClass={dark ? "text-charcoal/70" : "text-ivory/70"}
        />
        <Branch label="Línea Paterna" lineClass={palette.line} tagClass={palette.gpTag}>
          <Box tag="Padre" name={pedigree.sire.name} note={pedigree.sire.note} className={palette.parentBox} tagClass={palette.tag} noteClass={palette.note} />
          <Box tag="Abuelo Paterno" name={pedigree.sireSire.name} className={palette.gpBox} tagClass={palette.gpTag} noteClass={palette.note} />
          <Box tag="Abuela Paterna" name={pedigree.sireDam.name} className={palette.gpBox} tagClass={palette.gpTag} noteClass={palette.note} />
        </Branch>
        <Branch label="Línea Materna" lineClass={palette.line} tagClass={palette.gpTag}>
          <Box tag="Madre" name={pedigree.dam.name} note={pedigree.dam.note} className={palette.parentBox} tagClass={palette.tag} noteClass={palette.note} />
          <Box tag="Abuelo Materno" name={pedigree.damSire.name} className={palette.gpBox} tagClass={palette.gpTag} noteClass={palette.note} />
          <Box tag="Abuela Materna" name={pedigree.damDam.name} className={palette.gpBox} tagClass={palette.gpTag} noteClass={palette.note} />
        </Branch>
      </div>

      {/* Desktop: 3-column bracket */}
      <div className="hidden md:grid grid-cols-[1.1fr_1fr_1fr] gap-x-6 items-stretch">
        {/* Gen 0 — subject */}
        <div className="flex flex-col justify-center">
          <Box
            tag="Ejemplar"
            name={subject}
            className={palette.subjectBox}
            tagClass={dark ? "text-charcoal/70" : "text-ivory/70"}
            large
          />
        </div>

        {/* Gen 1 — parents */}
        <div className="flex flex-col justify-center gap-6">
          <Connector lineClass={palette.line}>
            <Box tag="Padre" name={pedigree.sire.name} note={pedigree.sire.note} className={palette.parentBox} tagClass={palette.tag} noteClass={palette.note} />
          </Connector>
          <Connector lineClass={palette.line}>
            <Box tag="Madre" name={pedigree.dam.name} note={pedigree.dam.note} className={palette.parentBox} tagClass={palette.tag} noteClass={palette.note} />
          </Connector>
        </div>

        {/* Gen 2 — grandparents */}
        <div className="flex flex-col justify-center gap-3">
          <Connector lineClass={palette.line}>
            <Box tag="Abuelo Paterno" name={pedigree.sireSire.name} className={palette.gpBox} tagClass={palette.gpTag} noteClass={palette.note} />
          </Connector>
          <Connector lineClass={palette.line}>
            <Box tag="Abuela Paterna" name={pedigree.sireDam.name} className={palette.gpBox} tagClass={palette.gpTag} noteClass={palette.note} />
          </Connector>
          <Connector lineClass={palette.line}>
            <Box tag="Abuelo Materno" name={pedigree.damSire.name} className={palette.gpBox} tagClass={palette.gpTag} noteClass={palette.note} />
          </Connector>
          <Connector lineClass={palette.line}>
            <Box tag="Abuela Materna" name={pedigree.damDam.name} className={palette.gpBox} tagClass={palette.gpTag} noteClass={palette.note} />
          </Connector>
        </div>
      </div>
    </div>
  );
}

function Box({
  tag,
  name,
  note,
  className,
  tagClass,
  noteClass,
  large,
}: {
  tag: string;
  name: string;
  note?: string;
  className: string;
  tagClass: string;
  noteClass?: string;
  large?: boolean;
}) {
  return (
    <div className={`${className} px-4 py-3`}>
      <div className={`text-[8px] tracking-[0.28em] uppercase mb-1.5 ${tagClass}`}>
        {tag}
      </div>
      <div className={`font-serif leading-tight ${large ? "text-2xl lg:text-3xl" : "text-base"}`}>
        {name}
      </div>
      {note && <div className={`text-[10px] italic mt-1 ${noteClass ?? ""}`}>{note}</div>}
    </div>
  );
}

function Connector({
  children,
  lineClass,
}: {
  children: React.ReactNode;
  lineClass: string;
}) {
  return (
    <div className="relative flex items-center">
      <span className={`hidden md:block h-px w-6 -ml-6 shrink-0 ${lineClass}`} aria-hidden />
      <div className="flex-1">{children}</div>
    </div>
  );
}

function Branch({
  label,
  children,
  lineClass,
  tagClass,
}: {
  label: string;
  children: React.ReactNode;
  lineClass: string;
  tagClass: string;
}) {
  return (
    <div className="relative pl-4">
      <span className={`absolute left-0 top-0 bottom-0 w-px ${lineClass}`} aria-hidden />
      <div className={`text-[8px] tracking-[0.28em] uppercase mb-2 ${tagClass}`}>
        {label}
      </div>
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );
}
