import React from 'react';
import { Landmark, MapPin, Compass, ArrowRight, ShieldCheck } from 'lucide-react';
import { gondarAttractions } from '../data/hotelData';

export function GondarGuide({ onOpenBooking }) {
  return (
    <section id="guide" className="py-16 lg:py-24 bg-[#FAF8F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#FFF4DA] text-[#997530] border border-[#E3A725]/30 mb-3">
              <Landmark className="w-3.5 h-3.5 text-[#E3A725]" />
              The Camelot of Africa
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1D21] leading-tight">
              Historic Gondar & <span className="text-[#C98E15] italic">excursions at your doorstep</span>.
            </h2>
          </div>
          <p className="text-sm text-[#5A5D64] max-w-md font-sans-clean">
            Our 24-hour reception desk is delighted to coordinate certified English and multilingual guides, private vehicles, and entrance passes to Gondar's legendary UNESCO sites.
          </p>
        </div>

        {/* Attractions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {gondarAttractions.map((attraction, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-[#EFE9DC] shadow-card-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                <img
                  src={attraction.image}
                  alt={attraction.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#081A13]/85 backdrop-blur-sm text-white px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase border border-white/10">
                  {attraction.tag}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-[11px] text-[#C98E15] font-semibold mb-2">
                    <MapPin className="w-3 h-3 text-[#E3A725]" />
                    <span>{attraction.distance}</span>
                  </div>
                  <h3 className="font-editorial text-xl font-bold text-[#1A1D21] mb-2 group-hover:text-[#C98E15] transition-colors leading-snug">
                    {attraction.name}
                  </h3>
                  <p className="text-xs text-[#5A5D64] leading-relaxed line-clamp-3 font-sans-clean">
                    {attraction.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-xs text-[#1A1D21] font-semibold group-hover:text-[#E3A725] transition-colors">
                  <span>Inquire at Concierge</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Simien Trekking & Guide Concierge Bar */}
        <div className="bg-[#FCFAF7] rounded-3xl p-6 sm:p-8 border border-[#E3A725]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#FFF4DA] text-[#E3A725] flex items-center justify-center shrink-0">
              <Compass className="w-6 h-6 text-[#C98E15]" />
            </div>
            <div>
              <h4 className="font-editorial text-xl font-bold text-[#1A1D21]">
                Planning a Simien Mountains Trek?
              </h4>
              <p className="text-xs text-[#5A5D64] mt-0.5">
                Leave your heavy luggage safely in our guarded storage while you trek, and enjoy a warm hot shower upon your return.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="rounded-full px-6 py-2.5 text-xs font-semibold text-[#1A1D21] bg-white border border-[#E3A725]/40 hover:bg-[#FAF8F3] transition-colors shrink-0 shadow-sm"
          >
            Ask Concierge About Tours
          </a>
        </div>
      </div>
    </section>
  );
}
