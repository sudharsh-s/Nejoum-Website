import { motion } from "framer-motion";
import worldMap from "@/assets/world-map.png";
import containers from "@/assets/request-containers.png";
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { isRTL } from "@/i18n";

import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const RequestQuote = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const rtl = isRTL(i18n.language);

  return (
    <section className="relative py-12 md:py-24 bg-[#0b3574] text-white scroll-mt-28">

      {/* Background Map */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-10"
        style={{ backgroundImage: `url(${worldMap})` }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-md text-secondary mb-4 font-medium">
            ● ● {t("requestQuote.badge")}
          </p>

          <h2 className="text-[27px] lg:text-[40px] font-bold leading-tight mb-6">
            {t("requestQuote.titleLine1")}{" "}
            <span className="text-secondary relative inline-block">
              {t("requestQuote.titleHighlight")}
              <span className="absolute left-0 bottom-1 w-full h-1 bg-secondary -z-10"></span>
            </span>
          </h2>

          <ul className="space-y-4 text-white/80">
            {(t("requestQuote.features", { returnObjects: true }) as string[]).map(
              (item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-secondary">➤</span>
                  {item}
                </motion.li>
              )
            )}
          </ul>

          <Link to="/contact" className="mt-8 bg-secondary hover:bg-yellow-500 px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-2 transition">
            {t("requestQuote.cta")} <ArrowOutwardIcon fontSize="small" />
          </Link>
        </motion.div>

        {/* RIGHT FORM CARD */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className={`
            bg-white text-black p-5 md:p-10 rounded-xl md:rounded-b-xl shadow-2xl
            static lg:absolute ${rtl ? "lg:left-0" : "lg:right-0"} bottom-[20px]
            w-full lg:w-1/2 my-4 lg:my-0
          `}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-black">
            {t("requestQuote.form.title")}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <input className="border rounded-md py-2 px-2.5" placeholder={t("requestQuote.form.name")} />
            <input className="border rounded-md py-2 px-2.5" placeholder={t("requestQuote.form.email")} />
            <input className="border rounded-md py-2 px-2.5" placeholder={t("requestQuote.form.phone")} />
            <input className="border rounded-md py-2 px-2.5" placeholder={t("requestQuote.form.city")} />
            <input className="border rounded-md py-2 px-2.5" placeholder={t("requestQuote.form.state")} />
            <input className="border rounded-md py-2 px-2.5" placeholder={t("requestQuote.form.destination")} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <select className="border rounded-md py-2 px-2.5">
              <option>{t("requestQuote.form.freightType")}</option>
            </select>
          </div>

          <div className="flex justify-end">
            <button className="mt-10 bg-black text-white py-3 px-5 rounded-lg font-semibold transition">
              {t("requestQuote.form.submit")} <ArrowOutwardIcon fontSize="small" />
            </button>
          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default RequestQuote;