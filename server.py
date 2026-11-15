#!/usr/bin/env python3
"""
Olympic Hotel Gondar — Unified Web & Mock API Server for Testing
Serves the production static build (dist) and mock /api endpoints with CORS support.
"""

import http.server
import socketserver
import json
import os
import re
from urllib.parse import urlparse, parse_qs
import random
from datetime import datetime

PORT = 8080
DIRECTORY = os.path.join(os.path.dirname(os.path.abspath(__file__)), "dist")

# In-memory store for interactive testing
ROOMS_DATA = [
  {
    "id": "deluxe-king",
    "title": "Deluxe King Room",
    "category": "deluxe",
    "tag": "Best Seller",
    "badge": "Mountain & Garden View",
    "priceUSD": 68,
    "priceETB": 9180,
    "guests": "Up to 2 Guests",
    "maxGuests": 2,
    "bed": "1 Plush King Bed (Orthopedic)",
    "size": "34 m² / 366 sq ft",
    "description": "An elegant, peaceful retreat tailored for leisure visitors and visiting professionals.",
    "highlights": [
      "Complimentary Daily Ethiopian & Continental Breakfast",
      "Free High-Speed Fiber Wi-Fi (50+ Mbps)",
      "Private Balcony with Seating",
      "Ensuite Marble Rain Shower & Organic Toiletries"
    ],
    "amenities": ["24/7 Room Service", "Safe", "Mini Fridge", "Smart TV"]
  },
  {
    "id": "executive-twin",
    "title": "Executive Twin Room",
    "category": "executive",
    "tag": "Maraki Scholar Choice",
    "badge": "Ideal for Colleagues & Friends",
    "priceUSD": 72,
    "priceETB": 9720,
    "guests": "Up to 2-3 Guests",
    "maxGuests": 3,
    "bed": "2 Extra-Long Twin Beds",
    "size": "38 m² / 409 sq ft",
    "description": "Spacious and configured with two premium twin beds and dual workstations near Maraki campus.",
    "highlights": [
      "Two Separate Extra-Long Single Beds",
      "Complimentary Full Daily Breakfast",
      "Dual Dedicated Workspace with High-Speed Internet"
    ],
    "amenities": ["24/7 Reception", "High-Speed Wi-Fi", "Electric Kettle"]
  },
  {
    "id": "royal-imperial-suite",
    "title": "Royal Imperial Suite",
    "category": "suite",
    "tag": "Signature Luxury",
    "badge": "Presidential Comfort",
    "priceUSD": 125,
    "priceETB": 16875,
    "guests": "Up to 3 Guests",
    "maxGuests": 3,
    "bed": "1 Master California King Bed",
    "size": "62 m² / 667 sq ft",
    "description": "Inspired by Gondar's royal castle legacy with expansive living salon and wrap-around terrace.",
    "highlights": [
      "Separate Living Lounge with Plush Sofa Seating",
      "Private Dining Area & Nespresso Coffee Machine",
      "VIP Fast-Track Airport Pickup & Drop-Off"
    ],
    "amenities": ["Butler Service", "55-inch UHD Smart TV", "Luxury Bathrobes"]
  },
  {
    "id": "standard-comfort-queen",
    "title": "Standard Comfort Queen",
    "category": "standard",
    "tag": "Best Value",
    "badge": "Practical & Cosy",
    "priceUSD": 52,
    "priceETB": 7020,
    "guests": "Up to 2 Guests",
    "maxGuests": 2,
    "bed": "1 Queen Bed with Pillow-Top",
    "size": "26 m² / 280 sq ft",
    "description": "Designed for practical comfort and unbeatable value near Maraki campus.",
    "highlights": [
      "Plush Queen Bed",
      "Complimentary Daily Breakfast",
      "Hot Water Guarantee"
    ],
    "amenities": ["Satellite TV", "Work Desk", "Digital Safe"]
  },
  {
    "id": "family-garden-suite",
    "title": "Family Two-Bedroom Suite",
    "category": "family",
    "tag": "Family Favorite",
    "badge": "Spacious Living",
    "priceUSD": 110,
    "priceETB": 14850,
    "guests": "Up to 4-5 Guests",
    "maxGuests": 5,
    "bed": "1 King Bed + 2 Single Beds",
    "size": "72 m² / 775 sq ft",
    "description": "An interconnected family haven with two distinct bedrooms and two private bathrooms.",
    "highlights": [
      "Two Separate Bedrooms & Two Bathrooms",
      "Full Breakfast for the Whole Family",
      "Priority Airport Shuttle Included"
    ],
    "amenities": ["Mini Fridge", "Kids Channels", "Extra Cot on Request"]
  },
  {
    "id": "junior-terrace-suite",
    "title": "Junior Terrace Suite",
    "category": "suite",
    "tag": "Scenic Panorama",
    "badge": "Sunset Viewpoint",
    "priceUSD": 85,
    "priceETB": 11475,
    "guests": "Up to 2 Guests",
    "maxGuests": 2,
    "bed": "1 King Bed with Luxury Canopy",
    "size": "45 m² / 484 sq ft",
    "description": "Boasts an expansive private terrace with sunset views over Gondarine hills.",
    "highlights": [
      "Private Furnished Terrace with Unobstructed Sunset View",
      "Spa-Style Rain Shower"
    ],
    "amenities": ["Espresso Maker", "High-Speed Wi-Fi", "Bathrobes"]
  }
]

