import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const awards = [
  {
    year: "2025",
    title: "Best 3PL Provider",
    desc: "For outstanding service, innovation, and customer satisfaction",
    org: "Logistics Excellence Awards",
  },
  {
    year: "2024",
    title: "Top Supply Chain Innovator",
    desc: "For implementing cutting-edge technology that streamlines fulfillment operations.",
    org: "Global Logistics Magazine",
  },
  {
    year: "2025",
    title: "Sustainability in Logistics Award",
    desc: "Reducing our carbon footprint through eco-friendly shipping practices.",
    org: "Green Transport Network",
  },
  {
    year: "2024",
    title: "Top Supply Chain Innovator",
    desc: "For implementing cutting-edge technology that streamlines fulfillment operations.",
    org: "Global Logistics Magazine",
  },
  {
    year: "2025",
    title: "Sustainability in Logistics Award",
    desc: "Reducing our carbon footprint through eco-friendly shipping practices.",
    org: "Green Transport Network",
  },
];

const AwardsSection = () => {
  return (
    <section className="relative py-24 bg-[#f7f7f7] overflow-hidden">

      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="flex justify-between items-end mb-14">
          <div>
            <p className="text-md text-primary mb-4 font-medium">
              ● Awards & Recognition
            </p>
            <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
              Solutions to Keep <br /> Your Business Moving
            </h2>
          </div>

          {/* Custom Nav Buttons */}
          <div className="hidden md:flex gap-4">
            <div className="swiper-button-prev !static !w-10 !h-10 bg-white rounded-full shadow-md flex items-center justify-center cursor-pointer"></div>
            <div className="swiper-button-next !static !w-10 !h-10 bg-white rounded-full shadow-md flex items-center justify-center cursor-pointer"></div>
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          spaceBetween={30}
          slidesPerView={3}
          breakpoints={{
            0: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {awards.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-lg transition-all duration-500 h-full">

                {/* Year Badge */}
                <div className="flex justify-between items-center mb-10">
                  <div className="w-16 h-16 rounded-full border flex items-center justify-center text-orange-500 text-xl font-bold">
                    ⬢
                  </div>

                  <span className="bg-gray-100 px-4 py-2 rounded-xl text-sm text-gray-600">
                    {item.year}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 mb-10">
                  {item.desc}
                </p>

                <div className="border-t pt-6 text-gray-700 font-medium">
                  {item.org}
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default AwardsSection;