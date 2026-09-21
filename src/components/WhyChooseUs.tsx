import React from 'react';
import { motion } from 'motion/react';
import {
  Award,
  ShieldCheck,
  MapPin,
  HeartHandshake,
  Compass,
  PhoneCall
} from 'lucide-react';
import { WHY_CHOOSE_ITEMS } from '../data/siteData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return <Award className="w-5 h-5 text-[#C9A227]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#C9A227]" />;
      case 'MapPin':
        return <MapPin className="w-5 h-5 text-[#C9A227]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-[#C9A227]" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-[#C9A227]" />;
      case 'PhoneCall':
        return <PhoneCall className="w-5 h-5 text-[#C9A227]" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-[#C9A227]" />;
    }
  };

  return (
    <section id="why-nexus" className="py-20 lg:py-28 bg-[#FFFFFF] relative border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-px bg-[#C9A227]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A227]">
              Our Foundation
            </span>
            <span className="w-8 h-px bg-[#C9A227]" />
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1F33] leading-tight mb-4">
            Why Choose Nexus?
          </h2>

          <p className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
            Built on core principles of transparency, structured communication, and client-first guidance in the Islamabad property sector.
          </p>
        </div>

        {/* Feature Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {WHY_CHOOSE_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="p-7 rounded-lg bg-[#F7F5F0]/70 hover:bg-white border border-gray-200/80 hover:border-[#C9A227]/40 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded bg-[#0B1F33] border border-[#C9A227]/30 flex items-center justify-center mb-5 group-hover:bg-[#C9A227] group-hover:text-[#0B1F33] transition-colors duration-300">
                  {getIcon(item.iconName)}
                </div>

                <h3 className="font-serif-luxury text-xl font-bold text-[#0B1F33] mb-2.5">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200/60 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#C9A227]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
                <span>Client Commitment</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
