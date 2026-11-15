import React from 'react';
import { Sparkles, Compass, HeartHandshake, ShieldCheck, Award } from 'lucide-react';
import { hotelInfo } from '../data/hotelData';

export function HotelStory() {
  return (
    <section id="story" className="py-16 lg:py-24 bg-[#FCFAF7] border-y border-[#FCFAF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Storytelling Montage */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden shadow-lg border-2 border-white aspect-[3/4]">
                  <img
                    src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80"
                    alt="Historic Gondar Castle Architecture"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="bg-[#FAF8F3] p-5 rounded-3xl border border-[#E3A725]/20 shadow-sm">
                  <div className="font-editorial text-3xl font-bold text-[#E3A725] mb-1">1636</div>
                  <div className="text-xs font-semibold text-[#1A1D21] uppercase tracking-wider">Imperial Heritage</div>
                  <p className="text-xs text-[#5A5D64] mt-1">
                    Gondar served as the royal seat of Ethiopian emperors for over 200 years.
                  </p>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="bg-[#081A13] text-white p-5 rounded-3xl border border-[#E3A725]/30 shadow-lg">
                  <div className="flex items-center gap-2 text-[#E3A725] mb-2">
                    <Sparkles className="w-4 h-4" />
                    <span className="text-xs font-semibold uppercase tracking-wider">Our Hospitality</span>
                  </div>
                  <p className="text-xs text-white/90 italic leading-relaxed">
                    "At Olympic Hotel, every guest is received not merely as a visitor, but as an honored traveler entering an Ethiopian home."
                  </p>
                </div>
                <div className="rounded-3xl overflow-hidden shadow-lg border-2 border-white aspect-[3/4]">
                  <img
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
                    alt="Olympic Hotel Dining & Hospitality"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Decorative Gold Seal */}
            <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 bg-white py-3 px-5 rounded-full shadow-xl border border-[#E3A725]/30">
              <Award className="w-5 h-5 text-[#E3A725]" />
              <span className="text-xs font-semibold text-[#1A1D21]">Excellence in Gondar Hospitality</span>
            </div>
          </div>

          {/* Right Column: Hotel Narrative */}
          <div className="lg:col-span-6 lg:pl-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#FFF4DA] text-[#997530] border border-[#E3A725]/30 mb-4">
              <Compass className="w-3.5 h-3.5 text-[#E3A725]" />
              The Hotel Story
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1D21] leading-tight mb-6">
              A refined haven where Gondar's history meets <span className="text-[#C98E15] italic">modern tranquility</span>.
            </h2>

            <div className="space-y-4 text-[#5A5D64] text-sm sm:text-base leading-relaxed font-sans-clean">
              <p>
                Gondar, often celebrated as the <em>Camelot of Africa</em>, is a city crowned with seventeenth-century stone castles, soaring royal towers, and ancient churches. Situated peacefully in the gentle highlands of the Maraki district, Olympic Hotel was created to be the city’s premier peaceful retreat.
              </p>
              <p>
                Whether you arrive to lecture at the University of Gondar Maraki campus, explore the World Heritage castles of Emperor Fasilides, or stage your expedition to the breathtaking Simien Mountains, Olympic Hotel provides the restful sanctuary you deserve.
              </p>
              <p>
                Here, mornings begin with the invigorating aroma of freshly roasted highland coffee during our traditional Buna ceremony, followed by an abundant breakfast buffet. Nights are quiet and restorative, secured behind 24/7 guarded premises with sound-insulated rooms and backup power systems that never sleep.
              </p>
            </div>

            {/* Three key pillars */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#1A1D21]/10">
              <div className="flex flex-col">
                <span className="font-editorial text-2xl font-bold text-[#1A1D21]">60+</span>
                <span className="text-xs text-[#5A5D64] mt-1">Comfortable Guest Rooms & Suites</span>
              </div>
              <div className="flex flex-col">
                <span className="font-editorial text-2xl font-bold text-[#E3A725]">100%</span>
                <span className="text-xs text-[#5A5D64] mt-1">Guaranteed Backup Power & Hot Water</span>
              </div>
              <div className="flex flex-col">
                <span className="font-editorial text-2xl font-bold text-[#1A1D21]">15 Min</span>
                <span className="text-xs text-[#5A5D64] mt-1">Direct to Gondar Airport (GDQ)</span>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="#rooms"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-xs font-semibold text-[#090D16] bg-[#E3A725] hover:bg-[#cf9418] shadow-gold-soft transition-all duration-200 active:scale-95"
              >
                <span>Discover Accommodations</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
