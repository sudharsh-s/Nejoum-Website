import { Link, useLocation } from "react-router-dom";
import { servicesData } from "@/data/services";
import { motion } from "framer-motion";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { useTranslation } from "react-i18next";
import { isRTL } from "@/i18n";

import img3 from "@/assets/services/service-sidebar.jpg";

export default function ServiceSidebar() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const rtl = isRTL(i18n.language);

  const location = useLocation();

  return (
    <div>
      <div className="bg-[#f3f3f3] p-5 rounded-xl">

        <h3 className="text-xl md:text-2xl font-bold mb-6">
          {t("serviceSidebar.title")}
        </h3>

        <div className="space-y-6">

          {servicesData.map((service) => {
            const isActive = location.pathname === `/services/${service.slug}`;

            return (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                state={{ fromSidebar: true }}
              >
                <motion.div
                  whileHover={{ x: rtl ? -6 : 6 }}
                  transition={{ duration: 0.3 }}
                  className={`relative flex items-center justify-between h-14 overflow-hidden mb-4 transition-all duration-300 rounded-lg
                    ${
                      isActive
                        ? "bg-primary text-white shadow-lg"
                        : "bg-white text-primary"
                    }`}
                >
                  <span
                    className={`font-medium text-sm md:text-base ${
                      rtl ? "pr-5 text-right" : "pl-5 text-left"
                    }`}
                  >
                    {t(service.titleKey)}
                  </span>

                  <div className="relative w-16 h-full flex items-center justify-center">
                    <span className={`text-lg ${isActive ? "text-white" : "text-primary"}`}>
                      {rtl ? "←" : "→"}
                    </span>
                  </div>
                </motion.div>
              </Link>
            );
          })}

        </div>
      </div>

      <div className="my-10 flex items-center justify-center">

        <div className="relative bg-primary w-[420px] overflow-hidden pb-14">

          <div className="w-full h-[300px] overflow-hidden rounded-br-[500px] rounded-bl-[500px] border-b-[10px] border-white">
            <img src={img3} 
                className="w-full h-full object-cover" />
          </div>

          <div className="text-center px-8 py-7">
            <h2 className="text-white text-2xl md:text-3xl font-bold leading-snug">
              {t("serviceSidebar.cta.heading")}
            </h2>
            <p className="text-white mt-3 text-sm">{t("serviceSidebar.cta.desc")}</p>
          </div>

          <div className="flex justify-center mt-2">
            <Link to="/contact" className="bg-white text-black px-5 py-3 rounded-md flex items-center gap-3 font-medium hover:bg-gray-200 transition">
              {t("serviceSidebar.cta.button")}
              <ArrowOutwardIcon />
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}