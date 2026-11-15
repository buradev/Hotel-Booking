import React from 'react';
import { ShieldCheck, Utensils, Clock, Wifi, Car, Coffee, Check, ArrowRight } from 'lucide-react';
import { servicesList } from '../data/hotelData';

const iconMap = {
  ShieldCheck: ShieldCheck,
  Utensils: Utensils,
  Clock: Clock,
  Wifi: Wifi,
  Car: Car,
  Coffee: Coffee
};

export function ServiceHighlights({ onOpenBooking }) {
  return (
    <section id="services" className="py-16 lg:py-24 bg-[#FCFAF7] border-t border-[#FCFAF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#FFF4DA] text-[#997530] border border-[#E3A725]/30 mb-3">
              Signature Hospitality
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1D21] leading-tight">
              Crafted services for an <span className="text-[#C98E15] italic">unforgettable stay</span>.
            </h2>
          </div>
          <p className="text-sm text-[#5A5D64] max-w-md font-sans-clean">
            Every amenity at Olympic Hotel is designed with care to ensure your time in Gondar is as comfortable, productive, and peaceful as possible.
          </p>
        </div>

        {/* 6 Feature Grid Cards (From Florida design pattern: numbered tags, category labels, rounded-3xl) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service) => {
            const IconComponent = iconMap[service.icon] || ShieldCheck;
            return (
              <div
                key={service.number}
                className="bg-white rounded-3xl p-8 border border-[#EFE9DC] shadow-card-soft hover:shadow-card-hover hover:border-[#E3A725]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-editorial text-3xl font-bold text-[#E3A725]/70 group-hover:text-[#E3A725] transition-colors">
                      {service.number}
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-[#FAF8F3] text-[#1A1D21] border border-black/5">
                      {service.badge}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-[#FFF4DA] text-[#C98E15] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <span className="text-xs font-semibold text-[#969592] uppercase tracking-wider block mb-1">
                    {service.category}
                  </span>

                  <h3 className="font-editorial text-2xl font-bold text-[#1A1D21] mb-3 group-hover:text-[#C98E15] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-[#5A5D64] leading-relaxed font-sans-clean">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between text-xs">
                  <span className="text-[#969592] font-medium">Included with booking</span>
                  <span className="w-6 h-6 rounded-full bg-[#FAF8F3] flex items-center justify-center text-[#E3A725] group-hover:bg-[#E3A725] group-hover:text-[#090D16] transition-colors">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Airport Shuttle & Reception Callout Banner */}
        <div className="mt-12 bg-gradient-to-r from-[#FAF8F3] via-white to-[#FAF8F3] rounded-3xl p-8 border border-[#E3A725]/30 shadow-md flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-full bg-[#E3A725] text-[#090D16] flex items-center justify-center shrink-0 shadow-md">
              <Car className="w-7 h-7" />
            </div>
            <div>
              <h4 className="font-editorial text-2xl font-bold text-[#1A1D21]">
                Arriving by flight at Gondar Airport (GDQ)?
              </h4>
              <p className="text-sm text-[#5A5D64] mt-0.5 font-sans-clean">
                Provide your flight number when reserving, and our driver will await you at the arrival terminal with a personalized Olympic Hotel greeting sign.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={() => onOpenBooking()}
              className="rounded-full px-7 py-3 text-xs font-semibold text-[#090D16] bg-[#E3A725] hover:bg-[#cf9418] shadow-gold-soft transition-all duration-200 active:scale-95 flex items-center gap-2"
            >
              <span>Book with Free Shuttle</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
