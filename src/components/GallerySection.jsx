import React from 'react';
import { DiningCulture } from './DiningCulture';
import { GondarGuide } from './GondarGuide';
import { Camera, Sparkles } from 'lucide-react';

export function GallerySection({ onEnquire }) {
  return (
    <section id="gallery" className="scroll-mt-20">
      {/* Visual Section Intro Banner */}
      <div className="bg-[#FAF8F3] pt-16 pb-4 border-t border-[#FCFAF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#FFF4DA] text-[#997530] border border-[#E3A725]/30 mb-3">
            <Camera className="w-3.5 h-3.5 text-[#E3A725]" />
            Hotel & Destination Gallery
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1D21] leading-tight mb-3">
            Highland dining & <span className="text-[#C98E15] italic">Gondar's wonders</span>.
          </h2>
          <p className="text-sm sm:text-base text-[#5A5D64] leading-relaxed">
            Explore our culinary offerings, daily Buna rituals, and the iconic UNESCO heritage sites that surround Olympic Hotel in historic Gondar.
          </p>
        </div>
      </div>

      {/* Dining & Ethiopian Buna Ceremony */}
      <DiningCulture />

      {/* Historic Gondar Excursions & Heritage Guide */}
      <GondarGuide onOpenBooking={onEnquire} />
    </section>
  );
}
