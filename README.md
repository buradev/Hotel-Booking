# 🏨 Olympic Hotel — Gondar, Ethiopia

> **Exceptional Accommodations & Historic Hospitality in the Camelot of Africa**  
> Situated peacefully near the University of Gondar Maraki campus.

A polished, high-end hotel website and reservation platform built with a warm premium feel, light ivory palette, rich Ethiopian gold accents, big editorial serif typography, and rounded pill buttons, paired with an interactive **Swagger (OpenAPI 3.0)** documentation suite for API testing.

---

## 🎨 Visual Design System

Crafted according to the refined hospitality design system from [Florida International Hotel Gondar](https://gitreverse.com/designs/floridainternationalhotel-com):

- **Palette**:
  - **Warm Ivory Backgrounds**: `#FAF8F3`, `#FCFAF7`, and `#FFFDF8` (surfaces and cards)
  - **Signature Hotel Gold Accents**: `#E3A725` (hover `#C98E15`, warm glow `#FFF4DA`)
  - **Charcoal Ink Text**: `#1A1D21` (primary text) and `#5A5D64` (body and descriptions)
  - **Deep Forest Contrast**: `#081A13` (contrast surfaces, badges, and footer)
- **Typography Pairing**:
  - **Headlines & Hero**: *Playfair Display* (classic luxury serif with italic flourishes)
  - **Body & Controls**: *Plus Jakarta Sans* (clean modern geometric sans-serif)
- **Buttons & Controls**:
  - Fully rounded pill buttons (`rounded-full`) with soft gold drop shadows (`shadow-gold-soft`)

---

## ✨ Features & Architecture

1. **Editorial Hero Section**:
   - Compelling hero headline about exceptional accommodations in historic Gondar.
   - Dual calls to action (*"Explore Rooms & Suites"* and *"Contact Hotel & Shuttle"*).
   - Reassurance pills for 24/7 guarded security, complimentary breakfast, fiber Wi-Fi, and airport shuttle.
   - **Interactive Check Availability Bar** with check-in/check-out dates, room type selector, and guest counts.

2. **The Hotel Story**:
   - Narrative honoring Emperor Fasilides' 17th-century imperial city of Gondar.
   - Olympic Hotel's mission as an executive sanctuary for academics, dignitaries, and cultural travelers.

3. **Comfort, Safety & Convenience near Maraki Campus**:
   - **Prime Maraki Location**: 2-minute stroll to the University of Gondar Maraki campus, away from noisy intersections.
   - **Round-the-Clock Safety**: 24/7 guarded perimeter, electronic RFID keycards, CCTV surveillance, gated private parking, and in-room digital lockboxes.
   - **Unmatched Convenience**: 15 minutes to Gondar Atse Tewodros Airport (GDQ), 7 minutes to Fasil Ghebbi Castles, with dual backup power generators and high-pressure hot water guarantee.

4. **Service Highlights**:
   - `01` Secure & Soundproof Guest Rooms (orthopedic bedding, double-glazed windows).
   - `02` Dining & Daily Complimentary Highland Breakfast (traditional Gondar dishes & continental spread).
   - `03` Around-the-Clock Reception (24/7 multilingual concierge, luggage care).
   - `04` High-Speed Wi-Fi & Work Lounge (fiber optic connection throughout).
   - `05` Complimentary Gondar Airport Shuttle (door-to-door transfer from GDQ).
   - `06` Traditional Ethiopian Buna Ceremony (daily roasted highland coffee with frankincense).

5. **Accommodations & Rooms Section**:
   - Room filtering: *All*, *Deluxe*, *Executive*, *Suites*, *Standard*, *Family*.
   - 6 Room types: Deluxe King, Executive Twin, Royal Imperial Suite, Standard Queen, Family Suite, Junior Terrace Suite.
   - Guest capacity, bed dimensions, square meters, and special rate badges.
   - Dynamic real-time currency conversion (**USD / ETB**).
   - **Interactive Room Detail Modal** with high-definition photo gallery, amenities checklist, and policies.

6. **Interactive Reservation & Voucher System**:
   - Live night calculations, 15% VAT and service charge, complimentary breakfast deduction.
   - Airport shuttle pickup scheduling with flight number input.
   - Generates an official reservation confirmation voucher with reference code (e.g., `OLY-GDR-84291`), printable format, and one-click WhatsApp concierge dispatch.

7. **Dining & Ethiopian Coffee Ritual**:
   - The Olympic Garden Restaurant and Highland Terrace.
   - Traditional 3-stage Buna ceremony (*Abol, Tona, Baraka*).

8. **Historic Gondar Guide & Excursions**:
   - Fasil Ghebbi (Royal Enclosure UNESCO Castles).
   - Debre Berhan Selassie (Winged angels ceiling).
   - Fasilides' Bath (Timkat Epiphany site).
   - Simien Mountains National Park day tours and trek coordination.

9. **Guest Testimonials & 24/7 Contact Section**:
   - Reviews from visiting faculty, international tourists, and Ethiopian business travelers.
   - Direct phone lines (`+251 58 114 8890`), direct WhatsApp (`+251 91 800 2233`), and interactive inquiry form.

---

## 🛠️ Swagger / OpenAPI 3.0 Testing Suite

The repository includes a comprehensive OpenAPI 3.0 specification and an interactive Swagger UI for testing the hotel's backend services:

- **Swagger UI**: Access at `/swagger.html`
- **OpenAPI 3.0 Spec**: Available at `/openapi.json`
- **Documented & Mocked Endpoints**:
  - `GET /api/rooms` — Filter and retrieve room inventory.
  - `GET /api/rooms/{id}` — Room details and amenities.
  - `GET /api/rooms/{id}/availability` — Check calendar availability.
  - `POST /api/bookings/calculate-rate` — Live pricing breakdown with taxes and currency conversion.
  - `POST /api/bookings` — Create a new reservation and generate voucher codes.
  - `GET /api/bookings/{confirmationCode}` — Retrieve reservation by reference.
  - `DELETE /api/bookings/{confirmationCode}` — Cancel booking.
  - `POST /api/shuttle/request` — Schedule airport transfer from GDQ Airport.
  - `POST /api/contact` — Submit concierge/tour inquiries.
  - `GET /api/hotel/info` — Hotel contacts, check-in/out policies.
  - `GET /api/hotel/exchange-rate` — Live conversion rate (USD to ETB).

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- Python 3.8+ (for running the unified static + API mock server)

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server (Vite)
```bash
npm run dev
```

### 3. Build Production Bundle
```bash
npm run build
```

### 4. Run Unified Server (Static App + Interactive Swagger API)
```bash
python server.py
```
Open [http://localhost:8080](http://localhost:8080) for the website, or [http://localhost:8080/swagger.html](http://localhost:8080/swagger.html) for Swagger testing!

---

## 📍 Location
**Olympic Hotel Gondar**  
Maraki Sub-City, Near University of Gondar Main Campus,  
Gondar, Amhara Region, Ethiopia  
Phone: `+251 58 114 8890` | WhatsApp: `+251 91 800 2233`  
Email: `reservations@olympichotelgondar.com`
