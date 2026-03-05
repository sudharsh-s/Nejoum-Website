import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import EmojiTransportationIcon from '@mui/icons-material/EmojiTransportation';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

const awards = [
  {
    title: "Vehicle Receiving & Documentation",
    desc: "Accurate vehicle receiving and documentation to ensure smooth logistics and traceability.",
    icon: DirectionsCarIcon,
  },
  {
    title: "Car storage",
    desc: "Secure and flexible storage solution for short or long-term periods.",
    icon: EmojiTransportationIcon,
  },
  {
    title: "Vehicle Transport and Transshipment",
    desc: "Optimal transshipment facilities and transit to EU destinations.",
    icon: LocalShippingIcon,
  },
  {
    title: "Pre & Post-Delivery Inspection (PDI) Services",
    desc: "From washing and installing navigation systems to software updates, we take care of everything from A to Z.",
    icon: DocumentScannerIcon,
  },
  {
    title: "Long Term Storage Maintenance (LTSM)",
    desc: "For long-term storage: tire pressure, battery status, and cleaning in top condition.",
    icon: WarehouseIcon,
  },
  {
    title: "Final Delivery",
    desc: "Efficient last-mile vehicle delivery with careful handling and professional coordination.",
    icon: ThumbUpAltIcon,
  },
];

const AwardsSection = () => {
  return (
    <section className="relative pt-16 pb-20 bg-[#f7f7f7] overflow-hidden">

      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="flex justify-center items-end mb-14">
          <div>
            {/* <p className="text-md text-primary mb-4 font-medium">
              ● Awards & Recognition
            </p> */}
            <h2 className="text-4xl lg:text-[40px] font-bold leading-tight">
              Our Vehicle Care & Transport Process
            </h2>
          </div>

          {/* Custom Nav Buttons */}
          {/* <div className="hidden md:flex">
            <div className="swiper-button-prev !static cursor-pointer">
              <ArrowBackIosNewIcon className="text-black !w-7 !h-7" />
            </div>
            <div className="swiper-button-next !static cursor-pointer">
              <ArrowForwardIosIcon className="text-black !w-7 !h-7" />
            </div>
          </div> */}
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          slidesPerView={3}
          breakpoints={{
            0: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {awards.map((item, index) => {
            const Icon = item.icon;

            return (
              <SwiperSlide key={index} className="!h-auto flex">
                <div className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-lg transition-all duration-500 h-full flex flex-col w-full mb-5">

                  <div className="flex justify-between items-center mb-7">
                    <div className="w-16 h-16 rounded-full border border-primary flex items-center justify-center text-primary">
                      <Icon className="!w-8 !h-8" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>

                  <p className="text-gray-500 flex-grow">{item.desc}</p>

                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

      </div>
    </section>
  );
};

export default AwardsSection;