import { getProductPrice } from "@/lib/bepaid";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { HowItWorks } from "@/components/HowItWorks";
import { Pricing, MobileStickyCTA } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  const { display: priceDisplay } = getProductPrice();

  return (
    <div className="gradient-bg min-h-screen pb-24 sm:pb-0">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <HowItWorks />
        <Pricing priceDisplay={priceDisplay} />
        <FAQ />
      </main>
      <Footer />
      <MobileStickyCTA priceDisplay={priceDisplay} />
    </div>
  );
}
