import { motion } from "framer-motion";
import worldMap from "@/assets/map.webp";

const locations = [
  {
    id: 1,
    lat: 40.7069,
    lng: -74.0532,
    address: "New Jersey",
  },
  {
    id: 2,
    lat: 32.0809,
    lng: -81.1910,
    address: "Georgia",
  },
  {
    id: 3,
    lat: 25.6242,
    lng: -95.2961,
    address: "Texas",
  },
  {
    id: 4,
    lat: 33.8883,
    lng: -118.3089,
    address: "California",
    offsetY: 0,
  },
  // {
  //   id: 5,
  //   lat: 27.8993,
  //   lng: -118.2815,
  //   address: "California",
  //   offsetY: 18,
  // },
  {
    id: 6,
    lat: 45.2370,
    lng: -122.4285,
    address: "Tacoma",
    offsetY: 0,
  },
  {
    id: 7,
    lat: 37.4563,
    lng: 126.7052,
    address: "Korea",
  },
];

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
            ● Global Locations
          </p>

          <h2 className="text-[25px] md:text-4xl lg:text-[45px] font-bold text-white leading-tight">
            Our Global Network of Strategic Locations
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
                      {loc.address}
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
              {loc.address}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}