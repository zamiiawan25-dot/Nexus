import React from 'react';
import { motion } from 'motion/react';
import { Phone, ArrowRight, MapPin, Building2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';

export const CtaSection: React.FC = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="relative py-20 bg-[#11283F] text-white overflow-hidden border-y border-[#C9A227]/20">
      {/* Subtle Geometric Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border-2 border-[#C9A227]" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full border border-white" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-[#C9A227]/40 text-xs font-semibold uppercase tracking-wider text-[#C9A227] mb-6">
            <Building2 className="w-3.5 h-3.5" />
            <span>Nexus Estate Services &amp; Builder</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Ready to Discuss Your Islamabad Property Requirement?
          </h2>

          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8 font-light">
            Whether buying, selling, investing, or planning builder developments, our office in Margalla Enclave DHA Site is ready to assist you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-sm bg-[#C9A227] text-[#0B1F33] hover:bg-[#D4AF37] font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-lg shadow-[#C9A227]/20"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now ({BUSINESS_INFO.phoneFormatted})</span>
            </a>

            <button
              type="button"
              onClick={scrollToContact}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-sm bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200"
            >
              <span>Send Online Inquiry</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-gray-400">
            <MapPin className="w-3.5 h-3.5 text-[#C9A227]" />
            <span>{BUSINESS_INFO.address}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
