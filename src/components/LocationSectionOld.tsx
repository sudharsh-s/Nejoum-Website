import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import worldMap from "@/assets/map.webp";

import sharjah from "@/assets/map/sharjah.png";
import basra from "@/assets/map/basra.jpg";
import muscat from "@/assets/map/muscat.png";
import texas from "@/assets/map/texas.svg";
import georgia from "@/assets/map/georgia.png";
import newJersey from "@/assets/map/new-jersey.png";
import cambodia from "@/assets/map/cambodia.webp";

const locations = [
  {
    id: 1,
    city: "Sharjah",
    lat: 25.3463,
    lng: 55.4209,
    address: "Sharjah, UAE",
    fullAddress: "Al Furat Street, Industrial Area 4, Sharjah, UAE",
    map: sharjah
  },
  {
    id: 2,
    city: "Basra",
    lat: 30.5085,
    lng: 47.7804,
    address: "Basra, Iraq",
    fullAddress: "Nejoum Aljazeera Group Basra Bridge, Basra",
    map: basra
  },
  {
    id: 3,
    city: "Muscat",
    lat: 23.5880,
    lng: 58.3829,
    address: "Muscat, Oman",
    fullAddress: "Amabilah Al Sanaya Road No.10, Muscat, Oman",
    map: muscat
  },
  {
    id: 4,
    city: "Texas",
    lat: 29.7604,
    lng: -95.3698,
    address: "Houston, Texas",
    fullAddress: "Nejoum Express, 6012 Murphy St., Houston, TX 77033-1008",
    map: texas
  },
  {
    id: 5,
    city: "Georgia",
    lat: 32.0809,
    lng: -81.0912,
    address: "Savannah, Georgia",
    fullAddress: "46 Artly Road, Savannah, GA 31408",
    map: georgia
  },
  {
    id: 6,
    city: "New Jersey",
    lat: 40.7178,
    lng: -74.0431,
    address: "Jersey City, New Jersey",
    fullAddress: "Nejoum Express, 1 Linden Avenue E, Jersey City, NJ 07305",
    map: newJersey
  },
  {
    id: 7,
    city: "Cambodia",
    lat: 11.5564,
    lng: 104.9282,
    address: "Phnom Penh, Cambodia",
    fullAddress: "528 ST 1019, Sangkat Phnom Penh Thmey, Khan Sen Sok, Phnom Penh",
    map: cambodia
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
    <section className="relative pt-10 pb-1 bg-[#0b3574]">

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-1"
        >

          <p className="text-md text-white text-primary mb-4 font-medium">● Global Locations</p>
          <h2 className="text-[25px] md:text-4xl text-white lg:text-[45px] font-bold leading-tight">Our Global Network of Strategic Locations</h2>


        </motion.div>


        {/* Map */}
        <div className="relative">

          <motion.img
            src={worldMap}
            transition={{ duration: 1 }}
            className="w-full md:w-[90%] mx-auto object-contain my-10 opacity-70"
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
                className="absolute w-5 h-5 bg-secondary rounded-full"
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
                className="absolute w-5 h-5 bg-secondary rounded-full"
                style={{ top: "-2px", left: "-2px" }}
              />


              {/* Dot */}
              <motion.div
                whileHover={{ scale: 1.3 }}
                className="relative w-4 h-4 bg-secondary rounded-full cursor-pointer z-10 shadow-md"
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
                    <div className="w-9 h-9 rounded-full overflow-hidden shrink-0">
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
                        {loc.fullAddress}
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