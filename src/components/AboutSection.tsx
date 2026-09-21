import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Building2, MapPin, ArrowRight, X } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';

export const AboutSection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const keyPoints = [
    'Professional property guidance tailored to client goals',
    'Specialized local focus on the Islamabad property market',
    'Comprehensive residential, commercial, and builder solutions',
    'Commitment to trust, transparency, and clear documentation',
  ];

  const scrollToSection = (id: string) => {
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
    <section id="about" className="py-20 lg:py-28 bg-[#F7F5F0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Premium Property Imagery with Luxury Framing */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Outer decorative gold line */}
              <div className="absolute -top-4 -left-4 w-40 h-40 border-t-2 border-l-2 border-[#C9A227] rounded-tl-lg pointer-events-none" />

              {/* Main Image Container */}
              <div className="relative rounded-lg overflow-hidden shadow-2xl shadow-[#0B1F33]/15 border border-[#C9A227]/20 bg-white">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                  alt="Modern architectural property in Islamabad"
                  className="w-full h-[420px] sm:h-[500px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/70 via-transparent to-transparent" />

                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded bg-[#0B1F33]/90 backdrop-blur-md border border-[#C9A227]/30 text-white">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded bg-[#C9A227]/20 border border-[#C9A227] flex items-center justify-center text-[#C9A227]">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-[#C9A227] font-semibold">
                        Islamabad Head Office
                      </div>
                      <div className="text-xs sm:text-sm text-gray-200 font-medium">
                        Office No 3, ME-4, Jinnah Ave, Margalla Enclave DHA Site
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Small Accent Pill */}
              <div className="absolute -bottom-4 -right-4 hidden sm:flex items-center gap-2 px-4 py-3 rounded bg-white shadow-xl border border-gray-100 text-xs font-semibold text-[#0B1F33]">
                <Building2 className="w-4 h-4 text-[#C9A227]" />
                <span>Nexus Estate Services &amp; Builder</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Narrative Copy */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Section Subtitle */}
              <div className="flex items-center gap-2 mb-3">
                <span className="w-8 h-px bg-[#C9A227]" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A227]">
                  About Our Company
                </span>
              </div>

              <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1F33] leading-tight mb-6">
                Nexus Estate Services &amp; Builder Pvt Ltd
              </h2>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 font-normal">
                Nexus Estate Services &amp; Builder Pvt Ltd is a dedicated real estate and property services firm based in Islamabad, Pakistan. Operating from Margalla Enclave on Jinnah Avenue, we provide structured guidance and solutions for clients navigating the capital territory&apos;s dynamic real estate landscape.
              </p>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-8">
                Our approach centers on client trust, clarity, and personalized service. Whether you are exploring residential homes, evaluating commercial opportunities, planning property investments, or seeking builder and development expertise, we deliver transparent, market-informed support designed to bring your property goals to fruition.
              </p>

              {/* Core Pillars List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                {keyPoints.map((point) => (
                  <div key={point} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-gray-700 font-medium leading-snug">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Action */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-sm bg-[#0B1F33] text-white hover:bg-[#18212B] hover:text-[#C9A227] text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-200 shadow-md group"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection('contact')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-sm border border-gray-300 hover:border-[#C9A227] text-gray-700 hover:text-[#0B1F33] text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-200"
                >
                  <span>Inquire Directly</span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Learn More Information Modal */}
      {modalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative w-full max-w-2xl bg-white rounded-lg p-6 sm:p-8 shadow-2xl border border-gray-100 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-px bg-[#C9A227]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#C9A227]">
                Company Overview
              </span>
            </div>

            <h3 className="font-serif-luxury text-2xl font-bold text-[#0B1F33] mb-4">
              Nexus Estate Services &amp; Builder Pvt Ltd
            </h3>

            <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
              <p>
                <strong>Office Address:</strong> {BUSINESS_INFO.address}
              </p>
              <p>
                <strong>Direct Telephone:</strong> {BUSINESS_INFO.phoneFormatted}
              </p>
              <p>
                At Nexus Estate Services &amp; Builder Pvt Ltd, our vision is to provide a reliable bridge between property seekers, sellers, and development opportunities in Islamabad. By placing the client at the center of every transaction, we ensure that every interaction is conducted with professional diligence.
              </p>
              <div className="p-4 rounded bg-[#F7F5F0] border border-gray-200">
                <h4 className="font-semibold text-[#0B1F33] text-sm mb-2">
                  Our Service Philosophy
                </h4>
                <ul className="space-y-2 text-xs text-gray-600">
                  <li>• <strong>Honest Guidance:</strong> Factual discussions regarding location potential and market realities.</li>
                  <li>• <strong>Local Dedication:</strong> In-depth attention to Islamabad&apos;s Margalla Enclave, Jinnah Avenue, and surrounding growth sectors.</li>
                  <li>• <strong>End-to-End Capabilities:</strong> Assisting you from initial property inquiry through to builder and development services.</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="px-5 py-2 text-xs font-semibold text-gray-600 hover:text-gray-900 border border-gray-200 rounded"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  setModalOpen(false);
                  scrollToSection('contact');
                }}
                className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-[#0B1F33] bg-[#C9A227] hover:bg-[#D4AF37] rounded"
              >
                Contact Our Team
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
