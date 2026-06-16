export function Footer() {
  return (
    <footer className="bg-olive-deep text-ivory pt-24 pb-10">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 pb-20">
          <div className="lg:col-span-5">
            <div className="font-serif text-3xl tracking-wider mb-3">PALONEGRO</div>
            <div className="eyebrow text-gold-soft mb-8">
              Criadero · Antioquia · desde 1989
            </div>
            <p className="text-ivory/55 leading-relaxed max-w-md">
              Preservando la pureza del Caballo Criollo Colombiano bajo los
              estándares más exigentes de bienestar animal, genética de élite y
              servicio premium.
            </p>
            <div className="mt-10 flex gap-3">
              {["IG", "FB", "YT", "TT"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="size-10 grid place-items-center border border-ivory/20 text-xs hover:border-gold hover:text-gold transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          <FooterCol
            title="Catálogo"
            items={["Reproductores", "Yeguas Donantes", "Potros & Potrancas", "Embriones", "Vendidos"]}
          />
          <FooterCol
            title="Criadero"
            items={["Nuestra Historia", "Genética", "Hacienda", "Veterinaria", "Contacto"]}
          />
          <FooterCol
            title="Servicios"
            items={["Transporte Nacional", "Exportación", "Asesoría Genética", "Financiación", "FAQ"]}
          />
        </div>

        <div className="pt-10 border-t border-ivory/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[10px] tracking-[0.3em] uppercase text-ivory/40">
          <p>© {new Date().getFullYear()} Sebastián Triana · Todos los derechos reservados</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold-soft">Privacidad</a>
            <a href="#" className="hover:text-gold-soft">Términos</a>
            <a href="#" className="hover:text-gold-soft">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="lg:col-span-2">
      <div className="text-[10px] tracking-[0.3em] uppercase text-gold-soft font-semibold mb-6">
        {title}
      </div>
      <ul className="space-y-3 text-sm text-ivory/70">
        {items.map((i) => (
          <li key={i}>
            <a href="#" className="hover:text-gold-soft transition-colors">{i}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
