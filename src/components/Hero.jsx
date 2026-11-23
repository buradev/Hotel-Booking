import React from 'react';
import { ChevronDown, ArrowUpRight } from 'lucide-react';

export function Hero({ onOpenBooking }) {
  const handleBookingClick = (e) => {
    e.preventDefault();
    if (onOpenBooking) {
      onOpenBooking();
    } else {
      const reserveEl = document.getElementById('reserve');
      if (reserveEl) {
        reserveEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section 
      id="hero" 
      className="relative w-full h-screen min-h-[680px] flex flex-col items-center justify-center overflow-hidden bg-stone-900"
    >
      {/* Grand Architectural Hotel Lobby Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=2400&q=85"
          alt="Olympic Hotel Grand Lobby & Foyer Gondar"
          className="w-full h-full object-cover object-center scale-105 animate-fade-in filter brightness-90"
        />
        {/* Cinematic Dual Dark Gradient Overlays for High Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/75 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/20 to-black/60 pointer-events-none" />
      </div>

      {/* Centerpiece Content Stack (Matches De Leopol Hotel Composition) */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center select-none">
        
        {/* 1. Golden Emblem / Crest */}
        <div className="flex flex-col items-center mb-6 sm:mb-8 group">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-[#E3A725]/60 bg-black/30 backdrop-blur-md flex items-center justify-center shadow-[0_0_25px_rgba(227,167,37,0.25)] mb-3 transition-transform duration-500 hover:scale-105">
            <svg 
              className="w-10 h-10 sm:w-12 sm:h-12 text-[#E3A725]" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.8" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <circle cx="6" cy="9" r="3.2" />
              <circle cx="12" cy="9" r="3.2" />
              <circle cx="18" cy="9" r="3.2" />
              <path d="M9 13.5a3.2 3.2 0 0 0 6 0" />
              <path d="M12 2l1.2 2.2 2.4.4-1.8 1.8.4 2.4-2.2-1.2-2.2 1.2.4-2.4-1.8-1.8 2.4-.4z" fill="#E3A725" stroke="none" />
            </svg>
          </div>
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.35em] text-[#E3A725] uppercase drop-shadow">
            OLYMPIC HOTEL
          </span>
          <span className="text-[9px] tracking-[0.25em] text-white/70 uppercase font-light mt-0.5">
            GONDAR • ETHIOPIA
          </span>
        </div>

        {/* 2. Bold Uppercase Serif Headline */}
        <h1 className="font-editorial text-3xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold text-white tracking-[0.08em] sm:tracking-[0.12em] uppercase leading-[1.12] drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)] max-w-4xl">
          WELCOME TO THE OLYMPIC HOTEL
        </h1>

        {/* 3. Elegant Script Subtitle */}
        <p className="font-editorial italic font-normal text-xl sm:text-3xl md:text-4xl text-white/95 tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)] mt-3 sm:mt-5 mb-8 sm:mb-10">
          Your gracious sanctuary in historic Gondar
        </p>

        {/* 4. Outlined Rectangular Ghost CTA Button */}
        <a
          href="#reserve"
          onClick={handleBookingClick}
          className="inline-block border border-white/90 bg-black/25 backdrop-blur-sm text-white font-medium text-xs sm:text-sm tracking-[0.25em] uppercase px-8 sm:px-12 py-3.5 sm:py-4 hover:bg-white hover:text-[#1A1D21] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.3)] active:scale-95 cursor-pointer"
        >
          BOOK YOUR STAY
        </a>
      </div>

      {/* Bottom Center Subtle Scroll Indicator */}
      <a 
        href="#about"
        aria-label="Scroll to hotel overview"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white/70 hover:text-white transition-colors flex flex-col items-center gap-1 group"
      >
        <span className="text-[9px] tracking-[0.25em] uppercase text-white/60 group-hover:text-white transition-colors">
          DISCOVER
        </span>
        <ChevronDown className="w-5 h-5 text-[#E3A725] animate-bounce" />
      </a>

      {/* Bottom-Right Corner Widget: Explore Rooms ↗ */}
      <a
        href="#rooms"
        onClick={(e) => {
          e.preventDefault();
          const roomsEl = document.getElementById('rooms');
          if (roomsEl) roomsEl.scrollIntoView({ behavior: 'smooth' });
        }}
        className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 z-20 group flex items-center gap-2 bg-black/60 hover:bg-black/85 backdrop-blur-md border border-[#E3A725]/50 hover:border-[#E3A725] px-4 sm:px-5 py-2.5 sm:py-3 rounded-full shadow-[0_4px_25px_rgba(0,0,0,0.5)] transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <span className="text-xs sm:text-sm font-semibold tracking-wider text-white group-hover:text-[#E3A725] transition-colors">
          Explore Rooms
        </span>
        <ArrowUpRight className="w-4 h-4 text-[#E3A725] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </a>
    </section>
  );
}
