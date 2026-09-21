import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star, MapPin, Building, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
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
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-24 pb-16 bg-[#0B1F33]">
      {/* Background Imagery with Cinematic Dark Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=85"
          alt="Modern luxury architecture in Islamabad landscape"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-none"
          loading="eager"
          fetchPriority="high"
        />
        {/* Layered Gradient Overlays for readability and luxury tone */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F33]/95 via-[#0B1F33]/85 to-[#0B1F33]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33] via-transparent to-[#0B1F33]/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#C9A227]/10 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="max-w-3xl">
          {/* Subtle Trust & Location Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#C9A227]/30 text-xs font-medium text-gray-200 mb-6"
          >
            <MapPin className="w-3.5 h-3.5 text-[#C9A227]" />
            <span>Islamabad Real Estate &amp; Builders</span>
            <span className="w-1 h-1 rounded-full bg-[#C9A227]" />
            <span className="text-[#C9A227]">Margalla Enclave DHA Site</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6"
          >
            Find Your Place.{' '}
            <span className="block mt-1 gold-gradient-text">Build Your Future.</span>
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-300 font-light leading-relaxed max-w-2xl mb-8"
          >
            Premium real estate services, property solutions, and investment opportunities in Islamabad.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12"
          >
            <button
              type="button"
              onClick={() => scrollTo('properties')}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-bold uppercase tracking-wider text-[#0B1F33] bg-[#C9A227] hover:bg-[#D4AF37] transition-all duration-200 rounded-sm shadow-lg shadow-[#C9A227]/25 hover:translate-y-[-1px] active:translate-y-[1px]"
              id="hero-explore-btn"
            >
              <span>Explore Properties</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => scrollTo('contact')}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-semibold uppercase tracking-wider text-white border border-white/30 hover:border-[#C9A227] hover:text-[#C9A227] bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all duration-200 rounded-sm"
              id="hero-contact-btn"
            >
              <span>Contact Us</span>
            </button>
          </motion.div>

          {/* Trust Indicator Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-6 border-t border-white/15 flex flex-wrap items-center gap-6 sm:gap-8 text-sm"
          >
            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex items-center text-[#C9A227]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current text-[#C9A227]" />
                ))}
              </div>
              <div className="text-gray-200">
                <span className="font-bold text-white text-base mr-1">4.9/5</span>
                <span className="text-gray-400 text-xs sm:text-sm">★★★★★</span>
              </div>
            </div>

            <div className="h-4 w-px bg-white/20 hidden sm:block" />

            {/* Reviews Count */}
            <div className="flex items-center gap-2 text-gray-200">
              <ShieldCheck className="w-4 h-4 text-[#C9A227]" />
              <span className="font-semibold text-white">57 Customer Reviews</span>
            </div>

            <div className="h-4 w-px bg-white/20 hidden sm:block" />

            {/* Business Registration Note */}
            <div className="flex items-center gap-2 text-gray-300 text-xs sm:text-sm">
              <Building className="w-4 h-4 text-gray-400" />
              <span>Nexus Estate Services &amp; Builder Pvt Ltd</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
