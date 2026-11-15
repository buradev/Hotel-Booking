import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock, Send, CheckCircle2, Navigation, Compass, ExternalLink } from 'lucide-react';
import { hotelInfo } from '../data/hotelData';

export function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry & Travel Logistics',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'General Inquiry & Travel Logistics',
        message: ''
      });
    }, 5000);
  };

  const nearbyLocations = [
    { name: "University of Gondar (Maraki Campus)", distance: "600 m", time: "2 min walk", type: "Academic" },
    { name: "Fasil Ghebbi Royal Castles", distance: "3.4 km", time: "7 min drive", type: "UNESCO Site" },
    { name: "Debre Berhan Selassie Church", distance: "4.8 km", time: "10 min drive", type: "Heritage" },
    { name: "Gondar Atse Tewodros Airport (GDQ)", distance: "14 km", time: "15 min shuttle", type: "Airport" },
    { name: "Simien Mountains National Park", distance: "98 km", time: "Day excursion", type: "Nature" }
  ];

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FAF8F3] scroll-mt-16 border-t border-[#EFE9DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#FFF4DA] text-[#997530] border border-[#E3A725]/30 mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#E3A725]" />
            Location & 24/7 Front Office
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1D21] leading-tight mb-4">
            Visit us in <span className="text-[#C98E15] italic">historic Gondar</span>.
          </h2>
          <p className="text-sm sm:text-base text-[#5A5D64] leading-relaxed">
            Positioned in Gondar's peaceful Maraki sub-city near the University of Gondar campus. Explore our location on the interactive map below or reach our team 24 hours a day.
          </p>
        </div>

        {/* Contact Coordinates Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Phone */}
          <a
            href={`tel:${hotelInfo.phonePrimary}`}
            className="bg-white p-6 rounded-3xl border border-[#EFE9DC] shadow-card-soft hover:shadow-card-hover hover:border-[#E3A725] transition-all flex flex-col justify-between group"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#FFF4DA] text-[#C98E15] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-[#969592] uppercase tracking-wider block mb-1">
                24/7 Front Desk
              </span>
              <span className="text-base font-bold text-[#1A1D21] group-hover:text-[#C98E15] transition-colors block">
                {hotelInfo.phonePrimary}
              </span>
              <span className="text-xs text-[#5A5D64] mt-1 block">Always reachable</span>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${hotelInfo.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-6 rounded-3xl border border-[#EFE9DC] shadow-card-soft hover:shadow-card-hover hover:border-[#E3A725] transition-all flex flex-col justify-between group"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#081A13] text-[#E3A725] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-5 h-5 text-[#E3A725]" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-[#969592] uppercase tracking-wider block mb-1">
                WhatsApp Concierge
              </span>
              <span className="text-base font-bold text-[#1A1D21] group-hover:text-[#C98E15] transition-colors block">
                {hotelInfo.phoneMobile}
              </span>
              <span className="text-xs text-green-700 font-semibold mt-1 block">Instant Chat</span>
            </div>
          </a>

          {/* Email */}
          <a
            href={`mailto:${hotelInfo.email}`}
            className="bg-white p-6 rounded-3xl border border-[#EFE9DC] shadow-card-soft hover:shadow-card-hover hover:border-[#E3A725] transition-all flex flex-col justify-between group"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#FFF4DA] text-[#C98E15] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-[#969592] uppercase tracking-wider block mb-1">
                Email Inquiries
              </span>
              <span className="text-sm font-bold text-[#1A1D21] group-hover:text-[#C98E15] transition-colors truncate block">
                {hotelInfo.email}
              </span>
              <span className="text-xs text-[#5A5D64] mt-1 block">Response within 2 hrs</span>
            </div>
          </a>

          {/* Reception Hours */}
          <div className="bg-white p-6 rounded-3xl border border-[#EFE9DC] shadow-card-soft flex flex-col justify-between">
            <div className="w-12 h-12 rounded-2xl bg-[#FCFAF7] border border-[#E3A725]/30 text-[#C98E15] flex items-center justify-center mb-4">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-[#969592] uppercase tracking-wider block mb-1">
                Check-in / Out
              </span>
              <span className="text-sm font-bold text-[#1A1D21] block">
                Check-in: 14:00 • Check-out: 11:30
              </span>
              <span className="text-xs text-[#5A5D64] mt-1 block">Late check-out available</span>
            </div>
          </div>
        </div>

        {/* Interactive Location Explorer & Google Map */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#EFE9DC] shadow-lg mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 mb-6 border-b border-gray-100">
            <div>
              <span className="text-xs uppercase font-bold text-[#C98E15] tracking-wider block">
                Interactive Neighborhood Explorer
              </span>
              <h3 className="font-editorial text-2xl font-bold text-[#1A1D21] mt-1">
                Olympic Hotel in Gondar's Maraki Quarter
              </h3>
              <p className="text-xs sm:text-sm text-[#5A5D64] mt-0.5">
                {hotelInfo.location}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://maps.google.com/?q=University+of+Gondar+Maraki+Campus"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-5 py-2 text-xs font-semibold text-[#1A1D21] bg-[#FCFAF7] border border-[#E3A725]/40 hover:bg-[#FAF8F3] hover:border-[#E3A725] transition-all flex items-center gap-1.5"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#C98E15]" />
              </a>
            </div>
          </div>

          {/* Interactive Map Iframe */}
          <div className="rounded-2xl overflow-hidden border border-[#EFE9DC] aspect-[16/9] sm:aspect-[21/9] w-full relative bg-stone-100">
            <iframe
              title="Olympic Hotel Gondar Location Map"
              src="https://maps.google.com/maps?q=University%20of%20Gondar%20Maraki%20Campus,%20Gondar,%20Ethiopia&t=&z=14&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Proximity Explorer Badges */}
          <div className="mt-6 pt-6 border-t border-gray-100">
            <span className="text-xs font-semibold text-[#969592] uppercase tracking-wider block mb-3">
              Nearby Distances & Transit Times:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {nearbyLocations.map((loc, idx) => (
                <div key={idx} className="bg-[#FAF8F3] p-3 rounded-2xl border border-gray-100 flex flex-col justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C98E15] mb-1">
                    {loc.type}
                  </span>
                  <span className="text-xs font-bold text-[#1A1D21] line-clamp-1 mb-1">
                    {loc.name}
                  </span>
                  <div className="flex items-center justify-between text-[11px] text-[#5A5D64] pt-1 border-t border-black/5">
                    <span>{loc.distance}</span>
                    <span className="font-semibold text-[#1A1D21]">{loc.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Send a Message Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#EFE9DC] shadow-card-soft max-w-3xl mx-auto">
          <h3 className="font-editorial text-2xl font-bold text-[#1A1D21] mb-2 text-center">
            Send a Note to Our Front Desk
          </h3>
          <p className="text-xs text-[#5A5D64] mb-6 text-center font-sans-clean">
            Have a question about group transport, university events, or billing? Reach out below.
          </p>

          {formSubmitted ? (
            <div className="bg-[#FFF4DA] border border-[#E3A725] rounded-2xl p-6 text-center space-y-3 animate-in fade-in duration-300">
              <div className="w-12 h-12 rounded-full bg-[#E3A725] text-[#090D16] mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="font-editorial text-xl font-bold text-[#1A1D21]">
                Message Received!
              </h4>
              <p className="text-xs text-[#5A5D64]">
                Thank you. The front office in Gondar has received your message and will reply via email or phone promptly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-[#1A1D21] block mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alistair Campbell"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#FAF8F3] border border-[#EFE9DC] rounded-xl px-4 py-2.5 text-sm text-[#1A1D21] focus:outline-none focus:border-[#E3A725]"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-[#1A1D21] block mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="guest@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#FAF8F3] border border-[#EFE9DC] rounded-xl px-4 py-2.5 text-sm text-[#1A1D21] focus:outline-none focus:border-[#E3A725]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-[#1A1D21] block mb-1">Message *</label>
                <textarea
                  required
                  rows="3"
                  placeholder="How can we assist you with your stay in Gondar?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#FAF8F3] border border-[#EFE9DC] rounded-xl p-3 text-sm text-[#1A1D21] focus:outline-none focus:border-[#E3A725]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full rounded-full py-3.5 bg-[#E3A725] hover:bg-[#cf9418] text-[#090D16] font-bold text-xs shadow-gold-soft transition-all duration-200 active:scale-95 flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Message</span>
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
