import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import carImg from "@/assets/truck.webp";
import earthLines from "@/assets/earthline.webp";

const AboutStatsSection = () => {
  const sectionRef = useRef(null);

  // Track scroll progress of this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Move truck from -300px to +200px while scrolling
  const x = useTransform(scrollYProgress, [0, 1], [-700, 100]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden pt-10 pb-28">
      
      {/* Rotating Earth Lines */}
      <motion.img
        src={earthLines}
        alt="Earth Lines"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] opacity-50 z-[-1]"
      />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT - Scroll Moving Truck */}
          <div>
            <p className="text-md text-primary mb-4 font-medium">
              ● About Us
            </p>
            <motion.div style={{ x }} className="relative">

              <img
                src={carImg}
                alt="Truck"
                className="w-full absolute top-1/2"
                style={{transform: "translateY(80%) scale(1.5)"}}
              />
            </motion.div>
          </div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              At Nejoum, we believe logistics should be the easiest part of your business
            </h2>

            <p className="text-gray-600 mb-8 leading-relaxed">
              With years of experience in third-party logistics, we provide end-to-end
              solutions that keep your supply chain running smoothly.
            </p>

            <button className="gradient-primary text-white px-6 py-3 rounded-lg font-semibold transition">
              Learn More
            </button>

            {/* Stats */}
            <div className="mt-16 space-y-12">

              <div className="flex items-center gap-10">
                <h3 className="text-8xl font-extrabold text-gray-900">
                  10<span className="text-4xl align-top">+</span>
                </h3>
                <div>
                  <p className="font-semibold text-gray-800">
                    Years serving eCommerce brands
                  </p>
                  <p className="text-gray-500 text-sm">
                    Providing reliable logistics solutions for online businesses
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-10">
                <h3 className="text-8xl font-extrabold text-gray-900">
                  99<span className="text-4xl align-top">%</span>
                </h3>
                <div>
                  <p className="font-semibold text-gray-800">
                    On-Time order fulfillment rate
                  </p>
                  <p className="text-gray-500 text-sm">
                    We ensure every order leaves our warehouse on schedule
                  </p>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutStatsSection;