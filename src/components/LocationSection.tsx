import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import worldMap from "@/assets/about/world-map-dotted.webp";

import njMap from "@/assets/about/newjersey.webp";
import gaMap from "@/assets/about/georgia.jpg";
import txMap from "@/assets/about/texas.webp";
import ca1Map from "@/assets/about/california.webp";
import ca2Map from "@/assets/about/california.webp";
import waMap from "@/assets/about/tacoma.png";
import krMap from "@/assets/about/korea.webp";

const locations = [
  {
    id: 1,
    city: "Sharjah",
    lat: 25.3463,
    lng: 55.4209,
    address: "Sharjah, UAE",
    map: njMap
  },
  {
    id: 2,
    city: "Basra",
    lat: 30.5085,
    lng: 47.7804,
    address: "Basra, Iraq",
    map: gaMap
  },
  {
    id: 3,
    city: "Muscat",
    lat: 23.5880,
    lng: 58.3829,
    address: "Muscat, Oman",
    map: txMap
  },
  {
    id: 4,
    city: "Texas",
    lat: 29.7604,
    lng: -95.3698,
    address: "Houston, TX",
    map: ca1Map
  },
  {
    id: 5,
    city: "Georgia",
    lat: 32.0809,
    lng: -81.0912,
    address: "Savannah, GA",
    map: ca2Map
  },
  {
    id: 6,
    city: "New Jersey",
    lat: 40.7178,
    lng: -74.0431,
    address: "Jersey City, NJ",
    map: waMap
  },
  {
    id: 7,
    city: "Cambodia",
    lat: 11.5564,
    lng: 104.9282,
    address: "Phnom Penh",
    map: krMap
  }
];

// Sharjah — Al Furat Street, Industrial Area 4, Sharjah, UAE

// Basra — Nejoum Aljazeera Group Basra Bridge, Basra

// Muscat — Amabilah Al Sanaya Road No.10, Muscat, Oman

// Texas (Houston) — Nejoum Express, 6012 Murphy St., Houston, TX 77033-1008

// Georgia (Savannah) — 46 Artly Road, Savannah, GA 31408

// New Jersey (Jersey City) — Nejoum Express, 1 Linden Avenue E, Jersey City, NJ 07305

// Cambodia (Phnom Penh) — 528 ST 1019, Sangkat Phnom Penh Thmey, Khan Sen Sok, Phnom Penh





const getPosition = (lat: number, lng: number) => {
  const x = ((lng + 180) / 360) * 100;
  const y = ((90 - lat) / 180) * 100;

  return {
    left: `${x}%`,
    top: `${y}%`,
  };
};

export default function LocationSection() {

  const [active, setActive] = useState(null);

  return (
    <section className="relative pt-16 pb-10 bg-[#f8f8f8]">

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-1"
        >

          <p className="text-md text-primary mb-4 font-medium">● Global Locations</p>
          <h2 className="text-4xl lg:text-[40px] font-bold leading-tight">Serving You from <br /> 6 Strategic Locations</h2>


        </motion.div>


        {/* Map */}
        <div className="relative">

          <motion.img
            src={worldMap}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.35 }}
            transition={{ duration: 1 }}
            className="w-full"
          />


          {/* Locations */}
          {locations.map((loc, index) => (

            <motion.div
              key={loc.id}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.15 }}
              className="absolute"
              style={getPosition(loc.lat, loc.lng)}
              onMouseEnter={() => setActive(loc.id)}
              onMouseLeave={() => setActive(null)}
            >

              {/* Pulse Layer 1 */}
              <motion.div
                animate={{
                  scale: [1, 2],
                  opacity: [0.6, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
                className="absolute w-5 h-5 bg-primary rounded-full"
                style={{ top: "-2px", left: "-2px" }}
              />

              {/* Pulse Layer 2 (delay for smooth continuous effect) */}
              <motion.div
                animate={{
                  scale: [1, 2],
                  opacity: [0.6, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 1
                }}
                className="absolute w-5 h-5 bg-primary rounded-full"
                style={{ top: "-2px", left: "-2px" }}
              />


              {/* Dot */}
              <motion.div
                whileHover={{ scale: 1.3 }}
                className="relative w-4 h-4 bg-primary rounded-full cursor-pointer z-10 shadow-md"
              />


              {/* Tooltip */}
              <AnimatePresence>

                { active === loc.id &&  (

                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 15, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 
                              bg-white shadow-2xl rounded-xl overflow-hidden flex items-start p-3
                              w-56 z-50"
                  >

                    {/* Map Image */}
                    <div className="h-9 rounded-full overflow-hidden" style={{width: "49px"}}>
                      <img
                        src={loc.map}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="px-3">

                      <div className="text-sm font-semibold text-gray-900">
                        {loc.city}
                      </div>

                      <div className="text-xs text-gray-500 mt-1">
                        {loc.address}
                      </div>

                    </div>

                  </motion.div>

                )}

              </AnimatePresence>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}