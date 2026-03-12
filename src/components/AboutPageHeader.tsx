import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-fade";
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { isRTL } from "@/i18n";

import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

import bg1 from "@/assets/about/about-header-bg-1.jpg";
import bg2 from "@/assets/about/about-header-bg-2.webp";
// import person from "@/assets/about/about-header-person.png";


const AboutPageHeader = () => {
  const { t, i18n } = useTranslation();
  const rtl = isRTL(i18n.language);

  type SlideItem = {
    title: string;
    desc: string;
  };

  const slides = t("aboutHeader.slides", {
    returnObjects: true,
  }) as SlideItem[];

  const backgrounds = [bg1, bg2];

  return (
    <section className="relative h-screen w-full overflow-hidden">

      <Swiper
        key={rtl ? "rtl" : "ltr"}
        dir={rtl ? "rtl" : "ltr"}
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 3000 }}
        loop
        speed={1200}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-screen w-full">

              {/* Background */}
              <img
                src={backgrounds[index]}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Dark Overlay */}
              <div className={`absolute inset-0 ${
                rtl
                  ? "bg-gradient-to-l from-black/60 via-black/40 to-black/20"
                  : "bg-gradient-to-r from-black/60 via-black/40 to-black/20"
              }`}></div>

              {/* Content Container */}
              <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">

                {/* LEFT TEXT */}
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="max-w-2xl text-white"
                >
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight whitespace-pre-line">
                    {slide.title}
                  </h1>

                  <p className="mt-6 text-base md:text-lg text-white/80 max-w-lg">
                    {slide.desc}
                  </p>

                  <Link to="/services/auction-account-services" className="mt-8 bg-white text-black px-6 py-4 rounded-md inline-flex items-center gap-3 font-medium hover:bg-gray-200 transition">
                    {t("aboutHeader.cta")}
                    <ArrowOutwardIcon />
                  </Link>
                </motion.div>

                {/* RIGHT PERSON IMAGE */}
                {/* <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.2 }}
                  className="absolute right-0 bottom-0 h-full flex items-end"
                >
                  <img
                    src={slide.person}
                    className="h-[90%] object-contain"
                  />
                </motion.div> */}

              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
};

export default AboutPageHeader;