BOOKINGS_DATABASE = {
  "OLY-GDR-84291": {
    "confirmationCode": "OLY-GDR-84291",
    "status": "CONFIRMED",
    "guestName": "Dr. Helen Bekele",
    "email": "helen.bekele@uog.edu.et",
    "phone": "+251 91 800 2233",
    "room": ROOMS_DATA[0],
    "checkIn": "2026-11-20 (14:00)",
    "checkOut": "2026-11-23 (11:30)",
    "nights": 3,
    "guests": 2,
    "totalUSD": 235,
    "totalETB": 31725,
    "airportShuttleScheduled": True,
    "flightNumber": "ET 122",
    "hotelAddress": "Maraki Sub-City, Gondar, Ethiopia"
  }
}

class UnifiedHotelHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def _set_cors_headers(self, status=200, content_type="application/json"):
        self.send_response(status)
        self.send_header("Content-Type", content_type)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type, Authorization")
        self.end_headers()

    def do_OPTIONS(self):
        self._set_cors_headers(204)

    def do_GET(self):
        parsed = urlparse(self.path)
        path = parsed.path
        query = parse_qs(parsed.query)

        # Route API requests
        if path.startswith("/api/"):
            # GET /api/rooms
            if path == "/api/rooms":
                category = query.get("category", ["all"])[0]
                if category != "all":
                    filtered = [r for r in ROOMS_DATA if r["category"] == category]
                else:
                    filtered = ROOMS_DATA
                self._set_cors_headers(200)
                self.wfile.write(json.dumps(filtered, indent=2).encode())
                return

            # GET /api/rooms/{id}
            room_match = re.match(r"^/api/rooms/([^/]+)$", path)
            if room_match:
                room_id = room_match.group(1)
                found = next((r for r in ROOMS_DATA if r["id"] == room_id), None)
                if found:
                    self._set_cors_headers(200)
                    self.wfile.write(json.dumps(found, indent=2).encode())
                else:
                    self._set_cors_headers(404)
                    self.wfile.write(json.dumps({"error": "NOT_FOUND", "message": f"Room '{room_id}' not found."}, indent=2).encode())
                return

            # GET /api/rooms/{id}/availability
            avail_match = re.match(r"^/api/rooms/([^/]+)/availability$", path)
            if avail_match:
                room_id = avail_match.group(1)
                found = next((r for r in ROOMS_DATA if r["id"] == room_id), None)
                rate = found["priceUSD"] if found else 68
                resp = {
                    "roomId": room_id,
                    "isAvailable": True,
                    "availableUnits": 4,
                    "nights": 3,
                    "ratePerNightUSD": rate,
                    "totalEstimatedUSD": rate * 3
                }
                self._set_cors_headers(200)
                self.wfile.write(json.dumps(resp, indent=2).encode())
                return

            # GET /api/bookings/{confirmationCode}
            booking_match = re.match(r"^/api/bookings/([^/]+)$", path)
            if booking_match:
                code = booking_match.group(1)
                booking = BOOKINGS_DATABASE.get(code)
                if booking:
                    self._set_cors_headers(200)
                    self.wfile.write(json.dumps(booking, indent=2).encode())
                else:
                    self._set_cors_headers(404)
                    self.wfile.write(json.dumps({"error": "BOOKING_NOT_FOUND", "message": f"Reservation reference '{code}' not found."}, indent=2).encode())
                return

            # GET /api/hotel/info
            if path == "/api/hotel/info":
                info = {
                    "name": "Olympic Hotel",
                    "city": "Gondar",
                    "country": "Ethiopia",
                    "neighborhood": "Maraki Sub-City (near University of Gondar main campus)",
                    "phonePrimary": "+251 58 114 8890",
                    "whatsapp": "+251918002233",
                    "email": "reservations@olympichotelgondar.com",
                    "checkInTime": "14:00",
                    "checkOutTime": "11:30",
                    "airportDistance": "15 minutes from Gondar Atse Tewodros Airport (GDQ)",
                    "security": "24/7 Monitored with On-site Guard Force"
                }
                self._set_cors_headers(200)
                self.wfile.write(json.dumps(info, indent=2).encode())
                return

            # GET /api/hotel/exchange-rate
            if path == "/api/hotel/exchange-rate":
                resp = {
                    "baseCurrency": "USD",
                    "targetCurrency": "ETB",
                    "rate": 135.0,
                    "lastUpdated": datetime.utcnow().isoformat() + "Z"
                }
                self._set_cors_headers(200)
                self.wfile.write(json.dumps(resp, indent=2).encode())
                return

        # Default: Serve static files from dist
        return super().do_GET()

    def do_POST(self):
        parsed = urlparse(self.path)
        path = parsed.path
        length = int(self.headers.get("Content-Length", 0))
        body = self.rfile.read(length).decode("utf-8") if length > 0 else "{}"
        try:
            data = json.loads(body)
        except Exception:
            data = {}

        if path == "/api/bookings/calculate-rate":
            room_id = data.get("roomId", "deluxe-king")
            room = next((r for r in ROOMS_DATA if r["id"] == room_id), ROOMS_DATA[0])
            nights = 3
            try:
                d1 = datetime.strptime(data.get("checkIn", "2026-11-20"), "%Y-%m-%d")
                d2 = datetime.strptime(data.get("checkOut", "2026-11-23"), "%Y-%m-%d")
                nights = max((d2 - d1).days, 1)
            except Exception:
                pass
            subtotal = room["priceUSD"] * nights
            vat = round(subtotal * 0.15)
            grandTotalUSD = subtotal + vat
            grandTotalETB = grandTotalUSD * 135

            resp = {
                "roomId": room["id"],
                "nights": nights,
                "ratePerNightUSD": room["priceUSD"],
                "subtotalUSD": subtotal,
                "vatTaxUSD": vat,
                "grandTotalUSD": grandTotalUSD,
                "grandTotalETB": grandTotalETB,
                "complimentaryInclusions": [
                    "Daily Highland Breakfast Buffet",
                    "Gondar Airport Shuttle Transfer",
                    "High-Speed Fiber Wi-Fi"
                ]
            }
            self._set_cors_headers(200)
            self.wfile.write(json.dumps(resp, indent=2).encode())
            return

        if path == "/api/bookings":
            code = f"OLY-GDR-{random.randint(10000, 99999)}"
            room_id = data.get("roomId", "deluxe-king")
            room = next((r for r in ROOMS_DATA if r["id"] == room_id), ROOMS_DATA[0])
            booking = {
                "confirmationCode": code,
                "status": "CONFIRMED",
                "guestName": data.get("fullName", "Honored Guest"),
                "email": data.get("email", "guest@example.com"),
                "phone": data.get("phone", "+251 91 800 2233"),
                "room": room,
                "checkIn": f"{data.get('checkIn', '2026-11-20')} (14:00)",
                "checkOut": f"{data.get('checkOut', '2026-11-23')} (11:30)",
                "nights": 3,
                "guests": data.get("guests", 2),
                "totalUSD": room["priceUSD"] * 3 + round(room["priceUSD"] * 3 * 0.15),
                "totalETB": (room["priceUSD"] * 3 + round(room["priceUSD"] * 3 * 0.15)) * 135,
                "airportShuttleScheduled": data.get("needsAirportShuttle", True),
                "flightNumber": data.get("flightNumber", "ET 122"),
                "hotelAddress": "Maraki Sub-City, Gondar, Ethiopia"
            }
            BOOKINGS_DATABASE[code] = booking
            self._set_cors_headers(201)
            self.wfile.write(json.dumps(booking, indent=2).encode())
            return

        if path == "/api/shuttle/request":
            ref = data.get("bookingReference", "OLY-GDR-84291")
            resp = {
                "shuttleRequestId": f"SHT-GDQ-{random.randint(1000, 9999)}",
                "bookingReference": ref,
                "status": "CONFIRMED",
                "pickupLocation": "Gondar Atse Tewodros Airport (GDQ) Arrival Terminal",
                "driverAssigned": "Olympic Hotel Executive Van #2",
                "notes": "Chauffeur will await you at arrivals with an Olympic Hotel sign."
            }
            self._set_cors_headers(200)
            self.wfile.write(json.dumps(resp, indent=2).encode())
            return

        if path == "/api/contact":
            resp = {
                "inquiryId": f"INQ-2026-{random.randint(100, 999)}",
                "status": "RECEIVED",
                "message": "Thank you. Our front office in Gondar has received your message and will reply within 2 hours."
            }
            self._set_cors_headers(200)
            self.wfile.write(json.dumps(resp, indent=2).encode())
            return

        self._set_cors_headers(404)
        self.wfile.write(json.dumps({"error": "ENDPOINT_NOT_FOUND"}, indent=2).encode())

    def do_DELETE(self):
        parsed = urlparse(self.path)
        path = parsed.path
        booking_match = re.match(r"^/api/bookings/([^/]+)$", path)
        if booking_match:
            code = booking_match.group(1)
            if code in BOOKINGS_DATABASE:
                del BOOKINGS_DATABASE[code]
                self._set_cors_headers(200)
                self.wfile.write(json.dumps({
                    "confirmationCode": code,
                    "status": "CANCELLED",
                    "message": "Your reservation has been cancelled in accordance with hotel policy."
                }, indent=2).encode())
            else:
                self._set_cors_headers(404)
                self.wfile.write(json.dumps({"error": "NOT_FOUND"}, indent=2).encode())
            return

        self._set_cors_headers(404)
        self.wfile.write(json.dumps({"error": "ENDPOINT_NOT_FOUND"}, indent=2).encode())

if __name__ == "__main__":
    print(f"Starting Olympic Hotel Server on http://localhost:{PORT}")
    with socketserver.TCPServer(("", PORT), UnifiedHotelHandler) as httpd:
        httpd.allow_reuse_address = True
        print(f"Serving static site & live testing Swagger API at http://localhost:{PORT}/swagger.html")
        httpd.serve_forever()
