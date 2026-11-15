import React from 'react';
import { GraduationCap, ShieldAlert, Compass, CheckCircle2, MapPin, Zap, Lock, Bus } from 'lucide-react';
import { marakiPillars, hotelInfo } from '../data/hotelData';

export function MarakiCampusSafety() {
  return (
    <section id="maraki-safety" className="py-16 lg:py-24 bg-[#FAF8F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#FFF4DA] text-[#997530] border border-[#E3A725]/30 mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-[#E3A725]" />
            Prime Maraki Location & Peace of Mind
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1D21] leading-tight mb-4">
            Comfort, safety, and convenience <span className="text-[#C98E15] italic">near Maraki campus</span>.
          </h2>
          <p className="text-sm sm:text-base text-[#5A5D64] leading-relaxed">
            Positioned in Gondar’s serene Maraki district, Olympic Hotel was intentionally situated to provide a quiet, highly secure executive retreat away from bustling market traffic, while keeping you minutes from the university and heritage landmarks.
          </p>
        </div>

        {/* 3 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Card 1: Maraki Proximity */}
          <div className="bg-white rounded-3xl p-8 border border-[#EFE9DC] shadow-card-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#FFF4DA] text-[#E3A725] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-6 h-6 text-[#C98E15]" />
              </div>
              <span className="text-[11px] font-semibold tracking-wider uppercase text-[#C98E15] bg-[#FFF4DA] px-2.5 py-1 rounded-full">
                Academic & Executive Hub
              </span>
              <h3 className="font-editorial text-2xl font-bold text-[#1A1D21] mt-4 mb-3">
                Steps to University of Gondar
              </h3>
              <p className="text-sm text-[#5A5D64] leading-relaxed mb-6">
                Direct, effortless access to the University of Gondar’s prominent Maraki campus, medical faculties, and research facilities. An ideal stay for visiting professors, guest researchers, and conference delegates.
              </p>
            </div>
            <ul className="space-y-2.5 pt-4 border-t border-gray-100 text-xs text-[#1A1D21]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E3A725] shrink-0" />
                <span>2-minute drive to Maraki University gates</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E3A725] shrink-0" />
                <span>Quiet residential zone free of night horns</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E3A725] shrink-0" />
                <span>Comfortable ergonomic study and work desks</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Security & Peace */}
          <div className="bg-white rounded-3xl p-8 border border-[#EFE9DC] shadow-card-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#E3A725]/10 rounded-bl-full pointer-events-none"></div>
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#081A13] text-[#E3A725] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldAlert className="w-6 h-6 text-[#E3A725]" />
              </div>
              <span className="text-[11px] font-semibold tracking-wider uppercase text-[#081A13] bg-[#FCFAF7] border border-[#081A13]/20 px-2.5 py-1 rounded-full">
                Guarded Sanctuary
              </span>
              <h3 className="font-editorial text-2xl font-bold text-[#1A1D21] mt-4 mb-3">
                Round-the-Clock Safety
              </h3>
              <p className="text-sm text-[#5A5D64] leading-relaxed mb-6">
                Your safety and tranquility are our highest priority. Our property features full perimeter walls, 24/7 trained security personnel, electronic RFID room locks, and continuous CCTV surveillance.
              </p>
            </div>
            <ul className="space-y-2.5 pt-4 border-t border-gray-100 text-xs text-[#1A1D21]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E3A725] shrink-0" />
                <span>24/7 on-site uniformed security personnel</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E3A725] shrink-0" />
                <span>Electronic keycard access & in-room safes</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E3A725] shrink-0" />
                <span>Gated, secured private guest parking</span>
              </li>
            </ul>
          </div>

          {/* Card 3: Convenience & Logistics */}
          <div className="bg-white rounded-3xl p-8 border border-[#EFE9DC] shadow-card-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#FFF4DA] text-[#E3A725] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Compass className="w-6 h-6 text-[#C98E15]" />
              </div>
              <span className="text-[11px] font-semibold tracking-wider uppercase text-[#C98E15] bg-[#FFF4DA] px-2.5 py-1 rounded-full">
                Effortless Logistics
              </span>
              <h3 className="font-editorial text-2xl font-bold text-[#1A1D21] mt-4 mb-3">
                Zero-Hassle Travel
              </h3>
              <p className="text-sm text-[#5A5D64] leading-relaxed mb-6">
                Experience seamless travel with our dedicated Gondar airport shuttle, high-speed fiber internet, and dual industrial backup generators guaranteeing 24-hour uninterrupted electricity and hot water.
              </p>
            </div>
            <ul className="space-y-2.5 pt-4 border-t border-gray-100 text-xs text-[#1A1D21]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E3A725] shrink-0" />
                <span>15 minutes to Gondar Atse Tewodros Airport</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E3A725] shrink-0" />
                <span>7 minutes to Fasil Ghebbi Castles & town</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E3A725] shrink-0" />
                <span>Dual backup generator & water reservoir system</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Location Distance Pill Bar */}
        <div className="bg-[#081A13] text-[#FAF8F3] rounded-3xl p-6 lg:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 border border-[#E3A725]/30">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#E3A725] text-[#090D16] flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-editorial text-xl font-bold text-white">
                Gondar Strategic Transit Proximity
              </h4>
              <p className="text-xs text-white/70">
                Olympic Hotel • Maraki Campus Quarter, Gondar, Ethiopia
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs">
            <div className="bg-white/10 rounded-full px-4 py-2 flex items-center gap-2 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-[#E3A725]"></span>
              <span className="text-white/80">Maraki Campus:</span>
              <span className="font-bold text-white">600 meters (2 min)</span>
            </div>
            <div className="bg-white/10 rounded-full px-4 py-2 flex items-center gap-2 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-[#E3A725]"></span>
              <span className="text-white/80">Fasil Ghebbi:</span>
              <span className="font-bold text-white">3.4 km (7 min)</span>
            </div>
            <div className="bg-white/10 rounded-full px-4 py-2 flex items-center gap-2 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-[#E3A725]"></span>
              <span className="text-white/80">Airport (GDQ):</span>
              <span className="font-bold text-white">14 km (15 min)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
