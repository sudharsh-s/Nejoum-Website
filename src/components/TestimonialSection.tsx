import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { useRef } from "react";
import "swiper/css";
import { useTranslation } from "react-i18next";
import { isRTL } from "@/i18n";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

import user1 from "@/assets/user/user-1.svg";
import user2 from "@/assets/user/user-2.svg";
import testimonial from "@/assets/user/testimonial-ft.jpg";


type TestimonialItem = {
  name: string;
  role: string;
  text: string;
};

const testimonialImages = [user1, user2];

const TestimonialSection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const { t, i18n } = useTranslation();
  const rtl = isRTL(i18n.language);

  const testimonials = t("testimonialSection.items", {
    returnObjects: true,
  }) as TestimonialItem[];

  return (
    <section className="pt-12 md:pt-16 lg:pt-24 pb-16 md:pb-20 lg:pb-32 bg-white">
      <div className="block md:hidden px-6">
        <p className="text-md text-primary mb-4 font-medium">● Testimonial</p>
        <h2 className="text-[27px] lg:text-[40px] font-bold leading-tight mb-8">Our Customers Share Their Success Stories</h2>
      </div>
      <div className="max-w-7xl mx-auto px-6 block md:flex items-center">

        {/* LEFT IMAGE */}
        <motion.div
          className="relative w-full md:w-[30%]"
        >
          <div className="relative max-w-[80%] md:max-w-[354px] rounded-[0_50px_500px_500px]">
            
            {/* Orange Border Shape */}
            <div className={`
            bg-transparent border-[3px] border-primary
            rounded-[0_50px_500px_500px]
            top-[40px]
            ${rtl ? "right-[40px] md:-right-[40px]" : "left-[40px] md:-left-[40px]"}
            z-[1] absolute w-full h-full
          `}></div>

            <img
              src={testimonial}
              alt="testimonial"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          className={`
            w-full md:w-[70%] 
            ${rtl ? "md:pr-14" : "md:pl-14"} 
            pl-0 mt-10 md:mt-0
          `}
        >

          <div className="hidden md:block">
            <p className="text-md text-primary mb-4 font-medium">● {t("testimonialSection.badge")}</p>
            <h2 className="text-4xl lg:text-[40px] font-bold leading-tight">{t("testimonialSection.title")}</h2>

            <div className="border-t border-gray-300 my-4"></div>
          </div>

          {/* SLIDER */}
          <Swiper
            key={rtl ? "rtl" : "ltr"}
            dir={rtl ? "rtl" : "ltr"}
            modules={[Navigation, Autoplay]}
            slidesPerView={1}
            loop
            speed={800}
            autoplay={{ delay: 4000 }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              //@ts-ignore
              swiper.params.navigation.prevEl = prevRef.current;
              //@ts-ignore
              swiper.params.navigation.nextEl = nextRef.current;
            }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div>
                  <p className="text-primary mb-1"><FormatQuoteIcon className="!text-[50px]" /></p>

                  <p className="text-gray-600 text-base leading-relaxed mb-6 italic">
                    {item.text}
                  </p>

                  <h4 className="font-bold text-lg text-[#0d1b2a]">
                    {item.name}
                  </h4>
                  <p className="text-gray-500 text-sm">{item.role}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* NAVIGATION + PROGRESS */}
          <div className="flex items-center gap-4 mt-10">
            <button
              ref={prevRef}
              className="bg-primary text-white w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center hover:scale-105 transition"
            >
              <ArrowBackIcon />
            </button>

            <button
              ref={nextRef}
              className="bg-primary text-white w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center hover:scale-105 transition"
            >
              <ArrowForwardIcon />
            </button>

            <div className="hidden md:block flex-1 h-[2px] bg-primary ml-6"></div>

            {/* Thumbnails */}
            <div className="hidden md:flex items-center gap-2">
              {testimonials.map((item, i) => (
                <img
                  key={i}
                  src={testimonialImages[i]}
                  alt="thumb"
                  className="w-14 h-14 object-cover rounded-full border-2 border-white shadow"
                />
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default TestimonialSection;