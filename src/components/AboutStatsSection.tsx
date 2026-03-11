import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import carImg from "@/assets/truck.webp";
import earthLines from "@/assets/earthline.webp";
import { useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { Link } from 'react-router-dom';

const Counter = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}</span>;
};

const AboutStatsSection = () => {
  const sectionRef = useRef(null);

  // Track scroll progress of this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const [screen, setScreen] = useState("desktop");

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setScreen("mobile");
      else if (window.innerWidth < 1024) setScreen("tablet");
      else setScreen("desktop");
    };

    update();
    window.addEventListener("resize", update);

    return () => window.removeEventListener("resize", update);
  }, []);

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    screen === "mobile"
      ? [-300, 50]
      : screen === "tablet"
      ? [-600, 50]
      : [-800, 50]
  );

  // Move truck from -300px to +200px while scrolling
  // const x = useTransform(scrollYProgress, [0, 1], [-800, 50]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden pt-5 md:pt-10 pb-16 md:pb-28">
      
      {/* Rotating Earth Lines */}
      <motion.img
        src={earthLines}
        alt="Earth Lines"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] md:w-[700px] lg:w-[900px] opacity-50 z-[-1]"
      />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* LEFT - Scroll Moving Truck */}
          <div>
            <p className="text-md text-primary mb-8 md:mb-4 font-medium">
              ● About Us – Nejoum Logistics
            </p>
            <motion.div style={{ x }} className="relative">

              <img
                src={carImg}
                alt="Truck"
                className="w-full static lg:absolute top-1/2 translate-y-[25%] scale-[1.7] md:translate-y-[10%] md:scale-100 lg:translate-y-[80%] lg:scale-150"
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

            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-gray-900 !leading-tight mb-6 mt-6 md:mt-0">
              At Nejoum, we believe vehicle logistics should be the easiest part of your automotive business
            </h2>

            <p className="text-gray-600 mb-8 leading-relaxed text-sm md:text-base">
              Our team handles every step with precision so our clients can focus on <b>buying and selling vehicles while we manage the logistics.</b>
            </p>

            <Link to="/about" className="inline-block gradient-primary text-white px-6 py-3 md:py-4 rounded-lg font-semibold transition">
              Learn More
            </Link>

            {/* Stats */}
            <div className="mt-12 md:mt-16 space-y-10 md:space-y-12">

              <div className="flex items-start gap-6 md:gap-10">
                <h3 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-gray-900">
                  <Counter end={23} />
                  <span className="text-2xl md:text-4xl align-top">+</span>
                </h3>
                <div>
                  <p className="font-semibold text-gray-800">
                    Years serving eCommerce brands
                  </p>
                  <p className="text-gray-500 text-xs md:text-sm">
                    Providing reliable logistics solutions for online businesses
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 md:gap-10">
                <h3 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-gray-900">
                  <Counter end={150} />K
                  <span className="text-2xl md:text-4xl align-top">+</span>
                </h3>
                <div>
                  <p className="font-semibold text-gray-800">
                    Vehicles Handled
                  </p>
                  <p className="text-gray-500 text-xs md:text-sm">
                    Successfully transported, loaded, and shipped to global destinations every year.
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