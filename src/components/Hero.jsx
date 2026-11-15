import React, { useState } from 'react';
import { Calendar, Users, BedDouble, ArrowRight, ShieldCheck, Coffee, Wifi, Car, Star, MapPin } from 'lucide-react';
import { hotelInfo, roomTypes } from '../data/hotelData';

export function Hero({ onOpenBooking, onSearchAvailability }) {
  const [checkIn, setCheckIn] = useState('2026-11-25');
  const [checkOut, setCheckOut] = useState('2026-11-28');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [guests, setGuests] = useState('2');

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearchAvailability) {
      onSearchAvailability({ checkIn, checkOut, category: selectedCategory, guests });
    }
    const reserveEl = document.getElementById('reserve');
    if (reserveEl) {
      reserveEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-6 pb-16 lg:pt-12 lg:pb-24 overflow-hidden">
      {/* Decorative Warm Ivory & Gold Ambient Blurs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E3A725]/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFF4DA]/60 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow Label */}
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#FFF4DA] text-[#997530] border border-[#E3A725]/30">
            <Star className="w-3.5 h-3.5 fill-[#E3A725] text-[#E3A725]" />
            Imperial Gondar • Amhara Region, Ethiopia
          </span>
          <span className="hidden md:inline-flex items-center gap-1 text-xs text-[#5A5D64]">
            <MapPin className="w-3 h-3 text-[#E3A725]" />
            Maraki Campus Quarter
          </span>
        </div>

        {/* Hero Headline & Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12">
          <div className="lg:col-span-7">
            <h1 className="font-editorial text-4xl sm:text-6xl lg:text-[72px] font-bold tracking-tight text-[#1A1D21] leading-[1.08] mb-6">
              Exceptional <span className="italic font-normal text-[#C98E15]">accommodations</span> in historic Gondar.
            </h1>
            
            <p className="text-base sm:text-lg text-[#5A5D64] leading-relaxed max-w-2xl mb-8 font-sans-clean">
              Welcome to Olympic Hotel — your gracious executive sanctuary nestled peacefully near the University of Gondar Maraki campus. Experience world-renowned Ethiopian warmth, 24/7 guarded security, gourmet highland breakfasts, and effortless proximity to the royal castles of Fasilides.
            </p>

            {/* Obvious Calls to Action */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#rooms"
                className="rounded-full px-8 py-3.5 text-sm font-semibold text-[#090D16] bg-[#E3A725] hover:bg-[#cf9418] shadow-gold-soft hover:shadow-lg transition-all duration-200 active:scale-95 flex items-center gap-2 group"
              >
                <span>Explore Rooms & Suites</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#reserve"
                onClick={onOpenBooking}
                className="rounded-full px-8 py-3.5 text-sm font-semibold text-[#1A1D21] bg-[#FCFAF7] border border-[#E3A725]/50 hover:bg-[#FAF8F3] hover:border-[#E3A725] transition-all shadow-sm"
              >
                Make a Booking Enquiry
              </a>
            </div>

            {/* Quick reassurance pills */}
            <div className="mt-8 pt-8 border-t border-[#1A1D21]/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-[#5A5D64]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#E3A725] shrink-0" />
                <span className="font-medium text-[#1A1D21]">24/7 Security</span>
              </div>
              <div className="flex items-center gap-2">
                <Coffee className="w-4 h-4 text-[#E3A725] shrink-0" />
                <span className="font-medium text-[#1A1D21]">Free Breakfast</span>
              </div>
              <div className="flex items-center gap-2">
                <Wifi className="w-4 h-4 text-[#E3A725] shrink-0" />
                <span className="font-medium text-[#1A1D21]">Fiber Wi-Fi</span>
              </div>
              <div className="flex items-center gap-2">
                <Car className="w-4 h-4 text-[#E3A725] shrink-0" />
                <span className="font-medium text-[#1A1D21]">Airport Shuttle</span>
              </div>
            </div>
          </div>

          {/* Right Hero Image Composition with Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary hero image */}
              <div className="relative rounded-[32px] overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-stone-200 group">
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85"
                  alt="Olympic Hotel Gondar Luxury Suite & Grounds"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081A13]/80 via-transparent to-transparent"></div>
                
                {/* Overlay Text in photo */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold bg-[#E3A725] text-[#090D16] mb-2 uppercase tracking-wider">
                    Gondar Executive Sanctuary
                  </span>
                  <h3 className="font-editorial text-2xl font-bold text-white mb-1">
                    Serenity near Maraki Campus
                  </h3>
                  <p className="text-xs text-white/80 line-clamp-2">
                    Soundproof comfort, orthopedic bedding, and traditional Ethiopian hospitality in the Camelot of Africa.
                  </p>
                </div>
              </div>

              {/* Floating Verified Badge */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white rounded-2xl p-3.5 shadow-xl border border-[#FAF8F3] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FFF4DA] flex items-center justify-center">
                  <Star className="w-5 h-5 fill-[#E3A725] text-[#E3A725]" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-bold text-[#1A1D21]">4.9 / 5.0</span>
                    <span className="text-[11px] text-[#969592] font-normal">(340+ reviews)</span>
                  </div>
                  <span className="text-[11px] text-[#5A5D64]">Highest rated for safety & quiet</span>
                </div>
              </div>

              {/* Floating Shuttle Badge */}
              <div className="absolute -bottom-4 -right-4 sm:-right-6 bg-[#081A13] text-white rounded-2xl p-3.5 shadow-2xl border border-[#E3A725]/40 flex items-center gap-3 max-w-[220px]">
                <div className="w-9 h-9 rounded-full bg-[#E3A725] text-[#090D16] flex items-center justify-center shrink-0">
                  <Car className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#FAF8F3]">Airport Shuttle</div>
                  <div className="text-[11px] text-[#E3A725]">15 min to GDQ Airport</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Check Availability & Dates Quick Bar */}
        <div className="bg-white rounded-3xl lg:rounded-full p-4 lg:p-3 shadow-xl border border-[#EFE9DC] relative z-20">
          <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 items-center">
            {/* Check-In */}
            <div className="lg:col-span-3 px-4 py-2 border-b sm:border-b-0 sm:border-r border-gray-100 flex flex-col justify-center">
              <label className="text-[11px] uppercase tracking-wider font-semibold text-[#969592] flex items-center gap-1.5 mb-1">
                <Calendar className="w-3.5 h-3.5 text-[#E3A725]" />
                Check-in Date
              </label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="text-sm font-semibold text-[#1A1D21] bg-transparent focus:outline-none cursor-pointer"
              />
            </div>

            {/* Check-Out */}
            <div className="lg:col-span-3 px-4 py-2 border-b sm:border-b-0 sm:border-r border-gray-100 flex flex-col justify-center">
              <label className="text-[11px] uppercase tracking-wider font-semibold text-[#969592] flex items-center gap-1.5 mb-1">
                <Calendar className="w-3.5 h-3.5 text-[#E3A725]" />
                Check-out Date
              </label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="text-sm font-semibold text-[#1A1D21] bg-transparent focus:outline-none cursor-pointer"
              />
            </div>

            {/* Room Type Selector */}
            <div className="lg:col-span-2 px-4 py-2 border-b sm:border-b-0 sm:border-r border-gray-100 flex flex-col justify-center">
              <label className="text-[11px] uppercase tracking-wider font-semibold text-[#969592] flex items-center gap-1.5 mb-1">
                <BedDouble className="w-3.5 h-3.5 text-[#E3A725]" />
                Room Type
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="text-xs font-semibold text-[#1A1D21] bg-transparent focus:outline-none cursor-pointer pr-2"
              >
                <option value="all">All Accommodations</option>
                <option value="deluxe">Deluxe King</option>
                <option value="executive">Executive Twin</option>
                <option value="suite">Royal Suite</option>
                <option value="standard">Standard Queen</option>
                <option value="family">Family Suite</option>
              </select>
            </div>

            {/* Guests */}
            <div className="lg:col-span-2 px-4 py-2 flex flex-col justify-center">
              <label className="text-[11px] uppercase tracking-wider font-semibold text-[#969592] flex items-center gap-1.5 mb-1">
                <Users className="w-3.5 h-3.5 text-[#E3A725]" />
                Guests
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="text-xs font-semibold text-[#1A1D21] bg-transparent focus:outline-none cursor-pointer"
              >
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4+ Family</option>
              </select>
            </div>

            {/* Submit Action Pill Button */}
            <div className="lg:col-span-2">
              <button
                type="submit"
                className="w-full rounded-full py-3.5 px-5 bg-[#E3A725] hover:bg-[#cf9418] text-[#090D16] font-semibold text-xs transition-all shadow-gold-soft active:scale-95 flex items-center justify-center gap-2"
              >
                <span>Check & Enquire</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
