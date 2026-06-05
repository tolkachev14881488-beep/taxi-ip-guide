import { getProductPrice } from "@/lib/bepaid";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PainPoints } from "@/components/PainPoints";
import { Benefits } from "@/components/Benefits";
import { HowItWorks } from "@/components/HowItWorks";
import { SocialProof } from "@/components/SocialProof";
import { Pricing, MobileStickyCTA } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  const { display: priceDisplay } = getProductPrice();

  return (
    <div className="min-h-screen bg-[var(--background)] pb-[4.25rem] lg:pb-0">
      <Header />
      <main>
        <Hero priceDisplay={priceDisplay} />
        <PainPoints />
        <Benefits />
        <HowItWorks />
        <SocialProof />
        <Pricing priceDisplay={priceDisplay} />
        <FAQ />
        <FinalCTA priceDisplay={priceDisplay} />
      </main>
      <Footer />
      <MobileStickyCTA priceDisplay={priceDisplay} />
    </div>
  );
}
