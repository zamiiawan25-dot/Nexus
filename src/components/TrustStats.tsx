import React from 'react';
import { motion } from 'motion/react';
import { Star, MessageSquareQuote, MapPin, Award } from 'lucide-react';
import { STATS_DATA } from '../data/siteData';

export const TrustStats: React.FC = () => {
  const iconMap = [
    <Star key="star" className="w-5 h-5 text-[#C9A227] fill-[#C9A227]" />,
    <MessageSquareQuote key="quote" className="w-5 h-5 text-[#C9A227]" />,
    <MapPin key="map" className="w-5 h-5 text-[#C9A227]" />,
    <Award key="award" className="w-5 h-5 text-[#C9A227]" />,
  ];

  return (
    <section id="trust-stats" className="relative z-20 -mt-8 sm:-mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#11283F] border border-[#C9A227]/30 rounded-lg shadow-xl shadow-black/20 p-6 sm:p-8 backdrop-blur-md">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
          {STATS_DATA.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`flex flex-col ${idx !== 0 ? 'pt-6 lg:pt-0 lg:pl-8' : ''}`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="w-9 h-9 rounded-full bg-white/5 border border-[#C9A227]/20 flex items-center justify-center">
                  {iconMap[idx]}
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#C9A227]/90 px-2 py-0.5 rounded bg-[#C9A227]/10 border border-[#C9A227]/20">
                  {stat.highlight}
                </span>
              </div>

              <div className="font-serif-luxury text-3xl sm:text-4xl font-bold text-white tracking-tight">
                {stat.value}
              </div>

              <div className="text-sm font-semibold text-gray-200 mt-1">
                {stat.label}
              </div>

              <div className="text-xs text-gray-400 mt-0.5 font-light">
                {stat.sublabel}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
