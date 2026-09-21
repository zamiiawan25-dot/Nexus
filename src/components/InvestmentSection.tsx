import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, TrendingUp, Search, Compass, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';

interface InvestmentSectionProps {
  onTalkToTeam?: () => void;
}

export const InvestmentSection: React.FC<InvestmentSectionProps> = ({ onTalkToTeam }) => {
  const investmentPillars = [
    {
      icon: <Search className="w-5 h-5 text-[#C9A227]" />,
      title: 'Careful Market Research',
      desc: 'Evaluating sector price trends, infrastructure developments, and historical growth patterns across Islamabad.',
    },
    {
      icon: <Compass className="w-5 h-5 text-[#C9A227]" />,
      title: 'Location & Accessibility Analysis',
      desc: 'Assessing proximity to arterial roads, Jinnah Avenue corridors, commercial centers, and natural amenities.',
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-[#C9A227]" />,
      title: 'Client Goal Alignment',
      desc: 'Tailoring recommendations to match your specific horizon — whether focused on steady rental yield or capital appreciation.',
    },
  ];

  const handleCtaClick = () => {
    if (onTalkToTeam) {
      onTalkToTeam();
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
  };

  return (
    <section id="investment" className="relative py-24 lg:py-32 bg-[#0B1F33] text-white overflow-hidden">
      {/* Background Architectural Watermark Image */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d0fbb186156a?auto=format&fit=crop&w=2000&q=80"
          alt="Modern construction and architectural development"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F33] via-[#0B1F33]/90 to-[#0B1F33]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Investment Pitch */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-8 h-px bg-[#C9A227]" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A227]">
                  Strategic Property Advisory
                </span>
              </div>

              <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Turn Property Opportunities Into{' '}
                <span className="gold-gradient-text">Long-Term Value</span>
              </h2>

              <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-light mb-8">
                Sound real estate decisions in Islamabad benefit from careful research, professional guidance, thorough location analysis, and an understanding of the client&apos;s personal and financial goals. Rather than speculative forecasts, we emphasize structured assessments of growth corridors, regulatory transparency, and lasting asset quality.
              </p>

              {/* Three Investment Pillars */}
              <div className="space-y-4 mb-10">
                {investmentPillars.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-[#C9A227]/40 transition-colors flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded bg-[#0B1F33] border border-[#C9A227]/30 flex items-center justify-center shrink-0 mt-0.5">
                      {pillar.icon}
                    </div>
                    <div>
                      <h3 className="font-serif-luxury text-base font-bold text-white mb-1">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  type="button"
                  onClick={handleCtaClick}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0B1F33] bg-[#C9A227] hover:bg-[#D4AF37] transition-all duration-200 rounded-sm shadow-lg shadow-[#C9A227]/20 group"
                >
                  <span>Talk to Our Team</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-gray-300 hover:text-white border border-white/20 rounded-sm hover:bg-white/5 transition-colors"
                >
                  <span>Direct Hotline: {BUSINESS_INFO.phoneFormatted}</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Architectural Photography Card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-lg overflow-hidden border border-[#C9A227]/30 shadow-2xl bg-[#11283F]">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80"
                  alt="Modern commercial and architectural investment development"
                  className="w-full h-[450px] object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33] via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 p-5 rounded bg-[#0B1F33]/90 backdrop-blur-md border border-[#C9A227]/30">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#C9A227] mb-1">
                    Islamabad Property Landscape
                  </div>
                  <div className="font-serif-luxury text-lg font-bold text-white mb-2">
                    Margalla Enclave &amp; DHA Site Sector
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Strategically located along Jinnah Avenue, our office serves clients seeking verified property opportunities in the capital.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
