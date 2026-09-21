import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Building2,
  TrendingUp,
  LineChart,
  Home,
  Briefcase,
  Hammer,
  Users,
  ArrowRight,
  Check,
  X
} from 'lucide-react';
import { SERVICES_DATA } from '../data/siteData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectServiceForInquiry?: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForInquiry }) => {
  const [activeServiceModal, setActiveServiceModal] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2':
        return <Building2 className="w-6 h-6" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6" />;
      case 'LineChart':
        return <LineChart className="w-6 h-6" />;
      case 'Home':
        return <Home className="w-6 h-6" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6" />;
      case 'Hammer':
        return <Hammer className="w-6 h-6" />;
      case 'Users':
        return <Users className="w-6 h-6" />;
      default:
        return <Building2 className="w-6 h-6" />;
    }
  };

  const handleInquire = (serviceTitle: string) => {
    if (onSelectServiceForInquiry) {
      onSelectServiceForInquiry(serviceTitle);
    }
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
    setActiveServiceModal(null);
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#FFFFFF] border-y border-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-px bg-[#C9A227]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A227]">
              Comprehensive Solutions
            </span>
            <span className="w-8 h-px bg-[#C9A227]" />
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1F33] leading-tight mb-4">
            Our Real Estate Services
          </h2>

          <p className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
            Professional real estate, property management, and builder services tailored for individuals, families, and investors in Islamabad.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative bg-[#F7F5F0]/60 hover:bg-[#FFFFFF] border border-gray-200/80 hover:border-[#C9A227]/50 rounded-lg p-7 transition-all duration-300 hover:shadow-xl hover:shadow-[#0B1F33]/8 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              {/* Subtle top gold accent bar on hover */}
              <div className="absolute top-0 left-6 right-6 h-0.5 bg-transparent group-hover:bg-[#C9A227] transition-colors duration-300 rounded-full" />

              <div>
                {/* Icon Container with subtle animation */}
                <div className="w-12 h-12 rounded-md bg-[#0B1F33] text-[#C9A227] flex items-center justify-center mb-6 group-hover:bg-[#C9A227] group-hover:text-[#0B1F33] transition-colors duration-300 shadow-sm">
                  {getServiceIcon(service.iconName)}
                </div>

                <h3 className="font-serif-luxury text-xl font-bold text-[#0B1F33] mb-3 group-hover:text-[#0B1F33] transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed mb-6 font-normal">
                  {service.shortDesc}
                </p>

                {/* Micro bullet highlights */}
                <ul className="space-y-2 mb-6 border-t border-gray-200/60 pt-4">
                  {service.highlights.slice(0, 2).map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-gray-500">
                      <Check className="w-3.5 h-3.5 text-[#C9A227] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Links */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200/60 text-xs font-semibold uppercase tracking-wider">
                <button
                  type="button"
                  onClick={() => setActiveServiceModal(service)}
                  className="text-gray-600 hover:text-[#0B1F33] transition-colors"
                >
                  View Scope
                </button>

                <button
                  type="button"
                  onClick={() => handleInquire(service.title)}
                  className="inline-flex items-center gap-1.5 text-[#C9A227] hover:text-[#B2881E] font-bold group/link transition-colors"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Scope Modal */}
      {activeServiceModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActiveServiceModal(null)}
        >
          <div
            className="relative w-full max-w-lg bg-white rounded-lg p-6 sm:p-8 shadow-2xl border border-gray-100"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveServiceModal(null)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 rounded bg-[#0B1F33] text-[#C9A227] flex items-center justify-center mb-4">
              {getServiceIcon(activeServiceModal.iconName)}
            </div>

            <h3 className="font-serif-luxury text-2xl font-bold text-[#0B1F33] mb-2">
              {activeServiceModal.title}
            </h3>

            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              {activeServiceModal.fullDesc}
            </p>

            <div className="space-y-2 mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C9A227] block mb-1">
                Key Deliverables &amp; Focus
              </span>
              {activeServiceModal.highlights.map((h: string) => (
                <div key={h} className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                  <Check className="w-4 h-4 text-[#C9A227] shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-gray-100 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setActiveServiceModal(null)}
                className="px-4 py-2 text-xs font-semibold text-gray-600 hover:text-gray-900 border border-gray-200 rounded"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => handleInquire(activeServiceModal.title)}
                className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-[#0B1F33] bg-[#C9A227] hover:bg-[#D4AF37] rounded"
              >
                Inquire on this Service
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
