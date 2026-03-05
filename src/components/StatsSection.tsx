import { useRef } from "react";
import CountUp from "react-countup";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

import Language from "@mui/icons-material/Language";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import LocalShipping from "@mui/icons-material/LocalShipping";

const stats = [
  {
    icon: Language,
    value: 300,
    suffix: "k+",
    label: "Container Delivered ",
  },
  {
    icon: WorkspacePremiumIcon,
    value: 23,
    suffix: "+",
    label: "Years of Experience",
  },
  {
    icon: LocalShipping,
    value: 1000,
    suffix: "k+",
    label: "Car Delivered",
  },
];

export default function StatsSection() {

  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  // Parallax effect
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section ref={ref} className="relative bg-white">

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 bottom-10 pb-16">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-white border border-white/20 rounded-2xl py-10 px-12 shadow-2xl"
        >

          <div className="grid grid-cols-1 md:grid-cols-3 divide-x divide-black/20">

            {stats.map((stat, index) => {

              const Icon = stat.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2,
                  }}
                  className="flex items-center gap-5 px-6 py-6 text-black"
                >

                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      delay: index * 0.2,
                    }}
                    className="text-secondary"
                  >
                    <Icon sx={{ fontSize: 48 }} />
                  </motion.div>

                  {/* Text */}
                  <div>

                    {/* Count */}
                    <div className="text-4xl font-bold">

                      {isInView && (
                        <CountUp
                          start={0}
                          end={stat.value}
                          duration={2.5}
                          separator=","
                        />
                      )}

                      {stat.suffix}

                    </div>

                    {/* Label */}
                    <div className="text-black/80 text-sm mt-1">
                      {stat.label}
                    </div>

                  </div>

                </motion.div>
              );
            })}

          </div>

        </motion.div>

      </div>

    </section>
  );
}