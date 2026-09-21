import React from 'react';
import { Phone, MapPin, Building, ArrowUp, Star, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Properties', href: '#properties' },
    { label: 'Why Nexus', href: '#why-nexus' },
    { label: 'Investment', href: '#investment' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer id="footer" className="bg-[#0B1F33] text-white border-t border-[#C9A227]/30 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* Brand Info (Col 1) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm bg-white/5 border border-[#C9A227] flex items-center justify-center text-[#C9A227]">
                <Building className="w-5 h-5" />
              </div>
              <div>
                <div className="font-serif-luxury text-2xl font-bold tracking-wider text-white">
                  NEXUS
                </div>
                <div className="text-[10px] tracking-[0.2em] uppercase text-[#C9A227] font-medium">
                  Estate Services &amp; Builder Pvt Ltd
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed max-w-md font-light">
              Nexus Estate Services &amp; Builder Pvt Ltd provides professional property solutions, residential and commercial real estate guidance, and builder services across Islamabad, Pakistan.
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs text-gray-300">
              <div className="flex items-center gap-1 text-[#C9A227]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#C9A227]" />
                ))}
              </div>
              <span>
                <strong>4.9 / 5.0</strong> based on 57 Customer Reviews
              </span>
            </div>
          </div>

          {/* Quick Links (Col 2) */}
          <div className="lg:col-span-3">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A227] mb-4">
              Quick Links
            </div>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-gray-300 hover:text-[#C9A227] transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (Col 3) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A227] mb-4">
              Office Information
            </div>

            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C9A227] shrink-0 mt-1" />
                <span className="leading-relaxed">
                  {BUSINESS_INFO.address}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C9A227] shrink-0" />
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="hover:text-[#C9A227] transition-colors font-semibold"
                >
                  {BUSINESS_INFO.phoneFormatted}
                </a>
              </div>

              <div className="flex items-center gap-3 text-xs text-gray-400 pt-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Islamabad Real Estate &amp; Builder Operations</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            &copy; 2026 Nexus Estate Services &amp; Builder Pvt Ltd. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-gray-500">Islamabad, Pakistan</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-gray-300 hover:text-[#C9A227] transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
