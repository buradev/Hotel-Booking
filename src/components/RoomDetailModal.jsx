import React, { useState } from 'react';
import { X, Users, BedDouble, Maximize2, Check, Calendar, ArrowRight } from 'lucide-react';

export function RoomDetailModal({ room, onClose, onEnquireRoom }) {
  if (!room) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-[#FAF8F3] w-full max-w-4xl rounded-[32px] overflow-hidden shadow-2xl border border-[#E3A725]/30 relative max-h-[92vh] flex flex-col">
        {/* Top bar with close button */}
        <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100 sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#FFF4DA] text-[#997530] border border-[#E3A725]/30">
              {room.tag}
            </span>
            <span className="text-xs text-[#5A5D64] hidden sm:inline">• Olympic Hotel Gondar</span>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-stone-100 hover:bg-[#E3A725] hover:text-[#090D16] flex items-center justify-center text-[#1A1D21] transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Main Photo & Thumbnail Gallery */}
          <div>
            <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden shadow-md bg-stone-100 mb-3">
              <img
                src={room.images[activeImageIndex]}
                alt={room.title}
                className="w-full h-full object-cover transition-all duration-300"
              />
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full">
                Photo {activeImageIndex + 1} of {room.images.length}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2">
              {room.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-20 h-14 rounded-xl overflow-hidden border-2 transition-all ${
                    activeImageIndex === idx ? 'border-[#E3A725] scale-105 shadow-md' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Title & Key Specs */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-gray-200">
            <div>
              <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#1A1D21] mb-2">
                {room.title}
              </h2>
              <div className="flex flex-wrap items-center gap-3 text-xs text-[#5A5D64]">
                <span className="flex items-center gap-1.5 font-semibold text-[#1A1D21] bg-white px-3 py-1 rounded-full border border-gray-100">
                  <Users className="w-3.5 h-3.5 text-[#E3A725]" />
                  {room.guests}
                </span>
                <span className="flex items-center gap-1.5 bg-white px-3 py-1 rounded-full border border-gray-100">
                  <BedDouble className="w-3.5 h-3.5 text-[#E3A725]" />
                  {room.bed}
                </span>
                <span className="flex items-center gap-1.5 bg-white px-3 py-1 rounded-full border border-gray-100">
                  <Maximize2 className="w-3.5 h-3.5 text-[#E3A725]" />
                  {room.size}
                </span>
              </div>
            </div>

            <div className="bg-[#FFF4DA]/60 px-4 py-2.5 rounded-2xl border border-[#E3A725]/30 text-xs text-[#997530] font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E3A725] animate-pulse"></span>
              <span>Direct Booking Enquiry Available</span>
            </div>
          </div>

          {/* Detailed Room Description */}
          <div>
            <h3 className="font-editorial text-xl font-bold text-[#1A1D21] mb-2">
              Accommodation Description
            </h3>
            <p className="text-sm text-[#5A5D64] leading-relaxed font-sans-clean">
              {room.description}
            </p>
          </div>

          {/* Key Inclusions */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <h4 className="text-xs uppercase tracking-wider font-bold text-[#1A1D21] mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E3A725]"></span>
              Signature Inclusions for this Room
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#1A1D21]">
              {room.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#E3A725] shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Comprehensive Amenities Checklist */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-[#1A1D21] mb-4">
              All In-Room Amenities & Equipment
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-[#5A5D64]">
              {room.amenities.map((amenity, i) => (
                <div key={i} className="bg-[#FAF8F3] p-2.5 rounded-xl border border-gray-100 flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#E3A725] shrink-0" />
                  <span className="truncate">{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hotel Stay Policies */}
          <div className="bg-[#FFF4DA]/40 p-4 rounded-2xl border border-[#E3A725]/30 text-xs text-[#5A5D64] flex flex-col sm:flex-row justify-between gap-3">
            <div>
              <span className="font-bold text-[#1A1D21] block">Check-in / Check-out</span>
              <span>Check-in: 14:00 • Check-out: 11:30 (Late check-out on request)</span>
            </div>
            <div>
              <span className="font-bold text-[#1A1D21] block">Airport Shuttle</span>
              <span>Complimentary pickup at Gondar Atse Tewodros Airport (GDQ)</span>
            </div>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="p-4 sm:p-6 bg-white border-t border-gray-100 flex items-center justify-between gap-4 sticky bottom-0 z-10">
          <button
            onClick={onClose}
            className="rounded-full px-5 py-2.5 text-xs font-semibold text-[#5A5D64] hover:text-[#1A1D21] border border-gray-200"
          >
            Back to Accommodations
          </button>

          <button
            onClick={() => {
              onClose();
              onEnquireRoom(room);
            }}
            className="rounded-full px-7 py-2.5 text-xs font-semibold text-[#090D16] bg-[#E3A725] hover:bg-[#cf9418] shadow-gold-soft transition-all duration-200 flex items-center gap-2 active:scale-95"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Enquire for this Room</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
