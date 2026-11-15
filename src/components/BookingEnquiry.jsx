import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ExternalLink, Calendar, Check, Send, Sparkles, Copy, Mail } from 'lucide-react';
import { hotelInfo, roomTypes } from '../data/hotelData';

export function BookingEnquiry({ preselectedRoom, preselectedDates }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [checkIn, setCheckIn] = useState(preselectedDates?.checkIn || '2026-11-25');
  const [checkOut, setCheckOut] = useState(preselectedDates?.checkOut || '2026-11-28');
  const [selectedRoomId, setSelectedRoomId] = useState(preselectedRoom?.id || roomTypes[0].id);
  const [guests, setGuests] = useState('2');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (preselectedRoom) {
      setSelectedRoomId(preselectedRoom.id);
    }
  }, [preselectedRoom]);

  useEffect(() => {
    if (preselectedDates?.checkIn) setCheckIn(preselectedDates.checkIn);
    if (preselectedDates?.checkOut) setCheckOut(preselectedDates.checkOut);
  }, [preselectedDates]);

  const selectedRoom = roomTypes.find(r => r.id === selectedRoomId) || roomTypes[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    const code = `OLY-GDR-${Math.floor(10000 + Math.random() * 90000)}`;
    setConfirmationCode(code);
    setIsSubmitted(true);

    // Prepare mailto string as fallback so user or browser can trigger actual email client
    const subject = encodeURIComponent(`Booking Enquiry: ${selectedRoom.title} (${code})`);
    const bodyText = encodeURIComponent(
      `Booking Enquiry for Olympic Hotel Gondar\n` +
      `Reference: ${code}\n\n` +
      `Guest Name: ${name}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone || 'Not provided'}\n` +
      `Room Type: ${selectedRoom.title}\n` +
      `Check-in Date: ${checkIn}\n` +
      `Check-out Date: ${checkOut}\n` +
      `Guests: ${guests}\n\n` +
      `Special Requests / Message:\n${message || 'None'}\n`
    );

    // Optional: send to server API
    fetch('/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fullName: name,
        email,
        phone,
        roomId: selectedRoomId,
        checkIn,
        checkOut,
        guests: parseInt(guests, 10) || 2,
        specialRequests: message
      })
    }).catch(() => {});
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(confirmationCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="reserve" className="py-20 lg:py-28 bg-[#FAF8F3] scroll-mt-16 border-t border-[#EFE9DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Reserve Narrative & Third-Party / Direct Booking Options */}
          <div className="lg:col-span-5 space-y-6 pt-2">
            <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#C98E15] block">
              RESERVE
            </span>

            <h2 className="font-editorial text-4xl sm:text-5xl font-bold text-[#1A1D21] leading-[1.12]">
              Make a booking enquiry
            </h2>

            <p className="text-sm sm:text-base text-[#5A5D64] leading-relaxed font-sans-clean">
              Send us your dates and we'll confirm availability. Prefer to book through a familiar checkout? Use our Expedia listing.
            </p>

            {/* Expedia Button */}
            <div className="pt-2">
              <a
                href={hotelInfo.expediaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-white bg-[#b3822a] hover:bg-[#996e22] shadow-md transition-all duration-200 active:scale-95"
              >
                <span>Book on Expedia</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3 max-w-sm text-xs text-[#969592] uppercase font-semibold">
              <span className="h-px bg-[#EFE9DC] flex-1"></span>
              <span>— OR —</span>
              <span className="h-px bg-[#EFE9DC] flex-1"></span>
            </div>

            {/* Direct Channel Buttons: Call & WhatsApp */}
            <div className="space-y-3 max-w-sm">
              <a
                href={`tel:${hotelInfo.phonePrimary}`}
                className="w-full flex items-center justify-center gap-2 rounded-full px-6 py-3 text-xs font-semibold text-[#1A1D21] bg-transparent border border-[#1A1D21]/30 hover:border-[#1A1D21] hover:bg-black/5 transition-all"
              >
                <Phone className="w-4 h-4 text-[#C98E15]" />
                <span>Call us {hotelInfo.phonePrimary}</span>
              </a>

              <a
                href={`https://wa.me/${hotelInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 rounded-full px-6 py-3 text-xs font-semibold text-[#1A1D21] bg-transparent border border-[#1A1D21]/30 hover:border-[#1A1D21] hover:bg-black/5 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#C98E15]" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Direct Reassurance Note */}
            <div className="pt-4 border-t border-[#EFE9DC] max-w-sm text-xs text-[#5A5D64]">
              <span className="font-semibold text-[#1A1D21] block">Direct Booking Inclusions:</span>
              <span>Complimentary breakfast buffet & Gondar Airport shuttle transfer included with every enquiry.</span>
            </div>
          </div>

          {/* Right Column: Enquiry Form Card (Matching Reference Design) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-[#EFE9DC]">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Row 1: Your Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-[#1A1D21] block mb-1.5">
                        Your name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Dr. Helen Bekele"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-[#FAF8F3] border border-[#EFE9DC] rounded-xl px-4 py-3 text-sm text-[#1A1D21] focus:outline-none focus:border-[#C98E15] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-[#1A1D21] block mb-1.5">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="helen@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-[#FAF8F3] border border-[#EFE9DC] rounded-xl px-4 py-3 text-sm text-[#1A1D21] focus:outline-none focus:border-[#C98E15] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone, Check-in, Check-out */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-[#1A1D21] block mb-1.5">
                        Phone (optional)
                      </label>
                      <input
                        type="tel"
                        placeholder="+251 91 800 2233"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-[#FAF8F3] border border-[#EFE9DC] rounded-xl px-4 py-3 text-sm text-[#1A1D21] focus:outline-none focus:border-[#C98E15] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-[#1A1D21] block mb-1.5">
                        Check-in *
                      </label>
                      <input
                        type="date"
                        required
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        className="w-full bg-[#FAF8F3] border border-[#EFE9DC] rounded-xl px-3 py-3 text-xs sm:text-sm text-[#1A1D21] focus:outline-none focus:border-[#C98E15] transition-colors cursor-pointer"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-[#1A1D21] block mb-1.5">
                        Check-out *
                      </label>
                      <input
                        type="date"
                        required
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        className="w-full bg-[#FAF8F3] border border-[#EFE9DC] rounded-xl px-3 py-3 text-xs sm:text-sm text-[#1A1D21] focus:outline-none focus:border-[#C98E15] transition-colors cursor-pointer"
                      />
                    </div>
                  </div>

                  {/* Row 3: Room Type & Guests */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-[#1A1D21] block mb-1.5">
                        Room type *
                      </label>
                      <select
                        value={selectedRoomId}
                        onChange={(e) => setSelectedRoomId(e.target.value)}
                        className="w-full bg-[#FAF8F3] border border-[#EFE9DC] rounded-xl px-4 py-3 text-sm font-medium text-[#1A1D21] focus:outline-none focus:border-[#C98E15] transition-colors cursor-pointer"
                      >
                        {roomTypes.map((r) => (
                          <option key={r.id} value={r.id}>
                            {r.title} ({r.guests})
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-[#1A1D21] block mb-1.5">
                        Guests
                      </label>
                      <select
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        className="w-full bg-[#FAF8F3] border border-[#EFE9DC] rounded-xl px-4 py-3 text-sm font-medium text-[#1A1D21] focus:outline-none focus:border-[#C98E15] transition-colors cursor-pointer"
                      >
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                        <option value="5">5+ Family</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 4: Message */}
                  <div>
                    <label className="text-xs font-semibold text-[#1A1D21] block mb-1.5">
                      Message
                    </label>
                    <textarea
                      rows="4"
                      placeholder="Tell us about your stay — number of rooms, special requests, anything we should know."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-[#FAF8F3] border border-[#EFE9DC] rounded-xl p-4 text-sm text-[#1A1D21] focus:outline-none focus:border-[#C98E15] transition-colors resize-y"
                    ></textarea>
                  </div>

                  {/* Primary Submit Pill: Send enquiry */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full rounded-full py-4 bg-[#081A13] hover:bg-[#122b22] text-[#FAF8F3] font-bold text-sm shadow-md transition-all duration-200 active:scale-95 flex items-center justify-center gap-2"
                    >
                      <span>Send enquiry</span>
                    </button>
                  </div>
                </form>
              ) : (
                /* Confirmation View */
                <div className="text-center py-6 space-y-6 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#FFF4DA] border-2 border-[#E3A725] text-[#C98E15] mx-auto flex items-center justify-center">
                    <Check className="w-8 h-8" />
                  </div>

                  <div>
                    <span className="text-xs uppercase font-bold tracking-widest text-[#997530] bg-[#FFF4DA] px-3 py-1 rounded-full border border-[#E3A725]/30">
                      Enquiry Dispatched to Hotel
                    </span>
                    <h3 className="font-editorial text-3xl font-bold text-[#1A1D21] mt-3">
                      Thank you, {name}!
                    </h3>
                    <p className="text-xs text-[#5A5D64] mt-1.5 font-sans-clean max-w-md mx-auto">
                      Your booking enquiry has been registered with Olympic Hotel Gondar. A member of our reservation desk will email you confirmation and availability promptly.
                    </p>
                  </div>

                  {/* Summary Card */}
                  <div className="bg-[#FAF8F3] rounded-2xl p-5 border-2 border-dashed border-[#E3A725]/50 text-left space-y-3 max-w-lg mx-auto">
                    <div className="flex items-center justify-between pb-2 border-b border-gray-200">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-[#969592] tracking-wider block">Reference Code</span>
                        <span className="font-mono text-lg font-bold text-[#1A1D21]">{confirmationCode}</span>
                      </div>
                      <button
                        onClick={handleCopyCode}
                        className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-white border border-gray-200 hover:border-[#E3A725] text-[#1A1D21]"
                      >
                        <Copy className="w-3.5 h-3.5 text-[#C98E15]" />
                        <span>{copied ? 'Copied!' : 'Copy'}</span>
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div>
                        <span className="text-[#969592] block">Room Requested:</span>
                        <span className="font-bold text-[#1A1D21]">{selectedRoom.title}</span>
                      </div>
                      <div>
                        <span className="text-[#969592] block">Stay Dates:</span>
                        <span className="font-bold text-[#1A1D21]">{checkIn} to {checkOut}</span>
                      </div>
                    </div>

                    <div className="pt-2 text-xs text-[#5A5D64]">
                      <span className="text-[#969592] block">Sent To:</span>
                      <span className="font-medium text-[#1A1D21]">{hotelInfo.email}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <a
                      href={`mailto:${hotelInfo.email}?subject=Booking%20Enquiry%20${confirmationCode}&body=Hello%20Olympic%20Hotel,%20my%20name%20is%20${encodeURIComponent(name)}...`}
                      className="rounded-full px-6 py-2.5 text-xs font-semibold text-[#1A1D21] bg-white border border-[#E3A725]/40 hover:bg-[#FAF8F3] flex items-center gap-2"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#C98E15]" />
                      <span>Send via Email Client</span>
                    </a>

                    <a
                      href={`https://wa.me/${hotelInfo.whatsapp}?text=Hello%20Olympic%20Hotel,%20I%20have%20sent%20a%20booking%20enquiry%20under%20reference%20${confirmationCode}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full px-6 py-2.5 text-xs font-semibold text-[#090D16] bg-[#E3A725] hover:bg-[#cf9418] shadow-gold-soft flex items-center gap-2"
                    >
                      <span>Notify on WhatsApp</span>
                    </a>

                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="rounded-full px-6 py-2.5 text-xs font-semibold text-[#5A5D64] hover:text-[#1A1D21] border border-gray-200"
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
