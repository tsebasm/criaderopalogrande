import { createFileRoute } from "@tanstack/react-router";
import { Navigation } from "@/components/landing/Navigation";
import { Hero } from "@/components/landing/Hero";
import { Legacy } from "@/components/landing/Legacy";
import { Genetics } from "@/components/landing/Genetics";
import { Marketplace } from "@/components/landing/Marketplace";
import { Experience } from "@/components/landing/Experience";
import { Transport } from "@/components/landing/Transport";
import { Process } from "@/components/landing/Process";
import { Testimonials } from "@/components/landing/Testimonials";
import { Booking } from "@/components/landing/Booking";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Criadero Palonegro — Caballo Criollo Colombiano de Élite" },
      {
        name: "description",
        content:
          "Criadero premium de Caballo Criollo Colombiano en Antioquia. Ejemplares disponibles, genética de élite, transporte nacional y agendamiento de visitas.",
      },
      { property: "og:title", content: "Criadero Palonegro — Caballo Criollo Colombiano" },
      {
        property: "og:description",
        content: "Donde la genética, la tradición y la excelencia cabalgan juntas.",
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="bg-ivory text-charcoal">
      <Navigation />
      <main>
        <Hero />
        <Legacy />
        <Genetics />
        <Marketplace />
        <Experience />
        <Transport />
        <Process />
        <Testimonials />
        <Booking />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
