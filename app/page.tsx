import { Header } from '@/components/header';
import { HeroSection } from '@/components/sections/hero-section';
import { TrustedBySection } from '@/components/sections/trusted-by-section';
import { ServicesSection } from '@/components/sections/services-section';
import { ProductsSection } from '@/components/sections/products-section';
import { WorkflowSection } from '@/components/sections/workflow-section';
import { PortfolioSection } from '@/components/sections/portfolio-section';
import { PricingSection } from '@/components/sections/pricing-section';
import { FAQSection } from '@/components/sections/faq-section';
import { CTASection } from '@/components/sections/cta-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TrustedBySection />
        <ServicesSection />
        <ProductsSection />
        <WorkflowSection />
        <PortfolioSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
