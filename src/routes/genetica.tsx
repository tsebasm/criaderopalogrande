import { createFileRoute } from "@tanstack/react-router";
import { Navigation } from "@/components/landing/Navigation";
import { Footer } from "@/components/landing/Footer";
import { GeneticsHero } from "@/components/genetics/GeneticsHero";
import { PremiumLines } from "@/components/genetics/PremiumLines";
import { GeneticsCategories } from "@/components/genetics/GeneticsCategories";
import { GeneticsMarketplace } from "@/components/genetics/GeneticsMarketplace";
import { PublishGeneticsForm } from "@/components/genetics/PublishGeneticsForm";

export const Route = createFileRoute("/genetica")({
  component: GeneticaPage,
});

function GeneticaPage() {
  return (
    <div className="bg-ivory text-charcoal">
      <Navigation />
      <main>
        <GeneticsHero />
        <PremiumLines />
        <GeneticsCategories />
        <GeneticsMarketplace />
        <PublishGeneticsForm />
      </main>
      <Footer />
    </div>
  );
}
