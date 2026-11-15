import React from 'react';
import { Users, BedDouble, Eye, Sparkles, Check, ArrowRight } from 'lucide-react';
import { roomTypes } from '../data/hotelData';

export function RoomsSection({ onSelectRoom, onEnquireRoom, activeFilter, setActiveFilter }) {
  const categories = [
    { id: 'all', label: 'All Accommodations' },
    { id: 'deluxe', label: 'Deluxe Rooms' },
    { id: 'executive', label: 'Executive Twin' },
    { id: 'suite', label: 'Suites & Penthouses' },
    { id: 'standard', label: 'Standard Comfort' },
    { id: 'family', label: 'Family Living' },
  ];

  const filteredRooms = activeFilter === 'all'
    ? roomTypes
    : roomTypes.filter(room => room.category === activeFilter);

  return (
    <section id="rooms" className="py-16 lg:py-24 bg-[#FAF8F3] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#FFF4DA] text-[#997530] border border-[#E3A725]/30 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#E3A725]" />
            Sanctuary & Sleep Quality
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1D21] leading-tight mb-4">
            Curated rooms for <span className="text-[#C98E15] italic">restorative sleep</span>.
          </h2>
          <p className="text-sm sm:text-base text-[#5A5D64] leading-relaxed">
            Every room at Olympic Hotel features soundproof double glazing, orthopedic mattresses, handcrafted Ethiopian wood furniture, and private balconies overlooking the Gondar highlands.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`rounded-full px-5 py-2 text-xs font-semibold transition-all duration-200 ${
                  activeFilter === cat.id
                    ? 'bg-[#E3A725] text-[#090D16] shadow-gold-soft scale-105'
                    : 'bg-white text-[#5A5D64] hover:text-[#1A1D21] border border-[#EFE9DC] hover:border-[#E3A725]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRooms.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-[32px] overflow-hidden border border-[#EFE9DC] shadow-card-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Image & Badges */}
              <div className="relative aspect-[16/11] overflow-hidden bg-stone-100">
                <img
                  src={room.images[0]}
                  alt={room.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Badges Overlay */}
                <div className="absolute top-4 left-4 flex flex-col gap-1.5 items-start">
                  <span className="rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider bg-[#E3A725] text-[#090D16] shadow-md">
                    {room.tag}
                  </span>
                  <span className="rounded-full px-3 py-1 text-[10px] font-medium bg-black/60 backdrop-blur-sm text-white">
                    {room.badge}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  {/* Metadata Specs Bar */}
                  <div className="flex items-center gap-4 text-xs text-[#5A5D64] mb-3 pb-3 border-b border-gray-100">
                    <div className="flex items-center gap-1.5 font-medium text-[#1A1D21]">
                      <Users className="w-3.5 h-3.5 text-[#E3A725]" />
                      <span>{room.guests}</span>
                    </div>
                    <span className="text-gray-300">•</span>
                    <div className="flex items-center gap-1.5">
                      <BedDouble className="w-3.5 h-3.5 text-[#E3A725]" />
                      <span className="truncate">{room.bed.split('(')[0]}</span>
                    </div>
                    <span className="text-gray-300">•</span>
                    <span>{room.size.split('/')[0]}</span>
                  </div>

                  <h3 className="font-editorial text-2xl font-bold text-[#1A1D21] mb-2 group-hover:text-[#C98E15] transition-colors">
                    {room.title}
                  </h3>

                  <p className="text-xs text-[#5A5D64] leading-relaxed line-clamp-2 mb-4 font-sans-clean">
                    {room.description}
                  </p>

                  {/* Features checklist snippet */}
                  <div className="grid grid-cols-2 gap-1.5 mb-6 text-[11px] text-[#1A1D21]">
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[#E3A725] shrink-0" />
                      <span className="truncate">Breakfast Buffet</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[#E3A725] shrink-0" />
                      <span className="truncate">Fiber Wi-Fi</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[#E3A725] shrink-0" />
                      <span className="truncate">Private Balcony</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[#E3A725] shrink-0" />
                      <span className="truncate">Airport Shuttle</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons: View Details & Enquire for this Room */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectRoom(room)}
                    className="rounded-full px-4 py-2.5 text-xs font-semibold text-[#1A1D21] bg-[#FCFAF7] border border-[#E3A725]/40 hover:bg-[#FAF8F3] hover:border-[#E3A725] transition-colors flex items-center gap-1.5"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#E3A725]" />
                    <span>View Details</span>
                  </button>

                  <button
                    onClick={() => onEnquireRoom(room)}
                    className="rounded-full px-5 py-2.5 text-xs font-semibold text-[#090D16] bg-[#E3A725] hover:bg-[#cf9418] shadow-gold-soft transition-all duration-200 active:scale-95 flex items-center gap-1.5"
                  >
                    <span>Enquire for Room</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
