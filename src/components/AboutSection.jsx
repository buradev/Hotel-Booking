import React from 'react';
import { HotelStory } from './HotelStory';
import { MarakiCampusSafety } from './MarakiCampusSafety';

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20">
      {/* Hotel Story & Heritage */}
      <HotelStory />

      {/* Comfort, Safety & Maraki Campus Proximity */}
      <MarakiCampusSafety />
    </section>
  );
}
