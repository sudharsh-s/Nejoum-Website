import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import missionVideo from "@/assets/mission.mp4";
import hagging_container from "@/assets/hagging_container.png";

const MissionSection = () => {

  const imageRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });

  // Move image upward while scrolling
  const y = useTransform(scrollYProgress, [0, 1], [-100, 150]);
  return (
    <>
      <section className="relative h-screen w-full overflow-hidden">

        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={missionVideo}
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">

          <motion.p
            className="text-white/70 mb-6 text-sm tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Our Mission
          </motion.p>

          <motion.h2
            className="text-white text-3xl md:text-6xl lg:text-6xl font-semibold leading-tight max-w-5xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            “From day one, our mission was simple: make buying, moving, and exporting vehicles across borders fast, transparent, and reliable.”
          </motion.h2>

          <motion.div
            className="mt-10 text-white/80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <p className="font-semibold text-lg">Adel Al Saadi</p>
            <p className="text-sm opacity-70">CEO, Nejoum Al Jazeera</p>
          </motion.div>

        </div>
      </section>

      <section ref={imageRef} className="relative overflow-hidden">
        <motion.div
          style={{ y }}
          className="flex justify-center -mt-20"
        >
          <img
            src={hagging_container}
            alt="hagging_container"
            className="relative z-20"
          />
        </motion.div>
      </section>
    </>
  );
};

export default MissionSection;