import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import VerifiedUser from "@mui/icons-material/VerifiedUser";
import Language from "@mui/icons-material/Language";
import IAAMarketAlliance from "@/components/IAAMarketAlliance";
import { useTranslation, Trans } from "react-i18next";
import { isRTL } from "@/i18n";

import img1 from "@/assets/about/about_sec-bg-1.png";
import img2 from "@/assets/about/about_sec-bg-2.png";
import img3 from "@/assets/about/about_sec-bg-3.png";
import ceo from "@/assets/about/Adel-Al-Saadi.webp";

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
  const { t, i18n } = useTranslation();
  const rtl = isRTL(i18n.language);

  const features = t("aboutSection.features", {
    returnObjects: true,
  }) as { title: string; desc: string }[];
  const featureIcons = [VerifiedUser, WarehouseIcon, Language];

  return (
    <section className="py-14 md:py-20 bg-[#f5f5f7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mb-14"
        >
          <div className="grid lg:flex items-start gap-10">
            <div className="w-full lg:w-[45%]">
              {/* <p className="text-md text-primary mb-8 font-medium">
                ● About Us
              </p> */}
              <img src={ceo} className="w-[100%] mb-0 md:mb-6" />
            </div>

            <div className="w-full lg:w-[55%]">

              <h2 className="text-[27px] md:text-[32px] lg:text-[40px] font-bold text-gray-900 leading-tight mb-6">
                {t("aboutSection.title")}
              </h2>

              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                <Trans i18nKey="aboutSection.paragraph1" />
              </p>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base mt-3">
                <Trans i18nKey="aboutSection.paragraph2" />
              </p>

              <h5 className="text-lg font-bold text-gray-900 mt-4">{t("aboutSection.ceo")}</h5>
            </div>
          </div>
        </motion.div>

        <IAAMarketAlliance />

        {/* IMAGE GRID */}
        <div className="grid md:grid-cols-3 gap-6 relative">

          {/* LEFT IMAGE */}
          <div className="relative overflow-hidden">
            <img src={img1} className="w-full h-[350px] md:h-[550px] object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,#02030852_0%,#02030852_100%)]"></div>

            <div className="absolute inset-0 flex items-center justify-center text-center md:items-end md:justify-start md:text-left md:bottom-6 md:left-6 md:inset-auto text-white">
              <div>
                <h3 className="text-6xl md:text-6xl xl:text-8xl font-bold">
                  <Counter end={22} />+
                </h3>
                <p className="text-sm mt-2">{t("aboutSection.stats.branches")}</p>
              </div>
            </div>
          </div>

          {/* CENTER IMAGE */}
          <div className="relative overflow-hidden">
            <img src={img2} className="w-full h-[350px] md:h-[550px] object-cover" />

            <div className="absolute inset-0 flex items-center justify-center text-white text-center">
              <div>
                <h3 className="text-6xl md:text-6xl xl:text-8xl font-bold">
                  <Counter end={57} />+
                </h3>
                <p className="text-sm mt-2">{t("aboutSection.stats.countries")}</p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative overflow-hidden">
            <img src={img3} className="w-full h-[350px] md:h-[550px] object-cover" />

            <div className="absolute inset-0 flex items-center justify-center text-center md:items-start md:justify-end md:text-right md:top-6 md:right-6 md:inset-auto text-white">
              <div>
                <h3 className="text-6xl md:text-6xl xl:text-8xl font-bold">
                  <Counter end={500} />k+
                </h3>
                <p className="text-sm mt-2">{t("aboutSection.stats.packages")}</p>
              </div>
            </div>
          </div>

        </div>


        {/* Bottom Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12 border-t border-l border-r divide-y divide-x-0 md:divide-y-0 md:divide-x divide-grey/10">

          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={featureIcons[index]}
              title={feature.title}
              desc={feature.desc}
            />
          ))}
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

      <div className="font-semibold text-xl mb-2">
        {title}
      </div>

      <div className="text-gray-500 text-base leading-[22px]">
        {desc}
      </div>
    </motion.div>
  );
}


export default AboutSection;