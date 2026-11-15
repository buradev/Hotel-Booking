import React from 'react';
import { Coffee, UtensilsCrossed, Sun, Sparkles, Clock, Check } from 'lucide-react';
import { diningHighlights } from '../data/hotelData';

export function DiningCulture() {
  return (
    <section id="dining" className="py-16 lg:py-24 bg-[#FCFAF7] border-t border-[#FCFAF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#FFF4DA] text-[#997530] border border-[#E3A725]/30 mb-3">
            <UtensilsCrossed className="w-3.5 h-3.5 text-[#E3A725]" />
            Culinary Traditions & Highland Roasts
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1D21] leading-tight mb-4">
            Dining, daily breakfast & <span className="text-[#C98E15] italic">the Buna ceremony</span>.
          </h2>
          <p className="text-sm sm:text-base text-[#5A5D64] leading-relaxed">
            Begin each day with a complimentary highland breakfast, then join us on the open-air garden terrace every afternoon for the fragrant ritual of traditional Ethiopian coffee roasting.
          </p>
        </div>

        {/* 2 Primary Dining Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {diningHighlights.map((dining, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-[#EFE9DC] shadow-card-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                <img
                  src={dining.image}
                  alt={dining.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-[#081A13]/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#E3A725]" />
                  <span>{dining.timing}</span>
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-editorial text-2xl font-bold text-[#1A1D21] mb-2 group-hover:text-[#C98E15] transition-colors">
                    {dining.title}
                  </h3>
                  <p className="text-sm text-[#5A5D64] leading-relaxed mb-6 font-sans-clean">
                    {dining.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                  {dining.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs px-3 py-1 rounded-full bg-[#FAF8F3] text-[#1A1D21] border border-gray-100 flex items-center gap-1.5 font-medium"
                    >
                      <Check className="w-3 h-3 text-[#E3A725]" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Traditional Buna Ceremony Spotlight Card */}
        <div className="bg-[#081A13] text-[#FAF8F3] rounded-[32px] p-8 sm:p-12 border border-[#E3A725]/30 relative overflow-hidden">
          <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-[#E3A725]/15 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#E3A725] text-[#090D16] mb-4">
                <Coffee className="w-3.5 h-3.5" />
                Cultural Experience • 3:00 PM Daily
              </span>
              <h3 className="font-editorial text-3xl sm:text-4xl font-bold text-white mb-4">
                The Sacred Ethiopian Coffee Ceremony
              </h3>
              <p className="text-sm text-white/80 leading-relaxed max-w-2xl font-sans-clean">
                Ethiopia is the birthplace of coffee. In our garden lounge, our hospitality hostess roasts raw emerald coffee beans over gentle charcoal coals, passes the fragrant smoke for you to breathe in the blessings, and brews three traditional rounds (Abol, Tona, and Baraka) accompanied by roasted barley (Kolo) and fresh popcorn.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
              <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
                <span className="text-xs uppercase text-[#E3A725] font-bold tracking-wider block">Complimentary For Guests</span>
                <span className="text-sm text-white font-medium">Daily 3:00 PM - 5:30 PM</span>
              </div>
              <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
                <span className="text-xs uppercase text-[#E3A725] font-bold tracking-wider block">Single-Origin Highland Beans</span>
                <span className="text-sm text-white font-medium">Yirgacheffe & Local Gondarine Roast</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
