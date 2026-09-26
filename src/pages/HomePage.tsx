import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { CategorySection } from '../components/home/CategorySection';
import { FeaturedProductsSection } from '../components/home/FeaturedProductsSection';
import { WhyChooseSection } from '../components/home/WhyChooseSection';
import { PersonalizedCreationsSection } from '../components/home/PersonalizedCreationsSection';
import { BusinessCorporateSection } from '../components/home/BusinessCorporateSection';
import { HowItWorksSection } from '../components/home/HowItWorksSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { InstagramShowcaseSection } from '../components/home/InstagramShowcaseSection';
import { BulkOrderCTASection } from '../components/home/BulkOrderCTASection';
import { FAQSection } from '../components/home/FAQSection';
import { FinalCTASection } from '../components/home/FinalCTASection';

export const HomePage: React.FC = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <CategorySection />
      <FeaturedProductsSection />
      <WhyChooseSection />
      <PersonalizedCreationsSection />
      <BusinessCorporateSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <InstagramShowcaseSection />
      <BulkOrderCTASection />
      <FAQSection />
      <FinalCTASection />
    </div>
  );
};
