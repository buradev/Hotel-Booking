import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, Globe, Sparkles } from 'lucide-react';
import { hotelInfo } from '../data/hotelData';

export function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState('EN');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Rooms", href: "#rooms" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact Us", href: "#contact" }
  ];

  const handleBookingClick = (e) => {
    if (onOpenBooking) {
      e.preventDefault();
      onOpenBooking();
    }
  };

  return (
    <>
      {/* Top micro announcement bar */}
      <div className="bg-[#081A13] text-[#FAF8F3] text-xs py-2 px-4 border-b border-[#E3A725]/30">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-[#E3A725] font-medium tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#E3A725] animate-pulse"></span>
              እንኳን ደህና መጡ
            </span>
            <span className="hidden sm:inline text-white/70">|</span>
            <span className="hidden sm:inline text-white/80">
              Welcome to Olympic Hotel Gondar • Near Maraki Campus
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a 
              href="/swagger.html" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#E3A725]/20 hover:bg-[#E3A725] text-[#E3A725] hover:text-[#090D16] border border-[#E3A725]/40 font-semibold transition-all text-[11px]"
              title="Open Swagger API Documentation & Testing"
            >
              <span>Swagger API Docs</span>
            </a>
            <span className="text-white/40">|</span>
            <a 
              href={`tel:${hotelInfo.phonePrimary}`} 
              className="flex items-center gap-1 text-white/80 hover:text-[#E3A725] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#E3A725]" />
              <span className="hidden md:inline font-sans-clean">{hotelInfo.phonePrimary}</span>
              <span className="md:hidden">Call Hotel</span>
            </a>
            <span className="text-white/40">|</span>
            {/* Language toggle */}
            <button 
              onClick={() => setLanguage(language === 'EN' ? 'AM' : 'EN')}
              className="text-white/80 hover:text-[#E3A725] font-medium transition-colors text-xs flex items-center gap-1"
              title="Toggle English / Amharic"
            >
              <Globe className="w-3.5 h-3.5 text-[#E3A725]" />
              <span>{language === 'EN' ? 'EN' : 'አማ'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#FAF8F3]/95 backdrop-blur-md shadow-sm border-b border-[#E3A725]/20 py-3' 
          : 'bg-[#FAF8F3] border-b border-[#FCFAF7] py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-[#FAF8F3] border-2 border-[#E3A725] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
              <svg className="w-6 h-6 text-[#E3A725]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="6" cy="9" r="3.5" />
                <circle cx="12" cy="9" r="3.5" />
                <circle cx="18" cy="9" r="3.5" />
                <path d="M9 13.5a3.5 3.5 0 0 0 6 0" />
                <path d="M12 2l1 2 2 .5-1.5 1.5.5 2-2-1-2 1 .5-2-1.5-1.5 2-.5z" fill="#E3A725" stroke="none" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-editorial text-2xl font-bold tracking-tight text-[#1A1D21] group-hover:text-[#E3A725] transition-colors leading-none">
                OLYMPIC HOTEL
              </span>
              <span className="text-[11px] tracking-[0.25em] text-[#969592] uppercase font-medium mt-0.5">
                GONDAR • ETHIOPIA
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#1A1D21] hover:text-[#E3A725] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#E3A725] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTA: Book your stay */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#reserve"
              onClick={handleBookingClick}
              className="rounded-full px-6 py-2.5 text-xs font-semibold text-[#090D16] bg-[#E3A725] hover:bg-[#cf9418] shadow-gold-soft transition-all duration-200 active:scale-95 flex items-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book your stay</span>
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="#reserve"
              onClick={handleBookingClick}
              className="sm:hidden rounded-full px-4 py-1.5 text-xs font-semibold text-[#090D16] bg-[#E3A725]"
            >
              Book
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full text-[#1A1D21] hover:text-[#E3A725] hover:bg-black/5"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF8F3] border-b border-[#E3A725]/30 px-6 py-6 shadow-xl animate-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between pb-3 border-b border-black/5">
                <span className="text-xs uppercase tracking-widest text-[#969592] font-semibold">Navigation</span>
                <span className="text-xs text-[#E3A725] font-medium">Maraki Campus Area</span>
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-[#1A1D21] hover:text-[#E3A725] transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-black/5 flex flex-col gap-3">
                <a
                  href="#reserve"
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    handleBookingClick(e);
                  }}
                  className="w-full rounded-full py-3 text-sm font-semibold text-[#090D16] bg-[#E3A725] text-center shadow-gold-soft"
                >
                  Book your stay
                </a>
                <a
                  href={`tel:${hotelInfo.phonePrimary}`}
                  className="w-full rounded-full py-3 text-sm font-semibold text-center text-[#1A1D21] bg-white border border-[#E3A725]/40"
                >
                  Call Reception: {hotelInfo.phonePrimary}
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
