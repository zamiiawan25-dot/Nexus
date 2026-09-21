import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ChevronRight, Building } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';

interface NavbarProps {
  onOpenConsultationModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 24) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    setMobileMenuOpen(false);
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
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B1F33]/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-[#C9A227]/25 py-3'
          : 'bg-gradient-to-b from-[#0B1F33]/90 via-[#0B1F33]/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A227] rounded-sm"
            aria-label="Nexus Estate Services & Builder Pvt Ltd Home"
          >
            <div className="w-10 h-10 rounded-sm bg-[#0B1F33] border border-[#C9A227] flex items-center justify-center text-[#C9A227] group-hover:bg-[#C9A227] group-hover:text-[#0B1F33] transition-colors duration-300 shadow-sm">
              <Building className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="font-serif-luxury text-2xl font-bold tracking-wider text-white">
                  NEXUS
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227] inline-block mb-1"></span>
              </div>
              <span className="text-[10px] tracking-[0.2em] uppercase text-gray-300 font-medium -mt-1">
                Estate Services &amp; Builder
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 text-sm font-medium text-gray-200 hover:text-[#C9A227] transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#C9A227] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
              </a>
            ))}
          </nav>

          {/* Action CTA & Phone */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center gap-2 text-sm text-gray-200 hover:text-[#C9A227] transition-colors"
              title="Call Nexus Office"
            >
              <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-[#C9A227]">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span className="font-semibold tracking-wide text-xs xl:text-sm">
                {BUSINESS_INFO.phoneFormatted}
              </span>
            </a>

            <a
              href="#properties"
              onClick={(e) => handleNavClick(e, '#properties')}
              className="relative inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#0B1F33] bg-[#C9A227] hover:bg-[#D4AF37] transition-all duration-200 rounded-sm shadow-sm hover:shadow-md hover:shadow-[#C9A227]/20 active:translate-y-0.5"
            >
              Explore Properties
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="w-9 h-9 rounded bg-[#C9A227] text-[#0B1F33] flex items-center justify-center"
              aria-label="Call Nexus Office"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded text-gray-200 hover:text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A227]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0B1F33] border-b border-[#C9A227]/30 px-4 pt-3 pb-6 animate-in fade-in slide-in-from-top-2 duration-200 shadow-2xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="flex items-center justify-between px-3 py-2.5 text-sm font-medium text-gray-200 hover:text-[#C9A227] hover:bg-white/5 rounded transition-colors"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-gray-500" />
              </a>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-3">
            <div className="text-xs text-gray-400">
              <span className="block text-gray-300 font-semibold mb-0.5">Office Location</span>
              {BUSINESS_INFO.shortAddress}
            </div>

            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 border border-[#C9A227]/40 text-gray-100 rounded text-xs font-semibold uppercase tracking-wider hover:bg-white/5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C9A227]" />
              Call: {BUSINESS_INFO.phoneFormatted}
            </a>

            <a
              href="#properties"
              onClick={(e) => handleNavClick(e, '#properties')}
              className="w-full text-center py-2.5 bg-[#C9A227] text-[#0B1F33] rounded text-xs font-bold uppercase tracking-wider hover:bg-[#D4AF37] transition-colors"
            >
              Explore Properties
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
