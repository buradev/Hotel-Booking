import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, ArrowUp, ExternalLink } from 'lucide-react';
import { hotelInfo } from '../data/hotelData';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#081A13] text-[#FAF8F3] pt-16 pb-12 border-t-2 border-[#E3A725]/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FAF8F3] border-2 border-[#E3A725] flex items-center justify-center">
                <svg className="w-6 h-6 text-[#E3A725]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="6" cy="9" r="3.5" />
                  <circle cx="12" cy="9" r="3.5" />
                  <circle cx="18" cy="9" r="3.5" />
                  <path d="M9 13.5a3.5 3.5 0 0 0 6 0" />
                  <path d="M12 2l1 2 2 .5-1.5 1.5.5 2-2-1-2 1 .5-2-1.5-1.5 2-.5z" fill="#E3A725" stroke="none" />
                </svg>
              </div>
              <div>
                <span className="font-editorial text-2xl font-bold tracking-tight text-white block">
                  OLYMPIC HOTEL
                </span>
                <span className="text-[10px] tracking-[0.25em] text-[#E3A725] uppercase font-semibold">
                  GONDAR • ETHIOPIA
                </span>
              </div>
            </div>

            <p className="text-xs text-white/70 max-w-sm leading-relaxed font-sans-clean">
              Exceptional accommodations, 24/7 guarded security, and gracious Ethiopian hospitality situated peacefully near the University of Gondar Maraki campus.
            </p>

            <div className="flex items-center gap-3 text-xs text-white/80 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#E3A725] border border-[#E3A725]/30">
                <ShieldCheck className="w-3.5 h-3.5" />
                24/7 Monitored Facility
              </span>
              <span className="text-white/60">|</span>
              <span className="text-white/80">Check-in: 14:00 • Check-out: 11:30</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-widest text-[#E3A725]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-white/80">
              <li>
                <a href="#hero" className="hover:text-[#E3A725] transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#E3A725] transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#E3A725] transition-colors">Services</a>
              </li>
              <li>
                <a href="#rooms" className="hover:text-[#E3A725] transition-colors">Rooms & Accommodations</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#E3A725] transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#E3A725] transition-colors">Contact Us</a>
              </li>
              <li>
                <a href="#reserve" className="hover:text-[#E3A725] transition-colors text-[#E3A725] font-semibold">Make a Booking Enquiry</a>
              </li>
            </ul>
          </div>

          {/* Direct Contact Coordinates */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-widest text-[#E3A725]">
              Hotel Coordinates
            </h4>
            <div className="space-y-2 text-xs text-white/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#E3A725] shrink-0 mt-0.5" />
                <span>{hotelInfo.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#E3A725] shrink-0" />
                <a href={`tel:${hotelInfo.phonePrimary}`} className="hover:text-[#E3A725] transition-colors">
                  {hotelInfo.phonePrimary} (Reception)
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#E3A725] shrink-0" />
                <a href={`tel:${hotelInfo.phoneMobile}`} className="hover:text-[#E3A725] transition-colors">
                  {hotelInfo.phoneMobile} (WhatsApp)
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#E3A725] shrink-0" />
                <a href={`mailto:${hotelInfo.email}`} className="hover:text-[#E3A725] transition-colors">
                  {hotelInfo.email}
                </a>
              </div>
              <div className="pt-1">
                <a
                  href={hotelInfo.expediaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-[#E3A725] text-xs inline-flex items-center gap-1"
                >
                  <span>View on Expedia</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-xs text-[#E3A725] hover:text-white transition-colors"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            © {new Date().getFullYear()} Olympic Hotel Gondar. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Built with warm Ethiopian hospitality</span>
            <span>•</span>
            <span className="text-[#E3A725]">እንኳን ደህና መጡ</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
