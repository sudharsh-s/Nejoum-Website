import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";

import logo1 from "@/assets/brand/brand-1.png";
import logo2 from "@/assets/brand/brand-2.png";
import logo3 from "@/assets/brand/brand-3.png";
import logo4 from "@/assets/brand/brand-4.png";
import logo5 from "@/assets/brand/brand-5.png";
import logo6 from "@/assets/brand/brand-6.png";
import logo7 from "@/assets/brand/brand-7.png";
import logo8 from "@/assets/brand/brand-8.jpeg";
import logo9 from "@/assets/brand/brand-9.webp";
import logo10 from "@/assets/brand/brand-10.png";
import logo11 from "@/assets/brand/brand-11.jpeg";

const logos = [
  logo9,
  logo10,
  logo11,
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
];

export default function BrandSlider() {
  return (
    <section className="bg-white pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="text-center mb-1">
          <h2 className="title">Trusted <span>Partner</span></h2>
          {/* <p className="text-gray-500 max-w-2xl mx-auto">Connecting businesses globally through strong and reliable partnerships.</p> */}
        </div>

        <Swiper
          modules={[Autoplay, FreeMode]}
          slidesPerView={4}
          spaceBetween={60}
          loop={true} // infinite loop
          freeMode={{ 
            enabled: true, 
            momentum: false // disables snapping/momentum
          }}
          speed={4000} // scroll speed
          autoplay={{
            delay: 0, // continuous movement
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          allowTouchMove={false}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 30 },
            768: { slidesPerView: 3, spaceBetween: 40 },
            1024: { slidesPerView: 5, spaceBetween: 50 },
          }}
          className="brand-swiper !py-10"
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center h-20">
                <img
                  src={logo}
                  alt="partner"
                  className="h-24 w-full object-contain transition duration-300"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}