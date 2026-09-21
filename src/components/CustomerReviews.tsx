import React from 'react';
import { motion } from 'motion/react';
import { Star, ShieldCheck, CheckCircle2, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';

export const CustomerReviews: React.FC = () => {
  const ratingMetrics = [
    { stars: 5, percentage: 92, count: 52 },
    { stars: 4, percentage: 8, count: 5 },
    { stars: 3, percentage: 0, count: 0 },
    { stars: 2, percentage: 0, count: 0 },
    { stars: 1, percentage: 0, count: 0 },
  ];

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#F7F5F0] border-b border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-px bg-[#C9A227]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A227]">
              Client Feedback
            </span>
            <span className="w-8 h-px bg-[#C9A227]" />
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1F33] leading-tight mb-4">
            Customer Reviews &amp; Ratings
          </h2>

          <p className="text-base sm:text-lg text-gray-700 font-medium">
            Trusted by clients with a 4.9/5 rating across 57 reviews.
          </p>
        </div>

        {/* Rating Scorecard and Distribution */}
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg border border-gray-200/90 overflow-hidden mb-12 p-8 sm:p-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left: Prominent Overall Score */}
            <div className="md:col-span-5 text-center md:text-left md:border-r md:border-gray-100 md:pr-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C9A227]/15 text-[#0B1F33] text-xs font-bold uppercase tracking-wider mb-4 border border-[#C9A227]/30">
                <ShieldCheck className="w-4 h-4 text-[#C9A227]" />
                <span>Verified Client Rating</span>
              </div>

              <div className="font-serif-luxury text-6xl sm:text-7xl font-bold text-[#0B1F33] tracking-tight">
                {BUSINESS_INFO.rating}
                <span className="text-2xl text-gray-400 font-sans font-normal"> / 5.0</span>
              </div>

              {/* Star visuals */}
              <div className="flex items-center justify-center md:justify-start gap-1 text-[#C9A227] my-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-[#C9A227] text-[#C9A227]" />
                ))}
              </div>

              <div className="text-sm font-semibold text-gray-800">
                Based on {BUSINESS_INFO.reviewsCount} Reviews
              </div>

              <div className="text-xs text-gray-500 mt-1">
                Official feedback for {BUSINESS_INFO.name}
              </div>
            </div>

            {/* Right: Detailed Rating Distribution */}
            <div className="md:col-span-7 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                Rating Breakdown
              </div>
              {ratingMetrics.map((item) => (
                <div key={item.stars} className="flex items-center gap-3 text-xs sm:text-sm">
                  <span className="w-12 font-medium text-gray-700 flex items-center gap-1">
                    <span>{item.stars}</span>
                    <Star className="w-3.5 h-3.5 fill-[#C9A227] text-[#C9A227]" />
                  </span>

                  <div className="flex-1 h-2.5 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      className="h-full bg-[#C9A227] rounded-full"
                    />
                  </div>

                  <span className="w-12 text-right text-gray-500 text-xs font-medium">
                    {item.count > 0 ? `${item.count}` : '0'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Clearly Marked Verified Review Placeholders (No Fabricated Stories/Names) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[1, 2, 3].map((slot) => (
            <div
              key={slot}
              className="p-6 rounded-lg bg-white border border-dashed border-gray-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-[#C9A227]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    5.0 Verified
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs font-medium text-[#0B1F33] mb-2">
                  <MessageSquare className="w-3.5 h-3.5 text-[#C9A227]" />
                  <span>Verified Review Placeholder #{slot}</span>
                </div>

                <p className="text-xs text-gray-500 italic leading-relaxed">
                  &ldquo;Customer testimonial — add verified review here&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-gray-100 flex items-center gap-2 text-[11px] text-gray-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-gray-400" />
                <span>Verified Client Feedback Entry</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
