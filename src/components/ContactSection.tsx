import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Phone,
  MapPin,
  Mail,
  Clock,
  Send,
  CheckCircle,
  Copy,
  Check,
  Building2,
  MessageSquare
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';
import { InquiryFormData } from '../types';

interface ContactSectionProps {
  initialRequirement?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialRequirement = '' }) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    phoneNumber: '',
    email: '',
    requirement: initialRequirement || 'Property Buying',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  // Update requirement if passed down via props
  React.useEffect(() => {
    if (initialRequirement) {
      setFormData((prev) => ({ ...prev, requirement: initialRequirement }));
    }
  }, [initialRequirement]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate clean frontend submission transition
    setTimeout(() => {
      const randomRef = 'NX-' + Math.floor(100000 + Math.random() * 900000);
      setReferenceId(randomRef);
      setIsSubmitting(false);
      setSubmissionSuccess(true);
    }, 600);
  };

  const handleResetForm = () => {
    setFormData({
      fullName: '',
      phoneNumber: '',
      email: '',
      requirement: 'Property Buying',
      message: '',
    });
    setSubmissionSuccess(false);
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.address);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FFFFFF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-px bg-[#C9A227]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A227]">
              Get In Touch
            </span>
            <span className="w-8 h-px bg-[#C9A227]" />
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1F33] leading-tight mb-4">
            Let&apos;s Talk About Your Property Goals
          </h2>

          <p className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
            Connect directly with our Islamabad office for residential, commercial, investment, or builder consultations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Business Details & Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0B1F33] text-white p-8 rounded-xl shadow-xl border border-[#C9A227]/25 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A227]/10 rounded-bl-full pointer-events-none" />

              <h3 className="font-serif-luxury text-2xl font-bold mb-6 text-white flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#C9A227]" />
                <span>Islamabad Office</span>
              </h3>

              {/* Phone Detail */}
              <div className="mb-6 pb-6 border-b border-white/10">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#C9A227] mb-1">
                  Direct Telephone
                </div>
                <div className="text-xl sm:text-2xl font-bold tracking-wide text-white mb-3">
                  {BUSINESS_INFO.phoneFormatted}
                </div>
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-sm bg-[#C9A227] text-[#0B1F33] hover:bg-[#D4AF37] font-bold text-xs uppercase tracking-wider transition-colors shadow"
                  id="contact-call-now-btn"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now ({BUSINESS_INFO.phone})</span>
                </a>
              </div>

              {/* Physical Address */}
              <div className="mb-6 pb-6 border-b border-white/10">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#C9A227]">
                    Head Office Address
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyAddress}
                    className="inline-flex items-center gap-1 text-[11px] text-gray-300 hover:text-white transition-colors"
                    title="Copy address"
                  >
                    {copiedAddress ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="text-sm text-gray-200 leading-relaxed font-medium">
                  {BUSINESS_INFO.address}
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-3 text-xs sm:text-sm text-gray-300">
                <Clock className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Consultation Hours</div>
                  <div className="text-gray-400 text-xs mt-0.5">{BUSINESS_INFO.workingHours}</div>
                </div>
              </div>
            </div>

            {/* Local Context Box */}
            <div className="p-6 rounded-lg bg-[#F7F5F0] border border-gray-200">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0B1F33] mb-2">
                <MapPin className="w-4 h-4 text-[#C9A227]" />
                <span>Sector Focus</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Located on Jinnah Avenue near Margalla Enclave and DHA Site, our specialists possess deep familiarity with current zoning, commercial expansion corridors, and residential developments across Islamabad.
              </p>
            </div>
          </div>

          {/* Right Column: Contact & Property Requirement Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#F7F5F0]/60 p-8 sm:p-10 rounded-xl border border-gray-200 shadow-sm relative">
              {submissionSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-emerald-300">
                    <CheckCircle className="w-8 h-8" />
                  </div>

                  <h3 className="font-serif-luxury text-2xl font-bold text-[#0B1F33] mb-2">
                    Inquiry Received
                  </h3>

                  <p className="text-sm text-gray-700 max-w-md mx-auto mb-4 leading-relaxed">
                    Thank you, <strong>{formData.fullName || 'Valued Client'}</strong>. Your property requirement for <strong>{formData.requirement}</strong> has been logged.
                  </p>

                  <div className="inline-block px-4 py-2 bg-white rounded border border-gray-200 text-xs font-mono text-gray-600 mb-6">
                    Inquiry Reference: <span className="font-bold text-[#0B1F33]">{referenceId}</span>
                  </div>

                  <div className="p-4 rounded bg-amber-50 border border-amber-200 text-xs text-amber-900 text-left mb-6">
                    <p className="font-semibold mb-1">Developer Implementation Note:</p>
                    <p>
                      This contact form captures all client fields with frontend validation. Since no backend database or mail server is connected yet, integrate an Express or Firebase endpoint to dispatch live notifications.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-sm border border-gray-300 text-xs font-semibold text-gray-700 hover:bg-gray-100 uppercase tracking-wider"
                    >
                      Send Another Inquiry
                    </button>
                    <a
                      href={`tel:${BUSINESS_INFO.phone}`}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-sm bg-[#C9A227] text-[#0B1F33] text-xs font-bold uppercase tracking-wider hover:bg-[#D4AF37]"
                    >
                      Direct Call Now
                    </a>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                    <span className="font-serif-luxury text-xl font-bold text-[#0B1F33]">
                      Send Property Inquiry
                    </span>
                    <span className="text-xs text-gray-500 font-medium">All fields required</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="e.g. Tariq Mehmood"
                        className="w-full px-4 py-3 text-sm rounded border border-gray-300 focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227] outline-none bg-white transition-colors"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label htmlFor="phoneNumber" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        required
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        placeholder="0300 0000000"
                        className="w-full px-4 py-3 text-sm rounded border border-gray-300 focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227] outline-none bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="name@domain.com"
                        className="w-full px-4 py-3 text-sm rounded border border-gray-300 focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227] outline-none bg-white transition-colors"
                      />
                    </div>

                    {/* Property Requirement */}
                    <div>
                      <label htmlFor="requirement" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                        Property Requirement *
                      </label>
                      <select
                        id="requirement"
                        name="requirement"
                        value={formData.requirement}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 text-sm rounded border border-gray-300 focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227] outline-none bg-white transition-colors"
                      >
                        <option value="Property Buying">Property Buying</option>
                        <option value="Property Selling">Property Selling</option>
                        <option value="Property Investment">Property Investment</option>
                        <option value="Residential Properties">Residential Properties</option>
                        <option value="Commercial Properties">Commercial Properties</option>
                        <option value="Builder & Development Services">Builder &amp; Development Services</option>
                        <option value="Property Consultation">Property Consultation</option>
                        <option value="General Inquiry">General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                      Message / Specific Requirements *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please outline your preferred sector in Islamabad, timeline, or builder specifications..."
                      className="w-full px-4 py-3 text-sm rounded border border-gray-300 focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227] outline-none bg-white transition-colors resize-none"
                    />
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-sm bg-[#0B1F33] hover:bg-[#18212B] text-white hover:text-[#C9A227] text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 shadow-md disabled:opacity-75"
                    id="contact-send-inquiry-btn"
                  >
                    {isSubmitting ? (
                      <span>Processing Inquiry...</span>
                    ) : (
                      <>
                        <span>Send Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="text-[11px] text-gray-500 text-center flex items-center justify-center gap-2 pt-1">
                    <MessageSquare className="w-3.5 h-3.5 text-[#C9A227]" />
                    <span>Inquiries are reviewed by our property advisors. Direct line: {BUSINESS_INFO.phoneFormatted}</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
