import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import { useTranslation } from "react-i18next";
import { isRTL } from "@/i18n";

import serviceSlider1 from "@/assets/services/service-slider-1.jpg";
import serviceSlider2 from "@/assets/services/service-slider-2.jpg";
import serviceSlider3 from "@/assets/services/service-slider-3.jpg";
import serviceSlider4 from "@/assets/services/service-slider-4.jpg";
import serviceSlider5 from "@/assets/services/service-slider-5.jpg";
import serviceSlider6 from "@/assets/services/service-slider-6.png";

const ServicesSlider = () => {
  type ServiceItem = {
    title: string;
    desc: string;
  };

  const serviceImages = [
    serviceSlider1,
    serviceSlider2,
    serviceSlider3,
    serviceSlider4,
    serviceSlider5,
    serviceSlider6,
  ];

  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const rtl = isRTL(i18n.language);
  const services = t("servicesSlider.items", {
    returnObjects: true,
  }) as ServiceItem[];
  return (
    <section className="bg-[#032d6b] py-16 md:py-24 overflow-hidden relative">

      {/* Vertical Lines Background */}
      <div className="absolute inset-0 flex justify-between px-[15%] pointer-events-none">
        <div className="w-px bg-white/20"></div>
        <div className="w-px bg-white/20"></div>
        <div className="w-px bg-white/20"></div>
      </div>

      <div className="relative z-10 pl-7 md:pl-16 lg:pl-24">
        <Swiper
          dir={rtl ? "rtl" : "ltr"}
          modules={[Navigation, Autoplay]}
          spaceBetween={70}
          slidesPerView={3}
          autoplay={{
            delay: 2500, // 2.5 seconds
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1.2, spaceBetween: 30 },
            768: { slidesPerView: 2.2, spaceBetween: 40 },
            1024: { slidesPerView: 3.3, spaceBetween: 70 },
          }}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <motion.div
                whileHover="hover"
                className="group text-white space-y-6"
              >
                <h3 className="text-[22px] md:text-3xl font-semibold">
                  {service.title}
                </h3>

                <p className="text-white/70 max-w-sm text-sm md:text-base">
                  {service.desc}
                </p>

                {/* Animated Read More */}
                <motion.div
                  variants={{
                    hover: { x: 10 },
                  }}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <span className="text-white/80 text-sm md:text-base">{t("servicesSlider.readMore")}</span>
                  <span className="transition-transform group-hover:translate-x-2">
                    →
                  </span>
                </motion.div>

                {/* Image */}
                <div className="overflow-hidden mt-8">
                  <motion.img
                    src={serviceImages[index]}
                    alt={service.title}
                    className="w-full h-[200px] md:h-[280px] object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  />
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ServicesSlider;