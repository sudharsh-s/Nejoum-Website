import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from 'react-router-dom';
import EastIcon from '@mui/icons-material/East';
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";

import iaaLogo from "@/assets/nejoum-iaa-logo.png";

export default function IAAMarketAlliance() {
  const { t } = useTranslation();
  return (
    <section className="pt-0 md:pt-2 pb-10 md:pb-28 iaaMartketing_sec">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-10 md:gap-16 iaaMartketing_grid">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-[27px] md:text-[35px] lg:md:text-[40px] font-extrabold text-black mb-3 iaaMartketing_tit">
            {t("iaaAlliance.title")}
          </h2>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8 iaaMartketing_copy">
            <Trans i18nKey="iaaAlliance.description" />{" "}
            <span className="text-primary font-semibold iaaMartketing_dis">
              {t("iaaAlliance.highlight")}
            </span>
          </p>

          {/* Button */}
          <a href="https://help.iaai.com/s/broker-info?language=en_US&varAccountId=0013g000007PwUcAAK" target="_blank" rel="noopener noreferrer"
            className="gradient-primary text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 inlineflex items-center gap-2 iaaMartketing_btn"
          >
            {t("iaaAlliance.button")}
            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: 6 }}
              transition={{ type: "tween", duration: 0.3 }}
              // Make sure the hover is detected on the arrow only
            >
              <EastIcon />
            </motion.span>
          </a>
        </motion.div>

        {/* RIGHT LOGOS */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-10"
        >

          <img
            src={iaaLogo}
            className="object-contain"
          />

        </motion.div>

      </div>
    </section>
  );
}