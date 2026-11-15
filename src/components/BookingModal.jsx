import React, { useState, useEffect } from 'react';
import { X, Calendar, Users, BedDouble, Car, Check, ShieldCheck, Download, Printer, Copy, Sparkles, Phone, Mail } from 'lucide-react';
import { roomTypes, hotelInfo } from '../data/hotelData';

export function BookingModal({ isOpen, onClose, selectedRoom, currency }) {
  if (!isOpen) return null;

  const [roomId, setRoomId] = useState(selectedRoom?.id || roomTypes[0].id);
  const [checkIn, setCheckIn] = useState('2026-11-20');
  const [checkOut, setCheckOut] = useState('2026-11-23');
  const [guests, setGuests] = useState('2');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [flightNumber, setFlightNumber] = useState('');
  const [needsShuttle, setNeedsShuttle] = useState(true);
  const [specialRequests, setSpecialRequests] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (selectedRoom) {
      setRoomId(selectedRoom.id);
    }
  }, [selectedRoom]);

  const currentRoom = roomTypes.find(r => r.id === roomId) || roomTypes[0];

  // Calculate nights
  const d1 = new Date(checkIn);
  const d2 = new Date(checkOut);
  const diffTime = Math.max(d2 - d1, 86400000);
  const nights = Math.max(Math.ceil(diffTime / (1000 * 60 * 60 * 24)), 1);

  const nightlyRateUSD = currentRoom.priceUSD;
  const totalRoomUSD = nightlyRateUSD * nights;
  const vatUSD = Math.round(totalRoomUSD * 0.15);
  const grandTotalUSD = totalRoomUSD + vatUSD;

  const nightlyRateETB = currentRoom.priceETB;
  const totalRoomETB = nightlyRateETB * nights;
  const vatETB = Math.round(totalRoomETB * 0.15);
  const grandTotalETB = totalRoomETB + vatETB;

  const handleSubmit = (e) => {
    e.preventDefault();
    const code = `OLY-GDR-${Math.floor(10000 + Math.random() * 90000)}`;
    setConfirmationCode(code);
    setIsConfirmed(true);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(confirmationCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-[#FAF8F3] w-full max-w-3xl rounded-[32px] overflow-hidden shadow-2xl border border-[#E3A725]/30 relative max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100 sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E3A725]"></span>
            <span className="font-editorial text-lg font-bold text-[#1A1D21]">
              Olympic Hotel Reservation
            </span>
            <span className="text-xs text-[#969592] hidden sm:inline">• Gondar, Ethiopia</span>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-stone-100 hover:bg-[#E3A725] hover:text-[#090D16] flex items-center justify-center text-[#1A1D21] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          {!isConfirmed ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Selected Room Header Card */}
              <div className="bg-white p-4 rounded-2xl border border-[#EFE9DC] flex items-center gap-4">
                <img
                  src={currentRoom.images[0]}
                  alt={currentRoom.title}
                  className="w-20 h-20 rounded-xl object-cover shrink-0"
                />
                <div className="flex-1">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#FFF4DA] text-[#997530]">
                    {currentRoom.tag}
                  </span>
                  <h4 className="font-editorial text-xl font-bold text-[#1A1D21] mt-0.5">
                    {currentRoom.title}
                  </h4>
                  <p className="text-xs text-[#5A5D64]">
                    {currentRoom.bed} • {currentRoom.size}
                  </p>
                </div>
                <div className="text-right">
                  <div className="font-editorial text-xl font-bold text-[#1A1D21]">
                    {currency === 'ETB' ? `${currentRoom.priceETB.toLocaleString()} Br` : `$${currentRoom.priceUSD}`}
                  </div>
                  <span className="text-[11px] text-[#969592]">per night</span>
                </div>
              </div>

              {/* Room Selection Dropdown if user wants to change */}
              <div>
                <label className="text-xs uppercase font-bold tracking-wider text-[#1A1D21] block mb-1.5">
                  Select Accommodation Type
                </label>
                <select
                  value={roomId}
                  onChange={(e) => setRoomId(e.target.value)}
                  className="w-full bg-white border border-[#EFE9DC] rounded-xl px-4 py-2.5 text-sm font-medium text-[#1A1D21] focus:outline-none focus:border-[#E3A725]"
                >
                  {roomTypes.map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.title} — {currency === 'ETB' ? `${r.priceETB.toLocaleString()} Br` : `$${r.priceUSD}`}/night ({r.guests})
                    </option>
                  ))}
                </select>
              </div>

              {/* Dates & Guests Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs uppercase font-bold tracking-wider text-[#1A1D21] block mb-1.5">
                    Check-in Date
                  </label>
                  <input
                    type="date"
                    required
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full bg-white border border-[#EFE9DC] rounded-xl px-4 py-2.5 text-sm font-medium text-[#1A1D21] focus:outline-none focus:border-[#E3A725]"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase font-bold tracking-wider text-[#1A1D21] block mb-1.5">
                    Check-out Date
                  </label>
                  <input
                    type="date"
                    required
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full bg-white border border-[#EFE9DC] rounded-xl px-4 py-2.5 text-sm font-medium text-[#1A1D21] focus:outline-none focus:border-[#E3A725]"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase font-bold tracking-wider text-[#1A1D21] block mb-1.5">
                    Guests
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full bg-white border border-[#EFE9DC] rounded-xl px-4 py-2.5 text-sm font-medium text-[#1A1D21] focus:outline-none focus:border-[#E3A725]"
                  >
                    <option value="1">1 Adult</option>
                    <option value="2">2 Adults</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4+ Family</option>
                  </select>
                </div>
              </div>

              {/* Guest Contact Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase font-bold tracking-wider text-[#1A1D21] block mb-1.5">
                    Full Guest Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Helen Bekele"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-white border border-[#EFE9DC] rounded-xl px-4 py-2.5 text-sm text-[#1A1D21] focus:outline-none focus:border-[#E3A725]"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase font-bold tracking-wider text-[#1A1D21] block mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="guest@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white border border-[#EFE9DC] rounded-xl px-4 py-2.5 text-sm text-[#1A1D21] focus:outline-none focus:border-[#E3A725]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase font-bold tracking-wider text-[#1A1D21] block mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+251 91 234 5678"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white border border-[#EFE9DC] rounded-xl px-4 py-2.5 text-sm text-[#1A1D21] focus:outline-none focus:border-[#E3A725]"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase font-bold tracking-wider text-[#1A1D21] block mb-1.5">
                    Arrival Flight # (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. ET 122 (for GDQ shuttle pickup)"
                    value={flightNumber}
                    onChange={(e) => setFlightNumber(e.target.value)}
                    className="w-full bg-white border border-[#EFE9DC] rounded-xl px-4 py-2.5 text-sm text-[#1A1D21] focus:outline-none focus:border-[#E3A725]"
                  />
                </div>
              </div>

              {/* Airport Shuttle Toggle */}
              <div className="bg-white p-4 rounded-2xl border border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FFF4DA] text-[#E3A725] flex items-center justify-center">
                    <Car className="w-5 h-5 text-[#C98E15]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#1A1D21] block">
                      Complimentary Airport Shuttle Service
                    </span>
                    <span className="text-[11px] text-[#5A5D64]">
                      Door-to-door transfer from Gondar Atse Tewodros Airport
                    </span>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={needsShuttle}
                  onChange={(e) => setNeedsShuttle(e.target.checked)}
                  className="w-5 h-5 accent-[#E3A725] cursor-pointer"
                />
              </div>

              {/* Special Requests */}
              <div>
                <label className="text-xs uppercase font-bold tracking-wider text-[#1A1D21] block mb-1.5">
                  Special Requests / Dietary Notes
                </label>
                <textarea
                  rows="2"
                  placeholder="e.g., quiet high-floor room, twin beds, vegetarian fasting breakfast, late arrival"
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="w-full bg-white border border-[#EFE9DC] rounded-xl p-3 text-sm text-[#1A1D21] focus:outline-none focus:border-[#E3A725]"
                ></textarea>
              </div>

              {/* Price Breakdown Card */}
              <div className="bg-[#FFF4DA]/40 p-5 rounded-2xl border border-[#E3A725]/30 space-y-2 text-xs">
                <div className="flex justify-between text-[#5A5D64]">
                  <span>{nights} {nights === 1 ? 'Night' : 'Nights'} × {currency === 'ETB' ? `${nightlyRateETB.toLocaleString()} Br` : `$${nightlyRateUSD}`}</span>
                  <span>{currency === 'ETB' ? `${totalRoomETB.toLocaleString()} Br` : `$${totalRoomUSD}`}</span>
                </div>
                <div className="flex justify-between text-[#5A5D64]">
                  <span>Daily Highland Breakfast Buffet</span>
                  <span className="text-green-700 font-semibold">Included (FREE)</span>
                </div>
                <div className="flex justify-between text-[#5A5D64]">
                  <span>Airport Shuttle (Gondar GDQ)</span>
                  <span className="text-green-700 font-semibold">Included (FREE)</span>
                </div>
                <div className="flex justify-between text-[#5A5D64]">
                  <span>Taxes & Service Charge (15%)</span>
                  <span>{currency === 'ETB' ? `${vatETB.toLocaleString()} Br` : `$${vatUSD}`}</span>
                </div>
                <div className="pt-2 border-t border-[#E3A725]/30 flex justify-between items-baseline text-sm font-bold text-[#1A1D21]">
                  <span>Estimated Total</span>
                  <span className="font-editorial text-2xl text-[#1A1D21]">
                    {currency === 'ETB' ? `${grandTotalETB.toLocaleString()} Br` : `$${grandTotalUSD}`}
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full rounded-full py-4 bg-[#E3A725] hover:bg-[#cf9418] text-[#090D16] font-bold text-sm shadow-gold-soft transition-all duration-200 active:scale-95 flex items-center justify-center gap-2"
              >
                <Check className="w-4 h-4" />
                <span>Confirm & Generate Booking Voucher</span>
              </button>
            </form>
          ) : (
            /* Confirmation Voucher View */
            <div className="space-y-6 text-center animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-[#FFF4DA] border-2 border-[#E3A725] text-[#E3A725] mx-auto flex items-center justify-center">
                <Check className="w-8 h-8 text-[#C98E15]" />
              </div>

              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-[#997530] bg-[#FFF4DA] px-3 py-1 rounded-full border border-[#E3A725]/30">
                  Reservation Confirmed
                </span>
                <h3 className="font-editorial text-3xl font-bold text-[#1A1D21] mt-3">
                  Thank you, {fullName || 'Honored Guest'}!
                </h3>
                <p className="text-xs text-[#5A5D64] mt-1 font-sans-clean">
                  We look forward to welcoming you to Olympic Hotel in historic Gondar.
                </p>
              </div>

              {/* Printable Voucher Box */}
              <div className="bg-white rounded-3xl p-6 border-2 border-dashed border-[#E3A725]/50 text-left space-y-4 shadow-sm">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#969592] tracking-wider block">Booking Reference</span>
                    <span className="font-mono text-xl font-bold text-[#1A1D21] tracking-wider">
                      {confirmationCode}
                    </span>
                  </div>
                  <button
                    onClick={handleCopyCode}
                    className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-[#FAF8F3] border border-gray-200 hover:border-[#E3A725] text-[#1A1D21]"
                  >
                    <Copy className="w-3.5 h-3.5 text-[#E3A725]" />
                    <span>{copied ? 'Copied!' : 'Copy Code'}</span>
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-[#969592] block">Room Reserved:</span>
                    <span className="font-bold text-[#1A1D21]">{currentRoom.title}</span>
                  </div>
                  <div>
                    <span className="text-[#969592] block">Guests:</span>
                    <span className="font-bold text-[#1A1D21]">{guests} Guests</span>
                  </div>
                  <div>
                    <span className="text-[#969592] block">Check-in:</span>
                    <span className="font-bold text-[#1A1D21]">{checkIn} (14:00)</span>
                  </div>
                  <div>
                    <span className="text-[#969592] block">Check-out:</span>
                    <span className="font-bold text-[#1A1D21]">{checkOut} (11:30)</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[#969592] block">Airport Shuttle:</span>
                    <span className="font-semibold text-green-700">
                      {needsShuttle ? `Requested (${flightNumber || 'Flight TBA'})` : 'Not requested'}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[#969592] block">Total Amount:</span>
                    <span className="font-editorial text-lg font-bold text-[#1A1D21]">
                      {currency === 'ETB' ? `${grandTotalETB.toLocaleString()} Br` : `$${grandTotalUSD}`}
                    </span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  onClick={handlePrint}
                  className="rounded-full px-6 py-2.5 text-xs font-semibold text-[#1A1D21] bg-white border border-[#E3A725]/40 hover:bg-[#FAF8F3] flex items-center gap-2"
                >
                  <Printer className="w-3.5 h-3.5 text-[#E3A725]" />
                  <span>Print Voucher</span>
                </button>

                <a
                  href={`https://wa.me/${hotelInfo.whatsapp}?text=Hello%20Olympic%20Hotel,%20I%20have%20booked%20reference%20${confirmationCode}%20under%20the%20name%20${encodeURIComponent(fullName)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full px-6 py-2.5 text-xs font-semibold text-[#090D16] bg-[#E3A725] hover:bg-[#cf9418] shadow-gold-soft flex items-center gap-2"
                >
                  <span>WhatsApp Concierge</span>
                </a>

                <button
                  onClick={onClose}
                  className="rounded-full px-6 py-2.5 text-xs font-semibold text-[#5A5D64] hover:text-[#1A1D21] border border-gray-200"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
