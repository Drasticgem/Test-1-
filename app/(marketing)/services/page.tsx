import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesGridSection } from "@/components/sections/ServicesGridSection";
import { CTA } from "@/components/sections/CTA";
import { services } from "@/lib/data/services";
import { BUSINESS } from "@/lib/constants";

export default function ServicesPage() {
  return (
    <>
      <HeroSection
        eyebrow="What we do"
        title="Plumbing, drain, and water-heater work — done right."
        subtitle={`Residential and light commercial plumbing across Corpus Christi and the Coastal Bend. Same-day appointments, written prices, and a real tech on call 24/7.`}
        primaryCtaLabel="Get a free estimate"
        primaryCtaHref="/contact"
        secondaryCtaLabel={`Call ${BUSINESS.phoneDisplay}`}
        secondaryCtaHref={BUSINESS.phoneHref}
      />
      <ServicesGridSection
        eyebrow="Services"
        heading="Eight things we do every week."
        description="If it's not listed, ask us. There's a good chance we've done it before — and there's a written price either way."
        items={services}
      />
      <CTA />
    </>
  );
}
