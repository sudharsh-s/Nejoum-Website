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
import { useTranslation } from "react-i18next";
import { isRTL } from "@/i18n";

type AwardItem = {
  title: string;
  desc: string;
};

const awardIcons = [
  DirectionsCarIcon,
  EmojiTransportationIcon,
  LocalShippingIcon,
  DocumentScannerIcon,
  WarehouseIcon,
  ThumbUpAltIcon,
];

const AwardsSection = () => {
  const { t, i18n } = useTranslation();
  const rtl = isRTL(i18n.language);

  const awards = t("awardsSection.items", {
    returnObjects: true,
  }) as AwardItem[];

  return (
    <section className="relative pt-12 md:pt-16 pb-16 md:pb-20 bg-[#f7f7f7] overflow-hidden">

      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="block md:flex justify-between items-end mb-8 md:mb-14">
          <div>
            {/* <p className="text-md text-primary mb-4 font-medium">
              ● Awards & Recognition
            </p> */}
            <h2 className="text-[25px] md:text-[40px] font-bold leading-tight">
              {t("awardsSection.title")} <br />{t("awardsSection.title1")}
            </h2>
          </div>

          {/* Custom Nav Buttons */}
          <div className="flex mt-10 justify-end">
            <div className="swiper-button-prev !static cursor-pointer bg-primary rounded-full w-8 h-8 md:w-auto md:h-auto p-2 mr-3">
              <ArrowBackIosNewIcon className="text-white !w-3 !h-3 md:!w-5 md:!h-5" />
            </div>
            <div className="swiper-button-next !static cursor-pointer bg-primary rounded-full w-8 h-8 md:w-auto md:h-auto p-2">
              <ArrowForwardIosIcon className="text-white !w-3 !h-3 md:!w-5 md:!h-5" />
            </div>
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          key={rtl ? "rtl" : "ltr"}
          dir={rtl ? "rtl" : "ltr"}
          modules={[Navigation]}
          speed={600}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            disabledClass: "swiper-button-disabled",
          }}
          spaceBetween={30}
          slidesPerView={3}
          breakpoints={{
            0: { slidesPerView: 1.2, spaceBetween: 20 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
        >
          {awards.map((item, index) => {
            const Icon = awardIcons[index];

            return (
              <SwiperSlide key={index} className="!h-auto flex">
                <div className="bg-white rounded-3xl p-5 md:p-10 shadow-sm hover:shadow-lg transition-all duration-500 h-full flex flex-col w-full mb-5">

                  <div className="flex justify-between items-center mb-7">
                    <div className="w-14 md:w-16 h-14 md:h-16 rounded-full border border-primary flex items-center justify-center text-primary">
                      <Icon className="!w-8 !h-8" />
                    </div>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold mb-4">{item.title}</h3>

                  <p className="text-gray-500 flex-grow text-sm md:text-base">{item.desc}</p>

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