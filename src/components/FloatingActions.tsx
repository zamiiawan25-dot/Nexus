import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';

export const FloatingActions: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const whatsappUrl = `https://wa.me/923008553363?text=${encodeURIComponent(
    'Hello Nexus Estate Services & Builder, I would like to inquire regarding real estate in Islamabad.'
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-[#0B1F33] text-white border border-[#C9A227]/40 shadow-lg flex items-center justify-center hover:bg-[#C9A227] hover:text-[#0B1F33] transition-all duration-200"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* WhatsApp Quick Link */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-[#25D366] text-white shadow-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-transform duration-200 border-2 border-white"
        aria-label="Chat with Nexus Estate Services on WhatsApp"
        title="WhatsApp Nexus Estate"
      >
        <MessageCircle className="w-6 h-6 fill-white text-[#25D366]" />
      </a>

      {/* Direct Phone Call Quick Trigger */}
      <a
        href={`tel:${BUSINESS_INFO.phone}`}
        className="w-12 h-12 rounded-full bg-[#C9A227] text-[#0B1F33] shadow-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-transform duration-200 border-2 border-[#0B1F33]"
        aria-label="Call Nexus Estate Services & Builder"
        title="Call 03008553363"
      >
        <Phone className="w-5 h-5" />
      </a>
    </div>
  );
};
