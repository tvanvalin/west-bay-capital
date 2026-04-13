import { HeroSection } from "@/components/sections/Hero";
import { LendingCriteriaSection } from "@/components/sections/LendingCriteria";
import { TransactionsSection } from "@/components/sections/Transactions";
import { TestimonialsSection } from "@/components/sections/Testimonials";
import { LoanCalculatorSection } from "@/components/sections/LoanCalculator";
import { TeamPreviewSection } from "@/components/sections/TeamPreview";
import { ContactSection } from "@/components/sections/Contact";
import { JsonLd } from "@/components/JsonLd";

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <HeroSection />
      <LendingCriteriaSection />
      <TransactionsSection />
      <TestimonialsSection />
      <LoanCalculatorSection />
      <TeamPreviewSection />
      <ContactSection />
    </>
  );
}
