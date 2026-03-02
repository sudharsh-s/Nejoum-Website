import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import VerifiedUser from "@mui/icons-material/VerifiedUser";
import Language from "@mui/icons-material/Language";

import img1 from "@/assets/about/about_sec-bg-1.png";
import img2 from "@/assets/about/about_sec-bg-2.png";
import img3 from "@/assets/about/about_sec-bg-3.png";


// 🔥 Counter Component
const Counter = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;

    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const progress = time - startTime;
      const percentage = Math.min(progress / duration, 1);
      const value = Math.floor(percentage * end);
      setCount(value);

      if (percentage < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}</span>;
};


const AboutSection = () => {
  return (
    <section className="py-20 bg-[#f5f5f7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mb-16"
        >
          <div className="grid lg:grid-cols-2">
            <p className="text-md text-primary mb-4 font-medium">
              ● About Us
            </p>

            <div className="-ml-18">

              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                At Nejoum, we move the world with smart and seamless logistics.
              </h2>

              <p className="text-gray-600 leading-relaxed">
                With over 10 years of industry experience, we provide trusted freight solutions
                by rail, road, ocean, and air. Our mission is to simplify global transport
                through technology, reliability, and personalized support.
              </p>
            </div>
          </div>
        </motion.div>

        {/* IMAGE GRID */}
        <div className="grid md:grid-cols-3 gap-6 relative">

          {/* LEFT IMAGE */}
          <div className="relative overflow-hidden">
            <img src={img1} className="w-full h-[550px] object-cover" />
            <div className="absolute top-0 bg-[linear-gradient(0deg,#02030852_0%,#02030852_100%)]"></div>

            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-8xl font-bold">
                <Counter end={10} />+
              </h3>
              <p className="text-sm mt-2">Years of Experience</p>
            </div>
          </div>

          {/* CENTER IMAGE */}
          <div className="relative overflow-hidden">
            <img src={img2} className="w-full h-[550px] object-cover" />

            <div className="absolute inset-0 flex items-center justify-center text-white text-center">
              <div>
                <h3 className="text-8xl font-bold">
                  <Counter end={154} />+
                </h3>
                <p className="text-sm mt-2">Countries Covered</p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative overflow-hidden">
            <img src={img3} className="w-full h-[550px] object-cover" />

            <div className="absolute top-6 right-6 text-white text-right">
              <h3 className="text-8xl font-bold">
                <Counter end={2606} />
              </h3>
              <p className="text-sm mt-2">Delivered Packages</p>
            </div>
          </div>

        </div>


        {/* Bottom Feature Cards */}
        <div className="grid grid-cols-3 gap-5 mt-12 border-t border-l border-r divide-x divide-grey/10">

          <Feature
            icon={VerifiedUser}
            title="Trusted by Industry Leaders"
            desc="We've earned the confidence of global brands through consistent delivery."
          />

          <Feature
            icon={WarehouseIcon}
            title="Expert Handling & Clearance"
            desc="Seamless documentation and cargo handling from start to finish."
          />

          <Feature
            icon={Language}
            title="Digital Logistics Platform"
            desc="Manage and optimize shipments with real-time tracking."
          />

        </div>

      </div>
    </section>
  );
};

function Feature({ icon: Icon, title, desc }) {
  return (
    <motion.div className="p-6">
      <div className="text-primary text-2xl mb-3">
        <Icon fontSize="large" />
      </div>

      <div className="font-semibold mb-2">
        {title}
      </div>

      <div className="text-gray-500 text-base leading-[22px]">
        {desc}
      </div>
    </motion.div>
  );
}


export default AboutSection;