import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServiceHighlights } from './components/ServiceHighlights';
import { RoomsSection } from './components/RoomsSection';
import { GallerySection } from './components/GallerySection';
import { Testimonials } from './components/Testimonials';
import { BookingEnquiry } from './components/BookingEnquiry';
import { ContactSection } from './components/ContactSection';
import { RoomDetailModal } from './components/RoomDetailModal';
import { Footer } from './components/Footer';
import { roomTypes } from './data/hotelData';

export function App() {
  const [selectedRoomForDetail, setSelectedRoomForDetail] = useState(null);
  const [enquiryRoom, setEnquiryRoom] = useState(roomTypes[0]);
  const [enquiryDates, setEnquiryDates] = useState({ checkIn: '2026-11-25', checkOut: '2026-11-28' });
  const [activeFilter, setActiveFilter] = useState('all');

  const scrollToReserve = () => {
    const el = document.getElementById('reserve');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEnquireRoom = (room) => {
    setEnquiryRoom(room);
    scrollToReserve();
  };

  const handleSearchAvailability = ({ checkIn, checkOut, category, guests }) => {
    setEnquiryDates({ checkIn, checkOut });
    if (category && category !== 'all') {
      const found = roomTypes.find(r => r.category === category);
      if (found) setEnquiryRoom(found);
    }
    scrollToReserve();
  };

  return (
    <div className="min-h-screen bg-[#FAF8F3] text-[#1A1D21] flex flex-col selection:bg-[#E3A725]/30">
      {/* Navigation Header */}
      <Navbar onOpenBooking={scrollToReserve} />

      {/* Main Content */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenBooking={scrollToReserve}
          onSearchAvailability={handleSearchAvailability}
        />

        {/* 2. About Us Section (Hotel Story + Comfort, Safety & Maraki Campus) */}
        <AboutSection />

        {/* 3. Services Section */}
        <ServiceHighlights onOpenBooking={scrollToReserve} />

        {/* 4. Rooms & Accommodations Section (No pricing, No 'Book' button) */}
        <RoomsSection
          onSelectRoom={(room) => setSelectedRoomForDetail(room)}
          onEnquireRoom={handleEnquireRoom}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />

        {/* 5. Gallery Section (Dining, Buna Ceremony & Gondar Heritage Guide) */}
        <GallerySection onEnquire={scrollToReserve} />

        {/* 6. Guest Testimonials */}
        <Testimonials />

        {/* 7. Make a Booking Enquiry Section (Matching Reference Image) */}
        <BookingEnquiry
          preselectedRoom={enquiryRoom}
          preselectedDates={enquiryDates}
        />

        {/* 8. Contact Us Section with Location Explorer & Google Maps */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Room Detail Modal (Pricing removed, Enquire CTA) */}
      <RoomDetailModal
        room={selectedRoomForDetail}
        onClose={() => setSelectedRoomForDetail(null)}
        onEnquireRoom={handleEnquireRoom}
      />
    </div>
  );
}

export default App;
