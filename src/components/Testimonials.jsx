import React from 'react';
import { Star, Quote, Award } from 'lucide-react';
import { testimonials } from '../data/hotelData';

export function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-[#FCFAF7] border-t border-[#FCFAF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#FFF4DA] text-[#997530] border border-[#E3A725]/30 mb-3">
            <Award className="w-3.5 h-3.5 text-[#E3A725]" />
            Guest Experiences
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1D21] leading-tight mb-4">
            Trusted by travelers, scholars & <span className="text-[#C98E15] italic">global guests</span>.
          </h2>
          <p className="text-sm sm:text-base text-[#5A5D64] leading-relaxed">
            Read authentic impressions from guests who made Olympic Hotel their sanctuary in Gondar.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-[#EFE9DC] shadow-card-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div className="w-10 h-10 rounded-full bg-[#FFF4DA] flex items-center justify-center text-[#E3A725] mb-6">
                <Quote className="w-5 h-5 text-[#C98E15]" />
              </div>

              {/* 5 Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#E3A725] text-[#E3A725]" />
                ))}
              </div>

              <p className="text-sm text-[#1A1D21] italic leading-relaxed mb-6 font-sans-clean">
                "{item.quote}"
              </p>

              <div className="pt-4 border-t border-gray-100 mt-auto">
                <div className="font-editorial text-lg font-bold text-[#1A1D21]">
                  {item.author}
                </div>
                <div className="text-xs text-[#C98E15] font-medium">
                  {item.role}
                </div>
                <div className="text-[11px] text-[#969592]">
                  {item.country}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
