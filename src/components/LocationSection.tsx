import { motion } from "framer-motion";
import worldMap from "@/assets/map.webp";
import { useTranslation } from "react-i18next";

const locations = [
  { id: 1, lat: 40.7069, lng: -74.0532, key: "newJersey" },
  { id: 2, lat: 32.0809, lng: -81.1910, key: "georgia" },
  { id: 3, lat: 25.6242, lng: -95.2961, key: "texas" },
  { id: 4, lat: 33.8883, lng: -118.3089, key: "california" },
  { id: 6, lat: 45.2370, lng: -122.4285, key: "tacoma" },
  { id: 7, lat: 37.4563, lng: 126.7052, key: "korea" },
  { id: 8, lat: 25.3463, lng: 55.4209, key: "uae" },
  { id: 9, lat: 30.5085, lng: 47.7804, key: "iraq" },
  { id: 10, lat: 23.5880, lng: 58.3829, key: "oman", offsetY: 10 },
  { id: 11, lat: 11.5564, lng: 104.9282, key: "cambodia" }
];

// Sharjah — Al Furat Street, Industrial Area 4, Sharjah, UAE 
// Basra — Nejoum Aljazeera Group Basra Bridge, Basra 
// Muscat — Amabilah Al Sanaya Road No.10, Muscat, Oman 
// Texas (Houston) — Nejoum Express, 6012 Murphy St., Houston, TX 77033-1008
// Georgia (Savannah) — 46 Artly Road, Savannah, GA 31408 
// New Jersey (Jersey City) — Nejoum Express, 1 Linden Avenue E, Jersey City, NJ 07305 
// Cambodia (Phnom Penh) — 528 ST 1019, Sangkat Phnom Penh Thmey, Khan Sen Sok, Phnom Penh Cambodia

// Convert lat/lng → percentage position
const getPosition = (lat: number, lng: number) => {
  const x = ((lng + 180) / 360) * 100;
  const y = ((90 - lat) / 180) * 100;

  return {
    left: `${x}%`,
    top: `${y}%`,
    xPercent: x,
    yPercent: y,
  };
};

export default function LocationSection() {
  const { t } = useTranslation();

  return (
    <section className="relative pt-10 pb-14 md:pb-1 bg-[#0b3574]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-8"
        >
          <p className="text-md text-white mb-4 font-medium">
            ● {t("locations.badge")}
          </p>

          <h2 className="text-[25px] md:text-4xl lg:text-[45px] font-bold text-white leading-tight">
            {t("locations.title")}
          </h2>
        </motion.div>

        {/* Map */}
        <div className="relative">

          <motion.img
            src={worldMap}
            transition={{ duration: 1 }}
            className="w-full md:w-[90%] mx-auto object-contain my-10 opacity-70"
          />

          {/* Location Dots (Hide on Mobile) */}
          <div className="hidden md:block">
            {locations.map((loc, index) => {
              const pos = getPosition(loc.lat, loc.lng);
              const isRightSide = pos.xPercent > 60;

              return (
                <motion.div
                  key={loc.id}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.15 }}
                  className="absolute"
                  style={{ left: pos.left, top: pos.top }}
                >
                  {/* Pulse */}
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
                    style={{ top: "-6px", left: "-6px" }}
                  />

                  {/* Dot */}
                  <div className="relative w-3 h-3 bg-secondary rounded-full z-10 shadow-md" />

                  {/* Label */}
                  <div
                    className={`absolute whitespace-nowrap ${
                      isRightSide ? "right-6 text-right" : "left-6 text-left"
                    }`}
                    style={{
                      top: "50%",
                      transform: `translateY(-50%) translateY(${loc.offsetY || 0}px)`
                    }}
                  >
                    <span className="text-white text-xs md:text-sm font-semibold tracking-wide drop-shadow-lg">
                      {t(`locations.items.${loc.key}`)}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Mobile Location List (Outside Map) */}
        <div className="md:hidden mt-8 space-y-4">
          {locations.map((loc) => (
            <div
              key={loc.id}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-5 py-4 text-white text-sm font-medium"
            >
              {t(`locations.items.${loc.key}`)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}