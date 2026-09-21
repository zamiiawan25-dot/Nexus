import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStats } from './components/TrustStats';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { FeaturedProperties } from './components/FeaturedProperties';
import { WhyChooseUs } from './components/WhyChooseUs';
import { InvestmentSection } from './components/InvestmentSection';
import { CustomerReviews } from './components/CustomerReviews';
import { CtaSection } from './components/CtaSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  const [selectedRequirement, setSelectedRequirement] = useState<string>('Property Buying');

  const handleSelectServiceForInquiry = (serviceTitle: string) => {
    setSelectedRequirement(serviceTitle);
  };

  const handleSelectPropertyForInquiry = (propertyTitle: string) => {
    setSelectedRequirement(propertyTitle);
  };

  const handleTalkToTeam = () => {
    setSelectedRequirement('Property Investment');
  };

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#18212B] flex flex-col font-sans selection:bg-[#C9A227]/30 selection:text-[#0B1F33]">
      {/* 1. Sticky Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Trust / Statistics Section */}
        <TrustStats />

        {/* 4. About Nexus Estate Services */}
        <AboutSection />

        {/* 5. Property Services */}
        <ServicesSection onSelectServiceForInquiry={handleSelectServiceForInquiry} />

        {/* 6. Featured Properties */}
        <FeaturedProperties onSelectPropertyForInquiry={handleSelectPropertyForInquiry} />

        {/* 7. Why Choose Us */}
        <WhyChooseUs />

        {/* 8. Property Investment Section */}
        <InvestmentSection onTalkToTeam={handleTalkToTeam} />

        {/* 9. Customer Reviews */}
        <CustomerReviews />

        {/* 10. Call-To-Action Section */}
        <CtaSection />

        {/* 11. Contact Section */}
        <ContactSection initialRequirement={selectedRequirement} />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* Floating Action Buttons (Phone & WhatsApp Quick Link) */}
      <FloatingActions />
    </div>
  );
}
