import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import { isRTL } from "@/i18n";

import team from "@/assets/team.png";

export default function StickyStatsSection() {
  const { t, i18n } = useTranslation();
  const rtl = isRTL(i18n.language);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4
  });

  return (
    <section className="bg-[#eef3f7] py-16 md:py-24">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-20 px-6">

        {/* LEFT STICKY IMAGE */}
        <div className="relative">

          <div className="sticky top-32">

            <img
              src={team}
              className="w-full h-full md:h-[600px] object-cover"
            />

          </div>

        </div>

        {/* RIGHT CONTENT */}
        <div ref={ref}>

          <p className="flex items-center gap-3 text-base text-black mb-5">
            <span className="w-3 h-3 bg-primary rounded-sm"></span>
            {t("stickyStats.badge")}
          </p>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900 mb-6">
            {t("stickyStats.title")}
          </h2>

          <p className="text-gray-500 leading-relaxed text-base md:text-lg mb-5">
            {t("stickyStats.paragraph1")}
          </p>

          <p className="text-gray-500 leading-relaxed text-base md:text-lg">
            {t("stickyStats.paragraph2")}
          </p>

          {/* Arrow */}
          <motion.div
            className="text-3xl text-gray-700 mt-6"
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            ↓
          </motion.div>

          {/* STATS GRID */}
          <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-16 pt-6 md:pt-10">

            <div>
              <h3 className="text-[45px] md:text-6xl font-bold">
                {inView && <CountUp end={23} duration={2} />}+
              </h3>
              <p className="text-gray-500 font-semibold mt-0 md:mt-2">{t("stickyStats.stats.experience")}</p>
            </div>

            <div>
              <h3 className="text-[45px] md:text-6xl font-bold">
                {inView && <CountUp end={500} duration={2} />}+
              </h3>
              <p className="text-gray-500 font-semibold mt-0 md:mt-2">{t("stickyStats.stats.employees")}</p>
            </div>

            <div>
              <h3 className="text-[45px] md:text-6xl font-bold">
                {inView && <CountUp end={15} duration={2} />}+
              </h3>
              <p className="text-gray-500 font-semibold mt-0 md:mt-2">{t("stickyStats.stats.offices")}</p>
            </div>

            <div>
              <h3 className="text-[45px] md:text-6xl font-bold">
                {inView && <CountUp end={57} duration={2} />}+
              </h3>
              <p className="text-gray-500 font-semibold mt-0 md:mt-2">{t("stickyStats.stats.countries")}</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}